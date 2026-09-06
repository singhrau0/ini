import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import { useSmoothScroll } from './hooks/useSmoothScroll'

const Solutions = lazy(() => import('./pages/Solutions'))
const SolutionDetail = lazy(() => import('./pages/SolutionDetail'))
const Products = lazy(() => import('./pages/Products'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const RnD = lazy(() => import('./pages/RnD'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const PortfolioDetail = lazy(() => import('./pages/PortfolioDetail'))
const Team = lazy(() => import('./pages/Team'))
const About = lazy(() => import('./pages/About'))
const Faq = lazy(() => import('./pages/Faq'))
const Insights = lazy(() => import('./pages/Insights'))
const InsightDetail = lazy(() => import('./pages/InsightDetail'))
const Contact = lazy(() => import('./pages/Contact'))
const Book = lazy(() => import('./pages/Book'))
const Careers = lazy(() => import('./pages/Careers'))
const Landing = lazy(() => import('./pages/Landing'))
const Legal = lazy(() => import('./pages/Legal'))
const NotFound = lazy(() => import('./pages/NotFound'))

const Loading = () => (
  <div className="flex min-h-[70vh] items-center justify-center">
    <div className="h-5 w-5 animate-spin rounded-full border-2 border-ink/15 border-t-ink/60" />
  </div>
)

export default function App() {
  useSmoothScroll()

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Unlisted paid-campaign landing page — outside the main layout,
            no navigation, no footer links, noindex. */}
        <Route path="/lp/private-ai" element={<Landing />} />

        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="solutions/:slug" element={<SolutionDetail />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<ProductDetail />} />
          <Route path="rnd" element={<RnD />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:slug" element={<PortfolioDetail />} />
          <Route path="team" element={<Team />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:slug" element={<InsightDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book" element={<Book />} />
          <Route path="careers" element={<Careers />} />
          <Route path="privacy" element={<Legal kind="privacy" />} />
          <Route path="terms" element={<Legal kind="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
