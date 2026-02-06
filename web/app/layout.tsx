import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Weboffka | Webovky bez starostí',
  description: 'Moderní webové stránky na míru. Bez WordPressu, bez komplikací, bez IT žargonu. Váš osobní webař pro firmy a podnikatele.',
  keywords: 'tvorba webových stránek, webové stránky na míru, moderní web design, web pro firmy',
  authors: [{ name: 'Julius Joska' }],
  openGraph: {
    title: 'Weboffka | Webovky bez starostí',
    description: 'Moderní webové stránky na míru. Váš osobní webař.',
    url: 'https://weboffka.cz',
    siteName: 'Weboffka',
    locale: 'cs_CZ',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
