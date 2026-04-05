import type { NextApiRequest, NextApiResponse } from 'next'
import { validateToken } from './admin-auth'

const API_URL = process.env.STUDIGO_API_URL || 'https://api.getaheadshot.net'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const resp = await fetch(`${API_URL}/api/group-pricing`)
      if (!resp.ok) throw new Error(`Upstream ${resp.status}`)
      const data = await resp.json()
      return res.status(200).json(data)
    } catch (error) {
      console.error('Admin pricing GET error:', (error as Error).message)
      return res.status(500).json({ error: 'Failed to load pricing' })
    }
  }

  if (req.method === 'PUT') {
    const auth = req.headers.authorization?.replace('Bearer ', '')
    if (!auth || !validateToken(auth)) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    try {
      const resp = await fetch(`${API_URL}/api/group-pricing`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      })
      if (!resp.ok) {
        const text = await resp.text()
        throw new Error(`Upstream ${resp.status}: ${text}`)
      }
      const data = await resp.json()
      return res.status(200).json(data)
    } catch (error) {
      console.error('Admin pricing PUT error:', (error as Error).message)
      return res.status(500).json({ error: 'Failed to save pricing' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
