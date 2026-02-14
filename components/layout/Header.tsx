'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Služby', href: '/sluzby' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Ceník', href: '/cenik' },
  { name: 'O nás', href: '/o-nas' },
  { name: 'Kontakt', href: '/kontakt' },
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
          ? 'backdrop-blur-xl border-b border-stroke bg-bg/80'
          : 'bg-transparent'
      }`}
    >
      <div className="w-container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="group flex items-center gap-0.5">
          <Image
            src="/logo.png"
            alt="weboffka.cz"
            width={160}
            height={44}
            className="h-10 md:h-12 w-auto group-hover:scale-[1.03] transition-transform"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-text-secondary hover:text-text transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/kontakt" className="w-btn-primary ml-4 text-sm !px-5 !py-2.5">
            Chci web
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-text-secondary hover:text-text transition-colors"
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
            transition={{ duration: 0.2 }}
            className="md:hidden bg-bg-elevated border-b border-stroke overflow-hidden"
          >
            <div className="w-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-text-secondary hover:text-text transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="w-btn-primary w-full text-center mt-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Chci web
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
