/**
 * Post-build:
 *  1. Writes a static HTML file per route with real <title>, description,
 *     canonical, Open Graph tags and JSON-LD, so crawlers and link unfurlers
 *     get correct metadata without executing the app.
 *  2. Emits sitemap.xml (public routes only) and robots.txt.
 *  3. Copies index.html to 404.html for S3 / static-host SPA fallback.
 */
import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const dist = join(root, 'dist')

const { routes } = await import(join(root, 'src/data/routes.js'))
const ORIGIN = process.env.SITE_ORIGIN || 'https://inikola.com'

const esc = (s = '') =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const shell = await readFile(join(dist, 'index.html'), 'utf8')

const orgLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'iNikola',
  url: ORIGIN,
  logo: `${ORIGIN}/logo.png`,
  email: 'contact@inikola.com',
  description:
    'Enterprise AI engineering and secure AI enablement. From a blocked AI use-case to security-approved production.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
}

const render = (route) => {
  const url = ORIGIN + (route.path === '/' ? '/' : route.path)
  let html = shell

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(route.title)}</title>`)
  html = html.replace(
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${esc(route.description)}" />`
  )
  html = html.replace(
    /<link rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${url}" />`
  )
  html = html.replace(
    /<meta property="og:title"[\s\S]*?\/>/,
    `<meta property="og:title" content="${esc(route.title)}" />`
  )
  html = html.replace(
    /<meta\s+property="og:description"[\s\S]*?\/>/,
    `<meta property="og:description" content="${esc(route.description)}" />`
  )
  html = html.replace(
    /<meta property="og:url"[^>]*>/,
    `<meta property="og:url" content="${url}" />`
  )
  html = html.replace(
    /<meta property="og:type"[^>]*>/,
    `<meta property="og:type" content="${route.type === 'article' ? 'article' : 'website'}" />`
  )

  const extra = []
  if (route.noindex) extra.push('<meta name="robots" content="noindex, nofollow" />')
  if (route.path === '/') {
    extra.push(`<script type="application/ld+json">${JSON.stringify(orgLd)}</script>`)
  }
  if (extra.length) html = html.replace('</head>', `    ${extra.join('\n    ')}\n  </head>`)

  return html
}

let written = 0
for (const route of routes) {
  const html = render(route)
  if (route.path === '/') {
    await writeFile(join(dist, 'index.html'), html)
  } else {
    const dir = join(dist, route.path.replace(/^\//, ''))
    await mkdir(dir, { recursive: true })
    await writeFile(join(dir, 'index.html'), html)
  }
  written++
}

// SPA fallback for static hosts (S3 error document, Netlify, etc.)
await copyFile(join(dist, 'index.html'), join(dist, '404.html'))
await writeFile(join(dist, '_redirects'), '/*    /index.html   200\n')

// sitemap — public routes only
const today = new Date().toISOString().slice(0, 10)
const urls = routes
  .filter((r) => !r.noindex)
  .map(
    (r) => `  <url>
    <loc>${ORIGIN}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${r.date || today}</lastmod>
    <priority>${(r.priority ?? 0.5).toFixed(1)}</priority>
  </url>`
  )
  .join('\n')

await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.w3.org/1999/sitemaps-schema/0.9">\n${urls}\n</urlset>\n`.replace(
    'http://www.w3.org/1999/sitemaps-schema/0.9',
    'http://www.sitemaps.org/schemas/sitemap/0.9'
  )
)

const disallow = routes.filter((r) => r.noindex).map((r) => `Disallow: ${r.path}`).join('\n')
await writeFile(
  join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n${disallow}\n\nSitemap: ${ORIGIN}/sitemap.xml\n`
)

console.log(`postbuild: ${written} route pages, sitemap.xml, robots.txt, 404.html`)
