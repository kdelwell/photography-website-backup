# 🚀 Photography Website Deployment Guide

## Quick Deploy Steps

### First Time Setup:
1. **Login to Vercel:**
   ```bash
   cd "/Users/kdelwell/Documents/Kreative DEsigns/Website/hotsauce-dev-v7/photography-website"
   vercel login
   ```

2. **Deploy:**
   ```bash
   vercel
   ```
   - Answer prompts:
     - **Set up and deploy?** → Yes
     - **Which scope?** → Select your account  
     - **Link to existing project?** → No
     - **What's your project's name?** → Press Enter (uses photography-website)
     - **In which directory?** → Press Enter (uses current)
     - **Override settings?** → No

### Future Updates:
```bash
cd "/Users/kdelwell/Documents/Kreative DEsigns/Website/hotsauce-dev-v7/photography-website"
vercel --prod
```

## Alternative: GitHub Integration

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Photography website ready for deployment"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to https://vercel.com/dashboard
   - Click "Add New" → "Project"  
   - Connect your GitHub repo
   - Deploy automatically!

## 🎯 Your Website Includes:
- ✅ Beautiful parallax hero image
- ✅ Interactive story grid with hover/tap effects  
- ✅ Mobile-optimized layouts
- ✅ All your branding and images
- ✅ Professional photography content

## 📤 Sharing Your Site:
Once deployed, you'll get a URL like:
`https://photography-website-abc123.vercel.app`

Share this URL via:
- 📧 Email
- 💬 Text message  
- 🔗 Social media
- 📁 Dropbox link
- Any other method!

## 🔄 Updates:
- Make changes locally
- Run `vercel --prod` to update live site
- URL stays the same, content updates automatically