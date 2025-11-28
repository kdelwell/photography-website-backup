import { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import Header from './Header'
import Footer from './Footer'
import PerformanceMonitor from './PerformanceMonitor'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  hideMenu?: boolean
}

export default function Layout({ children, title = 'Photography Studio', description = 'Professional photography services', hideMenu = false }: LayoutProps) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: 'website',
        }}
      />
      <div className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-red-600 focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <PerformanceMonitor />
        <Header hideMenu={hideMenu} />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}