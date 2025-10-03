import { useState } from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import { X } from 'lucide-react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface TermsProps {
  frontmatter: { title: string; description: string }
  content: string
}

const Terms = ({ frontmatter }: TermsProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState('')

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  // Terms images data
  const termsImages = [
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
                Terms and Conditions
              </h1>
            </div>
          </div>
        </section>

        {/* Terms Images Grid */}
        <section className="bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
            {termsImages.map((image, index) => (
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

        {/* Terms Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-sm text-gray-600 mb-8">
                <strong>Effective Date:</strong> 08-01-2025
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                These Terms & Conditions ("Terms") govern your use of the website https://getaheadshot.net ("Site") and your booking of photography services with Get aHead Shot ("we," "our," or "us"). By accessing our Site or booking services, you agree to these Terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We provide professional headshot photography and related services. The specific details of your session (location, duration, pricing, deliverables) will be outlined at the time of booking.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Booking & Payment</h2>
              <ul className="text-gray-700 leading-relaxed mb-6 space-y-2">
                <li><strong>Deposits & Payments:</strong> A deposit may be required to secure your session. Full payment is due as agreed at booking.</li>
                <li><strong>Cancellation/Rescheduling:</strong> The client may reschedule a session if we are notified more than 24 hours in advance, one time at no charge. There is a $50 rescheduling charge for other reschedules. If the client cancels, there will not be a refund. If the client does not reschedule within 30 days, the session will be considered cancelled. If the client is more than 45 minutes late, the session will be considered cancelled, without a refund.</li>
                <li><strong>No-Shows:</strong> Failure to appear for a scheduled session without prior notice may result in forfeiture of your deposit or full payment.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Image Rights & Usage</h2>
              <ul className="text-gray-700 leading-relaxed mb-6 space-y-2">
                <li><strong>Client Rights:</strong> You will receive the agreed-upon images for personal, professional, or business use.</li>
                <li><strong>Copyright and Reproductions:</strong> The Photographer owns the copyright and exclusive rights to all images created and has the exclusive right to make reproductions for, including but not limited to, marketing materials, portfolio entries, sample products, editorial submissions and use, or for display within or on the Photographer's website and/or studio. It is understood that any duplication or alteration of original images is strictly prohibited without the written permission of the Photographer. Alterations include, but are not limited to, application of filters, cropping, or modifications of any kind. The Photographer provides the Client with photographs resized for Internet-based usage when digital copies are purchased.</li>
                <li><strong>Restrictions:</strong> You may not resell or alter the images without written consent. The commercial use of these images is not included. Commercial usage, using these on paid advertising campaigns or on products, like books, to be sold, is not included. Ask the photographer for pricing for commercial usage.</li>
                <li><strong>Completion Schedule/Retouching:</strong> Completion schedules and delivery of products are determined from the date of final approval by Client. An expedited fee of $100 will apply to expedited product requests. The Photographer will not be held responsible for delivery delays due to the fault of manufacturing and/or delivery services. Any retouching requests that are considered unique should be made at the time of the session and anything above and beyond what is normative (relative to my normative style as displayed on my website) will be charged at $50/hour. Retouching iterations up to three times are acceptable but after three, a standard rate of $50/hour will be charged.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Communications Consent</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                By providing your email or phone number, you consent to receive service-related and promotional communications via email, SMS, or phone. You may opt out at any time (see our Privacy Policy).
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Website Use</h2>
              <p className="text-gray-700 leading-relaxed mb-2">By using our Site, you agree not to:</p>
              <ul className="text-gray-700 leading-relaxed mb-6 space-y-1 ml-4">
                <li>• Misuse, disrupt, or interfere with site functionality.</li>
                <li>• Copy, reproduce, or republish content without permission.</li>
                <li>• Use the Site for unlawful purposes.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-2">While we strive to provide an exceptional photography experience, we are not liable for:</p>
              <ul className="text-gray-700 leading-relaxed mb-6 space-y-1 ml-4">
                <li>• Technical failures, rescheduling due to unforeseen events, or issues beyond our control.</li>
                <li>• Indirect or consequential damages arising from use of our Site or services. Our total liability shall not exceed the amount you paid for your session.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Refunds</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Refunds are at our discretion and will be handled on a case-by-case basis. Deposits may be non-refundable unless otherwise stated.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                These Terms are governed by the laws of the Commonwealth of Virginia. Any disputes will be resolved in the courts of Fairfax County, VA.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may update these Terms from time to time. Updates will be posted on this page with the "Effective Date" revised accordingly.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have questions about these Terms, please contact us at:<br />
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
  const filePath = path.join(process.cwd(), 'content', 'terms.md')
  let frontmatter = {
    title: 'Terms and Conditions',
    description: 'Terms and conditions for Get aHead Shot professional photography services. Review our policies for booking, payments, image rights, and service agreements.'
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

export default Terms