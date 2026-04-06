import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

interface ImageSet {
  label: string
  minSize: number
  maxSize: number
  images: string[]
}

interface Campaign {
  campaignId: string
  name: string
}

interface Step {
  stepId: string
  subject: string
  order: number
}

interface ProposalConfig {
  campaignId: string
  stepIndex: number
  subject: string
  imageSets: ImageSet[]
}

interface MediaAsset {
  key: string
  url: string
  name: string
}

export default function AdminProposals() {
  const [token, setToken] = useState<string | null>(null)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [logging, setLogging] = useState(false)

  const [config, setConfig] = useState<ProposalConfig | null>(null)
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [steps, setSteps] = useState<Step[]>([])
  const [mediaAssets, setMediaAssets] = useState<MediaAsset[]>([])
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null)
  const [activeSetIdx, setActiveSetIdx] = useState(0)

  useEffect(() => {
    const stored = sessionStorage.getItem('admin_token')
    if (stored) setToken(stored)
  }, [])

  // Load config + campaigns
  useEffect(() => {
    if (!token) return
    setLoading(true)
    const headers = { Authorization: `Bearer ${token}` }

    Promise.all([
      fetch('/api/admin-proposal-template', { headers }).then(r => r.json()),
      fetch('/api/admin-campaigns', { headers }).then(r => r.json()),
      fetch('/api/admin-media', { headers }).then(r => r.json()),
    ])
      .then(([tmpl, camps, media]) => {
        if (tmpl.error === 'Unauthorized' || camps.error === 'Unauthorized') {
          sessionStorage.removeItem('admin_token')
          setToken(null)
          return
        }
        setConfig(tmpl)
        if (Array.isArray(camps)) setCampaigns(camps)
        if (Array.isArray(media)) setMediaAssets(media)
      })
      .catch(() => { sessionStorage.removeItem('admin_token'); setToken(null) })
      .finally(() => setLoading(false))
  }, [token])

  useEffect(() => {
    if (!token || !config?.campaignId) { setSteps([]); return }
    fetch(`/api/admin-campaign-steps?campaignId=${config.campaignId}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.json())
      .then(data => { if (Array.isArray(data)) setSteps(data) })
      .catch(() => setSteps([]))
  }, [token, config?.campaignId])

  function showToast(msg: string, ok: boolean) {
    setToast({ msg, ok })
    setTimeout(() => setToast(null), 4000)
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
    } catch { setAuthError('Network error') }
    finally { setLogging(false) }
  }

  async function handleSave() {
    if (!config || !token) return
    setSaving(true)
    try {
      const res = await fetch('/api/admin-proposal-template', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(config),
      })
      if (!res.ok) throw new Error('Save failed')
      showToast('Configuration saved!', true)
    } catch (err) {
      showToast(`Failed: ${(err as Error).message}`, false)
    }
    setSaving(false)
  }

  function selectCampaign(campaignId: string) {
    if (!config) return
    setConfig({ ...config, campaignId, stepIndex: 0 })
  }

  function toggleImage(setIdx: number, src: string) {
    if (!config) return
    const sets = [...config.imageSets]
    const current = sets[setIdx].images || []
    sets[setIdx] = {
      ...sets[setIdx],
      images: current.includes(src) ? current.filter(s => s !== src) : [...current, src],
    }
    setConfig({ ...config, imageSets: sets })
  }

  function addImageSet() {
    if (!config) return
    const sets = [...config.imageSets]
    const lastMax = sets.length > 0 ? sets[sets.length - 1].maxSize : 0
    sets.push({ label: `New (${lastMax + 1}+)`, minSize: lastMax + 1, maxSize: 999, images: [] })
    setConfig({ ...config, imageSets: sets })
    setActiveSetIdx(sets.length - 1)
  }

  function removeImageSet(idx: number) {
    if (!config) return
    const sets = config.imageSets.filter((_, i) => i !== idx)
    setConfig({ ...config, imageSets: sets })
    if (activeSetIdx >= sets.length) setActiveSetIdx(Math.max(0, sets.length - 1))
  }

  function updateImageSet(idx: number, field: string, value: string | number) {
    if (!config) return
    const sets = [...config.imageSets]
    sets[idx] = { ...sets[idx], [field]: value }
    setConfig({ ...config, imageSets: sets })
  }

  // Login
  if (!token) {
    return (
      <>
        <Head><title>Proposals — Admin</title></Head>
        <div className="min-h-screen bg-[#242424] flex items-center justify-center">
          <form onSubmit={handleLogin} className="bg-white/10 rounded-xl p-8 w-full max-w-sm">
            <h1 className="text-2xl font-bold text-white text-center mb-6">Admin Login</h1>
            <input type="password" placeholder="Password" value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500 mb-4" />
            {authError && <p className="text-red-400 text-sm mb-3">{authError}</p>}
            <button type="submit" disabled={logging}
              className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition disabled:opacity-50">
              {logging ? 'Logging in...' : 'Log In'}
            </button>
          </form>
        </div>
      </>
    )
  }

  if (loading || !config) {
    return (
      <>
        <Head><title>Proposals — Admin</title></Head>
        <div className="min-h-screen bg-[#242424] flex items-center justify-center text-white/60">Loading...</div>
      </>
    )
  }

  if (!config.imageSets) {
    config.imageSets = [
      { label: 'Small (3-10)', minSize: 3, maxSize: 10, images: [] },
      { label: 'Medium (11-25)', minSize: 11, maxSize: 25, images: [] },
      { label: 'Large (26-60)', minSize: 26, maxSize: 60, images: [] },
      { label: 'XL (61+)', minSize: 61, maxSize: 999, images: [] },
    ]
  }
  const activeSet = config.imageSets[activeSetIdx]
  const selectedCampaign = campaigns.find(c => c.campaignId === config.campaignId)

  return (
    <>
      <Head><title>Proposal Config — Admin</title></Head>
      <div className="min-h-screen bg-[#242424]">
        {toast && (
          <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg text-white text-sm font-medium shadow-lg ${toast.ok ? 'bg-green-600' : 'bg-red-600'}`}>
            {toast.msg}
          </div>
        )}

        <div className="bg-[#1a1a1a] border-b border-white/10 px-6 py-4 flex items-center gap-4">
          <Link href="/admin/pricing" className="text-white/60 hover:text-white text-sm">&larr; Pricing</Link>
          <h1 className="text-white text-lg font-light flex-1">Proposal Email Configuration</h1>
          <button onClick={() => { sessionStorage.removeItem('admin_token'); setToken(null) }}
            className="text-white/40 hover:text-white text-sm">Logout</button>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">

          {/* Email Template Selection */}
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">Email Template</h2>
            <p className="text-xs text-gray-400 mb-4">
              Select a campaign from StudiGo to use as the proposal template. Design it in the{' '}
              <a href="https://admin.getaheadshot.net/admin/campaigns" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">
                StudiGo campaign editor
              </a>{' '}
              using variables: {'{{firstName}}'}, {'{{teamSize}}'}, {'{{total}}'}, {'{{imageGrid}}'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Campaign</label>
                <select value={config.campaignId} onChange={e => selectCampaign(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="">— Select a campaign —</option>
                  {campaigns.map(c => (
                    <option key={c.campaignId} value={c.campaignId}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Step</label>
                <select value={config.stepIndex}
                  onChange={e => setConfig({ ...config, stepIndex: Number(e.target.value) })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                  disabled={steps.length === 0}>
                  {steps.length === 0 && <option>No steps found</option>}
                  {steps.map((s, idx) => (
                    <option key={s.stepId} value={idx}>Step {idx + 1}: {s.subject}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Email Subject</label>
                <input type="text" value={config.subject}
                  onChange={e => setConfig({ ...config, subject: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
            </div>

            {selectedCampaign && (
              <p className="text-xs text-green-600 mt-3">
                Using: <strong>{selectedCampaign.name}</strong>
                {steps.length > 0 && ` → Step ${config.stepIndex + 1}: ${steps[config.stepIndex]?.subject || ''}`}
              </p>
            )}
            {!config.campaignId && (
              <p className="text-xs text-amber-600 mt-3">
                No campaign selected. Create a campaign in StudiGo with your proposal email template, then select it here.
              </p>
            )}
          </div>

          {/* Image Sets */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Portfolio Images by Team Size</h2>
                <p className="text-xs text-gray-400 mt-1">
                  These images replace the {'{{imageGrid}}'} variable in your template. Different team sizes get different image selections.
                </p>
              </div>
              <button onClick={addImageSet}
                className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm">+ Add Set</button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-4 flex-wrap">
              {config.imageSets.map((set, idx) => (
                <button key={idx} onClick={() => setActiveSetIdx(idx)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                    idx === activeSetIdx ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                  {set.label}
                </button>
              ))}
            </div>

            {activeSet && (
              <>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Label</label>
                    <input type="text" value={activeSet.label} onChange={e => updateImageSet(activeSetIdx, 'label', e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Min Team Size</label>
                    <input type="number" min={1} value={activeSet.minSize} onChange={e => updateImageSet(activeSetIdx, 'minSize', Number(e.target.value))}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Max Team Size</label>
                    <input type="number" min={1} value={activeSet.maxSize} onChange={e => updateImageSet(activeSetIdx, 'maxSize', Number(e.target.value))}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500" />
                  </div>
                </div>

                <p className="text-xs text-gray-400 mb-2">
                  Click to select one image for this category. Upload images via the{' '}
                  <a href="https://admin.getaheadshot.net/admin/campaigns" target="_blank" rel="noopener noreferrer" className="text-red-500 underline">StudiGo campaign editor</a>.
                  {activeSet.images.length > 0 && ` Selected: ${activeSet.images.length}`}
                </p>
                {mediaAssets.length === 0 ? (
                  <p className="text-gray-400 text-sm py-4 text-center">No images in media library. Upload images in the StudiGo campaign editor first.</p>
                ) : (
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                    {mediaAssets.map(asset => (
                      <button key={asset.key} onClick={() => toggleImage(activeSetIdx, asset.url)}
                        className={`relative aspect-square rounded overflow-hidden border-2 transition ${
                          activeSet.images.includes(asset.url) ? 'border-red-500' : 'border-transparent opacity-40 hover:opacity-70'
                        }`}>
                        <img src={asset.url} alt={asset.name} className="w-full h-full object-cover" />
                        {activeSet.images.includes(asset.url) && (
                          <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              {activeSet.images.indexOf(asset.url) + 1}
                            </div>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {config.imageSets.length > 1 && (
                  <button onClick={() => removeImageSet(activeSetIdx)}
                    className="mt-3 text-red-500 hover:text-red-400 text-xs">Remove this set</button>
                )}
              </>
            )}
          </div>

          {/* Save */}
          <div className="flex gap-4 items-center">
            <button onClick={handleSave} disabled={saving}
              className="px-8 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition disabled:opacity-50">
              {saving ? 'Saving...' : 'Save Configuration'}
            </button>
          </div>

          {/* How it works */}
          <div className="bg-white/5 rounded-xl p-6 text-white/60 text-sm space-y-2">
            <h3 className="text-white font-semibold mb-2">How it works</h3>
            <p>1. Create a campaign in <a href="https://admin.getaheadshot.net/admin/campaigns" target="_blank" rel="noopener noreferrer" className="text-red-400 underline">StudiGo</a> with your proposal email template.</p>
            <p>2. Use the block editor to design the email with {'{{firstName}}'}, {'{{teamSize}}'}, {'{{total}}'}, and {'{{imageGrid}}'} variables.</p>
            <p>3. Select that campaign and step above, configure image sets for different team sizes.</p>
            <p>4. When someone submits the group pricing calculator, they automatically receive the proposal email with their personalized data and matching portfolio images.</p>
          </div>
        </div>
      </div>
    </>
  )
}
