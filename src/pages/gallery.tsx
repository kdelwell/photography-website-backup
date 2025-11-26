import { useState, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import SimpleHeader from '@/components/SimpleHeader'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Star, Upload, Download, Trash2, MessageSquare, Settings } from 'lucide-react'

interface GalleryImage {
  id: string
  src: string
  name: string
  favorited: boolean
  comment: string
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [uploading, setUploading] = useState(false)
  const [showAdmin, setShowAdmin] = useState(false)

  // Load images from localStorage on mount
  useEffect(() => {
    const savedImages = localStorage.getItem('galleryImages')
    if (savedImages) {
      const parsed = JSON.parse(savedImages)
      // Sort by filename
      const sorted = parsed.sort((a: GalleryImage, b: GalleryImage) =>
        a.name.localeCompare(b.name)
      )
      setImages(sorted)
    }
  }, [])

  // Save images to localStorage whenever they change
  useEffect(() => {
    if (images.length > 0) {
      try {
        localStorage.setItem('galleryImages', JSON.stringify(images))
      } catch (error) {
        console.error('Failed to save to localStorage:', error)
        alert('Warning: Unable to save all images. You may have reached the browser storage limit. Consider reducing the number of images.')
      }
    }
  }, [images])

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    // Check current localStorage usage
    const currentSize = new Blob([JSON.stringify(images)]).size
    const estimatedNewSize = files.length * 50000 // Rough estimate: 50KB per optimized image
    const totalEstimated = currentSize + estimatedNewSize

    // Warn if approaching 5MB limit
    if (totalEstimated > 4500000) {
      const proceed = confirm(
        `Warning: You're uploading ${files.length} images. This may exceed browser storage limits. ` +
        `Consider uploading in smaller batches. Continue anyway?`
      )
      if (!proceed) {
        e.target.value = '' // Reset file input
        return
      }
    }

    setUploading(true)

