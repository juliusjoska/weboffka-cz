import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Služby',
  description: 'Tvorba webových stránek na míru — firemní prezentace, landing pages, e-shopy, osobní weby, redesign a správa. Bez WordPressu, bez komplikací.',
}

export default function SluzbyLayout({ children }: { children: React.ReactNode }) {
  return children
}
