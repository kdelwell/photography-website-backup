import type { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'

export function makeToken(password: string): string {
  const day = new Date().toISOString().slice(0, 10) // YYYY-MM-DD
  return crypto.createHash('sha256').update(password + day).digest('hex')
}

export function validateToken(token: string): boolean {
  const password = process.env.ADMIN_PASSWORD
  if (!password) return false
  return token === makeToken(password)
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { password } = req.body || {}
  const expected = process.env.ADMIN_PASSWORD

  if (!expected) {
    console.error('ADMIN_PASSWORD env var is not set')
    return res.status(500).json({ error: 'Server misconfigured' })
  }

  if (!password || password !== expected) {
    return res.status(401).json({ error: 'Invalid password' })
  }

  return res.status(200).json({ success: true, token: makeToken(password) })
}
