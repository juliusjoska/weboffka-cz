import Link from 'next/link'

const footerLinks = {
  navigace: [
    { href: '/sluzby', label: 'Služby' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/cenik', label: 'Ceník' },
    { href: '/o-mne', label: 'O mně' },
    { href: '/kontakt', label: 'Kontakt' },
  ],
  legal: [
    { href: '/podminky', label: 'Obchodní podmínky' },
    { href: '/gdpr', label: 'Ochrana osobních údajů' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight">
              webo<span className="text-accent">ff</span>ka
            </Link>
            <p className="mt-3 text-white/60">
              Webovky bez starostí.
            </p>
            <p className="mt-4 text-sm text-white/40">
              © 2026 Julius Joska
            </p>
          </div>

          {/* Navigace */}
          <div>
            <h3 className="font-semibold mb-4">Navigace</h3>
            <ul className="space-y-2">
              {footerLinks.navigace.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-white/60">
              <li>
                <a
                  href="mailto:julius@weboffka.cz"
                  className="hover:text-white transition-colors"
                >
                  julius@weboffka.cz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            Vytvořeno s láskou k čistému kódu
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/40 hover:text-white/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
