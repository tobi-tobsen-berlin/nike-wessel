import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface PublicationRow {
  category: string
  links: { label: string; href: string }[]
}

const rows: PublicationRow[] = [
  {
    category: 'Konferenzen & Events',
    links: [
      { label: 'TEDx', href: 'https://www.youtube.com/watch?v=UqTel0ufzo8' },
      { label: 're:publica', href: 'https://re-publica.com/de/user/3673' },
      {
        label: 'Kommunikationskongress',
        href: 'https://www.kommunikationskongress.de/programm/',
      },
    ],
  },
  {
    category: 'Publikationen',
    links: [
      { label: 'taz', href: 'https://taz.de/Nike-Wessel/!a226366/' },
      {
        label: 'Tagesspiegel',
        href: 'https://www.tagesspiegel.de/gesellschaft/autorin-nike-wessel-uber-die-sexpositive-szene-in-berlin-die-gaste-ringen-nackt-und-eingeolt-miteinander-14107283.html',
      },
      { label: 'Emotion', href: 'https://www.instagram.com/p/DDG2eyFII4j/' },
      {
        label: 'Missy Magazine',
        href: 'https://missy-magazine.de/blog/author/nikewessel/',
      },
    ],
  },
  {
    category: 'Podcasts',
    links: [
      {
        label: '\u201ESex in Berlin\u201C',
        href: 'https://open.spotify.com/show/2zVJ1kc97DWTqeXuUFBKbe',
      },
      {
        label: '\u201EGreen Voices\u201C',
        href: 'https://open.spotify.com/show/19D7NueiEFvfxXphlSqAor',
      },
    ],
  },
  {
    category: 'Buch',
    links: [
      {
        label: 'Sex in Berlin: Guide to Love',
        href: 'https://vast-chili-nova.de/',
      },
    ],
  },
]

export default function Auftritte() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-32">
        <div className="lg:flex lg:gap-20">
          {/* Heading — Chalets */}
          <div className="shrink-0 lg:w-[300px] lg:pt-8">
            <motion.h2
              className="font-display text-[clamp(2.2rem,5.5vw,56px)] text-pink"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Auftritte &amp;
              <br />
              Publikationen
            </motion.h2>
          </div>

          {/* Rows — clean, no red accent line */}
          <div className="mt-10 flex-1 lg:mt-0">
            {rows.map((row, i) => (
              <motion.div
                key={row.category}
                className={`py-8 ${i < rows.length - 1 ? 'border-b border-border/40' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              >
                {/* Category label — Nunito Sans uppercase */}
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/50">
                  {row.category}
                </span>

                {/* Links — coral pink hover */}
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  {row.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-lg font-bold text-black transition-colors hover:text-pink"
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {link.label}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
