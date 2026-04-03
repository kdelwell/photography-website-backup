import LayoutNoPricing from '@/components/LayoutNoPricing'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { useState, useEffect, useCallback } from 'react'
import { Camera, Monitor, Clock, Sparkles } from 'lucide-react'

const REVIEW_SNIPPETS = [
  {
    quote: "The best photos ever taken of me. I highly recommend Kevin.",
    name: "Laurie T.",
  },
  {
    quote: "Kevin made it so easy. The headshots turned out even better than I had hoped.",
    name: "Christy P.",
  },
  {
    quote: "I couldn't be happier with the results. He truly has a gift for capturing great headshots!",
    name: "Bob K.",
  },
]

function MiniStars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" width="14" height="14" fill="#FBBC05">
          <path d="M10 1l2.39 6.26H19l-5.3 4.13L15.82 18 10 13.87 4.18 18l2.12-6.61L1 7.26h6.61z"/>
        </svg>
      ))}
    </div>
  )
}

const GALLERY_IMAGES = [
  { src: '/images/Schedule/Adam.jpg', alt: 'Adam — professional headshot' },
  { src: '/images/Schedule/Jessica.jpg', alt: 'Jessica — professional headshot' },
  { src: '/images/Schedule/Priyanka.jpg', alt: 'Priyanka — professional headshot' },
  { src: '/images/Schedule/Willis.jpg', alt: 'Willis — professional headshot' },
]

export default function Schedule() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const goToPrev = useCallback(() => {
    setSelectedIndex(i => i !== null ? (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null)
  }, [])

  const goToNext = useCallback(() => {
    setSelectedIndex(i => i !== null ? (i + 1) % GALLERY_IMAGES.length : null)
  }, [])

  useEffect(() => {
    if (selectedIndex === null) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'Escape') setSelectedIndex(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, goToPrev, goToNext])

  return (
    <LayoutNoPricing
      title="Book Your Headshot Session | Get aHead Shot"
      description="Schedule your professional headshot session with Get aHead Shot. Join 200+ five-star clients. Choose a time that works for you."
    >
      {/* Hero */}
      <section className="bg-white pt-10 pb-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Book Your Session
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Join 200+ professionals who walked in unsure and walked out with the best photos of their lives.
          </p>

          {/* Trust bar */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" width="20" height="20" fill="#FBBC05">
                  <path d="M10 1l2.39 6.26H19l-5.3 4.13L15.82 18 10 13.87 4.18 18l2.12-6.61L1 7.26h6.61z"/>
                </svg>
              ))}
            </div>
            <span className="text-lg font-bold text-gray-900">5.0</span>
            <span className="text-gray-500 text-sm">from 200+ Google reviews</span>
          </div>
          <Link href="/reviews" className="text-red-600 hover:text-red-700 text-sm font-medium">
            Read what clients say &rarr;
          </Link>
        </div>
      </section>

      {/* Review snippets */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {REVIEW_SNIPPETS.map((r) => (
              <div key={r.name} className="bg-white rounded-lg p-5 shadow-sm">
                <MiniStars />
                <p className="text-gray-700 text-sm italic leading-relaxed mt-2 mb-3">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <span className="text-gray-500 text-xs font-medium">— {r.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section style={{ paddingTop: '0px', paddingBottom: '0px' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 h-auto">
          {GALLERY_IMAGES.map((img, index) => (
            <div
              key={img.src}
              className="relative aspect-[5/4] group overflow-hidden cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-6">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">Guided Session</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Kevin coaches you through every pose and expression. No experience needed.</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">See Photos in Real Time</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Review every shot on screen as it&apos;s taken. You&apos;re part of the process.</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">Quick Turnaround</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Edited images delivered in days, not weeks. Multiple sizes included.</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">Hair &amp; Makeup Available</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Optional on-site hair and makeup with our artist for the full experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduler */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Choose a Time That Works for You
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Select a session type and pick your preferred date and time.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ minHeight: '600px' }}>
            <iframe
              src="https://GetaHeadShot.17hats.com/p#/scheduling/hnzpzgpvzhxgnndvtcpcnkhgsrbswchz?embed=true&tp=false&hide_desc=false"
              style={{ width: '100%', border: 'none', overflow: 'hidden' }}
              id="hats_scheduler"
              title="Schedule Your Session"
              scrolling="no"
            />
          </div>
        </div>
        <Script
          src="https://GetaHeadShot.17hats.com/vendor/iframeSizer.min.js"
          strategy="lazyOnload"
        />
      </section>

      {/* FAQ / Objection handlers */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-8">
            Common Questions Before Booking
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">What if I&apos;m not photogenic?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Most of our clients say the same thing before their session. Kevin&apos;s coaching and real-time review process are specifically designed to bring out your best. Over 35 self-described &ldquo;camera-shy&rdquo; clients have left five-star reviews.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">What should I wear?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                After booking, you&apos;ll receive a prep guide with specific wardrobe recommendations. Bring 2-3 outfit options &mdash; Kevin will help you choose what works best on camera.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">How long does a session take?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Plan for about an hour. Kevin takes the time to get to know you, coach you through poses, and capture a wide range of shots. You&apos;ll never feel rushed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">When will I get my photos?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                You&apos;ll select your favorite shots during the session. Edited, retouched images are typically delivered within a few days in multiple sizes ready for LinkedIn, your website, and print.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Can I bring someone with me?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Absolutely. Many clients bring a friend, partner, or colleague for moral support. Whatever makes you feel comfortable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: '#242424' }} className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white text-lg font-medium mb-2">
            Not ready to book yet?
          </p>
          <p className="text-gray-400 text-sm mb-6">
            Schedule a free consultation call to learn more about the process and ask any questions.
          </p>
          <Link
            href="/consult"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition-colors"
          >
            Schedule a Call Instead
          </Link>
        </div>
      </section>
      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 text-white text-3xl font-light hover:text-gray-300 z-10"
          >
            &times;
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goToPrev() }}
            className="absolute left-4 text-white text-4xl font-light hover:text-gray-300 z-10"
          >
            &#8249;
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goToNext() }}
            className="absolute right-4 text-white text-4xl font-light hover:text-gray-300 z-10"
          >
            &#8250;
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] w-full mx-12"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY_IMAGES[selectedIndex].src}
              alt={GALLERY_IMAGES[selectedIndex].alt}
              width={1200}
              height={960}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      )}
    </LayoutNoPricing>
  )
}
