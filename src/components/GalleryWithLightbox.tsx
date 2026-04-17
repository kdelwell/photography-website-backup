import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface GalleryImage {
  src: string
  alt: string
}

interface GalleryWithLightboxProps {
  images: GalleryImage[]
  columns?: {
    mobile?: number
    desktop?: number
  }
  priorityCount?: number
}

const GalleryWithLightbox = ({
  images,
  columns = { mobile: 2, desktop: 4 },
  priorityCount = 0
}: GalleryWithLightboxProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToNext = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.src === selectedImage.src)
      const nextIndex = (currentIndex + 1) % images.length
      setSelectedImage(images[nextIndex])
    }
  }

  const goToPrevious = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.src === selectedImage.src)
      const previousIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
      setSelectedImage(images[previousIndex])
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'Escape') closeLightbox()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  return (
    <>
      <section style={{ paddingTop: '0px', paddingBottom: '0px' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 h-auto">
          {images.map((image, index) => (
            <div 
              key={`${image.src}-${index}`}
              className="relative aspect-[5/4] group overflow-hidden cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
                {...(index < priorityCount ? { priority: true } : {})}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 99999,
            backgroundColor: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={closeLightbox}
            style={{ position: 'absolute', top: 16, right: 16, zIndex: 10 }}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
            className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
            className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div style={{ position: 'relative', width: '90vw', height: '85vh' }}>
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

export default GalleryWithLightbox