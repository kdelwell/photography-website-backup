import Layout from '@/components/Layout'
import Image from 'next/image'
import MainGallery from '@/components/MainGallery'
import HeadshotProcess from '@/components/HeadshotProcess'
import HeadshotReviews from '@/components/HeadshotReviews'
import BeforeAfter from '@/components/BeforeAfter'
import PricingCTA from '@/components/PricingCTA'

export default function HeadshotsFairfaxVA() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I get professional headshots in Fairfax, VA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Get Ahead Shot Photography serves Fairfax, VA and surrounding areas including Fairfax City, Fair Oaks, Oakton, Vienna, and Burke. We bring our full professional studio setup to your office or any location."
        }
      },
      {
        "@type": "Question",
        "name": "How much do headshots cost in Fairfax, VA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional headshot sessions in the Fairfax area typically range from $350-$700 depending on the package, number of looks, and turnaround time. We offer competitive pricing with same-day delivery options."
        }
      },
      {
        "@type": "Question",
        "name": "Do you do corporate headshots for Fairfax County businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We regularly photograph corporate teams throughout Fairfax County, from Tysons Corner to Fair Oaks to the Fairfax County Government Center corridor. We bring professional lighting and backgrounds to your office for consistent, polished team headshots."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a headshot session take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Individual headshot sessions take 30-45 minutes. For corporate groups, we can photograph 15-20 people per hour. All sessions include our instant feedback process so you see and love your images before we leave."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://getaheadshot.net" },
      { "@type": "ListItem", "position": 2, "name": "Headshots Fairfax VA", "item": "https://getaheadshot.net/headshots-fairfax-va" }
    ]
  };

  return (
    <Layout
      title="Professional Headshots Fairfax VA | Tysons, Vienna & Fair Oaks Headshot Photographer"
      description="Professional headshot photographer serving Fairfax, VA. On-location headshots in Fairfax City, Tysons Corner, Vienna, Fair Oaks, Oakton & Burke. Corporate teams, executives, and LinkedIn headshots. Book today!"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Professional Headshots in Fairfax, VA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto">
              On-Location Headshot Photography for Fairfax County Professionals — From Tysons Corner to Fair Oaks
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
                Fairfax County's Headshot Photographer
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Fairfax County is the economic engine of Northern Virginia. From the corporate towers of <strong>Tysons
                Corner</strong> to the government contractors along <strong>Route 50</strong> and the growing business
                community around <strong>Fairfax City</strong>, professionals here understand that presentation matters.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Based right here in the Fairfax area, I bring professional studio lighting and backgrounds to your location —
                no need to fight Beltway traffic. Whether it's your corporate office near <strong>Fair Oaks</strong>, a
                coworking space in <strong>Vienna</strong>, or your home office in <strong>Oakton</strong>, I set up a
                full studio wherever you are. The whole process takes 30-45 minutes.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Popular With Fairfax Professionals:
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Government Contractors</strong> — Headshots for proposals, capability statements, and team pages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Corporate Teams</strong> — Consistent, polished headshots for Tysons and Fair Oaks offices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Real Estate Agents</strong> — Professional images for MLS, business cards, and marketing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>IT & Cybersecurity Professionals</strong> — LinkedIn-ready headshots for the tech corridor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Educators & Academics</strong> — Approachable portraits for George Mason and FCPS professionals</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/Kevin_about.jpg"
                alt="Professional headshot photographer Kevin Elwell serving Fairfax VA"
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
            Headshot Portfolio — Fairfax VA Clients
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
            Serving All of Fairfax County
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Fairfax City', 'Tysons Corner', 'Vienna', 'Fair Oaks',
              'Oakton', 'Burke', 'Centreville', 'Chantilly',
              'Springfield', 'Annandale', 'McLean', 'Great Falls'
            ].map((location) => (
              <div key={location} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-red-50 transition-colors">
                <p className="text-gray-800 font-medium">{location}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            I also serve nearby areas including{' '}
            <a href="/headshots-tysons-corner-va" className="text-red-500 hover:text-red-600 font-semibold">Tysons Corner</a>,{' '}
            <a href="/headshots-centreville-va" className="text-red-500 hover:text-red-600 font-semibold">Centreville</a>,{' '}
            <a href="/headshots-washington-dc" className="text-red-500 hover:text-red-600 font-semibold">Washington DC</a>,{' '}
            <a href="/headshots-arlington-va" className="text-red-500 hover:text-red-600 font-semibold">Arlington</a>,{' '}
            <a href="/headshots-reston-va" className="text-red-500 hover:text-red-600 font-semibold">Reston</a>, and{' '}
            <a href="/headshots-alexandria-va" className="text-red-500 hover:text-red-600 font-semibold">Alexandria</a>.{' '}
            See all <a href="/headshots-northern-virginia" className="text-red-500 hover:text-red-600 font-semibold">Northern Virginia</a> locations.
          </p>
        </div>
      </section>

      <HeadshotReviews />

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Headshot Photography FAQs — Fairfax, VA
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Where can I get professional headshots in Fairfax, VA?</h3>
              <p className="text-gray-700">
                Get Ahead Shot Photography serves Fairfax, VA and surrounding areas including Fairfax City, Fair Oaks,
                Oakton, Vienna, and Burke. We bring our full studio setup to your office or any location.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much do headshots cost in Fairfax, VA?</h3>
              <p className="text-gray-700">
                Professional headshot sessions in the Fairfax area typically range from $350-$700 depending on the package,
                number of looks, and turnaround time. We offer competitive pricing with same-day delivery options.{' '}
                <a href="/more_info" className="text-red-500 hover:text-red-600">Get detailed pricing →</a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you do corporate headshots for Fairfax County businesses?</h3>
              <p className="text-gray-700">
                Yes! We regularly photograph corporate teams throughout Fairfax County, from Tysons Corner to Fair Oaks.
                We bring professional lighting and backgrounds to your office for consistent, polished team headshots.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does a headshot session take?</h3>
              <p className="text-gray-700">
                Individual headshot sessions take 30-45 minutes. For corporate groups, we can photograph 15-20 people
                per hour. All sessions include our instant feedback process so you see and love your images before we leave.
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
            Why Fairfax Professionals Choose Get Ahead Shot
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Fairfax County's professional community runs on credibility. The government contractors competing for
              federal awards, the cybersecurity firms pitching to agencies, and the real estate agents working one of
              the most competitive housing markets in the country — they all need a headshot that signals competence
              and trustworthiness at first glance.
            </p>
            <p>
              Based right here in the Fairfax area with over 10 years of experience, I've photographed everyone from
              solo entrepreneurs to Fortune 500 teams. My process is built for busy professionals: efficient (30-45 minutes),
              comfortable (natural expressions, not stiff poses), and transparent (you see every image in real-time through
              my instant feedback system).
            </p>
            <p className="mt-6">
              Ready to elevate your professional image?{' '}
              <a href="/more_info" className="text-red-500 hover:text-red-600 font-semibold">Get pricing and book your Fairfax headshot session today</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
