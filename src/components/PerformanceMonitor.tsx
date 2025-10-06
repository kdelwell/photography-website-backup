import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run performance monitoring in production
    if (process.env.NODE_ENV !== 'production') return

    // Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log Core Web Vitals
          if (entry.entryType === 'measure') {
            console.log(`Performance: ${entry.name} - ${entry.duration.toFixed(2)}ms`)
          }

          // Track Largest Contentful Paint (LCP)
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry.startTime
            if (lcp > 2500) {
              console.warn(`LCP is slow: ${lcp.toFixed(2)}ms (should be < 2500ms)`)
            }
          }

          // Track First Input Delay (FID)
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as any // Type assertion for FID entry
            const fid = fidEntry.processingStart - fidEntry.startTime
            if (fid > 100) {
              console.warn(`FID is slow: ${fid.toFixed(2)}ms (should be < 100ms)`)
            }
          }

          // Track Cumulative Layout Shift (CLS)
          if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as any // Type assertion for CLS entry
            if (!clsEntry.hadRecentInput) {
              const cls = clsEntry.value
              if (cls > 0.1) {
                console.warn(`CLS detected: ${cls.toFixed(4)} (should be < 0.1)`)
              }
            }
          }
        }
      })

      // Observe Core Web Vitals
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
      } catch (error) {
        // Fallback for browsers that don't support all entry types
        try {
          observer.observe({ entryTypes: ['largest-contentful-paint'] })
        } catch (fallbackError) {
          console.log('Performance monitoring not supported in this browser')
        }
      }

      // Monitor image loading performance
      const monitorImages = () => {
        const images = document.querySelectorAll('img')
        images.forEach((img, index) => {
          if (!img.complete) {
            const startTime = performance.now()
            img.onload = () => {
              const loadTime = performance.now() - startTime
              if (loadTime > 1000) {
                console.warn(`Slow image load: Image ${index + 1} took ${loadTime.toFixed(2)}ms`)
              }
            }
          }
        })
      }

      // Monitor images after a short delay to catch lazy-loaded images
      setTimeout(monitorImages, 1000)

      // Cleanup observer on unmount
      return () => observer.disconnect()
    }
  }, [])

  // This component doesn't render anything
  return null
}

// Utility function to measure custom performance metrics
export const measurePerformance = (name: string, fn: () => void | Promise<void>) => {
  if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
    return typeof fn === 'function' ? fn() : fn
  }

  const start = performance.now()

  try {
    const result = fn()

    if (result instanceof Promise) {
      return result.finally(() => {
        const duration = performance.now() - start
        performance.measure(name, { start, duration })
      })
    } else {
      const duration = performance.now() - start
      performance.measure(name, { start, duration })
      return result
    }
  } catch (error) {
    const duration = performance.now() - start
    performance.measure(`${name} (error)`, { start, duration })
    throw error
  }
}