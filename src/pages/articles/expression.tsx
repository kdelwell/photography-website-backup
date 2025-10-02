import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const ExpressionArticle = () => {
  return (
    <Layout
      title="Expression is the Currency of Photography - Get Ahead Shot"
      description="Expression is the heartbeat of portrait photography—a currency more valuable than any technical prowess or artistic finesse. Learn how authentic emotion transforms photography."
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
              <span>January 15, 2024</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
              <span className="mx-2">•</span>
              <span>Kevin Elwell</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Expression is the Currency of Photography
            </h1>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-12 rounded-lg overflow-hidden">
            <Image
              src="/images/Articles/Expression.jpeg"
              alt="Expression in Photography - Professional headshot showing authentic emotion"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light">
              Expression is the heartbeat of portrait photography—a currency more valuable than any technical prowess or artistic finesse. Mastery of light, camera technique, and composition are undoubtedly essential skills. However, without the ability to evoke genuine emotion and capture authentic moments, photographs risk falling flat, lacking the depth and soul that distinguishes great portraiture.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Connecting with a subject on a personal level can sometimes prove challenging, especially when faced with individuals who harbor a deep-seated aversion to being photographed. It's a scenario I encounter frequently—a client plagued by what I affectionately refer to as Picture Avoidance Syndrome. The refrain is all too familiar: "I'm not photogenic," and "I hate having my picture taken." Yet, it's precisely these individuals whose authentic expressions are most worth capturing.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Fortunately, I've honed both my technical skills behind the camera and my interpersonal skills, enabling me to navigate these challenges with finesse. Through a combination of empathy, patience, and a knack for putting people at ease, I strive to create an environment where my subjects can relax and reveal their true selves.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              It's a delicate dance—a process of coaxing and encouragement, of helping individuals forget the artificial constraints of the studio setting and embrace the moment and show real authenticity. More often than not, the result is a transformation—a genuine expression captured in pixels, reflecting the essence of the person that is before me.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The ultimate measure of success lies not only in the quality of the final image but also in the experience of the session itself. Time and again, clients emerge from our time together with a sense of surprise and satisfaction, remarking on how enjoyable the process was and how much better it was than they had anticipated. For me, this is the greatest reward—the knowledge that I've succeeded in delivering more than just a photograph, but rather a reflection of their true selves.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              In the end, my goal is simple: to create portraits that resonate deeply with my clients, that speak to their authenticity and individuality, and that capture the essence of who they truly are. Because in a world inundated with superficiality and fake looking AI images, there is value and integrity in images that reveal the real, unfiltered beauty of the human spirit.
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
          <div className="bg-gray-50 rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Capture Your Authentic Expression?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's create professional headshots that reveal the real, authentic you. Experience the difference that genuine connection and technical expertise can make.
            </p>
            <a
              href="/more_info"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-200 inline-flex items-center"
            >
              Schedule Your Session
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
                href="/articles"
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Which Side of My Face is Better?</h4>
                <p className="text-gray-600 text-sm">Discover the science behind facial symmetry and how to present your best angle in professional headshots.</p>
              </Link>
              <Link
                href="/articles"
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Glasses or No Glasses?</h4>
                <p className="text-gray-600 text-sm">Navigate the decision of whether to wear glasses in your professional headshot session.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default ExpressionArticle