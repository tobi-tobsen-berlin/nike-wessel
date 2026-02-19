import Header from './Header'

const base = import.meta.env.BASE_URL

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <Header isSubpage />

      <main className="mx-auto max-w-[1400px] px-6 pt-32 pb-20 lg:px-10 lg:pt-40 lg:pb-32">
        <h1 className="font-display text-[clamp(2.5rem,6vw,64px)] text-black">Impressum</h1>

        <div className="legal-content mt-12 space-y-6 text-[15px] leading-[1.8] text-black/80">
          <div>
            <p>Studio36 GmbH</p>
            <p>Oranienstraße 183</p>
            <p>D-10999 Berlin</p>
          </div>

          <div>
            <p>
              Tel{' '}
              <a href="tel:+493061623610" className="text-pink hover:underline">
                +49 30 61623-610
              </a>
            </p>
            <p>Fax +49 30 84859-200</p>
            <p>
              E-Mail{' '}
              <a href="mailto:info@studio36.berlin" className="text-pink hover:underline">
                info@studio36.berlin
              </a>
            </p>
            <p>
              <a
                href="https://www.studio36.berlin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:underline"
              >
                www.studio36.berlin
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-black">Geschäftsführerin</h2>
            <p>Nike Wessel</p>
          </div>

          <div>
            <p>
              Registernummer | Registergericht:
              <br />
              HRB 157867 B | Amtsgericht Charlottenburg
            </p>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              DE 296128313
            </p>
            <p>
              Inhaltlich Verantwortliche gemäß § 6 MDStV:
              <br />
              siehe Geschäftsführerin
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-black">Herstellung</h2>
            <p>
              Design &amp; Grafik:{' '}
              <a
                href="https://studio36.berlin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:underline"
              >
                studio36.berlin
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-black">Haftungshinweis</h2>
            <p>
              Die Benutzung von Texten, Fotos und Videos dieser Internetpräsentation sowie der
              Nachdruck – auch auszugsweise – ist nicht gestattet. Die Rechte für alle Fotos und
              Videos verbleiben ausschließlich bei Nike Wessel. Eine kommerzielle Nutzung der Fotos
              und Videos ist nur gestattet, wenn dies gesondert vereinbart wurde. Mit Urteil vom 12.
              Mai 1998 – 312 O 85/98 – „Haftung für Links" hat das Landgericht Hamburg entschieden,
              dass man durch die Anbringung eines Links, die Inhalte der gelinkten Seite ggf. mit zu
              verantworten hat. Dies kann – laut Aussage des Landgerichtes – nur dadurch verhindert
              werden, dass man sich ausdrücklich von diesen Inhalten distanziert.
            </p>
            <p>
              Hiermit erklären wir ausdrücklich, dass wir keinerlei Einfluss auf die Gestaltung und
              die Inhalte der gelinkten Seiten haben. Deshalb distanzieren wir uns hiermit
              ausdrücklich von allen Inhalten aller gelinkten Seiten und machen uns diese Inhalte
              nicht zu Eigen. Steuernummer: 29/225/01779, Amtsgericht Kreuzberg
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-black">Copyright</h2>
            <p>
              Inhalt und Struktur dieser Internet-Seite sind urheberrechtlich geschützt. Die
              Vervielfältigung, Verbreitung, Veröffentlichung, Bearbeitung oder Bereitstellung für
              Dritte bedarf der ausdrücklichen vorherigen schriftlichen Zustimmung. Dies gilt
              insbesondere für Texte, Fotos, Grafiken und Designelemente.
            </p>
            <p>
              Sollte sich auf unserer Homepage versehentlich ein Objekt befinden, das gegen ein
              Copyright verstößt, bitten wir um Benachrichtigung.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-black">
        <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-10 lg:py-16">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex gap-6">
              <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/65">
                Impressum
              </span>
              <a
                href={`${base}datenschutz`}
                className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/65 transition-colors hover:text-pink"
              >
                Datenschutz
              </a>
            </div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/65">
              &copy; {new Date().getFullYear()} Nike Wessel · Studio36 GmbH
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
