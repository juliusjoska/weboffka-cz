import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'O nás',
  description: 'Jsme ajtak.it — český vývojář webových stránek. Tvoříme moderní weby bez WordPressu s důrazem na rychlost, jednoduchost a osobní přístup.',
}

export default function ONasLayout({ children }: { children: React.ReactNode }) {
  return children
}
