import { useState, useEffect } from 'react'
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

export default function App() {
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const onPop = () => setPage(getPage())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    requestAnimationFrame(() => {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    })
  }, [])

  if (page === 'impressum') return <Impressum />
  if (page === 'datenschutz') return <Datenschutz />

  return (
    <div className="min-h-screen bg-white">
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
