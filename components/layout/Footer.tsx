import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/sluzby', label: 'Služby' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/cenik', label: 'Ceník' },
  { href: '/o-nas', label: 'O nás' },
  { href: '/kontakt', label: 'Kontakt' },
]

const legalLinks = [
  { href: '/ochrana-osobnich-udaju', label: 'Ochrana osobních údajů' },
  { href: '/cookies', label: 'Cookies' },
  { href: '/obchodni-podminky', label: 'Obchodní podmínky' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Image src="/logo.png" alt="Weboffka" width={160} height={45} className="h-12 w-auto mb-4" />
            <p className="text-sm text-muted mb-4 max-w-sm">
              Moderní webové stránky pro každého. Od osobních webů přes firemní
              prezentace po e-shopy — bez WordPressu, bez komplikací.
            </p>
            <div className="text-xs text-muted/60 space-y-1">
              <p>Julius Joska — ajtak.it</p>
              <p>IČO: 24409979</p>
              <p>Neplátce DPH</p>
              <p>Zapsán v živnostenském rejstříku</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Navigace</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-muted hover:text-foreground transition-colors">{link.label}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Kontakt</h4>
            <div className="space-y-2 mb-6">
              <a href="mailto:info@ajtak.it" className="text-sm text-muted hover:text-accent transition-colors block">info@ajtak.it</a>
              <a href="tel:+420775305305" className="text-sm text-muted hover:text-accent transition-colors block">+420 775 305 305</a>
            </div>
            <h4 className="text-sm font-medium mb-4">Právní</h4>
            <nav className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-muted hover:text-foreground transition-colors">{link.label}</Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted/60">
            <p>&copy; {new Date().getFullYear()} weboffka.cz — ajtak.it. Všechna práva vyhrazena.</p>
            <p>Webové stránky na míru z České republiky</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
