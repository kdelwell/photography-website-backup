import Layout from '@/components/Layout'
import Image from 'next/image'
import MainGallery from '@/components/MainGallery'
import HeadshotProcess from '@/components/HeadshotProcess'
import HeadshotReviews from '@/components/HeadshotReviews'
import BeforeAfter from '@/components/BeforeAfter'
import PricingCTA from '@/components/PricingCTA'

export default function HeadshotsCentrevilleVA() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I get business headshots in Centreville, VA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Get aHead Shot is based in Centreville, VA and specializes in business and corporate headshots for professionals and companies. We serve the surrounding areas including Chantilly, Clifton, Manassas, and the Westfields business corridor, bringing a full professional studio setup to your office, home, or any location."
        }
      },
      {
        "@type": "Question",
        "name": "How much do business headshots cost in Centreville, VA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Business headshot sessions in Centreville typically range from $350-$700 depending on the package, number of looks, and turnaround time. We offer competitive pricing with same-day delivery options."
        }
      },
      {
        "@type": "Question",
        "name": "Do you photograph corporate teams in the Centreville and Chantilly area?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We regularly photograph corporate teams throughout Western Fairfax County, from the Westfields business campus to offices along Route 28 and Route 29. We bring professional lighting and backgrounds to your location for consistent, polished team headshots."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a headshot session take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Individual headshot sessions take 30-45 minutes. For corporate groups, we can photograph 15-20 people per hour. All sessions include our instant feedback process so you see and love your images before we leave."
        }
      },
      {
        "@type": "Question",
        "name": "Do you do actor headshots in Centreville, VA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We photograph actor headshots for performers at all levels in Centreville and Western Fairfax County. Our sessions include expression coaching, multiple looks, and retouched finals formatted for casting sites and talent agency submissions. No need to drive into DC."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://getaheadshot.net" },
      { "@type": "ListItem", "position": 2, "name": "Business & Corporate Headshots Centreville VA", "item": "https://getaheadshot.net/headshots-centreville-va" }
    ]
  };

  return (
    <Layout
      title="Business & Corporate Headshots Centreville VA | Executive Headshot Photographer"
      description="Business headshot photographer based in Centreville, VA. Professional business headshots, corporate headshots, executive portraits, and team photography. On-location in Centreville, Chantilly, Clifton & Westfields. Book today!"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Business & Corporate Headshots in Centreville, VA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto">
              Professional Business, Corporate & Executive Headshot Photography Based Right Here in Centreville — Serving Western Fairfax County
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
                Centreville's Local Corporate & Business Headshot Photographer
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                As a <strong>business headshot photographer based in Centreville, VA</strong>, I bring over a decade of experience photographing professionals right here in Western Fairfax County. I'm not just a photographer who serves the area — I'm <strong>based here</strong>, which means no travel fees, fast turnaround, and a photographer who actually knows the community.
                From the professionals working along the <strong>Route 29 corridor</strong> to the growing
                business parks near <strong>Westfields</strong> and <strong>Chantilly</strong>, I've been the go-to headshot photographer for Centreville businesses and professionals.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                I bring a full professional studio setup — lighting, backgrounds, everything — directly to
                your office, coworking space, or home. No fighting traffic on <strong>Route 28</strong> or
                driving into DC. The whole session takes 30-45 minutes, and you'll see every image in
                real-time through my instant feedback system before I leave.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Popular With Centreville Professionals:
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Government Contractors</strong> — Executive portraits for proposals, capability statements, and company websites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Corporate Teams</strong> — Consistent headshots for offices at Westfields, Newbrook, and the Route 28 corridor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Entrepreneurs & Small Business Owners</strong> — Professional images that build trust with local clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Real Estate Agents</strong> — MLS-ready headshots for the competitive NoVA housing market</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Tech & Cybersecurity Professionals</strong> — LinkedIn headshots for the Dulles tech corridor workforce</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Actors & Performers</strong> — Actor headshots for auditions, casting calls, and talent agency submissions</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/Kevin_about.jpg"
                alt="Kevin Elwell - Business headshot photographer based in Centreville VA"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
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
            Business & Corporate Headshot Portfolio — Centreville VA Area Clients
          </h2>
          <MainGallery />
        </div>
      </section>

      {/* Actor Headshots Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Actor Headshots in Centreville, VA
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Whether you're auditioning for community theater, submitting to talent agencies in DC, or building your acting portfolio, a great actor headshot is the first thing casting directors see. I photograph actor headshots right here in Centreville with the same professional lighting and coaching I use for business clients — but tailored to what the acting industry needs.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Actor headshots are different from corporate headshots. They need to show range, personality, and emotion — not just "professional." I'll coach you through multiple expressions and looks so you walk away with headshots that show casting directors exactly what you bring to a role.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                What You Get With Actor Headshots:
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>Multiple looks and expressions for different casting types</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>Both studio and natural light options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>Expression coaching to bring out authentic, castable looks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>Retouched finals formatted for casting sites and agency submissions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>No need to drive into DC — full studio setup right here in Centreville</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Northern Virginia has a thriving performing arts scene — from the Hylton Performing Arts Center in Manassas to theaters across Fairfax County. If you're an actor based in Centreville, Chantilly, or anywhere in Western Fairfax County, you no longer need to trek into DC or Baltimore for quality actor headshots.
              </p>
              <p className="text-lg text-gray-700">
                I work with actors at every level — from first-timers building their initial portfolio to working actors who need updated headshots for a new look or age range. My instant feedback system means you see every shot in real-time, so you leave the session confident you have exactly what you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HeadshotProcess />
      <BeforeAfter />

      {/* Neighborhoods Served */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Serving Centreville & Western Fairfax County
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Centreville', 'Chantilly', 'Clifton', 'Westfields',
              'South Riding', 'Manassas', 'Bull Run', 'Sully Station',
              'Fair Oaks', 'Fair Lakes', 'Virginia Run', 'Stone Ridge'
            ].map((location) => (
              <div key={location} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-red-50 transition-colors">
                <p className="text-gray-800 font-medium">{location}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            I also serve nearby areas including{' '}
            <a href="/headshots-fairfax-va" className="text-red-500 hover:text-red-600 font-semibold">Fairfax</a>,{' '}
            <a href="/headshots-reston-va" className="text-red-500 hover:text-red-600 font-semibold">Reston</a>,{' '}
            <a href="/headshots-arlington-va" className="text-red-500 hover:text-red-600 font-semibold">Arlington</a>, and{' '}
            <a href="/headshots-washington-dc" className="text-red-500 hover:text-red-600 font-semibold">Washington DC</a>.
          </p>
          <p className="text-center text-gray-500 mt-4 text-sm">
            Get aHead Shot · 6720 Hartwood Lane, Centreville, VA 20121 ·{' '}
            <a href="tel:703-802-9379" className="text-red-500 hover:text-red-400">703-802-9379</a>
          </p>
        </div>
      </section>

      <HeadshotReviews />

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Business & Actor Headshot FAQs — Centreville, VA
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Where can I get business headshots in Centreville, VA?</h3>
              <p className="text-gray-700">
                Get aHead Shot is based in Centreville, VA and specializes in business headshots for
                professionals and companies. We serve the surrounding areas including Chantilly, Clifton, Manassas,
                and the Westfields business corridor, bringing our full studio setup to your office or any location.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much do business headshots cost in Centreville, VA?</h3>
              <p className="text-gray-700">
                Business headshot sessions in Centreville typically range from $350-$700 depending on the package,
                number of looks, and turnaround time. We offer competitive pricing with same-day delivery options.{' '}
                <a href="/more_info" className="text-red-500 hover:text-red-600">Get detailed pricing →</a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you photograph corporate teams in the Centreville and Chantilly area?</h3>
              <p className="text-gray-700">
                Yes! We regularly photograph corporate teams throughout Western Fairfax County, from the Westfields
                business campus to offices along Route 28 and Route 29. We bring professional lighting and backgrounds
                to your location for consistent, polished team headshots.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does a headshot session take?</h3>
              <p className="text-gray-700">
                Individual headshot sessions take 30-45 minutes. For corporate groups, we can photograph 15-20 people
                per hour. All sessions include our instant feedback process so you see and love your images before we leave.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you do actor headshots in Centreville, VA?</h3>
              <p className="text-gray-700">
                Yes! We photograph actor headshots for performers at all levels in Centreville and Western Fairfax County.
                Our sessions include expression coaching, multiple looks, and retouched finals formatted for casting sites
                and talent agency submissions. No need to drive into DC.{' '}
                <a href="/more_info" className="text-red-500 hover:text-red-600">Get actor headshot pricing →</a>
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
            Why Centreville Professionals & Actors Choose Get aHead Shot for Their Headshots
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Centreville sits at the intersection of opportunity. With the Dulles tech corridor to the north,
              government agencies to the east, and a thriving performing arts scene across Northern Virginia, professionals
              and actors here need headshots that open doors — whether that's a federal contract, a casting call,
              or a LinkedIn connection that turns into a career move.
            </p>
            <p>
              As your neighbor in Centreville, I've spent over a decade photographing the people who make this
              community run. I've shot business headshots for teams at Westfields corporate offices, solo portraits for
              entrepreneurs working from home in Virginia Run, and executive photos for government contractors
              pitching their next big proposal. My process is built for busy professionals: efficient (30-45 minutes),
              comfortable (natural expressions, not stiff poses), and transparent (you see every image in real-time
              through my instant feedback system).
            </p>
            <p>
              And because I'm local, there are no travel fees and no hassle. I set up a full studio wherever
              you need me — your office, your home, a conference room. Same quality you'd get driving into DC,
              without leaving Centreville.
            </p>
            <p className="mt-6">
              Ready to elevate your professional image?{' '}
              <a href="/more_info" className="text-red-500 hover:text-red-600 font-semibold">Get pricing and book your Centreville business headshot session today</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
