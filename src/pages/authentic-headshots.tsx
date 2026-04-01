import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

const CTA_URL = '/consult'
const CTA_TEXT = 'Schedule a Call'

function CTAButton({ className = '' }: { className?: string }) {
  return (
    <Link
      href={CTA_URL}
      className={`inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors ${className}`}
    >
      {CTA_TEXT}
    </Link>
  )
}

export default function AuthenticHeadshots() {
  return (
    <Layout
      title="Headshots for People Who Hate Having Their Photo Taken | Get aHead Shot"
      description="A relaxed, guided headshot experience for professionals who want to look polished, natural, and authentic without feeling stiff or over-posed."
    >
      {/* ===== HERO ===== */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                If You Hate Having Your Photo Taken, You're in the Right Place
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Most people who come to us say the same thing: they feel awkward in photos, they never know what to do, and they usually dislike how they look. That's exactly why our process is built differently.
              </p>
              <CTAButton />
              <p className="text-sm text-gray-400 mt-4">
                A quick, low-pressure conversation to see if this is the right fit.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              {/* Hero image — swap with a natural, approachable portrait from your portfolio */}
              <Image
                src="/images/Gallery/Maggie.jpg"
                alt="Natural, confident professional headshot"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== RELATABILITY / PROBLEM ===== */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            You're Not Bad at Photos
          </h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              A lot of people assume they're the problem.
            </p>
            <p>
              They think they're not photogenic. That they always look awkward. That they never know what expression to make. That they're just not comfortable on camera.
            </p>
            <p>
              In reality, most people have just never been guided well.
            </p>
            <p>
              A good headshot session is not about forcing you into a version of yourself that feels polished but fake. It's about helping you relax, giving you clear direction, and capturing an image that actually feels like you.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA BREAK ===== */}
      <section className="bg-white" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
        <div className="text-center">
          <CTAButton />
        </div>
      </section>

      {/* ===== DIFFERENCE SECTION ===== */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            This Isn't the Usual Headshot Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Guided the Whole Time</h3>
              <p className="text-gray-600 leading-relaxed">
                You will not be left wondering what to do with your face, posture, or hands. We guide you through the entire process.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Natural, Not Overdone</h3>
              <p className="text-gray-600 leading-relaxed">
                The goal is a polished image that still looks like you. Not stiff. Not overly edited. Not forced.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Built for Real People</h3>
              <p className="text-gray-600 leading-relaxed">
                This experience is designed for professionals who do not love being photographed, not just people who are already comfortable in front of a camera.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Confidence You Can Use</h3>
              <p className="text-gray-600 leading-relaxed">
                You leave with images you will actually feel good putting on LinkedIn, your website, speaking materials, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUTCOME SECTION ===== */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Goal Is Not Just a Better Photo
              </h2>
              <p className="text-xl text-gray-700 font-medium mb-6">
                It's feeling good about how you show up.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Your headshot is often the first impression people get before they ever meet you. It should look polished, approachable, and believable.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Not a photo you tolerate.<br />
                A photo you feel confident using.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Swap these with portfolio shots that feel natural and expressive */}
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/images/SecondGallery/Lauren.jpg"
                  alt="Natural professional headshot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/images/SecondGallery/Fabian.jpg"
                  alt="Authentic business portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BREAK ===== */}
      <section className="bg-white" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
        <div className="text-center">
          <CTAButton />
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section style={{ backgroundColor: '#242424', paddingTop: '48px', paddingBottom: '64px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What People Usually Say Afterward
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "Kevin made the entire experience relaxed and enjoyable while still being highly attentive to detail and lighting. The final photos perfectly captured the look I was going for: polished, confident, and natural.",
                name: "German G.",
              },
              {
                quote: "Kevin at Get aHead Shot was extremely professional and knowledgeable. He was kind, patient, and made the entire experience very comfortable.",
                name: "Que H.",
              },
              {
                quote: "He really makes you feel comfortable throughout the event.",
                name: "Doug C.",
              },
              {
                quote: "He made me feel comfortable in front of the camera and captured photos that looked both natural and confident.",
                name: "Cynthia W.",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white/5 rounded-lg p-6">
                <p className="text-white text-base italic leading-relaxed mb-4">
                  "{t.quote}"
                </p>
                <p className="text-gray-400 text-sm font-medium">
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: '1',
                title: 'Start With a Quick Call',
                body: "We'll talk through what you need, how you want to come across, and whether this feels like the right fit.",
              },
              {
                step: '2',
                title: 'Get Guided Through the Shoot',
                body: "During the session, you'll get clear direction the entire time so nothing feels awkward or uncertain.",
              },
              {
                step: '3',
                title: "Get Photos You'll Actually Use",
                body: "You'll walk away with polished, authentic images you feel good about sharing.",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-red-600 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            We Make This Easier Than You Think
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            You do not need to know how to pose. You do not need to feel naturally comfortable on camera. You don't need to worry about hair and makeup. You just need the right process.
          </p>
          <CTAButton />
          <p className="text-sm text-gray-400 mt-4">
            Start with a simple conversation and we'll take it from there.
          </p>
        </div>
      </section>
    </Layout>
  )
}
