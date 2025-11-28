import { useState, useEffect } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface GroupsProps {
  frontmatter: { title: string; description: string }
  content: string
}

const Groups = ({ frontmatter }: GroupsProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [videoLightboxOpen, setVideoLightboxOpen] = useState(false)
  const [lightboxVideo, setLightboxVideo] = useState('')

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
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gray-100 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center leading-tight">
                Groups and Corporate Photography for Metro DC
              </h1>
            </div>
          </div>
        </section>

        {/* Company Composites Section */}
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

        {/* Options Heading */}
        <div id="experience" className="bg-gray-300" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
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

        {/* Unparalleled Service Section */}
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

        {/* Group Shot Option Section */}
        <div id="composite" className="bg-[#242424]" style={{ paddingTop: '48px', paddingBottom: '20px' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center tracking-wide mb-2">
              Group Shot Option
            </h2>

            {/* Two Column Layout - Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
              {/* Left Column - Text Content */}
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 lg:mb-6 text-white">
                  {compositeSteps[currentStep].title}
                </h3>
                <p className="text-lg leading-relaxed mb-4 lg:mb-8 text-gray-200">
                  {compositeSteps[currentStep].description}
                </p>

                {/* Step Indicators */}
                <div className="flex gap-3">
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

        {/* Get Pricing Section */}
        <div className="bg-white" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 sm:gap-8">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
                Are you ready?
              </h2>
              <a
                href="/more_info"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 sm:px-8 sm:py-3 rounded-md font-semibold text-sm sm:text-lg transition-colors duration-200 whitespace-nowrap"
              >
                Get Pricing
              </a>
            </div>
          </div>
        </div>

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