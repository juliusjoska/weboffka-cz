'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Handshake, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Ozvěte se',
    description: 'Napište nám o vašem projektu. Odpovíme do 24 hodin.',
  },
  {
    icon: Handshake,
    number: '02',
    title: 'Domluvíme se',
    description: 'Probereme vaše potřeby a cíle. Dostanete jasnou nabídku.',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Tvoříme',
    description: 'Design, kód, obsah. Vidíte průběh, schvalujete výsledek.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Spouštíme',
    description: 'Web jde online. Staráme se o něj dál.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-32 relative overflow-hidden" id="jak-to-funguje">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-secondary mb-6">
            Jak to funguje
          </span>
          <h2 className="heading-lg">
            <span className="text-gradient-subtle">Čtyři kroky</span>{' '}
            <span className="text-gradient">k novému webu</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#c8ff00]/30 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="text-center relative group"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-[#c8ff00]/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              <div className="relative p-6">
                {/* Icon circle */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#c8ff00]/20 to-[#c8ff00]/5 border border-[#c8ff00]/20 flex items-center justify-center group-hover:border-[#c8ff00]/40 transition-colors">
                  <step.icon className="text-[#c8ff00]" size={28} />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#c8ff00] text-[#050505] text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg mb-2 group-hover:text-gradient transition-all">
                  {step.title}
                </h3>
                <p className="text-secondary text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
