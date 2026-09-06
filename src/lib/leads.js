import { site } from '../data/site'

/**
 * Lead delivery.
 *
 * Set ONE of these in .env (see .env.example) and every form on the site —
 * contact, demo booking and the paid-campaign landing page — routes there
 * with a timestamp and a source tag:
 *
 *   VITE_LEAD_ENDPOINT   any URL that accepts a JSON POST
 *                        (Formspree, Web3Forms, a Google Apps Script web app,
 *                         a Zapier/Make catch hook, or your own CRM endpoint)
 *
 * With nothing configured the form still works: the lead is kept in
 * localStorage and the visitor's mail client opens with the details
 * pre-filled, so no enquiry is silently lost.
 */
const ENDPOINT = import.meta.env?.VITE_LEAD_ENDPOINT || ''
const STORE_KEY = 'inikola.leads'

const firstTouch = () => {
  try {
    const existing = sessionStorage.getItem('inikola.firstTouch')
    if (existing) return JSON.parse(existing)
    const p = new URLSearchParams(window.location.search)
    const touch = {
      landingPage: window.location.pathname,
      referrer: document.referrer || 'direct',
      utm_source: p.get('utm_source') || '',
      utm_medium: p.get('utm_medium') || '',
      utm_campaign: p.get('utm_campaign') || '',
      utm_content: p.get('utm_content') || '',
      utm_term: p.get('utm_term') || '',
      gclid: p.get('gclid') || '',
      fbclid: p.get('fbclid') || '',
    }
    sessionStorage.setItem('inikola.firstTouch', JSON.stringify(touch))
    return touch
  } catch {
    return {}
  }
}

const persist = (lead) => {
  try {
    const all = JSON.parse(localStorage.getItem(STORE_KEY) || '[]')
    all.push(lead)
    localStorage.setItem(STORE_KEY, JSON.stringify(all.slice(-100)))
  } catch {
    /* private browsing — nothing to do */
  }
}

const mailtoFallback = (lead) => {
  const lines = Object.entries(lead)
    .filter(([, v]) => v !== '' && v != null)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')
  const subject = `New enquiry — ${lead.source || 'website'}${lead.company ? ` — ${lead.company}` : ''}`
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`
}

export async function submitLead(fields, source = 'website') {
  const lead = {
    ...fields,
    source,
    submittedAt: new Date().toISOString(),
    page: window.location.pathname,
    ...firstTouch(),
  }

  persist(lead)

  if (!ENDPOINT) {
    mailtoFallback(lead)
    return { ok: true, delivery: 'mailto' }
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(lead),
    })
    if (!res.ok) throw new Error(`Lead endpoint returned ${res.status}`)
    return { ok: true, delivery: 'endpoint' }
  } catch (err) {
    // The lead is already in localStorage; give the visitor a working path out.
    mailtoFallback(lead)
    return { ok: true, delivery: 'mailto', warning: err.message }
  }
}

/** Console helper for recovering leads captured before an endpoint was configured. */
export const exportStoredLeads = () => {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY) || '[]')
  } catch {
    return []
  }
}
