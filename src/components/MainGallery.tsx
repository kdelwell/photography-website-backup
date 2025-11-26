import GalleryWithLightbox from './GalleryWithLightbox'

export default function MainGallery() {
  return (
    <GalleryWithLightbox
      images={[
        { src: '/images/Gallery/Maggie.jpg', alt: 'Professional business headshot Washington DC - Corporate portrait photography' },
        { src: '/images/Gallery/Joe.jpg', alt: 'Executive headshot photographer Washington DC - Professional business portrait' },
        { src: '/images/Gallery/Teresa.jpg', alt: 'Corporate headshot photography DC - Professional business headshot near me' },
        { src: '/images/Gallery/Matt.jpg', alt: 'Professional LinkedIn headshot Washington DC - Business portrait photographer' },
        { src: '/images/Gallery/Kelly.jpg', alt: 'Business professional headshot DC - Corporate photography Washington DC' },
        { src: '/images/Gallery/Sherif.jpg', alt: 'Professional headshot near me Washington DC - Executive portrait photographer' },
        { src: '/images/Gallery/Courtney.jpg', alt: 'Corporate headshot Washington DC - Professional business photography near me' },
        { src: '/images/Gallery/Patricia.jpg', alt: 'Professional business headshot photographer DC - Executive portrait photography' }
      ]}
    />
  )
}
