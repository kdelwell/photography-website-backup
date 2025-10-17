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
        <PerformanceMonitor />
        <Header hideMenu={hideMenu} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}