'use client'

import Link from 'next/link'
import { Globe, RefreshCw, ShoppingBag, Wrench } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Weby na míru',
    description: 'Landing pages, firemní prezentace, portfolia. Každý projekt je originál.',
    price: 'od 19.900 Kč',
  },
  {
    icon: RefreshCw,
    title: 'Redesign',
    description: 'Modernizace zastaralého webu. Migrace z WordPressu, nový design.',
    price: 'od 29.900 Kč',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Jednoduchý e-shop nebo katalog produktů.',
    price: 'od 49.900 Kč',
  },
  {
    icon: Wrench,
    title: 'Správa',
    description: 'Hosting, aktualizace, drobné úpravy. Vy podnikáte, my se staráme.',
    price: 'od 990 Kč/měs',
  },
]

export function Services() {
  return (
    <section className="section" id="sluzby">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Co děláme</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 border border-border rounded-xl hover:border-accent/50 transition-colors"
            >
              <service.icon className="text-accent mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted mb-4">{service.description}</p>
              <p className="text-accent font-semibold">{service.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/kontakt" className="btn-primary">
            Mám zájem
          </Link>
        </div>
      </div>
    </section>
  )
}
