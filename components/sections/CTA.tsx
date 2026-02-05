'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function CTA() {
  return (
    <section className="py-20 bg-foreground text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="heading-2 mb-4">Pojďme na to</h2>
          <p className="text-white/70 text-lg mb-8">
            Napište nám o vašem projektu.
            Ozveme se do 24 hodin s konkrétní nabídkou.
          </p>
          <Link
            href="/kontakt"
            className="btn bg-accent hover:bg-accent-dark text-white text-lg px-10 py-4"
          >
            Chci web
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
