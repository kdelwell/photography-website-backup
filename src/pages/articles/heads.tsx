import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const HeadsArticle = () => {
  return (
    <Layout
      title="Off With Their Head! - Get Ahead Shot"
      description="Why did you chop off the top of my head? Learn about the deliberate art of cropping in professional photography and why tight framing creates more powerful portraits."
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
              <span>December 20, 2023</span>
              <span className="mx-2">•</span>
              <span>6 min read</span>
              <span className="mx-2">•</span>
              <span>Kevin Elwell</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Off With Their Head!
            </h1>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-12 rounded-lg overflow-hidden">
            <Image
              src="/images/Articles/Heads.jpg"
              alt="Professional photography cropping techniques - Understanding framing in headshot photography"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light">
              "Why did you chop off the top of my head?" It's a question I encounter frequently when delivering images to my clients. Ironically, many of these same clients chose me as their photographer after seeing my website images—each one carefully composed with the top of their heads not fully visible. They didn't seem to notice at the time, and it's a phenomenon I find intriguing.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In my experience, this oversight occurs because the image isn't just a straightforward representation of them; rather, it's a crafted portrayal that emphasizes certain features and expressions. This selective framing is deliberate and serves a purpose. The art of photography isn't simply about documenting what's in front of the camera—it's about making conscious choices that enhance the story we're trying to tell.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you flip through a magazine today, you'll likely notice that this style of cropping is pervasive. Why? Because it brings the viewer closer to the subject, allowing for a more intimate view of facial details and expressions—the very elements that convey personality and character. The brain effortlessly fills in the missing information, and the absence of the top of the head often goes unnoticed.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When clients express confusion or concern about the crop, I often take the opportunity to show them the original, looser composition alongside the tighter one. Without fail, they gravitate towards the tighter crop, despite their initial reservations. Why? Because it captures a sense of intensity and focus that resonates more powerfully.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This phenomenon reveals something fascinating about human perception and visual preference. When we're presented with side-by-side comparisons, the tighter crop consistently wins because it creates a more immediate emotional connection. The viewer's attention is drawn directly to the eyes, the expression, and the subtle nuances of emotion that define the subject's character.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              In essence, by excluding the top of the head, we draw attention to what truly matters—the eyes, the expression, the essence of the individual. It's not about what's missing from the frame; it's about what's emphasized and amplified. And in the end, it's the impact of the image that speaks volumes, creating portraits that command attention and forge genuine connections with viewers.
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
          <div className="bg-purple-50 rounded-lg p-8 mt-12 text-center border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready for Impactful Professional Headshots?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's create powerful portraits that focus on what matters most—your expression, your presence, and your authentic professional image.
            </p>
            <a
              href="/more_info"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-200 inline-flex items-center"
            >
              Create Powerful Portraits
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
                href="/articles/face"
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

export default HeadsArticle