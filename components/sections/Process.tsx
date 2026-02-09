'use client'

import { motion } from 'framer-motion'
import { MessageSquare, PenTool, Code2, Rocket, Shield } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: 'Bezplatná konzultace',
    description: 'Zjistíme, co potřebujete. Probereme cíle, cílovou skupinu a rozsah projektu.',
  },
  {
    icon: PenTool,
    title: 'Návrh designu',
    description: 'Wireframe, mockup, schválení. Uvidíte web ještě předtím, než se napíše první řádek kódu.',
  },
  {
    icon: Code2,
    title: 'Vývoj webu',
    description: 'Kódování, plnění obsahu, testování. Čistý kód, rychlé načítání, responzivní design.',
  },
  {
    icon: Rocket,
    title: 'Spuštění',
    description: 'Nasazení na produkci, nastavení SEO a analytiky. Váš web je živý.',
  },
  {
    icon: Shield,
    title: 'Podpora',
    description: 'Aktualizace, úpravy, monitoring. O váš web se staráme dlouhodobě.',
  },
]

export function Process() {
  return (
    <section id="proces" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">
            Jak <span className="text-gradient">spolupráce probíhá</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Od prvního hovoru po hotový web v 5 jednoduchých krocích.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-green-500 to-cyan-500 hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex gap-6 mb-12 last:mb-0"
            >
              <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-background-secondary border border-border flex items-center justify-center">
                <step.icon className="w-7 h-7 text-accent" />
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-muted">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
