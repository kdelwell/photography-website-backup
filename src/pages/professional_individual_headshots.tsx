import Layout from '@/components/Layout'
import Image from 'next/image'
import Script from 'next/script'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import MainGallery from '@/components/MainGallery'
import HeadshotProcess from '@/components/HeadshotProcess'
import HeadshotReviews from '@/components/HeadshotReviews'
import BeforeAfter from '@/components/BeforeAfter'

export default function ProfessionalIndividualHeadshots({ frontmatter, content }: { frontmatter: any; content: string }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://getaheadshot.net"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Professional Individual Headshots",
        "item": "https://getaheadshot.net/professional_individual_headshots"
      }
    ]
  };

  return (
    <Layout
      title="Professional Individual Headshots Washington DC | Corporate Photography"
      description="Professional headshot photography for individuals in Washington DC. Perfect for LinkedIn, corporate websites, and personal branding. Get magazine-quality results with same-day turnaround. Book your headshot session now!"
    >
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9PNL0CCN6V"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9PNL0CCN6V');
        `}
      </Script>

      {/* H1 Heading Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center leading-tight">
            Washington DC's Premier Headshot & Portrait Photographer for Professionals
          </h1>
        </div>
      </section>

      {/* Full Width Gallery Section */}
      <MainGallery />

      {/* Process Section */}
      <HeadshotProcess />

      {/* More Info Section */}
      <section className="bg-[#242424] py-8">
        <div className="w-full">
          {/* Page Title */}
          <div className="text-center mb-1 px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              More Info...
            </h2>
          </div>

          {/* Body Text */}
          <div className="text-center mb-8 px-4 mt-6">
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Thank you for your interest in my product and services. Please fill out this form and I'll link you to my pricing page. I'll also send you some more information regarding my offerings. This small step gets you that much closer to a headshot that says 'wow.'
            </p>
          </div>

          {/* Embedded Form */}
          <div className="w-full bg-white pt-8">
            <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto" style={{ minHeight: '600px' }}>
              <iframe
                name="lc_contact_form"
                src="https://GetaHeadShot.17hats.com/p#/embed/vhtnhdfkgghgzhwtbkcdpppvvzczxhft"
                style={{ width: '100%', height: '600px', border: 'none' }}
                id="lc_contact_form"
                title="Contact Form"
              />
            </div>
          </div>

          {/* Script for form */}
          <Script
            src="https://GetaHeadShot.17hats.com/vendor/iframeSizer.min.js"
            strategy="lazyOnload"
          />
        </div>
      </section>

      {/* Reviews Section */}
      <HeadshotReviews />

      {/* Transformations Gallery Section */}
      <BeforeAfter />

    </Layout>
  )
}

export async function getStaticProps() {
  let frontmatter = {
    title: 'Professional Individual Headshots',
    description: 'Washington DC\'s Premier Headshot & Portrait Photographer for Professionals'
  }

  try {
    const filePath = path.join(process.cwd(), 'content', 'professional_individual_headshots.md')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    frontmatter = { ...frontmatter, ...data }
    return { props: { frontmatter, content } }
  } catch (error) {
    // File doesn't exist, use defaults
    return { props: { frontmatter, content: '' } }
  }
}
