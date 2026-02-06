import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin', 'latin-ext'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Weboffka | Webovky bez starostí',
  description: 'Moderní webové stránky na míru. Bez WordPressu, bez komplikací, bez IT žargonu. Váš osobní webař pro firmy a podnikatele.',
  keywords: 'tvorba webových stránek, webové stránky na míru, moderní web design, web pro firmy',
  authors: [{ name: 'Julius Joska' }],
  icons: { icon: '/favicon.ico' },
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
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Weboffka',
              url: 'https://weboffka.cz',
              email: 'info@weboffka.cz',
              description: 'Moderní webové stránky na míru. Bez WordPressu, bez komplikací.',
              founder: { '@type': 'Person', name: 'Julius Joska' },
              address: { '@type': 'PostalAddress', addressCountry: 'CZ' },
              priceRange: 'od 19 900 Kč',
              sameAs: ['https://github.com/juliusjoska'],
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
