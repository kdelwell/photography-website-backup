import type { NextApiRequest, NextApiResponse } from 'next'
import { put, head } from '@vercel/blob'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { images } = req.body

    if (!images || !Array.isArray(images)) {
      return res.status(400).json({ error: 'Invalid request body' })
    }

    // Fetch existing metadata
    let existingImages = []
    try {
      const metadataBlob = await head('gallery/metadata.json')
      const response = await fetch(metadataBlob.url)
      const metadata = await response.json()
      existingImages = metadata.images || []
    } catch (error) {
      // Metadata doesn't exist yet, start fresh
    }

    const uploadedImages = []

    for (const imageData of images) {
      const { src, name, id, favorited = false, comment = '' } = imageData

      // Convert base64 to buffer
      const base64Data = src.replace(/^data:image\/\w+;base64,/, '')
      const buffer = Buffer.from(base64Data, 'base64')

      // Upload to Vercel Blob
      const blob = await put(`gallery/${id}-${name}`, buffer, {
        access: 'public',
        contentType: 'image/jpeg',
      })

      uploadedImages.push({
        id,
        name,
        url: blob.url,
        favorited,
        comment,
      })
    }

    // Merge with existing images
    const allImages = [...existingImages, ...uploadedImages]

    // Save updated metadata
    const metadataBuffer = Buffer.from(JSON.stringify({ images: allImages }))
    await put('gallery/metadata.json', metadataBuffer, {
      access: 'public',
      contentType: 'application/json',
    })

    res.status(200).json({ images: uploadedImages })
  } catch (error) {
    console.error('Upload error:', error)
    res.status(500).json({ error: 'Failed to upload images' })
  }
}
