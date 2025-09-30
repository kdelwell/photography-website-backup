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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <HeaderNoPricing />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}