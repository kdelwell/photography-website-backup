import type { NextApiRequest, NextApiResponse } from 'next'
import { put, head, del } from '@vercel/blob'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Fetch existing metadata
    try {
      const metadataBlob = await head('gallery/metadata.json')
      const response = await fetch(metadataBlob.url)
      const metadata = await response.json()
      const images = metadata.images || []

      // Delete all image blobs
      for (const image of images) {
        try {
          await del(image.url)
        } catch (error) {
          console.error(`Error deleting ${image.name}:`, error)
        }
      }
    } catch (error) {
      // Metadata doesn't exist, nothing to clear
    }

    // Save empty metadata
    const metadataBuffer = Buffer.from(JSON.stringify({ images: [] }))
    await put('gallery/metadata.json', metadataBuffer, {
      access: 'public',
      contentType: 'application/json',
    })

    res.status(200).json({ success: true })
  } catch (error) {
    console.error('Clear error:', error)
    res.status(500).json({ error: 'Failed to clear images' })
  }
}
