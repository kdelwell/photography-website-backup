import LayoutNoPricing from '@/components/LayoutNoPricing'
import Image from 'next/image'
import Script from 'next/script'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export default function Rice({ frontmatter, content }: { frontmatter: any; content: string }) {
  return (
    <LayoutNoPricing title={frontmatter.title} description={frontmatter.description}>
      <div className="w-full">
        {/* Page Title */}
        <div className="text-center mt-5 mb-1 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Please choose a time from the schedule below.
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

        {/* Second Image - Rice */}
        <div className="flex justify-center px-4 py-3">
          <img
            src="/images/groups/Rice.jpg"
            alt="Rice Event"
            width="175"
            height="130"
            className="object-contain"
          />
        </div>

        {/* Office Schedule Text */}
        <div className="text-center px-4 py-3">
          <p className="text-lg text-gray-700">
            Manassas office is on the 18th and Richmond office is on the 20th.
          </p>
        </div>

        {/* Embedded Form */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ minHeight: '600px' }}>
            <iframe
              src="https://GetaHeadShot.17hats.com/p#/scheduling/cckdstzstshbknfnnrzgpgzznhwznckk?embed=true&tp=false&hide_desc=false"
              style={{ margin: '20px', width: '100%', border: 'none' }}
              id="hats_scheduler"
              title="Rice Booking Form"
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
  const filePath = path.join(process.cwd(), 'content', 'rice.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}
