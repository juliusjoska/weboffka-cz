'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Globe, RefreshCw, ShoppingBag, Wrench } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Weby na míru',
    description: 'Originální webové stránky bez šablon. Každý projekt je unikátní.',
    features: ['Landing pages', 'Firemní prezentace', 'Portfolia'],
    price: 'od 19.900 Kč',
    featured: true,
  },
  {
    icon: RefreshCw,
    title: 'Redesign',
    description: 'Modernizace zastaralého webu. Nový vzhled, lepší výkon.',
    features: ['Analýza stavu', 'Nový design', 'SEO optimalizace'],
    price: 'od 29.900 Kč',
    featured: false,
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Jednoduchý e-shop nebo katalog produktů.',
    features: ['Katalog produktů', 'Platební brány', 'Správa objednávek'],
    price: 'od 49.900 Kč',
    featured: false,
  },
  {
    icon: Wrench,
    title: 'Správa & podpora',
    description: 'Starost o web přenechte nám.',
    features: ['Hosting a SSL', 'Aktualizace', 'Drobné úpravy'],
    price: 'od 990 Kč/měsíc',
    featured: false,
  },
]

export function Services() {
  return (
    <section className="section" id="sluzby">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Služby
          </span>
          <h2 className="heading-2 mb-4">Co děláme</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Kompletní webové služby od návrhu po spuštění a správu.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group glass-card-accent p-6 hover:border-accent/50 transition-all duration-300 ${
                service.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors ${
                service.featured ? 'w-16 h-16' : ''
              }`}>
                <service.icon className="text-accent" size={service.featured ? 32 : 24} />
              </div>

              {/* Content */}
              <h3 className={`font-heading font-bold mb-2 ${service.featured ? 'text-2xl' : 'text-lg'}`}>
                {service.title}
              </h3>
              <p className={`text-muted mb-4 ${service.featured ? 'text-base' : 'text-sm'}`}>
                {service.description}
              </p>

              {/* Features */}
              <ul className={`space-y-2 mb-6 ${service.featured ? '' : 'text-sm'}`}>
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-muted">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="mt-auto">
                <div className={`font-heading font-bold text-accent mb-4 ${service.featured ? 'text-2xl' : 'text-xl'}`}>
                  {service.price}
                </div>
                <Link
                  href="/kontakt"
                  className={`btn w-full justify-center ${
                    service.featured
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  Mám zájem
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
