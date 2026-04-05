import type { NextApiRequest, NextApiResponse } from 'next'

const API_URL = process.env.STUDIGO_API_URL || 'https://api.getaheadshot.net'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const resp = await fetch(`${API_URL}/api/group-pricing`)
    if (!resp.ok) throw new Error('Failed to fetch pricing')
    const data = await resp.json()
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600')
    return res.status(200).json(data)
  } catch (error) {
    console.error('Group pricing proxy error:', (error as Error).message)
    return res.status(500).json({ error: 'Failed to load pricing' })
  }
}
