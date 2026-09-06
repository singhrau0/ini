import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../data/site'
import { routeFor } from '../data/routes'

const upsert = (selector, create) => {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  return el
}

const setMeta = (name, content, attr = 'name') => {
  if (!content) return
  const el = upsert(`meta[${attr}="${name}"]`, () => {
    const m = document.createElement('meta')
    m.setAttribute(attr, name)
    return m
  })
  el.setAttribute('content', content)
}

const setJsonLd = (id, data) => {
  const existing = document.getElementById(id)
  if (existing) existing.remove()
  if (!data) return
  const s = document.createElement('script')
  s.type = 'application/ld+json'
  s.id = id
  s.textContent = JSON.stringify(data)
  document.head.appendChild(s)
}

/**
 * Per-page head management. Defaults come from src/data/routes.js so the
 * client and the static prerender always agree.
 */
export function Seo({ title, description, image, type = 'website', jsonLd, noindex }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const preset = routeFor(pathname) || {}
    const t = title || preset.title || site.name
    const d = description || preset.description || site.description
    const url = site.domain + (pathname === '/' ? '' : pathname)
    const img = image || `${site.domain}/og-cover.png`
    const hidden = noindex ?? preset.noindex ?? false

    document.title = t
    setMeta('description', d)
    setMeta('robots', hidden ? 'noindex, nofollow' : 'index, follow')

    setMeta('og:title', t, 'property')
    setMeta('og:description', d, 'property')
    setMeta('og:url', url, 'property')
    setMeta('og:type', type, 'property')
    setMeta('og:image', img, 'property')
    setMeta('og:site_name', site.name, 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', t)
    setMeta('twitter:description', d)
    setMeta('twitter:image', img)

    const canonical = upsert('link[rel="canonical"]', () => {
      const l = document.createElement('link')
      l.setAttribute('rel', 'canonical')
      return l
    })
    canonical.setAttribute('href', url)

    setJsonLd('ld-page', jsonLd)
    return () => setJsonLd('ld-page', null)
  }, [pathname, title, description, image, type, jsonLd, noindex])

  return null
}

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  legalName: site.legalName,
  url: site.domain,
  logo: `${site.domain}/logo.png`,
  email: site.email,
  telephone: site.phone,
  description: site.description,
  foundingDate: site.founded,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  sameAs: [site.linkedin].filter(Boolean),
  knowsAbout: [
    'Enterprise AI engineering',
    'Retrieval-augmented generation',
    'AI agents and agentic automation',
    'Private AI deployment',
    'AI security and governance',
    'LLMOps and managed AI operations',
  ],
}

export const faqLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.q,
    acceptedAnswer: { '@type': 'Answer', text: i.a },
  })),
})

export const articleLd = (a) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: a.title,
  description: a.description,
  datePublished: a.date,
  dateModified: a.date,
  author: { '@type': 'Organization', name: site.name, url: site.domain },
  publisher: {
    '@type': 'Organization',
    name: site.name,
    logo: { '@type': 'ImageObject', url: `${site.domain}/logo.png` },
  },
  mainEntityOfPage: `${site.domain}/insights/${a.slug}`,
})

export const serviceLd = (s) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: s.title,
  description: s.short,
  provider: { '@type': 'Organization', name: site.name, url: site.domain },
  areaServed: 'Global',
})

export const breadcrumbLd = (trail) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.name,
    item: site.domain + t.path,
  })),
})
