import Layout from '@/components/Layout'
import Image from 'next/image'
import MainGallery from '@/components/MainGallery'
import HeadshotProcess from '@/components/HeadshotProcess'
import HeadshotReviews from '@/components/HeadshotReviews'
import BeforeAfter from '@/components/BeforeAfter'
import PricingCTA from '@/components/PricingCTA'
import ScrollReveal from '@/components/ScrollReveal'

export default function ConsultantHeadshotsDC() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you photograph headshots for consultants in Washington DC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — consultants are one of the largest groups I photograph. I serve management consultants, IT consultants, strategy consultants, and government consultants across DC, Tysons, Reston, Arlington, and Bethesda. Sessions are tight (20-30 minutes per person) so they fit between client meetings."
        }
      },
      {
        "@type": "Question",
        "name": "Can you photograph our consulting team for a proposal or capability deck?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Proposal and capability-deck headshots are a routine engagement. I match all team members to a consistent background and lighting so the proposal looks unified, and I deliver multiple crops (square for slides, vertical for bios, horizontal for LinkedIn) from the same session."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can I get headshots back for a proposal deadline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard turnaround is 48-72 hours with full retouching. Same-day rush delivery is available for proposal deadlines — just flag the deadline at booking and I'll prioritize your team's images."
        }
      },
      {
        "@type": "Question",
        "name": "What does a consultant headshot session cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Individual sessions typically range from $375-$700 depending on the package, number of looks, and turnaround. Firms photographing teams of 10+ receive volume pricing and consistent backgrounds across the whole roster — so partner, principal, and associate photos all match."
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
      { "@type": "ListItem", "position": 3, "name": "Consultant Headshots DC", "item": "https://getaheadshot.net/consultant-headshots-dc" }
    ]
  };

  return (
    <Layout
      title="Consultant Headshots Washington DC | Headshot Photographer for Consulting Firms"
      description="Headshot photography for consultants, partners, and consulting teams across Washington DC and Northern Virginia. On-site sessions for proposals, capability decks, and LinkedIn profiles."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Consultant Headshots in Washington DC
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto">
              Headshot Photography Built for Consulting — Proposals, Capability Decks, and LinkedIn
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
                Photography for the Way Consultants Sell
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                A consultant's photograph is on the proposal cover, the capability deck, the firm bio
                page, the LinkedIn profile a prospect checks before signing the SOW, and increasingly the
                conference badge at industry events. The same image works hard across every touchpoint —
                so it has to be the right image.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                I photograph consultants at firms throughout the DC metro — from Booz Allen and Deloitte
                in Tysons, to McKinsey and BCG in DC proper, to boutique strategy and IT consultancies
                across NoVA. I bring the full studio to your office and photograph individuals in
                20-30 minute slots that fit between client calls.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                What Consultants Get From a Session:
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Proposal-Ready Imagery</strong> — Multiple crops and aspect ratios (square, vertical, horizontal) from one session, optimized for capability decks and proposals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Team Consistency</strong> — Matched lighting and backgrounds so partner, principal, and senior associate photos all look like one cohesive firm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Multiple Looks</strong> — Suit-and-tie for client-facing, business casual for internal, optional alternate background for variety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Rush Turnaround Available</strong> — Same-day delivery for proposal deadlines, standard 48-72 hours otherwise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>On-Site at Your Office</strong> — No commute to a studio; sessions happen in a conference room or unused office during the work day</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/Kevin_about.jpg"
                alt="Headshot photographer for Washington DC consultants"
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
            Consultant Headshot Portfolio
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
            Serving Consulting Firms Across the DC Metro
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Tysons Corner', 'McLean', 'Reston', 'Arlington',
              'Washington DC', 'K Street', 'Foggy Bottom', 'Bethesda',
              'Rosslyn', 'Crystal City', 'Ballston', 'Herndon'
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
            Consultant Headshot FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you photograph headshots for consultants in Washington DC?</h3>
              <p className="text-gray-700">
                Yes — consultants are one of the largest groups I photograph. I serve management
                consultants, IT consultants, strategy consultants, and government consultants across
                DC, Tysons, Reston, Arlington, and Bethesda. Sessions are tight so they fit between
                client meetings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can you photograph our team for a proposal or capability deck?</h3>
              <p className="text-gray-700">
                Yes. Proposal and capability-deck headshots are a routine engagement. I match all team
                members to a consistent background and lighting so the proposal looks unified, and I
                deliver multiple crops from the same session.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How quickly can I get headshots back for a proposal deadline?</h3>
              <p className="text-gray-700">
                Standard turnaround is 48-72 hours with full retouching. Same-day rush delivery is
                available for proposal deadlines — flag the deadline at booking and I'll prioritize
                your team's images.{' '}
                <a href="/more_info" className="text-red-500 hover:text-red-600">Get pricing &#8594;</a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What does a consultant headshot session cost?</h3>
              <p className="text-gray-700">
                Individual sessions typically range from $375-$700 depending on package, looks, and
                turnaround. Teams of 10+ receive volume pricing and consistent backgrounds across the
                whole roster.
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
            Why DC Consultants Choose Get aHead Shot
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Consulting is a relationship business that runs on credibility signals. Before a prospect
              accepts a meeting, they look up the consultant on LinkedIn, the firm's website, and
              maybe the proposal cover. Three touchpoints, often the same headshot. If that image
              doesn't match the caliber of the work being pitched, it quietly drags down conversion
              the consultant never sees.
            </p>
            <p>
              I've photographed thousands of consultants — partners, principals, senior associates,
              and rising-star analysts — at firms across the DC metro. The session is built around
              how consultants actually work: short blocks of time, tight scheduling, on-site at the
              office, multiple deliverables from one sitting so the same image works in a capability
              deck, a LinkedIn profile, and a firm bio.
            </p>
            <p>
              For firms refreshing the team page or assembling a proposal, I match background and
              lighting across every team member so the deliverables read as one cohesive firm — not a
              stack of independent snapshots from different photographers in different years.
            </p>
            <p className="mt-6">
              Ready to upgrade your professional image?{' '}
              <a href="/more_info" className="text-red-500 hover:text-red-600 font-semibold">Get pricing and book your consultant headshot session</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
