'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const stats = [
  { number: '50+', label: 'projektů' },
  { number: '8+', label: 'let zkušeností' },
  { number: '100%', label: 'dokončených' },
]

export function About() {
  return (
    <section className="section" id="o-nas">
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
            {/* Logo */}
            <div className="w-32 h-32 mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-accent to-accent-dark mb-6 flex items-center justify-center text-white text-2xl font-bold tracking-tight">
              we<span className="opacity-80">ff</span>
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
              Jsme malé studio, které dělá weby na míru.
            </p>
            <p className="text-muted mb-4">
              Žádná byrokracie, žádné zbytečné meetingy. Prostě moderní
              technologie, čistý kód a přímá komunikace.
            </p>
            <p className="text-muted mb-6">
              Máme zkušenosti z agentur i freelance projektů. Víme,
              co funguje a co ne. A děláme to po svém.
            </p>
            <Link href="/o-nas" className="text-accent font-medium hover:underline">
              Více o nás →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
