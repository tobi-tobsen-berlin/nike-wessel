import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useMediaQuery } from '../hooks/useMediaQuery'

const fromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay, ease: [0, 0, 0.2, 1] as const },
  }),
}

const fromBottom = {
  hidden: { opacity: 0, y: 40, scale: 1.08 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, delay, ease: [0, 0, 0.2, 1] as const },
  }),
}

export default function Hero() {
  const isMobile = useMediaQuery('(max-width: 767px) and (orientation: portrait)')

  return (
    <section className="relative overflow-hidden bg-white">
      {/* ─── Mobile background (portrait < md only) ─── */}
      {isMobile && (
        <>
          <motion.div
            className="absolute inset-0 flex items-end justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0, 0, 0.2, 1] }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/nike-720w.webp`}
              alt=""
              width={720}
              height={1206}
              fetchPriority="high"
              decoding="async"
              className="w-full object-cover brightness-[0.8] ken-burns"
              aria-hidden="true"
            />
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
        </>
      )}

      {/* ─── Content ─── */}
      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1400px] items-end px-6 pb-[100px] landscape:min-h-0 landscape:items-center landscape:gap-8 landscape:pb-0 landscape:pt-20 md:min-h-0 md:items-center md:gap-10 md:pb-0 md:pt-20 lg:gap-16 lg:px-10 lg:pt-20">
        <div className="landscape:flex landscape:w-[50%] landscape:flex-col landscape:justify-center md:flex md:w-[50%] md:flex-col md:justify-center lg:w-[55%]">
          <h1 className="font-display leading-[1.1] landscape:tracking-tight md:tracking-tight">
            <motion.span
              className="block text-[clamp(36px,10vw,56px)] text-pink landscape:text-[clamp(36px,6vw,96px)] md:text-[clamp(36px,6vw,96px)]"
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fromLeft}
            >
              Autorin
            </motion.span>
            <motion.span
              className="block text-[clamp(36px,10vw,56px)] text-pink landscape:text-[clamp(32px,5.5vw,65px)] landscape:text-pink/80 md:text-[clamp(32px,5.5vw,65px)] md:text-pink/80"
              custom={0.25}
              initial="hidden"
              animate="visible"
              variants={fromLeft}
            >
              Speakerin
            </motion.span>
            <motion.span
              className="block text-[clamp(18px,5vw,28px)] text-pink/60 landscape:text-[clamp(20px,3.5vw,44px)] md:text-[clamp(20px,3.5vw,44px)]"
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fromLeft}
            >
              Kultur&shy;wissen&shy;schaftlerin
            </motion.span>
          </h1>

          {/* Desktop subtitle + CTA */}
          <motion.div
            className="mt-6 hidden max-w-[520px] md:block lg:mt-10"
            custom={0.55}
            initial="hidden"
            animate="visible"
            variants={fromLeft}
          >
            <p className="hidden [@media(min-height:600px)]:block text-base font-semibold leading-[1.7] text-black/50 lg:text-lg">
              Vordenkerin für sexuelle Selbstbestimmung, Gendergerechtigkeit und nachhaltige
              Gesellschaftspolitik aus Berlin.
            </p>
            <a
              href="#kontakt"
              className="btn-pill mt-6 hidden items-center gap-3 md:inline-flex lg:mt-8"
            >
              Kontakt aufnehmen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Mobile CTA */}
          <motion.a
            href="#kontakt"
            className="btn-pill mt-8 w-fit md:!hidden"
            custom={0.55}
            initial="hidden"
            animate="visible"
            variants={fromLeft}
          >
            Kontakt aufnehmen
            <ArrowRight className="h-3.5 w-3.5" />
          </motion.a>
        </div>

        {/* Desktop / landscape image */}
        <motion.div
          className="hidden w-[50%] overflow-hidden landscape:block landscape:max-h-[calc(100svh-2rem)] md:block lg:w-[45%]"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fromBottom}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/nike.webp`}
            srcSet={`${import.meta.env.BASE_URL}images/nike-720w.webp 720w, ${import.meta.env.BASE_URL}images/nike.webp 942w`}
            sizes="(min-width: 1400px) 630px, 45vw"
            alt="Nike Wessel"
            width={942}
            height={1578}
            fetchPriority="high"
            decoding="async"
            className="w-full object-cover ken-burns"
          />
        </motion.div>
      </div>
    </section>
  )
}
