import Layout from '@/components/Layout'
import Image from 'next/image'
import MainGallery from '@/components/MainGallery'
import HeadshotProcess from '@/components/HeadshotProcess'
import HeadshotReviews from '@/components/HeadshotReviews'
import BeforeAfter from '@/components/BeforeAfter'
import PricingCTA from '@/components/PricingCTA'

export default function HeadshotsAlexandriaVA() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I get professional headshots in Alexandria, VA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Get Ahead Shot Photography serves Alexandria, VA including Old Town, Del Ray, Eisenhower Valley, Carlyle, and the West End. We come to your office or any Alexandria location with our full professional studio setup."
        }
      },
      {
        "@type": "Question",
        "name": "How much do headshots cost in Alexandria, VA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional headshot sessions in the Alexandria area typically range from $350-$700 depending on the package, number of looks, and turnaround time. Same-day rush delivery is available."
        }
      },
      {
        "@type": "Question",
        "name": "Do you photograph headshots near the USPTO in Alexandria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We frequently serve professionals in the Carlyle and Eisenhower corridor, including patent attorneys and professionals near the USPTO campus. We bring studio-quality equipment to your Alexandria office."
        }
      },
      {
        "@type": "Question",
        "name": "What's your turnaround time for headshot delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard turnaround is 48-72 hours for professionally edited images. Same-day delivery is available if you need your headshots urgently. All images are magazine-quality edited and retouched."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://getaheadshot.net" },
      { "@type": "ListItem", "position": 2, "name": "Headshots Alexandria VA", "item": "https://getaheadshot.net/headshots-alexandria-va" }
    ]
  };

  return (
    <Layout
      title="Professional Headshots Alexandria VA | Old Town & Del Ray Headshot Photographer"
      description="Professional headshot photographer serving Alexandria, VA. On-location headshots in Old Town, Del Ray, Carlyle, Eisenhower Valley & West End. LinkedIn headshots, corporate teams, and executive portraits. Book today!"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Professional Headshots in Alexandria, VA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto">
              On-Location Headshot Photography for Alexandria's Professionals — From Old Town to the Eisenhower Corridor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/more_info" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Get Pricing & Book Now
              </a>
              <a href="#portfolio" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
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
                Alexandria's Professional Headshot Photographer
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Alexandria blends historic charm with modern business energy. From the boutique firms along <strong>King Street
                in Old Town</strong> to the patent law offices near the <strong>USPTO in Carlyle</strong>, Alexandria professionals
                need headshots that communicate both polish and personality.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                I bring professional studio lighting and backgrounds to your Alexandria office or location — whether that's a
                law firm in <strong>Old Town</strong>, a coworking space in <strong>Del Ray</strong>, or a corporate office in
                the <strong>Eisenhower Valley</strong>. Sessions take just 30-45 minutes with instant feedback so you see and
                approve every image before I pack up.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Popular With Alexandria Professionals:
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Patent Attorneys & IP Lawyers</strong> — Professional headshots for firm websites and directories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Small Business Owners</strong> — Authentic portraits for Old Town storefronts and websites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Government & Federal Workers</strong> — Polished images for agency profiles and badges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Real Estate Agents</strong> — Stand out in the competitive Northern Virginia market</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Entrepreneurs & Freelancers</strong> — Build your personal brand with a professional image</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/Kevin_about.jpg"
                alt="Professional headshot photographer Kevin Elwell serving Alexandria VA"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-gray-50">
        <div className="py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            Headshot Portfolio — Alexandria VA Clients
          </h2>
          <MainGallery />
        </div>
      </section>

      <HeadshotProcess />
      <BeforeAfter />

      {/* Neighborhoods Served */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Serving All of Alexandria, VA
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Old Town', 'Del Ray', 'Carlyle', 'Eisenhower Valley',
              'West End', 'Potomac Yard', 'Landmark', 'Seminary Hill',
              'Rosemont', 'Beverley Hills', 'Cameron Station', 'Kingstowne'
            ].map((location) => (
              <div key={location} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-red-50 transition-colors">
                <p className="text-gray-800 font-medium">{location}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            I also serve nearby areas including <a href="/headshots-washington-dc" className="text-red-500 hover:text-red-600 font-semibold">Washington DC</a>,{' '}
            <a href="/headshots-arlington-va" className="text-red-500 hover:text-red-600 font-semibold">Arlington</a>,{' '}
            <a href="/headshots-fairfax-va" className="text-red-500 hover:text-red-600 font-semibold">Fairfax</a>, and{' '}
            <a href="/headshots-bethesda-md" className="text-red-500 hover:text-red-600 font-semibold">Bethesda</a>.
          </p>
        </div>
      </section>

      <HeadshotReviews />

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Headshot Photography FAQs — Alexandria, VA
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Where can I get professional headshots in Alexandria, VA?</h3>
              <p className="text-gray-700">
                Get Ahead Shot Photography serves Alexandria, VA including Old Town, Del Ray, Eisenhower Valley, Carlyle,
                and the West End. We come to your office or any location with our full professional studio setup.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much do headshots cost in Alexandria, VA?</h3>
              <p className="text-gray-700">
                Professional headshot sessions in the Alexandria area typically range from $350-$700 depending on the package,
                number of looks, and turnaround time. Same-day rush delivery is available.{' '}
                <a href="/more_info" className="text-red-500 hover:text-red-600">Get detailed pricing →</a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you photograph headshots near the USPTO in Alexandria?</h3>
              <p className="text-gray-700">
                Yes! We frequently serve professionals in the Carlyle and Eisenhower corridor, including patent attorneys
                and professionals near the USPTO campus. We bring studio-quality equipment to your Alexandria office.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What's your turnaround time for headshot delivery?</h3>
              <p className="text-gray-700">
                Standard turnaround is 48-72 hours for professionally edited images. Same-day delivery is available
                if you need your headshots urgently. All images are magazine-quality edited and retouched.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PricingCTA />

      {/* Local SEO Content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Alexandria Professionals Choose Get Ahead Shot
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Alexandria's mix of historic character and modern enterprise creates a unique professional community. The small
              business owners on King Street, the IP attorneys near the Patent Office, and the federal employees commuting
              from Del Ray all share one thing: their headshot is working for them (or against them) every single day.
            </p>
            <p>
              With over 10 years of experience, I've built a headshot process that's quick, comfortable, and produces
              magazine-quality results. No awkward poses, no wasted time. My instant feedback system lets you see every
              image as we shoot, so you leave with total confidence in your new professional image.
            </p>
            <p className="mt-6">
              Ready to invest in your professional image?{' '}
              <a href="/more_info" className="text-red-500 hover:text-red-600 font-semibold">Get pricing and book your Alexandria headshot session today</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
