'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const plans = [
  {
    name: 'Vizitka',
    price: '14 900',
    description: 'Ideální pro živnostníky a malé firmy, které potřebují jednoduchou online prezentaci.',
    delivery: 'Do 2 týdnů',
    features: [
      'Jednostránkový web',
      'Responzivní design',
      'Kontaktní formulář',
      'SEO základ',
      'SSL certifikát',
      'Hosting na 1 rok zdarma',
    ],
    highlighted: false,
  },
  {
    name: 'Business',
    price: '39 900',
    description: 'Pro firmy, které chtějí profesionální web s blogem, analytikou a plnou SEO optimalizací.',
    delivery: 'Do 4 týdnů',
    features: [
      'Vícestránkový web (až 10 stran)',
      'Responzivní design na míru',
      'Blog s administrací',
      'Pokročilá SEO optimalizace',
      'Google Analytics a Search Console',
      'Kontaktní formulář s notifikacemi',
      'Integrace sociálních sítí',
      'SSL certifikát',
      'Hosting na 1 rok zdarma',
    ],
    highlighted: true,
  },
  {
    name: 'E-shop',
    price: '79 900',
    description: 'Kompletní online obchod s platebními bránami, správou produktů a objednávek.',
    delivery: 'Do 6 týdnů',
    features: [
      'Online obchod na míru',
      'Platební brány (Stripe, GoPay)',
      'Správa produktů a kategorií',
      'Sledování objednávek',
      'Automatické emaily zákazníkům',
      'Pokročilá SEO optimalizace',
      'Napojení na účetní systémy',
      'Responzivní design',
      'SSL certifikát',
      'Hosting na 1 rok zdarma',
    ],
    highlighted: false,
  },
]

const faqs = [
  {
    question: 'Jak dlouho trvá vytvoření webu?',
    answer:
      'Záleží na rozsahu projektu. Jednoduchý jednostránkový web zvládneme do 2 týdnů, vícestránkový business web do 4 týdnů a e-shop do 6 týdnů. Přesný termín domluvíme po úvodní konzultaci.',
  },
  {
    question: 'Potřebuji WordPress?',
    answer:
      'Ne. Tvoříme weby pomocí moderních technologií (React, Next.js), které jsou rychlejší, bezpečnější a nevyžadují neustálé aktualizace jako WordPress. Správu obsahu řešíme přes jednoduchý CMS systém.',
  },
  {
    question: 'Budu web vlastnit?',
    answer:
      'Ano, web je plně váš. Po dokončení projektu vám předáme kompletní zdrojový kód a přístupy ke všemu. Můžete si web spravovat sami nebo využít naši správu.',
  },
  {
    question: 'Co hosting a doména?',
    answer:
      'V ceně každého balíčku je hosting na 1 rok zdarma. Doménu vám pomůžeme zaregistrovat, nebo napojíme vaši stávající. Po prvním roce stojí hosting od 200 Kč/měsíc.',
  },
  {
    question: 'Děláte i SEO?',
    answer:
      'Ano. Základní SEO optimalizace (meta tagy, rychlost, struktura) je součástí každého webu. V balíčku Business a E-shop je pokročilá SEO optimalizace včetně napojení na Google Search Console.',
  },
  {
    question: 'Nabízíte podporu po spuštění?',
    answer:
      'Ano. Po spuštění webu máte 30 dní bezplatné podpory pro drobné úpravy. Dále nabízíme měsíční paušál na správu, aktualizace a technickou podporu od 1 500 Kč/měsíc.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' as const },
  }),
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left hover:text-accent transition-colors"
      >
        <span className="font-medium pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-muted transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-accent' : ''
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="text-muted text-sm leading-relaxed pb-5">{answer}</p>
      </motion.div>
    </div>
  )
}

export default function CenikPage() {
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
            Transparentní ceny
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-1 mb-6"
          >
            Kolik stojí{' '}
            <span className="text-gradient">nový web?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            Férové ceny bez skrytých poplatků. Vyberte si balíček, který
            odpovídá vašim potřebám, nebo nám napište a připravíme nabídku
            na míru.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section pt-0">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className={`relative p-8 rounded-2xl border ${
                  plan.highlighted
                    ? 'gradient-border bg-background-secondary'
                    : 'border-border bg-background-secondary'
                } flex flex-col`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold rounded-full bg-gradient-accent text-background">
                    Nejoblíbenější
                  </div>
                )}
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-2">{plan.name}</h2>
                  <p className="text-muted text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted">od</span>
                    <span className="text-4xl font-bold text-gradient">
                      {plan.price}
                    </span>
                    <span className="text-muted">Kč</span>
                  </div>
                  <p className="text-sm text-muted mt-2">{plan.delivery}</p>
                </div>
                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Check
                        size={16}
                        className="text-accent mt-0.5 shrink-0"
                      />
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/kontakt"
                  className={
                    plan.highlighted ? 'btn-primary w-full' : 'btn-outline w-full'
                  }
                >
                  Mám zájem
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-muted text-sm mt-8"
          >
            Všechny ceny jsou uvedeny bez DPH. Nejsme plátci DPH.
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">Časté otázky</h2>
            <p className="text-muted">
              Odpovědi na otázky, které dostáváme nejčastěji.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card"
          >
            {faqs.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </motion.div>
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
              Potřebujete něco jiného?
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-8">
              Každý projekt je unikátní. Napište nám a připravíme
              individuální nabídku přesně pro vás. Konzultace je zdarma.
            </p>
            <Link href="/kontakt" className="btn-primary text-lg px-8 py-4">
              Chci nabídku na míru
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
