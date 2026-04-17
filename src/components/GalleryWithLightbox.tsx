import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
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
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = ''
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

  // Keyboard navigation + cleanup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'Escape') closeLightbox()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
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

      {/* Lightbox Modal — rendered via portal at document.body to escape all stacking contexts */}
      {selectedImage && typeof document !== 'undefined' && createPortal(
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 999999,
            backgroundColor: '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <button
            onClick={closeLightbox}
            style={{ position: 'absolute', top: 20, right: 20, zIndex: 10, background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Close lightbox"
          >
            <X style={{ width: 32, height: 32, color: '#fff' }} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', padding: 12, cursor: 'pointer' }}
            aria-label="Previous image"
          >
            <ChevronLeft style={{ width: 24, height: 24, color: '#fff' }} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', padding: 12, cursor: 'pointer' }}
            aria-label="Next image"
          >
            <ChevronRight style={{ width: 24, height: 24, color: '#fff' }} />
          </button>

          <div style={{ position: 'relative', width: '92vw', height: '88vh', maxWidth: '1800px' }}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="92vw"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default GalleryWithLightbox