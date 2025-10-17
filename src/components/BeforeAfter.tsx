import GalleryWithLightbox from './GalleryWithLightbox'

export default function BeforeAfter() {
  return (
    <GalleryWithLightbox
      images={[
        { src: '/images/Transformations/Deepak_BA.jpg', alt: 'Deepak Professional Transformation' },
        { src: '/images/Transformations/Kurt_BA.jpg', alt: 'Kurt Professional Transformation' },
        { src: '/images/Transformations/Marva_BA.jpg', alt: 'Marva Professional Transformation' },
        { src: '/images/Transformations/Monica_BA.jpg', alt: 'Monica Professional Transformation' }
      ]}
    />
  )
}
