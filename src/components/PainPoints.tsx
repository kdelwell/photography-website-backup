export default function PainPoints() {
  const points = [
    {
      title: 'Camera shy?',
      text: "I coach you through every expression — most clients say it was actually fun.",
    },
    {
      title: 'Short on time?',
      text: 'Sessions are efficient and your retouched images are delivered within days.',
    },
    {
      title: 'Need team consistency?',
      text: 'Group sessions with matching lighting and style across your entire organization.',
    },
    {
      title: 'Not sure what to wear?',
      text: "Prep guidance included — you'll show up confident and ready.",
    },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point) => (
            <div key={point.title} className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
