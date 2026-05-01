import Layout from '@/components/Layout'
import Image from 'next/image'
import MainGallery from '@/components/MainGallery'
import HeadshotProcess from '@/components/HeadshotProcess'
import HeadshotReviews from '@/components/HeadshotReviews'
import BeforeAfter from '@/components/BeforeAfter'
import PricingCTA from '@/components/PricingCTA'
import ScrollReveal from '@/components/ScrollReveal'

export default function GovernmentContractorHeadshots() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you photograph headshots for government contractors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — government contractors are one of the largest sectors I photograph. I serve federal contractors, defense contractors, and IT contractors across the DC metro, including the contractor corridors of Tysons, Reston, Herndon, Chantilly, and Arlington. Sessions happen on-site at your office."
        }
      },
      {
        "@type": "Question",
        "name": "Can you photograph our team for a capability statement or federal proposal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Capability statement and federal proposal headshots are routine for me. I match all key personnel to a consistent background and lighting so the capability statement and proposal look unified across leadership and program manager photos."
        }
      },
      {
        "@type": "Question",
        "name": "Do you have experience with cleared facility photography?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I'm experienced photographing in a range of contractor settings. For cleared spaces, sessions are typically scheduled in unclassified conference rooms or visitor areas. Discuss any access constraints at booking and I'll plan the setup accordingly."
        }
      },
      {
        "@type": "Question",
        "name": "What does a government contractor headshot session cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Individual sessions typically range from $375-$700 depending on package, looks, and turnaround. Teams of 10+ for capability statements and proposals receive volume pricing and consistent imagery across the whole leadership roster."
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
      { "@type": "ListItem", "position": 3, "name": "Government Contractor Headshots", "item": "https://getaheadshot.net/government-contractor-headshots" }
    ]
  };

  return (
    <Layout
      title="Government Contractor Headshots | Federal Contractor Photographer DC & NoVA"
      description="Headshot photography for government contractors across DC and Northern Virginia. On-site sessions for capability statements, federal proposals, and leadership pages."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Government Contractor Headshots
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto">
              Headshot Photography for Federal Contractors — Capability Statements, Proposals, and Leadership Pages
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
                Built for the GovCon World
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                In federal contracting, the photograph next to the program manager's name on a capability
                statement is doing real work. Contracting officers, source-selection panels, and prime
                contractors all evaluate proposals partly on the strength of the team — and the team
                photo is part of that signal. A flat, inconsistent leadership photo costs your bid points
                you can't afford to lose.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                I photograph contractors throughout the DC/NoVA federal corridor — from the towers in
                Tysons, the campuses around Reston/Herndon, to the contractor offices ringing the
                Pentagon and Crystal City. I bring a full studio setup to your office, work around
                cleared-space constraints, and photograph leadership and program staff in 20-30 minute
                slots that fit between meetings and customer visits.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                What GovCon Clients Get:
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Capability-Statement Ready</strong> — Multiple crops and aspect ratios suited to one-page capability statements, GSA schedule pages, and SAM.gov listings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Proposal Team Consistency</strong> — Matched background and lighting across every key personnel photo so the proposal reads as one cohesive team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Cleared-Space Aware</strong> — Sessions structured around unclassified conference rooms or visitor areas; sensitive content stays out of frame</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Conservative Retouching</strong> — Polished but appropriate for federal contexts — no over-processing that reads as inauthentic to evaluators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Rush Delivery for Bid Deadlines</strong> — Same-day turnaround available for proposal deadlines; standard 48-72 hours otherwise</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/ME_2026_5x4.jpg"
                alt="Headshot photographer for government contractors in DC and Northern Virginia"
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
            Government Contractor Headshot Portfolio
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
            Serving the DC/NoVA GovCon Corridor
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Tysons Corner', 'Reston', 'Herndon', 'Chantilly',
              'Arlington', 'Crystal City', 'Pentagon City', 'Springfield',
              'Fairfax', 'Centreville', 'Bethesda', 'Washington DC'
            ].map((location) => (
              <div key={location} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-red-50 transition-colors">
                <p className="text-gray-800 font-medium">{location}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            Also available in{' '}
            <a href="/headshots-northern-virginia" className="text-red-500 hover:text-red-600 font-semibold">Northern Virginia</a>,{' '}
            <a href="/headshots-tysons-corner-va" className="text-red-500 hover:text-red-600 font-semibold">Tysons Corner</a>, and{' '}
            <a href="/headshots-reston-va" className="text-red-500 hover:text-red-600 font-semibold">Reston</a>.
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
            Government Contractor Headshot FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you photograph headshots for government contractors?</h3>
              <p className="text-gray-700">
                Yes — government contractors are one of the largest sectors I photograph. I serve
                federal contractors, defense contractors, and IT contractors across the DC metro,
                including the contractor corridors of Tysons, Reston, Herndon, Chantilly, and Arlington.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can you photograph our team for a capability statement or federal proposal?</h3>
              <p className="text-gray-700">
                Yes. Capability statement and federal proposal headshots are routine. I match all key
                personnel to a consistent background and lighting so the capability statement and
                proposal look unified across leadership and program manager photos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you have experience with cleared facility photography?</h3>
              <p className="text-gray-700">
                I'm experienced photographing in a range of contractor settings. For cleared spaces,
                sessions are typically scheduled in unclassified conference rooms or visitor areas.
                Discuss any access constraints at booking and I'll plan the setup accordingly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What does a session cost?</h3>
              <p className="text-gray-700">
                Individual sessions typically range from $375-$700 depending on package, looks, and
                turnaround. Teams of 10+ for capability statements and proposals receive volume pricing
                and consistent imagery across the whole leadership roster.{' '}
                <a href="/more_info" className="text-red-500 hover:text-red-600">Get pricing &#8594;</a>
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
            Why DC/NoVA Contractors Choose Get aHead Shot
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              The DC metro is the federal contracting capital of the country. With Booz Allen, Leidos,
              SAIC, CACI, ManTech, Maximus, and thousands of mid-tier and small contractors anchored
              along the corridor, the concentration of federal-facing professionals is unmatched
              anywhere else. The headshots that go on capability statements, GSA schedules, federal
              proposals, and SAM.gov pages are doing real work in the bid evaluation process.
            </p>
            <p>
              I've photographed program managers, technical leads, principal investigators, and C-suite
              executives at contractors throughout the DC/NoVA federal corridor for over a decade. My
              process is built around how contractors actually work: tight scheduling around customer
              meetings, on-site at your office, conservative retouching that holds up in front of
              government evaluators, and consistent imagery across the leadership team so capability
              statements and proposals look unified.
            </p>
            <p>
              For firms doing a directory or capability-statement refresh, I document the lighting setup
              so new hires photographed in 18 months still match the leadership shot today. That kind
              of continuity is invisible when it's done well — and obvious when it isn't.
            </p>
            <p className="mt-6">
              Ready to refresh your contractor team's headshots?{' '}
              <a href="/more_info" className="text-red-500 hover:text-red-600 font-semibold">Get pricing and book your government contractor headshot session</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
