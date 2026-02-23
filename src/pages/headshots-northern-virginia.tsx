import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import MainGallery from '@/components/MainGallery'
import HeadshotProcess from '@/components/HeadshotProcess'
import HeadshotReviews from '@/components/HeadshotReviews'
import BeforeAfter from '@/components/BeforeAfter'
import PricingCTA from '@/components/PricingCTA'

export default function HeadshotsNorthernVirginia() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I get professional headshots in Northern Virginia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Get Ahead Shot Photography is based in Northern Virginia and serves the entire NoVA region including Arlington, Alexandria, Fairfax, Tysons Corner, Reston, Centreville, McLean, and Vienna. We bring a full professional studio setup to your office, home, or any location — no need to drive into DC."
        }
      },
      {
        "@type": "Question",
        "name": "How much do headshots cost in Northern Virginia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional headshot sessions in Northern Virginia typically range from $350-$700 depending on the package, number of looks, and turnaround time. Because we're based in NoVA, there are no travel fees for locations throughout the region. Same-day delivery is available."
        }
      },
      {
        "@type": "Question",
        "name": "Do you do corporate team headshots on-location in Northern Virginia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We regularly photograph corporate teams throughout Northern Virginia, from Tysons Corner and Reston to Arlington and the Route 28 corridor. We bring professional lighting and backgrounds to your office for consistent, polished team headshots. We can photograph 15-20 people per hour."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between your headshots and AI-generated photos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI headshots create a version of you that doesn't exist — which becomes obvious on video calls and in-person meetings. Our headshots use professional studio lighting and our instant feedback process to capture authentic, natural expressions. The result is a magazine-quality image that actually looks like you."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://getaheadshot.net" },
      { "@type": "ListItem", "position": 2, "name": "Headshots Northern Virginia", "item": "https://getaheadshot.net/headshots-northern-virginia" }
    ]
  };

  return (
    <Layout
      title="Headshot Photographer Northern Virginia | Professional Headshots NoVA & DMV"
      description="Northern Virginia's premier headshot photographer. Professional headshots for executives, corporate teams, and LinkedIn profiles across NoVA — Arlington, Fairfax, Tysons, Reston, Centreville & more. On-location. Book today!"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Professional Headshots in Northern Virginia
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto">
              NoVA's On-Location Headshot Photographer — From Tysons Corner to Arlington, Reston to Centreville
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
                Northern Virginia's Local Headshot Photographer
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Northern Virginia is one of the most competitive professional markets in the country.
                From the <strong>government contractors in Tysons and Reston</strong> to the{' '}
                <strong>tech companies along the Dulles corridor</strong> to the{' '}
                <strong>lobbying firms and nonprofits near Arlington</strong> — everyone here needs
                a headshot that signals credibility at first glance.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Based right here in <strong>Centreville</strong>, I've been photographing NoVA professionals
                for over a decade. I bring a full professional studio — lighting, backgrounds, everything — directly
                to your office, coworking space, or home. No fighting I-66, the Beltway, or the Dulles Toll Road.
                The whole session takes 30-45 minutes, and you see every image in real-time through my
                instant feedback system.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Popular With NoVA Professionals:
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Government Contractors</strong> — Headshots for proposals, capability statements, and team pages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Corporate Teams</strong> — Consistent, polished headshots for offices across Northern Virginia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Tech & Cybersecurity Professionals</strong> — LinkedIn-ready headshots for the Dulles tech corridor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Real Estate Agents</strong> — Professional images for MLS, business cards, and marketing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Entrepreneurs & Consultants</strong> — Build trust before the first meeting</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/Kevin_about.jpg"
                alt="Kevin Elwell - Professional headshot photographer in Northern Virginia"
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
            Headshot Portfolio — Northern Virginia Clients
          </h2>
          <MainGallery />
        </div>
      </section>

      <HeadshotProcess />
      <BeforeAfter />

      {/* Location Hub */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Serving All of Northern Virginia
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Arlington', href: '/headshots-arlington-va' },
              { name: 'Alexandria', href: '/headshots-alexandria-va' },
              { name: 'Fairfax', href: '/headshots-fairfax-va' },
              { name: 'Tysons Corner', href: '/headshots-tysons-corner-va' },
              { name: 'Reston', href: '/headshots-reston-va' },
              { name: 'Centreville', href: '/headshots-centreville-va' },
              { name: 'McLean', href: null },
              { name: 'Vienna', href: null },
              { name: 'Herndon', href: null },
              { name: 'Sterling', href: null },
              { name: 'Chantilly', href: null },
              { name: 'Manassas', href: null },
            ].map((location) => (
              location.href ? (
                <Link key={location.name} href={location.href} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-red-50 transition-colors block">
                  <p className="text-red-500 font-semibold">{location.name}</p>
                </Link>
              ) : (
                <div key={location.name} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-red-50 transition-colors">
                  <p className="text-gray-800 font-medium">{location.name}</p>
                </div>
              )
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            I also serve{' '}
            <a href="/headshots-washington-dc" className="text-red-500 hover:text-red-600 font-semibold">Washington DC</a> and{' '}
            <a href="/headshots-bethesda-md" className="text-red-500 hover:text-red-600 font-semibold">Bethesda / Montgomery County, MD</a>.
          </p>
        </div>
      </section>

      <HeadshotReviews />

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Headshot Photography FAQs — Northern Virginia
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Where can I get professional headshots in Northern Virginia?</h3>
              <p className="text-gray-700">
                Get Ahead Shot Photography is based in Northern Virginia and serves the entire NoVA region including
                Arlington, Alexandria, Fairfax, Tysons Corner, Reston, Centreville, McLean, and Vienna. We bring
                our full studio setup to your office or any location — no need to drive into DC.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much do headshots cost in Northern Virginia?</h3>
              <p className="text-gray-700">
                Professional headshot sessions in Northern Virginia typically range from $350-$700 depending on
                the package, number of looks, and turnaround time. Because we're based in NoVA, there are no
                travel fees for locations throughout the region.{' '}
                <a href="/more_info" className="text-red-500 hover:text-red-600">Get detailed pricing &#8594;</a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you do corporate team headshots on-location in Northern Virginia?</h3>
              <p className="text-gray-700">
                Yes! We regularly photograph corporate teams throughout Northern Virginia, from Tysons Corner and
                Reston to Arlington and the Route 28 corridor. We bring professional lighting and backgrounds
                to your office for consistent, polished team headshots. We can photograph 15-20 people per hour.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What's the difference between your headshots and AI-generated photos?</h3>
              <p className="text-gray-700">
                AI headshots create a version of you that doesn't exist — which becomes obvious on video calls
                and in-person meetings. Our headshots use professional studio lighting and our instant feedback
                process to capture authentic, natural expressions. The result is a magazine-quality image that
                actually looks like you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PricingCTA />

      {/* Bottom SEO Content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Northern Virginia Professionals Choose Get Ahead Shot
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Northern Virginia isn't just a suburb of DC — it's an economic powerhouse in its own right.
              Fortune 500 companies in Tysons, defense contractors in Reston, tech startups along the
              Dulles corridor, and government-adjacent firms in Arlington. The professionals here don't
              need a "good enough" headshot. They need one that competes.
            </p>
            <p>
              As a NoVA native based in Centreville, I understand this market because I live in it. Over
              the past decade I've photographed everyone from solo consultants to Fortune 500 executive teams.
              My process is built for busy Northern Virginia professionals: efficient (30-45 minutes),
              comfortable (natural expressions, not stiff poses), and transparent (you see every image in
              real-time through my instant feedback system).
            </p>
            <p>
              And because I'm local, I come to you. Your office in{' '}
              <a href="/headshots-tysons-corner-va" className="text-red-500 hover:text-red-600">Tysons</a>,
              your coworking space in{' '}
              <a href="/headshots-reston-va" className="text-red-500 hover:text-red-600">Reston</a>,
              your home office in{' '}
              <a href="/headshots-centreville-va" className="text-red-500 hover:text-red-600">Centreville</a> —
              I set up a full professional studio wherever you need me. Same quality you'd get at a DC studio,
              without crossing the Potomac.
            </p>
            <p className="mt-6">
              Ready to elevate your professional image?{' '}
              <a href="/more_info" className="text-red-500 hover:text-red-600 font-semibold">Get pricing and book your Northern Virginia headshot session today</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
