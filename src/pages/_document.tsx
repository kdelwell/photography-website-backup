import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Get Ahead Shot Photography",
    "url": "https://getaheadshot.net",
    "logo": "https://getaheadshot.net/images/Logo.jpg",
    "description": "Washington DC's premier professional headshot photographer. Magazine-quality headshots for executives, entrepreneurs, and business professionals.",
    "telephone": "+1-703-802-9379",
    "email": "info@getaheadshot.net",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6720 Hartwood Lane",
      "addressLocality": "Centreville",
      "addressRegion": "VA",
      "postalCode": "20121",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.instagram.com/getaheadshotwithkevin",
      "https://www.facebook.com/getaheadshot",
      "https://www.linkedin.com/in/getaheadshot/"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Get Ahead Shot Photography",
    "image": "https://getaheadshot.net/images/Logo.jpg",
    "priceRange": "$$",
    "@id": "https://getaheadshot.net",
    "url": "https://getaheadshot.net",
    "telephone": "+1-703-802-9379",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6720 Hartwood Lane",
      "addressLocality": "Centreville",
      "addressRegion": "VA",
      "postalCode": "20121",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.8404,
      "longitude": -77.4294
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Washington, DC"
      },
      {
        "@type": "City",
        "name": "Arlington, VA"
      },
      {
        "@type": "City",
        "name": "Alexandria, VA"
      },
      {
        "@type": "City",
        "name": "Bethesda, MD"
      },
      {
        "@type": "City",
        "name": "Silver Spring, MD"
      },
      {
        "@type": "City",
        "name": "Centreville, VA"
      },
      {
        "@type": "City",
        "name": "Fairfax, VA"
      },
      {
        "@type": "City",
        "name": "Reston, VA"
      },
      {
        "@type": "City",
        "name": "Tysons Corner, VA"
      },
      {
        "@type": "City",
        "name": "McLean, VA"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/getaheadshotwithkevin",
      "https://www.facebook.com/getaheadshot",
      "https://www.linkedin.com/in/getaheadshot/"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Professional Headshot Photography",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Get Ahead Shot Photography",
      "areaServed": "Washington, DC Metro Area"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional Photography Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Headshots",
            "description": "Professional headshot photography for individuals and businesses in Washington DC"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Headshots",
            "description": "On-location corporate headshot photography for teams and organizations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LinkedIn Headshots",
            "description": "Professional LinkedIn profile photography in Washington DC"
          }
        }
      ]
    }
  };

  return (
    <Html lang="en">
      <Head>
        {/* Favicons and Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/Logo.jpg" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#ef4444" />
        <meta name="msapplication-TileColor" content="#ef4444" />

        {/* Apple Mobile Web App */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Get Ahead Shot" />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="gXklOuDGOMYfYLh6s806C9uOfObEU-fDn_H15yK0BZA" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}