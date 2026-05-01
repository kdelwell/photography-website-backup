import Layout from '@/components/Layout'
import Image from 'next/image'
import MainGallery from '@/components/MainGallery'
import HeadshotProcess from '@/components/HeadshotProcess'
import HeadshotReviews from '@/components/HeadshotReviews'
import BeforeAfter from '@/components/BeforeAfter'
import PricingCTA from '@/components/PricingCTA'
import ScrollReveal from '@/components/ScrollReveal'

export default function LawFirmHeadshotsDC() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you photograph attorney headshots at law firms in Washington DC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. I bring a full professional studio setup directly to law firms throughout DC, including K Street, Connecticut Avenue, the Wharf, and the surrounding NoVA/Maryland markets. Most partners and associates are photographed in 20-30 minutes in a conference room or office."
        }
      },
      {
        "@type": "Question",
        "name": "Can you photograph an entire law firm in one day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — I regularly photograph 15-20 attorneys per hour on-site, which means most small and mid-sized firms can complete their attorney directory in a single day. For large firms, I schedule across multiple days to fit court calendars and partner availability."
        }
      },
      {
        "@type": "Question",
        "name": "How much do law firm headshots cost in Washington DC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Individual attorney headshot sessions typically range from $375-$700 depending on package, number of looks, and turnaround. Firms photographing 10+ attorneys receive volume pricing and consistent lighting/background across the whole directory so partner and associate pages match."
        }
      },
      {
        "@type": "Question",
        "name": "Will the headshots match the look of our existing partner photos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. I match background, lighting, and crop to your firm's existing attorney directory so new headshots blend seamlessly with prior work. I keep the lighting/setup file on hand so subsequent sessions for new hires stay visually consistent year over year."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://getaheadshot.net" },
      { "@type": "ListItem", "position": 2, "name": "Headshots Washington DC", "item": "https://getaheadshot.net/headshots-washington-dc" },
      { "@type": "ListItem", "position": 3, "name": "Law Firm Headshots DC", "item": "https://getaheadshot.net/law-firm-headshots-dc" }
    ]
  };

  return (
    <Layout
      title="Law Firm Headshots Washington DC | Attorney Headshot Photographer"
      description="On-site attorney headshot photography for Washington DC law firms. Consistent partner & associate headshots for firm directories, bios, and legal profiles. Book a firm session."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Law Firm Headshots in Washington DC
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto">
              Attorney Headshot Photography for DC Firms — On-Site, Consistent, and Built for Legal Directories
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

      <ScrollReveal animation="fade-up">
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Built for the Way DC Firms Work
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                A law firm headshot is not just a portrait — it's a credibility asset. Clients evaluate
                counsel from a directory page before they ever pick up the phone. Whether you're listed on
                <strong> Chambers</strong>, <strong>Best Lawyers</strong>, <strong>Super Lawyers</strong>,
                or your own firm's attorney roster, the photograph next to your name is doing real work.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                I bring a complete professional studio to your firm — lighting, backgrounds, posing
                guidance, instant review — and photograph partners, associates, of-counsel, and staff in
                20-30 minute slots booked around court calendars and client meetings. Sessions happen in a
                conference room or unused office; no one needs to leave the building.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                What I Deliver for Firms:
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Directory-Ready Consistency</strong> — Same background, lighting, and crop across every attorney so your "Our Team" page reads as one cohesive firm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Year-Over-Year Match</strong> — Lighting setup is documented so new hires photographed next year still match the partners shot today</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Multiple Crops Per Attorney</strong> — Square for firm bios, vertical for press, horizontal for LinkedIn banners — all from one session</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Court-Calendar Friendly Scheduling</strong> — Tight 20-30 minute slots that work around hearings, depositions, and client meetings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Professional Retouching</strong> — Clean, conservative retouching appropriate for legal directories — no over-processing</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/ME_2026_5x4.jpg"
                alt="Law firm headshot photographer for Washington DC attorneys"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal animation="fade-in">
      <section id="portfolio" className="bg-gray-50">
        <div className="py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            Attorney Headshot Portfolio
          </h2>
          <MainGallery />
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
      <HeadshotProcess />
      </ScrollReveal>
      <ScrollReveal animation="fade-in">
      <BeforeAfter />
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Serving DC Law Firms Across the Region
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'K Street', 'Connecticut Ave', 'The Wharf', 'Penn Quarter',
              'Dupont Circle', 'Foggy Bottom', 'Georgetown', 'Capitol Hill',
              'Tysons Corner', 'Reston', 'Arlington', 'Bethesda'
            ].map((location) => (
              <div key={location} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-red-50 transition-colors">
                <p className="text-gray-800 font-medium">{location}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            Also available in{' '}
            <a href="/headshots-northern-virginia" className="text-red-500 hover:text-red-600 font-semibold">Northern Virginia</a>,{' '}
            <a href="/headshots-bethesda-md" className="text-red-500 hover:text-red-600 font-semibold">Bethesda</a>, and{' '}
            <a href="/headshots-tysons-corner-va" className="text-red-500 hover:text-red-600 font-semibold">Tysons Corner</a>.
          </p>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
      <HeadshotReviews />
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Law Firm Headshot FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you photograph attorney headshots at law firms in Washington DC?</h3>
              <p className="text-gray-700">
                Yes. I bring a full professional studio setup directly to law firms throughout DC,
                including K Street, Connecticut Avenue, the Wharf, and the surrounding NoVA and Maryland
                markets. Most partners and associates are photographed in 20-30 minutes in a conference
                room or office.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can you photograph an entire law firm in one day?</h3>
              <p className="text-gray-700">
                Yes — I regularly photograph 15-20 attorneys per hour on-site, which means most small and
                mid-sized firms can complete their attorney directory in a single day. For large firms,
                I schedule across multiple days to fit court calendars and partner availability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much do law firm headshots cost?</h3>
              <p className="text-gray-700">
                Individual attorney sessions typically range from $375-$700 depending on package, looks,
                and turnaround. Firms photographing 10+ attorneys receive volume pricing and a documented
                lighting setup so future hires stay consistent.{' '}
                <a href="/more_info" className="text-red-500 hover:text-red-600">Get firm pricing &#8594;</a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Will the headshots match our existing partner photos?</h3>
              <p className="text-gray-700">
                Yes. I match background, lighting, and crop to your firm's existing attorney directory so
                new headshots blend seamlessly with prior work. The lighting setup is documented so
                subsequent sessions for new hires stay visually consistent year over year.
              </p>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
      <PricingCTA />
      </ScrollReveal>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why DC Law Firms Choose Get aHead Shot
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              A law firm's website is its front door. The first thing a prospective client sees on an
              attorney bio page — before reading about practice areas, before checking credentials —
              is the headshot. A flat, inconsistent, or out-of-date photograph quietly costs the firm
              business it never knows it lost.
            </p>
            <p>
              I've photographed partners, associates, and counsel at firms across the DC metro for
              over a decade. My process is built around how legal teams actually work: tight scheduling,
              respect for billable time, conservative retouching that holds up to scrutiny, and a
              consistent visual standard across the entire attorney directory. Sessions happen on-site
              at your firm — no commute to a studio, no court-calendar conflicts.
            </p>
            <p>
              For firms doing a full directory refresh, I document the lighting setup so the partner
              shot today and the new hire photographed in 18 months still match. That continuity is
              what separates a polished firm directory from one that looks like a stack of independent
              snapshots.
            </p>
            <p className="mt-6">
              Ready to refresh your firm's attorney directory?{' '}
              <a href="/more_info" className="text-red-500 hover:text-red-600 font-semibold">Get firm pricing and book your law firm headshot session</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
