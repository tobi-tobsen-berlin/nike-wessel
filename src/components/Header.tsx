import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const base = import.meta.env.BASE_URL

const navLinks = [
  { href: '#ueber', label: 'Info' },
  { href: '#themen', label: 'Themen' },
  { href: '#highlights', label: 'Projekte' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Header({ isSubpage = false }: { isSubpage?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-all duration-500 lg:px-10 ${
            scrolled ? 'py-3 landscape:py-1.5' : 'py-5 lg:py-7 landscape:py-2'
          }`}
        >
          <a
            href={import.meta.env.BASE_URL}
            className="font-display text-[36px] text-pink transition-opacity hover:opacity-70 lg:text-[36px] landscape:text-[28px] lg:landscape:text-[36px]"
          >
            Nike Wessel
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={isSubpage ? `${base}${link.href}` : link.href}
                className="font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:text-pink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {isSubpage ? (
            <a
              href={base}
              className="font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:text-pink lg:hidden"
            >
              Zurück
            </a>
          ) : (
            <button
              className="p-2 text-black/50 transition-colors hover:text-pink lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Menu öffnen"
            >
              <Menu className="h-6 w-6" />
            </button>
          )}
        </div>
      </header>

      {/* Full-screen black mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-black lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button
              className="absolute right-6 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-pink hover:text-pink"
              onClick={() => setMenuOpen(false)}
              aria-label="Menu schließen"
            >
              <X className="h-5 w-5" />
            </button>

            <nav className="flex flex-col items-center gap-8 landscape:gap-3">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={isSubpage ? `${base}${link.href}` : link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-[clamp(2rem,8vw,3.5rem)] landscape:text-[clamp(1.5rem,5svh,3rem)] text-white transition-colors hover:text-pink"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.p
              className="absolute bottom-10 landscape:bottom-4 font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Nike Wessel
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
