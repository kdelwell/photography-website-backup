import Layout from '@/components/Layout'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import allReviews from '@/data/reviews.json'
import reviewImages from '@/data/review-images.json'

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
