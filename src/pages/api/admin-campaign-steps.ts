import type { NextApiRequest, NextApiResponse } from 'next'
import { validateToken } from './admin-auth'

const API_URL = process.env.STUDIGO_API_URL || 'https://admin.getaheadshot.net'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const token = (req.headers.authorization || '').replace('Bearer ', '')
  if (!validateToken(token)) return res.status(401).json({ error: 'Unauthorized' })

  const campaignId = req.query.campaignId as string
  if (!campaignId) return res.status(400).json({ error: 'campaignId required' })

  try {
    const resp = await fetch(`${API_URL}/api/campaigns/${campaignId}`)
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
    const data = await resp.json()
    return res.status(200).json(data.steps || [])
  } catch {
    return res.status(500).json({ error: 'Failed to load steps' })
  }
}
