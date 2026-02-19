const base = import.meta.env.BASE_URL

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/65">
            Nike Wessel ·{' '}
            <a
              href="https://studio36.berlin"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-pink"
            >
              Studio36 GmbH
            </a>
          </p>

          <div className="flex items-center gap-4">
            <a
              href={`${base}impressum`}
              className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/65 transition-colors hover:text-pink"
            >
              Impressum
            </a>
            <span className="text-white/20">·</span>
            <a
              href={`${base}datenschutz`}
              className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/65 transition-colors hover:text-pink"
            >
              Datenschutz
            </a>
            <span className="text-white/20">·</span>
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/65">
              &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>

      <div className="h-10 lg:h-20" />
    </footer>
  )
}
