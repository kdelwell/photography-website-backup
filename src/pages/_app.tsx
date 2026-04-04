import type { AppProps } from 'next/app'
import Script from 'next/script'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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