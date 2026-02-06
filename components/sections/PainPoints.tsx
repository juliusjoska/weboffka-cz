'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const painPoints = [
  {
    title: 'Web z roku 2015',
    description: 'Váš web vypadá jako z minulého desetiletí. Zákazníci odcházejí ke konkurenci s hezčím webem.',
  },
  {
    title: 'WordPress peklo',
    description: 'Neustálé aktualizace, pluginy, hackeři. Web je pomalý a vy nevíte proč.',
  },
  {
    title: 'Agentura = drahé a pomalé',
    description: 'Tři měsíce čekání, tisíce navíc za každou změnu. Komunikujete s někým, kdo váš byznys nezná.',
  },
  {
    title: 'Freelancer = loterie',
    description: 'Slíbil, nedodal, zmizel. Nebo dodal, ale to raději nechtějte vidět.',
  },
]

export function PainPoints() {
  return (
    <section className="section bg-background-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2">Známý příběh?</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 bg-background rounded-xl border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <X className="text-red-500" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
                  <p className="text-muted">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
