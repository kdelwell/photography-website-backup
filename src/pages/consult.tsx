import LayoutNoPricing from '@/components/LayoutNoPricing'
import Image from 'next/image'

export default function Consult() {
  return (
    <LayoutNoPricing
      title="Schedule a Consultation | Get aHead Shot"
      description="Schedule a free 30-minute consultation call to learn more about professional headshot photography services."
    >
      <div className="w-full">
        {/* Page Title */}
        <div className="text-center mt-5 mb-1 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Schedule a Consultation
          </h1>
        </div>

        {/* Schedule Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="relative w-full aspect-[4/2] mt-5 mb-5">
            <Image
              src="/images/schedule.jpg"
              alt="Schedule Your Consultation"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* StudiGo Booking Embed */}
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <iframe
            src="https://admin.getaheadshot.net/embed/book/zkC_XrYCh2"
            style={{ width: '100%', minHeight: '700px', border: 'none' }}
            allow="payment"
            title="Book a Consultation"
          />
        </div>
      </div>
    </LayoutNoPricing>
  )
}
