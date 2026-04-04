import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import { useEffect, useState } from 'react'
import PricingCTA from '@/components/PricingCTA'
import PainPoints from '@/components/PainPoints'
import GoogleReviewsBadge from '@/components/GoogleReviewsBadge'
import DoubletakesCarousel from '@/components/DoubletakesCarousel'
import DarkSingleSegment from '@/components/DarkSingleSegment'
import LightSingleSegment from '@/components/LightSingleSegment'
import BusinessSingleSegment from '@/components/BusinessSingleSegment'
import DoctorSingleSegment from '@/components/DoctorSingleSegment'
import GalleryWithLightbox from '@/components/GalleryWithLightbox'
import MainGallery from '@/components/MainGallery'
import HeadshotProcess from '@/components/HeadshotProcess'
import HeadshotReviews from '@/components/HeadshotReviews'
import BeforeAfter from '@/components/BeforeAfter'
import { X } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home({ frontmatter, content }: { frontmatter: any; content: string }) {
  const [scrollY, setScrollY] = useState(0)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const [videoSrc, setVideoSrc] = useState('')

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Defer hero video loading until after LCP
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoSrc('/images/Web banner_small.mp4')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes your headshot photography different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We combine 10+ years of professional experience with a unique instant feedback system. You'll see your images in real-time during the session, ensuring you love the results before leaving. We specialize in authentic expressions, not stiff corporate poses, with magazine-quality editing on every image."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a headshot session take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Individual headshot sessions typically take 30-45 minutes. This includes time for multiple looks, wardrobe changes, and our instant feedback process to ensure perfect results."
        }
      },
      {
        "@type": "Question",
        "name": "When will I receive my headshots?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard turnaround is 48-72 hours with professionally edited, magazine-quality images. Same-day delivery is available for rush orders."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer on-location photography in Washington DC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We bring our professional studio setup to your location anywhere in the Washington DC metro area, including Arlington, Alexandria, Bethesda, and Silver Spring. Perfect for corporate teams and group headshots."
        }
      },
      {
        "@type": "Question",
        "name": "What should I bring to my headshot session?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bring 2-3 outfit options in solid colors that complement your skin tone. Avoid busy patterns. We provide detailed preparation guidance before your session, including tips on clothing, grooming, and what to expect."
        }
      }
    ]
  };

  return (
    <Layout
      title="Professional Headshot Photography Washington DC | Get aHead Shot"
      description="Washington DC's premier headshot photographer. Magazine-quality professional headshot photography for executives, entrepreneurs, and business professionals. Same-day turnaround. Studio or on-location. Book your session today!"
    >
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Option 3: Split Layout */}
      
      {/* Video Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background with Parallax */}
        <div
          className="absolute w-full"
          style={{
            top: 0,
            left: 0,
            height: '150%',
            transform: `translateY(${scrollY * -0.5}px)`,
            willChange: 'transform'
          }}
        >
          {/* Optimized poster image for fast LCP */}
          <Image
            src="/images/hero-poster.jpg"
            alt="Professional headshot photography"
            fill
            priority
            sizes="100vw"
            className={`object-cover transition-opacity duration-700 ${videoReady ? 'opacity-0' : 'opacity-100'}`}
            style={{ transform: 'scale(1.2)' }}
          />
          {/* Video loads after page — fades in over poster */}
          {videoSrc && (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              onCanPlay={() => setVideoReady(true)}
              className={`absolute w-full h-full object-cover transition-opacity duration-700 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
              style={{ transform: 'scale(1.2)' }}
            >
              <source src={videoSrc} type="video/mp4" />
              <track kind="captions" />
            </video>
          )}
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Overlay Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-8 max-w-5xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Magazine-Quality Headshot Photography with Expert Coaching
            </h1>

            <p className="text-2xl md:text-3xl mb-12 font-light leading-relaxed">
              Headshots for professionals who can&apos;t afford to look average.
            </p>
            
            <div className="flex justify-center">
              <a
                href="/more_info"
                className="bg-red-500 hover:bg-red-600 text-white px-10 py-5 rounded-lg text-xl font-semibold transition-colors"
              >
                Get Pricing
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* H2 Heading Section */}
      <ScrollReveal animation="fade-up">
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center leading-tight">
              Headshot Photography That Commands Attention
            </h2>
            <p className="text-lg text-gray-600 text-center mt-4 max-w-3xl mx-auto">
              Serving professionals across Washington DC and Northern Virginia, I create headshots that make a powerful first impression.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Full Width Gallery Section */}
      <ScrollReveal animation="fade-in">
        <MainGallery />
      </ScrollReveal>

      {/* Pain Points - Address visitor objections */}
      <ScrollReveal animation="fade-up">
        <PainPoints />
      </ScrollReveal>

      {/* About Preview */}
      <section className="bg-white" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <ScrollReveal animation="fade-left">
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/ME_2026_5x4.jpg"
                  alt="Kevin Elwell - headshot photographer"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-right" delay={150}>
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">Meet Your Headshot Photographer — Kevin Elwell</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Bad headshot photography with strained expressions and poor lighting is the norm. This is a struggle, especially for entrepreneurs, the C-Suite, or companies that rely on professional headshots for building their businesses.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  As a headshot photographer with over 10 years of experience, I've developed an easy process that creates authentic results, where quality exceeds price and delivers exceptional value.
                </p>
                <p className="text-lg text-gray-700" style={{ marginBottom: '0px' }}>
                  I help busy professionals create magazine-quality headshot photography that lets them build their networks and present their best image to others. My process creates authentic expressions with great lighting, and includes a unique studio feedback-loop to get your instant reaction so you love what we create together.
                </p>
                <Link
                  href="/about"
                  className="text-red-500 hover:text-red-600 text-lg font-semibold"
                >
                  Read My Full Story →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <ScrollReveal animation="fade-up">
        <PricingCTA />
      </ScrollReveal>

      {/* Secondary Gallery Section */}
      <ScrollReveal animation="fade-in">
        <GalleryWithLightbox
          images={[
            { src: '/images/SecondGallery/Lauren.jpg', alt: 'Lauren - professional corporate headshot' },
            { src: '/images/SecondGallery/Ama.jpg', alt: 'Ama - executive portrait' },
            { src: '/images/SecondGallery/Fabian.jpg', alt: 'Fabian - business professional headshot' },
            { src: '/images/SecondGallery/Spiro.jpg', alt: 'Spiro - corporate headshot' }
          ]}
        />
      </ScrollReveal>

      {/* Process Section */}
      <ScrollReveal animation="fade-up">
        <HeadshotProcess />
      </ScrollReveal>

      {/* Transformations Gallery Section */}
      <ScrollReveal animation="fade-in">
        <BeforeAfter />
      </ScrollReveal>

      {/* Reviews Section */}
      <ScrollReveal animation="fade-up">
        <HeadshotReviews />
      </ScrollReveal>

      {/* Google Reviews Badge */}
      <ScrollReveal animation="scale">
        <GoogleReviewsBadge />
      </ScrollReveal>

      {/* Pricing CTA Section */}
      <ScrollReveal animation="fade-up">
        <PricingCTA />
      </ScrollReveal>

      {/* Groups Section */}
      <section className="bg-[#242424] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_2fr] gap-10 md:gap-16 items-center">
            {/* Left - Group Composite */}
            <div className="flex justify-center">
              <div className="bg-white p-2 rounded w-full max-w-xl">
                <Image
                  src="/images/groups/composites/V2X.jpg"
                  alt="Group headshots composite"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Center - Text Content */}
            <div className="text-center text-white">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                On-Location Group Headshot Photography
              </h2>
              <p className="text-lg md:text-xl font-light mb-8 leading-relaxed">
                I bring my professional headshot studio to your location because your team needs to look like a team. Consistent, high-quality headshot photography for every member of your organization.
              </p>
              <p className="text-base md:text-lg font-light text-gray-100">
                Consistency is the key to great corporate headshots.
              </p>
              <a
                href="https://getaheadshot.net/groups"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded font-semibold text-lg hover:bg-gray-100 transition-colors mt-8"
              >
                Learn About Group Headshots
              </a>
            </div>
            
            {/* Right - Video */}
            <div className="flex justify-center">
              <button
                className="relative w-full max-w-[450px] aspect-video bg-black rounded overflow-hidden group cursor-pointer"
                onClick={() => setVideoModalOpen(true)}
                aria-label="Play video about on-location group headshots"
                type="button"
              >
                <video
                  className="w-full h-full object-cover pointer-events-none"
                  poster="/images/groups/BTS.jpg"
                >
                  <source src="/images/groups/Headshots_Groups.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[25px] border-l-gray-900 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Doubletakes Carousel Section */}
      <ScrollReveal animation="fade-up">
        <DoubletakesCarousel />
      </ScrollReveal>

      {/* Third Gallery Section */}
      <ScrollReveal animation="fade-in">
        <GalleryWithLightbox
          images={[
            { src: '/images/ThirdGallery/Charles.jpg', alt: 'Charles - executive headshot' },
            { src: '/images/ThirdGallery/Kirsten.jpg', alt: 'Kirsten - professional portrait' },
            { src: '/images/ThirdGallery/Rachel.jpg', alt: 'Rachel - business headshot' },
            { src: '/images/ThirdGallery/Arcelious.jpg', alt: 'Arcelious - corporate portrait' }
          ]}
        />
      </ScrollReveal>

      {/* Pricing CTA Section */}
      <ScrollReveal animation="fade-up">
        <PricingCTA />
      </ScrollReveal>

      {/* Types of Headshot Photography */}
      <ScrollReveal animation="fade-up">
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Headshot Photography for Every Professional
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you&apos;re an executive updating your LinkedIn, an actor building a portfolio, an attorney projecting confidence, or a physician building trust with patients — the right headshot photography makes the difference. I specialize in creating authentic, professional images tailored to your industry and how you want to be perceived.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Dark Single Segment Section */}
      <ScrollReveal animation="fade-up">
        <DarkSingleSegment />
      </ScrollReveal>

      {/* Light Single Segment Section */}
      <ScrollReveal animation="fade-up">
        <LightSingleSegment />
      </ScrollReveal>

      {/* Doctor Single Segment Section */}
      <ScrollReveal animation="fade-up">
        <DoctorSingleSegment />
      </ScrollReveal>

      {/* Business Single Segment Section */}
      <ScrollReveal animation="fade-up">
        <BusinessSingleSegment />
      </ScrollReveal>

      {/* Location Pages */}
      <ScrollReveal animation="fade-up">
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Headshots Across the DC Metro Area
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            Based in <strong>Centreville, VA</strong>, I bring professional headshot photography to offices and locations throughout Northern Virginia and Washington DC.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'Centreville, VA', href: '/headshots-centreville-va', featured: true },
              { name: 'Fairfax, VA', href: '/headshots-fairfax-va' },
              { name: 'Reston, VA', href: '/headshots-reston-va' },
              { name: 'Arlington, VA', href: '/headshots-arlington-va' },
              { name: 'Alexandria, VA', href: '/headshots-alexandria-va' },
              { name: 'Tysons Corner, VA', href: '/headshots-tysons-corner-va' },
              { name: 'Northern Virginia', href: '/headshots-northern-virginia' },
              { name: 'Washington, DC', href: '/headshots-washington-dc' },
            ].map((loc) => (
              <a
                key={loc.href}
                href={loc.href}
                className={`p-4 rounded-lg font-medium transition-colors ${
                  loc.featured
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-white text-gray-800 hover:bg-red-50 hover:text-red-600'
                }`}
              >
                {loc.name}
              </a>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Video Modal */}
      {videoModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <button
            onClick={() => setVideoModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-100 transition-colors p-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Close video"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative max-w-5xl max-h-[90vh] w-full aspect-video">
            <video
              className="w-full h-full object-contain"
              poster="/images/groups/BTS.jpg"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            >
              <source src="/images/groups/Headshots_Groups.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'home.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}