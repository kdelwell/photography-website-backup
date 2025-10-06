#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🖼️  Image Compression Script for Photography Website');
console.log('==================================================');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

// Check if ImageMagick is available
function checkImageMagick() {
  try {
    execSync('magick -version', { stdio: 'ignore' });
    return true;
  } catch {
    try {
      execSync('convert -version', { stdio: 'ignore' });
      return true;
    } catch {
      return false;
    }
  }
}

// Get all image files recursively
function getImageFiles(dir, extensions = ['.jpg', '.jpeg', '.png']) {
  let files = [];

  if (!fs.existsSync(dir)) {
    console.log(`Directory ${dir} does not exist`);
    return files;
  }

  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      files = files.concat(getImageFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.name.toLowerCase().endsWith(ext))) {
      files.push(fullPath);
    }
  }

  return files;
}

// Get file size in MB
function getFileSizeMB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

// Compress image using ImageMagick
function compressImage(filePath, quality = 85) {
  const backupPath = filePath + '.backup';
  const tempPath = filePath + '.temp';

  try {
    // Create backup
    fs.copyFileSync(filePath, backupPath);

    // Compress image
    const magickCommand = checkImageMagick() && execSync('which magick', { encoding: 'utf8' }).trim()
      ? 'magick'
      : 'convert';

    execSync(`${magickCommand} "${filePath}" -quality ${quality} -strip "${tempPath}"`, { stdio: 'ignore' });

    // Check if compression was successful and beneficial
    const originalSize = parseFloat(getFileSizeMB(filePath));
    const compressedSize = parseFloat(getFileSizeMB(tempPath));

    if (compressedSize < originalSize) {
      fs.renameSync(tempPath, filePath);
      fs.unlinkSync(backupPath);
      return { success: true, originalSize, compressedSize, saved: originalSize - compressedSize };
    } else {
      // Compressed file is not smaller, keep original
      fs.unlinkSync(tempPath);
      fs.unlinkSync(backupPath);
      return { success: false, reason: 'No size reduction' };
    }

  } catch (error) {
    // Restore from backup if exists
    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, filePath);
      fs.unlinkSync(backupPath);
    }
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
    return { success: false, reason: error.message };
  }
}

// Main execution
async function main() {
  if (!checkImageMagick()) {
    console.log('❌ ImageMagick not found. Please install it first:');
    console.log('   macOS: brew install imagemagick');
    console.log('   Ubuntu: sudo apt-get install imagemagick');
    console.log('   Windows: Download from https://imagemagick.org');
    process.exit(1);
  }

  console.log('✅ ImageMagick found, starting compression...\n');

  const imageFiles = getImageFiles(imagesDir);
  console.log(`Found ${imageFiles.length} image files\n`);

  let totalOriginalSize = 0;
  let totalCompressedSize = 0;
  let processedCount = 0;
  let skippedCount = 0;

  for (const filePath of imageFiles) {
    const relativePath = path.relative(imagesDir, filePath);
    const originalSize = parseFloat(getFileSizeMB(filePath));

    // Skip files that are already small (< 100KB)
    if (originalSize < 0.1) {
      console.log(`⏭️  Skipping ${relativePath} (${originalSize}MB - already small)`);
      skippedCount++;
      continue;
    }

    console.log(`🔄 Processing ${relativePath} (${originalSize}MB)...`);

    const result = compressImage(filePath, 85);

    if (result.success) {
      totalOriginalSize += result.originalSize;
      totalCompressedSize += result.compressedSize;
      processedCount++;
      console.log(`✅ Compressed ${relativePath}: ${result.originalSize}MB → ${result.compressedSize}MB (saved ${result.saved.toFixed(2)}MB)`);
    } else {
      console.log(`⚠️  Failed to compress ${relativePath}: ${result.reason}`);
      skippedCount++;
    }
  }

  console.log('\n📊 Compression Summary:');
  console.log(`   Files processed: ${processedCount}`);
  console.log(`   Files skipped: ${skippedCount}`);
  console.log(`   Total original size: ${totalOriginalSize.toFixed(2)}MB`);
  console.log(`   Total compressed size: ${totalCompressedSize.toFixed(2)}MB`);
  console.log(`   Total saved: ${(totalOriginalSize - totalCompressedSize).toFixed(2)}MB`);

  if (totalOriginalSize > 0) {
    const percentageSaved = ((totalOriginalSize - totalCompressedSize) / totalOriginalSize * 100).toFixed(1);
    console.log(`   Space saved: ${percentageSaved}%`);
  }

  console.log('\n🎉 Image compression complete!');
  console.log('💡 Next steps:');
  console.log('   1. Test your website to ensure images still look good');
  console.log('   2. Run "pnpm run build" to regenerate optimized images');
  console.log('   3. Deploy your changes');
}

if (require.main === module) {
  main().catch(console.error);
}