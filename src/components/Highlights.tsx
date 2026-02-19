import { useState } from 'react'
import { motion } from 'framer-motion'
import { useYouTubeConsent } from '../hooks/useYouTubeConsent'

interface Highlight {
  title: string
  subtitle: string
  href: string
  image: string
  objectFit?: 'cover' | 'contain'
  objectPosition?: string
  bg?: string
}

const base = import.meta.env.BASE_URL

const highlights: Highlight[] = [
  {
    title: 'Sex in Berlin',
    subtitle: 'Podcast · Spotify',
    href: 'https://open.spotify.com/show/2zVJ1kc97DWTqeXuUFBKbe',
    image: `${base}images/sx-in-berlin.webp`,
  },
  {
    title: 'Green Voices',
    subtitle: 'Podcast · Spotify',
    href: 'https://open.spotify.com/show/19D7NueiEFvfxXphlSqAor',
    image: `${base}images/green-voices-podcast.Be3etRDH_Z1cJcvt.webp`,
  },
  {
    title: 'Love Fair',
    subtitle: 'Verein · lovefair.de',
    href: 'https://lovefair.de',
    image: `${base}images/lovefair-hero.C9x4CSis_EqRmf.webp`,
    objectPosition: '60% center',
  },
  {
    title: 'Sex in Berlin: Guide to Love',
    subtitle: 'Buch · 2026 · Vom Meer bis zu den Alpen',
    href: 'https://sexinberlin-2.myshopify.com/products/guide-to-love-sex-in?variant=56195496575324',
    image: `${base}images/sx-in-berlin-book.webp`,
    objectPosition: 'top',
  },
  {
    title: 'Sex in Berlin: Guide to Love',
    subtitle: 'Buch · 2025',
    href: 'https://vast-chili-nova.de/produkt/sex-in-berlin',
    image: `${base}images/sx-in-berlin-book-guide-to-love.webp`,
    objectPosition: 'top',
  },
  {
    title: 'Studio36 GmbH',
    subtitle: 'Agentur · studio36.berlin',
    href: 'https://studio36.berlin',
    image: `${base}images/studio36-logo.svg`,
    objectFit: 'contain',
    bg: 'bg-white',
  },
]

function TedTalkTile() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { consent, accept } = useYouTubeConsent()
  const allowed = consent === 'granted'

  return (
    <motion.div
      className="sm:col-span-2 lg:col-span-3"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      onViewportEnter={() => setIsLoaded(true)}
    >
      <div className="relative overflow-hidden rounded-[1rem] bg-black aspect-video">
        {allowed && isLoaded ? (
          <iframe
            src="https://www.youtube-nocookie.com/embed/UqTel0ufzo8?start=28&autoplay=1&mute=1&loop=1&playlist=UqTel0ufzo8&controls=1&rel=0&modestbranding=1"
            title="Nike Wessel – TEDx Talk"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : !allowed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <p className="text-sm text-white/70">
              Video nicht verfügbar – YouTube-Cookies wurden abgelehnt.
            </p>
            <button onClick={accept} className="btn-pill-outline text-xs">
              Cookies akzeptieren &amp; Video laden
            </button>
          </div>
        ) : null}
      </div>

      <h3 className="mt-4 font-display text-lg text-black lg:text-xl">TEDx Talk</h3>
      <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-black/50">
        Vortrag · TEDx
      </p>
    </motion.div>
  )
}

export default function Highlights() {
  return (
    <section id="highlights" className="bg-gray">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-32">
        <div>
          <motion.h2
            className="font-display text-[clamp(2.5rem,6vw,64px)] text-pink"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Projekte &amp; Stimmen
          </motion.h2>
        </div>

        {/* Masonry grid with rounded images */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <TedTalkTile />

          {highlights.map((h, i) => (
            <motion.a
              key={h.href}
              href={h.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden ${i === 0 ? 'sm:col-span-2' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
            >
              <div
                className={`relative overflow-hidden rounded-[1rem] bg-black ${
                  h.bg ? 'flex items-center justify-center' : ''
                }`}
              >
                <img
                  src={h.image}
                  alt={h.title}
                  loading="lazy"
                  width={600}
                  height={i === 0 ? 338 : 600}
                  className={`w-full transition-transform duration-700 group-hover:scale-105 ${
                    i === 0 ? 'aspect-video' : 'aspect-square'
                  } ${
                    h.objectFit === 'contain'
                      ? `object-contain p-6${h.image.endsWith('.svg') ? ' invert' : ''}`
                      : 'object-cover'
                  }`}
                  style={h.objectPosition ? { objectPosition: h.objectPosition } : undefined}
                />
                {/* Black overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center rounded-[1rem] bg-black/0 transition-all duration-500 group-hover:bg-black">
                  <span className="font-display text-xl text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:text-4xl w-80 m-auto text-center">
                    {h.title}
                  </span>
                </div>
              </div>

              <h3 className="mt-4 font-display text-lg text-black transition-colors group-hover:text-pink lg:text-xl">
                {h.title}
              </h3>
              <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-black/50">
                {h.subtitle}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
