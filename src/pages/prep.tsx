import Layout from '@/components/Layout'
import Image from 'next/image'
import matter from 'gray-matter'
import { marked } from 'marked'
import { useState } from 'react'
import { X } from 'lucide-react'
import fs from 'fs'
import path from 'path'

export default function Prep({ frontmatter, content }: { frontmatter: any; content: string }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState('')

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const prepImages = [
    { src: '/images/Prep/Chae.jpg', alt: 'Chae professional headshot' },
    { src: '/images/Prep/Kevin.jpg', alt: 'Kevin professional headshot' },
    { src: '/images/Prep/Greg.jpg', alt: 'Greg professional headshot' },
    { src: '/images/Prep/Sarah.jpg', alt: 'Sarah professional headshot' }
  ]

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-white py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight">
            Preparing for your session...
          </h1>
        </div>

        {/* Images Grid */}
        <div className="w-full bg-white pb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {prepImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] cursor-pointer"
                onClick={() => openLightbox(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-gray-700 leading-relaxed">
              <style jsx>{`
                div :global(strong) {
                  display: block;
                  font-size: 1.25rem;
                  font-weight: bold;
                  color: #1f2937;
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                }
                div :global(p) {
                  margin-bottom: 1rem;
                }
              `}</style>
              <div dangerouslySetInnerHTML={{ __html: content }} />
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
                className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              <Image
                src={lightboxImage}
                alt="Enlarged view"
                width={1200}
                height={900}
                className="w-full h-auto max-h-screen object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'prep.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const htmlContent = marked(content)
  return { props: { frontmatter: data, content: htmlContent } }
}