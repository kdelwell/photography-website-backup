import Layout from '@/components/Layout'
import Image from 'next/image'
import MainGallery from '@/components/MainGallery'
import HeadshotProcess from '@/components/HeadshotProcess'
import HeadshotReviews from '@/components/HeadshotReviews'
import BeforeAfter from '@/components/BeforeAfter'
import PricingCTA from '@/components/PricingCTA'

export default function HeadshotsArlingtonVA() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I get professional headshots in Arlington, VA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Get Ahead Shot Photography provides professional headshots throughout Arlington, VA including Rosslyn, Ballston, Crystal City, Pentagon City, and Clarendon. We bring our full studio setup to your office or preferred location."
        }
      },
      {
        "@type": "Question",
        "name": "How much do headshots cost in Arlington, VA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional headshot sessions in the Arlington area typically range from $350-$700 depending on the package and number of looks. We offer competitive pricing with same-day turnaround options available."
        }
      },
      {
        "@type": "Question",
        "name": "Do you travel to offices in Rosslyn and Crystal City for group headshots?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We frequently photograph corporate teams in Rosslyn, Crystal City, Pentagon City, and throughout the Arlington business corridor. We bring professional studio lighting and backgrounds directly to your office."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can I get my headshots back?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard turnaround is 48-72 hours with professionally edited, magazine-quality images. Same-day delivery is available for rush orders — perfect for Arlington professionals who need images fast."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://getaheadshot.net" },
      { "@type": "ListItem", "position": 2, "name": "Headshots Arlington VA", "item": "https://getaheadshot.net/headshots-arlington-va" }
    ]
  };

  return (
    <Layout
      title="Professional Headshots Arlington VA | Rosslyn, Ballston & Crystal City Photographer"
      description="Professional headshot photographer serving Arlington, VA. On-location headshots in Rosslyn, Crystal City, Ballston, Pentagon City & Clarendon. Corporate teams, LinkedIn headshots, and executive portraits. Book today!"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Professional Headshots in Arlington, VA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto">
              On-Location Headshot Photography for Arlington's Business Professionals — From Rosslyn to Crystal City
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
                Arlington's Go-To Headshot Photographer
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Arlington, VA is home to some of the most driven professionals in the DC metro area. Whether you're in a
                glass tower in <strong>Rosslyn</strong>, working at <strong>Amazon HQ2</strong> in National Landing, or
                running a consulting firm off <strong>Wilson Boulevard in Ballston</strong>, your headshot needs to match
                the caliber of work you do.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                I bring my full professional studio setup directly to your Arlington office — or we can shoot at a location
                that fits your brand. No need to fight traffic into DC. I come to you with professional lighting, backgrounds,
                and my unique instant feedback process so you see and love your images before I leave.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Popular With Arlington Professionals:
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Government Contractors</strong> — Polished headshots for proposals and team pages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Tech Professionals</strong> — Stand out on LinkedIn and company bios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Consulting Firms</strong> — Consistent team headshots that build trust</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Defense & Intelligence</strong> — Professional imagery for cleared professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Nonprofit Leaders</strong> — Approachable portraits for annual reports and websites</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/Kevin_about.jpg"
                alt="Professional headshot photographer Kevin Elwell serving Arlington VA"
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
            Headshot Portfolio — Arlington VA Clients
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
            Serving All of Arlington, VA
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Rosslyn', 'Crystal City', 'Pentagon City', 'Ballston',
              'Clarendon', 'Courthouse', 'Virginia Square', 'National Landing',
              'Shirlington', 'Columbia Pike', 'Lyon Village', 'Cherrydale'
            ].map((location) => (
              <div key={location} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-red-50 transition-colors">
                <p className="text-gray-800 font-medium">{location}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            I also serve nearby areas including <a href="/headshots-washington-dc" className="text-red-500 hover:text-red-600 font-semibold">Washington DC</a>,{' '}
            <a href="/headshots-tysons-corner-va" className="text-red-500 hover:text-red-600 font-semibold">Tysons Corner</a>,{' '}
            <a href="/headshots-alexandria-va" className="text-red-500 hover:text-red-600 font-semibold">Alexandria</a>,{' '}
            <a href="/headshots-fairfax-va" className="text-red-500 hover:text-red-600 font-semibold">Fairfax</a>, and{' '}
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
            Headshot Photography FAQs — Arlington, VA
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Where can I get professional headshots in Arlington, VA?</h3>
              <p className="text-gray-700">
                Get Ahead Shot Photography provides professional headshots throughout Arlington, VA including Rosslyn, Ballston,
                Crystal City, Pentagon City, and Clarendon. We bring our full studio setup to your office or preferred location.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much do headshots cost in Arlington, VA?</h3>
              <p className="text-gray-700">
                Professional headshot sessions in the Arlington area typically range from $350-$700 depending on the package
                and number of looks. We offer competitive pricing with same-day turnaround options available.{' '}
                <a href="/more_info" className="text-red-500 hover:text-red-600">Get detailed pricing →</a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you travel to offices in Rosslyn and Crystal City for group headshots?</h3>
              <p className="text-gray-700">
                Yes! We frequently photograph corporate teams in Rosslyn, Crystal City, Pentagon City, and throughout the
                Arlington business corridor. We bring professional studio lighting and backgrounds directly to your office.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How quickly can I get my headshots back?</h3>
              <p className="text-gray-700">
                Standard turnaround is 48-72 hours with professionally edited, magazine-quality images. Same-day delivery
                is available for rush orders — perfect for Arlington professionals who need images fast.
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
            Why Arlington Professionals Choose Get Ahead Shot
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Arlington's business corridors — from the high-rises of Rosslyn to the tech campuses of National Landing —
              are packed with professionals who understand that image matters. Your headshot appears on proposals, LinkedIn,
              company websites, and conference bios. A generic phone photo doesn't cut it when you're competing at this level.
            </p>
            <p>
              With over 10 years of experience photographing professionals across the DC metro area, I've built a process
              that's efficient (30-45 minutes), comfortable (no stiff corporate poses), and produces results you'll actually
              be proud to use. My unique instant feedback system means you'll see your images in real-time and leave the
              session knowing you have exactly what you need.
            </p>
            <p className="mt-6">
              Ready to upgrade your professional image?{' '}
              <a href="/more_info" className="text-red-500 hover:text-red-600 font-semibold">Get pricing and book your Arlington headshot session today</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
