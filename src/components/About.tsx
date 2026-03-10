import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const bioLinks = {
  taz: 'https://taz.de/Nike-Wessel/!a226366/',
  Tagesspiegel:
    'https://www.tagesspiegel.de/gesellschaft/autorin-nike-wessel-uber-die-sexpositive-szene-in-berlin-die-gaste-ringen-nackt-und-eingeolt-miteinander-14107283.html',
  Emotion: 'https://www.instagram.com/p/DDG2eyFII4j/',
  Missy: 'https://missy-magazine.de/blog/author/nikewessel/',
  'Sex in Berlin: Guide to Love': 'https://vast-chili-nova.de/',
  'Sex in Berlin (Podcast)': 'https://open.spotify.com/show/2zVJ1kc97DWTqeXuUFBKbe',
  'Green Voices': 'https://open.spotify.com/show/19D7NueiEFvfxXphlSqAor',
  'Love Fair': 'https://lovefair.de',
}

function BioLink({ name, href }: { name: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold underline decoration-pink/0 underline-offset-4 transition-all hover:decoration-pink"
    >
      {name}
    </a>
  )
}

const pVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const magazineLogos = [
  {
    src: '/images/magazin/taz-logo.svg',
    alt: 'taz article',
    href: 'https://taz.de/Nike-Wessel/!a226366/',
  },
  {
    src: '/images/magazin/tagesspiegel-logo.svg',
    alt: 'Tagesspiegel article',
    href: 'https://www.tagesspiegel.de/gesellschaft/autorin-nike-wessel-uber-die-sexpositive-szene-in-berlin-die-gaste-ringen-nackt-und-eingeolt-miteinander-14107283.html',
  },
  {
    src: '/images/magazin/monopol-logo-1.svg',
    alt: 'Monopol Magazin article',
    href: 'https://www.monopol-magazin.de/nike-wessel-sex-in-berlin-kuscheln-kuchen-und-kinks',
  },
  {
    src: '/images/magazin/tip-berlin-logo.svg',
    alt: 'tipBerlin article',
    href: 'https://www.tip-berlin.de/lifestyle/liebe-lust/nike-wessel-sex-in-berlin/',
  },
  {
    src: '/images/magazin/thecolumbist-logo.svg',
    alt: 'The Columbist article',
    href: 'https://thecolumbist.com/sex-in-berlin-a-colorful-talk-with-nike-wessel/',
  },
  {
    src: '/images/magazin/berliner-zeitung-logo.svg',
    alt: 'Berliner Zeitung post',
    href: 'https://www.facebook.com/berlinerzeitung/posts/stadtf%C3%BChrer-war-gestern-jetzt-gibt-es-den-berliner-sex-guide-nike-wessel-beantwo/1167702192049865/',
  },
  {
    src: '/images/magazin/Vice_logo-1.svg',
    alt: 'Vice article',
    href: 'https://www.vice.com/de/article/sex-in-berlin-podcast-was-ich-waehrend-eines-jahres-in-berlins-sexpositiver-szene-gelernt-habe',
  },
  {
    src: '/images/magazin/Missy-Magazine-logo-white.png.webp',
    alt: 'Missy Magazine',
    href: 'https://missy-magazine.de/blog/author/nikewessel/',
  },
]

const carouselLogos = [...magazineLogos, ...magazineLogos]

