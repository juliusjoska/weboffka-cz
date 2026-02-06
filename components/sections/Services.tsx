'use client'

import Link from 'next/link'
import { Globe, RefreshCw, ShoppingBag, Wrench } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Weby na míru',
    description: 'Landing pages, firemní prezentace, portfolia. Každý web je originál, žádné šablony.',
    price: 'od 19.900 Kč',
  },
  {
    icon: RefreshCw,
    title: 'Redesign',
    description: 'Modernizace zastaralého webu. Migrace z WordPressu na moderní stack.',
    price: 'od 29.900 Kč',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Jednoduchý e-shop nebo katalog produktů. Napojení na platební brány.',
    price: 'od 49.900 Kč',
  },
  {
    icon: Wrench,
    title: 'Správa & podpora',
    description: 'Hosting, aktualizace, úpravy, analytika. Vy podnikáte, Weboffka se stará o web.',
    price: 'od 990 Kč/měsíc',
  },
]

export function Services() {
  return (
    <section className="section bg-background-secondary" id="sluzby">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Služby</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Kompletní webové služby od návrhu po spuštění a správu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-background rounded-xl border border-border hover:border-accent/50 transition-colors"
            >
              <service.icon className="text-accent mb-4" size={28} />
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-muted mb-4">{service.description}</p>
              <p className="font-semibold text-accent">{service.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/sluzby" className="btn-outline">
            Více o službách
          </Link>
        </div>
      </div>
    </section>
  )
}
