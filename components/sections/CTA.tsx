import Link from 'next/link'

export function CTA() {
  return (
    <section className="py-24 border-t border-border">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Máte projekt?
        </h2>
        <p className="text-muted text-lg mb-8 max-w-md mx-auto">
          Napište nám. Ozveme se do 24 hodin.
        </p>
        <Link href="/kontakt" className="btn-primary text-lg px-10 py-4">
          Kontaktovat
        </Link>
      </div>
    </section>
  )
}
