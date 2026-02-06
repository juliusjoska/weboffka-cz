import { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ceník | Weboffka',
  description: 'Transparentní ceny webových stránek. Bez skrytých poplatků.',
  openGraph: {
    title: 'Ceník | Weboffka',
    description: 'Transparentní ceny webových stránek. Bez skrytých poplatků.',
    url: 'https://weboffka.cz/cenik',
  },
}

const plans = [
  {
    name: 'Start',
    price: '19.900',
    description: 'One-page vizitka',
    features: [
      'One-page web',
      'Responzivní design',
      'Kontaktní formulář',
      'SEO základ',
      '1 revizní kolo',
      'Dodání do 2 týdnů',
    ],
    notIncluded: ['Blog', 'CMS', 'E-commerce'],
    popular: false,
  },
  {
    name: 'Business',
    price: '39.900',
    description: 'Plná prezentace',
    features: [
      'Multi-page web (5+ stránek)',
      'Vše ze Start',
      'Pokročilé animace',
      'Blog sekce (volitelně)',
      '2 revizní kola',
      'Dodání do 3 týdnů',
    ],
    notIncluded: ['E-commerce', 'Rezervační systém'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '69.900',
    description: 'Komplexní řešení',
    features: [
      'Komplexní web',
      'Vše z Business',
      'E-commerce light / rezervace',
      'CMS pro správu obsahu',
      '3 revizní kola',
      'Prioritní podpora',
      'Dodání do 4 týdnů',
    ],
    notIncluded: [],
    popular: false,
  },
]

const faqs = [
  {
    q: 'Jak dlouho trvá vytvoření webu?',
    a: 'Standardně 2–4 týdny podle rozsahu. One-page web zvládnu i rychleji, pokud je potřeba.',
  },
  {
    q: 'Co potřebujete od nás?',
    a: 'Texty, fotky, logo (pokud máte). Pokud nemáte, pomůžeme s copywritingem nebo doporučíme specialistu na fotky/grafiku.',
  },
  {
    q: 'Mohu si web později upravovat sám?',
    a: 'Ano, pokud chcete. Pro jednodušší úpravy nastavíme CMS. Nebo to děláme za vás v rámci měsíční správy.',
  },
  {
    q: 'Co hosting a doména?',
    a: 'Hosting je v ceně měsíční správy (od 990 Kč/měsíc). Doménu si registrujete sami (doporučíme kde), pomůžeme s nastavením.',
  },
  {
    q: 'Jak probíhá platba?',
    a: '50% záloha před zahájením, 50% po dokončení. Faktura, platba převodem.',
  },
  {
    q: 'Co když nebudeme spokojeni?',
    a: 'Revizní kola jsou v ceně. Pokud ani po nich nebudete spokojeni, vrátíme zálohu.',
  },
]

export default function CenikPage() {
  return (
    <div className="pt-20">
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="heading-1 mb-4">Ceník</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Férové ceny, žádná překvapení. Víte přesně, co dostanete.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`p-6 rounded-xl border-2 ${
                  plan.popular
                    ? 'border-accent bg-accent/5'
                    : 'border-border bg-background-secondary'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent text-background rounded-full">
                      Nejoblíbenější
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h2 className="font-bold text-xl mb-1">{plan.name}</h2>
                  <p className="text-muted text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold">
                    {plan.price}
                    <span className="text-base font-normal text-muted"> Kč</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/kontakt"
                  className={`btn w-full justify-center ${
                    plan.popular ? 'btn-primary' : 'btn-outline'
                  }`}
                >
                  Mám zájem
                </Link>
              </div>
            ))}
          </div>

          {/* Monthly management */}
          <div className="max-w-3xl mx-auto p-8 bg-background-secondary rounded-xl border border-border mb-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="font-bold text-xl mb-2">Měsíční správa</h3>
                <p className="text-muted">
                  Hosting, aktualizace, drobné úpravy, analytika
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">
                  od 990 <span className="text-base font-normal text-muted">Kč/měsíc</span>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-center mb-8">Časté otázky</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="p-6 bg-background-secondary rounded-xl border border-border">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent/10 border-t border-border">
        <div className="container text-center">
          <h2 className="heading-2 mb-4">Máte konkrétní požadavky?</h2>
          <p className="text-muted mb-8">
            Napište mi a dostanete přesnou nabídku na míru.
          </p>
          <Link href="/kontakt" className="btn-primary">
            Získat nabídku
          </Link>
        </div>
      </section>
    </div>
  )
}
