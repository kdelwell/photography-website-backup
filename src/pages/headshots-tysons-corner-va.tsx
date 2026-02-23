import Layout from '@/components/Layout'
import Image from 'next/image'
import MainGallery from '@/components/MainGallery'
import HeadshotProcess from '@/components/HeadshotProcess'
import HeadshotReviews from '@/components/HeadshotReviews'
import BeforeAfter from '@/components/BeforeAfter'
import PricingCTA from '@/components/PricingCTA'

export default function HeadshotsTysonsCornerVA() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I get professional headshots in Tysons Corner, VA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Get Ahead Shot Photography serves Tysons Corner and the surrounding areas including McLean, Vienna, Falls Church, and Merrifield. We bring a full professional studio setup directly to your office — no need to leave your building. Perfect for busy Tysons professionals and corporate teams."
        }
      },
      {
        "@type": "Question",
        "name": "How much do corporate headshots cost in Tysons Corner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional headshot sessions in the Tysons area typically range from $350-$700 depending on the package, number of looks, and turnaround time. For corporate teams, we offer volume pricing and can photograph 15-20 people per hour on-location at your office."
        }
      },
      {
        "@type": "Question",
        "name": "Do you photograph corporate teams at Tysons Corner offices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We regularly photograph corporate teams throughout the Tysons Corner area, from the towers along Route 123 to offices near Tysons Galleria and Tysons Corner Center. We bring professional lighting and backgrounds to your conference room or lobby for consistent, polished team headshots."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get same-day headshots in Tysons Corner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, same-day delivery is available for rush orders. Standard turnaround is 48-72 hours with professionally edited, magazine-quality images. All sessions include our instant feedback process so you see and approve your images before we leave."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://getaheadshot.net" },
      { "@type": "ListItem", "position": 2, "name": "Headshots Northern Virginia", "item": "https://getaheadshot.net/headshots-northern-virginia" },
      { "@type": "ListItem", "position": 3, "name": "Headshots Tysons Corner VA", "item": "https://getaheadshot.net/headshots-tysons-corner-va" }
    ]
  };

  return (
    <Layout
      title="Professional Headshots Tysons Corner VA | McLean & Vienna Headshot Photographer"
      description="Professional headshot photographer serving Tysons Corner, VA. On-location corporate headshots, executive portraits, and LinkedIn photos in Tysons, McLean, Vienna & Falls Church. Book today!"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Professional Headshots in Tysons Corner, VA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto">
              On-Location Headshot Photography for Tysons Corner, McLean & Vienna Professionals
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
                Tysons Corner's Headshot Photographer
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Tysons Corner is Northern Virginia's business capital. The corporate towers along{' '}
                <strong>Route 123</strong>, the consulting firms near <strong>Tysons Galleria</strong>,
                the tech companies off <strong>Leesburg Pike</strong> — this is where deals get done and
                first impressions matter. Your headshot needs to match the caliber of your work.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                I bring a full professional studio setup — lighting, backgrounds, everything — directly to
                your Tysons Corner office. No need to fight traffic on Route 7 or find parking at a
                separate studio. I set up in your conference room, lobby, or any space you have, and the
                whole session takes 30-45 minutes. You'll see every image in real-time through my instant
                feedback system before I pack up.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Popular With Tysons Professionals:
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Corporate Teams</strong> — Consistent headshots for Tysons office teams and company websites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Executives & C-Suite</strong> — Polished portraits for board presentations and investor materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Management Consultants</strong> — Professional images for proposals and client-facing bios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Government Contractors</strong> — Headshots for capability statements and federal proposals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Financial Services Professionals</strong> — Trust-building portraits for wealth management and banking</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/Kevin_about.jpg"
                alt="Professional headshot photographer serving Tysons Corner VA"
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
            Headshot Portfolio — Tysons Corner Area Clients
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
            Serving Tysons Corner & Surrounding Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Tysons Corner', 'McLean', 'Vienna', 'Falls Church',
              'Merrifield', 'Oakton', 'Pimmit Hills', 'Idylwood',
              'Dunn Loring', 'Fair Oaks', 'Great Falls', 'Wolf Trap'
            ].map((location) => (
              <div key={location} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-red-50 transition-colors">
                <p className="text-gray-800 font-medium">{location}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            I also serve nearby areas including{' '}
            <a href="/headshots-arlington-va" className="text-red-500 hover:text-red-600 font-semibold">Arlington</a>,{' '}
            <a href="/headshots-fairfax-va" className="text-red-500 hover:text-red-600 font-semibold">Fairfax</a>,{' '}
            <a href="/headshots-reston-va" className="text-red-500 hover:text-red-600 font-semibold">Reston</a>,{' '}
            <a href="/headshots-centreville-va" className="text-red-500 hover:text-red-600 font-semibold">Centreville</a>, and{' '}
            <a href="/headshots-washington-dc" className="text-red-500 hover:text-red-600 font-semibold">Washington DC</a>.
          </p>
        </div>
      </section>

      <HeadshotReviews />

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Headshot Photography FAQs — Tysons Corner, VA
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Where can I get professional headshots in Tysons Corner, VA?</h3>
              <p className="text-gray-700">
                Get Ahead Shot Photography serves Tysons Corner and the surrounding areas including McLean,
                Vienna, Falls Church, and Merrifield. We bring our full studio setup directly to your
                office — no need to leave your building.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much do corporate headshots cost in Tysons Corner?</h3>
              <p className="text-gray-700">
                Professional headshot sessions in the Tysons area typically range from $350-$700 depending on
                the package, number of looks, and turnaround time. For corporate teams, we offer volume pricing
                and can photograph 15-20 people per hour.{' '}
                <a href="/more_info" className="text-red-500 hover:text-red-600">Get detailed pricing &#8594;</a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you photograph corporate teams at Tysons Corner offices?</h3>
              <p className="text-gray-700">
                Yes! We regularly photograph corporate teams throughout the Tysons Corner area. We bring
                professional lighting and backgrounds to your conference room or lobby for consistent,
                polished team headshots.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I get same-day headshots in Tysons Corner?</h3>
              <p className="text-gray-700">
                Yes, same-day delivery is available for rush orders. Standard turnaround is 48-72 hours with
                professionally edited, magazine-quality images. All sessions include our instant feedback
                process so you see and approve your images before we leave.
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
            Why Tysons Corner Professionals Choose Get Ahead Shot
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Tysons Corner has transformed from a suburban crossroads into one of the East Coast's premier
              business districts. With Capital One's headquarters, Booz Allen Hamilton, SAIC, and hundreds
              of other firms calling Tysons home, the concentration of senior professionals here rivals
              downtown DC — and they all need headshots that reflect that level.
            </p>
            <p>
              I've photographed executives, consultants, and corporate teams throughout the Tysons area for
              over a decade. My process is built for the pace of Tysons business: I come to your office,
              set up a full studio in 15 minutes, photograph your team efficiently (15-20 people per hour
              for groups, 30-45 minutes for individuals), and deliver magazine-quality results. My instant
              feedback system means you see and approve every image before I leave your building.
            </p>
            <p>
              No commute to a studio. No wasted time. Just professional headshots that match the caliber of
              the work happening in Tysons Corner every day.
            </p>
            <p className="mt-6">
              Ready to elevate your professional image?{' '}
              <a href="/more_info" className="text-red-500 hover:text-red-600 font-semibold">Get pricing and book your Tysons Corner headshot session today</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
