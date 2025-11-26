import type { NextApiRequest, NextApiResponse } from 'next'
import { head } from '@vercel/blob'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Try to fetch metadata file
    try {
      const metadataBlob = await head('gallery/metadata.json')
      const response = await fetch(metadataBlob.url)
      const metadata = await response.json()

      res.status(200).json({ images: metadata.images || [] })
    } catch (error) {
      // Metadata file doesn't exist yet
      res.status(200).json({ images: [] })
    }
  } catch (error) {
    console.error('List error:', error)
    res.status(500).json({ error: 'Failed to fetch images' })
  }
}
