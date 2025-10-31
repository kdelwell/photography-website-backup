import LayoutNoPricing from '@/components/LayoutNoPricing'
import Image from 'next/image'
import Script from 'next/script'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export default function Events({ frontmatter, content }: { frontmatter: any; content: string }) {
  return (
    <LayoutNoPricing title={frontmatter.title} description={frontmatter.description}>
      <div className="w-full">
        {/* Page Title */}
        <div className="text-center mt-5 mb-1 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Please choose a time for your session below...
          </h1>
        </div>

        {/* First Image - Schedule */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="relative w-full aspect-[4/2] mt-5 mb-5">
            <Image
              src="/images/schedule.jpg"
              alt="Schedule Your Session"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Second Image - CNM */}
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="relative w-full aspect-[4/2] mt-0 mb-5">
            <Image
              src="/images/groups/CNM.jpg"
              alt="CNM Event"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Embedded Form */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ minHeight: '800px' }}>
            <iframe
              src="https://app.acuityscheduling.com/schedule.php?owner=18671686&owner=18671686&appointmentType=14836506"
              style={{ width: '100%', height: '800px', border: 'none' }}
              id="acuity_scheduler"
              title="Event Booking Form"
              allow="payment"
            />
          </div>
        </div>

        {/* Script for form */}
        <Script
          src="https://embed.acuityscheduling.com/js/embed.js"
          strategy="lazyOnload"
        />
      </div>
    </LayoutNoPricing>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'events.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}
