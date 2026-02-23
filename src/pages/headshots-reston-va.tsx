import Layout from '@/components/Layout'
import Image from 'next/image'
import MainGallery from '@/components/MainGallery'
import HeadshotProcess from '@/components/HeadshotProcess'
import HeadshotReviews from '@/components/HeadshotReviews'
import BeforeAfter from '@/components/BeforeAfter'
import PricingCTA from '@/components/PricingCTA'

export default function HeadshotsRestonVA() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I get professional headshots in Reston, VA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Get Ahead Shot Photography serves Reston, VA including Reston Town Center, Lake Anne, South Reston, North Reston, and the Dulles Corridor. We bring our full professional studio setup to your office or any location."
        }
      },
      {
        "@type": "Question",
        "name": "How much do headshots cost in Reston, VA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional headshot sessions in the Reston area typically range from $350-$700. Pricing depends on the package, number of final images, and turnaround time. Same-day rush delivery is available."
        }
      },
      {
        "@type": "Question",
        "name": "Do you photograph headshots for tech companies in the Dulles Corridor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We regularly serve tech companies and startups along the Dulles Corridor, including offices in Reston Town Center, Herndon, and the Innovation Center area. We bring everything needed for professional team headshots."
        }
      },
      {
        "@type": "Question",
        "name": "Can you photograph our whole team in one session?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. For corporate groups, we can photograph 15-20 people per hour with consistent lighting and backgrounds. We bring our full studio to your Reston office — no one has to leave the building."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://getaheadshot.net" },
      { "@type": "ListItem", "position": 2, "name": "Headshots Reston VA", "item": "https://getaheadshot.net/headshots-reston-va" }
    ]
  };

  return (
    <Layout
      title="Professional Headshots Reston VA | Reston Town Center & Dulles Corridor Photographer"
      description="Professional headshot photographer serving Reston, VA. On-location headshots at Reston Town Center, Dulles Corridor, Herndon & Sterling. Tech teams, corporate headshots, and executive portraits. Book today!"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Professional Headshots in Reston, VA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto">
              Headshot Photography for Reston's Tech Leaders and Business Professionals — Dulles Corridor to Town Center
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
                Reston's Professional Headshot Photographer
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Reston sits at the heart of Northern Virginia's technology corridor. From the bustling offices around
                {' '}<strong>Reston Town Center</strong> to the tech campuses along the <strong>Dulles Toll Road</strong>,
                this is where innovation meets enterprise. Your headshot needs to reflect that forward-thinking energy.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                I bring my full professional studio directly to your Reston office — whether that's a corner suite in
                {' '}<strong>Town Center</strong>, a startup space near the <strong>Wiehle-Reston East Metro</strong>, or a
                corporate campus off <strong>Sunset Hills Road</strong>. Setup takes minutes, sessions take 30-45 minutes,
                and you see every image in real-time through my instant feedback process.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Popular With Reston Professionals:
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Tech Companies & Startups</strong> — Modern headshots for websites, pitch decks, and LinkedIn</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Cybersecurity Firms</strong> — Professional imagery for proposals and conference bios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>SaaS & Cloud Companies</strong> — Consistent team headshots for your About page</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Management Consultants</strong> — Executive portraits that build client confidence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Association Leaders</strong> — Polished headshots for annual reports and member communications</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/Kevin_about.jpg"
                alt="Professional headshot photographer Kevin Elwell serving Reston VA"
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
            Headshot Portfolio — Reston VA Clients
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
            Serving Reston and the Dulles Corridor
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Reston Town Center', 'North Reston', 'South Reston', 'Lake Anne',
              'Herndon', 'Sterling', 'Ashburn', 'Dulles',
              'South Riding', 'Leesburg', 'Innovation Center', 'Wiehle-Reston East'
            ].map((location) => (
              <div key={location} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-red-50 transition-colors">
                <p className="text-gray-800 font-medium">{location}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            I also serve nearby areas including{' '}
            <a href="/headshots-tysons-corner-va" className="text-red-500 hover:text-red-600 font-semibold">Tysons Corner</a>,{' '}
            <a href="/headshots-fairfax-va" className="text-red-500 hover:text-red-600 font-semibold">Fairfax</a>,{' '}
            <a href="/headshots-arlington-va" className="text-red-500 hover:text-red-600 font-semibold">Arlington</a>,{' '}
            <a href="/headshots-washington-dc" className="text-red-500 hover:text-red-600 font-semibold">Washington DC</a>, and{' '}
            <a href="/headshots-bethesda-md" className="text-red-500 hover:text-red-600 font-semibold">Bethesda</a>.{' '}
            See all <a href="/headshots-northern-virginia" className="text-red-500 hover:text-red-600 font-semibold">Northern Virginia</a> locations.
          </p>
        </div>
      </section>

      <HeadshotReviews />

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Headshot Photography FAQs — Reston, VA
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Where can I get professional headshots in Reston, VA?</h3>
              <p className="text-gray-700">
                Get Ahead Shot Photography serves Reston, VA including Reston Town Center, Lake Anne, South Reston,
                North Reston, and the Dulles Corridor. We bring our full studio setup to your office or any location.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much do headshots cost in Reston, VA?</h3>
              <p className="text-gray-700">
                Professional headshot sessions in the Reston area typically range from $350-$700. Pricing depends on the
                package, number of final images, and turnaround time. Same-day rush delivery is available.{' '}
                <a href="/more_info" className="text-red-500 hover:text-red-600">Get detailed pricing →</a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you photograph headshots for tech companies in the Dulles Corridor?</h3>
              <p className="text-gray-700">
                Yes! We regularly serve tech companies and startups along the Dulles Corridor, including offices in
                Reston Town Center, Herndon, and the Innovation Center area. We bring everything needed for professional team headshots.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can you photograph our whole team in one session?</h3>
              <p className="text-gray-700">
                Absolutely. For corporate groups, we can photograph 15-20 people per hour with consistent lighting
                and backgrounds. We bring our full studio to your Reston office — no one has to leave the building.
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
            Why Reston Professionals Choose Get Ahead Shot
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Reston's tech-forward professional community moves fast. Between product launches, funding rounds, and
              conference seasons, you need a headshot photographer who respects your time and delivers results that
              match the caliber of work you do. A quick phone selfie doesn't cut it when your headshot appears on
              investor decks, company websites, and conference speaker pages.
            </p>
            <p>
              With over 10 years of experience and a client list that spans startups to enterprise, I've refined a
              headshot process that's built for busy professionals. I come to you, set up in minutes, shoot in 30-45
              minutes, and deliver magazine-quality results within 48 hours. My instant feedback system means you see
              every image as we shoot — no waiting, no surprises, just confidence that your headshot is exactly right.
            </p>
            <p className="mt-6">
              Ready to upgrade your team's image?{' '}
              <a href="/more_info" className="text-red-500 hover:text-red-600 font-semibold">Get pricing and book your Reston headshot session today</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
