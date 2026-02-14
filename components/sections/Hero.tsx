'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const codeString = `const web = await build({
  design: "custom",
  framework: "next.js",
  speed: "100/100",
})`

export function Hero() {
  const [displayedCode, setDisplayedCode] = useState('')
  const [codeComplete, setCodeComplete] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < codeString.length) {
        setDisplayedCode(codeString.slice(0, i + 1))
        i++
      } else {
        setCodeComplete(true)
        clearInterval(interval)
      }
    }, 35)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.4 } },
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-mesh-gradient" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-lime/[0.03] blur-[120px] animate-glow-pulse" />

      <div className="w-container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={slideInLeft}
              className="w-display text-text"
            >
              Píšeme kód.{'\n'}
              <span className="w-lime-gradient">Ne šablony.</span>
            </motion.h1>

            <motion.p
              variants={slideInLeft}
              className="mt-6 text-body-lg text-text-secondary max-w-lg"
            >
              Tvoříme rychlé, moderní weby na míru. Bez WordPressu,
              bez kompromisů. Každý řádek kódu má svůj důvod.
            </motion.p>

            <motion.div
              variants={slideInLeft}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href="/kontakt" className="w-btn-primary">
                Chci nový web
              </Link>
              <Link href="#showcase" className="w-btn-ghost">
                Prohlédnout práci
              </Link>
            </motion.div>

            {/* Metrics */}
            <motion.div
              variants={slideInLeft}
              className="mt-12 flex gap-10"
            >
              {[
                { value: '100/100', label: 'PageSpeed' },
                { value: '0.8s', label: 'Načítání' },
                { value: '0', label: 'WordPress' },
              ].map((m) => (
                <div key={m.label}>
                  <div className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-lime">
                    {m.value}
                  </div>
                  <div className="w-metric-label">{m.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — browser mockup */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <div className="w-browser">
              <div className="w-browser-bar">
                <div className="w-browser-dot bg-[#FF5F57]" />
                <div className="w-browser-dot bg-[#FEBC2E]" />
                <div className="w-browser-dot bg-[#28C840]" />
                <div className="ml-3 flex-1">
                  <div className="mx-auto max-w-[200px] px-3 py-1 rounded-md bg-bg text-text-tertiary text-xs text-center font-mono">
                    weboffka.cz
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 min-h-[280px] bg-bg font-mono text-sm leading-relaxed">
                <span className="text-text-tertiary">{'// '}</span>
                <span className="text-lime/60">weboffka.cz</span>
                <br />
                <br />
                <pre className="whitespace-pre-wrap">
                  <span className="text-lime/80">{displayedCode}</span>
                  {!codeComplete && <span className="w-cursor" />}
                </pre>
                {codeComplete && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 text-lime/40"
                  >
                    {'>'} <span className="text-lime">Deployed.</span> 100/100 PageSpeed.
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
