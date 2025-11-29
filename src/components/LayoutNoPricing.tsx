import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import HeaderNoPricing from './HeaderNoPricing'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  title: string
  description: string
}

export default function LayoutNoPricing({ children, title, description }: LayoutProps) {
  const router = useRouter()
  const canonicalUrl = `https://getaheadshot.net${router.asPath}`

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonicalUrl}
        noindex={true}
        nofollow={true}
        openGraph={{
          title,
          description,
          type: 'website',
          url: canonicalUrl,
          site_name: 'Get Ahead Shot Photography',
        }}
      />

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