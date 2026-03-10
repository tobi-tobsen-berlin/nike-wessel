import { motion } from 'framer-motion'

const topics = [
  {
    title: 'Feminismus & Intersektionalität',
    text: 'Machtverhältnisse, Gendergerechtigkeit und intersektionale Perspektiven in Politik und Gesellschaft.',
  },
  {
    title: 'Sexuelle Bildung & Gesundheit',
    text: 'Sexuelle Selbstbestimmung, sex-positive Bewegung und Gesundheitsaufklärung.',
  },
  {
    title: 'Nachhaltigkeit & Ökologie',
    text: 'Klimafreundliche Politik, Green Campaigning, ökologisches Handeln und soziale Transformation.',
  },
  {
    title: 'Körperpolitik & Popkultur',
    text: 'Kulturwissenschaftliche Analyse von Körpernormen, Medienrepräsentation und populärer Kultur.',
  },
  {
    title: 'Digitale Medien & Podcasts',
    text: 'Content-Produktion, Storytelling, Podcast-Formate und digitale Kommunikationsstrategien.',
  },
]

export default function Themen() {
  return (
    <>
      <section id="themen" aria-labelledby="themen-heading">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-32">
          <motion.h2
            id="themen-heading"
            className="font-display text-[clamp(2.5rem,6vw,64px)] text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Themen
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.title}
                className="rounded-[2rem] bg-black p-8 lg:p-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              >
                <h3 className="font-display text-[clamp(1.4rem,3vw,1.8rem)] leading-[1.2] text-white">
                  {topic.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-white/80">{topic.text}</p>
              </motion.div>
            ))}
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
