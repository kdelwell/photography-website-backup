/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Reduce memory usage by optimizing common imports
    optimizePackageImports: ['lucide-react'],
  },
  // Better error handling and memory management
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,      // Keep pages in memory for 1 minute
    pagesBufferLength: 5,           // Limit concurrent page compilation
  },
  // Image optimization for better performance
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year cache
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Compression and optimization
  compress: true,
  poweredByHeader: false,
  // 301 redirects for old WordPress URLs to preserve SEO authority
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/about-us/', destination: '/about', permanent: true },
      { source: '/headshot-photographer-centreville-va', destination: '/headshots-centreville-va', permanent: true },
      { source: '/headshot-photographer-centreville-va/', destination: '/headshots-centreville-va', permanent: true },
      { source: '/blog', destination: '/articles', permanent: true },
      { source: '/blog/', destination: '/articles', permanent: true },
      { source: '/blog/:slug', destination: '/articles', permanent: true },
      { source: '/portfolio', destination: '/', permanent: true },
      { source: '/portfolio/', destination: '/', permanent: true },
      { source: '/services', destination: '/linkedin-headshots', permanent: true },
      { source: '/services/', destination: '/linkedin-headshots', permanent: true },
      // Consolidated into /linkedin-headshots — same intent, single canonical
      { source: '/professional_individual_headshots', destination: '/linkedin-headshots', permanent: true },
      { source: '/professional_individual_headshots/', destination: '/linkedin-headshots', permanent: true },
      // StudiGo product page renamed to /special-events; old /events
      // scheduling stub also redirected to the new canonical
      { source: '/studiogo', destination: '/special-events', permanent: true },
      { source: '/studiogo/', destination: '/special-events', permanent: true },
      { source: '/events', destination: '/special-events', permanent: true },
      { source: '/events/', destination: '/special-events', permanent: true },
      { source: '/pricing-2', destination: '/pricing', permanent: true },
      { source: '/pricing-2/', destination: '/pricing', permanent: true },
      { source: '/corporate-headshots', destination: '/groups', permanent: true },
      { source: '/corporate-headshots/', destination: '/groups', permanent: true },
      { source: '/team-headshots', destination: '/groups', permanent: true },
      { source: '/team-headshots/', destination: '/groups', permanent: true },
      { source: '/gallery', destination: '/', permanent: true },
      { source: '/gallery/', destination: '/', permanent: true },
      { source: '/testimonials', destination: '/reviews', permanent: true },
      { source: '/testimonials/', destination: '/reviews', permanent: true },
      { source: '/faq', destination: '/faqs', permanent: true },
      { source: '/faq/', destination: '/faqs', permanent: true },
      { source: '/book', destination: '/schedule', permanent: true },
      { source: '/book/', destination: '/schedule', permanent: true },
      { source: '/book-now', destination: '/schedule', permanent: true },
      { source: '/book-now/', destination: '/schedule', permanent: true },
      // Consolidate duplicate consultation pages — /consult is canonical
      { source: '/consultation', destination: '/consult', permanent: true },
      { source: '/consultation/', destination: '/consult', permanent: true },
      // Old WordPress blog posts and pages from Search Console 404s
      { source: '/need-to-add-color-to-your-brand', destination: '/articles/color', permanent: true },
      { source: '/need-to-add-color-to-your-brand/', destination: '/articles/color', permanent: true },
      { source: '/hairandmakeup', destination: '/hair', permanent: true },
      { source: '/hairandmakeup/', destination: '/hair', permanent: true },
      { source: '/preparing-for-your-session', destination: '/prep', permanent: true },
      { source: '/preparing-for-your-session/', destination: '/prep', permanent: true },
      { source: '/close-crop-of-headshot', destination: '/articles/heads', permanent: true },
      { source: '/close-crop-of-headshot/', destination: '/articles/heads', permanent: true },
      { source: '/express', destination: '/schedule', permanent: true },
      { source: '/express/', destination: '/schedule', permanent: true },
      { source: '/corporate-headshots/groups', destination: '/groups', permanent: true },
      { source: '/corporate-headshots/groups/', destination: '/groups', permanent: true },
      { source: '/which-side-of-my-face-is-better', destination: '/articles/face', permanent: true },
      { source: '/which-side-of-my-face-is-better/', destination: '/articles/face', permanent: true },
      { source: '/author/:slug', destination: '/about', permanent: true },
    ]
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.17hats.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; frame-src 'self' https://*.17hats.com https://admin.getaheadshot.net; connect-src 'self' https://www.google-analytics.com https://admin.getaheadshot.net; media-src 'self';"
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig