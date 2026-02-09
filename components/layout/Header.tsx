'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/sluzby', label: 'Služby' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/cenik', label: 'Ceník' },
  { href: '/o-nas', label: 'O nás' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="group">
          <Image
            src="/logo.png"
            alt="Weboffka"
            width={180}
            height={50}
            className="h-12 md:h-14 w-auto group-hover:scale-105 transition-transform"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="px-4 py-2 text-sm text-muted hover:text-foreground transition-colors rounded-lg hover:bg-white/5">
              {link.label}
            </Link>
          ))}
          <Link href="/kontakt" className="btn-primary ml-4 text-sm px-5 py-2.5">
            Chci web!
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-muted hover:text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Zavřít menu' : 'Otevřít menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block py-3 text-muted hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link href="/kontakt" className="btn-primary w-full text-center mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                Chci web!
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
