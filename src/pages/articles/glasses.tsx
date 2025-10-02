import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const GlassesArticle = () => {
  return (
    <Layout
      title="Glasses or No Glasses? - Get Ahead Shot"
      description="When it comes to the age-old question of whether to wear glasses for a photoshoot, there are a few factors to consider. Learn how to make the right choice for your headshots."
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
              <span>December 28, 2023</span>
              <span className="mx-2">•</span>
              <span>4 min read</span>
              <span className="mx-2">•</span>
              <span>Kevin Elwell</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Glasses or No Glasses?
            </h1>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-12 rounded-lg overflow-hidden">
            <Image
              src="/images/Articles/Glasses.webp"
              alt="Glasses in photography - Professional headshot considerations for eyewear"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light">
              When it comes to the age-old question of whether to wear glasses for a photoshoot, there are a few factors to consider. The decision ultimately depends on your personal brand, comfort level, and the image you want to project.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Firstly, if you're known for wearing glasses, there's no reason to shy away from them during the shoot. In fact, it's advisable to keep them on. We can easily adjust the lighting to minimize glare, and if necessary, any glare can be digitally removed from the final images. If you have multiple pairs that reflect different facets of your personality, feel free to bring them along; I'm happy to capture various looks to suit your style.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              However, if you're on the fence about it, there's a general guideline to keep in mind. In many cases, opting to go without glasses can enhance your overall appearance. Take cues from politicians, actors, and other public figures who often forego their glasses during public appearances. This isn't because glasses are inherently unflattering, but rather because revealing your eyes can establish a stronger connection with your audience.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Glasses, while functional and stylish, can sometimes obscure that "window to the soul." Your eyes are one of the most expressive features in a portrait, and removing potential barriers—even stylish ones—can help create a more direct and engaging connection with viewers. This is particularly important in professional headshots where building trust and rapport is essential.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              That being said, if your glasses are an integral part of your personal brand or identity, don't feel pressured to part with them. If you're known for your signature frames or they're simply a non-negotiable part of your everyday look, by all means, keep them on for the shoot. Authenticity is key in photography, and staying true to yourself will ensure that your images resonate with your audience. Whether you're rocking your glasses or opting for a more natural look, the goal is to capture your unique essence in every frame.
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
          <div className="bg-green-50 rounded-lg p-8 mt-12 text-center border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready for Your Perfect Headshot?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you choose glasses or go without, let's create professional headshots that authentically represent you and connect with your audience.
            </p>
            <a
              href="/more_info"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-200 inline-flex items-center"
            >
              Book Your Session
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
                href="/articles/face"
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Which Side of My Face is Better?</h4>
                <p className="text-gray-600 text-sm">Discover the science behind facial symmetry and how to present your best angle in professional headshots.</p>
              </Link>
              <Link
                href="/articles/expression"
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Expression is the Currency of Photography</h4>
                <p className="text-gray-600 text-sm">Learn how authentic emotion and genuine connection create powerful portraits that resonate deeply.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default GlassesArticle