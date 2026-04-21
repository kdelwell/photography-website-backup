import type { AppProps } from 'next/app'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          site_name: 'Get aHead Shot',
          images: [
            {
              url: 'https://getaheadshot.net/images/og-default.jpg',
              width: 1200,
              height: 630,
              alt: 'Get aHead Shot',
            },
          ],
        }}
        twitter={{
          handle: '@getaheadshot',
          site: '@getaheadshot',
          cardType: 'summary_large_image',
        }}
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-399963959"
        strategy="lazyOnload"
      />
      <Script id="google-ads-gtag" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-399963959');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}