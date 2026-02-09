'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Petra Nováková',
    role: 'Majitelka kavárny',
    text: 'Konečně máme web, který vypadá profesionálně a funguje na mobilu. Zákazníci nás teď najdou hned a objednávky se zdvojnásobily.',
    rating: 5,
  },
  {
    name: 'Martin Dvořák',
    role: 'Freelance fotograf',
    text: 'Portfolio, které opravdu ukazuje mou práci. Bleskově rychlé načítání fotek a moderní design. Přesně to, co jsem hledal.',
    rating: 5,
  },
  {
    name: 'Jana Králová',
    role: 'Majitelka e-shopu',
    text: 'Přechod z WordPressu byl nejlepší rozhodnutí. Nový e-shop je 3x rychlejší a konverze šly nahoru o 40 %. Skvělá spolupráce.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="reference" className="section bg-background-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">
            Co říkají <span className="text-gradient">naši klienti</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Spokojení klienti jsou naší nejlepší referencí.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass relative"
            >
              <Quote className="w-8 h-8 text-accent/20 absolute top-4 right-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              <p className="text-muted mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
