import { useState } from 'react'
import LayoutNoPricing from '@/components/LayoutNoPricing'
import Image from 'next/image'

export default function SMSConsent() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const form = e.currentTarget
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value.trim(),
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem('email') as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value.trim(),
      smsConsent: (form.elements.namedItem('smsConsent') as HTMLInputElement).checked,
    }

    if (!data.smsConsent) {
      setError('Please consent to receive text messages to continue.')
      setLoading(false)
      return
    }

    try {
      const resp = await fetch('https://admin.getaheadshot.net/api/webhooks/contact?key=tldOkBmVbGyjcIMEkcRm9LjBiQeNmclk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          addTags: ['sms-optin'],
        }),
      })
      if (!resp.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  // Phone auto-format
  const formatPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    let digits = e.target.value.replace(/\D/g, '')
    if (digits.length > 10 && digits.charAt(0) === '1') digits = digits.substring(1)
    digits = digits.substring(0, 10)
    let formatted = ''
    if (digits.length > 0) formatted = '(' + digits.substring(0, 3)
    if (digits.length >= 3) formatted += ') '
    if (digits.length > 3) formatted += digits.substring(3, 6)
    if (digits.length >= 6) formatted += '-' + digits.substring(6)
    e.target.value = formatted
  }

  return (
    <LayoutNoPricing
      title="Stay Connected | Get aHead Shot Photography"
      description="Sign up to receive text message updates from Get aHead Shot Photography about your session, reminders, and special offers."
    >
      <div className="w-full">
        {/* Hero Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="relative w-full aspect-[4/2] mt-5 mb-5">
            <Image
              src="/images/more_info.jpg"
              alt="Get aHead Shot Photography"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">You're all set!</h2>
              <p className="text-lg text-gray-600">Thank you for signing up. We'll be in touch soon.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Stay Connected</h1>
                <p className="text-lg text-gray-600">
                  Sign up to receive text message updates about your session, appointment reminders, and occasional special offers.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      autoComplete="given-name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      autoComplete="family-name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    autoComplete="tel"
                    maxLength={14}
                    onChange={formatPhone}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900"
                  />
                </div>

                {/* SMS Consent */}
                <div className="mt-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="smsConsent"
                      className="mt-1 w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <span className="text-sm text-gray-700">
                      I consent to receive text messages related to my inquiry, including qualifying questions, service options, and next steps. Messages are relevant to my request and not general advertising. Reply STOP at any time to opt out.
                    </span>
                  </label>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    By opting in and providing your phone number you consent to receive text messages from Get aHead Shot regarding appointments, your inquiries, account updates, and other relevant information. Message frequency will vary. Message and data rates may apply. For assistance, reply HELP or contact us at our{' '}
                    <a href="https://getaheadshot.net" className="text-blue-600 hover:text-blue-700 underline">website</a>.{' '}
                    To stop receiving messages, reply STOP. No further messages will be sent. No mobile data will be shared with third parties/affiliates for marketing/promotional purposes at any time. Review our{' '}
                    <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline">privacy policy</a> and{' '}
                    <a href="/terms" className="text-blue-600 hover:text-blue-700 underline">terms and conditions</a>.
                  </p>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700 text-center">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-lg text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </LayoutNoPricing>
  )
}
