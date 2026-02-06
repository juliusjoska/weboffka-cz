import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'O nás | Weboffka',
  description: 'Weboffka - webař bez zbytečností. Moderní weby, čistý kód, férové ceny.',
  openGraph: {
    title: 'O nás | Weboffka',
    description: 'Weboffka - webař bez zbytečností. Moderní weby, čistý kód, férové ceny.',
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
                className="h-24 w-auto mx-auto mb-6"
              />
              <h1 className="heading-1 mb-2">Weboffka</h1>
              <p className="text-xl text-muted">Webař bez zbytečností.</p>
            </div>

            {/* Story */}
            <div className="prose prose-lg prose-invert prose-headings:text-foreground prose-p:text-muted prose-li:text-muted prose-a:text-accent prose-strong:text-foreground max-w-none">
              <p>
                Jsem webař, který dělá weby na míru. Žádná velká agentura,
                žádná byrokracie — prostě člověk, co umí web a chce ho udělat dobře.
              </p>

              <p>
                <strong>Weboffka</strong> vznikla z frustrace. Viděl jsem, jak agentury
                natahují projekty a freelanceři mizí uprostřed práce. Tak jsem to
                začal dělat jinak.
              </p>

              <p>
                Komunikujete přímo se mnou, ne s account managerem.
                Osobní přístup, profesionální výsledek.
              </p>

              <h2>Jak pracuju</h2>

              <ul>
                <li>
                  <strong>Moderní technologie</strong> — Používám Next.js, React, Tailwind CSS
                  a další nástroje, které zajistí rychlý a bezpečný web.
                </li>
                <li>
                  <strong>Čistý kód</strong> — Píšu kód, který se dá snadno udržovat
                  a rozšiřovat. Žádné hacky a dirty fixes.
                </li>
                <li>
                  <strong>Přímá komunikace</strong> — Mluvím česky, ne IT žargonem.
                  Vysvětlím vše srozumitelně.
                </li>
                <li>
                  <strong>Dodržuju termíny</strong> — Když řeknu dva týdny, myslím
                  dva týdny. Ne dva měsíce.
                </li>
              </ul>

              <h2>Proč Weboffka?</h2>

              <p>
                Název vznikl spojením <em>Web</em> + <em>OFF</em>.
                Vypněte starosti s webem a zapněte byznys.
                A to zdvojené <em>ff</em>? To prostě vypadá dobře.
              </p>

              <h2>Co dělám</h2>

              <p>
                Specializuju se na weby pro malé a střední firmy, OSVČ a startupy.
                Landing pages, firemní prezentace, e-shopy — všechno na míru,
                žádné šablony.
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
