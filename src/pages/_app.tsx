import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useEffect } from 'react'
import Router from 'next/router'
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
      // Ensure dataLayer + gtag stub exist before gtag.js finishes loading.
      // Without this, an event fired during mount (e.g. funnel_conversion on
      // the initial /pricing render) hits the lazyOnload gap and gets pushed
      // to the queue in the wrong format — gtag.js then ignores it.
      window.dataLayer = window.dataLayer || [];
      if (typeof window.gtag !== 'function') {
        window.gtag = function () {
          // eslint-disable-next-line prefer-rest-params
          window.dataLayer!.push(arguments);
        } as typeof window.gtag;
      }
      window.gtag!('event', name, params);
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

    // Funnel events fire on initial mount and on every client-side route change.
    //   funnel_entry      → user landed on /more_info
    //   funnel_engaged    → user has been on /more_info ≥ 20s (intent signal,
    //                       since 17hats iframe content is opaque to us)
    //   funnel_abandoned  → user is leaving /more_info without having reached
    //                       /pricing in this session
    //   funnel_conversion → user reached /pricing
    let engagedTimer: ReturnType<typeof setTimeout> | null = null;
    let onMoreInfoPage = false;

    function clearEngagedTimer() {
      if (engagedTimer) { clearTimeout(engagedTimer); engagedTimer = null; }
    }

    function handleRoute(url: string) {
      const path = url.split('?')[0].split('#')[0];

      // Leaving /more_info: if we never converted, count as abandonment.
      if (onMoreInfoPage && path !== '/more_info') {
        let converted = false;
        try { converted = sessionStorage.getItem('funnelConverted') === '1'; } catch (e) {}
        if (!converted && path !== '/pricing') {
          let timeOnPage = 0;
          try {
            const stamp = parseInt(sessionStorage.getItem('funnelEnteredAt') || '0', 10) || 0;
            if (stamp) timeOnPage = Math.round((Date.now() - stamp) / 1000);
          } catch (e) {}
          track('funnel_abandoned', { funnel_next_path: path, funnel_time_on_page_sec: timeOnPage });
        }
        clearEngagedTimer();
        onMoreInfoPage = false;
      }

      if (path === '/more_info') {
        onMoreInfoPage = true;
        try {
          sessionStorage.setItem('funnelEnteredAt', String(Date.now()));
          sessionStorage.removeItem('funnelConverted');
        } catch (e) {}
        const search = url.includes('?') ? url.split('?')[1].split('#')[0] : '';
        const params = new URLSearchParams(search);
        track('funnel_entry', {
          funnel_utm_source: params.get('utm_source') || '',
          funnel_utm_campaign: params.get('utm_campaign') || '',
          funnel_referrer: document.referrer || '',
        });
        clearEngagedTimer();
        engagedTimer = setTimeout(() => {
          track('funnel_engaged', { funnel_time_on_page_sec: 20 });
          engagedTimer = null;
        }, 20000);
      }

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

        try { sessionStorage.setItem('funnelConverted', '1'); } catch (e) {}
        track('funnel_conversion', {
          funnel_source: source,
          funnel_utm_source: utmSource,
          funnel_utm_campaign: utmCampaign,
          funnel_referrer: ref,
        });
      }
    }

    // Fire funnel_abandoned on tab close / hard navigation away from /more_info.
    // Use sendBeacon-friendly path: gtag handles transport; no async work allowed.
    function onPageHide() {
      if (!onMoreInfoPage) return;
      let converted = false;
      try { converted = sessionStorage.getItem('funnelConverted') === '1'; } catch (e) {}
      if (converted) return;
      let timeOnPage = 0;
      try {
        const stamp = parseInt(sessionStorage.getItem('funnelEnteredAt') || '0', 10) || 0;
        if (stamp) timeOnPage = Math.round((Date.now() - stamp) / 1000);
      } catch (e) {}
      track('funnel_abandoned', { funnel_next_path: 'unload', funnel_time_on_page_sec: timeOnPage });
    }
    window.addEventListener('pagehide', onPageHide);

    handleRoute(window.location.pathname + window.location.search);
    Router.events.on('routeChangeComplete', handleRoute);

    return () => {
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('submit', onSubmit, true);
      window.removeEventListener('pagehide', onPageHide);
      Router.events.off('routeChangeComplete', handleRoute);
      clearEngagedTimer();
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
          window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
          window.gtag('js', new Date());
          window.gtag('config', 'G-9PNL0CCN6V');
          window.gtag('config', 'AW-399963959');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
