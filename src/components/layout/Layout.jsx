import { useEffect } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'auto' : 'auto' })
  }, [pathname, hash])
  return null
}

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
