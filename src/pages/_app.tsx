import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useEffect } from 'react'
import { DefaultSeo } from 'next-seo'
import '@/styles/globals.css'

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    function track(name: string, params: Record<string, any> = {}) {
      if (typeof window.gtag === 'function') {
        window.gtag('event', name, params);
      } else {
        (window.dataLayer = window.dataLayer || []).push(['event', name, params]);
      }
    }

    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement)?.closest?.('a') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute('href') || '';

      if (href.startsWith('tel:')) {
        track('phone_click', { phone: href.replace('tel:', ''), location: location.pathname });
      } else if (href.startsWith('mailto:')) {
        track('email_click', { email: href.replace('mailto:', '').split('?')[0], location: location.pathname });
      } else if (/17hats\.com\/p#\/(scheduling|embed)/.test(href) || /admin\.getaheadshot\.net\/embed\/book/.test(href)) {
        track('book_click', { dest: href, location: location.pathname });
      } else if (href === '/more_info' || href.startsWith('/more_info?') || href.startsWith('/more_info#')) {
        track('pricing_click', { location: location.pathname });
      }
    }

    function onSubmit(e: SubmitEvent) {
      const form = e.target as HTMLFormElement | null;
      if (!form) return;
      track('form_submit', {
        form_id: form.id || form.name || form.action || 'unnamed',
        location: location.pathname,
      });
    }

    document.addEventListener('click', onClick, true);
    document.addEventListener('submit', onSubmit, true);
    return () => {
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('submit', onSubmit, true);
    };
  }, []);

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
        src="https://www.googletagmanager.com/gtag/js?id=G-9PNL0CCN6V"
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'G-9PNL0CCN6V');
          gtag('config', 'AW-399963959');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
