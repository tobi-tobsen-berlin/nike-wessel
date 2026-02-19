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
            Der Verantwortliche im Sinne der Datenschutz-Grundverordnung und anderer nationaler
            Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher
            Bestimmungen ist die:
          </p>

          <div>
            <p>Studio36 GmbH</p>
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
            <h2 className="font-display text-xl text-black">1. Grundlegendes</h2>
            <p className="mt-3">
              Diese Datenschutzerklärung soll die Nutzer dieser Website über die Art, den Umfang und
              den Zweck der Erhebung und Verwendung personenbezogener Daten durch Studio36 GmbH
              informieren.
            </p>
            <p className="mt-3">
              Studio36 GmbH nimmt Ihren Datenschutz sehr ernst und behandelt Ihre personenbezogenen
              Daten vertraulich und entsprechend der gesetzlichen Vorschriften. Da durch neue
              Technologien und die ständige Weiterentwicklung dieser Webseite Änderungen an dieser
              Datenschutzerklärung vorgenommen werden können, empfehlen wir Ihnen sich die
              Datenschutzerklärung in regelmäßigen Abständen wieder durchzulesen.
            </p>
            <p className="mt-3">
              Definitionen der verwendeten Begriffe (z.B. &quot;personenbezogene Daten&quot; oder
              &quot;Verarbeitung&quot;) finden Sie in Art. 4 DSGVO.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-black">2. Zugriffsdaten</h2>
            <p className="mt-3">
              Wir, Studio36 GmbH, erheben aufgrund unseres berechtigten Interesses (s. Art. 6 Abs. 1
              lit. f. DSGVO) Daten über Zugriffe auf die Website und speichern diese als
              &quot;Server-Logfiles&quot; auf dem Server der Website ab. Folgende Daten werden so
              protokolliert:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Besuchte Website</li>
              <li>Uhrzeit zum Zeitpunkt des Zugriffes</li>
              <li>Menge der gesendeten Daten in Byte</li>
              <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
              <li>Verwendeter Browser</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Verwendete IP-Adresse</li>
            </ul>
            <p className="mt-3">
              Die Server-Logfiles werden für maximal 9 Wochen gespeichert und anschließend gelöscht.
              Nach 7 Tagen werden die IP-Adressen der Aufrufer in den Log-Dateien anonymisiert.
            </p>
            <p className="mt-3">
              Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit der Website
              sicherzustellen. Zudem dienen uns die Daten zur Optimierung der Website und zur
              Sicherstellung der Sicherheit unserer informationstechnischen Systeme. Eine Auswertung
              der Daten zu Marketingzwecken findet in diesem Zusammenhang nicht statt.
            </p>
            <p className="mt-3">
              Die Erfassung der Daten zur Bereitstellung der Website und die Speicherung der Daten
              in Logfiles ist für den Betrieb der Internetseite zwingend erforderlich. Es besteht
              folglich seitens des Nutzers keine Widerspruchsmöglichkeit.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-black">3. Cookies &amp; lokale Speicherung</h2>
            <p className="mt-3">
              Diese Website setzt selbst keine Cookies. Zur Speicherung Ihrer Einwilligung bezüglich
              eingebetteter YouTube-Videos verwenden wir den lokalen Speicher Ihres Browsers
              (localStorage). Darin wird ausschließlich Ihre Entscheidung gespeichert, ob
              YouTube-Inhalte geladen werden dürfen oder nicht. Diese Daten verlassen Ihren Browser
              nicht und werden nicht an uns oder Dritte übermittelt.
            </p>
            <p className="mt-3">
              Wenn Sie der Einbettung von YouTube-Videos zustimmen, können durch YouTube (Google)
              Cookies auf Ihrem Endgerät gesetzt werden. Wir verwenden die datenschutzfreundliche
              Domain youtube-nocookie.com, um die Datenübertragung zu minimieren. Weitere
              Informationen finden Sie in der{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:underline"
              >
                Datenschutzerklärung von Google
              </a>
              .
            </p>
            <p className="mt-3">Sie können Ihre YouTube-Einwilligung jederzeit widerrufen:</p>
            <button onClick={resetConsent} className="btn-pill mt-4">
              {consentReset ? 'Einwilligung zurückgesetzt ✓' : 'YouTube-Einwilligung widerrufen'}
            </button>
          </section>

          <section>
            <h2 className="font-display text-xl text-black">4. YouTube</h2>
            <p className="mt-3">
              Der für die Verarbeitung Verantwortliche hat auf dieser Internetseite Komponenten von
              YouTube integriert. YouTube ist ein Internet-Videoportal, das Video-Publishern das
              kostenlose Einstellen von Videoclips und anderen Nutzern die ebenfalls kostenfreie
              Betrachtung, Bewertung und Kommentierung dieser ermöglicht.
            </p>
            <p className="mt-3">
              Betreibergesellschaft von YouTube ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA
              94066, USA. Die YouTube, LLC ist eine Tochtergesellschaft der Google Inc., 1600
              Amphitheatre Pkwy, Mountain View, CA 94043-1351, USA.
            </p>
            <p className="mt-3">
              Durch jeden Aufruf einer der Einzelseiten dieser Internetseite, auf welcher eine
              YouTube-Komponente (YouTube-Video) integriert wurde, wird der Internetbrowser auf dem
              informationstechnologischen System der betroffenen Person automatisch durch die
              jeweilige YouTube-Komponente veranlasst, eine Darstellung der entsprechenden
              YouTube-Komponente von YouTube herunterzuladen.
            </p>
            <p className="mt-3">
              Sofern die betroffene Person gleichzeitig bei YouTube eingeloggt ist, erkennt YouTube
              mit dem Aufruf einer Unterseite, die ein YouTube-Video enthält, welche konkrete
              Unterseite unserer Internetseite die betroffene Person besucht. Diese Informationen
              werden durch YouTube und Google gesammelt und dem jeweiligen YouTube-Account der
              betroffenen Person zugeordnet.
            </p>
            <p className="mt-3">
              YouTube und Google erhalten über die YouTube-Komponente immer dann eine Information
              darüber, dass die betroffene Person unsere Internetseite besucht hat, wenn die
              betroffene Person zum Zeitpunkt des Aufrufs unserer Internetseite gleichzeitig bei
              YouTube eingeloggt ist; dies findet unabhängig davon statt, ob die betroffene Person
              ein YouTube-Video anklickt oder nicht. Ist eine derartige Übermittlung dieser
              Informationen an YouTube und Google von der betroffenen Person nicht gewollt, kann
              diese die Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf unserer
              Internetseite aus ihrem YouTube-Account ausloggt.
            </p>
            <p className="mt-3">
              Die von YouTube veröffentlichten Datenschutzbestimmungen, die unter{' '}
              <a
                href="https://www.google.de/intl/de/policies/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:underline"
              >
                https://www.google.de/intl/de/policies/privacy/
              </a>{' '}
              abrufbar sind, geben Aufschluss über die Erhebung, Verarbeitung und Nutzung
              personenbezogener Daten durch YouTube und Google.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-black">
              5. Rechtsgrundlagen Datenschutzgrundverordnung
            </h2>
            <p className="mt-3">
              Entsprechend den Vorgaben der Datenschutzgrundverordnung (DSGVO) informieren wir Sie,
              dass die Einwilligungen in den Versand der E-Mailadressen auf Grundlage der Art. 6
              Abs. 1 lit. a, 7 DSGVO sowie § 7 Abs. 2 Nr. 3, bzw. Abs. 3 UWG erfolgt.
            </p>
            <p className="mt-3">
              <strong>
                Wir weisen Sie ferner darauf hin, dass Sie der künftigen Verarbeitung Ihrer
                personenbezogenen Daten entsprechend den gesetzlichen Vorgaben gem. Art. 21 DSGVO
                jederzeit widersprechen können. Der Widerspruch kann insbesondere gegen die
                Verarbeitung für Zwecke der Direktwerbung erfolgen.
              </strong>
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
