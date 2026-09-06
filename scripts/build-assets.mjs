/**
 * Regenerates the static brand assets from the HTML sources in scripts/assets:
 *   public/brochures/iNikola_Enterprise_AI_Brochure.pdf   (nav "Brochure" button)
 *   public/og-cover.png                                   (link previews)
 *   public/apple-touch-icon.png                           (iOS home screen)
 *
 * Run:  node scripts/build-assets.mjs
 * Edit the .html sources, re-run, commit the output. Needs Google Chrome installed.
 */
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const run = promisify(execFile)
const root = dirname(dirname(fileURLToPath(import.meta.url)))
const src = join(root, 'scripts/assets')

const CHROME =
  process.env.CHROME_PATH ||
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

const base = [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  '--hide-scrollbars',
  '--virtual-time-budget=9000',
]

await mkdir(join(root, 'public/brochures'), { recursive: true })

const jobs = [
  {
    name: 'brochure PDF',
    args: [
      ...base,
      '--no-pdf-header-footer',
      `--print-to-pdf=${join(root, 'public/brochures/iNikola_Enterprise_AI_Brochure.pdf')}`,
      `file://${join(src, 'brochure.html')}`,
    ],
  },
  {
    name: 'og-cover.png',
    args: [...base, '--window-size=1200,630', `--screenshot=${join(root, 'public/og-cover.png')}`, `file://${join(src, 'og-cover.html')}`],
  },
  {
    name: 'apple-touch-icon.png',
    args: [...base, '--window-size=180,180', `--screenshot=${join(root, 'public/apple-touch-icon.png')}`, `file://${join(src, 'touch-icon.html')}`],
  },
]

for (const job of jobs) {
  await run(CHROME, job.args).catch((e) => {
    if (!/CVDisplayLink|GPU/.test(String(e.stderr))) throw e
  })
  console.log('built', job.name)
}
