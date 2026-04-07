import type { NextApiRequest, NextApiResponse } from 'next'
import { validateToken } from './admin-auth'

const API_URL = process.env.STUDIGO_API_URL || 'https://admin.getaheadshot.net'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const token = (req.headers.authorization || '').replace('Bearer ', '')
  if (!validateToken(token)) return res.status(401).json({ error: 'Unauthorized' })

  const tag = req.query.tag as string || 'group-quote'
  try {
    const resp = await fetch(`${API_URL}/api/contacts/by-tag/${encodeURIComponent(tag)}`)
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
    const data = await resp.json()
    return res.status(200).json(data)
  } catch (error) {
    console.error('Admin contacts error:', (error as Error).message)
    return res.status(500).json({ error: 'Failed to load contacts' })
  }
}
