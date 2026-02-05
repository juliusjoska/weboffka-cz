import Link from 'next/link'

const footerLinks = {
  navigace: [
    { href: '/sluzby', label: 'Služby' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/cenik', label: 'Ceník' },
    { href: '/o-nas', label: 'O nás' },
    { href: '/kontakt', label: 'Kontakt' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-light">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold font-heading tracking-tight">
              WEBO<span className="text-accent">FF</span>KA
            </Link>
            <p className="mt-3 text-muted">
              Moderní webová řešení, která fungují.
            </p>
            <p className="mt-4 text-sm text-muted/60">
              © 2026 Weboffka
            </p>
          </div>

          {/* Navigace */}
          <div>
            <h3 className="font-heading font-semibold mb-4 text-foreground">Navigace</h3>
            <ul className="space-y-2">
              {footerLinks.navigace.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-heading font-semibold mb-4 text-foreground">Kontakt</h3>
            <ul className="space-y-2 text-muted">
              <li>
                <a
                  href="mailto:info@weboffka.cz"
                  className="hover:text-accent transition-colors"
                >
                  info@weboffka.cz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted/60">
            Vytvořeno s láskou k čistému kódu
          </p>
        </div>
      </div>
    </footer>
  )
}
