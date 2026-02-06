'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'

const links = [
  { href: '/sluzby', label: 'Služby' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/cenik', label: 'Ceník' },
  { href: '/o-nas', label: 'O nás' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-50" />

      <div className="container relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/logo.png"
              alt="Weboffka"
              width={280}
              height={77}
              className="w-[180px] h-auto mb-4"
            />
            <p className="text-secondary text-sm max-w-xs">
              Moderní webová řešení pro firmy, které chtějí růst. Bez WordPressu. Bez kompromisů.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-sm mb-4 text-gradient">Navigace</h4>
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-secondary hover:text-white transition-colors text-sm w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-sm mb-4 text-gradient">Kontakt</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@weboffka.cz"
                className="flex items-center gap-3 text-secondary hover:text-[#c8ff00] transition-colors text-sm group"
              >
                <Mail size={16} className="group-hover:text-[#c8ff00]" />
                info@weboffka.cz
              </a>
              <div className="flex items-center gap-3 text-secondary text-sm">
                <MapPin size={16} />
                Česká republika
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="divider mb-8" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-secondary">
            © 2026 Weboffka. Všechna práva vyhrazena.
          </p>
          <div className="flex items-center gap-6 text-sm text-secondary">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#c8ff00] rounded-full animate-pulse" />
              Online
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
