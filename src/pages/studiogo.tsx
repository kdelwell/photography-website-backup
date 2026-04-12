import LayoutNoPricing from '@/components/LayoutNoPricing'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, Clock, Users, CheckCircle } from 'lucide-react'
import { useRef, useEffect } from 'react'

function ComparisonSlider({ before, after, alt }: { before: string; after: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const beforeImg = el.querySelector('.cs-before') as HTMLImageElement
    const line = el.querySelector('.cs-line') as HTMLDivElement
    const handle = el.querySelector('.cs-handle') as HTMLDivElement
    if (!beforeImg || !line || !handle) return

    let active = false

    function setPos(pct: number) {
      const p = (pct * 100).toFixed(2) + '%'
      beforeImg.style.clipPath = 'inset(0 0 0 ' + p + ')'
      line.style.left = p
      handle.style.left = p
    }

    function getPct(e: MouseEvent | TouchEvent) {
      const rect = el!.getBoundingClientRect()
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX
      return Math.max(0.02, Math.min(0.98, (x - rect.left) / rect.width))
    }

    function onDown(e: MouseEvent | TouchEvent) {
      e.preventDefault()
      active = true
      setPos(getPct(e))
    }

    function onMove(e: MouseEvent | TouchEvent) {
      if (!active) return
      e.preventDefault()
      setPos(getPct(e))
    }

    function onUp() { active = false }

    el.addEventListener('mousedown', onDown, { passive: false })
    el.addEventListener('touchstart', onDown, { passive: false })
    document.addEventListener('mousemove', onMove, { passive: false })
    document.addEventListener('touchmove', onMove, { passive: false })
    document.addEventListener('mouseup', onUp)
    document.addEventListener('touchend', onUp)

    setPos(0.5)

    return () => {
      el.removeEventListener('mousedown', onDown)
      el.removeEventListener('touchstart', onDown)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('touchmove', onMove)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('touchend', onUp)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative aspect-square rounded-[14px] overflow-hidden select-none shadow-lg"
      style={{ touchAction: 'none' }}
    >
      <img src={after} alt={`${alt} after retouching`} className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" draggable={false} />
      <img src={before} alt={`${alt} before retouching`} className="cs-before absolute top-0 left-0 w-full h-full object-cover pointer-events-none" draggable={false} style={{ clipPath: 'inset(0 0 0 50%)' }} />
      <div className="cs-line absolute top-0 bottom-0 w-0.5 pointer-events-none z-10" style={{ left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.85)' }} />
      <div className="cs-handle absolute z-[11] w-12 h-12 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing" style={{ top: '75%', left: '50%', transform: 'translate(-50%, -50%)', touchAction: 'none', background: 'rgba(255,255,255,0.95)', boxShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#242424"><path d="M15.5 5l-6 6 6 6"/><path d="M8.5 5l6 6-6 6"/></svg>
      </div>
      <span className="absolute bottom-3 left-3 z-[12] text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full pointer-events-none" style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>After</span>
      <span className="absolute bottom-3 right-3 z-[12] text-gray-900 text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full pointer-events-none" style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>Before</span>
    </div>
  )
}

const RETOUCHING_ITEMS = [
  'Blemish removal',
  'Teeth whitening',
  'Even out skin tones',
  'Remove redness & blotchiness',
  'Stray hair cleanup',
  'Wrinkle softening',
  'Glasses glare removal',
  'Remove shine',
]

const CROPS_INCLUDED = [
  'Square',
  '5x4 artistic',
  'Uncropped low-res for web',
  'Uncropped high-res for print',
]

const SETUP_INCLUDES = [
  'Professional headshot station setup',
  'On-site photographer with expression coaching',
  'QR code registration and attendee workflow',
  'Immediate gallery delivery system via email',
  'Waitlist management with text notifications',
]

const ORGANIZER_BENEFITS = [
  'Increases attendee engagement',
  'Provides a valuable professional benefit',
  'Enhances the overall event experience',
  'Requires minimal coordination from your team',
  'Attendee registration doubles as lead collection for your organization',
]

export default function StudioGo() {
  return (
    <LayoutNoPricing
      title="StudioGo — Event Headshots for Conferences & Hiring Events | Get aHead Shot"
      description="Portable studio-quality headshots for conferences, hiring events, and professional gatherings. QR code registration, instant delivery, and professional retouching. Washington DC area."
    >
      {/* Hero */}
      <section className="bg-white pt-10 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Professional Headshots at Your Event
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            A portable studio-quality headshot experience designed specifically for conferences and workforce events. Attendees walk away with outstanding results in just a few minutes.
          </p>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" width="20" height="20" fill="#FBBC05">
                  <path d="M10 1l2.39 6.26H19l-5.3 4.13L15.82 18 10 13.87 4.18 18l2.12-6.61L1 7.26h6.61z"/>
                </svg>
              ))}
            </div>
            <span className="text-lg font-bold text-gray-900">5.0</span>
            <span className="text-gray-500 text-sm">from 230+ Google reviews</span>
          </div>
          <p className="text-gray-500 text-sm">
            Ranked among the top headshot photographers in the Washington DC region
          </p>
        </div>
      </section>

      {/* Event Headshots Showcase */}
      <section style={{ backgroundColor: '#242424' }} className="py-12">
        <div className="max-w-5xl mx-auto">
          <Image
            src="/images/StudioGo_images/AFCEA_Headshots.jpg"
            alt="Professional headshots from a recent event"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* The Attendee Experience - with workflow image */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            The Attendee Experience
          </h2>
          <p className="text-gray-500 text-center text-sm mb-6 max-w-2xl mx-auto">
            Each participant receives a fast, professional headshot session during the event. Our unique workflow allows for a smooth experience for all participants.
          </p>

          {/* Workflow Process Image */}
          <div>
            <Image
              src="/images/StudioGo_images/studiogo_process.png"
              alt="StudioGo workflow: Attendee Registration, Session Management, Professional Capture, Gallery Delivery"
              width={1200}
              height={200}
              className="w-full h-auto"
            />
          </div>

        </div>
      </section>

      {/* Session Details */}
      <section style={{ backgroundColor: '#f3f4f6' }} className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">5-6 Minutes</h3>
              <p className="text-gray-500 text-sm">Per attendee, allowing high throughput during the event</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Waitlist Management</h3>
              <p className="text-gray-500 text-sm">Attendees get a text when it&apos;s their turn — no standing in line</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Studio Quality</h3>
              <p className="text-gray-500 text-sm">Professional lighting, neutral background, and expert coaching</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Retouching */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
            Professional Retouching
          </h2>
          <p className="text-gray-500 text-center text-lg mb-10">Available as an optional upgrade. Drag the slider to compare.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-10">
            <ComparisonSlider
              before="/images/StudioGo_images/retouch-before.jpg"
              after="/images/StudioGo_images/retouch-after.jpg"
              alt="Retouching example 1"
            />
            <ComparisonSlider
              before="/images/StudioGo_images/retouch-before-2.jpg"
              after="/images/StudioGo_images/retouch-after-2.jpg"
              alt="Retouching example 2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Retouching Included</h3>
              <ul className="space-y-2">
                {RETOUCHING_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Crops Included</h3>
              <ul className="space-y-2">
                {CROPS_INCLUDED.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ backgroundColor: '#f3f4f6' }} className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Pricing
          </h2>

          {/* Event Setup */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Event Setup</h3>
              <span className="text-2xl font-bold text-gray-900">$1,500</span>
            </div>
            <ul className="space-y-2">
              {SETUP_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mt-4">
              Includes up to three hours of on-site coverage. Each attendee receives one complimentary image cropped square for LinkedIn and professional profiles.
            </p>
          </div>

          {/* Attendee Upgrade Options */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Attendee Upgrade Options</h3>
            <p className="text-sm text-gray-500 mb-6">
              Attendees can purchase retouching and additional images directly through their private gallery.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-4 font-semibold text-gray-900"></th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Event Special</th>
                    <th className="text-center py-3 pl-4 font-semibold text-gray-500">Afterwards</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 text-gray-700">Retouching</td>
                    <td className="py-3 px-4 text-center font-semibold text-gray-900">$99</td>
                    <td className="py-3 pl-4 text-center text-gray-400 line-through">$149</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 text-gray-700">Additional Image Bundle</td>
                    <td className="py-3 px-4 text-center font-semibold text-gray-900">$139</td>
                    <td className="py-3 pl-4 text-center text-gray-400 line-through">$199</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-gray-700">Additional Images</td>
                    <td className="py-3 px-4 text-center font-semibold text-gray-900">$59</td>
                    <td className="py-3 pl-4 text-center text-gray-400 line-through">$89</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              In-studio images regularly priced at $245 each. Gallery available for 15 days after the event.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits for Organizer */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Benefits for the Event Organizer
          </h2>
          <p className="text-gray-500 text-center text-sm mb-10 max-w-2xl mx-auto">
            Our management system handles the entire workflow so the process runs smoothly throughout the event.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {ORGANIZER_BENEFITS.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#242424' }} className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl font-bold mb-3">
            Bring Professional Headshots to Your Next Event
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Let&apos;s talk about how StudioGo can make your event stand out.
          </p>
          <Link
            href="/consult"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition-colors"
          >
            Schedule a Call
          </Link>
        </div>
      </section>
    </LayoutNoPricing>
  )
}
