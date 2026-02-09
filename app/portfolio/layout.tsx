import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Ukázky našich webových projektů — firemní prezentace, e-shopy, portfolia a landing pages. Podívejte se, co umíme.',
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
