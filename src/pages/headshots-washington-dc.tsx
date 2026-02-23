import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import MainGallery from '@/components/MainGallery'
import HeadshotProcess from '@/components/HeadshotProcess'
import HeadshotReviews from '@/components/HeadshotReviews'
import BeforeAfter from '@/components/BeforeAfter'
import PricingCTA from '@/components/PricingCTA'

export default function HeadshotsWashingtonDC() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do professional headshots cost in Washington DC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional headshot sessions in Washington DC typically range from $350-$700 depending on the package, number of looks, and turnaround time. At Get Ahead Shot Photography, we offer competitive pricing with same-day turnaround options available."
        }
      },
      {
        "@type": "Question",
        "name": "What should I wear for professional headshots in DC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For professional headshots in Washington DC, wear solid colors that complement your skin tone, avoid busy patterns, and bring 2-3 outfit options. Business professional attire works best for corporate headshots. We provide guidance before your session."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer on-location headshot photography in Washington DC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We bring our professional studio setup to your location anywhere in the Washington DC metro area, including Arlington, Alexandria, Bethesda, and Silver Spring. This is ideal for corporate teams and group headshots."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a headshot session take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Individual headshot sessions typically take 30-45 minutes. This includes time for multiple looks, different backgrounds, and our unique instant feedback process to ensure you love your final images."
        }
      },
      {
        "@type": "Question",
        "name": "When will I receive my headshots?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard turnaround is 48-72 hours. Same-day delivery is available for rush orders. All images are professionally edited and color-corrected to magazine-quality standards."
        }
      }
    ]
  };

  return (
    <Layout
      title="Professional Headshots Washington DC | #1 Rated Headshot Photographer Near Me"
      description="Looking for professional headshots in Washington DC? Get Ahead Shot Photography specializes in executive headshots, corporate portraits, and LinkedIn photos. Serving DC, Arlington, Alexandria, Bethesda. Book today!"
    >
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Professional Headshots in Washington DC
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto">
              Magazine-Quality Headshot Photography for Professionals, Executives, and Entrepreneurs in the DC Metro Area
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/more_info"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Get Pricing & Book Now
              </a>
              <a
                href="#portfolio"
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location-Specific Content */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Washington DC's Premier Headshot Photographer
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Looking for professional headshots near you in Washington DC? You've found the right photographer.
                With over 10 years of experience, we specialize in creating authentic, magazine-quality headshots
                for professionals throughout the DC metro area.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Whether you're in <strong>Downtown DC</strong>, <strong>Georgetown</strong>, <strong>Capitol Hill</strong>,
                <strong> Dupont Circle</strong>, or anywhere in the surrounding areas including <strong>Arlington</strong>,
                <strong> Alexandria</strong>, <strong>Bethesda</strong>, and <strong>Silver Spring</strong>, we bring
                our professional studio to you.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Perfect For:
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>LinkedIn Headshots</strong> - Stand out to recruiters and connections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Corporate Headshots</strong> - Professional team photography</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Executive Portraits</strong> - C-suite and senior leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Real Estate Agents</strong> - Build trust with potential clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Lawyers & Consultants</strong> - Professional credibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Actors & Models</strong> - Headshots that book jobs</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/Kevin_about.jpg"
                alt="Professional headshot photographer Kevin Elwell in Washington DC studio"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="bg-gray-50">
        <div className="py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            Professional Headshots Portfolio - Washington DC
          </h2>
          <MainGallery />
        </div>
      </section>

      {/* Our Process */}
      <HeadshotProcess />

      {/* Before & After */}
      <BeforeAfter />

      {/* Service Areas */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Serving the Washington DC Metro Area
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Washington DC',
              'Arlington, VA',
              'Alexandria, VA',
              'Bethesda, MD',
              'Silver Spring, MD',
              'Rockville, MD',
              'Falls Church, VA',
              'McLean, VA',
              'Georgetown',
              'Capitol Hill',
              'Dupont Circle',
              'Downtown DC',
              'Navy Yard',
              'Logan Circle',
              'Adams Morgan',
              'Foggy Bottom'
            ].map((location) => (
              <div
                key={location}
                className="bg-gray-50 p-4 rounded-lg text-center hover:bg-red-50 transition-colors"
              >
                <p className="text-gray-800 font-medium">{location}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            See our dedicated pages for{' '}
            <a href="/headshots-northern-virginia" className="text-red-500 hover:text-red-600 font-semibold">Northern Virginia</a>,{' '}
            <a href="/headshots-arlington-va" className="text-red-500 hover:text-red-600 font-semibold">Arlington</a>,{' '}
            <a href="/headshots-tysons-corner-va" className="text-red-500 hover:text-red-600 font-semibold">Tysons Corner</a>,{' '}
            <a href="/headshots-bethesda-md" className="text-red-500 hover:text-red-600 font-semibold">Bethesda</a>,{' '}
            <a href="/headshots-alexandria-va" className="text-red-500 hover:text-red-600 font-semibold">Alexandria</a>,{' '}
            <a href="/headshots-fairfax-va" className="text-red-500 hover:text-red-600 font-semibold">Fairfax</a>, and{' '}
            <a href="/headshots-reston-va" className="text-red-500 hover:text-red-600 font-semibold">Reston</a>.{' '}
            Looking for <a href="/linkedin-headshots" className="text-red-500 hover:text-red-600 font-semibold">LinkedIn headshots</a>?{' '}
            Don't see your area? <a href="/contact" className="text-red-500 hover:text-red-600 font-semibold">Contact us</a>.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <HeadshotReviews />

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How much do professional headshots cost in Washington DC?
              </h3>
              <p className="text-gray-700">
                Professional headshot sessions in Washington DC typically range from $350-$700 depending on the package,
                number of looks, and turnaround time. At Get Ahead Shot Photography, we offer competitive pricing with
                same-day turnaround options available. <a href="/more_info" className="text-red-500 hover:text-red-600">Get detailed pricing →</a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What should I wear for professional headshots in DC?
              </h3>
              <p className="text-gray-700">
                For professional headshots in Washington DC, wear solid colors that complement your skin tone, avoid busy
                patterns, and bring 2-3 outfit options. Business professional attire works best for corporate headshots.
                We provide detailed preparation guidance before your session.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you offer on-location headshot photography in Washington DC?
              </h3>
              <p className="text-gray-700">
                Yes! We bring our professional studio setup to your location anywhere in the Washington DC metro area,
                including Arlington, Alexandria, Bethesda, and Silver Spring. This is ideal for corporate teams and group headshots.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How long does a headshot session take?
              </h3>
              <p className="text-gray-700">
                Individual headshot sessions typically take 30-45 minutes. This includes time for multiple looks, different
                backgrounds, and our unique instant feedback process to ensure you love your final images.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                When will I receive my headshots?
              </h3>
              <p className="text-gray-700">
                Standard turnaround is 48-72 hours. Same-day delivery is available for rush orders. All images are
                professionally edited and color-corrected to magazine-quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <PricingCTA />

      {/* Local SEO Content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Get Ahead Shot Photography for Your DC Headshots?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              In Washington DC's competitive professional landscape, your headshot is often your first impression.
              Whether you're a lobbyist on K Street, a consultant in Dupont Circle, a lawyer on Capitol Hill, or
              an executive in Rosslyn, your professional image matters.
            </p>
            <p>
              We've photographed thousands of professionals across the DC metro area, from nonprofit leaders to
              Fortune 500 executives. Our process combines technical expertise with a relaxed, confidence-building
              approach that brings out authentic expressions—no stiff, corporate poses here.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              What Makes Us Different?
            </h3>
            <ul className="space-y-2">
              <li><strong>Instant Feedback System:</strong> See your images in real-time and know you love them before leaving</li>
              <li><strong>10+ Years DC Experience:</strong> We understand the professional standards of the DMV area</li>
              <li><strong>Studio or On-Location:</strong> We come to you or photograph at our professional studio</li>
              <li><strong>Fast Turnaround:</strong> Same-day options available for urgent needs</li>
              <li><strong>Magazine-Quality Results:</strong> Professional editing and retouching on every image</li>
            </ul>
            <p className="mt-6">
              Ready to upgrade your professional image? <a href="/more_info" className="text-red-500 hover:text-red-600 font-semibold">Get pricing and book your session today</a>.
            </p>
          </div>
        </div>
      </section>

    </Layout>
  )
}
