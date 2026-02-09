'use client'

import { motion } from 'framer-motion'

const technologies = [
  { name: 'Next.js', description: 'React framework' },
  { name: 'React', description: 'UI knihovna' },
  { name: 'TypeScript', description: 'Typovaný JS' },
  { name: 'Tailwind CSS', description: 'Utility CSS' },
  { name: 'Vercel', description: 'Hosting & deploy' },
  { name: 'Cloudflare', description: 'CDN & ochrana' },
  { name: 'SEO', description: 'Optimalizace' },
  { name: 'Google Analytics', description: 'Analytika' },
]

export function Technologies() {
  return (
    <section id="technologie" className="section bg-background-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">
            Technologie, kterým <span className="text-gradient">důvěřujeme</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Stavíme na prověřených nástrojích, které zajišťují rychlost, bezpečnost a spolehlivost.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card-hover text-center py-8"
            >
              <h3 className="text-lg font-semibold mb-1">{tech.name}</h3>
              <p className="text-sm text-muted">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
