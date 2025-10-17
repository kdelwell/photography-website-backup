import Image from 'next/image'

export default function HeadshotReviews() {
  return (
    <section style={{ backgroundColor: '#242424', paddingTop: '48px', paddingBottom: '80px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 leading-tight">
          200+ 5-Star Reviews
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Peter's Review */}
          <div className="text-center flex flex-col items-center">
            <div className="relative w-72 aspect-[5/4] mb-8 overflow-hidden rounded">
              <Image
                src="/images/Reviews/Peter.jpg"
                alt="Peter A."
                fill
                className="object-cover"
              />
            </div>
            <p className="text-white text-base italic mb-8 leading-relaxed max-w-sm">
              "Kevin knows how to bring to life the natural personality of his clients who may otherwise feel uncomfortable or stiff in front of the camera. I couldn't be more happy with the results!"
            </p>
            <div>
              <h3 className="text-white text-lg font-medium mb-1">Peter A.</h3>
              <p className="text-gray-400 text-sm font-light">Chief Executive Officer</p>
            </div>
          </div>

          {/* Kerensa's Review */}
          <div className="text-center flex flex-col items-center">
            <div className="relative w-72 aspect-[5/4] mb-8 overflow-hidden rounded">
              <Image
                src="/images/Reviews/Kerensa.jpg"
                alt="Kerensa G."
                fill
                className="object-cover object-[center_center]"
              />
            </div>
            <p className="text-white text-base italic mb-8 leading-relaxed max-w-sm">
              "Kevin was able to get so many great shots and in a short amount of time. I am extremely happy with my pictures and his work is phenomenal! If I could give him 10 stars, I would!"
            </p>
            <div>
              <h3 className="text-white text-lg font-medium mb-1">Kerensa G.</h3>
              <p className="text-gray-400 text-sm font-light">Educator</p>
            </div>
          </div>

          {/* Elizabeth's Review */}
          <div className="text-center flex flex-col items-center">
            <div className="relative w-72 aspect-[5/4] mb-8 overflow-hidden rounded">
              <Image
                src="/images/Reviews/Elizabeth.jpg"
                alt="Elizabeth G."
                fill
                className="object-cover"
              />
            </div>
            <p className="text-white text-base italic mb-8 leading-relaxed max-w-sm">
              "Kevin is a best-in-class headshot photographer. Kevin's process is especially perfect for individuals that hate their photo being taken. Kevin listens and coaches you through subtle expression changes that captured the real you."
            </p>
            <div>
              <h3 className="text-white text-lg font-medium mb-1">Elizabeth G.</h3>
              <p className="text-gray-400 text-sm font-light">Chief Strategy Officer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
