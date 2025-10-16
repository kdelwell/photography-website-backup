import GalleryWithLightbox from './GalleryWithLightbox'

export default function MainGallery() {
  return (
    <GalleryWithLightbox
      images={[
        { src: '/images/Gallery/Maggie.jpg', alt: 'Maggie Professional Headshot' },
        { src: '/images/Gallery/Joe.jpg', alt: 'Joe Professional Headshot' },
        { src: '/images/Gallery/Teresa.jpg', alt: 'Teresa Professional Headshot' },
        { src: '/images/Gallery/Matt.jpg', alt: 'Matt Professional Headshot' },
        { src: '/images/Gallery/Kelly.jpg', alt: 'Kelly Professional Headshot' },
        { src: '/images/Gallery/Sherif.jpg', alt: 'Sherif Professional Headshot' },
        { src: '/images/Gallery/Courtney.jpg', alt: 'Courtney Professional Headshot' },
        { src: '/images/Gallery/Patricia.jpg', alt: 'Patricia Professional Headshot' }
      ]}
    />
  )
}
