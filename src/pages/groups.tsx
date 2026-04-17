import { useState, useEffect } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

interface GroupsProps {
  frontmatter: { title: string; description: string }
  content: string
}

interface PricingTier { size: number; perPerson: number }
interface PricingConfig {
  destinationFee: number
  inStudioRate: number
  addOns: { extraImage: number; additionalDay: number; groupComposite: number; candidHour: number; hairMakeup: number; makeupTouchup: number }
  tiers: PricingTier[]
}

const Groups = ({ frontmatter }: GroupsProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [videoLightboxOpen, setVideoLightboxOpen] = useState(false)
  const [lightboxVideo, setLightboxVideo] = useState('')

  // Pricing config from API
  const [pricing, setPricing] = useState<PricingConfig | null>(null)

  useEffect(() => {
    fetch('/api/group-pricing')
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json() })
      .then(data => { if (data.tiers) { setPricing(data); console.log('Group pricing loaded:', data.tiers.length, 'tiers') } })
      .catch(err => console.error('Failed to load group pricing:', err))
  }, [])

  // Calculator state
  const [teamSize, setTeamSize] = useState(5)
  const [onLocation, setOnLocation] = useState(true)
  const [extraImages, setExtraImages] = useState(0)
  const [additionalDays, setAdditionalDays] = useState(0)
  const [groupComposite, setGroupComposite] = useState(false)
  const [candidHours, setCandidHours] = useState(0)
  const [hairMakeupCount, setHairMakeupCount] = useState(0)
  const [touchupCount, setTouchupCount] = useState(0)
  const [couponCode, setCouponCode] = useState('')
  const [couponApplied, setCouponApplied] = useState<{ code: string; percent: number } | null>(null)
  const [couponError, setCouponError] = useState('')

  // Contact form
  const [quoteForm, setQuoteForm] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '' })
  const [quoteSubmitting, setQuoteSubmitting] = useState(false)

  // Pre-fill calculator from StudiGo workflow link
  useEffect(() => {
    try {
      const hash = window.location.hash
      if (hash.startsWith('#quote=')) {
        const data = JSON.parse(decodeURIComponent(hash.substring(7)))
        setQuoteForm({
          firstName: data.f || '',
          lastName: data.l || '',
          email: data.e || '',
          phone: data.p || '',
          company: data.c || '',
        })
        window.history.replaceState(null, '', '/groups')
        setTimeout(() => {
          document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })
        }, 500)
      }
    } catch {}
  }, [])
  const [quoteSubmitted, setQuoteSubmitted] = useState(false)
  const [quoteError, setQuoteError] = useState('')
  const [contactCaptured, setContactCaptured] = useState(false)

  // Check if required fields are filled
  const contactComplete = quoteForm.firstName.trim().length > 0 && quoteForm.email.trim().includes('@') && quoteForm.phone.trim().length >= 7

  // Abandoned cart capture — silently save contact as they type
  useEffect(() => {
    if (contactCaptured || !contactComplete) return
    setContactCaptured(true)
    // Fire and forget — capture their info in background
    fetch('/api/group-quote-capture', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: quoteForm.firstName.trim(),
        lastName: quoteForm.lastName.trim(),
        email: quoteForm.email.trim(),
        phone: quoteForm.phone.trim(),
        company: quoteForm.company.trim(),
      }),
    }).catch(() => {})
  }, [contactComplete, contactCaptured, quoteForm])

  // Look up per-person rate from tiered pricing
  function getPerPersonRate(size: number): number {
    if (!pricing || !pricing.tiers.length) return 245 // fallback
    // Find exact match or closest tier that doesn't exceed the size
    const tier = pricing.tiers.find(t => t.size === size)
    if (tier) return tier.perPerson
    // For sizes beyond max tier, use the last tier's rate
    const sorted = [...pricing.tiers].sort((a, b) => a.size - b.size)
    const last = sorted[sorted.length - 1]
    if (size > last.size) return last.perPerson
    // For sizes between tiers, use the lower tier
    for (let i = sorted.length - 1; i >= 0; i--) {
      if (sorted[i].size <= size) return sorted[i].perPerson
    }
    return sorted[0].perPerson
  }

  const addOns = pricing?.addOns || { extraImage: 150, additionalDay: 750, groupComposite: 400, candidHour: 400, hairMakeup: 200, makeupTouchup: 100 }
  const destFee = pricing?.destinationFee || 750

  // Per-person duration based on team size (from spreadsheet)
  function getMinutesPerPerson(size: number): number {
    if (size <= 5) return 15
    if (size <= 13) return 10
    if (size <= 18) return 10
    if (size <= 39) return 9
    if (size <= 59) return 8
    if (size <= 74) return 7
    return 6
  }

  const minutesPerPerson = getMinutesPerPerson(teamSize)
  const totalMinutes = teamSize * minutesPerPerson
  const shootHours = Math.floor(totalMinutes / 60)
  const shootMins = totalMinutes % 60
  const shootTimeDisplay = shootHours > 0
    ? `${shootHours}h ${shootMins > 0 ? `${shootMins}m` : ''}`
    : `${shootMins}m`

  // Price calculations
  const inStudioRate = pricing?.inStudioRate || 300
  const ratePerPerson = onLocation ? getPerPersonRate(teamSize) : inStudioRate
  const sittingSubtotal = teamSize * ratePerPerson
  const travelFee = onLocation ? destFee : 0
  const extraImageCost = extraImages * addOns.extraImage
  const additionalDayCost = additionalDays * addOns.additionalDay
  const compositeCost = groupComposite ? addOns.groupComposite : 0
  const candidCost = candidHours * addOns.candidHour
  const hairMakeupCost = hairMakeupCount * addOns.hairMakeup
  const touchupCost = touchupCount * addOns.makeupTouchup
  const subtotal = sittingSubtotal + travelFee + extraImageCost + additionalDayCost + compositeCost + candidCost + hairMakeupCost + touchupCost
  const discountAmount = couponApplied ? Math.round(subtotal * couponApplied.percent / 100) : 0
  const total = subtotal - discountAmount

  // Coupon validation
  const VALID_COUPONS: Record<string, number> = {
    'GETAHEAD10OFF': 10,
    'GETAHEAD15OFF': 15,
    'GETAHEAD20OFF': 20,
    'GETAHEAD25OFF': 25,
    'GETAHEAD30OFF': 30,
    'GETAHEAD35OFF': 35,
    'GETAHEAD40OFF': 40,
    'GETAHEAD45OFF': 45,
    'GETAHEAD50OFF': 50,
  }

  function applyCoupon() {
    const code = couponCode.trim().toUpperCase()
    if (!code) { setCouponError('Enter a coupon code'); return }
    const percent = VALID_COUPONS[code]
    if (percent) {
      setCouponApplied({ code, percent })
      setCouponError('')
    } else {
      setCouponError('Invalid coupon code')
      setCouponApplied(null)
    }
  }

  function removeCoupon() {
    setCouponApplied(null)
    setCouponCode('')
    setCouponError('')
  }

  function buildQuoteNotes() {
    const lines = [`Team Size: ${teamSize}`, `Location: ${onLocation ? 'On-Location' : 'In-Studio'}`, `Estimated Shoot Time: ${shootTimeDisplay} (${minutesPerPerson} min/person)`]
    lines.push(`Session: $${sittingSubtotal.toLocaleString()} ($${ratePerPerson} x ${teamSize})`)
    if (travelFee) lines.push(`Travel Fee: $${travelFee.toLocaleString()}`)
    if (extraImages) lines.push(`Extra Images: $${extraImageCost.toLocaleString()} ($${addOns.extraImage} x ${extraImages})`)
    if (additionalDays) lines.push(`Additional Days: $${additionalDayCost.toLocaleString()} ($${addOns.additionalDay} x ${additionalDays})`)
    if (groupComposite) lines.push(`Group Composite: $${compositeCost.toLocaleString()}`)
    if (candidHours) lines.push(`Candids: $${candidCost.toLocaleString()} ($${addOns.candidHour} x ${candidHours} hr)`)
    if (hairMakeupCount) lines.push(`Hair & Makeup: $${hairMakeupCost.toLocaleString()} ($${addOns.hairMakeup} x ${hairMakeupCount})`)
    if (touchupCount) lines.push(`Makeup Touch-ups: $${touchupCost.toLocaleString()} ($${addOns.makeupTouchup} x ${touchupCount})`)
    if (couponApplied) lines.push(`Discount: -$${discountAmount.toLocaleString()} (${couponApplied.code} — ${couponApplied.percent}% off)`)
    lines.push(`\nEstimated Total: $${total.toLocaleString()}`)
    return lines.join('\n')
  }

  async function handleQuoteSubmit(e: React.FormEvent) {
    e.preventDefault()
    setQuoteSubmitting(true)
    setQuoteError('')

    // Validate required fields from column 1
    if (!quoteForm.firstName.trim() || !quoteForm.lastName.trim()) {
      setQuoteError('Please enter your name in Step 1.')
      setQuoteSubmitting(false)
      return
    }
    if (!quoteForm.email.trim()) {
      setQuoteError('Please enter your email in Step 1.')
      setQuoteSubmitting(false)
      return
    }
    if (!quoteForm.phone.trim()) {
      setQuoteError('Please enter your phone number in Step 1.')
      setQuoteSubmitting(false)
      return
    }
    try {
      const resp = await fetch('/api/group-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...quoteForm,
          notes: buildQuoteNotes(),
          quoteData: {
            teamSize,
            onLocation,
            ratePerPerson,
            total,
            sittingSubtotal,
            travelFee,
            extraImages,
            extraImageCost,
            additionalDays,
            additionalDayCost,
            groupComposite,
            compositeCost,
            candidHours,
            candidCost,
            hairMakeupCount,
            hairMakeupCost,
            touchupCount,
            touchupCost,
            shootTimeDisplay,
            minutesPerPerson,
            totalMinutes,
          },
        }),
      })
      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}))
        throw new Error(data.error || 'Submission failed')
      }
      setQuoteSubmitted(true)
    } catch (err) {
      setQuoteError((err as Error).message || 'Something went wrong. Please try again.')
    }
    setQuoteSubmitting(false)
  }

  const compositeImages = [
    { src: '/images/groups/composites/Copper_River.jpg', alt: 'Copper River Company Team Photography' },
    { src: '/images/groups/composites/SCORE.jpg', alt: 'Score Company Team Photography' },
    { src: '/images/groups/composites/V2X.jpg', alt: 'V2X Company Team Photography' },
    { src: '/images/groups/composites/Anning-Johnson.jpg', alt: 'Anning-Johnson Company Team Photography' }
  ]

  const compositeSteps = [
    {
      title: "Step 1: Take Individual Images",
      image: "/images/groups/Building_Composite.jpg",
      description: "I take individual half or full body images of all your participants. This works well especially for those that are not local and need to travel to get that consistency you need for the team shot."
    },
    {
      title: "Step 2: Composite as a Group",
      image: "/images/groups/Composite.jpg",
      description: "I'll pull all the images into one frame, add shadows, and a background to make it look great as a group shot."
    },
    {
      title: "Step 3: Substitute as Needed",
      image: "/images/groups/Composite_Sub.jpg",
      description: "When you have someone leave or have a new hire you're not forced to drop the image and start over – we just add that person into the image as needed."
    }
  ]

  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % compositeSteps.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? compositeImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === compositeImages.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'Escape') closeLightbox()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen])

  const openVideoLightbox = (videoSrc: string) => {
    setLightboxVideo(videoSrc)
    setVideoLightboxOpen(true)
  }

  const closeVideoLightbox = () => {
    setVideoLightboxOpen(false)
  }

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <div className="min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="bg-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center leading-tight">
                Corporate Team Headshots On-Location in Washington DC
              </h1>
            </div>
          </div>
        </section>

        {/* Company Composites Section */}
        <ScrollReveal animation="fade-in">
        <div className="bg-[#242424] pt-8 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 tracking-wide">
              Company Composites
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
              {compositeImages.map((image, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg max-w-md">
                  <div
                    className="cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={500}
                      height={625}
                      className="w-full h-auto rounded hover:opacity-80 transition-opacity"
                    />
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        </ScrollReveal>

        {/* Options Heading */}
        <div id="experience" className="bg-gray-100" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black tracking-wide">
              Options
            </h2>
          </div>
          <style jsx>{`
            #experience {
              scroll-margin-top: 60px;
            }
            @media (min-width: 768px) {
              #experience {
                scroll-margin-top: 100px;
              }
            }
          `}</style>
        </div>

        {/* Options Section */}
        <ScrollReveal animation="fade-up">
        <div className="bg-[#242424] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Option 1 */}
            <div className="mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-wide leading-tight">
                    Opt 1: On Location for Large Groups
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed font-light">
                    This option works great when you have 15+ people and are looking for something to use for an "About Us" page or something similar for marketing materials. I'll come to your location and set up a mobile studio to get what you need.
                    </p>
                  </div>
                <div className="w-full md:w-1/2">
                  <button
                    className="cursor-pointer relative w-full"
                    onClick={() => openVideoLightbox("/images/groups/Headshots_Groups.mp4")}
                    aria-label="Play video about on-location large group headshots"
                    type="button"
                  >
                    <video
                      className="w-full h-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity"
                      poster="/images/groups/BTS.jpg"
                      style={{
                        aspectRatio: '16/9',
                        objectFit: 'cover'
                      }}
                    >
                      <source src="/images/groups/Headshots_Groups.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="bg-black bg-opacity-50 rounded-full p-4"
                        style={{
                          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                          boxShadow: '0 0 20px 5px rgba(255, 255, 255, 0.5)',
                        }}
                      >
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <style jsx>{`
                      @keyframes pulse {
                        0%, 100% {
                          transform: scale(1);
                          opacity: 1;
                        }
                        50% {
                          transform: scale(1.1);
                          opacity: 0.8;
                        }
                      }
                    `}</style>
                  </button>
                </div>
              </div>
            </div>

            {/* Option 2 */}
            <div className="mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-wide leading-tight">
                    Opt 2: In-Studio for Small Groups
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed font-light mb-4">
                    The most flexible option I offer is to have your group schedule with me individually which will provide the ultimate flexibility for those that are not on-site. My studio is conveniently located in Centreville, about 40 minutes West of Washington DC.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed font-light">
                    Did someone miss "picture day?" Or maybe you have a New-Hire - no problem. I provide a convenient way for that person to come by and take care of that at my studio using the link below.
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <button
                    className="cursor-pointer relative w-full"
                    onClick={() => openVideoLightbox("/images/groups/Corp_Testimony.mp4")}
                    aria-label="Play video testimonial about in-studio small group headshots"
                    type="button"
                  >
                    <video
                      className="w-full h-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity"
                      poster="/images/groups/Corp_Cover.jpg"
                      style={{
                        aspectRatio: '16/9',
                        objectFit: 'cover'
                      }}
                    >
                      <source src="/images/groups/Corp_Testimony.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black bg-opacity-50 rounded-full p-3">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        </ScrollReveal>

        {/* Unparalleled Service Section */}
        <ScrollReveal animation="fade-up">
        <div className="bg-white" style={{ paddingTop: '30px', paddingBottom: '64px' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16 tracking-wide">
              Unparalleled Service
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-stretch">

              {/* 1. Handling Scheduling */}
              <div className="text-center flex flex-col h-full">
                <div className="mb-6">
                  <Image
                    src="/images/groups/Scheduling.jpg"
                    alt="Handling Scheduling"
                    width={300}
                    height={200}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex-grow flex items-end">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">1. Handling Scheduling</h3>
                    <p className="text-gray-700 leading-relaxed">
                      I can handle the scheduling for your group. I provide a web-based scheduling interaction that takes that burden off of you.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Closing Loose Ends */}
              <div className="text-center flex flex-col h-full">
                <div className="mb-6">
                  <Image
                    src="/images/groups/Loose_ends.png"
                    alt="Closing Loose Ends"
                    width={160}
                    height={140}
                    className="w-auto h-auto rounded-lg mx-auto"
                  />
                </div>
                <div className="flex-grow flex items-end">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">2. Closing Loose Ends</h3>
                    <p className="text-gray-700 leading-relaxed">
                      I'll give you a report prior to the event so you can validate all participants.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Image Selection */}
              <div className="text-center flex flex-col h-full">
                <div className="mb-6">
                  <Image
                    src="/images/groups/Image_Review.jpg"
                    alt="Image Selection"
                    width={300}
                    height={200}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex-grow flex items-end">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">3. Image Selection</h3>
                    <p className="text-gray-700 leading-relaxed">
                      With either option, I put a display in front of the subject during the session which facilitates both collaboration (they get to see the image as it comes off my camera) as well as final image selection.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Prep Guidelines */}
              <div className="text-center flex flex-col h-full">
                <div className="mb-6">
                  <Image
                    src="/images/groups/Prep_Page.png"
                    alt="Prep Guidelines"
                    width={300}
                    height={200}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex-grow flex items-end">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">4. Prep Guidelines</h3>
                    <p className="text-gray-700 leading-relaxed">
                      I will provide a link to all participants with my guidelines as to what to wear, grooming, etc. to ensure great results for everyone involved.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        </ScrollReveal>

        {/* Group Shot Option Section */}
        <ScrollReveal animation="fade-in">
        <div id="composite" className="bg-[#242424]" style={{ paddingTop: '48px', paddingBottom: '20px' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center tracking-wide mb-2">
              Group Shot Option
            </h2>

            {/* Two Column Layout - Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
              {/* Left Column - Text Content */}
              <div className="text-white min-h-[250px] lg:min-h-[250px] relative">
                {compositeSteps.map((step, index) => (
                  <div key={index} className={`transition-opacity duration-500 ${index === currentStep ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 lg:mb-6 text-white">
                      {step.title}
                    </h3>
                    <p className="text-lg leading-relaxed mb-4 lg:mb-8 text-gray-200">
                      {step.description}
                    </p>
                  </div>
                ))}

                {/* Step Indicators */}
                <div className="absolute bottom-0 left-0 flex gap-3">
                  {compositeSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentStep
                          ? 'bg-white scale-125'
                          : 'bg-gray-500 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-lg h-[350px] lg:h-[500px]">
                  <Image
                    src={compositeSteps[currentStep].image}
                    alt={compositeSteps[currentStep].title}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        </ScrollReveal>

        {/* Get Pricing Section */}
        <div className="bg-white" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 sm:gap-8">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
                Questions?
              </h2>
              <a
                href="/consult"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 sm:px-8 sm:py-3 rounded-md font-semibold text-sm sm:text-lg transition-colors duration-200 whitespace-nowrap"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>

        {/* Team Pricing Calculator */}
        <ScrollReveal animation="fade-up">
        <div id="calculator" className="bg-[#242424] overflow-hidden" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2 tracking-wide">
              Team Pricing Calculator
            </h2>
            <p className="text-gray-400 text-center text-sm mb-10">
              Your estimate updates instantly. This is an estimate for budgeting and planning.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Column 1: Contact Form (Start Here) */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Start Here</h3>
                <p className="text-gray-500 text-xs mb-5">Tell us about yourself. Then customize your estimate.</p>

                <div className="space-y-4 mb-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">First Name *</label>
                      <input type="text" required placeholder="First name" name="given-name" autoComplete="given-name"
                        value={quoteForm.firstName} onChange={e => setQuoteForm(f => ({ ...f, firstName: e.target.value }))}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Last Name *</label>
                      <input type="text" required placeholder="Last name" name="family-name" autoComplete="family-name"
                        value={quoteForm.lastName} onChange={e => setQuoteForm(f => ({ ...f, lastName: e.target.value }))}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Email *</label>
                    <input type="email" required placeholder="you@company.com" name="email" autoComplete="email"
                      value={quoteForm.email} onChange={e => setQuoteForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Phone *</label>
                    <input type="tel" required placeholder="(555) 555-5555" name="tel" autoComplete="tel"
                      value={quoteForm.phone} onChange={e => setQuoteForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Company</label>
                    <input type="text" placeholder="Company name" name="organization" autoComplete="organization"
                      value={quoteForm.company} onChange={e => setQuoteForm(f => ({ ...f, company: e.target.value }))}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 text-sm" />
                  </div>
                </div>

                <p className="text-gray-400 text-xs">
                  <strong>Privacy:</strong> We do not sell or share your information — ever. Your details are used only to send your quote.
                </p>
              </div>

              {/* Column 2: Team Options */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Customize Your Quote</h3>
                <p className="text-gray-500 text-xs mb-5">Enter your basics. Your estimate updates instantly.</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Team Members *</label>
                    <div className="flex items-center gap-0">
                      <button type="button" onClick={() => { const v = Math.max(2, teamSize - 1); setTeamSize(v); if (v < 5 && onLocation) setOnLocation(false); }}
                        className="border border-gray-300 rounded-l-md px-3 py-2 text-gray-700 bg-gray-50 hover:bg-gray-100 text-lg font-bold leading-none select-none">&minus;</button>
                      <input type="number" min={2} value={teamSize} onChange={e => { const v = Math.max(2, parseInt(e.target.value) || 2); setTeamSize(v); if (v > 10 && !onLocation) setOnLocation(true); if (v < 5 && onLocation) setOnLocation(false); }}
                        className="w-full border-y border-gray-300 px-3 py-2 text-gray-900 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                      <button type="button" onClick={() => { const v = Math.max(2, teamSize + 1); setTeamSize(v); if (v > 10 && !onLocation) setOnLocation(true); }}
                        className="border border-gray-300 rounded-r-md px-3 py-2 text-gray-700 bg-gray-50 hover:bg-gray-100 text-lg font-bold leading-none select-none">+</button>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">Minimum 2 people</p>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Session Location</label>
                    <select value={onLocation ? 'on-location' : 'in-studio'} onChange={e => setOnLocation(e.target.value === 'on-location')}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900">
                      <option value="on-location" disabled={teamSize < 5}>On-Location{teamSize < 5 ? ' (5+ only)' : ''}</option>
                      <option value="in-studio" disabled={teamSize > 10}>In-Studio{teamSize > 10 ? ' (10 max)' : ''}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Extra Retouched Images</label>
                    <input type="number" min={0} value={extraImages} onChange={e => setExtraImages(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900" />
                    <p className="text-gray-400 text-xs mt-1">1 included per person. ${addOns.extraImage} each additional.</p>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Additional Shoot Days</label>
                    <input type="number" min={0} value={additionalDays} onChange={e => setAdditionalDays(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900" />
                    <p className="text-gray-400 text-xs mt-1">${addOns.additionalDay}/day</p>
                  </div>
                </div>

                <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-3 mt-6 border-t border-gray-200 pt-4">Optional Add-Ons</h4>

                <div className="space-y-4">
                  <label className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" checked={groupComposite} onChange={e => setGroupComposite(e.target.checked)}
                        className="rounded border-gray-300 text-red-600 focus:ring-red-500" />
                      <span className="text-sm text-gray-700">Group Composite Photo</span>
                    </div>
                    <span className="text-sm text-gray-500">${addOns.groupComposite}</span>
                  </label>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Candid Hours</label>
                      <input type="number" min={0} value={candidHours} onChange={e => setCandidHours(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900" />
                      <p className="text-gray-400 text-xs mt-1">${addOns.candidHour}/hour</p>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Hair &amp; Makeup</label>
                      <input type="number" min={0} value={hairMakeupCount} onChange={e => setHairMakeupCount(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900" />
                      <p className="text-gray-400 text-xs mt-1">${addOns.hairMakeup}/person</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Makeup Touch-ups</label>
                      <input type="number" min={0} value={touchupCount} onChange={e => setTouchupCount(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900" />
                      <p className="text-gray-400 text-xs mt-1">${addOns.makeupTouchup}/person</p>
                    </div>
                  </div>
                </div>

                <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-3 mt-6 border-t border-gray-200 pt-4">Coupon Code</h4>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code..."
                    value={couponCode}
                    onChange={e => { setCouponCode(e.target.value); setCouponError(''); }}
                    onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); applyCoupon(); } }}
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-900 text-sm uppercase"
                  />
                  {couponApplied ? (
                    <button type="button" onClick={removeCoupon}
                      className="px-4 py-2 bg-red-100 text-red-700 rounded-md text-sm font-semibold">Remove</button>
                  ) : (
                    <button type="button" onClick={applyCoupon}
                      className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-semibold">Apply</button>
                  )}
                </div>
                {couponError && <p className="text-red-600 text-xs mt-1">{couponError}</p>}
                {couponApplied && (
                  <p className="text-green-600 text-xs mt-1 font-semibold">{couponApplied.percent}% discount applied!</p>
                )}
              </div>

              {/* Column 3: Estimate + Submit */}
              <div className="bg-white rounded-lg p-6 relative">
                {!contactComplete && (
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-lg z-10 flex items-center justify-center">
                    <div className="text-center px-6">
                      <div className="text-3xl mb-3">&#128274;</div>
                      <p className="text-gray-700 font-semibold text-sm">Enter your name, email, and phone in Step 1 to unlock your estimate.</p>
                    </div>
                  </div>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Your Estimate</h3>
                <p className="text-gray-500 text-xs mb-5">Clear numbers for budgeting and planning.</p>

                <div className="bg-gray-100 rounded-lg p-4 mb-6" style={{ minHeight: '100px' }}>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Estimated Total</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {couponApplied && <span className="text-lg text-gray-400 line-through mr-2">${subtotal.toLocaleString()}</span>}
                    ${total.toLocaleString()}.00
                  </p>
                  {couponApplied ? (
                    <p className="text-green-600 text-xs mt-1 font-semibold">Saving ${discountAmount.toLocaleString()} with {couponApplied.percent}% discount</p>
                  ) : (
                    <p className="text-gray-400 text-xs mt-1">This is an estimate for budgeting and planning.</p>
                  )}
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Per Team Member (Session + Images)</p>
                  <p className="text-2xl font-bold text-gray-900">${ratePerPerson.toLocaleString()}</p>
                  <p className="text-gray-400 text-xs mt-1">Rate based on team size. Excludes travel, composite, and candids.</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 text-xs min-h-[28px]">
                  <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1">{teamSize} team members</span>
                  <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1">{1 + extraImages} image{1 + extraImages !== 1 ? 's' : ''} each</span>
                  <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1">{onLocation ? 'On-Location' : 'In-Studio'}</span>
                  <span className={`rounded-full px-3 py-1 ${additionalDays > 0 ? 'bg-gray-200 text-gray-700' : 'bg-gray-100 text-gray-300'}`}>{Math.max(1, 1 + additionalDays)} day{additionalDays > 0 ? 's' : ''}</span>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Estimated Shoot Time</p>
                  <p className="text-xl font-bold text-gray-900">{shootTimeDisplay}</p>
                  <p className="text-gray-400 text-xs mt-1">{minutesPerPerson} min per person &times; {teamSize} people</p>
                </div>

                <h4 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-3">Quick Breakdown</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Session fee</span>
                    <span className="text-gray-900">${sittingSubtotal.toLocaleString()}.00</span>
                  </div>
                  <div className={`flex justify-between ${travelFee === 0 ? 'text-gray-300' : ''}`}>
                    <span className={travelFee > 0 ? 'text-gray-600' : ''}>Travel fee</span>
                    <span className={travelFee > 0 ? 'text-gray-900' : ''}>${travelFee.toLocaleString()}.00</span>
                  </div>
                  <div className={`flex justify-between ${extraImageCost === 0 ? 'text-gray-300' : ''}`}>
                    <span className={extraImageCost > 0 ? 'text-gray-600' : ''}>Extra images</span>
                    <span className={extraImageCost > 0 ? 'text-gray-900' : ''}>${extraImageCost.toLocaleString()}.00</span>
                  </div>
                  <div className={`flex justify-between ${additionalDayCost === 0 ? 'text-gray-300' : ''}`}>
                    <span className={additionalDayCost > 0 ? 'text-gray-600' : ''}>Additional days</span>
                    <span className={additionalDayCost > 0 ? 'text-gray-900' : ''}>${additionalDayCost.toLocaleString()}.00</span>
                  </div>
                  <div className={`flex justify-between ${compositeCost === 0 ? 'text-gray-300' : ''}`}>
                    <span className={compositeCost > 0 ? 'text-gray-600' : ''}>Group composite</span>
                    <span className={compositeCost > 0 ? 'text-gray-900' : ''}>${compositeCost.toLocaleString()}.00</span>
                  </div>
                  <div className={`flex justify-between ${candidCost === 0 ? 'text-gray-300' : ''}`}>
                    <span className={candidCost > 0 ? 'text-gray-600' : ''}>Candids</span>
                    <span className={candidCost > 0 ? 'text-gray-900' : ''}>${candidCost.toLocaleString()}.00</span>
                  </div>
                  <div className={`flex justify-between ${hairMakeupCost === 0 ? 'text-gray-300' : ''}`}>
                    <span className={hairMakeupCost > 0 ? 'text-gray-600' : ''}>Hair &amp; makeup</span>
                    <span className={hairMakeupCost > 0 ? 'text-gray-900' : ''}>${hairMakeupCost.toLocaleString()}.00</span>
                  </div>
                  <div className={`flex justify-between ${touchupCost === 0 ? 'text-gray-300' : ''}`}>
                    <span className={touchupCost > 0 ? 'text-gray-600' : ''}>Makeup touch-ups</span>
                    <span className={touchupCost > 0 ? 'text-gray-900' : ''}>${touchupCost.toLocaleString()}.00</span>
                  </div>
                  {couponApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({couponApplied.code} &mdash; {couponApplied.percent}% off)</span>
                      <span>-${discountAmount.toLocaleString()}.00</span>
                    </div>
                  )}
                  <div className="flex justify-between border-t border-gray-200 pt-2 font-bold text-gray-900">
                    <span>Estimated total</span>
                    <span>${total.toLocaleString()}.00</span>
                  </div>
                </div>

                {quoteError && <p className="text-red-600 text-sm mt-4">{quoteError}</p>}

                {quoteSubmitted ? (
                  <div className="text-center py-6 mt-4">
                    <div className="text-green-600 text-4xl mb-3">&#10003;</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Quote Sent!</h4>
                    <p className="text-gray-600 text-sm">Check your email for a copy of your estimate. Kevin will follow up with you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleQuoteSubmit}>
                    <button type="submit" disabled={quoteSubmitting}
                      className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white py-3 rounded-md font-semibold text-sm uppercase tracking-wide transition-colors mt-6">
                      {quoteSubmitting ? 'Sending...' : 'Get This Quote Sent to Me'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
          <style jsx>{`
            #calculator {
              scroll-margin-top: 60px;
            }
            @media (min-width: 768px) {
              #calculator {
                scroll-margin-top: 100px;
              }
            }
          `}</style>
        </div>
        </ScrollReveal>

        {/* Image Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl max-h-full w-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 rounded-full p-2 z-10 text-2xl w-10 h-10 flex items-center justify-center"
              >
                ×
              </button>

              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-2 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-2 z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <Image
                src={compositeImages[currentImageIndex].src}
                alt={compositeImages[currentImageIndex].alt}
                width={1200}
                height={900}
                className="w-full h-auto max-h-screen object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

        {/* Video Lightbox */}
        {videoLightboxOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={closeVideoLightbox}
          >
            <div className="relative max-w-6xl max-h-full w-full">
              <button
                onClick={closeVideoLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 rounded-full p-2 z-10 text-2xl w-10 h-10 flex items-center justify-center"
              >
                ×
              </button>
              <video
                controls
                autoPlay
                className="w-full h-auto max-h-screen rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <source src={lightboxVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'groups.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}

export default Groups