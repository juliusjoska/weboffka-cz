'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="w-container">
            <div className="w-card-glass relative max-w-2xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 !p-5">
              <Cookie className="text-lime flex-shrink-0 hidden sm:block" size={24} />
              <div className="flex-1">
                <p className="text-sm text-text mb-1 font-medium">
                  Používáme cookies
                </p>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Tento web používá pouze technicky nezbytné cookies pro správné fungování.
                  Žádné analytické ani marketingové cookies bez vašeho souhlasu.{' '}
                  <Link href="/cookies" className="text-lime hover:underline">
                    Více informací
                  </Link>
                </p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={handleReject}
                  className="w-btn-ghost !px-4 !py-2 !text-sm"
                >
                  Odmítnout
                </button>
                <button
                  onClick={handleAccept}
                  className="w-btn-primary !px-4 !py-2 !text-sm"
                >
                  Přijmout
                </button>
              </div>
              <button
                onClick={handleReject}
                className="absolute top-3 right-3 sm:hidden text-text-secondary hover:text-text transition-colors"
                aria-label="Zavřít"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
