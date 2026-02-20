import { useState, useEffect, useCallback, useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Highlights from './components/Highlights'
import Themen from './components/Themen'
import Auftritte from './components/Auftritte'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
import CookieBanner from './components/CookieBanner'
import Impressum from './components/Impressum'
import Datenschutz from './components/Datenschutz'

function getPage() {
  const base = import.meta.env.BASE_URL
  const path = window.location.pathname.replace(base, '').replace(/^\/|\/$/g, '')
  return path || 'home'
}

const HEADER_OFFSET = 60

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function smoothScrollTo(el: Element) {
  const target = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  if (prefersReducedMotion()) {
    window.scrollTo(0, target)
    return
  }
  const start = window.scrollY
  const distance = Math.abs(target - start)
  if (distance === 0) return
  const duration = Math.min(850 + distance * 0.3, 1600)
  let t0: number | null = null
  const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
  const step = (now: number) => {
    if (!t0) t0 = now
    const progress = Math.min((now - t0) / duration, 1)
    window.scrollTo(0, start + (target - start) * ease(progress))
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export default function App() {
  const [page, setPage] = useState(getPage)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onPop = () => {
      setPage(getPage())
      const hash = window.location.hash
      if (hash) {
        const el = document.querySelector(hash)
        if (el) smoothScrollTo(el)
      }
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const handleHashClick = useCallback((e: React.MouseEvent) => {
    const anchor = (e.target as Element).closest('a[href^="#"]')
    if (!anchor) return
    const hash = anchor.getAttribute('href')!
    const el = document.querySelector(hash)
    if (!el) return
    e.preventDefault()
    history.pushState(null, '', hash)
    smoothScrollTo(el)
  }, [])

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    requestAnimationFrame(() => {
      const el = document.querySelector(hash)
      if (el) smoothScrollTo(el)
    })
  }, [])

  if (page === 'impressum') return <Impressum />
  if (page === 'datenschutz') return <Datenschutz />

  return (
    <div ref={containerRef} className="min-h-screen bg-white" onClick={handleHashClick}>
      <PageLoader />
      <Header />
      <main>
        <Hero />
        <About />
        <Themen />
        <Highlights />
        <Auftritte />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />

      {/* Fixed order buttons — right edge */}
      <a
        href="https://sexinberlin-2.myshopify.com/products/guide-to-love-sex-in?variant=56195496575324"
        className="fixed right-0 bottom-[83px] z-50 w-[260px] hidden lg:block md:bottom-auto top-[calc(60%)] md:w-auto"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`${import.meta.env.BASE_URL}images/btn-order-book.svg`}
          alt="Buch bestellen — Sex in Berlin: Guide to Love"
          width={277}
          height={65}
          className="max-w-full h-auto"
        />
      </a>
    </div>
  )
}
