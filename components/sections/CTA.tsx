'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

export function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="w-section relative overflow-hidden bg-bg-elevated">
      {/* Background effects */}
      <div className="absolute inset-0 w-mesh-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-lime/[0.03] blur-[150px]" />

      <div className="w-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="w-heading">Pojďme tvořit.</h2>
          <p className="mt-4 text-body-lg text-text-secondary max-w-md mx-auto">
            Máte nápad na web? Ozvěte se a probereme, jak ho společně zrealizujeme.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="w-btn-primary">
              Napište nám
            </Link>
            <a href="tel:+420731860594" className="w-btn-ghost">
              Zavolat +420 731 860 594
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
