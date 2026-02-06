import { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portfolio | Weboffka',
  description: 'Ukázky webových projektů. Landing pages, firemní prezentace, e-commerce.',
}

const projects = [
  {
    title: 'Firemní web pro IT firmu',
    category: 'Firemní prezentace',
    description: 'Moderní prezentace s animacemi a interaktivními prvky.',
    image: '/images/portfolio/placeholder.jpg',
    link: '#',
  },
  {
    title: 'Landing page pro SaaS',
    category: 'Landing page',
    description: 'Konverzní landing page s důrazem na CTA.',
    image: '/images/portfolio/placeholder.jpg',
    link: '#',
  },
  {
    title: 'Portfolio fotografa',
    category: 'Portfolio',
    description: 'Minimalistické portfolio s galerií a kontaktním formulářem.',
    image: '/images/portfolio/placeholder.jpg',
    link: '#',
  },
  {
    title: 'Web pro kavárnu',
    category: 'Lokální byznys',
    description: 'Stylový web s menu, galerií a rezervacemi.',
    image: '/images/portfolio/placeholder.jpg',
    link: '#',
  },
]

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="heading-1 mb-4">Portfolio</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Výběr projektů, na které jsme hrdí. Každý web je příběh.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    [Screenshot]
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="font-bold text-xl mt-2 mb-2">{project.title}</h3>
                  <p className="text-muted mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  >
                    Zobrazit projekt <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="text-center mt-12">
            <p className="text-muted">
              Některé projekty nemůžeme zveřejnit kvůli NDA.
              <br />
              Pokud chcete vidět více, napište nám.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-foreground text-white">
        <div className="container text-center">
          <h2 className="heading-2 mb-4">Chcete podobný web?</h2>
          <p className="text-white/70 mb-8">
            Napište nám o vašem projektu a uděláme něco skvělého.
          </p>
          <Link href="/kontakt" className="btn bg-accent hover:bg-accent-dark text-white">
            Začít projekt
          </Link>
        </div>
      </section>
    </div>
  )
}
