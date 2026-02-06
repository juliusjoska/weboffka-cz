'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Rychlé dodání',
    description: 'Váš web bude hotový v týdnech, ne měsících.',
  },
  {
    icon: Shield,
    title: 'Moderní stack',
    description: 'Žádný WordPress. Čistý kód, rychlý web.',
  },
  {
    icon: Clock,
    title: 'Dlouhodobá podpora',
    description: 'Staráme se o váš web i po spuštění.',
  },
]

export function About() {
  return (
    <section className="py-32 relative overflow-hidden" id="o-nas">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#c8ff00]/20 to-transparent blur-3xl" />

            {/* Card */}
            <div className="relative glass rounded-3xl p-8 border border-white/10">
              {/* Logo */}
              <div className="mb-8">
                <Image
                  src="/logo.png"
                  alt="Weboffka"
                  width={280}
                  height={77}
                  className="w-[180px] h-auto"
                />
              </div>

              {/* Feature list */}
              <div className="space-y-4">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#c8ff00]/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#c8ff00]/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-[#c8ff00]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-secondary">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-secondary mb-6">
              O nás
            </span>

            <h2 className="heading-lg mb-6">
              <span className="text-gradient-subtle">Malé studio,</span>
              <br />
              <span className="text-gradient">velké projekty</span>
            </h2>

            <p className="text-xl text-secondary mb-6">
              Jsme webové studio, které dělá weby na míru. Žádná byrokracie, žádné zbytečné meetingy.
            </p>

            <p className="text-secondary mb-6">
              Moderní technologie, čistý kód a přímá komunikace. Máme zkušenosti z agentur i freelance projektů. Víme, co funguje a co ne.
            </p>

            <p className="text-secondary mb-8">
              A děláme to po svém.
            </p>

            <Link
              href="/o-nas"
              className="inline-flex items-center gap-2 text-[#c8ff00] font-medium hover:gap-3 transition-all group"
            >
              Více o nás
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
