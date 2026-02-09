'use client'

import { motion } from 'framer-motion'
import { Code, Zap, Users, MessageCircle } from 'lucide-react'

const reasons = [
  {
    icon: Code,
    title: 'Bez WordPressu',
    description: 'Žádné pluginy, žádné hacky, čistý kód. Váš web bude rychlý, bezpečný a snadno udržovatelný.',
  },
  {
    icon: Zap,
    title: 'Bleskově rychlé',
    description: '100/100 PageSpeed, optimalizace na míru. Každá milisekunda se počítá — pro uživatele i pro Google.',
  },
  {
    icon: Users,
    title: 'Pro každého',
    description: 'Od živnostníka po korporaci, férové ceny. Řešení šité na míru bez zbytečných nákladů.',
  },
  {
    icon: MessageCircle,
    title: 'Osobní přístup',
    description: 'Komunikujete přímo s vývojářem, ne s call centrem. Rychlé odpovědi, jasná komunikace.',
  },
]

export function WhyUs() {
  return (
    <section id="proc-my" className="section bg-dots relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">
            Proč <span className="text-gradient">právě my</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Nejsme velká agentura. Jsme malý tým, který dělá weby s láskou a precizností.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
