import { motion, AnimatePresence } from 'framer-motion'
import { useYouTubeConsent } from '../hooks/useYouTubeConsent'

export default function CookieBanner() {
  const { consent, accept, decline } = useYouTubeConsent()

  return (
    <AnimatePresence>
      {consent === null && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-[100] bg-black px-6 py-6 text-white"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-white/80">
              Diese Website nutzt YouTube, um Videos einzubetten. Dabei können Cookies gesetzt
              werden.{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-pink"
              >
                YouTube-Datenschutz
              </a>
            </p>

            <div className="flex shrink-0 gap-3">
              <button onClick={decline} className="btn-pill-outline">
                Ablehnen
              </button>
              <button onClick={accept} className="btn-pill">
                Akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
