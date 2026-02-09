'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-grid overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full glow-lime opacity-40 blur-3xl" />
      </div>

      <div className="container relative z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-background-secondary/50 text-sm text-muted"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Tvoříme weby, které fungují
          </motion.div>

          <h1 className="heading-1 mb-6">
            Webové stránky, které vás{' '}
            <span className="text-gradient">odliší od konkurence</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10"
          >
            Od osobního webu přes firemní prezentaci po e-shop. Moderní design,
            bleskové načítání, nulové starosti.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/kontakt" className="btn-primary text-lg px-8 py-4">
              Chci web!
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/portfolio" className="btn-outline text-lg px-8 py-4">
              Podívejte se na portfolio
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-muted animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
