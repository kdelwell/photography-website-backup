import { useState } from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface HairProps {
  frontmatter: { title: string; description: string }
  content: string
}

const Hair = ({ frontmatter }: HairProps) => {
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

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="bg-white py-4" style={{ margin: '0' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-wide">
                Professional Hair
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-wide">
                and Makeup Services
              </h2>
            </div>
          </div>
        </section>

        {/* Hero Section with Parallax */}
        <section
          className="relative overflow-hidden bg-cover bg-center bg-fixed"
          style={{
            height: '60vh',
            backgroundImage: "url('/images/Hair/Mallory.jpg')"
          }}
        >
        </section>

        {/* Text Section */}
        <section className="bg-white" style={{ marginTop: '20px', marginBottom: '20px', paddingTop: '20px', paddingBottom: '20px' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We offer hair and makeup services to our clients that creates a natural look. We use lighting that is on a par with that which is use in television studios – they're very bright. Because of this we recommend professional hair and makeup services that compensate for that lighting.
              </p>
            </div>
          </div>
        </section>

        {/* Hair Images Grid */}
        <section className="bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
            {hairImages.map((image, index) => (
              <div key={index} className="relative aspect-[5/4] bg-gray-200">
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

        {/* CTA Section */}
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
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'hair.md')
  let frontmatter = {
    title: 'Professional Hair and Makeup Services',
    description: 'Transform your look with professional hair and makeup services. See dramatic before and after results from our expert styling team.'
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