'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Globe,
  Rocket,
  ShoppingCart,
  User,
  RefreshCw,
  Wrench,
  Check,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Firemní prezentace',
    description:
      'Moderní web, který reprezentuje vaši firmu na úrovni. Responzivní design, SEO optimalizace a jednoduchá správa obsahu přes CMS.',
    features: [
      'Responzivní design na všechna zařízení',
      'SEO optimalizace pro vyhledávače',
      'Správa obsahu přes CMS',
      'Kontaktní formulář s notifikacemi',
      'Napojení na Google Analytics',
      'SSL certifikát a rychlý hosting',
    ],
  },
  {
    icon: Rocket,
    title: 'Landing pages',
    description:
      'Konverzní stránky navržené tak, aby přeměnily návštěvníky na zákazníky. Rychlé dodání, A/B testování a měření výkonu.',
    features: [
      'Design zaměřený na konverze',
      'A/B testování variant',
      'Rychlé dodání do 7 dní',
      'Napojení na reklamní systémy',
      'Optimalizace rychlosti načítání',
      'Call-to-action elementy',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'E-shopy',
    description:
      'Kompletní online obchod s platebními bránami, správou produktů a objednávek. Integrace se Shopify nebo vlastní řešení.',
    features: [
      'Shopify integrace nebo vlastní řešení',
      'Platební brány (Stripe, GoPay)',
      'Správa produktů a kategorií',
      'Sledování objednávek',
      'Automatické emaily zákazníkům',
      'Napojení na účetní systémy',
    ],
  },
  {
    icon: User,
    title: 'Osobní weby',
    description:
      'Portfolio, blog nebo CV stránka pro kreativce a freelancery. Unikátní design, který vás odliší od konkurence.',
    features: [
      'Unikátní design na míru',
      'Portfolio galerie s filtry',
      'Blog s kategoriemi a tagy',
      'Kontaktní formulář',
      'Sociální sítě integrace',
      'Rychlé načítání a SEO',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Redesign webu',
    description:
      'Váš web vypadá zastarale? Provedeme audit, navrhneme nový design, migrujeme obsah a zrychlíme načítání.',
    features: [
      'Audit stávajícího webu',
      'Nový moderní design',
      'Migrace veškerého obsahu',
      'Zrychlení načítání stránek',
      'Vylepšení SEO a přístupnosti',
      'Zachování stávajícího URL schématu',
    ],
  },
  {
    icon: Wrench,
    title: 'Správa a podpora',
    description:
      'Nemusíte se o nic starat. Postaráme se o hosting, SSL, zálohy, aktualizace a průběžnou SEO optimalizaci.',
    features: [
      'Spolehlivý hosting a SSL',
      'Pravidelné zálohy dat',
      'Aktualizace a bezpečnostní opravy',
      'Průběžná SEO optimalizace',
      'Monitoring dostupnosti 24/7',
      'Prioritní technická podpora',
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

export default function SluzbyPage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="section pt-8 md:pt-12">
        <div className="container text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium mb-4"
          >
            Co pro vás umíme
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-1 mb-6"
          >
            Naše{' '}
            <span className="text-gradient">služby</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            Od jednoduchého osobního webu po komplexní e-shop. Všechno děláme
            na míru, bez šablon a bez WordPressu.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section pt-0">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="card-hover group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                    <service.icon size={28} />
                  </div>
                  <div>
                    <h2 className="heading-3 text-xl md:text-2xl mb-2">
                      {service.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <Check
                        size={16}
                        className="text-accent mt-0.5 shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-glass gradient-border text-center py-16 px-8"
          >
            <h2 className="heading-2 mb-4">
              Nevíte, co přesně potřebujete?
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-8">
              Nevadí. Napište nám a společně vymyslíme, jaký web bude pro
              vás ten pravý. Konzultace je zdarma.
            </p>
            <Link href="/kontakt" className="btn-primary text-lg px-8 py-4">
              Nezávazná konzultace
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
