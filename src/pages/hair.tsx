import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

interface HairProps {
  frontmatter: { title: string; description: string }
  content: string
}

const Hair = ({ frontmatter }: HairProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Hair and makeup images data
  const hairImages = [
    {
      src: '/images/Hair/Angela.jpg',
      alt: 'Angela - Professional Hair and Makeup Transformation'
    },
    {
      src: '/images/Hair/Bridget_Gwin_before_after.jpg',
      alt: 'Bridget Gwin - Before and After Professional Styling'
    },
    {
      src: '/images/Hair/Catherine_B_A.jpg',
      alt: 'Catherine - Before and After Hair and Makeup'
    },
    {
      src: '/images/Hair/Cris_B_A.jpg',
      alt: 'Cris - Professional Hair and Makeup Transformation'
    },
    {
      src: '/images/Hair/Crystal_B_A.jpg',
      alt: 'Crystal - Before and After Professional Styling'
    },
    {
      src: '/images/Hair/Winnie_B_A.jpg',
      alt: 'Winnie - Hair and Makeup Transformation'
    },
    {
      src: '/images/Hair/Elizabeth.jpg',
      alt: 'Elizabeth - Professional Hair and Makeup Styling'
    },
    {
      src: '/images/Hair/Karen_B_A.jpg',
      alt: 'Karen - Before and After Professional Hair and Makeup'
    },
    {
      src: '/images/Hair/Kathi_B_A.jpg',
      alt: 'Kathi - Professional Hair and Makeup Transformation'
    },
    {
      src: '/images/Hair/Kristin_B_A.jpg',
      alt: 'Kristin - Before and After Professional Styling'
    },
    {
      src: '/images/Hair/Marva_Before_After.jpg',
      alt: 'Marva - Professional Hair and Makeup Before and After'
    },
    {
      src: '/images/Hair/Melissa_B_A.jpg',
      alt: 'Melissa - Hair and Makeup Transformation'
    },
    {
      src: '/images/Hair/Noelle_B_A.jpg',
      alt: 'Noelle - Before and After Professional Hair and Makeup'
    },
    {
      src: '/images/Hair/Sarah.jpg',
      alt: 'Sarah - Professional Hair and Makeup Styling'
    },
    {
      src: '/images/Hair/Teresa_B_A.jpg',
      alt: 'Teresa - Professional Hair and Makeup Transformation'
    },
    {
      src: '/images/Hair/Tifani_B_A.jpg',
      alt: 'Tifani - Before and After Professional Styling'
    }
  ]

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? hairImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === hairImages.length - 1 ? 0 : prev + 1))
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

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="bg-white py-4" style={{ margin: '0' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-wide">
                Hair and Makeup
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-wide">
                for Professional Headshots
              </h2>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative overflow-hidden h-[40vh] md:h-[50vh] lg:h-[60vh]">
          <Image
            src="/images/Hair/Mallory.jpg"
            alt="Professional Hair and Makeup by Mallory"
            fill
            className="object-cover"
            priority
          />
        </section>

        {/* Pricing Section */}
        <ScrollReveal animation="fade-up">
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Mallory */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Mallory</h3>
                <p className="text-sm text-gray-500 mb-4">Lead Hair & Makeup Artist</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <span className="text-gray-700">Makeup Only</span>
                    <span className="text-xl font-bold text-gray-900">$100</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-gray-700">Hair & Makeup</span>
                    <span className="text-xl font-bold text-gray-900">$185</span>
                  </div>
                </div>
              </div>
              {/* Other Artists */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Other Artists</h3>
                <p className="text-sm text-gray-500 mb-4">Professional Hair & Makeup</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <span className="text-gray-700">Hair & Makeup</span>
                    <span className="text-xl font-bold text-gray-900">$200</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-6 max-w-2xl mx-auto">
              We use lighting on a par with television studios — professional hair and makeup compensates for that lighting and ensures you look your absolute best on camera.
            </p>
          </div>
        </section>
        </ScrollReveal>

        {/* Hair Images Grid */}
        <ScrollReveal animation="fade-in">
        <section className="bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
            {hairImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[5/4] bg-gray-200 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </section>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal animation="fade-up">
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready for Your Professional Transformation?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Experience the confidence that comes with professional hair and makeup styling for your headshot session.
            </p>
            <a
              href="/more_info"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-200"
            >
              Get Pricing
            </a>
          </div>
        </section>
        </ScrollReveal>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all z-10"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>

              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
                className="absolute left-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Image */}
              <div
                className="relative max-w-7xl max-h-[90vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={hairImages[currentImageIndex].src}
                  alt={hairImages[currentImageIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                className="absolute right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all z-10"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'hair.md')
  let frontmatter = {
    title: 'Hair and Makeup for Professional Headshots | Washington DC',
    description: 'Professional hair and makeup styling for your headshot session. See dramatic before-and-after transformations. On-site styling available for individual and corporate headshot sessions in Washington DC.'
  }

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    frontmatter = { ...frontmatter, ...data }
  } catch (error) {
    // File doesn't exist, use defaults
  }

  return { props: { frontmatter, content: '' } }
}

export default Hair