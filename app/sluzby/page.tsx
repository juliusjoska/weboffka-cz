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
  Phone,
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
      <section className="w-section-sm pt-8 md:pt-12">
        <div className="w-container text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-label mb-4"
          >
            Služby
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-heading mb-6"
          >
            Co pro vás můžeme udělat
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-text-secondary max-w-2xl mx-auto"
          >
            Od jednoduchého osobního webu po komplexní e-shop. Všechno děláme
            na míru, bez šablon a bez WordPressu.
          </motion.p>
        </div>
      </section>

      {/* Services — alternating layout */}
      <section className="w-section pt-0">
        <div className="w-container space-y-12">
          {/* Row 1: 2 columns */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.slice(0, 2).map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="w-card-interactive"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-lime-dim text-lime shrink-0">
                    <service.icon size={28} />
                  </div>
                  <div>
                    <h2 className="w-subheading mb-2">{service.title}</h2>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <Check size={16} className="text-lime mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Row 2: full-width E-shopy */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            className="w-card-interactive"
          >
            <div className="flex items-start gap-5 mb-6">
              <div className="p-3 rounded-xl bg-lime-dim text-lime shrink-0">
                <ShoppingCart size={28} />
              </div>
              <div>
                <h2 className="w-subheading mb-2">{services[2].title}</h2>
                <p className="text-text-secondary text-body-lg max-w-2xl">
                  {services[2].description}
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {services[2].features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <Check size={16} className="text-lime mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Row 3: asymmetric — Osobní weby (wider) + Redesign */}
          <div className="grid md:grid-cols-5 gap-8">
            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              className="w-card-interactive md:col-span-3"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-lime-dim text-lime shrink-0">
                  <User size={28} />
                </div>
                <div>
                  <h2 className="w-subheading mb-2">{services[3].title}</h2>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {services[3].description}
                  </p>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services[3].features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <Check size={16} className="text-lime mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              className="w-card-interactive md:col-span-2"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-lime-dim text-lime shrink-0">
                  <RefreshCw size={28} />
                </div>
                <div>
                  <h2 className="w-subheading mb-2">{services[4].title}</h2>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {services[4].description}
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {services[4].features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <Check size={16} className="text-lime mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Row 4: full-width Správa a podpora */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            className="w-card-interactive"
          >
            <div className="flex items-start gap-5 mb-6">
              <div className="p-3 rounded-xl bg-lime-dim text-lime shrink-0">
                <Wrench size={28} />
              </div>
              <div>
                <h2 className="w-subheading mb-2">{services[5].title}</h2>
                <p className="text-text-secondary text-body-lg max-w-2xl">
                  {services[5].description}
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {services[5].features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <Check size={16} className="text-lime mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-section">
        <div className="w-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-card-glass text-center py-16 px-8 relative overflow-hidden"
          >
            <div className="w-mesh-gradient absolute inset-0" />
            <div className="relative z-10">
              <h2 className="w-heading mb-4">Máte zájem?</h2>
              <p className="text-text-secondary text-body-lg max-w-xl mx-auto mb-4">
                Napište nám a společně vymyslíme, jaký web bude pro vás ten
                pravý. Konzultace je zdarma.
              </p>
              <p className="text-text-secondary text-sm mb-8 flex items-center justify-center gap-2">
                <Phone size={16} className="text-lime" />
                <a href="tel:+420731860594" className="hover:text-lime transition-colors">
                  +420 731 860 594
                </a>
              </p>
              <Link href="/kontakt" className="w-btn-primary">
                Nezávazná konzultace
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
