import type { NextApiRequest, NextApiResponse } from 'next'
import { validateToken } from './admin-auth'

const API_URL = process.env.STUDIGO_API_URL || 'https://admin.getaheadshot.net'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const token = (req.headers.authorization || '').replace('Bearer ', '')
  if (!validateToken(token)) return res.status(401).json({ error: 'Unauthorized' })

  try {
    // Fetch all campaign assets (images uploaded in StudiGo)
    const resp = await fetch(`${API_URL}/api/campaign-assets`)
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
    const assets = await resp.json()
    return res.status(200).json(assets)
  } catch {
    return res.status(500).json({ error: 'Failed to load media' })
  }
}
