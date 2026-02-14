'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const testimonials = [
  {
    text: 'Konečně máme web, který vypadá profesionálně a funguje na mobilu. Objednávky se zdvojnásobily.',
    name: 'Petra Nováková',
    role: 'Majitelka kavárny',
  },
  {
    text: 'Bleskově rychlé načítání fotek a moderní design. Přesně to, co jsem hledal.',
    name: 'Martin Dvořák',
    role: 'Freelance fotograf',
  },
  {
    text: 'Přechod z WordPressu byl nejlepší rozhodnutí. E-shop je 3x rychlejší, konverze +40 %.',
    name: 'Jana Králová',
    role: 'Majitelka e-shopu',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section ref={sectionRef} className="w-section relative">
      <div className="w-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="w-label">Reference</p>
        </motion.div>

        <div className="mt-16 max-w-3xl mx-auto text-center relative min-h-[200px]">
          {/* Decorative quote */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-display text-[120px] leading-none text-stroke/40 select-none pointer-events-none">
            &ldquo;
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <p className="text-2xl md:text-3xl font-display font-medium leading-snug text-text text-balance">
                {testimonials[current].text}
              </p>
              <div className="mt-8">
                <p className="text-body font-semibold text-text">{testimonials[current].name}</p>
                <p className="text-caption text-text-secondary mt-1">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-lime w-6' : 'bg-stroke'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
