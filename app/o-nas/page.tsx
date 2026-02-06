import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'O nás | Weboffka',
  description: 'Weboffka - malé webové studio bez zbytečností. Moderní weby, čistý kód, férové ceny.',
  openGraph: {
    title: 'O nás | Weboffka',
    description: 'Weboffka - malé webové studio bez zbytečností. Moderní weby, čistý kód, férové ceny.',
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
              <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-accent to-accent-dark mb-6 flex items-center justify-center text-white text-3xl font-bold tracking-tight">
                we<span className="opacity-80">ff</span>
              </div>
              <h1 className="heading-1 mb-2">Weboffka</h1>
              <p className="text-xl text-muted">Webové studio bez zbytečností.</p>
            </div>

            {/* Story */}
            <div className="prose prose-lg prose-invert prose-headings:text-foreground prose-p:text-muted prose-li:text-muted prose-a:text-accent prose-strong:text-foreground max-w-none">
              <p>
                Jsme malý tým, který dělá weby na míru. Žádná velká agentura,
                žádná byrokracie — prostě lidi, co umí web a chtějí ho udělat dobře.
              </p>

              <p>
                <strong>Weboffka</strong> vznikla z frustrace. Viděli jsme, jak agentury
                natahují projekty a freelanceři mizí uprostřed práce. Tak jsme to
                začali dělat jinak.
              </p>

              <p>
                Kombinujeme to nejlepší z obou světů: osobní přístup freelancera
                a profesionalitu studia. Komunikujete přímo s námi, ne s account managerem.
              </p>

              <h2>Jak pracujeme</h2>

              <ul>
                <li>
                  <strong>Moderní technologie</strong> — Používáme Next.js, React, Tailwind CSS
                  a další nástroje, které zajistí rychlý a bezpečný web.
                </li>
                <li>
                  <strong>Čistý kód</strong> — Píšeme kód, který se dá snadno udržovat
                  a rozšiřovat. Žádné hacky a dirty fixes.
                </li>
                <li>
                  <strong>Přímá komunikace</strong> — Mluvíme česky, ne IT žargonem.
                  Vysvětlíme vše srozumitelně.
                </li>
                <li>
                  <strong>Dodržujeme termíny</strong> — Když řekneme dva týdny, myslíme
                  dva týdny. Ne dva měsíce.
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
                Specializujeme se na weby pro malé a střední firmy, OSVČ a startupy.
                Landing pages, firemní prezentace, e-shopy — všechno na míru,
                žádné šablony.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Link href="/kontakt" className="btn-primary text-lg px-8">
                Pojďme spolupracovat
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
