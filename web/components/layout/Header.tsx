'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/sluzby', label: 'Služby' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/cenik', label: 'Ceník' },
  { href: '/o-nas', label: 'O nás' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass border-b border-white/5' : ''
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-24 md:h-28">
          <Link href="/" className="relative group">
            <Image
              src="/logo.png"
              alt="Weboffka"
              width={400}
              height={220}
              className="w-[200px] md:w-[280px] h-auto transition-opacity group-hover:opacity-90"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="relative text-sm text-secondary hover:text-white transition-colors py-2 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#c8ff00] to-[#9fcc00] group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Link href="/kontakt" className="btn-primary text-sm">
                Kontakt
              </Link>
            </motion.div>
          </div>

          <button
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="container py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 text-secondary hover:text-white hover:pl-2 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Link
                  href="/kontakt"
                  className="btn-primary w-full text-center mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
