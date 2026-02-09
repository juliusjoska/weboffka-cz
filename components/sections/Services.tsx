'use client'

import { motion } from 'framer-motion'
import { Building2, Target, ShoppingCart, User, Paintbrush, Headphones } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Firemní prezentace',
    description: 'Moderní web pro vaši firmu — o nás, služby, kontakt. Profesionální online vizitka, která prodává.',
  },
  {
    icon: Target,
    title: 'Landing pages',
    description: 'Konverzní stránky pro kampaně a produkty. Jeden cíl, maximální výsledek.',
  },
  {
    icon: ShoppingCart,
    title: 'E-shopy',
    description: 'Online prodej s platebními bránami a správou objednávek. Vše pod jednou střechou.',
  },
  {
    icon: User,
    title: 'Osobní weby',
    description: 'Portfolio, blog, CV — pro freelancery a kreativce. Ukažte světu, co umíte.',
  },
  {
    icon: Paintbrush,
    title: 'Redesign webu',
    description: 'Modernizace zastaralého webu. Nový design, vyšší rychlost, lepší zážitek.',
  },
  {
    icon: Headphones,
    title: 'Správa a podpora',
    description: 'Hosting, aktualizace, SEO, analytika. O váš web se postaráme i po spuštění.',
  },
]

export function Services() {
  return (
    <section id="sluzby" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">
            Co pro vás <span className="text-gradient">můžeme udělat</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Nabízíme kompletní služby od návrhu po spuštění a následnou podporu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
