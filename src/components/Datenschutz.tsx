import { useState } from 'react'
import Header from './Header'

const base = import.meta.env.BASE_URL

export default function Datenschutz() {
  const [consentReset, setConsentReset] = useState(false)

  const resetConsent = () => {
    localStorage.removeItem('yt-consent')
    setConsentReset(true)
    setTimeout(() => setConsentReset(false), 3000)
  }
  return (
    <div className="min-h-screen bg-white">
      <Header isSubpage />

      <main className="mx-auto max-w-[1400px] px-6 pt-32 pb-20 lg:px-10 lg:pt-40 lg:pb-32">
        <h1 className="font-display text-[clamp(2.5rem,6vw,64px)] text-black">Datenschutz</h1>

        <div className="legal-content mt-12 space-y-8 text-[15px] leading-[1.8] text-black/80">
          <p>
            Der Verantwortliche im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer
            nationaler Datenschutzgesetze der Mitgliedstaaten sowie sonstiger datenschutzrechtlicher
            Bestimmungen ist:
          </p>

          <div>
            <p>
              <strong>Studio36 GmbH</strong>
            </p>
            <p>Oranienstraße 183</p>
            <p>D-10999 Berlin</p>
            <p className="mt-2">
              Tel{' '}
              <a href="tel:+493061623610" className="text-pink hover:underline">
                +49 30 61623610
              </a>
            </p>
            <p>Fax +49 30 84859200</p>
            <p>
              E-Mail{' '}
              <a href="mailto:info@studio36.berlin" className="text-pink hover:underline">
                info@studio36.berlin
              </a>
            </p>
            <p>
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

          <section>
            <h2 className="font-display text-xl text-black">1. Allgemeine Hinweise</h2>
            <p className="mt-3">
              Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen.
              Personenbezogene Daten werden auf dieser Website nur im notwendigen Umfang und
              entsprechend den gesetzlichen Vorschriften verarbeitet.
            </p>
            <p className="mt-3">
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden
              können. Die rechtlichen Grundlagen des Datenschutzes finden sich insbesondere in der
              Datenschutz-Grundverordnung (DSGVO).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-black">2. Zugriffsdaten (Server-Logfiles)</h2>
            <p className="mt-3">
              Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch Informationen
              erfasst und in sogenannten Server-Logfiles gespeichert. Dies erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen
              Betrieb der Website).
            </p>

            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Besuchte Website</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Menge der gesendeten Daten</li>
              <li>Referrer-URL</li>
              <li>Verwendeter Browser</li>
              <li>Verwendetes Betriebssystem</li>
              <li>IP-Adresse</li>
            </ul>

            <p className="mt-3">
              Die IP-Adressen werden nach spätestens 7 Tagen anonymisiert. Die vollständigen
              Logfiles werden spätestens nach 9 Wochen gelöscht.
            </p>

            <p className="mt-3">
              Die Verarbeitung erfolgt ausschließlich zur Gewährleistung der Funktionsfähigkeit,
              Sicherheit und Optimierung der Website. Eine Zusammenführung mit anderen Datenquellen
              findet nicht statt.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-black">3. Cookies und lokale Speicherung</h2>
            <p className="mt-3">Diese Website setzt selbst keine Cookies.</p>
            <p className="mt-3">
              Zur Speicherung Ihrer Entscheidung über die Aktivierung von YouTube-Videos wird der
              lokale Speicher Ihres Browsers (localStorage) verwendet. Dabei wird ausschließlich
              gespeichert, ob Sie der Anzeige von YouTube-Inhalten zugestimmt haben. Diese
              Information verbleibt in Ihrem Browser und wird nicht an uns übermittelt.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-black">4. YouTube</h2>
            <p className="mt-3">
              Auf dieser Website sind Videos der Plattform YouTube eingebunden. Anbieter ist Google
              Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>

            <p className="mt-3">
              Die Einbindung erfolgt im erweiterten Datenschutzmodus („youtube-nocookie.com“). Eine
              Verbindung zu YouTube wird erst hergestellt, wenn Sie der Anzeige des Videos
              ausdrücklich zustimmen. Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit.
              a DSGVO.
            </p>

            <p className="mt-3">
              Nach Aktivierung des Videos können personenbezogene Daten (z.B. IP-Adresse) an Server
              von Google übermittelt werden. Dabei kann auch eine Übertragung in die USA erfolgen.
              Google stützt sich hierbei auf die EU-Standardvertragsklauseln gemäß Art. 46 DSGVO.
            </p>

            <p className="mt-3">
              Wenn Sie in Ihrem YouTube-Account eingeloggt sind, kann YouTube Ihr Surfverhalten
              Ihrem persönlichen Profil zuordnen. Weitere Informationen zur Datenverarbeitung finden
              Sie unter:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:underline"
              >
                https://policies.google.com/privacy
              </a>
            </p>

            <p className="mt-3">
              Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>

            <button onClick={resetConsent} className="btn-pill mt-4">
              {consentReset ? 'Einwilligung zurückgesetzt ✓' : 'Einwilligung widerrufen'}
            </button>
          </section>

          <section>
            <h2 className="font-display text-xl text-black">5. Betroffenenrechte</h2>
            <p className="mt-3">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:
            </p>

            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>

            <p className="mt-3">
              Erteilte Einwilligungen können jederzeit mit Wirkung für die Zukunft widerrufen
              werden.
            </p>

            <button onClick={resetConsent} className="btn-pill mt-4">
              {consentReset ? 'Einwilligung zurückgesetzt ✓' : 'Einwilligung widerrufen'}
            </button>

            <p className="mt-3">
              Zudem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
            </p>
          </section>
        </div>
      </main>

      <footer className="bg-black">
        <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-10 lg:py-16">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex gap-6">
              <a
                href={`${base}impressum`}
                className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/65 transition-colors hover:text-pink"
              >
                Impressum
              </a>
              <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/65">
                Datenschutz
              </span>
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
