import Layout from '@/components/Layout'
import Image from 'next/image'
import MainGallery from '@/components/MainGallery'
import HeadshotProcess from '@/components/HeadshotProcess'
import HeadshotReviews from '@/components/HeadshotReviews'
import BeforeAfter from '@/components/BeforeAfter'
import PricingCTA from '@/components/PricingCTA'

export default function LinkedInHeadshots() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do I need a professional LinkedIn headshot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LinkedIn profiles with professional headshots get 14x more views and 36x more messages than those without. Your headshot is the first thing recruiters, clients, and connections see. A polished, authentic LinkedIn photo builds trust instantly and signals that you take your career seriously."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a LinkedIn headshot cost in the Washington DC area?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional LinkedIn headshot sessions in the DC metro area typically range from $350-$700 depending on the package, number of looks, and turnaround time. Unlike AI-generated headshots, you get magazine-quality images with professional lighting and natural expressions."
        }
      },
      {
        "@type": "Question",
        "name": "What should I wear for a LinkedIn headshot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wear what you'd wear to meet your most important client. Solid colors work best — avoid busy patterns and large logos. Bring 2-3 outfit options so we can find what photographs best. We provide a detailed preparation guide before your session."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a LinkedIn headshot session take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Individual LinkedIn headshot sessions take 30-45 minutes. This includes time for multiple looks and wardrobe changes. You'll see every image in real-time through our instant feedback system, so you'll know you have the perfect shot before we wrap up."
        }
      },
      {
        "@type": "Question",
        "name": "Can you come to my office for LinkedIn team headshots?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We bring our full professional studio setup — lighting, backgrounds, everything — to your office anywhere in the DC, Northern Virginia, or Maryland area. For corporate teams, we can photograph 15-20 people per hour with consistent, polished results."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://getaheadshot.net" },
      { "@type": "ListItem", "position": 2, "name": "LinkedIn Headshots", "item": "https://getaheadshot.net/linkedin-headshots" }
    ]
  };

  return (
    <Layout
      title="LinkedIn Headshot Photographer Washington DC | Professional LinkedIn Photos"
      description="Professional LinkedIn headshot photographer serving Washington DC, Northern Virginia & Maryland. Stand out with a magazine-quality LinkedIn profile photo. On-location or studio. Same-day turnaround available. Book today!"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              LinkedIn Headshots That Get You Noticed
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto">
              Professional LinkedIn Headshot Photographer in Washington DC — Your Profile Photo Is Your First Impression
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

      {/* Why LinkedIn Headshots Matter */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your LinkedIn Photo Is Working 24/7
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Before anyone reads your headline, checks your experience, or looks at your recommendations —
                they see your <strong>LinkedIn headshot</strong>. It's the single most viewed element of your
                entire professional presence online.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                A professional LinkedIn headshot does more than look good. It signals competence, approachability,
                and credibility. Profiles with professional photos receive <strong>14x more profile views</strong> and{' '}
                <strong>36x more messages</strong>. That's not vanity — that's visibility.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                But there's a difference between "professional" and "authentic." The stiff, over-retouched corporate
                photo from 10 years ago? That's hurting you. You need a LinkedIn headshot that looks like{' '}
                <strong>the best version of who you actually are today</strong>.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Who Needs a LinkedIn Headshot:
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Job Seekers</strong> — Stand out to recruiters in a crowded market</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Executives & Leaders</strong> — Project authority and approachability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Entrepreneurs</strong> — Build trust before the first conversation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Sales Professionals</strong> — Warm up cold outreach with a real connection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">&#10003;</span>
                  <span><strong>Consultants & Freelancers</strong> — Your photo is your storefront</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/Kevin_about.jpg"
                alt="Kevin Elwell - LinkedIn headshot photographer in Washington DC"
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
            LinkedIn Headshot Portfolio
          </h2>
          <MainGallery />
        </div>
      </section>

      <HeadshotProcess />
      <BeforeAfter />

      {/* AI vs Real */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why a Real LinkedIn Headshot Beats AI Every Time
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">It Actually Looks Like You</h3>
              <p className="text-gray-700">
                AI headshots create a version of you that doesn't exist. When someone meets you on a video call
                or in person and you don't match your photo, trust evaporates instantly.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Lighting Matters</h3>
              <p className="text-gray-700">
                Lighting is what separates a phone selfie from a magazine cover. Professional studio lighting
                sculpts your features, eliminates harsh shadows, and creates dimension no algorithm can replicate.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Authentic Expression</h3>
              <p className="text-gray-700">
                My instant feedback system captures genuine expressions — the confident smile, the approachable
                warmth — that makes people want to connect with you. AI can't coach that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            LinkedIn Headshots Across the DMV
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Washington DC', 'Arlington VA', 'Alexandria VA', 'Bethesda MD',
              'Tysons Corner', 'Reston VA', 'Fairfax VA', 'Centreville VA',
              'McLean VA', 'Silver Spring MD', 'Rockville MD', 'Herndon VA'
            ].map((location) => (
              <div key={location} className="bg-white p-4 rounded-lg text-center hover:bg-red-50 transition-colors">
                <p className="text-gray-800 font-medium">{location}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            I bring my full studio setup to your location — office, coworking space, or home — anywhere in the{' '}
            <a href="/headshots-northern-virginia" className="text-red-500 hover:text-red-600 font-semibold">Northern Virginia</a>,{' '}
            <a href="/headshots-washington-dc" className="text-red-500 hover:text-red-600 font-semibold">Washington DC</a>, and Maryland area.
          </p>
        </div>
      </section>

      <HeadshotReviews />

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            LinkedIn Headshot FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why do I need a professional LinkedIn headshot?</h3>
              <p className="text-gray-700">
                LinkedIn profiles with professional headshots get 14x more views and 36x more messages than
                those without. Your headshot is the first thing recruiters, clients, and connections see. A polished,
                authentic photo builds trust instantly and signals that you take your career seriously.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much does a LinkedIn headshot cost in the DC area?</h3>
              <p className="text-gray-700">
                Professional LinkedIn headshot sessions in the DC metro area typically range from $350-$700 depending
                on the package, number of looks, and turnaround time. Unlike AI-generated headshots, you get
                magazine-quality images with professional lighting and natural expressions.{' '}
                <a href="/more_info" className="text-red-500 hover:text-red-600">Get detailed pricing &#8594;</a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What should I wear for a LinkedIn headshot?</h3>
              <p className="text-gray-700">
                Wear what you'd wear to meet your most important client. Solid colors work best — avoid busy
                patterns and large logos. Bring 2-3 outfit options so we can find what photographs best. We provide
                a detailed preparation guide before your session.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does a LinkedIn headshot session take?</h3>
              <p className="text-gray-700">
                Individual sessions take 30-45 minutes. This includes time for multiple looks and wardrobe changes.
                You'll see every image in real-time through our instant feedback system, so you'll know you have
                the perfect shot before we wrap up.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can you come to my office for LinkedIn team headshots?</h3>
              <p className="text-gray-700">
                Yes! We bring our full professional studio setup — lighting, backgrounds, everything — to your
                office anywhere in the DC, Northern Virginia, or Maryland area. For corporate teams, we can
                photograph 15-20 people per hour with consistent, polished results.
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
            The LinkedIn Headshot That Works For You
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              In the Washington DC metro area, LinkedIn isn't optional — it's infrastructure. Government
              contractors vet teams through LinkedIn profiles. Recruiters source candidates by scrolling
              headshots. Consultants land clients through connection requests. Your LinkedIn headshot is
              doing the work of a handshake, a business card, and a first impression all at once.
            </p>
            <p>
              With over 10 years photographing DC-area professionals, I've seen what works. Not the
              stiff, arms-crossed corporate pose. Not the over-filtered selfie. The images that get
              results are the ones that look like the best version of you — confident, approachable,
              and real. My instant feedback process ensures we nail that in every session.
            </p>
            <p>
              Whether you're in <a href="/headshots-arlington-va" className="text-red-500 hover:text-red-600">Arlington</a>,{' '}
              <a href="/headshots-bethesda-md" className="text-red-500 hover:text-red-600">Bethesda</a>,{' '}
              <a href="/headshots-centreville-va" className="text-red-500 hover:text-red-600">Centreville</a>, or downtown DC,
              I bring a full studio to your door. No commute, no hassle — just a LinkedIn headshot that opens doors.
            </p>
            <p className="mt-6">
              Ready to upgrade your LinkedIn presence?{' '}
              <a href="/more_info" className="text-red-500 hover:text-red-600 font-semibold">Get pricing and book your LinkedIn headshot session today</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
