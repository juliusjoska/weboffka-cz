import { Metadata } from 'next'
import Link from 'next/link'
import { Globe, RefreshCw, ShoppingBag, Wrench, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Služby | Weboffka',
  description: 'Webové stránky na míru, redesign, e-commerce a správa webů. Kompletní webové služby od návrhu po spuštění.',
  openGraph: {
    title: 'Služby | Weboffka',
    description: 'Webové stránky na míru, redesign, e-commerce a správa webů. Kompletní webové služby od návrhu po spuštění.',
    url: 'https://weboffka.cz/sluzby',
  },
}

const services = [
  {
    icon: Globe,
    title: 'Weby na míru',
    description: 'Originální webové stránky bez šablon. Každý projekt je unikátní.',
    features: [
      'Landing pages pro kampaně',
      'Firemní prezentace',
      'Portfolio a osobní weby',
      'Produktové stránky',
    ],
    price: 'od 19.900 Kč',
  },
  {
    icon: RefreshCw,
    title: 'Redesign',
    description: 'Modernizace zastaralého webu. Nový vzhled, lepší výkon.',
    features: [
      'Analýza současného stavu',
      'Nový moderní design',
      'Migrace z WordPressu',
      'SEO optimalizace',
    ],
    price: 'od 29.900 Kč',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce light',
    description: 'Jednoduchý e-shop nebo katalog produktů.',
    features: [
      'Katalog produktů',
      'Shopify integrace',
      'Platební brány',
      'Správa objednávek',
    ],
    price: 'od 49.900 Kč',
  },
  {
    icon: Wrench,
    title: 'Správa & podpora',
    description: 'Starost o web přenechte mně.',
    features: [
      'Hosting a SSL',
      'Pravidelné aktualizace',
      'Drobné úpravy obsahu',
      'Analytika a reporting',
    ],
    price: 'od 990 Kč/měsíc',
  },
]

export default function SluzbyPage() {
  return (
    <div className="pt-20">
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="heading-1 mb-4">Služby</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Kompletní webové služby od návrhu po spuštění a správu.
            </p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                    <service.icon className="text-accent" size={32} />
                  </div>
                  <h2 className="heading-3 mb-2">{service.title}</h2>
                  <p className="text-muted mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-accent mb-4">{service.price}</p>
                  <Link href="/kontakt" className="btn-primary">
                    Mám zájem
                  </Link>
                </div>

                <div className={`p-6 bg-background-secondary rounded-xl border border-border ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="font-semibold mb-4">Co zahrnuje:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="text-green-500 flex-shrink-0" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent/10 border-t border-border">
        <div className="container text-center">
          <h2 className="heading-2 mb-4">Nevíte, co potřebujete?</h2>
          <p className="text-muted mb-8">
            Napište mi a probereme to. Poradím nezávazně a zdarma.
          </p>
          <Link href="/kontakt" className="btn-primary">
            Domluvit konzultaci
          </Link>
        </div>
      </section>
    </div>
  )
}
