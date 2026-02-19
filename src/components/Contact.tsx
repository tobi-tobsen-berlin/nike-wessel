import { motion } from 'framer-motion'

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/nike_wessel' },
  { label: 'LinkedIn', href: 'https://de.linkedin.com/in/nike-wessel-73496118a' },
  { label: 'Wikipedia', href: 'https://de.wikipedia.org/wiki/Nike_Wessel' },
]

const viewport = { once: true, amount: 0.1 } as const
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Contact() {
  return (
    <section id="kontakt" className="overflow-hidden rounded-t-[35px] bg-black">
      <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-10 text-center lg:px-10 lg:pt-36 lg:pb-16">
        <div>
          {/* Heading — Chalets */}
          <motion.h2
            className="font-display text-[clamp(2.5rem,7vw,80px)] text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8 }}
          >
            Kontakt
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mx-auto max-w-[500px] text-base leading-relaxed text-white/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ delay: 0.4 }}
          >
            Für Anfragen zu Vorträgen, Panels, Workshops und Kooperationen.
          </motion.p>

          {/* Pill CTA button */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.45 }}
          >
            <a
              href="mailto:nike.wessel@studio36.berlin"
              className="btn-pill inline-flex border-white bg-white text-black hover:border-pink hover:bg-pink hover:text-white"
            >
              E-Mail schreiben
            </a>
          </motion.div>

          {/* Social links as pill-outlined buttons */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ delay: 0.5 }}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="btn-pill-outline"
              >
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>
        <button
          onClick={scrollToTop}
          aria-label="Nach oben scrollen"
          className="btn-pill inline-flex border-white bg-white text-black hover:border-pink hover:bg-pink hover:text-white mt-20"
        >
          Nach oben &uarr;
        </button>
      </div>
    </section>
  )
}
