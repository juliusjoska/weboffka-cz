'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-light" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="heading-2 mb-4">
            Připraveni <span className="text-accent glow-text">zapnout</span> váš projekt?
          </h2>
          <p className="text-muted text-lg mb-10">
            Napište nám o vašem projektu.
            Ozveme se do 24 hodin s konkrétní nabídkou.
          </p>
          <Link
            href="/kontakt"
            className="btn-primary text-lg px-12 py-4 animate-glow-pulse"
          >
            Spustit projekt
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
