import type { NextApiRequest, NextApiResponse } from 'next'
import { put, head, del } from '@vercel/blob'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { id } = req.body

    if (!id) {
      return res.status(400).json({ error: 'Image ID is required' })
    }

    // Fetch existing metadata
    const metadataBlob = await head('gallery/metadata.json')
    const response = await fetch(metadataBlob.url)
    const metadata = await response.json()
    const images = metadata.images || []

    // Find the image to delete
    const imageToDelete = images.find((img: any) => img.id === id)

    if (imageToDelete) {
      // Delete the image blob
      const blobPath = `gallery/${id}-${imageToDelete.name}`
      try {
        await del(imageToDelete.url)
      } catch (error) {
        console.error('Error deleting blob:', error)
      }
    }

    // Remove from metadata
    const updatedImages = images.filter((img: any) => img.id !== id)

    // Save updated metadata
    const metadataBuffer = Buffer.from(JSON.stringify({ images: updatedImages }))
    await put('gallery/metadata.json', metadataBuffer, {
      access: 'public',
      contentType: 'application/json',
    })

    res.status(200).json({ success: true })
  } catch (error) {
    console.error('Delete error:', error)
    res.status(500).json({ error: 'Failed to delete image' })
  }
}
