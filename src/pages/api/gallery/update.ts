import type { NextApiRequest, NextApiResponse } from 'next'
import { put, head } from '@vercel/blob'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { id, favorited, comment } = req.body

    if (!id) {
      return res.status(400).json({ error: 'Image ID is required' })
    }

    // Fetch existing metadata
    const metadataBlob = await head('gallery/metadata.json')
    const response = await fetch(metadataBlob.url)
    const metadata = await response.json()
    const images = metadata.images || []

    // Update the specific image
    const updatedImages = images.map((img: any) => {
      if (img.id === id) {
        return {
          ...img,
          favorited: favorited !== undefined ? favorited : img.favorited,
          comment: comment !== undefined ? comment : img.comment,
        }
      }
      return img
    })

    // Save updated metadata
    const metadataBuffer = Buffer.from(JSON.stringify({ images: updatedImages }))
    await put('gallery/metadata.json', metadataBuffer, {
      access: 'public',
      contentType: 'application/json',
    })

    res.status(200).json({ success: true })
  } catch (error) {
    console.error('Update error:', error)
    res.status(500).json({ error: 'Failed to update image' })
  }
}
