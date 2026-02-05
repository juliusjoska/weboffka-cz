'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const stats = [
  { number: '50+', label: 'projektů' },
  { number: '8', label: 'let v oboru' },
  { number: '100%', label: 'spokojených' },
]

export function About() {
  return (
    <section className="section" id="o-mne">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left - Avatar/Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            {/* Avatar placeholder */}
            <div className="w-32 h-32 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-accent to-accent-dark mb-6 flex items-center justify-center text-white text-4xl font-bold">
              JJ
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 mb-4">Kdo za tím stojí</h2>
            <p className="text-lg text-muted mb-4">
              Jsem Julius a dělám weby, které fungují.
            </p>
            <p className="text-muted mb-4">
              Nemám rád zbytečné komplikace. Proto dělám weby jednoduše —
              moderní technologie, čistý kód, jasná komunikace.
            </p>
            <p className="text-muted mb-6">
              Pracoval jsem pro agentury i jako freelancer. Viděl jsem,
              co funguje a co ne. Teď to dělám po svém.
            </p>
            <Link href="/o-mne" className="text-accent font-medium hover:underline">
              Více o mně →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
