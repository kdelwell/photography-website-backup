import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/images/Logo.jpg" />

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