import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const FaceArticle = () => {
  return (
    <Layout
      title="Which Side of My Face is Better? - Get Ahead Shot"
      description="The question of which side of the face is more flattering is a common inquiry during photography sessions. Learn about facial symmetry and presenting your best angle."
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
              <span>January 5, 2024</span>
              <span className="mx-2">•</span>
              <span>3 min read</span>
              <span className="mx-2">•</span>
              <span>Kevin Elwell</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Which Side of My Face is Better?
            </h1>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-12 rounded-lg overflow-hidden">
            <Image
              src="/images/Articles/Which_Side_Best.webp"
              alt="Facial symmetry in photography - Professional headshot showing optimal angles"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light">
              The question of which side of the face is more flattering is a common inquiry that arises during my photography sessions. There are patterns that emerge when considering human preferences and anatomy. Statistically, a majority of people tend to favor their left side when posing for photographs.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This preference isn't merely coincidence; it's rooted in psychological and physiological factors. Research suggests that the left side of the face is often perceived as more emotionally expressive, as it's controlled by the right hemisphere of the brain, which is associated with emotional processing. Additionally, most people are accustomed to seeing themselves in mirrors, where their left side appears on the right, making this angle feel more familiar and comfortable.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              However, individual facial structure plays a crucial role in determining the most flattering angle. Factors such as the shape of the eyes, the curve of the smile, the prominence of cheekbones, and even minor asymmetries can influence which side photographs better. Some people may have a slightly raised eyebrow on one side, a more pronounced dimple, or subtle differences in how their features align.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              During our sessions, I take the time to observe these nuances and work with each client to discover their most photogenic angles. This process involves subtle adjustments—a slight turn of the head, a gentle tilt, or positioning the lighting to enhance certain features while minimizing others. The goal is not to hide imperfections but to present each person in their most confident and appealing light.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              It's also worth noting that what looks best in a photograph may differ from what feels natural to the subject. Sometimes, the angle that produces the most striking image requires stepping outside one's comfort zone. This is where professional guidance becomes invaluable—helping clients trust the process and embrace angles they might not typically choose for themselves.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Ultimately, the "better" side of your face is the one that tells your story most effectively. Whether it's the left side with its emotional expressiveness, the right side with its composed confidence, or even a straight-on approach that commands attention, the best angle is the one that captures your authentic professional presence. In my experience, when clients feel comfortable and confident, both sides of their face can be equally compelling—it's simply a matter of finding the right light, angle, and moment to capture their best self.
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
          <div className="bg-blue-50 rounded-lg p-8 mt-12 text-center border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Discover Your Best Angle
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's work together to find your most flattering angles and create professional headshots that showcase your confidence and personality.
            </p>
            <a
              href="/more_info"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-200 inline-flex items-center"
            >
              Find Your Perfect Angle
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
                href="/articles/color"
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Need to Add Color to Your Brand?</h4>
                <p className="text-gray-600 text-sm">Learn how color can captivate the eye and create vibrant, attention-grabbing professional images.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default FaceArticle