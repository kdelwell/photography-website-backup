import Link from 'next/link'
import Image from 'next/image'

export default function SimpleHeader() {
  return (
    <header className="sticky top-0 z-50">
      {/* Top section with logo and tagline only */}
      <div className="bg-[#242424] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div className="flex items-center space-x-0 md:space-x-2">
              <Link href="/">
                <Image
                  src="/images/Logo.jpg"
                  alt="Get Ahead Shot Logo"
                  width={128}
                  height={80}
                  className="object-contain w-20 h-12 md:w-24 md:h-16 lg:w-32 lg:h-20"
                />
              </Link>
              <span className="text-white text-sm md:text-lg md:italic lg:text-xl font-light -ml-2"><em>WOW</em> for headshots.</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
