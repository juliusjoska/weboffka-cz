'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Globe, ShoppingCart, Rocket } from 'lucide-react'

const projects = [
  {
    title: 'FiremníSoft.cz',
    category: 'Firemní prezentace',
    description: 'Profesionální web pro firmu specializující se na vývoj podnikového softwaru. Moderní tmavý design s důrazem na důvěryhodnost.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    icon: Globe,
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'ChciAppku.cz',
    category: 'Firemní prezentace',
    description: 'Webová prezentace pro služby vývoje mobilních aplikací. Konverzně orientovaný design s interaktivními prvky.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    icon: Rocket,
    gradient: 'from-rose-500/20 to-violet-500/20',
  },
  {
    title: 'VývojAplikacíNaMíru.cz',
    category: 'Landing page',
    description: 'Konverzní landing page pro služby vývoje aplikací na míru. Důraz na CTA prvky a přehlednost nabídky.',
    tags: ['Next.js', 'TypeScript', 'Framer Motion'],
    icon: Rocket,
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'SoftNaMíru.cz',
    category: 'Firemní prezentace',
    description: 'Web pro zakázkový vývoj softwaru. Čistý design komunikující profesionalitu a technickou expertízu.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    icon: Globe,
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Vyvinuto.cz',
    category: 'Firemní prezentace',
    description: 'Prezentace vývojářského studia. Minimalistický design s důrazem na portfolio a reference.',
    tags: ['Next.js', 'Framer Motion', 'TypeScript'],
    icon: Globe,
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    title: 'E-shop pro řemeslníka',
    category: 'E-shop',
    description: 'Online obchod pro lokálního řemeslníka. Katalog produktů, košík, platební brána a správa objednávek.',
    tags: ['Next.js', 'Stripe', 'Supabase'],
    icon: ShoppingCart,
    gradient: 'from-lime-500/20 to-green-500/20',
  },
]

const stats = [
  { value: '50+', label: 'Dokončených projektů' },
  { value: '100%', label: 'Weby na míru' },
  { value: '0', label: 'WordPress šablon' },
  { value: '∞', label: 'Nadšení pro tvorbu' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

export default function PortfolioPage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="w-section-sm pt-8 md:pt-12">
        <div className="w-container text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-label mb-4"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-heading mb-6"
          >
            Naše práce mluví za nás
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-text-secondary max-w-2xl mx-auto"
          >
            Podívejte se na ukázky webů, které jsme vytvořili pro naše
            klienty. Každý projekt je unikátní a šitý na míru.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="w-section-sm pt-0">
        <div className="w-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center py-6"
              >
                <div className="w-metric mb-2">{stat.value}</div>
                <p className="w-metric-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-container"><div className="w-divider" /></div>

      {/* Projects Grid */}
      <section className="w-section">
        <div className="w-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="w-card-interactive group overflow-hidden"
              >
                <div className={`h-36 rounded-xl bg-gradient-to-br ${project.gradient} mb-5 flex items-center justify-center border border-stroke`}>
                  <project.icon size={48} className="text-text-tertiary group-hover:text-lime transition-colors" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="w-tag-lime">
                    {project.category}
                  </span>
                </div>

                <h3 className="w-subheading text-lg mb-2 group-hover:text-lime transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="w-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-section">
        <div className="w-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-card-glass text-center py-16 px-8 relative overflow-hidden"
          >
            <div className="w-mesh-gradient absolute inset-0" />
            <div className="relative z-10">
              <h2 className="w-heading mb-4">
                Chcete být dalším úspěšným projektem?
              </h2>
              <p className="text-text-secondary text-body-lg max-w-xl mx-auto mb-8">
                Napište nám a ukážeme vám, jak by mohl vypadat váš nový web.
                Konzultace je zdarma a bez závazků.
              </p>
              <Link href="/kontakt" className="w-btn-primary">
                Chci svůj web
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
