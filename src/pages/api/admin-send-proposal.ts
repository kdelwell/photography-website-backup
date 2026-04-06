import type { NextApiRequest, NextApiResponse } from 'next'
import { validateToken } from './admin-auth'

const API_URL = process.env.STUDIGO_API_URL || 'https://api.getaheadshot.net'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const token = (req.headers.authorization || '').replace('Bearer ', '')
  if (!validateToken(token)) return res.status(401).json({ error: 'Unauthorized' })

  const { to, subject, htmlBody } = req.body
  if (!to || !subject || !htmlBody) return res.status(400).json({ error: 'to, subject, and htmlBody required' })

  try {
    const resp = await fetch(`${API_URL}/api/send-proposal`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to,
        subject,
        htmlBody,
        bcc: 'kevin@getaheadshot.net',
      }),
    })
    if (!resp.ok) {
      const data = await resp.json().catch(() => ({}))
      throw new Error(data.error || `HTTP ${resp.status}`)
    }
    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Send proposal error:', (error as Error).message)
    return res.status(500).json({ error: (error as Error).message })
  }
}
