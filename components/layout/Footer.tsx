import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: '/sluzby', label: 'Služby' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/cenik', label: 'Ceník' },
  { href: '/o-nas', label: 'O nás' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="Weboffka"
              width={160}
              height={45}
              className="h-10 w-auto mb-3"
            />
            <p className="text-sm text-muted">© 2026 Weboffka</p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="text-sm">
            <a
              href="mailto:info@weboffka.cz"
              className="text-muted hover:text-accent transition-colors"
            >
              info@weboffka.cz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
