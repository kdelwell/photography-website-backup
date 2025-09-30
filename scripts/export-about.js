const fs = require('fs');
const path = require('path');

// Create export directory
const exportDir = path.join(process.cwd(), 'export-about');
const imagesDir = path.join(exportDir, 'images');

// Create directories if they don't exist
if (!fs.existsSync(exportDir)) {
  fs.mkdirSync(exportDir, { recursive: true });
}
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// List of images to copy with their correct paths
const imagesToCopy = [
  { source: 'AboutMe/Roles.jpeg', dest: 'Roles.jpeg' },
  { source: 'AboutMe/Career.jpg', dest: 'Career.jpg' },
  { source: 'AboutMe/Cycling.jpg', dest: 'Cycling.jpg' },
  { source: 'AboutMe/Family.jpg', dest: 'Family.jpg' },
  { source: 'AboutMe/Photog.jpg', dest: 'Photog.jpg' },
  { source: 'Kevin_footer.jpg', dest: 'Kevin.jpg' }, // For footer
];

// Copy images
console.log('Copying images...');
imagesToCopy.forEach(image => {
  const sourcePath = path.join(process.cwd(), 'public', 'images', image.source);
  const destPath = path.join(imagesDir, image.dest);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${image.dest}`);
  } else {
    console.warn(`Warning: ${image.source} not found at ${sourcePath}`);
  }
});

// Generate HTML
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About - Professional Photography Services</title>
    <meta name="description" content="Learn more about Kevin Elwell, Washington DC's premier headshot photographer">
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        /* Header */
        .header {
            background: white;
            padding: 1rem 1.5rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        
        .header-content {
            max-width: 1280px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }
        
        .logo {
            font-size: 1.25rem;
            font-weight: 600;
            color: #111;
            text-decoration: none;
        }
        
        .nav-menu {
            display: flex;
            list-style: none;
            gap: 1.5rem;
            margin: 0;
            padding: 0;
        }
        
        .nav-menu a {
            color: #4a5568;
            text-decoration: none;
            font-size: 0.875rem;
            font-weight: 500;
            transition: color 0.2s;
        }
        
        .nav-menu a:hover {
            color: #111;
        }
        
        @media (max-width: 640px) {
            .header-content {
                flex-direction: column;
                gap: 1rem;
            }
            
            .nav-menu {
                gap: 1rem;
                font-size: 0.875rem;
            }
        }
        
        /* Hero Section */
        .hero {
            position: relative;
            height: 400px;
            overflow: hidden;
        }
        
        @media (min-width: 768px) {
            .hero {
                height: 1000px;
            }
        }
        
        @media (min-width: 1024px) {
            .hero {
                height: 1200px;
            }
        }
        
        .hero-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
        }
        
        .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding-top: 22%;
        }
        
        @media (min-width: 768px) {
            .hero-overlay {
                padding-top: 19%;
            }
        }
        
        .hero-title {
            color: white;
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            padding: 0 1rem;
            line-height: 1.2;
        }
        
        @media (min-width: 768px) {
            .hero-title {
                font-size: 2.5rem;
            }
        }
        
        @media (min-width: 1024px) {
            .hero-title {
                font-size: 3.5rem;
            }
        }
        
        @media (min-width: 1280px) {
            .hero-title {
                font-size: 4rem;
            }
        }
        
        /* Grid Section */
        .grid-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 0;
        }
        
        @media (min-width: 768px) {
            .grid-container {
                grid-template-columns: 1fr 1fr;
            }
        }
        
        .grid-item {
            position: relative;
            aspect-ratio: 4/3;
            overflow: hidden;
            cursor: pointer;
        }
        
        .grid-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
            transition: opacity 0.5s, filter 0.5s;
        }
        
        .grid-item:hover .grid-image {
            opacity: 0.3;
            filter: grayscale(80%);
        }
        
        .grid-text {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            opacity: 0;
            transition: opacity 0.5s;
            background: rgba(255, 255, 255, 0.95);
        }
        
        .grid-item:hover .grid-text {
            opacity: 1;
        }
        
        .grid-text p {
            text-align: center;
            font-family: Verdana, Geneva, sans-serif;
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.6;
            color: #333;
        }
        
        @media (min-width: 768px) {
            .grid-text p {
                font-size: 1.125rem;
            }
        }
        
        @media (min-width: 1024px) {
            .grid-text p {
                font-size: 1.25rem;
            }
        }
        
        /* Mobile Tap Indicator */
        .tap-indicator {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(0, 0, 0, 0.5);
            color: white;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            font-size: 0.75rem;
            display: none;
        }
        
        @media (max-width: 767px) {
            .tap-indicator {
                display: block;
            }
            
            .grid-item.active .grid-image {
                opacity: 0.3;
                filter: grayscale(80%);
            }
            
            .grid-item.active .grid-text {
                opacity: 1;
            }
            
            .grid-item.active .tap-indicator {
                opacity: 0;
            }
        }
        
        /* Footer */
        .footer {
            background: #111827;
            color: white;
            padding: 4rem 1.5rem 2rem;
        }
        
        .footer-content {
            max-width: 1280px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
        }
        
        @media (min-width: 768px) {
            .footer-content {
                grid-template-columns: 2fr 1fr 1fr;
                text-align: left;
                gap: 4rem;
            }
        }
        
        .footer-section h3 {
            margin-bottom: 1.5rem;
            font-size: 1.25rem;
            font-weight: 600;
            color: white;
        }
        
        .footer-section p {
            line-height: 1.8;
            color: #d1d5db;
            margin-bottom: 0.5rem;
        }
        
        .footer-section a {
            color: #d1d5db;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .footer-section a:hover {
            color: #f9fafb;
        }
        
        .footer-headshot {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 auto 1.5rem;
            border: 3px solid #374151;
        }
        
        @media (min-width: 768px) {
            .footer-headshot {
                margin: 0 0 1.5rem 0;
            }
        }
        
        .footer-about {
            max-width: 300px;
            margin: 0 auto;
        }
        
        @media (min-width: 768px) {
            .footer-about {
                margin: 0;
            }
        }
        
        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            margin-top: 3rem;
            border-top: 1px solid #374151;
            color: #9ca3af;
            font-size: 0.875rem;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="header-content">
            <a href="https://getaheadshot.net" class="logo">GetAHeadshot.net</a>
            <nav>
                <ul class="nav-menu">
                    <li><a href="https://getaheadshot.net">Home</a></li>
                    <li><a href="https://getaheadshot.net/about">About</a></li>
                    <li><a href="https://getaheadshot.net/groups">Groups</a></li>
                    <li><a href="https://getaheadshot.net/professionalpricing">Pricing</a></li>
                    <li><a href="https://getaheadshot.net/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <img src="images/Roles.jpeg" alt="Professional Photography Services" class="hero-image">
        <div class="hero-overlay">
            <h1 class="hero-title">
                Everything you always wanted to know<br>about your photographer
            </h1>
        </div>
    </section>

    <!-- Grid Section -->
    <section class="grid-container">
        <div class="grid-item" onclick="toggleCard(this)">
            <img src="images/Career.jpg" alt="Career Photography" class="grid-image">
            <div class="grid-text">
                <p>I'm on my third career after time in Aerospace and the Intelligence Community. I worked on the F-15, F-16, F-18, and F-22, then consulted at the NRO on satellite programs. Photography began as a side hustle but outpaced my day job, so I went full time. Now, I get to make people laugh and look great in front of my camera. It's a dream come true to run my own business—rewarding, creative, and challenging in all the right ways.</p>
            </div>
            <div class="tap-indicator">Tap to read</div>
        </div>

        <div class="grid-item" onclick="toggleCard(this)">
            <img src="images/Cycling.jpg" alt="Cycling Photography" class="grid-image">
            <div class="grid-text">
                <p>I've always had a thing for bikes. As a kid, it was a Schwinn Sting-Ray. In my thirties, I got into road bikes and set a goal to ride a century. After losing loved ones to cancer, I found the Pan Mass Challenge—a 200-mile ride to raise money for cancer research. After my dad passed from a rare cancer, the cause became personal. I rode 11 times and raised over $104,000 for Dana-Farber. The people, the purpose—it's one of the most meaningful things I've ever done.</p>
            </div>
            <div class="tap-indicator">Tap to read</div>
        </div>

        <div class="grid-item" onclick="toggleCard(this)">
            <img src="images/Family.jpg" alt="Family Photography" class="grid-image">
            <div class="grid-text">
                <p>I met my wife Adrienne over 20 years ago and knew right away she was the one. We married on New Year's Eve and later chose domestic adoption to grow our family. Our first son, Zachary, came from Ohio—he's on the Spectrum and a daily blessing. Jacob came from a local couple seeking a family with a brother like Zach. Now we're busy with high school, middle school, sports, and band. It's a full, joyful life, and being a Dad is the role I cherish most.</p>
            </div>
            <div class="tap-indicator">Tap to read</div>
        </div>

        <div class="grid-item" onclick="toggleCard(this)">
            <img src="images/Photog.jpg" alt="Professional Photography" class="grid-image">
            <div class="grid-text">
                <p>I've always been fascinated by cameras and how they work—from chemistry to electrons. I earned the photography merit badge as a scout but didn't buy my first real camera until my thirties. I found myself drawn to photos of people, which led to a passion for headshot photography. I now study under Peter Hurley, the best in the world, and launched my business in 2019. It has become a rewarding journey for both me and my family.</p>
            </div>
            <div class="tap-indicator">Tap to read</div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-about">
                    <img src="images/Kevin.jpg" alt="Kevin Elwell" class="footer-headshot">
                    <h3>Kevin Elwell</h3>
                    <p>Professional Headshot & Portrait Photographer</p>
                    <p>Serving the Washington DC Metropolitan Area</p>
                    <p style="margin-top: 1rem;">Creating authentic, professional images that help you build your network and present your best self.</p>
                </div>
            </div>
            
            <div class="footer-section">
                <h3>Quick Links</h3>
                <p><a href="https://getaheadshot.net">Home</a></p>
                <p><a href="https://getaheadshot.net/about">About</a></p>
                <p><a href="https://getaheadshot.net/groups">Groups</a></p>
                <p><a href="https://getaheadshot.net/professionalpricing">Pricing</a></p>
                <p><a href="https://getaheadshot.net/contact">Contact</a></p>
            </div>
            
            <div class="footer-section">
                <h3>Get In Touch</h3>
                <p>Ready for your headshot session?</p>
                <p>Email: <a href="mailto:kevin@getaheadshot.net">kevin@getaheadshot.net</a></p>
                <p style="margin-top: 1.5rem;">
                    <a href="#" style="margin-right: 1rem;">Facebook</a>
                    <a href="#" style="margin-right: 1rem;">Instagram</a>
                    <a href="#">LinkedIn</a>
                </p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 GetAHeadshot.net - Professional Photography Services. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Mobile tap functionality
        function toggleCard(element) {
            if (window.innerWidth <= 767) {
                // Remove active class from all other cards
                document.querySelectorAll('.grid-item').forEach(item => {
                    if (item !== element) {
                        item.classList.remove('active');
                    }
                });
                // Toggle active class on clicked card
                element.classList.toggle('active');
            }
        }
    </script>
</body>
</html>`;

// Write HTML file
const htmlPath = path.join(exportDir, 'about.html');
fs.writeFileSync(htmlPath, html);

console.log('\n✅ Export completed successfully!');
console.log('📁 Files exported to:', exportDir);
console.log('\nFiles created:');
console.log('  - about.html');
console.log('  - images/ (folder with all required images)');
console.log('\n📤 Upload instructions:');
console.log('1. Upload the entire "export-about" folder to your SiteGround hosting');
console.log('2. Access the page at: yourdomain.com/export-about/about.html');
console.log('3. Or rename about.html to index.html to access at: yourdomain.com/export-about/');