import Head from 'next/head'
import HeaderNoPricing from './HeaderNoPricing'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  title: string
  description: string
}

export default function LayoutNoPricing({ children, title, description }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-red-600 focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <HeaderNoPricing />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}