    const newImages: GalleryImage[] = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]

      // Convert to web-friendly format
      const reader = new FileReader()
      reader.onload = (event) => {
        const img = document.createElement('img')
        img.onload = () => {
          // Create canvas to resize and optimize
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')

          // Max dimensions for web - reduced for storage efficiency
          const MAX_WIDTH = 1280
          const MAX_HEIGHT = 720

          let width = img.width
          let height = img.height

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width
              width = MAX_WIDTH
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height
              height = MAX_HEIGHT
            }
          }

          canvas.width = width
          canvas.height = height
          ctx?.drawImage(img, 0, 0, width, height)

          // Convert to JPEG with quality optimization - reduced for storage efficiency
          const optimizedSrc = canvas.toDataURL('image/jpeg', 0.65)

          const newImage: GalleryImage = {
            id: `${Date.now()}-${i}`,
            src: optimizedSrc,
            name: file.name,
            favorited: false,
            comment: ''
          }

          newImages.push(newImage)

          if (newImages.length === files.length) {
            try {
              setImages(prev => {
                const combined = [...prev, ...newImages]
                // Sort by filename
                return combined.sort((a, b) => a.name.localeCompare(b.name))
              })
              setUploading(false)
            } catch (error) {
              console.error('Failed to add images:', error)
              alert(
                `Error: Unable to add all images. You may have reached the browser storage limit.\n\n` +
                `Successfully uploaded: ${newImages.length} images\n` +
                `Try uploading fewer images at once or clearing some existing images first.`
              )
              setUploading(false)
            }
          }
        }
        img.src = event.target?.result as string
      }
      reader.readAsDataURL(file)
    }
  }

  const toggleFavorite = (id: string) => {
    setImages(prev =>
      prev.map(img =>
        img.id === id ? { ...img, favorited: !img.favorited } : img
      )
    )
  }

  const updateComment = (id: string, comment: string) => {
    setImages(prev =>
      prev.map(img =>
        img.id === id ? { ...img, comment } : img
      )
    )
  }

  const deleteImage = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id))
  }

  const downloadSummary = () => {
    const favoritedImages = images.filter(img => img.favorited || img.comment)

    if (favoritedImages.length === 0) {
      alert('No images selected or commented on yet.')
      return
    }

    // Create CSV content
    let csvContent = 'Image Name,Favorited,Comments\n'
    favoritedImages.forEach(img => {
      const escapedComment = img.comment.replace(/"/g, '""')
      csvContent += `"${img.name}",${img.favorited ? 'Yes' : 'No'},"${escapedComment}"\n`
    })

    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `gallery-selections-${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  const clearAll = () => {
    if (confirm('Are you sure you want to clear all images? This cannot be undone.')) {
      setImages([])
      localStorage.removeItem('galleryImages')
    }
  }

  const toggleAdmin = () => {
    if (!showAdmin) {
      // Prompt for password when trying to show admin controls
      const password = prompt('Enter admin password:')
      if (password === 'admin') {
        setShowAdmin(true)
      } else if (password !== null) {
        alert('Incorrect password')
      }
    } else {
      // Allow hiding without password
      setShowAdmin(false)
    }
  }

  const favoritedCount = images.filter(img => img.favorited).length
  const commentedCount = images.filter(img => img.comment).length

  // Calculate storage usage
  const storageSize = new Blob([JSON.stringify(images)]).size
  const storageMB = (storageSize / 1024 / 1024).toFixed(2)
  const storagePercent = Math.round((storageSize / 5000000) * 100) // 5MB limit

  return (
    <>
      <NextSeo
        title="Gallery - Image Selection"
        description="Upload and select your favorite images"
      />
      <div className="min-h-screen flex flex-col">
        <SimpleHeader />
        <main className="flex-grow">
          <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h1 className="text-4xl font-bold mb-4">Gallery</h1>
            <p className="text-gray-600 mb-2">
              Mark your favorites and add comments or instructions for each photo.
            </p>
            <p className="text-gray-600 italic">
              Keep in mind these are unretouched raw images straight from the camera.
            </p>
          </div>

          {/* Admin Panel */}
          {showAdmin && (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              {/* Stats */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-gray-100 px-4 py-2 rounded-md">
                  <span className="font-semibold">{images.length}</span> Total Images
                </div>
                <div className="bg-yellow-100 px-4 py-2 rounded-md">
                  <span className="font-semibold">{favoritedCount}</span> Favorited
                </div>
                <div className="bg-blue-100 px-4 py-2 rounded-md">
                  <span className="font-semibold">{commentedCount}</span> With Comments
                </div>
                <div className={`px-4 py-2 rounded-md ${storagePercent > 80 ? 'bg-red-100' : storagePercent > 60 ? 'bg-orange-100' : 'bg-green-100'}`}>
                  <span className="font-semibold">{storageMB} MB</span> Storage Used ({storagePercent}%)
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <label className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold cursor-pointer inline-flex items-center gap-2 transition-colors">
                  <Upload className="w-5 h-5" />
                  Upload Images
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    disabled={uploading}
                  />
                </label>

                {images.length > 0 && (
                  <>
                    <button
                      onClick={downloadSummary}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold inline-flex items-center gap-2 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      Download Summary
                    </button>

                    <button
                      onClick={clearAll}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-semibold inline-flex items-center gap-2 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                      Clear All
                    </button>
                  </>
                )}
              </div>

              {uploading && (
                <div className="mt-4 text-gray-600">
                  <p>Optimizing images for web...</p>
                </div>
              )}
            </div>
          )}

          {/* Image Grid */}
          {images.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <Upload className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">No images yet</h2>
              <p className="text-gray-600">Upload your first image to get started</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => (
                <div key={image.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  {/* Image */}
                  <div
                    className="relative w-full bg-gray-200 select-none"
                    style={{ minHeight: '400px' }}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  >
                    <Image
                      src={image.src}
                      alt={image.name}
                      width={800}
                      height={800}
                      className="object-contain w-full h-auto pointer-events-none"
                      style={{ maxHeight: '600px', userSelect: 'none' }}
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                    />

                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(image.id)}
                      className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
                        image.favorited
                          ? 'bg-yellow-400 text-white'
                          : 'bg-white/80 text-gray-600 hover:bg-yellow-400 hover:text-white'
                      }`}
                    >
                      <Star
                        className="w-5 h-5"
                        fill={image.favorited ? 'currentColor' : 'none'}
                      />
                    </button>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2 truncate" title={image.name}>
                      {image.name}
                    </h3>

                    {/* Comment Field */}
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <textarea
                        value={image.comment}
                        onChange={(e) => updateComment(image.id, e.target.value)}
                        placeholder="Add comments or instructions..."
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Admin Toggle Button */}
          <div className="fixed bottom-8 right-8 z-50">
            <button
              onClick={toggleAdmin}
              className="bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
              title="Admin Controls"
            >
              <Settings className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
