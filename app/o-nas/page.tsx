'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  Code2,
  Zap,
  Shield,
  Heart,
  Users,
  Target,
  Lightbulb,
  Clock,
} from 'lucide-react'

const values = [
  {
    icon: Code2,
    title: 'Moderní technologie',
    description:
      'Používáme React, Next.js a Tailwind CSS místo zastaralého WordPressu. Váš web bude rychlý, bezpečný a snadno rozšiřitelný.',
  },
  {
    icon: Zap,
    title: 'Rychlost dodání',
    description:
      'Jednoduchý web zvládneme do 2 týdnů. Díky efektivním nástrojům a letitým zkušenostem pracujeme rychle, ale pečlivě.',
  },
  {
    icon: Shield,
    title: 'Bezpečnost',
    description:
      'Každý web stavíme s ohledem na bezpečnost. SSL certifikát, ochrana proti útokům a pravidelné aktualizace jsou samozřejmostí.',
  },
  {
    icon: Heart,
    title: 'Lidský přístup',
    description:
      'Jsme malý tým, ne korporace. Každému projektu věnujeme osobní pozornost a komunikujeme srozumitelně, bez žargonu.',
  },
  {
    icon: Target,
    title: 'Zaměření na výsledek',
    description:
      'Nestavíme weby jen proto, aby vypadaly hezky. Každý prvek má svůj účel — přivést zákazníky a zvýšit konverze.',
  },
  {
    icon: Clock,
    title: 'Dlouhodobá podpora',
    description:
      'Po spuštění webu nekončíme. Nabízíme správu, aktualizace a technickou podporu, abyste se mohli soustředit na podnikání.',
  },
]

const stats = [
  { value: '50+', label: 'Dokončených projektů' },
  { value: '98%', label: 'Spokojených klientů' },
  { value: '7+', label: 'Let zkušeností' },
  { value: '24h', label: 'Průměrná doba odpovědi' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

export default function ONasPage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="section pt-8 md:pt-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-accent font-medium mb-4"
            >
              Kdo stojí za Weboffka.cz
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-1 mb-6"
            >
              Tvoříme weby s{' '}
              <span className="text-gradient">vášní</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted text-lg leading-relaxed"
            >
              Jsme česká vývojářská firma ajtak.it. Weboffka.cz je náš
              projekt zaměřený na tvorbu moderních webových stránek pro
              každého — od jednotlivců a živnostníků po střední firmy.
              Věříme, že profesionální web by měl být dostupný všem.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section pt-0">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card text-center py-8"
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

      {/* Story */}
      <section className="section">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 mb-8 text-center">Náš příběh</h2>
            <div className="card-glass p-8 space-y-4 text-muted leading-relaxed">
              <p>
                Weboffka.cz vznikla z jednoduché myšlenky: kvalitní web by neměl
                stát majlant ani trvat měsíce. Viděli jsme, jak malé firmy a
                živnostníci buď platí za předražené WordPress šablony, nebo
                používají stavebnice jako Wix, které vypadají amatérsky.
              </p>
              <p>
                Proto jsme vytvořili Weboffka.cz — službu, kde dostanete
                profesionální web na míru za férovou cenu. Žádné šablony, žádný
                WordPress, žádné skryté poplatky. Používáme moderní technologie
                (React, Next.js), které zajistí, že váš web bude rychlý,
                bezpečný a bude skvěle fungovat na všech zařízeních.
              </p>
              <p>
                Za projektem stojí firma <strong className="text-foreground">ajtak.it</strong> —
                český vývojářský tým s lety zkušeností v tvorbě webů, mobilních
                aplikací a SaaS řešení. Naším cílem je dělat technologie
                dostupné a srozumitelné pro všechny.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-background-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">Proč právě my</h2>
            <p className="text-muted max-w-xl mx-auto">
              Naše hodnoty a přístup, díky kterým tvoříme weby, na které
              jsme pyšní.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                    <value.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex p-4 rounded-2xl bg-accent/10 mb-6">
              <Users size={32} className="text-accent" />
            </div>
            <h2 className="heading-2 mb-4">Malý tým, velké výsledky</h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Za Weboffka.cz stojí zakladatel Julius Joska a síť
              prověřených spolupracovníků — designérů, vývojářů a copywriterů.
              Díky tomu můžeme flexibilně sestavit tým přesně pro váš projekt.
            </p>
            <div className="card-glass p-8 inline-block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-green-500 flex items-center justify-center text-background text-xl font-bold">
                  JJ
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">Julius Joska</p>
                  <p className="text-muted text-sm">Zakladatel — ajtak.it</p>
                  <div className="flex gap-3 mt-1">
                    <Lightbulb size={14} className="text-accent" />
                    <span className="text-xs text-muted">Full-stack developer & podnikatel</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
              Připraveni spolupracovat?
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-8">
              Napište nám o vašem projektu. Rádi vám poradíme a připravíme
              nezávaznou nabídku. První konzultace je zdarma.
            </p>
            <Link href="/kontakt" className="btn-primary text-lg px-8 py-4">
              Napište nám
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
