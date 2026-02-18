import Link from 'next/link'
import Image from 'next/image'
import { Github } from 'lucide-react'

const navLinks = [
  { name: 'Služby', href: '/sluzby' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Ceník', href: '/cenik' },
  { name: 'O nás', href: '/o-nas' },
  { name: 'Kontakt', href: '/kontakt' },
]

const legalLinks = [
  { name: 'Ochrana osobních údajů', href: '/ochrana-osobnich-udaju' },
  { name: 'Cookies', href: '/cookies' },
  { name: 'Obchodní podmínky', href: '/obchodni-podminky' },
]

export function Footer() {
  return (
    <footer>
      <div className="w-divider" />

      <div className="w-section-sm">
        <div className="w-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
            <div className="lg:col-span-2">
              <Image
                src="/logo.png"
                alt="weboffka.cz"
                width={140}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-text-secondary text-sm max-w-sm mb-6 leading-relaxed">
                Moderní webové stránky na míru. Bez WordPressu, bez komplikací
                — čistý kód, rychlý web, spokojený klient.
              </p>
              <a
                href="https://github.com/juliusjoska"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-lime transition-colors text-sm"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
            </div>

            <div>
              <h4 className="text-text font-display font-semibold text-sm mb-4">
                Navigace
              </h4>
              <nav className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-lime transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-text font-display font-semibold text-sm mb-4">
                Kontakt
              </h4>
              <div className="flex flex-col gap-2.5 text-sm">
                <a
                  href="mailto:info@ajtak.it"
                  className="text-text-secondary hover:text-lime transition-colors"
                >
                  info@ajtak.it
                </a>
                <a
                  href="tel:+420731860594"
                  className="text-text-secondary hover:text-lime transition-colors"
                >
                  +420 731 860 594
                </a>
                <p className="text-text-tertiary">IČO: 24409979</p>
              </div>
            </div>
          </div>

          <div className="w-divider" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-caption text-text-secondary">
            <p>
              &copy; {new Date().getFullYear()} weboffka.cz &mdash; vytvořil{' '}
              <a href="https://juliusjoska.cz" target="_blank" rel="noopener" className="hover:text-lime transition-colors">Julius Joska</a>
              {' | '}
              <a href="https://ajtak.it" target="_blank" rel="noopener" className="hover:text-lime transition-colors">ajtak.it</a>
            </p>
            <nav className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-lime transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
