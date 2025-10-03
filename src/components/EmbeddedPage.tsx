import LayoutNoPricing from '@/components/LayoutNoPricing'
import Image from 'next/image'
import Script from 'next/script'

interface EmbeddedPageProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  iframeSrc: string
  iframeId: string
  formId?: string
  scriptSrc: string
  iframeStyle?: React.CSSProperties
  iframeHeight?: string
  pageTitle?: string
  bodyText?: string
}

export default function EmbeddedPage({
  title,
  description,
  imageSrc,
  imageAlt,
  iframeSrc,
  iframeId,
  formId,
  scriptSrc,
  iframeStyle,
  iframeHeight = '805px',
  pageTitle,
  bodyText
}: EmbeddedPageProps) {
  return (
    <LayoutNoPricing title={title} description={description}>
      <div className="w-full">
        {/* Page Title */}
        {pageTitle && (
          <div className="text-center mb-1 px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {pageTitle}
            </h1>
          </div>
        )}

        {/* Image */}
        <div className="container mx-auto px-4 py-3 max-w-4xl">
          <div className="relative w-full aspect-[4/2] mt-5 mb-5">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Body Text */}
        {bodyText && (
          <div className="text-center mb-1 px-4">
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {bodyText}
            </p>
          </div>
        )}

        {/* Embedded Form */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl px-4" style={{ minHeight: iframeHeight }}>
          <iframe
            src={iframeSrc}
            style={iframeStyle || { width: '100%', height: iframeHeight, border: 'none', borderRadius: '3px' }}
            id={iframeId}
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Web Capture Form"
            data-height={iframeHeight.replace('px', '')}
            data-layout-iframe-id={iframeId}
            data-form-id={formId}
            title="Web Capture Form"
            scrolling="no"
          />
          </div>
        </div>

        {/* Script for form */}
        <Script
          src={scriptSrc}
          strategy="lazyOnload"
        />
      </div>
    </LayoutNoPricing>
  )
}