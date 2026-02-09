import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/layout/CookieBanner'

const inter = Inter({ subsets: ['latin', 'latin-ext'], display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: 'Weboffka.cz | Webové stránky na míru pro každého',
    template: '%s | Weboffka.cz',
  },
  description: 'Tvoříme moderní webové stránky na míru. Od osobních webů přes firemní prezentace po e-shopy. Bez WordPressu, bez komplikací. Český tým, férové ceny.',
  keywords: 'tvorba webových stránek, webové stránky na míru, web pro firmy, web pro živnostníky, e-shop, landing page, redesign webu',
  authors: [{ name: 'Julius Joska', url: 'https://ajtak.it' }],
  creator: 'ajtak.it',
  icons: { icon: '/favicon.ico' },
  metadataBase: new URL('https://weboffka.cz'),
  openGraph: {
    title: 'Weboffka.cz | Webové stránky na míru pro každého',
    description: 'Moderní weby na míru. Od osobních webů po e-shopy. Bez WordPressu, bez komplikací.',
    url: 'https://weboffka.cz',
    siteName: 'Weboffka.cz',
    locale: 'cs_CZ',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Weboffka.cz - ajtak.it',
              url: 'https://weboffka.cz',
              email: 'info@ajtak.it',
              telephone: '+420 775 305 305',
              description: 'Tvorba moderních webových stránek na míru. Od osobních webů přes firemní prezentace po e-shopy.',
              founder: { '@type': 'Person', name: 'Julius Joska' },
              address: { '@type': 'PostalAddress', addressLocality: 'Praha', addressCountry: 'CZ' },
              priceRange: 'od 14 900 Kč',
              sameAs: ['https://github.com/juliusjoska', 'https://ajtak.it'],
              areaServed: { '@type': 'Country', name: 'Česká republika' },
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
