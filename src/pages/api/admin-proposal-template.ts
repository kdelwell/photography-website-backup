import type { NextApiRequest, NextApiResponse } from 'next'
import { validateToken } from './admin-auth'

const API_URL = process.env.STUDIGO_API_URL || 'https://admin.getaheadshot.net'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = (req.headers.authorization || '').replace('Bearer ', '')
  if (!validateToken(token)) return res.status(401).json({ error: 'Unauthorized' })

  if (req.method === 'GET') {
    try {
      const resp = await fetch(`${API_URL}/api/proposal-template`)
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
      return res.status(200).json(await resp.json())
    } catch (error) {
      return res.status(500).json({ error: 'Failed to load template' })
    }
  }

  if (req.method === 'PUT') {
    try {
      const resp = await fetch(`${API_URL}/api/proposal-template`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      })
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
      return res.status(200).json(await resp.json())
    } catch (error) {
      return res.status(500).json({ error: 'Failed to save template' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
