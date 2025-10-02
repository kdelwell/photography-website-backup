import Layout from '@/components/Layout'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, ChevronUp, X } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Why do I need a Professional for a headshot?",
    answer: "First Impressions Count\nYour headshot is often the very first thing people see on LinkedIn, your website, or even in a Zoom meeting. A professional headshot ensures that first impression communicates confidence, credibility, and approachability.\n\nLighting and Expression Coaching\nProfessional photographers know how to use lighting, posing, and expression coaching to capture the most authentic version of you. This is the difference between looking stiff and looking magnetic.\n\nStand Out in a Crowded Market\nOn LinkedIn alone, you're competing with millions of profiles. A polished, professional headshot instantly separates you from the sea of selfies and outdated photos.\n\nAn Investment in Your Brand\nYour image is part of your personal brand. Just like you wouldn't use a DIY logo for your business, you shouldn't trust your career image to a selfie. A professional headshot is a small investment with outsized returns in credibility, networking, and opportunity.\n\nBuilt for Today's Digital World\nFrom virtual meetings to online speaking engagements to your company's website, your headshot shows up in more places than ever before. A professional ensures it looks great across every platform."
  },
  {
    question: "How do I prepare for my session?",
    answer: "I've got the photography side covered — now let's talk about your part. To help you prepare, I've put together a set of session <a href='https://getaheadshot.net/prep' target='_blank' rel='noopener noreferrer' style='color: #dc2626; text-decoration: underline;'>prep guidelines</a> based on my years of experience. These tips are designed to make sure the focus stays on you, leaving viewers with the best impression of who you are.\n\nWith just a little preparation, you'll walk in feeling confident, relaxed, and ready. My goal is to help you feel your best so we can capture the most authentic version of you."
  },
  {
    question: "What if I hate taking pictures?",
    answer: "It's completely normal to dislike having your picture taken — in fact, most people feel that way. It's a bit like hearing your own recorded voice: strange for almost everyone, and uncomfortable for many. You're definitely not alone in this.\n\nOften the discomfort comes from comparing yourself to impossible standards we see in culture and media. Those comparisons create unrealistic expectations, and because we tend to be our own harshest critics, it's easy to focus on perceived flaws rather than strengths. The truth is, you don't need to look like anyone else — you just need to be the best version of you.\n\nThat's where I come in. My job is to use lighting, angles, and posing that highlight your strengths, while coaching you into natural expressions that project confidence and approachability. All you need to do is show up, relax, and trust the process. Together, we'll create an image you'll feel proud to share."
  },
  {
    question: "Why would my business need headshots?",
    answer: "1. Professional Brand Image\nA high-quality headshot sets the tone for your company's reputation. It shows that you value professionalism, attention to detail, and consistency across your team.\n\n2. Trust & Connection\nPeople want to do business with people they feel they know. Polished headshots help your employees look approachable and confident, creating an instant sense of connection with clients and partners.\n\n3. Consistency Across Platforms\nFrom LinkedIn and email signatures to company websites and press features, professional headshots ensure a cohesive, recognizable presence wherever your business shows up."
  },
  {
    question: "Will my image be retouched and what is included in that?",
    answer: "When it comes to retouching, my goal is always to keep your image looking polished but natural. As a standard, I'll take care of things like softening under-eye shadows, evening out skin tone, and minimizing distractions such as temporary blemishes, stray hairs, or lint on clothing.\n\nWhat I won't do is over-edit or make you look like someone else. The end result should be an authentic version of you at your best — confident, approachable, and professional — not a heavily airbrushed image. Most people tell me their finished photos look like them on their very best day, which is exactly the balance we want to achieve."
  },
  {
    question: "How long will it take to get my final images?",
    answer: "Typically, you'll receive your professionally edited images within 5-7 business days after your session. Rush delivery options are available if you need them sooner."
  }
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState('')

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const faqImages = [
    { src: '/images/faqs/Abdullah.jpg', alt: 'Professional headshot of Abdullah' },
    { src: '/images/faqs/Abha.jpg', alt: 'Professional headshot of Abha' },
    { src: '/images/faqs/Bernice.jpg', alt: 'Professional headshot of Bernice' },
    { src: '/images/faqs/Mike.jpg', alt: 'Professional headshot of Mike' }
  ]

  return (
    <Layout title="FAQs - Professional Headshot Photography" description="Frequently asked questions about professional headshot photography services">
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-white py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight">
            Frequently Asked Questions
          </h1>
        </div>

        {/* Hero Images Section */}
        <div className="w-full bg-white pb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {faqImages.map((image, index) => (
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

        {/* FAQ Items Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group"
                >
                  <span className="text-gray-700 text-lg font-medium pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 ml-2 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <div
                      className="text-gray-600 leading-relaxed whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gray-300 text-gray-800 py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              I'm here to help! Feel free to reach out with any other questions about your headshot session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kevin@getaheadshot.net"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors"
              >
                Email Me
              </a>
              <a
                href="tel:703-802-9379"
                className="bg-transparent border-2 border-gray-800 hover:bg-gray-800 hover:text-gray-300 text-gray-800 px-8 py-3 rounded-md font-semibold text-lg transition-colors"
              >
                Call 703-802-9379
              </a>
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