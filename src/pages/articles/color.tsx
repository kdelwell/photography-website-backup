import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const ColorArticle = () => {
  return (
    <Layout
      title="Need to Add Color to Your Brand? - Get Ahead Shot"
      description="Color is undeniably powerful. It possesses the ability to captivate the eye, commanding attention amidst the endless scroll of digital content. Learn how to harness color in photography."
    >
      <div className="min-h-screen bg-white">
        {/* Back to Articles */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/articles"
              className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to Articles
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Article Meta */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
              <span>January 10, 2024</span>
              <span className="mx-2">•</span>
              <span>4 min read</span>
              <span className="mx-2">•</span>
              <span>Kevin Elwell</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Need to Add Color to Your Brand?
            </h1>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-12 rounded-lg overflow-hidden">
            <Image
              src="/images/Articles/Color.jpg"
              alt="Color in Photography - Vibrant professional headshot showcasing creative color use"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light">
              Color is undeniably powerful. It possesses the ability to captivate the eye, commanding attention amidst the endless scroll of digital content. In my studio, I harness the creative potential of color to craft images that not only catch the eye but also leave a lasting impression.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              One of my favorite aspects of photography is the opportunity to play with color in innovative ways. Whether it's matching the hues of your logo or drawing inspiration from the tones in your brand palette, I love incorporating color creatively into my work. By pulling shades from your attire, your eyes, or even the natural coloring of your complexion, I strive to compose images that are not only visually striking but also authentically reflective of your personality and style.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The impact of color in photography is undeniable. It has the power to evoke emotion, convey meaning, and tell a story in ways that words alone cannot. When people encounter these vibrantly hued images, it's not uncommon for them to be momentarily transfixed, compelled to pause and admire the beauty before them. The reaction is often one of genuine surprise and delight, as viewers exclaim, "Wow, what a neat shot!"
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              In today's fast-paced digital landscape, where attention spans are fleeting and competition for engagement is fierce, having visuals that command attention is essential. If you're seeking imagery that cuts through the noise and stops the scroll in its tracks, look no further. Whether it's for personal branding, professional headshots, or creative projects, I'm here to help you make a bold statement with color. So, if you're ready to create images that demand attention and leave a lasting impression, don't hesitate to reach out. Let's collaborate to capture moments that are as vibrant and memorable as you are.
            </p>
          </div>

          {/* Author Bio */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex items-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src="/images/Kevin_about.jpg"
                  alt="Kevin Elwell, Professional Photographer"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Kevin Elwell</h4>
                <p className="text-gray-600">Washington DC's Premier Headshot & Portrait Photographer</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-8 mt-12 text-center border border-red-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Add Color to Your Brand?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's create vibrant, attention-grabbing headshots that reflect your personality and make your brand stand out in the digital crowd.
            </p>
            <a
              href="/more_info"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-200 inline-flex items-center"
            >
              Create Colorful Headshots
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/articles/expression"
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Expression is the Currency of Photography</h4>
                <p className="text-gray-600 text-sm">Discover how authentic emotion and genuine connection create powerful portraits that resonate deeply.</p>
              </Link>
              <Link
                href="/articles"
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Which Side of My Face is Better?</h4>
                <p className="text-gray-600 text-sm">Learn about facial symmetry and how to present your best angle in professional headshots.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default ColorArticle