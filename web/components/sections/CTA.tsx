'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(200, 255, 0, 0.08) 0%, transparent 60%)',
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(200,255,0,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(159,204,0,0.1) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[#c8ff00] mb-8">
              <Sparkles size={14} />
              Připraveni začít?
            </span>
          </motion.div>

          <h2 className="heading-lg mb-6">
            <span className="text-gradient-subtle">Pojďme vytvořit</span>
            <br />
            <span className="text-gradient text-glow">něco skvělého</span>
          </h2>

          <p className="text-xl text-secondary mb-10 max-w-xl mx-auto">
            Napište nám o vašem projektu. Ozveme se do 24 hodin s konkrétní nabídkou a návrhem řešení.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/kontakt" className="btn-primary text-lg px-10 py-4 group glow-sm">
              Chci web
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link href="/cenik" className="btn-secondary text-lg px-8 py-4">
              Zobrazit ceník
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 pt-8 border-t border-white/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-sm text-secondary mb-4">Proč si nás vybrat</p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-secondary">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#c8ff00] rounded-full" />
                Bez skrytých poplatků
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#c8ff00] rounded-full" />
                Moderní technologie
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#c8ff00] rounded-full" />
                Rychlé dodání
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
