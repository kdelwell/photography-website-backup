import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const DoubletakesCarousel = () => {
  const images = [
    { src: '/images/DoubleTakes/Chris.jpg', alt: 'Chris Professional Headshot' },
    { src: '/images/DoubleTakes/Dan.jpg', alt: 'Dan Professional Headshot' },
    { src: '/images/DoubleTakes/Derrick.jpg', alt: 'Derrick Professional Headshot' },
    { src: '/images/DoubleTakes/Kristie.jpg', alt: 'Kristie Professional Headshot' },
    { src: '/images/DoubleTakes/Kristin.jpg', alt: 'Kristin Professional Headshot' },
    { src: '/images/DoubleTakes/Phillipe.jpg', alt: 'Phillipe Professional Headshot' },
    { src: '/images/DoubleTakes/Raph.jpg', alt: 'Raph Professional Headshot' },
    { src: '/images/DoubleTakes/Riz.jpg', alt: 'Riz Professional Headshot' },
    { src: '/images/DoubleTakes/Tristan.jpg', alt: 'Tristan Professional Headshot' },
    { src: '/images/DoubleTakes/Sophia.jpg', alt: 'Sophia Professional Headshot' },
    { src: '/images/DoubleTakes/Cynthia.jpg', alt: 'Cynthia Professional Headshot' }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null)
  const [translateX, setTranslateX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Auto-advance carousel (slower - every 3 seconds for smoother continuous scrolling)
  useEffect(() => {
    if (!isAutoPlaying || selectedImage) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1
        const imageWidthPercent = 100 / 4 // Each visible image is 25% of viewport
        setTranslateX(nextIndex * -imageWidthPercent) // Move one image width to the left each time
        return nextIndex
      })
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length, selectedImage])

  // Reset position when reaching the end for seamless loop
  useEffect(() => {
    if (currentIndex >= images.length) {
      // Reset to beginning instantly after animation completes
      const timeout = setTimeout(() => {
        // Temporarily disable transitions for the reset
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none'
          setCurrentIndex(0)
          setTranslateX(0)
          // Re-enable transitions after reset
          setTimeout(() => {
            if (carouselRef.current) {
              carouselRef.current.style.transition = 'transform 1000ms ease-in-out'
            }
          }, 50)
        }
      }, 1000) // Wait for transition to complete

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, images.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    const imageWidthPercent = 100 / 4
    setCurrentIndex(prevIndex)
    setTranslateX(prevIndex * -imageWidthPercent)
    // Resume auto-play after 3 seconds
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    const nextIndex = (currentIndex + 1) % images.length
    const imageWidthPercent = 100 / 4
    setCurrentIndex(nextIndex)
    setTranslateX(nextIndex * -imageWidthPercent)
    // Resume auto-play after 3 seconds
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    const imageWidthPercent = 100 / 4
    setCurrentIndex(index)
    setTranslateX(index * -imageWidthPercent)
    // Resume auto-play after 3 seconds
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  // Calculate visible images (4 on desktop, 2 on tablet, 1 on mobile)
  const getVisibleImages = () => {
    const visibleImages = []
    const count = 4 // Show 4 images on desktop
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % images.length
      visibleImages.push({ ...images[index], originalIndex: index })
    }
    return visibleImages
  }

  const openLightbox = (image: {src: string, alt: string}) => {
    setSelectedImage(image)
    setIsAutoPlaying(false)
  }

  const goToNextInLightbox = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.src === selectedImage.src)
      const nextIndex = (currentIndex + 1) % images.length
      setSelectedImage(images[nextIndex])
    }
  }

  const goToPreviousInLightbox = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.src === selectedImage.src)
      const previousIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
      setSelectedImage(images[previousIndex])
    }
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    // Resume auto-play after closing
    setTimeout(() => setIsAutoPlaying(true), 1000)
  }

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return
      if (e.key === 'ArrowLeft') goToPreviousInLightbox()
      if (e.key === 'ArrowRight') goToNextInLightbox()
      if (e.key === 'Escape') closeLightbox()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  return (
    <>
      <section id="branding" className="bg-white">
        <div className="w-full">
          <div className="text-center py-6">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800">
              Need some help with branding or a portrait - check out these double takes!
            </h2>
          </div>
          <div className="relative">
            {/* Desktop view - Smooth scrolling carousel */}
            <div className="hidden lg:block relative overflow-hidden">
              {/* Previous button */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>

              {/* Images container with smooth transform */}
              <div
                ref={carouselRef}
                className="carousel-container flex transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(${translateX}%)`,
                }}
              >
                {/* Original images */}
                {images.map((image, index) => (
                  <div
                    key={`original-${image.src}`}
                    className="relative aspect-[4/3] cursor-pointer overflow-hidden group bg-gray-100 flex-shrink-0"
                    style={{
                      width: '25%', // Each image takes exactly 25% of viewport
                      marginRight: '10px'
                    }}
                    onClick={() => openLightbox(image)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                ))}
                {/* Duplicate first 4 images for seamless loop */}
                {images.slice(0, 4).map((image, index) => (
                  <div
                    key={`duplicate-${image.src}`}
                    className="relative aspect-[4/3] cursor-pointer overflow-hidden group bg-gray-100 flex-shrink-0"
                    style={{
                      width: '25%', // Each image takes exactly 25% of viewport
                      marginRight: '10px'
                    }}
                    onClick={() => openLightbox(image)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                ))}
              </div>

              {/* Next button */}
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            {/* Tablet view - 2 images */}
            <div className="hidden md:block lg:hidden relative">
              {/* Previous button */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-gray-800" />
              </button>

              {/* Images grid */}
              <div className="grid grid-cols-2 gap-[10px] px-[5px]">
                {getVisibleImages().slice(0, 2).map((image, index) => (
                  <div
                    key={`${image.src}-${index}`}
                    className="relative aspect-[4/3] cursor-pointer overflow-hidden group bg-gray-100"
                    onClick={() => openLightbox(image)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                ))}
              </div>

              {/* Next button */}
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-gray-800" />
              </button>
            </div>

            {/* Mobile view - 1 image full width */}
            <div className="md:hidden relative">
              {/* Previous button */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-gray-800" />
              </button>

              {/* Single image - full width */}
              <div
                className="relative w-full aspect-[4/3] cursor-pointer bg-gray-100 px-[5px]"
                onClick={() => images[currentIndex] && openLightbox(images[currentIndex])}
              >
                {images[currentIndex] && (
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-contain"
                  />
                )}
              </div>

              {/* Next button */}
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-gray-800" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-1 md:gap-2 py-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all p-2 md:p-3 ${
                    index === currentIndex
                      ? 'bg-gray-800 w-4 md:w-6'
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPreviousInLightbox()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNextInLightbox()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default DoubletakesCarousel