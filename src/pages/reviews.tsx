import Layout from '@/components/Layout'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import allReviews from '@/data/reviews.json'
import reviewImages from '@/data/review-images.json'
import ScrollReveal from '@/components/ScrollReveal'

const imageMap: Record<string, string> = reviewImages as Record<string, string>

type Review = { name: string; rating: string; comment: string; date: string }

// Categorize reviews
function categorize(r: Review): string[] {
  const c = r.comment.toLowerCase()
  const tags: string[] = []
  if (c.includes('team') || c.includes('group') || c.includes('corporate') || c.includes('company') || c.includes('employees') || c.includes('office') || c.includes('organization') || c.includes('staff') || c.includes('leadership')) tags.push('corporate')
  if (c.includes('comfort') || c.includes('at ease') || c.includes('relax') || c.includes('nervous') || c.includes('shy') || c.includes('hate') || c.includes('awkward') || c.includes('camera')) tags.push('comfort')
  if (c.includes('coach') || c.includes('guided') || c.includes('direction') || c.includes('pose') || c.includes('posing')) tags.push('guided')
  if (c.includes('natural') || c.includes('authentic') || c.includes('genuine') || c.includes('personality')) tags.push('natural')
  if (c.includes('linkedin') || c.includes('profile') || c.includes('website') || c.includes('social media')) tags.push('professional')
  if (c.includes('fun') || c.includes('enjoy') || c.includes('great time') || c.includes('blast')) tags.push('fun')
  if (c.includes('hair') || c.includes('makeup') || c.includes('mallory')) tags.push('hair-makeup')
  return tags
}

// Names featured in the corporate section — exclude from main grid
const FEATURED_NAMES = ['Noah Fye']

/** Format name as "FirstName L." */
function formatName(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length < 2) return name
  return `${parts[0]} ${parts[parts.length - 1][0]}.`
}

const reviews: (Review & { tags: string[] })[] = (allReviews as Review[])
  .filter(r => !FEATURED_NAMES.includes(r.name))
  .map(r => ({ ...r, tags: categorize(r) }))

const FILTERS = [
  { id: 'all', label: 'All Reviews' },
  { id: 'corporate', label: 'Corporate & Groups' },
  { id: 'comfort', label: 'Camera Shy' },
  { id: 'guided', label: 'Coaching & Direction' },
  { id: 'natural', label: 'Natural & Authentic' },
  { id: 'fun', label: 'Fun Experience' },
  { id: 'hair-makeup', label: 'Hair & Makeup' },
]

