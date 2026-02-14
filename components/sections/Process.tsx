'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Konzultace',
    desc: 'Pochopíme váš byznys, cílovou skupinu a co od webu očekáváte. Definujeme strukturu, obsah a klíčové funkce.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Navrhneme vizuální identitu, layout a typografii. Moderní, čistý design na míru — žádné šablony.',
  },
  {
    num: '03',
    title: 'Vývoj',
    desc: 'Napíšeme čistý, výkonný kód v Next.js a TypeScriptu. Každý pixel, každá interakce — přesně podle návrhu.',
  },
  {
    num: '04',
    title: 'Spuštění',
    desc: 'Nasadíme web na produkci, nastavíme doménu, SSL a analytiku. Předáme vám kompletní dokumentaci.',
  },
]

function MockupContent({ activeStep }: { activeStep: number }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      {activeStep === 0 && (
        <svg viewBox="0 0 200 140" className="w-full max-w-[200px] opacity-40">
          <rect x="10" y="10" width="180" height="20" rx="4" fill="#1E1E1E" />
          <rect x="10" y="40" width="120" height="8" rx="2" fill="#1E1E1E" />
          <rect x="10" y="56" width="160" height="8" rx="2" fill="#1E1E1E" />
          <rect x="10" y="72" width="80" height="8" rx="2" fill="#1E1E1E" />
          <rect x="10" y="96" width="60" height="24" rx="6" fill="#1E1E1E" />
          <rect x="80" y="96" width="60" height="24" rx="6" fill="#1E1E1E" />
        </svg>
      )}
      {activeStep === 1 && (
        <div className="w-full max-w-[200px] space-y-3">
          <div className="h-5 rounded bg-gradient-to-r from-lime/30 to-lime/10" />
          <div className="h-3 w-3/4 rounded bg-gradient-to-r from-violet-500/30 to-transparent" />
          <div className="h-3 w-full rounded bg-gradient-to-r from-cyan-500/20 to-transparent" />
          <div className="h-3 w-1/2 rounded bg-gradient-to-r from-rose-500/20 to-transparent" />
          <div className="flex gap-2 pt-2">
            <div className="h-6 w-16 rounded-full bg-lime/20" />
            <div className="h-6 w-16 rounded-full border border-stroke" />
          </div>
        </div>
      )}
      {activeStep === 2 && (
        <div className="w-full max-w-[220px] font-mono text-xs space-y-1">
          <div><span className="text-lime/50">{'<'}</span><span className="text-lime">main</span><span className="text-lime/50">{'>'}</span></div>
          <div className="pl-4"><span className="text-text-tertiary">{'<'}</span><span className="text-violet-400">Hero</span> <span className="text-text-tertiary">/{'>'}</span></div>
          <div className="pl-4"><span className="text-text-tertiary">{'<'}</span><span className="text-violet-400">Showcase</span> <span className="text-text-tertiary">/{'>'}</span></div>
          <div className="pl-4"><span className="text-text-tertiary">{'<'}</span><span className="text-violet-400">CTA</span> <span className="text-text-tertiary">/{'>'}</span></div>
          <div><span className="text-lime/50">{'</'}</span><span className="text-lime">main</span><span className="text-lime/50">{'>'}</span></div>
        </div>
      )}
      {activeStep === 3 && (
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-lime/10 flex items-center justify-center">
            <svg className="w-7 h-7 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="font-mono text-xs text-lime tracking-wider uppercase">Live</span>
        </div>
      )}
    </div>
  )
}

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const stepRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]
  const step0 = useInView(stepRefs[0], { margin: '-40% 0px -40% 0px' })
  const step1 = useInView(stepRefs[1], { margin: '-40% 0px -40% 0px' })
  const step2 = useInView(stepRefs[2], { margin: '-40% 0px -40% 0px' })
  const step3 = useInView(stepRefs[3], { margin: '-40% 0px -40% 0px' })

  const stepsInView = [step0, step1, step2, step3]
  const activeStep = stepsInView.lastIndexOf(true) >= 0 ? stepsInView.lastIndexOf(true) : 0

  return (
    <section ref={sectionRef} className="w-section relative">
      <div className="w-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="w-label">Jak pracujeme</p>
          <h2 className="w-heading mt-4">Od nápadu ke spuštění</h2>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — sticky mockup */}
          <div className="hidden lg:block">
            <div className="sticky top-[20vh]">
              <div className="w-browser">
                <div className="w-browser-bar">
                  <div className="w-browser-dot bg-[#FF5F57]" />
                  <div className="w-browser-dot bg-[#FEBC2E]" />
                  <div className="w-browser-dot bg-[#28C840]" />
                  <div className="ml-3 flex-1">
                    <div className="mx-auto max-w-[160px] px-3 py-1 rounded-md bg-bg text-text-tertiary text-xs text-center font-mono">
                      vas-web.cz
                    </div>
                  </div>
                </div>
                <div className="h-[280px] bg-bg">
                  <MockupContent activeStep={activeStep} />
                </div>
              </div>
            </div>
          </div>

          {/* Right — steps */}
          <div>
            {steps.map((step, i) => (
              <div key={step.num} ref={stepRefs[i]} className="min-h-[60vh] flex items-center">
                <motion.div
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: stepsInView[i] ? 1 : 0.3 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="w-label">{step.num}</span>
                  <h3 className="w-subheading mt-3 text-text">{step.title}</h3>
                  <p className="mt-3 text-body text-text-secondary max-w-md">{step.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
