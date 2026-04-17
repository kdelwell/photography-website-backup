import type { NextApiRequest, NextApiResponse } from 'next'

const WEBHOOK_URL = process.env.STUDIGO_WEBHOOK_URL || ''
const WEBHOOK_KEY = process.env.STUDIGO_WEBHOOK_KEY || ''

// Rate limit: 3 captures per IP per minute
const requests = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = requests.get(ip)
  if (!entry || now > entry.resetAt) {
    requests.set(ip, { count: 1, resetAt: now + 60000 })
    return false
  }
  entry.count++
  return entry.count > 3
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown'
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests' })
  }

  const { firstName, lastName, email, phone, company } = req.body

  if (!firstName || !email) {
    return res.status(400).json({ error: 'Name and email required' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' })
  }

  if (!WEBHOOK_URL || !WEBHOOK_KEY) {
    return res.status(200).json({ success: true }) // fail silently
  }

  try {
    await fetch(`${WEBHOOK_URL}?key=${WEBHOOK_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName: lastName || '',
        email,
        phone: phone || '',
        company: company || '',
        addTags: ['quote-started'],
        notes: `[${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}] Started group pricing calculator — did not complete quote request.`,
      }),
    })

    return res.status(200).json({ success: true })
  } catch {
    return res.status(200).json({ success: true }) // fail silently — don't disrupt UX
  }
}
