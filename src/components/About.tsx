import { motion } from 'framer-motion'

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

export default function About() {
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

      {/* ─── Quote section — clean centered ─── */}
      <section className="relative bg-black">
        <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-20">
          <div className="relative">
            <motion.blockquote
              className="relative mx-auto max-w-[850px] text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <div className="mx-auto mb-8 h-px w-16 bg-pink" />
              <p className="font-display text-[clamp(1.8rem,5vw,3.5rem)] leading-[1.3] text-white italic">
                „There is a crack in everything and this is where the lights get in.“
              </p>
              <footer className="mt-10">
                <cite className="font-body text-[13px] font-semibold not-italic uppercase tracking-[0.15em] text-white/60">
                  — Leonard Cohen
                </cite>
              </footer>
            </motion.blockquote>
          </div>
        </div>
      </section>
    </>
  )
}
