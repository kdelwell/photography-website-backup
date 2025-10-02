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
import { X } from 'lucide-react'

export default function Home({ frontmatter, content }: { frontmatter: any; content: string }) {
  const [scrollY, setScrollY] = useState(0)
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
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
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
            style={{ transform: 'scale(1.2)' }}
          >
            <source src="/images/Web banner_small.mp4" type="video/mp4" />
            Your browser does not support the video tag.
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

      {/* H1 Heading Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center leading-tight">
            Washington DC's Premier Headshot & Portrait Photographer for Professionals
          </h1>
        </div>
      </section>

      {/* Full Width Gallery Section */}
      <GalleryWithLightbox 
        images={[
          { src: '/images/Gallery/Teresa.jpg', alt: 'Teresa Professional Headshot' },
          { src: '/images/Gallery/Jeffrey.jpg', alt: 'Jeffrey Professional Headshot' },
          { src: '/images/Gallery/Courtney.jpg', alt: 'Courtney Professional Headshot' },
          { src: '/images/Gallery/Joe.jpg', alt: 'Joe Professional Headshot' },
          { src: '/images/Gallery/Kelly.jpg', alt: 'Kelly Professional Headshot' },
          { src: '/images/Gallery/Matt.jpg', alt: 'Matt Professional Headshot' },
          { src: '/images/Gallery/Patricia.jpg', alt: 'Patricia Professional Headshot' },
          { src: '/images/Gallery/Sherif.jpg', alt: 'Sherif Professional Headshot' }
        ]}
      />


      {/* About Preview */}
      <section className="bg-white" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/Kevin_about.jpg"
                alt="Kevin Elwell, Professional Photographer"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Meet Your Guide — Kevin Elwell</h3>
              <p className="text-lg text-gray-600 mb-6">
                Bad images with strained expressions and poor lighting are the norm. This is a struggle, especially for entrepreneurs, the C-Suite, or companies that rely on those images for building their businesses.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                I've developed an easy process that creates images that ensures authentic results, where quality exceeds price and delivers an exceptional value.
              </p>
              <p className="text-lg text-gray-600" style={{ marginBottom: '0px' }}>
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
          { src: '/images/SecondGallery/Allison.jpg', alt: 'Allison Professional Headshot' },
          { src: '/images/SecondGallery/Ama.jpg', alt: 'Ama Professional Headshot' },
          { src: '/images/SecondGallery/Fabian.jpg', alt: 'Fabian Professional Headshot' },
          { src: '/images/SecondGallery/Spiro.jpg', alt: 'Spiro Professional Headshot' }
        ]}
      />

      {/* Process Section */}
      <section style={{ paddingTop: '30px', paddingBottom: '30px' }} className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Getting Your Headshot Is Easy
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 relative">
                  <Image
                    src="/images/ProcessIcons/Calendar.png"
                    alt="Calendar Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-900 text-lg leading-relaxed">
                1. Match your schedule up with mine using my on-line appointment system – you choose a time that works for you.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 relative">
                  <Image
                    src="/images/ProcessIcons/Camera.png"
                    alt="Camera Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-900 text-lg leading-relaxed">
                2. We'll use my feedback system to fine-tune the image and together select the best images.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 relative">
                  <Image
                    src="/images/ProcessIcons/Sliders.png"
                    alt="Sliders Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-900 text-lg leading-relaxed">
                3. You get professionally retouched images that are delivered to you digitally on your time-line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformations Gallery Section */}
      <GalleryWithLightbox 
        images={[
          { src: '/images/Transformations/Deepak_BA.jpg', alt: 'Deepak Professional Transformation' },
          { src: '/images/Transformations/Kurt_BA.jpg', alt: 'Kurt Professional Transformation' },
          { src: '/images/Transformations/Marva_BA.jpg', alt: 'Marva Professional Transformation' },
          { src: '/images/Transformations/Monica_BA.jpg', alt: 'Monica Professional Transformation' }
        ]}
      />

      {/* Reviews Section */}
      <section style={{ backgroundColor: '#242424', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-20 leading-tight">
            200+ 5-Star Reviews
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Peter's Review */}
            <div className="text-center flex flex-col items-center">
              <div className="relative w-72 h-72 mb-8">
                <Image
                  src="/images/Reviews/Peter.jpg"
                  alt="Peter A."
                  fill
                  className="object-cover"
                  style={{ borderRadius: '4px' }}
                />
              </div>
              <p className="text-white text-base italic mb-8 leading-relaxed max-w-sm">
                "Kevin knows how to bring to life the natural personality of his clients who may otherwise feel uncomfortable or stiff in front of the camera. I couldn't be more happy with the results!"
              </p>
              <div>
                <h3 className="text-white text-lg font-medium mb-1">Peter A.</h3>
                <p className="text-gray-400 text-sm font-light">Chief Executive Officer</p>
              </div>
            </div>
            
            {/* Kerensa's Review */}
            <div className="text-center flex flex-col items-center">
              <div className="relative w-72 h-72 mb-8">
                <Image
                  src="/images/Reviews/Kerensa.jpg"
                  alt="Kerensa G."
                  fill
                  className="object-cover"
                  style={{ borderRadius: '4px', objectPosition: '-100px center' }}
                />
              </div>
              <p className="text-white text-base italic mb-8 leading-relaxed max-w-sm">
                "Kevin was able to get so many great shots and in a short amount of time. I am extremely happy with my pictures and his work is phenomenal! If I could give him 10 stars, I would!"
              </p>
              <div>
                <h3 className="text-white text-lg font-medium mb-1">Kerensa G.</h3>
                <p className="text-gray-400 text-sm font-light">Educator</p>
              </div>
            </div>
            
            {/* Elizabeth's Review */}
            <div className="text-center flex flex-col items-center">
              <div className="relative w-72 h-72 mb-8">
                <Image
                  src="/images/Reviews/Elizabeth.jpg"
                  alt="Elizabeth G."
                  fill
                  className="object-cover"
                  style={{ borderRadius: '4px' }}
                />
              </div>
              <p className="text-white text-base italic mb-8 leading-relaxed max-w-sm">
                "Kevin is a best-in-class headshot photographer. Kevin's process is especially perfect for individuals that hate their photo being taken. Kevin listens and coaches you through subtle expression changes that captured the real you."
              </p>
              <div>
                <h3 className="text-white text-lg font-medium mb-1">Elizabeth G.</h3>
                <p className="text-gray-400 text-sm font-light">Chief Strategy Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <p className="text-base md:text-lg font-light text-gray-300">
                Consistency is the key.
              </p>
              <a 
                href="https://getaheadshot.net/groups" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded font-semibold text-lg hover:bg-gray-100 transition-colors mt-8"
              >
                More Info
              </a>
            </div>
            
            {/* Right - Video */}
            <div className="flex justify-center">
              <div 
                className="relative w-full max-w-[450px] aspect-video bg-black rounded overflow-hidden group cursor-pointer"
                onClick={() => setVideoModalOpen(true)}
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doubletakes Carousel Section */}
      <DoubletakesCarousel />

      {/* Third Gallery Section */}
      <GalleryWithLightbox 
        images={[
          { src: '/images/ThirdGallery/Charles.jpg', alt: 'Charles Professional Headshot' },
          { src: '/images/ThirdGallery/Kirsten.jpg', alt: 'Kirsten Professional Headshot' },
          { src: '/images/ThirdGallery/Rachel.jpg', alt: 'Rachel Professional Headshot' },
          { src: '/images/ThirdGallery/Ryan.jpg', alt: 'Ryan Professional Headshot' }
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
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
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