import type { NextApiRequest, NextApiResponse } from 'next'

const WEBHOOK_URL = process.env.STUDIGO_WEBHOOK_URL || ''
const WEBHOOK_KEY = process.env.STUDIGO_WEBHOOK_KEY || ''

const requests = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5
const RATE_WINDOW = 60 * 1000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = requests.get(ip)
  if (!entry || now > entry.resetAt) {
    requests.set(ip, { count: 1, resetAt: now + RATE_WINDOW })
    return false
  }
  entry.count++
  return entry.count > RATE_LIMIT
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown'
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' })
  }

  const { firstName, lastName, email, phone, company, notes } = req.body

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: 'Name and email are required' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  if (!WEBHOOK_URL || !WEBHOOK_KEY) {
    console.error('Group quote: STUDIGO_WEBHOOK_URL or STUDIGO_WEBHOOK_KEY not configured')
    return res.status(500).json({ error: 'Service temporarily unavailable' })
  }

  try {
    const resp = await fetch(`${WEBHOOK_URL}?key=${WEBHOOK_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone: phone || '',
        company: company || '',
        addTags: ['group-quote'],
        notes: notes || '',
      }),
    })

    if (!resp.ok) {
      const data = await resp.json().catch(() => ({}))
      throw new Error(data.error || 'Webhook failed')
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Group quote error:', (error as Error).message)
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}
