'use client'

import { motion } from 'framer-motion'
import { Globe, RefreshCw, ShoppingBag, Wrench } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Weby na míru',
    description: 'Landing pages, firemní prezentace, portfolio. Každý web je originál, žádné šablony.',
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
    title: 'E-commerce light',
    description: 'Jednoduchý e-shop nebo katalog produktů. Napojení na Shopify nebo vlastní řešení.',
    price: 'od 49.900 Kč',
  },
  {
    icon: Wrench,
    title: 'Správa & podpora',
    description: 'Hosting, aktualizace, úpravy, analytika. Vy podnikáte, já se starám o web.',
    price: 'od 990 Kč/měsíc',
  },
]

export function Services() {
  return (
    <section className="section" id="sluzby">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2">Co pro vás udělám</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="p-6 bg-white rounded-xl border border-border hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <service.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-muted mb-4">{service.description}</p>
              <p className="font-semibold text-accent">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
