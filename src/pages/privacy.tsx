import { useState } from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import { X } from 'lucide-react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface PrivacyProps {
  frontmatter: { title: string; description: string }
  content: string
}

const Privacy = ({ frontmatter }: PrivacyProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState('')

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  // Privacy images data (same as terms page)
  const privacyImages = [
    {
      src: '/images/terms/Bob_K.jpg',
      alt: 'Bob K - Professional Headshot'
    },
    {
      src: '/images/terms/Anne.jpg',
      alt: 'Anne - Professional Headshot'
    },
    {
      src: '/images/terms/Dan.jpg',
      alt: 'Dan - Professional Headshot'
    },
    {
      src: '/images/terms/Ruth.jpg',
      alt: 'Ruth - Professional Headshot'
    }
  ]

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-wide">
                Privacy Policy
              </h1>
            </div>
          </div>
        </section>

        {/* Privacy Images Grid */}
        <section className="bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
            {privacyImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[5/4] bg-gray-200 cursor-pointer"
                onClick={() => openLightbox(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-sm text-gray-600 mb-8">
                <strong>Effective Date:</strong> 08-01-2025
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Get aHead Shot ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website, schedule a session, or interact with us through email, SMS, or other marketing channels. By using our website or providing your information, you consent to the practices described in this policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We may collect the following types of information:</p>
              <ul className="text-gray-700 leading-relaxed mb-6 space-y-2">
                <li><strong>Personal Information:</strong> name, email address, phone number, company, job title, and billing information when you book a session.</li>
                <li><strong>Communications Data:</strong> responses to SMS/texts, emails, or online forms.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, cookies, and analytics data from tools like Google Analytics or Facebook Pixel.</li>
                <li><strong>Images & Media:</strong> headshots and photographs captured during your session (with your consent).</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We use the information collected to:</p>
              <ul className="text-gray-700 leading-relaxed mb-6 space-y-2">
                <li>• Schedule and manage your photography sessions.</li>
                <li>• Communicate with you by email, SMS, or phone regarding your booking, reminders, and updates.</li>
                <li>• Send you promotional content, newsletters, and offers (only if you've opted in).</li>
                <li>• Improve our website, marketing campaigns, and customer experience.</li>
                <li>• Comply with legal, regulatory, or contractual obligations.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. SMS and Email Consent</h2>
              <p className="text-gray-700 leading-relaxed mb-4">By providing your phone number or email, you consent to receive communications from us.</p>
              <ul className="text-gray-700 leading-relaxed mb-6 space-y-2">
                <li><strong>SMS Messages:</strong> We may send appointment reminders, confirmations, or marketing messages. Standard message and data rates may apply. You can opt out at any time by replying "STOP."</li>
                <li><strong>Emails:</strong> You may unsubscribe at any time by clicking the "unsubscribe" link in our emails.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sharing Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We do not sell your personal information. We may share it only in the following cases:</p>
              <ul className="text-gray-700 leading-relaxed mb-6 space-y-2">
                <li>• With service providers (e.g., GoHighLevel, MailerLite, scheduling tools, payment processors) who help us operate our business.</li>
                <li>• To comply with legal obligations or protect our rights.</li>
                <li>• With your consent.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We use cookies, pixels, and similar technologies to:</p>
              <ul className="text-gray-700 leading-relaxed mb-6 space-y-2">
                <li>• Analyze website traffic and user behavior.</li>
                <li>• Run remarketing and advertising campaigns.</li>
                <li>• Improve site performance.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                You can manage or disable cookies through your browser settings.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We implement reasonable technical and organizational measures to protect your personal data. However, no system is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Depending on your location, you may have rights to:</p>
              <ul className="text-gray-700 leading-relaxed mb-6 space-y-2">
                <li>• Access, correct, or delete your personal information.</li>
                <li>• Opt out of marketing communications.</li>
                <li>• Request a copy of the data we hold about you.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                To exercise your rights, contact us at: <a href="mailto:kevin@getaheadshot.net" className="text-red-600 hover:text-red-700">kevin@getaheadshot.net</a>
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our services are intended for adults and professionals. We do not knowingly collect information from children under 16.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may update this Privacy Policy from time to time. The latest version will always be available on this page with the "Effective Date" updated.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have questions about this Privacy Policy, please contact us at:<br />
                <strong>Get aHead Shot</strong><br />
                Email: <a href="mailto:kevin@getaheadshot.net" className="text-red-600 hover:text-red-700">kevin@getaheadshot.net</a><br />
                Phone: <a href="tel:703-802-9379" className="text-red-600 hover:text-red-700">703-802-9379</a><br />
                Website: <a href="https://getaheadshot.net" className="text-red-600 hover:text-red-700" target="_blank" rel="noopener noreferrer">https://getaheadshot.net</a>
              </p>
            </div>
          </div>
        </section>

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
  const filePath = path.join(process.cwd(), 'content', 'privacy.md')
  let frontmatter = {
    title: 'Privacy Policy',
    description: 'Privacy policy for Get aHead Shot professional photography services. Learn how we collect, use, and protect your personal information.'
  }

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    frontmatter = data
  } catch (error) {
    // File doesn't exist, use defaults
  }

  return { props: { frontmatter, content: '' } }
}

export default Privacy