import type { NextApiRequest, NextApiResponse } from 'next'

const STUDIGO_API = process.env.STUDIGO_API_URL || 'https://admin.getaheadshot.net'

const DEFAULT_TIERS = [
  { hours: 3, price: 1500 },
  { hours: 4, price: 2100 },
  { hours: 5, price: 2700 },
  { hours: 6, price: 3250 },
  { hours: 7, price: 3800 },
  { hours: 8, price: 4300 },
  { hours: 9, price: 4800 },
  { hours: 10, price: 5400 },
  { hours: 11, price: 6100 },
  { hours: 12, price: 6950 },
]

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const resp = await fetch(`${STUDIGO_API}/api/group-pricing`)
    if (resp.ok) {
      const data = await resp.json()
      // Cache for 5 minutes
      res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600')
      return res.json({ eventTiers: data.eventTiers || DEFAULT_TIERS })
    }
  } catch {}

  // Fallback to defaults
  res.setHeader('Cache-Control', 'public, s-maxage=60')
  res.json({ eventTiers: DEFAULT_TIERS })
}
