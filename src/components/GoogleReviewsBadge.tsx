export default function GoogleReviewsBadge() {
  return (
    <section className="py-10" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="https://www.google.com/search?q=Get+aHead+Shot+Photography+Centreville+VA+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-6 group"
          style={{ textDecoration: 'none' }}
        >
          {/* Google G logo */}
          <svg viewBox="0 0 48 48" width="40" height="40" className="flex-shrink-0">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>

          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              {/* 5 stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" width="20" height="20" fill="#FBBC05">
                    <path d="M10 1l2.39 6.26H19l-5.3 4.13L15.82 18 10 13.87 4.18 18l2.12-6.61L1 7.26h6.61z"/>
                  </svg>
                ))}
              </div>
              <span className="text-white font-bold text-lg">5.0</span>
            </div>
            <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors">
              230+ reviews on Google &middot; Read reviews &rarr;
            </p>
          </div>
        </a>
      </div>
    </section>
  )
}
