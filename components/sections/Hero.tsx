'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-accent font-medium mb-4">
            Weby & appky na míru
          </p>

          <h1 className="heading-1 mb-6">
            Webovky bez starostí
          </h1>

          <p className="text-xl text-muted max-w-2xl mb-10">
            Moderní weby a aplikace, které fungují a vydělávají.
            Bez WordPressu. Bez šablon. Bez zbytečností.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/kontakt" className="btn-primary text-lg px-8 py-4">
              Chci web <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link href="#sluzby" className="btn-outline text-lg px-8 py-4">
              Jak to funguje
            </Link>
          </div>

          <div className="flex gap-12 mt-16 pt-8 border-t border-border">
            <div>
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-sm text-muted">projektů</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">8+</div>
              <div className="text-sm text-muted">let zkušeností</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">100%</div>
              <div className="text-sm text-muted">dokončených</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
