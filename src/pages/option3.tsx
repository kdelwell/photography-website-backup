import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export default function Option3({ frontmatter, content }: { frontmatter: any; content: string }) {
  return (
    <Layout title="Option 3: Split Layout" description="Split layout design">
      {/* Option 3: Split Layout */}
      
      {/* Split Hero Section */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Content */}
        <div className="bg-[#242424] text-white flex items-center">
          <div className="w-full px-8 md:px-16 py-16 lg:py-0">
            <div className="flex items-center space-x-3 mb-8">
              <Image
                src="/images/Logo.jpg"
                alt="Get Ahead Shot Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <span className="text-lg italic">WOW for headshots.</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional<br />
              Headshots<br />
              <span className="text-red-500">That Matter</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-md">
              Trained by world-renowned photographer Peter Hurley. Creating headshots that capture your confidence and open new opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                Book Your Session
              </Link>
              <Link 
                href="/portfolio" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#242424] px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                View Portfolio
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-600">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-red-500">500+</div>
                <div className="text-sm text-gray-400">Professionals</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-red-500">10+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-red-500">98%</div>
                <div className="text-sm text-gray-400">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Hero Image */}
        <div className="relative h-[50vh] lg:h-screen">
          <Image
            src="/images/Gallery/Maggie.jpg"
            alt="Professional Headshot Photography"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized headshot photography services for every professional need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/Gallery/Courtney.jpg"
                  alt="Corporate Headshots"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate Headshots</h3>
              <p className="text-gray-600">Professional headshots for business professionals, executives, and corporate teams.</p>
            </div>
            
            <div className="text-center group">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/Gallery/Joe.jpg"
                  alt="Actor Headshots"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Actor Headshots</h3>
              <p className="text-gray-600">Casting-ready headshots that capture your range and personality for the entertainment industry.</p>
            </div>
            
            <div className="text-center group">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/Gallery/Kelly.jpg"
                  alt="Personal Branding"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Branding</h3>
              <p className="text-gray-600">Authentic portraits that tell your story and connect with your audience across all platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Recent Work</h2>
            <p className="text-xl text-gray-600">
              See the quality and style that sets us apart
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
              <Image
                src="/images/Gallery/Matt.jpg"
                alt="Professional Headshot"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
              <Image
                src="/images/Gallery/Patricia.jpg"
                alt="Professional Headshot"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
              <Image
                src="/images/Gallery/Sherif.jpg"
                alt="Professional Headshot"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
              <Image
                src="/images/Gallery/Courtney.jpg"
                alt="Professional Headshot"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/portfolio" 
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/Kevin_footer.jpg"
                alt="Kevin Elwell, Professional Photographer"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Meet Kevin Elwell</h3>
              <p className="text-lg text-gray-600 mb-6">
                Trained by Peter Hurley, one of the world's most renowned headshot photographers, Kevin brings years of experience and a unique approach to every session.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                My goal is simple: help you feel confident and comfortable so we can capture headshots that truly represent who you are and where you're going.
              </p>
              <Link 
                href="/about" 
                className="text-red-500 hover:text-red-600 text-lg font-semibold"
              >
                Read My Full Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-[#242424] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Ready to Stand Out?</h3>
          <p className="text-xl mb-8 text-gray-300">
            Let's create headshots that open doors and make lasting impressions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-red-500 hover:bg-red-600 text-white px-10 py-5 rounded-lg text-xl font-semibold transition-colors"
            >
              Book Your Session
            </Link>
            <Link
              href="/more_info"
              className="border-2 border-white text-white hover:bg-white hover:text-[#242424] px-10 py-5 rounded-lg text-xl font-semibold transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'home.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}