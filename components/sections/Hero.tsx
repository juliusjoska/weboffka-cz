'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container">
        <div className="max-w-3xl">
          <Image
            src="/logo.png"
            alt="Weboffka"
            width={400}
            height={100}
            className="h-16 md:h-20 w-auto mb-8"
            priority
          />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Moderní weby,
            <br />
            <span className="text-accent">které fungují.</span>
          </h1>

          <p className="text-xl text-muted mb-10 max-w-xl">
            Děláme weby na míru pro firmy a podnikatele.
            Bez WordPressu, bez šablon, bez zbytečností.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/kontakt" className="btn-primary text-lg px-8 py-4">
              Chci web
            </Link>
            <Link href="/portfolio" className="btn-outline text-lg px-8 py-4">
              Naše práce
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
