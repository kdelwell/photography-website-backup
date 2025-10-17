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
  return (
    <Layout title={frontmatter.title} description={frontmatter.description} hideMenu={true}>
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
            <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto" style={{ minHeight: '805px' }}>
              <iframe
                src="https://api.getaheadshot.net/widget/form/P3fiOKHq2PRWe6gDrAO4"
                style={{ width: '100%', height: '805px', border: 'none', borderRadius: '3px' }}
                id="inline-P3fiOKHq2PRWe6gDrAO4"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Web Capture Form"
                data-height="805"
                data-layout-iframe-id="inline-P3fiOKHq2PRWe6gDrAO4"
                data-form-id="P3fiOKHq2PRWe6gDrAO4"
                title="Web Capture Form"
                scrolling="no"
              />
            </div>
          </div>

          {/* Script for form */}
          <Script
            src="https://api.getaheadshot.net/js/form_embed.js"
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