export default function About() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const virtualScrollRef = useRef(0)
  const clickTargetRef = useRef<number | null>(null)

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return

    const scrollAmount = carouselRef.current.clientWidth * 0.75
    const delta = direction === 'right' ? scrollAmount : -scrollAmount
    const loopPoint = carouselRef.current.scrollWidth / 2

    clickTargetRef.current = virtualScrollRef.current + delta
    if (clickTargetRef.current >= loopPoint) clickTargetRef.current -= loopPoint
    if (clickTargetRef.current < 0) clickTargetRef.current += loopPoint
  }

  useEffect(() => {
    const container = carouselRef.current
    if (!container) return

    let animationFrameId = 0
    let isHovered = false
    let hasEnteredView = false
    let fastStartDone = false
    let boostStartTime = 0
    virtualScrollRef.current = container.scrollLeft
    const baseSpeed = 0.6
    const boostSpeed = 2
    const boostDurationMs = 1200

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    const step = () => {
      if (hasEnteredView) {
        let speed = baseSpeed

        if (fastStartDone) {
          const elapsed = performance.now() - boostStartTime
          const progress = Math.min(Math.max(elapsed / boostDurationMs, 0), 1)
          const easedProgress = easeOutCubic(progress)
          speed = boostSpeed - (boostSpeed - baseSpeed) * easedProgress
        }

        if (isHovered) speed *= 0.25

        const loopPoint = container.scrollWidth / 2
        const clickTarget = clickTargetRef.current

        if (clickTarget !== null) {
          let diff = clickTarget - virtualScrollRef.current
          if (Math.abs(diff) > loopPoint / 2) {
            diff -= Math.sign(diff) * loopPoint
          }

          // Smoothly glide to clicked direction and destination.
          virtualScrollRef.current += diff * 0.14

          if (Math.abs(diff) < 0.8) {
            clickTargetRef.current = null
          }
        } else {
          virtualScrollRef.current += speed
        }

        if (virtualScrollRef.current >= loopPoint) {
          virtualScrollRef.current -= loopPoint
        }
        if (virtualScrollRef.current < 0) {
          virtualScrollRef.current += loopPoint
        }

        container.scrollLeft = virtualScrollRef.current
      }

      animationFrameId = window.requestAnimationFrame(step)
    }

    const handleMouseEnter = () => {
      isHovered = true
    }

    const handleMouseLeave = () => {
      isHovered = false
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasEnteredView) return

        hasEnteredView = true
        if (!fastStartDone) {
          fastStartDone = true
          boostStartTime = performance.now()
          virtualScrollRef.current = container.scrollLeft
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(container)
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)
    animationFrameId = window.requestAnimationFrame(step)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      observer.disconnect()
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* ─── Bio section — black background ─── */}
      <section
        id="ueber"
        className="relative overflow-hidden lg:rounded-t-[35px] py-26 lg:px-10 lg:py-32 bg-pink/60"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="lg:flex lg:gap-20">
            {/* Heading — Chalets display */}
            <div className="shrink-0 lg:w-[320px]">
              <motion.h2
                className="font-display text-[clamp(3rem,8vw,96px)] leading-[0.9]"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="block text-white">Über</span>
                <span className="block text-black">Nike</span>
              </motion.h2>
            </div>

            {/* Bio text */}
            <div className="mt-10 lg:mt-0">
              {/* Lead paragraph — Nunito Sans bold */}
              <motion.p
                className="max-w-[600px] text-xl font-bold leading-[1.8] text-black/85 lg:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Nike Irene Wessel ist Kulturwissenschaftlerin, Autorin und Speakerin.
              </motion.p>

              <motion.div
                className="mt-8 max-w-[600px] space-y-5 text-[16px] leading-[1.85] text-black/80"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.12, delayChildren: 0.35 },
                  },
                }}
              >
                <motion.p variants={pVariants}>
                  Als gebürtige Berlinerin war sie jahrelang aktiv bei Bündnis 90/Die Grünen und ist
                  heute als feministische Aktivistin und Vordenkerin für sexuelle Selbstbestimmung,
                  Gendergerechtigkeit und nachhaltige Gesellschaftspolitik bekannt. Ihr inhaltlicher
                  Schwerpunkt verbindet kulturwissenschaftliche Analyse mit politischem Engagement:
                  Sie thematisiert Machtverhältnisse, Körperpolitik, Popkultur und ökologisches
                  Handeln aus feministischer Perspektive.
                </motion.p>

                <motion.p variants={pVariants}>
                  Wessel schreibt unter anderem für die <BioLink name="taz" href={bioLinks.taz} />,
                  den <BioLink name="Tagesspiegel" href={bioLinks.Tagesspiegel} />,{' '}
                  <BioLink name="Emotion" href={bioLinks.Emotion} /> und{' '}
                  <BioLink name="Missy" href={bioLinks.Missy} />.
                </motion.p>

                <motion.p variants={pVariants}>
                  Sie veröffentlichte das Buch{' '}
                  <BioLink
                    name={'\u201ESex in Berlin: Guide to Love\u201C'}
                    href={bioLinks['Sex in Berlin: Guide to Love']}
                  />{' '}
                  und produzierte einen Podcast in Zusammenarbeit mit Vice.
                </motion.p>

                <motion.p variants={pVariants}>
                  Sie ist Produzentin und Moderatorin der eigenen Podcasts{' '}
                  <BioLink
                    name={'\u201ESex in Berlin\u201C'}
                    href={bioLinks['Sex in Berlin (Podcast)']}
                  />{' '}
                  — ein Format zu aktueller Sexpositivität — sowie{' '}
                  <BioLink name={'\u201EGreen Voices\u201C'} href={bioLinks['Green Voices']} /> —
                  ein Projekt zu Nachhaltigkeit, sozialer Transformation und klimafreundlicher
                  Politik.
                </motion.p>

                <motion.p variants={pVariants}>
                  Außerdem hat sie den gemeinnützigen Verein{' '}
                  <BioLink name={'\u201ELove Fair\u201C'} href={bioLinks['Love Fair']} /> gegründet,
                  der sich für Gesundheits- und sexuelle Aufklärung engagiert.
                </motion.p>

                <motion.p variants={pVariants}>
                  Nike lebt und arbeitet in Berlin Kreuzberg. Sie ist Mutter von drei Töchtern.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Magazine logos carousel ─── */}
      <section className="relative bg-black py-20">
        <div className="mx-auto mb-8 h-px w-16 bg-pink" />
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <motion.div
            className="flex items-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <button
              type="button"
              aria-label="Previous magazines"
              onClick={() => scrollCarousel('left')}
              className="hidden cursor-pointer h-24 w-20 shrink-0 items-center justify-center text-5xl leading-none text-white transition hover:text-pink md:flex md:w-24"
            >
              <span aria-hidden="true">‹</span>
            </button>

            <div className="grid w-full grid-cols-2 gap-3 md:hidden [perspective:1000px]">
              {magazineLogos.map((logo, index) => (
                <motion.a
                  key={logo.src}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-28 items-center justify-center rounded-md border border-white/15 bg-white/5 px-4"
                  style={{ transformStyle: 'preserve-3d' }}
                  initial={{ opacity: 0, rotateY: -80, y: 18 }}
                  whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                  whileHover={{ y: -4, scale: 1.03 }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`w-auto object-contain ${logo.src.includes('taz-logo') ? 'max-h-16' : 'max-h-12'
                      }`}
                  />
                </motion.a>
              ))}
            </div>
            <div
              ref={carouselRef}
              className="hidden flex-1 gap-8 overflow-x-auto py-2 md:flex [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {carouselLogos.map((logo, index) => (
                <motion.a
                  key={`${logo.src}-${index}`}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-36 min-w-[280px] shrink-0 items-center justify-center rounded-md border border-white/15 bg-white/5 px-8"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`w-auto object-contain ${logo.src.includes('taz-logo') ? 'max-h-28' : 'max-h-16'
                      }`}
                  />
                </motion.a>
              ))}
            </div>

            <button
              type="button"
              aria-label="Next magazines"
              onClick={() => scrollCarousel('right')}
              className="hidden cursor-pointer h-24 w-20 shrink-0 items-center justify-center text-5xl leading-none text-white transition hover:text-pink md:flex md:w-24"
            >
              <span aria-hidden="true">›</span>
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
