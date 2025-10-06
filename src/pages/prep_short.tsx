import Layout from '@/components/Layout'
import Image from 'next/image'
import matter from 'gray-matter'
import { useState } from 'react'
import { X } from 'lucide-react'
import fs from 'fs'
import path from 'path'

export default function PrepShort({ frontmatter }: { frontmatter: any }) {
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

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Working Together to Look Your Best</h2>
                  <p className="mb-4">
                    Our goal is to work together to create some fantastic imagery. On my end, I'm using professional lighting, professional cameras and lenses that have super high resolution and sharpness, and the latest in image editing software. I'll be retouching skin (making color consistent, removing blemishes), softening wrinkles, reshaping salient features (on request), removing stray hairs, and fixing whatever you'd like to improve upon.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Clothing</h2>
                  <p className="mb-4">
                    Wear clothing that you feel good in. Most importantly you need to feel like you look good, so the clothing you choose must facilitate those feelings of confidence. You should wear things that you presently own if possible, as we want you to look as much like yourself when you walk in the room as possible.
                  </p>
                  <p className="mb-4">
                    When making choices keep it to solid neutral colors (Avoid stripes, plaids, checkered patterns, and busy-prints. You can wear bright colors such as red or orange, but they tend to draw the viewer's eye away from the face. It can still work in the image, so use your best judgment. Strive to create a contrast with your skin tones. Of course, dark colors are always a great option and offer a slimming and more flattering effect. Fit is important. Try to find clothing that fits you well, especially around the neck. If you have lost or gained weight consider updating your wardrobe to ensure a proper fit, as baggy or ill-fitting clothing will have a big impact on your image.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Makeup</h2>
                  <p className="mb-4">
                    For women, please go easy on foundation and try to keep your overall appearance as natural looking as possible. I recommend against using products that contain SPF as this will leave a shine on your skin.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Glasses</h2>
                  <p className="mb-4">
                    If people know you as wearing glasses, then by all means wear them during the session. We can adjust the lights to avoid glare and if necessary the glare can be retouched out of the images.
                  </p>
                  <p className="mb-4">
                    However, if it's a judgment call, you'll generally look better without your glasses.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Jewelry</h2>
                  <p className="mb-4">
                    You can wear jewelry; however, I do not recommend it whenever possible. Our goal is to keep distractions from the "message" (your face) to a minimum. For instance, studs are ok, but big hoops would definitely be that distraction! That being said, if you have a signature look that makes you recognizable, we will proceed as such.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Hygiene, Grooming, & Hair</h2>
                  <p className="mb-4">
                    If you're going to have lunch prior to our session, please make sure that you've brushed your teeth. I'm working at a very high resolution, so food particles will show up between your teeth. It's always better to get it right in the capture process, rather than having to retouch.
                  </p>
                  <p className="mb-4">
                    <strong>Men:</strong> If you need to get your hair cut, please get it done at least one week before the session. This will allow things to normalize in your appearance. Style your hair as you would normally. Trim the eyebrows and nose-hairs and even the hair coming out of your ears (if you're older, this usually is a problem). Try to come right after you have shaved or bring your electric razor if you have one.
                  </p>
                  <p className="mb-4">
                    <strong>Women:</strong> If you need to get your hair cut, please get it done at least one week before the session. This will allow things to normalize in your appearance.
                  </p>
                </div>
              </div>

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
  let frontmatter = {
    title: 'Session Preparation Guide',
    description: 'Essential tips and guidelines for preparing for your professional headshot session.'
  }

  try {
    const filePath = path.join(process.cwd(), 'content', 'prep_short.md')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    frontmatter = { ...frontmatter, ...data }
  } catch (error) {
    // File doesn't exist, use defaults
  }

  return { props: { frontmatter } }
}