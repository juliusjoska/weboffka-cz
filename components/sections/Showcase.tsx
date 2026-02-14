'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    name: 'FiremníSoft.cz',
    desc: 'B2B prezentace firmy',
    tech: ['Next.js', 'Tailwind'],
    score: '100/100',
    gradient: 'from-blue-600/40 to-cyan-500/20',
  },
  {
    name: 'SoftNaMíru.cz',
    desc: 'Zakázkový vývoj software',
    tech: ['Next.js', 'TypeScript'],
    score: '100/100',
    gradient: 'from-violet-600/40 to-purple-500/20',
  },
  {
    name: 'ChciAppku.cz',
    desc: 'Landing page pro dev studio',
    tech: ['React', 'Framer Motion'],
    score: '100/100',
    gradient: 'from-emerald-600/40 to-teal-500/20',
  },
  {
    name: 'Vyvinuto.cz',
    desc: 'Prezentace vývojového studia',
    tech: ['Next.js', 'Tailwind'],
    score: '100/100',
    gradient: 'from-amber-600/40 to-orange-500/20',
  },
  {
    name: 'AppkyProFirmy.cz',
    desc: 'B2B aplikace na míru',
    tech: ['Next.js', 'TypeScript'],
    score: '100/100',
    gradient: 'from-rose-600/40 to-pink-500/20',
  },
  {
    name: 'VývojAplikacíNaMíru.cz',
    desc: 'Landing page',
    tech: ['Next.js', 'Tailwind'],
    score: '100/100',
    gradient: 'from-lime-600/40 to-green-500/20',
  },
]

export function Showcase() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = 420
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section id="showcase" ref={sectionRef} className="w-section relative overflow-hidden">
      <div className="w-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="w-label">Naše práce</p>
          <h2 className="w-heading mt-4">Weby, které jsme vytvořili</h2>
        </motion.div>

        {/* Scroll nav */}
        <div className="hidden md:flex gap-2 mt-8 justify-end">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full border border-stroke hover:border-lime/40 transition-colors"
            aria-label="Předchozí"
          >
            <ChevronLeft className="w-5 h-5 text-text-secondary" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full border border-stroke hover:border-lime/40 transition-colors"
            aria-label="Další"
          >
            <ChevronRight className="w-5 h-5 text-text-secondary" />
          </button>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="w-hscroll mt-10 pl-5 sm:pl-8 lg:pl-[calc((100vw-1200px)/2+2rem)]"
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="w-[350px] md:w-[400px] rounded-2xl border border-stroke bg-bg-elevated overflow-hidden group"
          >
            {/* Gradient placeholder */}
            <div className={`h-[180px] bg-gradient-to-br ${project.gradient} relative`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-xl font-bold text-white/80 tracking-tight">
                  {project.name}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-text">
                  {project.name}
                </h3>
                <span className="font-mono text-xs text-lime">{project.score}</span>
              </div>
              <p className="text-caption text-text-secondary mt-1">{project.desc}</p>
              <div className="flex gap-2 mt-3">
                {project.tech.map((t) => (
                  <span key={t} className="w-tag-lime">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
        {/* Spacer for last card visibility */}
        <div className="w-8 flex-shrink-0" />
      </div>
    </section>
  )
}
