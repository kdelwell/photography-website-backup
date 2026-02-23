import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import { useEffect, useState } from 'react'
import PricingCTA from '@/components/PricingCTA'
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

export default function Home({ frontmatter, content }: { frontmatter: any; content: string }) {
  const [scrollY, setScrollY] = useState(0)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

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
      title="Professional Headshots Washington DC | Get Ahead Shot Photography"
      description="Washington DC's premier headshot photographer. Magazine-quality professional headshots for executives, entrepreneurs, and business professionals. Same-day turnaround. Studio or on-location. Book your session today!"
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
          className="absolute inset-0 w-full h-full"
          style={{ 
            transform: `translateY(${scrollY * 0.5}px)`,
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
            <source src="/images/Web banner_small.mp4" type="video/mp4" />
            <track kind="captions" />
          </video>
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Overlay Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-8 max-w-5xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Your image could be costing you opportunities.
            </h1>
            
            <p className="text-2xl md:text-3xl mb-12 font-light leading-relaxed">
              In a digital world, your headshot is your first impression.<br />
              Let's make sure it's a powerful one.
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
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center leading-tight">
            Washington DC's Premier Headshot & Portrait Photographer for Professionals
          </h2>
        </div>
      </section>

      {/* Full Width Gallery Section */}
      <MainGallery />


      {/* About Preview */}
      <section className="bg-white" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/ME_2026_5x4.jpg"
                alt="Kevin Elwell - Professional headshot photographer in Washington DC with 10+ years experience"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Meet Your Guide — Kevin Elwell</h3>
              <p className="text-lg text-gray-700 mb-6">
                Bad images with strained expressions and poor lighting are the norm. This is a struggle, especially for entrepreneurs, the C-Suite, or companies that rely on those images for building their businesses.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                I've developed an easy process that creates images that ensures authentic results, where quality exceeds price and delivers an exceptional value.
              </p>
              <p className="text-lg text-gray-700" style={{ marginBottom: '0px' }}>
                I help busy professionals create magazine-quality images of themselves that lets them build their networks and present their best image to others. After more than 10 years of experience I have the talents, skills, and have developed the process that creates authentic expressions with great lighting. This includes a unique studio feedback-loop to get your instant reaction to ensure you love what we create together.
              </p>
              <Link 
                href="/about" 
                className="text-red-500 hover:text-red-600 text-lg font-semibold"
              >
                Read My Full Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <PricingCTA />

      {/* Secondary Gallery Section */}
      <GalleryWithLightbox
        images={[
          { src: '/images/SecondGallery/Lauren.jpg', alt: 'Professional corporate headshot Washington DC - Business portrait photography near me' },
          { src: '/images/SecondGallery/Ama.jpg', alt: 'Executive headshot DC - Professional business photography Washington DC' },
          { src: '/images/SecondGallery/Fabian.jpg', alt: 'Professional LinkedIn headshot photographer Washington DC - Corporate portrait' },
          { src: '/images/SecondGallery/Spiro.jpg', alt: 'Business headshot photography DC - Professional corporate photographer near me' }
        ]}
      />

      {/* Process Section */}
      <HeadshotProcess />

      {/* Transformations Gallery Section */}
      <BeforeAfter />

      {/* Reviews Section */}
      <HeadshotReviews />

      {/* Pricing CTA Section */}
      <PricingCTA />

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
                On-Location Groups
              </h2>
              <p className="text-lg md:text-xl font-light mb-8 leading-relaxed">
                I bring my studio to your location for your group because you need your business to look like a team.
              </p>
              <p className="text-base md:text-lg font-light text-gray-100">
                Consistency is the key.
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
      <DoubletakesCarousel />

      {/* Third Gallery Section */}
      <GalleryWithLightbox
        images={[
          { src: '/images/ThirdGallery/Charles.jpg', alt: 'Professional headshot Washington DC - Executive portrait photographer near me' },
          { src: '/images/ThirdGallery/Kirsten.jpg', alt: 'Corporate headshot photography Washington DC - Business professional portrait' },
          { src: '/images/ThirdGallery/Rachel.jpg', alt: 'Professional business headshot DC - LinkedIn profile photography Washington DC' },
          { src: '/images/ThirdGallery/Arcelious.jpg', alt: 'Executive headshot photographer Washington DC - Professional corporate photography near me' }
        ]}
      />

      {/* Pricing CTA Section */}
      <PricingCTA />

      {/* Dark Single Segment Section */}
      <DarkSingleSegment />

      {/* Light Single Segment Section */}
      <LightSingleSegment />

      {/* Doctor Single Segment Section */}
      <DoctorSingleSegment />

      {/* Business Single Segment Section */}
      <BusinessSingleSegment />

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