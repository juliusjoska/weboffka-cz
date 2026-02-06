import Link from 'next/link'

export function CTA() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="heading-2 mb-4">Pojďme na to</h2>
          <p className="text-muted text-lg mb-8">
            Napište mi o vašem projektu.
            Ozvu se do 24 hodin s konkrétní nabídkou.
          </p>
          <Link href="/kontakt" className="btn-primary text-lg px-10 py-4">
            Chci web
          </Link>
        </div>
      </div>
    </section>
  )
}
