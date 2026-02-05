import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'O mně | Weboffka',
  description: 'Julius Joska - webař, který nemá rád komplikace. Moderní weby bez WordPressu a zbytečné byrokracie.',
}

export default function OMnePage() {
  return (
    <div className="pt-20">
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Avatar */}
            <div className="text-center mb-12">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent to-accent-dark mb-6 flex items-center justify-center text-white text-4xl font-bold">
                JJ
              </div>
              <h1 className="heading-1 mb-2">Ahoj, jsem Julius</h1>
              <p className="text-xl text-muted">Webař, který nemá rád komplikace.</p>
            </div>

            {/* Story */}
            <div className="prose prose-lg max-w-none">
              <p>
                Dělám weby přes 8 let. Začínal jsem v agenturách, kde jsem viděl,
                jak se projekty zbytečně prodlužují a prodražují. Pak jsem zkusil
                freelancing a zjistil, že klienti často narazí na nespolehlivé
                dodavatele.
              </p>

              <p>
                <strong>Weboffka</strong> je můj způsob, jak to dělat jinak.
                Osobní přístup agentury se mi nezamlouval, ale jejich profesionalita ano.
                Flexibilita freelancera je super, ale chyběla mi zodpovědnost.
              </p>

              <p>
                Teď kombinuju to nejlepší z obou světů: jsem jeden člověk,
                se kterým komunikujete přímo, ale pracuji jako profík —
                s jasnými procesy, termíny a férovou cenou.
              </p>

              <h2>Jak pracuji</h2>

              <ul>
                <li>
                  <strong>Moderní technologie</strong> — Používám Next.js, Tailwind CSS
                  a další nástroje, které zajistí rychlý a bezpečný web.
                </li>
                <li>
                  <strong>Čistý kód</strong> — Píšu kód, který se dá snadno udržovat
                  a rozšiřovat. Žádné hacky a dirty fixes.
                </li>
                <li>
                  <strong>Jasná komunikace</strong> — Mluvím česky, ne IT žargonem.
                  Vysvětlím vše srozumitelně.
                </li>
                <li>
                  <strong>Dodržuji termíny</strong> — Když řeknu dva týdny, myslím
                  dva týdny. Ne dva měsíce.
                </li>
              </ul>

              <h2>Proč Weboffka?</h2>

              <p>
                Název vznikl spojením <em>Web</em> + <em>OFF</em>.
                Vypněte starosti s webem a zapněte byznys.
                A to zdvojené <em>ff</em>? To je prostě cool.
              </p>

              <h2>Mimo práci</h2>

              <p>
                Když nedělám weby, tak... no, většinou dělám weby. Ale někdy taky
                hraju hry, čtu sci-fi a experimentuji s novými technologiemi.
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
