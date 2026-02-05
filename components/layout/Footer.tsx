import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="Weboffka"
              width={120}
              height={30}
              className="h-6 w-auto mb-4"
            />
            <p className="text-sm text-muted">
              © 2026 Weboffka
            </p>
          </div>

          <div className="flex gap-8 text-sm text-muted">
            <Link href="/sluzby" className="hover:text-foreground">Služby</Link>
            <Link href="/portfolio" className="hover:text-foreground">Portfolio</Link>
            <Link href="/cenik" className="hover:text-foreground">Ceník</Link>
            <Link href="/kontakt" className="hover:text-foreground">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
