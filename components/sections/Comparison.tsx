'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ target, suffix = '', inView }: { target: number; suffix?: string; inView: boolean }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const startTime = performance.now()

    function animate(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [inView, target])

  return <>{value}{suffix}</>
}

function DecimalCountUp({ target, suffix = '', inView }: { target: number; suffix?: string; inView: boolean }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const startTime = performance.now()

    function animate(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(parseFloat((eased * target).toFixed(1)))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [inView, target])

  return <>{value}{suffix}</>
}

const beforeMetrics: Array<{ label: string; value?: number; suffix?: string; color?: string; isDecimal?: boolean; text?: string }> = [
  { label: 'PageSpeed', value: 34, suffix: '', color: 'text-orange-500' },
  { label: 'Načítání', value: 4.2, suffix: 's', color: 'text-orange-500', isDecimal: true },
  { label: 'Stack', text: 'WordPress, pluginy, šablony' },
  { label: 'Responsivita', text: 'částečná' },
]

const afterMetrics: Array<{ label: string; value?: number; suffix?: string; color?: string; isDecimal?: boolean; text?: string }> = [
  { label: 'PageSpeed', value: 100, suffix: '', color: 'text-lime' },
  { label: 'Načítání', value: 0.8, suffix: 's', color: 'text-lime', isDecimal: true },
  { label: 'Stack', text: 'Next.js, čistý kód, TypeScript' },
  { label: 'Responsivita', text: 'pixel-perfect' },
]

export function Comparison() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="w-section relative">
      <div className="w-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="w-label">Proč my</p>
          <h2 className="w-heading mt-4">Rozdíl je vidět</h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-card relative overflow-hidden opacity-70"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.03] to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h3 className="font-display text-lg font-semibold text-text-secondary mb-8">
                Běžný web
              </h3>
              <div className="space-y-6">
                {beforeMetrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between border-b border-stroke/50 pb-4">
                    <span className="w-metric-label !mt-0">{m.label}</span>
                    {m.value !== undefined ? (
                      <span className={`font-display text-3xl font-bold tracking-tighter ${m.color}`}>
                        {m.isDecimal ? (
                          <DecimalCountUp target={m.value} suffix={m.suffix} inView={isInView} />
                        ) : (
                          <CountUp target={m.value} suffix={m.suffix} inView={isInView} />
                        )}
                      </span>
                    ) : (
                      <span className="text-body text-text-secondary">{m.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="w-card relative overflow-hidden border-lime/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-lime/[0.04] to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h3 className="font-display text-lg font-semibold text-lime mb-8">
                Náš web
              </h3>
              <div className="space-y-6">
                {afterMetrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between border-b border-stroke/50 pb-4">
                    <span className="w-metric-label !mt-0">{m.label}</span>
                    {m.value !== undefined ? (
                      <span className={`font-display text-3xl font-bold tracking-tighter ${m.color}`}>
                        {m.isDecimal ? (
                          <DecimalCountUp target={m.value} suffix={m.suffix} inView={isInView} />
                        ) : (
                          <CountUp target={m.value} suffix={m.suffix} inView={isInView} />
                        )}
                      </span>
                    ) : (
                      <span className="text-body text-lime">{m.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {['Next.js', 'React', 'TypeScript', 'Tailwind CSS'].map((t) => (
            <span key={t} className="w-tag-lime">{t}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
