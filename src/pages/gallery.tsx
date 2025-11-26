import { useState, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import SimpleHeader from '@/components/SimpleHeader'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Star, Upload, Download, Trash2, MessageSquare, Settings } from 'lucide-react'

interface GalleryImage {
  id: string
  url: string
  name: string
  favorited: boolean
  comment: string
  src?: string // Temporary field for client-side processing before upload
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [uploading, setUploading] = useState(false)
  const [showAdmin, setShowAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0 })

  // Load images from server on mount
  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await fetch('/api/gallery/list')
        const data = await response.json()

        if (data.images) {
          // Sort by filename
          const sorted = data.images.sort((a: GalleryImage, b: GalleryImage) =>
            a.name.localeCompare(b.name)
          )
          setImages(sorted)
        }
      } catch (error) {
        console.error('Failed to load images:', error)
      } finally {
        setLoading(false)
      }
    }

    loadImages()
  }, [])

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    setUploading(true)

    const fileArray = Array.from(files)
    setUploadProgress({ current: 0, total: fileArray.length })

    const newImages: GalleryImage[] = []
    let processedCount = 0

    // Process images sequentially to avoid memory issues
    const processImage = (file: File, index: number): Promise<GalleryImage> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()

        reader.onerror = () => reject(new Error(`Failed to read ${file.name}`))

        reader.onload = (event) => {
          const img = document.createElement('img')

          img.onerror = () => reject(new Error(`Failed to load ${file.name}`))

          img.onload = () => {
            try {
              // Create canvas to resize and optimize
              const canvas = document.createElement('canvas')
              const ctx = canvas.getContext('2d')

              // Max dimensions for web
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

              // Convert to JPEG with quality optimization
              const optimizedSrc = canvas.toDataURL('image/jpeg', 0.65)

              const newImage: GalleryImage = {
                id: `${Date.now()}-${index}`,
                src: optimizedSrc,
                name: file.name,
                favorited: false,
                comment: ''
              }

              // Clean up
              canvas.remove()
              img.remove()

              resolve(newImage)
            } catch (error) {
              reject(error)
            }
          }

          img.src = event.target?.result as string
        }

        reader.readAsDataURL(file)
      })
    }

    try {
      // Process images in batches of 5 to avoid memory issues
      const BATCH_SIZE = 5
      for (let i = 0; i < fileArray.length; i += BATCH_SIZE) {
        const batch = fileArray.slice(i, i + BATCH_SIZE)
        const batchResults = await Promise.all(
          batch.map((file, batchIndex) => processImage(file, i + batchIndex))
        )

        newImages.push(...batchResults)
        processedCount += batch.length

        // Update progress
        setUploadProgress({ current: processedCount, total: fileArray.length })
        console.log(`Processed ${processedCount} of ${fileArray.length} images`)

        // Small delay between batches to allow garbage collection
        if (i + BATCH_SIZE < fileArray.length) {
          await new Promise(resolve => setTimeout(resolve, 100))
        }
      }

      // Upload to server
      const uploadResponse = await fetch('/api/gallery/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ images: newImages }),
      })

      if (!uploadResponse.ok) {
        throw new Error('Failed to upload images to server')
      }

      const uploadData = await uploadResponse.json()

      // Add uploaded images to state
      setImages(prev => {
        const combined = [...prev, ...uploadData.images]
        // Sort by filename
        return combined.sort((a, b) => a.name.localeCompare(b.name))
      })

      setUploading(false)
      setUploadProgress({ current: 0, total: 0 })
      console.log(`Successfully uploaded all ${fileArray.length} images`)
    } catch (error) {
      console.error('Failed to upload images:', error)
      alert(
        `Error uploading images: ${error instanceof Error ? error.message : 'Unknown error'}\n\n` +
        `Successfully processed: ${processedCount} of ${fileArray.length} images\n` +
        `Please try again or upload fewer images at once.`
      )

      setUploading(false)
      setUploadProgress({ current: 0, total: 0 })
    }

    // Reset file input
    e.target.value = ''
  }

  const toggleFavorite = async (id: string) => {
    const image = images.find(img => img.id === id)
    if (!image) return

    // Optimistic update
    setImages(prev =>
      prev.map(img =>
        img.id === id ? { ...img, favorited: !img.favorited } : img
      )
    )

    try {
      const response = await fetch('/api/gallery/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, favorited: !image.favorited }),
      })

      if (!response.ok) {
        throw new Error('Failed to update')
      }
    } catch (error) {
      console.error('Failed to toggle favorite:', error)
      // Revert on error
      setImages(prev =>
        prev.map(img =>
          img.id === id ? { ...img, favorited: image.favorited } : img
        )
      )
    }
  }

  const updateComment = async (id: string, comment: string) => {
    // Optimistic update
    setImages(prev =>
      prev.map(img =>
        img.id === id ? { ...img, comment } : img
      )
    )

    try {
      const response = await fetch('/api/gallery/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, comment }),
      })

      if (!response.ok) {
        throw new Error('Failed to update')
      }
    } catch (error) {
      console.error('Failed to update comment:', error)
    }
  }

  const deleteImage = async (id: string, name: string) => {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) {
      return
    }

    try {
      const response = await fetch('/api/gallery/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      })

      if (!response.ok) {
        throw new Error('Failed to delete')
      }

      // Remove from state
      setImages(prev => prev.filter(img => img.id !== id))
      console.log(`Deleted image: ${name}`)
    } catch (error) {
      console.error('Failed to delete image:', error)
      alert('Failed to delete image. Please try again.')
    }
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

  const clearAll = async () => {
    if (confirm('Are you sure you want to clear all images? This cannot be undone.')) {
      try {
        const response = await fetch('/api/gallery/clear', {
          method: 'POST',
        })

        if (!response.ok) {
          throw new Error('Failed to clear images')
        }

        setImages([])
        console.log('All images cleared from server')
      } catch (error) {
        console.error('Failed to clear images:', error)
        alert('Failed to clear images. Please try again.')
      }
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
              {/* Storage Info */}
              <div className="mb-4 p-3 bg-green-50 rounded-md text-sm text-green-800">
                <strong>Server-Side Storage</strong>
                <br />
                <span className="text-xs text-green-600">Images are stored on the server and accessible from any device</span>
              </div>

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
                <div className="mt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-grow bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-red-600 h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress.total > 0 ? (uploadProgress.current / uploadProgress.total) * 100 : 0}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-600 text-sm font-medium min-w-[80px]">
                      {uploadProgress.current} / {uploadProgress.total}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">Processing images... Please wait.</p>
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
                    <img
                      src={image.url}
                      alt={image.name}
                      className="object-contain w-full h-auto pointer-events-none"
                      style={{ maxHeight: '600px', userSelect: 'none' }}
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                    />

                    {/* Delete Button - Admin Only */}
                    {showAdmin && (
                      <button
                        onClick={() => deleteImage(image.id, image.name)}
                        className="absolute top-3 left-3 p-2 rounded-full bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white transition-all opacity-70 hover:opacity-100"
                        title="Delete image"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}

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
