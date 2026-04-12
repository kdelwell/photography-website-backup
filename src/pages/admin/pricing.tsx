import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

interface PricingTier { size: number; perPerson: number }
interface AddOns {
  extraImage: number
  additionalDay: number
  groupComposite: number
  candidHour: number
  hairMakeup: number
  makeupTouchup: number
}
interface PricingConfig {
  destinationFee: number
  inStudioRate: number
  addOns: AddOns
  tiers: PricingTier[]
}

const ADD_ON_LABELS: Record<keyof AddOns, string> = {
  extraImage: 'Extra Image',
  additionalDay: 'Additional Day',
  groupComposite: 'Group Composite',
  candidHour: 'Candid Hour',
  hairMakeup: 'Hair & Makeup',
  makeupTouchup: 'Makeup Touch-Up',
}

export default function AdminPricing() {
  const [token, setToken] = useState<string | null>(null)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [logging, setLogging] = useState(false)

  const [pricing, setPricing] = useState<PricingConfig | null>(null)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null)

  // Restore token from sessionStorage on mount
  useEffect(() => {
    const stored = sessionStorage.getItem('admin_token')
    if (stored) setToken(stored)
  }, [])

  // Load pricing once authenticated
  useEffect(() => {
    if (!token) return
    setLoading(true)
    fetch('/api/admin-pricing')
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json() })
      .then(data => setPricing(data))
      .catch(() => showToast('Failed to load pricing', false))
      .finally(() => setLoading(false))
  }, [token])

  function showToast(msg: string, ok: boolean) {
    setToast({ msg, ok })
    setTimeout(() => setToast(null), 3500)
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setAuthError('')
    setLogging(true)
    try {
      const res = await fetch('/api/admin-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = await res.json()
      if (!res.ok) { setAuthError(data.error || 'Login failed'); return }
      sessionStorage.setItem('admin_token', data.token)
      setToken(data.token)
    } catch {
      setAuthError('Network error')
    } finally {
      setLogging(false)
    }
  }

  async function handleSave() {
    if (!pricing || !token) return
    setSaving(true)
    try {
      const res = await fetch('/api/admin-pricing', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(pricing),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || `HTTP ${res.status}`)
      }
      showToast('Pricing saved successfully', true)
    } catch (err) {
      showToast(`Save failed: ${(err as Error).message}`, false)
    } finally {
      setSaving(false)
    }
  }

  function setDestFee(val: number) {
    if (!pricing) return
    setPricing({ ...pricing, destinationFee: val })
  }

  function setAddOn(key: keyof AddOns, val: number) {
    if (!pricing) return
    setPricing({ ...pricing, addOns: { ...pricing.addOns, [key]: val } })
  }

  function setTier(idx: number, field: 'size' | 'perPerson', val: number) {
    if (!pricing) return
    const tiers = pricing.tiers.map((t, i) => i === idx ? { ...t, [field]: val } : t)
    setPricing({ ...pricing, tiers })
  }

  function removeTier(idx: number) {
    if (!pricing) return
    setPricing({ ...pricing, tiers: pricing.tiers.filter((_, i) => i !== idx) })
  }

  function addTier() {
    if (!pricing) return
    const last = pricing.tiers[pricing.tiers.length - 1]
    setPricing({ ...pricing, tiers: [...pricing.tiers, { size: (last?.size || 0) + 5, perPerson: last?.perPerson || 200 }] })
  }

  // ---- Login Screen ----
  if (!token) {
    return (
      <>
        <Head><title>Admin | Pricing</title></Head>
        <div className="min-h-screen flex items-center justify-center" style={{ background: '#242424' }}>
          <form onSubmit={handleLogin} className="bg-white/10 backdrop-blur rounded-xl p-8 w-full max-w-sm shadow-lg">
            <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h1>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500 mb-4"
              autoFocus
            />
            {authError && <p className="text-red-400 text-sm mb-3">{authError}</p>}
            <button
              type="submit"
              disabled={logging}
              className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition disabled:opacity-50"
            >
              {logging ? 'Logging in...' : 'Log In'}
            </button>
          </form>
        </div>
      </>
    )
  }

  // ---- Main Admin UI ----
  return (
    <>
      <Head><title>Admin | Group Pricing</title></Head>
      <div className="min-h-screen" style={{ background: '#242424' }}>
        {/* Toast */}
        {toast && (
          <div className={`fixed top-4 right-4 z-50 px-5 py-3 rounded-lg shadow-lg text-white font-medium transition-opacity ${toast.ok ? 'bg-green-600' : 'bg-red-600'}`}>
            {toast.msg}
          </div>
        )}

        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex gap-4 mb-1">
                <Link href="/groups" className="text-red-400 hover:text-red-300 text-sm">&larr; Groups</Link>
                <Link href="/admin/proposals" className="text-white/60 hover:text-white text-sm">Proposals</Link>
              </div>
              <h1 className="text-3xl font-bold text-white">Group Pricing Admin</h1>
            </div>
            <button
              onClick={() => { sessionStorage.removeItem('admin_token'); setToken(null) }}
              className="text-sm text-white/50 hover:text-white/80 transition"
            >
              Log out
            </button>
          </div>

          {loading ? (
            <p className="text-white/60 text-center py-20">Loading pricing...</p>
          ) : !pricing ? (
            <p className="text-red-400 text-center py-20">Could not load pricing data.</p>
          ) : (
            <>
              {/* ---- Destination Fee & Add-Ons ---- */}
              <div className="bg-white rounded-xl p-6 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Destination Fee &amp; Add-Ons</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {/* Destination Fee */}
                  <label className="block">
                    <span className="text-gray-500 text-xs uppercase tracking-wider">Destination Fee</span>
                    <div className="mt-1 relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                      <input
                        type="number"
                        min={0}
                        value={pricing.destinationFee}
                        onChange={e => setDestFee(Number(e.target.value))}
                        className="w-full pl-7 pr-3 py-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </label>
                  {/* In-Studio Rate */}
                  <label className="block">
                    <span className="text-gray-500 text-xs uppercase tracking-wider">In-Studio Rate (per person)</span>
                    <div className="mt-1 relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                      <input
                        type="number"
                        min={0}
                        value={pricing.inStudioRate || 300}
                        onChange={e => setPricing({ ...pricing, inStudioRate: Number(e.target.value) })}
                        className="w-full pl-7 pr-3 py-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </label>
                  {/* Add-Ons */}
                  {(Object.keys(ADD_ON_LABELS) as (keyof AddOns)[]).map(key => (
                    <label key={key} className="block">
                      <span className="text-gray-500 text-xs uppercase tracking-wider">{ADD_ON_LABELS[key]}</span>
                      <div className="mt-1 relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                        <input
                          type="number"
                          min={0}
                          value={pricing.addOns[key]}
                          onChange={e => setAddOn(key, Number(e.target.value))}
                          className="w-full pl-7 pr-3 py-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* ---- Tiers Table ---- */}
              <div className="bg-white rounded-xl p-6 mb-6 overflow-x-auto">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Pricing Tiers (On-Location)</h2>
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-500 uppercase text-xs tracking-wider">
                      <th className="pb-2 pr-4">Group Size</th>
                      <th className="pb-2 pr-4">Per Person</th>
                      <th className="pb-2 pr-4">Session Total</th>
                      <th className="pb-2 pr-4">With Travel</th>
                      <th className="pb-2 w-10"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricing.tiers.map((tier, idx) => {
                      const sittingTotal = tier.size * tier.perPerson
                      const withTravel = sittingTotal + pricing.destinationFee
                      return (
                        <tr key={idx} className="border-b border-gray-100">
                          <td className="py-2 pr-4">
                            <input
                              type="number"
                              min={1}
                              value={tier.size}
                              onChange={e => setTier(idx, 'size', Number(e.target.value))}
                              className="w-20 px-3 py-1.5 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                          </td>
                          <td className="py-2 pr-4">
                            <div className="relative inline-block">
                              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                              <input
                                type="number"
                                min={0}
                                value={tier.perPerson}
                                onChange={e => setTier(idx, 'perPerson', Number(e.target.value))}
                                className="w-24 pl-6 pr-3 py-1.5 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                              />
                            </div>
                          </td>
                          <td className="py-2 pr-4 text-gray-600 tabular-nums">${sittingTotal.toLocaleString()}</td>
                          <td className="py-2 pr-4 text-gray-600 tabular-nums">{tier.size >= 5 ? `$${withTravel.toLocaleString()}` : <span className="text-gray-300">—</span>}</td>
                          <td className="py-2">
                            <button
                              onClick={() => removeTier(idx)}
                              className="text-red-400 hover:text-red-500 text-lg leading-none"
                              title="Remove tier"
                            >&times;</button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                <button
                  onClick={addTier}
                  className="mt-4 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition"
                >
                  + Add Tier
                </button>
              </div>

              {/* ---- Save Button ---- */}
              <button
                onClick={handleSave}
                disabled={saving}
                className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-lg font-bold transition disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}
