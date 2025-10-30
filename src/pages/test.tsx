import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

const galleryImages = [
  { id: 1, src: '/images/gallery/Courtney.jpg', alt: 'Courtney', category: 'professional' },
  { id: 2, src: '/images/gallery/Jeffrey.jpg', alt: 'Jeffrey', category: 'corporate' },
  { id: 3, src: '/images/gallery/Joe.jpg', alt: 'Joe', category: 'professional' },
  { id: 4, src: '/images/gallery/Kelly.jpg', alt: 'Kelly', category: 'creative' },
  { id: 5, src: '/images/gallery/Maggie.jpg', alt: 'Maggie', category: 'corporate' },
  { id: 6, src: '/images/gallery/Matt.jpg', alt: 'Matt', category: 'professional' },
  { id: 7, src: '/images/gallery/Patricia.jpg', alt: 'Patricia', category: 'creative' },
  { id: 8, src: '/images/gallery/Sherif.jpg', alt: 'Sherif', category: 'corporate' },
  { id: 9, src: '/images/gallery/Teresa.jpg', alt: 'Teresa', category: 'professional' },
]

export default function Test({ frontmatter }: { frontmatter: any }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.gallery-item').forEach((item) => {
      observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100">
          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-r from-[#242424] to-[#3a3a3a] py-20">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('/images/gallery/Kelly.jpg')] bg-cover bg-center blur-sm" />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                Gallery Effects Test
              </h1>
              <p className="text-xl text-gray-300 animate-fade-in-delay">
                Modern animations and interactions
              </p>
            </div>
          </div>

          {/* Gallery Grid with Multiple Effects */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Masonry Grid with Dramatic Entrance Animations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => {
                // Different entrance directions for variety
                const directions = [
                  'fly-in-right',
                  'fly-in-left',
                  'fly-in-top',
                  'fly-in-bottom-left',
                  'bounce-in',
                  'rotate-in',
                  'fly-in-right',
                  'fly-in-left',
                  'bounce-in'
                ]

                return (
                  <div
                    key={image.id}
                    data-index={index}
                    className={`gallery-item group relative overflow-hidden rounded-lg shadow-lg cursor-pointer ${
                      visibleItems.includes(index)
                        ? `animate-${directions[index]}`
                        : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                    onClick={() => setSelectedImage(image.id)}
                  >
                  {/* Image Container with 3D Effect */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-200">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                    />

                    {/* Overlay with Fade In */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white text-xl font-bold mb-2">{image.alt}</h3>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                          {image.category}
                        </span>
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-r-[60px] border-t-[#9e875e]/80 border-r-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  </div>
                )
              })}
            </div>

            {/* 3D Flip Cards Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                3D Flip Cards
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {galleryImages.slice(0, 3).map((image) => (
                  <div key={`flip-${image.id}`} className="perspective-1000 h-80">
                    <div className="relative w-full h-full transition-transform duration-700 transform-style-3d hover:rotate-y-180 group">
                      {/* Front */}
                      <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-2xl">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Back */}
                      <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-[#9e875e] to-[#46a6b7] rounded-xl shadow-2xl p-8 flex flex-col justify-center items-center text-white">
                        <h3 className="text-2xl font-bold mb-4">{image.alt}</h3>
                        <p className="text-center mb-4">Professional photography that captures your essence</p>
                        <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <div className="relative max-w-5xl max-h-[90vh] animate-scale-in">
                <img
                  src={galleryImages.find((img) => img.id === selectedImage)?.src}
                  alt={galleryImages.find((img) => img.id === selectedImage)?.alt}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
          )}
        </main>

        <Footer />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fly-in-right {
          0% {
            opacity: 0;
            transform: translateX(100px) translateY(-30px) rotate(15deg);
          }
          60% {
            opacity: 1;
            transform: translateX(-10px) translateY(5px) rotate(-5deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) rotate(0);
          }
        }

        @keyframes fly-in-left {
          0% {
            opacity: 0;
            transform: translateX(-100px) translateY(-30px) rotate(-15deg);
          }
          60% {
            opacity: 1;
            transform: translateX(10px) translateY(5px) rotate(5deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) rotate(0);
          }
        }

        @keyframes fly-in-top {
          0% {
            opacity: 0;
            transform: translateY(-100px) scale(0.8);
          }
          60% {
            opacity: 1;
            transform: translateY(10px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fly-in-bottom-left {
          0% {
            opacity: 0;
            transform: translateX(-80px) translateY(80px) rotate(-10deg);
          }
          60% {
            opacity: 1;
            transform: translateX(8px) translateY(-8px) rotate(3deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) rotate(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(50px);
          }
          50% {
            opacity: 1;
            transform: scale(1.1) translateY(-10px);
          }
          70% {
            transform: scale(0.95) translateY(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes rotate-in {
          0% {
            opacity: 0;
            transform: rotate(-180deg) scale(0.5);
          }
          60% {
            opacity: 1;
            transform: rotate(10deg) scale(1.1);
          }
          100% {
            opacity: 1;
            transform: rotate(0) scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s backwards;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .animate-fly-in-right {
          animation: fly-in-right 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-fly-in-left {
          animation: fly-in-left 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-fly-in-top {
          animation: fly-in-top 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-fly-in-bottom-left {
          animation: fly-in-bottom-left 1.1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-bounce-in {
          animation: bounce-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        .animate-rotate-in {
          animation: rotate-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .group:hover .transform-style-3d {
          transform: rotateY(180deg);
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'test.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}
