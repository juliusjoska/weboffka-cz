'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Start',
    price: 'od 19.900',
    description: 'One-page vizitka',
    features: [
      'One-page web',
      'Responzivní design',
      'Kontaktní formulář',
      'SEO základ',
      '1 revizní kolo',
      'Dodání do 2 týdnů',
    ],
    popular: false,
  },
  {
    name: 'Business',
    price: 'od 39.900',
    description: 'Plná prezentace',
    features: [
      'Multi-page web (5+ stránek)',
      'Vše ze Start',
      'Pokročilé animace',
      'Blog sekce (volitelně)',
      '2 revizní kola',
      'Dodání do 3 týdnů',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: 'od 69.900',
    description: 'Komplexní řešení',
    features: [
      'Komplexní web',
      'Vše z Business',
      'E-commerce light / rezervace',
      'CMS pro správu obsahu',
      '3 revizní kola',
      'Prioritní podpora',
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section className="section bg-background-secondary" id="cenik">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="heading-2">Transparentní ceny</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center text-muted mb-12"
        >
          Žádné skryté poplatky. Víte přesně, co dostanete.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
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
                <h3 className="font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-muted text-sm mb-4">{plan.description}</p>
                <div className="text-3xl font-bold">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
