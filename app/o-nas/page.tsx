import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'O nás | Weboffka',
  description: 'Weboffka - fullstack development bez zbytečností. Weby, aplikace, čistý kód, férové ceny.',
  openGraph: {
    title: 'O nás | Weboffka',
    description: 'Weboffka - fullstack development bez zbytečností. Weby, aplikace, čistý kód, férové ceny.',
    url: 'https://weboffka.cz/o-nas',
  },
}

export default function ONasPage() {
  return (
    <div className="pt-20">
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Logo */}
            <div className="text-center mb-12">
              <Image
                src="/logo.png"
                alt="Weboffka"
                width={320}
                height={90}
                className="h-28 w-auto mx-auto mb-6"
              />
              <h1 className="heading-1 mb-2">Weboffka</h1>
              <p className="text-xl text-muted">Fullstack development bez zbytečností.</p>
            </div>

            {/* Story */}
            <div className="prose prose-lg prose-invert prose-headings:text-foreground prose-p:text-muted prose-li:text-muted prose-a:text-accent prose-strong:text-foreground max-w-none">
              <p>
                Za Weboffkou stojí fullstack developer s více než 8 lety zkušeností.
                Žádná velká agentura, žádná byrokracie — prostě kvalitní vývoj
                od člověka, který rozumí celému stacku.
              </p>

              <p>
                <strong>Weboffka</strong> vznikla z frustrace. Agentury natahují projekty,
                freelanceři mizí uprostřed práce. Tady se to dělá jinak.
              </p>

              <p>
                Komunikujete přímo s vývojářem, ne s account managerem.
                Osobní přístup, profesionální výsledek.
              </p>

              <h2>Jak pracujeme</h2>

              <ul>
                <li>
                  <strong>Moderní technologie</strong> — Next.js, React, Flutter, Tailwind CSS,
                  Supabase a další nástroje, které zajistí rychlý a bezpečný výsledek.
                </li>
                <li>
                  <strong>Čistý kód</strong> — Kód, který se dá snadno udržovat
                  a rozšiřovat. Žádné hacky a dirty fixes.
                </li>
                <li>
                  <strong>Přímá komunikace</strong> — Česky, ne IT žargonem.
                  Všechno srozumitelně a na rovinu.
                </li>
                <li>
                  <strong>Dodržené termíny</strong> — Když řekneme dva týdny,
                  jsou to dva týdny. Ne dva měsíce.
                </li>
              </ul>

              <h2>Proč Weboffka?</h2>

              <p>
                Název vznikl spojením <em>Web</em> + <em>OFF</em>.
                Vypněte starosti s webem a zapněte byznys.
                A to zdvojené <em>ff</em>? To prostě vypadá dobře.
              </p>

              <h2>Co děláme</h2>

              <p>
                Weby, webové aplikace, mobilní appky. Pro malé a střední firmy,
                OSVČ a startupy. Všechno na míru, žádné šablony.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Link href="/kontakt" className="btn-primary text-lg px-8">
                Pojďme na to
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
