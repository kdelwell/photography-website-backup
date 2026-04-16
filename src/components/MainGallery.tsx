import GalleryWithLightbox from './GalleryWithLightbox'

export default function MainGallery() {
  return (
    <GalleryWithLightbox
      priorityCount={0}
      images={[
        { src: '/images/Gallery/Maggie.jpg', alt: 'Maggie - professional headshot' },
        { src: '/images/Gallery/Josh.jpg', alt: 'Josh - executive portrait' },
        { src: '/images/Gallery/Claire.jpg', alt: 'Claire - corporate headshot' },
        { src: '/images/Gallery/Matt.jpg', alt: 'Matt - business professional portrait' },
        { src: '/images/Gallery/Kelly.jpg', alt: 'Kelly - professional headshot' },
        { src: '/images/Gallery/Eric.jpg', alt: 'Eric - executive headshot' },
        { src: '/images/Gallery/Courtney.jpg', alt: 'Courtney - corporate portrait' },
        { src: '/images/Gallery/Patricia.jpg', alt: 'Patricia - professional business portrait' }
      ]}
    />
  )
}
