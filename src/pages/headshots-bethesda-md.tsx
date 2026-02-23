import Layout from '@/components/Layout'
import Image from 'next/image'
import MainGallery from '@/components/MainGallery'
import HeadshotProcess from '@/components/HeadshotProcess'
import HeadshotReviews from '@/components/HeadshotReviews'
import BeforeAfter from '@/components/BeforeAfter'
import PricingCTA from '@/components/PricingCTA'

export default function HeadshotsBethesdaMD() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I get professional headshots in Bethesda, MD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Get Ahead Shot Photography serves Bethesda, MD and surrounding areas including Chevy Chase, Potomac, North Bethesda, and Rockville. We bring our professional studio setup to your office, home, or any location that works for you."
        }
      },
      {
        "@type": "Question",
        "name": "How much do professional headshots cost in Bethesda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional headshot sessions in the Bethesda area typically range from $350-$700. Pricing depends on the package, number of final images, and turnaround time. Same-day delivery is available."
        }
      },
      {
        "@type": "Question",
        "name": "Do you photograph headshots for medical professionals at NIH or Walter Reed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we regularly photograph physicians, researchers, and healthcare professionals in the Bethesda area. We understand the professional standards required for hospital directories, academic publications, and medical practice websites."
        }
      },
      {
        "@type": "Question",
        "name": "Can you come to my Bethesda office for headshots?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We bring professional studio lighting, backgrounds, and equipment directly to your Bethesda location. On-location sessions are ideal for busy professionals and corporate teams who don't want to travel."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://getaheadshot.net" },
      { "@type": "ListItem", "position": 2, "name": "Headshots Bethesda MD", "item": "https://getaheadshot.net/headshots-bethesda-md" }
    ]
  };

  return (
    <Layout
      title="Professional Headshots Bethesda MD | Chevy Chase & Potomac Headshot Photographer"
      description="Professional headshot photographer serving Bethesda, MD. On-location headshots in Bethesda, Chevy Chase, Potomac, North Bethesda & Rockville. Healthcare professionals, executives, and corporate teams. Book today!"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Professional Headshots in Bethesda, MD
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto">
              Magazine-Quality Headshot Photography for Bethesda's Healthcare Leaders, Executives, and Business Professionals
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
                Bethesda's Trusted Headshot Photographer
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Bethesda is a hub for healthcare, research, and executive talent. With the <strong>National Institutes of Health</strong>,
                {' '}<strong>Walter Reed National Military Medical Center</strong>, and a thriving <strong>downtown Bethesda</strong> business
                district, the professionals here demand a headshot that reflects their expertise and credibility.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                I bring my full professional studio to your Bethesda office, medical practice, or any location along the
                {' '}<strong>Wisconsin Avenue</strong> corridor. My process takes just 30-45 minutes and includes real-time
                feedback so you see and approve your images before I leave.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Popular With Bethesda Professionals:
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Physicians & Researchers</strong> — Polished portraits for hospital directories and publications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Healthcare Executives</strong> — Executive portraits for leadership pages and conferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Financial Advisors</strong> — Build client trust with a professional, approachable image</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Real Estate Agents</strong> — Stand out in the competitive Montgomery County market</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span><strong>Attorneys & Consultants</strong> — Professional headshots that convey authority</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/Kevin_about.jpg"
                alt="Professional headshot photographer Kevin Elwell serving Bethesda MD"
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
            Headshot Portfolio — Bethesda MD Clients
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
            Serving Bethesda and Montgomery County
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Downtown Bethesda', 'Chevy Chase', 'Potomac', 'North Bethesda',
              'Rockville', 'Kensington', 'Garrett Park', 'Glen Echo',
              'Cabin John', 'Friendship Heights', 'Bradley Hills', 'Wildwood'
            ].map((location) => (
              <div key={location} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-red-50 transition-colors">
                <p className="text-gray-800 font-medium">{location}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            I also serve nearby areas including <a href="/headshots-washington-dc" className="text-red-500 hover:text-red-600 font-semibold">Washington DC</a>,{' '}
            <a href="/headshots-arlington-va" className="text-red-500 hover:text-red-600 font-semibold">Arlington</a>,{' '}
            <a href="/headshots-alexandria-va" className="text-red-500 hover:text-red-600 font-semibold">Alexandria</a>, and{' '}
            <a href="/headshots-fairfax-va" className="text-red-500 hover:text-red-600 font-semibold">Fairfax</a>.
          </p>
        </div>
      </section>

      <HeadshotReviews />

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Headshot Photography FAQs — Bethesda, MD
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Where can I get professional headshots in Bethesda, MD?</h3>
              <p className="text-gray-700">
                Get Ahead Shot Photography serves Bethesda, MD and surrounding areas including Chevy Chase, Potomac, North
                Bethesda, and Rockville. We bring our professional studio setup to your office, home, or any location.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much do professional headshots cost in Bethesda?</h3>
              <p className="text-gray-700">
                Professional headshot sessions in the Bethesda area typically range from $350-$700. Pricing depends on the
                package, number of final images, and turnaround time. Same-day delivery is available.{' '}
                <a href="/more_info" className="text-red-500 hover:text-red-600">Get detailed pricing →</a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you photograph headshots for medical professionals at NIH or Walter Reed?</h3>
              <p className="text-gray-700">
                Yes, we regularly photograph physicians, researchers, and healthcare professionals in the Bethesda area.
                We understand the standards required for hospital directories, academic publications, and medical practice websites.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can you come to my Bethesda office for headshots?</h3>
              <p className="text-gray-700">
                Absolutely. We bring professional studio lighting, backgrounds, and equipment directly to your Bethesda location.
                On-location sessions are ideal for busy professionals and corporate teams who don't want to travel.
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
            Why Bethesda Professionals Choose Get Ahead Shot
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Bethesda's professional community sets a high bar. Whether you're a researcher publishing groundbreaking work
              at NIH, a physician building a private practice along Wisconsin Avenue, or a financial advisor meeting clients
              at the Bethesda Metro Center, your headshot is how people judge you before they ever shake your hand.
            </p>
            <p>
              With over 10 years photographing DC-area professionals, I've developed a process that's fast (30-45 minutes),
              natural (no forced smiles or stiff poses), and produces images that actually look like you on your best day.
              My instant feedback system lets you see every shot in real-time, so there are no surprises — just confidence
              that you'll love the result.
            </p>
            <p className="mt-6">
              Ready for a headshot that matches your expertise?{' '}
              <a href="/more_info" className="text-red-500 hover:text-red-600 font-semibold">Get pricing and book your Bethesda headshot session today</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
