import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const TimeArticle = () => {
  return (
    <Layout
      title="The Sands of Time - Get Ahead Shot"
      description="Time is a relentless force, etching its mark on all of us. Learn why updating your professional photos regularly is essential in our ever-changing world."
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
              <span>December 15, 2023</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
              <span className="mx-2">•</span>
              <span>Kevin Elwell</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Sands of Time
            </h1>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-12 rounded-lg overflow-hidden">
            <Image
              src="/images/Articles/Time.webp"
              alt="The passage of time in photography - Professional headshot evolution and updating your image"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light">
              Time is a relentless force, etching its mark on all of us. These snapshots I've captured over the years of my two boys, Jacob and Zachary, serve as poignant reminders of this immutable truth. Witnessing their dramatic transformations over the past five years is a testament to the inexorable passage of time—a journey that promises to reshape their appearances in the years to come.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              It's a profound realization—one that underscores the essence of why we wield our cameras: to freeze those fleeting moments in the amber of memory. Photography becomes our tool against the ephemeral nature of existence, allowing us to capture and preserve the beauty of each passing moment before it's lost forever to the currents of time.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              But it's not just our children who undergo these metamorphoses; we, too, are subject to the ever-evolving hand of time. This is why I advocate for the regular updating of one's profile picture, even in adulthood. Our visages undergo remarkable changes—wrinkles etch themselves upon our skin, strands of gray interlace with our hair (or, in some cases, leave it entirely), and our bodies bear the imprints of weight fluctuations.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              These transformations are not mere trifles to be ignored; they are the footprints of time, tracing our individual narratives. Each line, each change, tells a story of experiences lived, challenges overcome, and wisdom gained. To honor these changes is to honor our journey through life itself.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In a world that thrives on immediacy and constant connectivity, it's crucial to present an authentic reflection of oneself—a portrayal that speaks to who we are in the present, not who we once were. A profile picture serves as a digital introduction to the world—an invitation for others to glimpse into our lives. It should encapsulate our essence, our identity in this moment—a visual manifesto that declares, "This is who I am."
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              For to cling stubbornly to outdated representations is to deny the fluidity of existence, to remain tethered to a past that no longer aligns with our present reality. Embracing the inevitability of change, we relinquish the illusion of permanence. And in doing so, we embrace the beauty of evolution—the ceaseless dance of life, captured one frame at a time.
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
          <div className="bg-amber-50 rounded-lg p-8 mt-12 text-center border border-amber-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Update Your Professional Image?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Don't let time pass you by with outdated photos. Let's create current, authentic headshots that reflect who you are today.
            </p>
            <a
              href="/more_info"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-200 inline-flex items-center"
            >
              Capture Your Current Self
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
                href="/articles/heads"
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Off With Their Head!</h4>
                <p className="text-gray-600 text-sm">Learn about the deliberate art of cropping and why tight framing creates more powerful portraits.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default TimeArticle