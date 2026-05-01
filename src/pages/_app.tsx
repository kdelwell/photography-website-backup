import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import '@/styles/globals.css'

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

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

    // Funnel attribution runs on initial mount AND on every client-side route
    // change. Without the route handler, Next.js SPA navigation from /more_info
    // to /pricing would never fire `funnel_conversion`, since useEffect with
    // empty deps only runs once.
    function handleRoute(url: string) {
      const path = url.split('?')[0].split('#')[0];

      // Stamp sessionStorage when entering /more_info, so a later /pricing
      // arrival can be attributed even if the referrer is stripped.
      if (path === '/more_info') {
        try { sessionStorage.setItem('funnelEnteredAt', String(Date.now())); } catch (e) {}
      }

      // Conversion: user reached /pricing. Three signals — UTM, referrer,
      // 24h sessionStorage flag — any one is enough.
      if (path === '/pricing') {
        const search = url.includes('?') ? url.split('?')[1].split('#')[0] : '';
        const params = new URLSearchParams(search);
        const utmSource = params.get('utm_source') || '';
        const utmCampaign = params.get('utm_campaign') || '';
        const ref = document.referrer || '';
        let funnelStamp = 0;
        try { funnelStamp = parseInt(sessionStorage.getItem('funnelEnteredAt') || '0', 10) || 0; } catch (e) {}
        const within24h = funnelStamp > 0 && (Date.now() - funnelStamp) < 24 * 60 * 60 * 1000;

        const utmMatch = /more_info|welcome_email/i.test(utmSource) || /more_info/i.test(utmCampaign);
        const refMatch = ref.includes('/more_info') || /17hats\.com/.test(ref);

        let source: 'more_info_email' | 'more_info_redirect' | 'more_info_session' | 'direct' = 'direct';
        if (utmMatch) source = 'more_info_email';
        else if (refMatch) source = 'more_info_redirect';
        else if (within24h) source = 'more_info_session';

        track('funnel_conversion', {
          source,
          utm_source: utmSource,
          utm_campaign: utmCampaign,
          referrer: ref,
        });
      }
    }

    handleRoute(router.asPath);
    router.events.on('routeChangeComplete', handleRoute);

    return () => {
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('submit', onSubmit, true);
      router.events.off('routeChangeComplete', handleRoute);
    };
  }, [router]);

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
