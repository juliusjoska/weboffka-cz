'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '1',
    title: 'Ozvěte se',
    description: 'Napište mi o vašem projektu. Odpovím do 24 hodin.',
  },
  {
    number: '2',
    title: 'Domluvíme se',
    description: 'Probereme vaše potřeby a cíle. Dostanete jasnou nabídku.',
  },
  {
    number: '3',
    title: 'Tvořím',
    description: 'Design, kód, obsah. Vidíte průběh, schvalujete výsledek.',
  },
  {
    number: '4',
    title: 'Spouštíme',
    description: 'Web jde online. Já se o něj starám dál.',
  },
]

export function HowItWorks() {
  return (
    <section className="section bg-white" id="jak-to-funguje">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2">Čtyři kroky k novému webu</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
              )}

              {/* Number */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-foreground text-white flex items-center justify-center text-2xl font-bold">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-muted text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
