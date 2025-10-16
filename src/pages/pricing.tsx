import LayoutNoPricing from '@/components/LayoutNoPricing'
import Image from 'next/image'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export default function Pricing({ frontmatter, content }: { frontmatter: any; content: string }) {
  return (
    <LayoutNoPricing title={frontmatter.title} description={frontmatter.description}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Pricing
          </h1>
        </div>

        {/* Pricing Image */}
        <div className="relative w-full aspect-[4/2] mt-5 mb-5">
          <Image
            src="/images/8_pricing.jpg"
            alt="Pricing Information"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Pricing Table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-300 rounded-lg overflow-hidden">
          {/* Individual Headshot Column */}
          <div className="bg-gray-300 text-gray-800 p-6 flex flex-col">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-center mb-0">Individual Headshot</h2>
              <p className="text-center text-gray-800 text-2xl font-bold mb-4">Session</p>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">$240</span>
                <span className="text-lg">/Session Fee plus</span>
                <br />
                <span className="text-lg">$245/image</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li>• Session time is not limited – we'll take as much time as you need to get the images you want.</li>
                <li>• You don't pay for images you haven't seen yet.</li>
                <li>• You'll have an incredible variety of images to choose from with different backgrounds, poses, outfits, and expressions.</li>
                <li>• I will use facial expression coaching to achieve an authentic expression – no fakes allowed.</li>
              </ul>
            </div>
            <div className="text-center">
              <a href="/schedule" className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold">
                Schedule Now
              </a>
            </div>
          </div>

          {/* In-Studio Small Groups Column */}
          <div className="bg-gray-100 p-6 flex flex-col">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-center mb-2">In-Studio Small Groups</h2>
              <p className="text-center text-gray-600 mb-4">Come to my studio with your group</p>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">$300</span>
                <span className="text-lg">/Session Fee/person</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li>• I host your small group at my location.</li>
                <li>• The initial booking is for $600 for a minimum of 2 people. Additional persons are $300 each.</li>
                <li>• Session Fee of $300/person includes one image. Additional images are $245/each.</li>
                <li>• You choose the background (white, black, gray, etc.).</li>
                <li>• You'll end up with consistent images – your company looks like a team!</li>
              </ul>
            </div>
            <div className="text-center">
              <a href="/schedule" className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold">
                Schedule Now
              </a>
            </div>
          </div>

          {/* On-Location Headshots Column */}
          <div className="bg-gray-300 text-gray-800 p-6 flex flex-col">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-center mb-2">On-Location Headshots</h2>
              <p className="text-center text-gray-600 mb-4">I bring my studio to your location</p>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">Call for Pricing</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li>• I bring my professional studio to your location and take headshots of your key people.</li>
                <li>• You choose the background (white, black, gray, colors, gradients, etc.).</li>
                <li>• I will coach the participants and pose to optimize their look.</li>
                <li>• You'll end up with consistent images – your company looks like a team!</li>
              </ul>
            </div>
            <div className="text-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutNoPricing>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'pricing.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}