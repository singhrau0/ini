import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button, Arrow } from '../ui/Primitives'
import { submitLead } from '../../lib/leads'

const field =
  'w-full rounded-lg border border-ink/12 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-40 transition-colors focus:border-cobalt focus:outline-none focus:ring-2 focus:ring-cobalt/15'

const Label = ({ htmlFor, children, optional }) => (
  <label htmlFor={htmlFor} className="mb-2 block font-mono text-2xs uppercase tracking-[.12em] text-ink-60">
    {children}
    {optional && <span className="ml-1.5 normal-case tracking-normal text-ink-40">(optional)</span>}
  </label>
)

const INTERESTS = [
  'Private knowledge copilot',
  'Secure RAG / enterprise search',
  'AI agents & workflow automation',
  'AI security & governance review',
  'Readiness & architecture assessment',
  'Something else',
]

const SIZES = ['Under 200', '200 – 1,000', '1,000 – 5,000', '5,000+']

export default function LeadForm({
  source = 'contact',
  variant = 'full',
  heading = 'Tell us about the workflow',
  note,
  submitLabel = 'Send enquiry',
}) {
  const [state, setState] = useState('idle') // idle | sending | done | error
  const [delivery, setDelivery] = useState('')
  const [errors, setErrors] = useState({})

  const validate = (data) => {
    const e = {}
    if (!data.name?.trim()) e.name = 'Please tell us your name'
    if (!data.email?.trim()) e.email = 'We need an email to reply to'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) e.email = 'That email does not look right'
    if (variant === 'full' && !data.message?.trim()) e.message = 'A sentence or two is plenty'
    return e
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    const form = ev.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    // Honeypot: bots fill hidden fields, people do not.
    if (data.website) return

    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length) {
      const first = form.querySelector(`[name="${Object.keys(found)[0]}"]`)
      first?.focus()
      return
    }

    delete data.website
    setState('sending')
    const res = await submitLead(data, source)
    setDelivery(res.delivery)
    setState(res.ok ? 'done' : 'error')
    if (res.ok) form.reset()
  }

  if (state === 'done') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-ink/[.09] bg-white p-8 md:p-10"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-signal/10">
          <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 text-signal">
            <path d="M4 10.5 8 14.5 16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="display mt-6 text-2xl">Thank you — that has reached us.</h3>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-60">
          {delivery === 'mailto'
            ? 'Your mail client should have opened with the details filled in. Send that message and we will come back to you within one working day.'
            : 'We read every enquiry ourselves and reply within one working day, usually with a question or two about the workflow before we suggest anything.'}
        </p>
        <button onClick={() => setState('idle')} className="mt-7 text-[14px] font-medium text-cobalt hover:underline">
          Send another
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-ink/[.09] bg-white p-7 md:p-9">
      {heading && <h3 className="display text-[26px] tracking-tighter2">{heading}</h3>}
      {note && <p className="mt-3 text-[14.5px] leading-relaxed text-ink-60">{note}</p>}

      <div className={`${heading || note ? 'mt-8' : ''} grid gap-5 sm:grid-cols-2`}>
        <div>
          <Label htmlFor="lf-name">Name</Label>
          <input id="lf-name" name="name" className={field} placeholder="Your full name" autoComplete="name" />
          {errors.name && <p className="mt-1.5 text-[13px] text-red-600">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="lf-email">Work email</Label>
          <input id="lf-email" name="email" type="email" className={field} placeholder="you@company.com" autoComplete="email" />
          {errors.email && <p className="mt-1.5 text-[13px] text-red-600">{errors.email}</p>}
        </div>
        <div>
          <Label htmlFor="lf-company" optional={variant !== 'full'}>Company</Label>
          <input id="lf-company" name="company" className={field} placeholder="Organisation" autoComplete="organization" />
        </div>
        <div>
          <Label htmlFor="lf-role" optional>Role</Label>
          <input id="lf-role" name="role" className={field} placeholder="e.g. Head of Data / CISO" autoComplete="organization-title" />
        </div>

        {variant === 'full' && (
          <>
            <div>
              <Label htmlFor="lf-phone" optional>Phone</Label>
              <input id="lf-phone" name="phone" type="tel" className={field} placeholder="+91 …" autoComplete="tel" />
            </div>
            <div>
              <Label htmlFor="lf-size" optional>Organisation size</Label>
              <select id="lf-size" name="companySize" className={field} defaultValue="">
                <option value="" disabled>Select…</option>
                {SIZES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </>
        )}

        <div className="sm:col-span-2">
          <Label htmlFor="lf-interest">What are you exploring?</Label>
          <select id="lf-interest" name="interest" className={field} defaultValue={INTERESTS[0]}>
            {INTERESTS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="lf-message" optional={variant !== 'full'}>
            The workflow you want to deploy
          </Label>
          <textarea
            id="lf-message"
            name="message"
            rows={variant === 'full' ? 5 : 3}
            className={`${field} resize-y`}
            placeholder="What should it do, whose data does it touch, and what is currently stopping it from going live?"
          />
          {errors.message && <p className="mt-1.5 text-[13px] text-red-600">{errors.message}</p>}
        </div>
      </div>

      {/* honeypot */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor="lf-website">Do not fill this in</label>
        <input id="lf-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={state === 'sending'} className="disabled:opacity-60">
          {state === 'sending' ? 'Sending…' : submitLabel}
          {state !== 'sending' && <Arrow />}
        </Button>
        <p className="text-[12.5px] leading-relaxed text-ink-40 sm:max-w-[30ch]">
          We reply within one working day. Your details are never shared or sold.
        </p>
      </div>

      <AnimatePresence>
        {state === 'error' && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-[14px] text-red-600">
            Something went wrong sending that. Please email us directly at contact@inikola.com.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  )
}
