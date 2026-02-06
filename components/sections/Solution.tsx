'use client'

import { motion } from 'framer-motion'
import { Check, Zap, User, DollarSign, Clock } from 'lucide-react'

const solutions = [
  {
    icon: Zap,
    title: 'Moderní technologie',
    description: 'Next.js místo WordPressu. Rychlý, bezpečný, SEO-friendly web bez údržby.',
  },
  {
    icon: User,
    title: 'Přímá komunikace',
    description: 'Komunikujete přímo s vývojářem. Žádné předávání přes account managery.',
  },
  {
    icon: DollarSign,
    title: 'Férová cena',
    description: 'Víte předem, kolik zaplatíte. Žádné skryté poplatky, žádná překvapení.',
  },
  {
    icon: Clock,
    title: 'Rychlé dodání',
    description: 'Standardní web do 2-4 týdnů. Protože váš čas = vaše peníze.',
  },
]

export function Solution() {
  return (
    <section className="section" id="reseni">
      <div className="container">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-block px-6 py-3 bg-accent text-background rounded-full mb-8">
            <span className="font-medium">
              Vypněte starosti. Zapněte web.
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center text-lg text-muted max-w-2xl mx-auto mb-12"
        >
          Weboffka = kvalita bez zbytečností.
          Weby a appky, které fungují — a vy se můžete soustředit na byznys.
        </motion.p>

        {/* Solutions Grid */}
        <div className="max-w-3xl mx-auto space-y-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 p-6 bg-background-secondary rounded-xl border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <Check className="text-green-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{solution.title}</h3>
                <p className="text-muted">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
