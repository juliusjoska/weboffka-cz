import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/sluzby', label: 'Služby' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/cenik', label: 'Ceník' },
  { href: '/o-nas', label: 'O nás' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Image
              src="/logo.png"
              alt="Weboffka"
              width={160}
              height={45}
              className="h-10 w-auto mb-3"
            />
            <p className="text-sm text-muted mb-4">
              Moderní weby pro firmy, které chtějí růst.
            </p>
            <div className="text-xs text-muted/60 space-y-1">
              <p>Julius Joska - ajtak.it</p>
              <p>IČO: 24409979</p>
              <p>Nejsme plátci DPH</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Navigace</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Kontakt</h4>
            <a
              href="mailto:info@weboffka.cz"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              info@weboffka.cz
            </a>

            <h4 className="text-sm font-medium mt-6 mb-4">Právní</h4>
            <Link
              href="/ochrana-osobnich-udaju"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Ochrana osobních údajů
            </Link>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted/60">
            <p>&copy; {new Date().getFullYear()} Weboffka. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
