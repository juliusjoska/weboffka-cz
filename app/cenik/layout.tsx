import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ceník',
  description: 'Transparentní ceník tvorby webových stránek. Od jednostránkového webu za 14 900 Kč po kompletní e-shop. Férové ceny bez skrytých poplatků.',
}

export default function CenikLayout({ children }: { children: React.ReactNode }) {
  return children
}
