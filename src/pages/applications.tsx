import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Applications() {
  return (
    <Layout
      title="Applications - The Power of a Professional Image"
      description="Discover how a great headshot can open so many doors"
    >
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Power of a Professional Image
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Discover how a great headshot can open so many doors
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 - Dark */}
      <section className="bg-[#242424] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/Applications/LI_Profile.jpg"
                alt="LinkedIn profile headshot"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                LinkedIn Profile
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                The first thing people notice on LinkedIn is your profile picture. It instantly communicates who you are—your confidence, professionalism, and approachability. A strong photo builds trust, sparks interest, and sets the tone for your personal brand before they read a single word. It's your digital first impression—make it count.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Light */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Company Web Pages
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Consistent, high-quality images across your company's platforms signal professionalism, attention to detail, and a unified brand identity. They create a cohesive impression, and show that your team values presentation. Visual consistency reassures clients and partners that your business is reliable, credible, and serious about its image and message.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/Applications/Corp_web_app.jpg"
                alt="Company web pages headshot"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Dark */}
      <section className="bg-[#242424] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/Applications/Speaker_Bio.jpg"
                alt="Speaker bio headshot"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Speaker Bios
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                A great headshot for a speaker bio makes an immediate impact, conveying confidence, credibility, and approachability. It draws attention, supports your message, and sets the tone before you speak. Event organizers, audiences, and media form first impressions fast—your headshot ensures you're seen as a polished, professional, and compelling authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Light */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Zoom Profile
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                When your camera is off on Zoom, a quality profile image becomes your visual presence. It conveys professionalism, confidence, and approachability in your absence. A polished photo keeps you memorable, maintains engagement, and ensures you're still making a strong impression—even when you're not on screen. It's your silent representative.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/Applications/Zoom_Profile.jpg"
                alt="Zoom profile headshot"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Dark */}
      <section className="bg-[#242424] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/Applications/email_signature.jpg"
                alt="Email signature headshot"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Email Signatures
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                A great image in your email signature adds a personal, professional touch that builds recognition. It humanizes your communication, reinforces your brand, and makes your messages more memorable. Especially in business, a polished headshot helps establish credibility and creates a lasting visual connection with every email you send.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Light */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Social Media Profiles
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your social media profile picture is often your first—and sometimes only—chance to make an impression. A great image communicates confidence, authenticity, and professionalism. It builds trust, attracts the right attention, and reinforces your personal or business brand. In a fast-scrolling world, your photo needs to stand out and resonate.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/Applications/FB_Profile.jpg"
                alt="Social media profile headshot"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Dark */}
      <section className="bg-[#242424] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/Applications/namedrop.jpg"
                alt="NameDrop and Nearby Share"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                NameDrop and Nearby Share
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Using NameDrop and Nearby Share lets you instantly share your professional identity with clients or contacts—photo, name, and details—creating seamless, memorable introductions that reinforce brand consistency.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Need see a <a href="https://www.youtube.com/watch?v=FbOk85uvI7s" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline font-semibold">how to</a> of NameDrop?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 - Light */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Contact Poster
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                A Contact Poster on iPhone is a digital calling card that displays your photo, name, and contact info when you share details or call someone. Using a professional image ensures you appear polished, confident, and intentional—making a strong first impression and enhancing your personal brand in both casual and professional settings.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Need to learn more – here's <a href="https://www.youtube.com/watch?v=FbOk85uvI7s" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 underline font-semibold">how to</a> set that up.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/Applications/Contact_Poster.jpg"
                alt="Contact poster headshot"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Open New Doors?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Invest in a professional headshot that works for you across all these applications and more.
          </p>
          <a
            href="/more_info"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-200 inline-flex items-center"
          >
            Get Your Professional Headshot
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </Layout>
  )
}
