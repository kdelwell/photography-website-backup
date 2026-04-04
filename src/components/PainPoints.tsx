import { ShieldCheck, Clock, Users, Shirt } from 'lucide-react'

export default function PainPoints() {
  const points = [
    {
      title: 'Camera shy?',
      text: "Most of my clients tell me they hate being photographed. My coaching process has helped over 200 professionals look natural and confident — many say it was the best headshot photography experience they've ever had.",
      icon: ShieldCheck,
    },
    {
      title: 'Short on time?',
      text: "Sessions are efficient and focused. You'll have professionally retouched images delivered within days — not weeks. Same-day delivery available for rush orders.",
      icon: Clock,
    },
    {
      title: 'Need team consistency?',
      text: "I bring my professional headshot studio to your location. Matching lighting, style, and background across your entire organization — and new hires can be added anytime.",
      icon: Users,
    },
    {
      title: 'Not sure what to wear?',
      text: "You'll receive detailed prep guidance before your session covering wardrobe, grooming, and what to expect. Bring 2-3 outfit options and I'll help you choose what works best on camera.",
      icon: Shirt,
    },
  ]

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point) => {
            const Icon = point.icon
            return (
              <div key={point.title} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
