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
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'ChciAppku.cz',
    category: 'Firemní prezentace',
    description: 'Webová prezentace pro služby vývoje mobilních aplikací. Konverzně orientovaný design s interaktivními prvky.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    icon: Rocket,
    color: 'from-rose-500 to-violet-500',
  },
  {
    title: 'VývojAplikacíNaMíru.cz',
    category: 'Landing page',
    description: 'Konverzní landing page pro služby vývoje aplikací na míru. Důraz na CTA prvky a přehlednost nabídky.',
    tags: ['Next.js', 'TypeScript', 'Framer Motion'],
    icon: Rocket,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'SoftNaMíru.cz',
    category: 'Firemní prezentace',
    description: 'Web pro zakázkový vývoj softwaru. Čistý design komunikující profesionalitu a technickou expertízu.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    icon: Globe,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Vyvinuto.cz',
    category: 'Firemní prezentace',
    description: 'Prezentace vývojářského studia. Minimalistický design s důrazem na portfolio a reference.',
    tags: ['Next.js', 'Framer Motion', 'TypeScript'],
    icon: Globe,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'E-shop pro řemeslníka',
    category: 'E-shop',
    description: 'Online obchod pro lokálního řemeslníka. Katalog produktů, košík, platební brána a správa objednávek.',
    tags: ['Next.js', 'Stripe', 'Supabase'],
    icon: ShoppingCart,
    color: 'from-lime-500 to-green-500',
  },
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
      <section className="section pt-8 md:pt-12">
        <div className="container text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium mb-4"
          >
            Naše práce mluví za nás
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-1 mb-6"
          >
            Naše{' '}
            <span className="text-gradient">portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            Podívejte se na ukázky webů, které jsme vytvořili pro naše
            klienty. Každý projekt je unikátní a šitý na míru.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section pt-0">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="card-hover group overflow-hidden"
              >
                <div className={`h-32 rounded-xl bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity mb-5 flex items-center justify-center`}>
                  <project.icon size={48} className="text-white opacity-60" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md border border-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-background-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">Čísla, která mluví</h2>
            <p className="text-muted">Výsledky naší dosavadní práce.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '50+', label: 'Dokončených projektů' },
              { value: '100%', label: 'Weby na míru' },
              { value: '0', label: 'WordPress šablon' },
              { value: '∞', label: 'Nadšení pro tvorbu' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center py-8"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-glass gradient-border text-center py-16 px-8"
          >
            <h2 className="heading-2 mb-4">
              Chcete být dalším úspěšným projektem?
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-8">
              Napište nám a ukážeme vám, jak by mohl vypadat váš nový web.
              Konzultace je zdarma a bez závazků.
            </p>
            <Link href="/kontakt" className="btn-primary text-lg px-8 py-4">
              Chci svůj web
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
