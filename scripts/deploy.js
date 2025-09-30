#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📸 Photography Website Deployment Script');
console.log('==========================================\n');

// Check if we're in the right directory
const packagePath = path.join(process.cwd(), 'package.json');
if (!fs.existsSync(packagePath)) {
    console.error('❌ Error: package.json not found. Please run this from the photography-website directory.');
    process.exit(1);
}

const package = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
if (package.name !== 'photography-website') {
    console.error('❌ Error: Not in the photography-website directory.');
    process.exit(1);
}

try {
    console.log('🔍 Checking Vercel installation...');
    
    // Check if Vercel is installed
    try {
        execSync('vercel --version', { stdio: 'ignore' });
        console.log('✅ Vercel CLI found');
    } catch (error) {
        console.log('📦 Installing Vercel CLI...');
        execSync('npm install -g vercel', { stdio: 'inherit' });
        console.log('✅ Vercel CLI installed');
    }

    console.log('\n🛠️  Building project...');
    execSync('pnpm run build', { stdio: 'inherit' });
    console.log('✅ Build completed successfully');

    console.log('\n🚀 Deploying to Vercel...');
    console.log('Note: If this is your first deployment, you may need to log in.');
    
    // Deploy to Vercel
    const deployResult = execSync('vercel --prod --yes', { stdio: 'pipe', encoding: 'utf8' });
    
    // Extract URL from output
    const lines = deployResult.split('\n');
    const urlLine = lines.find(line => line.includes('https://'));
    
    if (urlLine) {
        const url = urlLine.trim();
        console.log('\n🎉 Deployment successful!');
        console.log('==========================================');
        console.log(`🌐 Your website is live at: ${url}`);
        console.log('==========================================\n');
        
        console.log('📋 Share this URL with others:');
        console.log(`   ${url}`);
        console.log('\n💡 Tips:');
        console.log('   • This URL is permanent and will update when you redeploy');
        console.log('   • Run "pnpm run deploy" anytime to update your site');
        console.log('   • Your images and content are included automatically\n');
        
        // Save URL to a file for reference
        fs.writeFileSync(path.join(process.cwd(), 'DEPLOYMENT_URL.txt'), 
            `Photography Website Live URL:\n${url}\n\nLast deployed: ${new Date().toISOString()}\n`
        );
        console.log('📝 URL saved to DEPLOYMENT_URL.txt for reference');
        
    } else {
        console.log('✅ Deployment completed! Check the output above for your URL.');
    }

} catch (error) {
    console.error('\n❌ Deployment failed:');
    
    if (error.message.includes('not valid') || error.message.includes('login')) {
        console.error('🔐 Authentication required. Please run:');
        console.error('   vercel login');
        console.error('   Then try deploying again with: pnpm run deploy');
    } else {
        console.error(error.message);
        console.error('\n💡 Troubleshooting:');
        console.error('   1. Make sure you have a Vercel account at https://vercel.com');
        console.error('   2. Run "vercel login" to authenticate');
        console.error('   3. Try running "pnpm run deploy" again');
    }
    
    process.exit(1);
}