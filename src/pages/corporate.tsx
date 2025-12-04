import LayoutNoPricing from '@/components/LayoutNoPricing'
import Image from 'next/image'
import Script from 'next/script'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export default function Corporate({ frontmatter, content }: { frontmatter: any; content: string }) {
  return (
    <LayoutNoPricing title={frontmatter.title} description={frontmatter.description}>
      <div className="w-full">
        {/* Page Title */}
        <div className="text-center mt-5 mb-1 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Select a date and time for your session...
          </h1>
        </div>

        {/* Schedule Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="relative w-full aspect-[4/2] mt-5 mb-5">
            <Image
              src="/images/schedule.jpg"
              alt="Schedule Your Corporate Session"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Embedded Form */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ minHeight: '600px' }}>
            <iframe
              src="https://GetaHeadShot.17hats.com/p#/scheduling/hnzpzgpvzhxgnndvtcpcnkhgsrbswchz?embed=true&tp=false&hide_desc=false"
              style={{ width: '100%', border: 'none', overflow: 'hidden' }}
              scrolling="no"
              id="hats_scheduler"
            />
          </div>
        </div>

        {/* Script for form */}
        <Script
          src="https://GetaHeadShot.17hats.com/vendor/iframeSizer.min.js"
          strategy="lazyOnload"
        />
      </div>
    </LayoutNoPricing>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'corporate.md')
  let frontmatter = {
    title: 'Corporate Booking',
    description: 'Schedule your corporate headshot session with professional photography services.'
  }

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    frontmatter = { ...frontmatter, ...data }
  } catch (error) {
    // File doesn't exist, use defaults
  }

  return { props: { frontmatter, content: '' } }
}