function Initials({ name }: { name: string }) {
  const parts = name.split(/\s+/)
  const initials = parts.length >= 2 ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase() : name.slice(0, 2).toUpperCase()
  // Deterministic color from name
  const colors = ['bg-red-600', 'bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-amber-600', 'bg-teal-600', 'bg-pink-600', 'bg-indigo-600']
  const idx = name.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % colors.length
  return (
    <div className={`w-10 h-10 rounded-full ${colors[idx]} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
      {initials}
    </div>
  )
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" width="16" height="16" fill="#FBBC05">
          <path d="M10 1l2.39 6.26H19l-5.3 4.13L15.82 18 10 13.87 4.18 18l2.12-6.61L1 7.26h6.61z"/>
        </svg>
      ))}
    </div>
  )
}

function formatDate(d: string) {
  if (!d) return ''
  const [y, m, day] = d.split('-')
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${months[parseInt(m) - 1]} ${parseInt(day)}, ${y}`
}

export default function ReviewsPage() {
  const [filter, setFilter] = useState('all')
  const [showCount, setShowCount] = useState(24)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const filtered = filter === 'all' ? reviews : reviews.filter(r => r.tags.includes(filter))
  const visible = filtered.slice(0, showCount)
  const hasMore = showCount < filtered.length

  return (
    <Layout
      title="Client Reviews | Get aHead Shot — 230+ Five-Star Reviews"
      description="Read 230+ five-star reviews from professionals who got their headshots with Get aHead Shot. See what clients say about the experience, coaching, and results."
    >
      {/* Hero summary */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" width="28" height="28" fill="#FBBC05">
                  <path d="M10 1l2.39 6.26H19l-5.3 4.13L15.82 18 10 13.87 4.18 18l2.12-6.61L1 7.26h6.61z"/>
                </svg>
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
          </div>
          <p className="text-lg text-gray-600 mb-2">
            {reviews.length}+ verified Google reviews
          </p>
          <a
            href="https://www.google.com/search?q=Get+aHead+Shot+Photography+Centreville+VA+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-700 text-sm font-medium"
          >
            View on Google &rarr;
          </a>
        </div>
      </section>

      {/* Featured corporate section */}
      <ScrollReveal animation="fade-up">
      <section style={{ backgroundColor: '#242424', paddingTop: '48px', paddingBottom: '48px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            Trusted by Teams & Organizations
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            From leadership teams to full-company headshot days, we deliver consistent, professional results at scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "He got more than 40 people done in less than one workday, to the tune of rave reviews from all the participants. Turnaround time for the edited images was less than a week.",
                name: "Noah F.",
                context: "Leadership team summit",
                image: "/images/Reviews/TriaFed.jpg",
                type: "composite" as const,
              },
              {
                quote: "We did our full leadership suite headshots with Kevin and plan to continue sending our team members to him as we grow.",
                name: "Lane C.",
                context: "Corporate headshots",
                image: "/images/Reviews/QBE.jpg",
                type: "composite" as const,
              },
              {
                quote: "Our whole company has been photographed by Kevin and we highly recommend him. Kevin really pays attention to detail and provides guidance whenever you need it.",
                name: "Princy M.",
                context: "Company-wide headshots",
                image: "/images/Reviews/Princy_5009.jpg",
                type: "person" as const,
              },
            ].map((t) => (
              <div key={t.name} className="bg-white/5 rounded-lg p-6 flex gap-4">
                <button
                  onClick={() => setLightboxImage(t.image)}
                  className={`relative flex-shrink-0 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity ${
                    t.type === 'composite' ? 'w-24 h-24 rounded-lg' : 'w-20 h-20 rounded-full'
                  }`}
                >
                  <Image src={t.image} alt={`${t.name} headshot`} fill className="object-cover" />
                </button>
                <div className="flex-1">
                  <p className="text-white text-sm italic leading-relaxed mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm font-medium">— {t.name}</span>
                    <span className="text-gray-500 text-xs">{t.context}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/groups"
              className="text-red-400 hover:text-red-300 text-sm font-medium"
            >
              Learn about group headshots &rarr;
            </Link>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Client profile summaries — SEO-rich category descriptions */}
      <ScrollReveal animation="fade-up">
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            What Different Clients Say
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Over 200 professionals from every background have shared their experience. Here&apos;s what stands out by client type.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Teams &amp; Organizations <span className="text-gray-400 font-normal text-base">(8 reviews)</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Coordinators of team and corporate photography sessions &mdash; from five-person leadership suites to 40+ employee company-wide shoots &mdash; describe organized, efficient processes that produce visually cohesive results across a wide range of comfort levels. Reviewers include operations directors, company owners, and team leads who specifically praise the fast turnaround (under one week for 40+ headshots), multiple delivery formats, and the ability to maintain visual consistency across team members. Several plan to continue sending new hires as their organizations grow, and one notes that new images integrate seamlessly with existing brand photography.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Executives &amp; Senior Professionals <span className="text-gray-400 font-normal text-base">(15 reviews)</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Executives and senior professionals &mdash; including a CEO, senior leaders, managing partners, and seasoned consultants &mdash; consistently describe sessions that balance efficiency with genuine comfort. Several note that Kevin&apos;s consultation process addresses how they want to be perceived before a camera is involved, producing headshots that communicate authority and credibility without appearing stiff or generic. Reviewers describe images that have directly supported their professional presence, with one noting regular compliments from colleagues, board members, and speaking engagement organizers. A repeat client who does extensive public speaking credits Kevin with capturing headshots that authentically represent her at scale.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Entrepreneurs, Business Owners &amp; Independent Professionals <span className="text-gray-400 font-normal text-base">(20 reviews)</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Independent professionals, business owners, and emerging leaders &mdash; including attorneys, coaches, consultants, architects, authors, and practice owners &mdash; describe headshots that communicate credibility and approachability during career-defining moments: practice launches, book publications, company formations, and professional pivots. Reviews highlight Kevin&apos;s ability to understand the specific visual needs of each field, from legal marketing materials to author publicity photos. An attorney recommends Kevin specifically to &ldquo;fellow attorneys, coaches, consultants, and business owners.&rdquo; An author preparing to market her first book valued Kevin&apos;s knowledge of commercial licensing for photography. Multiple entrepreneurs note that the investment paid for itself in the professional image it projected.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Career Changers &amp; Job Seekers <span className="text-gray-400 font-normal text-base">(18 reviews)</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Professionals in career transition &mdash; including those starting new positions, updating LinkedIn profiles for job searches, furloughed employees re-entering the workforce, and military members transitioning to civilian careers &mdash; describe Kevin&apos;s headshots as a critical tool in presenting their best professional self during a pivotal moment. A veteran with partial facial paralysis credits Kevin&apos;s patient coaching with producing two photographs he&apos;s proud to use in his post-military career. A furloughed employee who received a donated session notes that Kevin&apos;s posing tips were valuable not just for the photo but for interview body language. Multiple reviewers specifically mention updating LinkedIn profile photos that were years &mdash; sometimes decades &mdash; overdue.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Camera-Shy &amp; First-Timers <span className="text-gray-400 font-normal text-base">(35+ reviews)</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Clients who describe themselves as people who &ldquo;hate having their picture taken,&rdquo; feel &ldquo;awkward in front of the camera,&rdquo; or had never sat for a professional headshot &mdash; consistently describe a transformation in how they feel during and after their session. Kevin&apos;s coaching style, patience, and encouraging demeanor put even the most camera-averse clients at ease, with several stating these are &ldquo;the best photos ever taken of me.&rdquo; A client who describes herself as someone who &ldquo;blinks in every photo&rdquo; &mdash; to the point of hiring a sports photographer for her wedding &mdash; notes that Kevin adjusted his lighting technique until the problem disappeared entirely. Multiple first-timers purchased additional photos beyond their original plan because they couldn&apos;t narrow down the results.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Repeat &amp; Returning Clients <span className="text-gray-400 font-normal text-base">(10 reviews)</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Clients who have returned to Kevin two and three times over multiple years &mdash; some spanning a four-year period &mdash; cite the consistency of both experience and results as their reason for coming back. A three-time client over several years calls Kevin &ldquo;a wonderful photographer with a true gift for headshots.&rdquo; Another returning after three years notes that &ldquo;the consistency, quality, and professionalism are unmatched.&rdquo; Several describe referring colleagues and family members who then also became clients, creating networks of referrals built on firsthand experience rather than marketing.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Hair &amp; Makeup Clients <span className="text-gray-400 font-normal text-base">(10 reviews)</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Clients who booked the full hair, makeup, and photo package with Mallory describe a complete, elevated experience. Reviewers note she listened to their preferences &mdash; from natural, minimal looks to polished professional styling &mdash; and delivered results that built confidence before the camera was even picked up. A client who &ldquo;seldom wears much makeup&rdquo; appreciated Mallory&apos;s ability to enhance without transforming. Several mention that having hair and makeup done on-site eliminated the stress of arriving &ldquo;photo-ready&rdquo; and created a seamless, white-glove experience from arrival to final image selection.
              </p>
            </div>
          </div>
        </div>
      </section>

      </ScrollReveal>

      {/* Filter bar */}
      <section className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 no-scrollbar">
            {FILTERS.map(f => (
              <button
                key={f.id}
                onClick={() => { setFilter(f.id); setShowCount(24); }}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === f.id
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {f.label}
                {f.id !== 'all' && (
                  <span className="ml-1 text-xs opacity-70">
                    ({reviews.filter(r => r.tags.includes(f.id)).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="bg-gray-50 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((r, i) => {
              const img = imageMap[r.name]
              return (
                <div key={r.name + r.date + i} className={`bg-white rounded-lg shadow-sm overflow-hidden ${img ? '' : 'p-6'}`}>
                  {img && (
                    <div className="relative w-full aspect-[4/3]">
                      <Image src={img} alt={`${r.name} headshot`} fill className="object-cover" />
                    </div>
                  )}
                  <div className={img ? 'p-6' : ''}>
                    <div className="flex items-center gap-3 mb-3">
                      {!img && <Initials name={r.name} />}
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{formatName(r.name)}</div>
                        <div className="text-gray-400 text-xs">{formatDate(r.date)}</div>
                      </div>
                    </div>
                    <Stars />
                    <p className="text-gray-700 text-sm leading-relaxed mt-3">
                      {r.comment.length > 300 ? r.comment.slice(0, 300) + '...' : r.comment}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {hasMore && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowCount(s => s + 24)}
                className="px-8 py-3 bg-white border border-gray-200 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Show More Reviews ({filtered.length - showCount} remaining)
              </button>
            </div>
          )}

          {/* CTA after reviews */}
          <div className="text-center mt-12 py-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to see for yourself?
            </h3>
            <Link
              href="/consult"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-white text-3xl font-light hover:text-gray-300"
          >
            &times;
          </button>
          <div className="relative max-w-3xl max-h-[85vh] w-full mx-4">
            <Image
              src={lightboxImage}
              alt="Enlarged view"
              width={1200}
              height={900}
              className="object-contain w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </Layout>
  )
}
