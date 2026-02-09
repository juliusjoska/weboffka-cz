'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export function CTA() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 md:p-16 text-center overflow-hidden gradient-border glow-lime bg-background-secondary"
        >
          <div className="relative z-10">
            <h2 className="heading-2 mb-4">
              Připraveni na <span className="text-gradient">nový web</span>?
            </h2>
            <p className="text-lg text-muted max-w-xl mx-auto mb-10">
              Od prvního hovoru po spuštění za pár týdnů. Ozvěte se nám a společně vytvoříme web, který bude fungovat.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/kontakt" className="btn-primary text-lg px-8 py-4">
                Chci web!
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:+420775305305" className="btn-outline text-lg px-8 py-4">
                <Phone className="mr-2 w-5 h-5" />
                Zavolat +420 775 305 305
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
