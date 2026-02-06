'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe, RefreshCw, ShoppingBag, Wrench, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Weby na míru',
    description: 'Landing pages, firemní prezentace, portfolia. Každý web je originál, žádné šablony.',
    price: 'od 19.900 Kč',
    features: ['Responzivní design', 'SEO optimalizace', 'Rychlé načítání'],
  },
  {
    icon: RefreshCw,
    title: 'Redesign',
    description: 'Modernizace zastaralého webu. Migrace z WordPressu na moderní stack.',
    price: 'od 29.900 Kč',
    features: ['Analýza současného stavu', 'Moderní technologie', 'Zachování SEO'],
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Jednoduchý e-shop nebo katalog produktů. Napojení na platební brány.',
    price: 'od 49.900 Kč',
    features: ['Platební brány', 'Správa produktů', 'Automatizace'],
  },
  {
    icon: Wrench,
    title: 'Správa & podpora',
    description: 'Hosting, aktualizace, úpravy, analytika. Vy podnikáte, my se staráme o web.',
    price: 'od 990 Kč/měsíc',
    features: ['24/7 monitoring', 'Pravidelné zálohy', 'Rychlá podpora'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export function Services() {
  return (
    <section className="py-32 relative overflow-hidden" id="sluzby">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial-bottom" />

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-secondary mb-6">
            Naše služby
          </span>
          <h2 className="heading-lg mb-4">
            <span className="text-gradient-subtle">Co pro vás</span>{' '}
            <span className="text-gradient">můžeme udělat</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Kompletní webové služby od návrhu po spuštění a správu.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#c8ff00]/0 to-[#c8ff00]/0 group-hover:from-[#c8ff00]/20 group-hover:to-[#9fcc00]/20 rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

              <div className="relative card group-hover:border-[#c8ff00]/30 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c8ff00]/10 flex items-center justify-center group-hover:bg-[#c8ff00]/20 transition-colors">
                    <service.icon className="text-[#c8ff00]" size={24} />
                  </div>
                  <ArrowUpRight
                    className="text-secondary opacity-0 group-hover:opacity-100 group-hover:text-[#c8ff00] transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    size={20}
                  />
                </div>

                <h3 className="font-semibold text-xl mb-2 group-hover:text-gradient transition-all">
                  {service.title}
                </h3>
                <p className="text-secondary mb-4">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-1 rounded-full bg-white/5 text-secondary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5">
                  <p className="font-bold text-lg text-gradient">{service.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/sluzby" className="btn-secondary text-lg px-8 py-4 group">
            Všechny služby
            <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
