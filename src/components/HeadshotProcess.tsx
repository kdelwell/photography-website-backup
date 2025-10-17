import Image from 'next/image'

export default function HeadshotProcess() {
  return (
    <section style={{ paddingTop: '30px', paddingBottom: '30px' }} className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Getting Your Headshot Is Easy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Step 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 relative">
                <Image
                  src="/images/ProcessIcons/Calendar.png"
                  alt="Calendar Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-900 text-lg leading-relaxed">
              1. Match your schedule up with mine using my on-line appointment system – you choose a time that works for you.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 relative">
                <Image
                  src="/images/ProcessIcons/Camera.png"
                  alt="Camera Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-900 text-lg leading-relaxed">
              2. We'll use my feedback system to fine-tune the image and together select the best images.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 relative">
                <Image
                  src="/images/ProcessIcons/Sliders.png"
                  alt="Sliders Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-900 text-lg leading-relaxed">
              3. You get professionally retouched images that are delivered to you digitally on your time-line.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
