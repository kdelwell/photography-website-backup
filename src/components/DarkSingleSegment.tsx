import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

const DarkSingleSegment = () => {
  const [showLightbox, setShowLightbox] = useState(false)

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showLightbox && e.key === 'Escape') {
        setShowLightbox(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showLightbox])

  return (
    <>
    <section className="bg-[#242424] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="flex justify-center lg:justify-start">
            <div 
              className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setShowLightbox(true)}
            >
              <Image
                src="/images/singleSegments/Jimmy.jpg"
                alt="Actor headshot"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Actor Headshots
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              As an Actor, your headshot is the single-most important marketing tool for your career. Casting Directors look for authentic expressions, professional results, and accurate representations.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Lightbox Modal */}
    {showLightbox && (
      <div 
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        onClick={() => setShowLightbox(false)}
      >
        <button
          onClick={() => setShowLightbox(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Close lightbox"
        >
          <X className="w-8 h-8" />
        </button>
        
        <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
          <Image
            src="/images/singleSegments/Jimmy.jpg"
            alt="Actor headshot"
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

export default DarkSingleSegment