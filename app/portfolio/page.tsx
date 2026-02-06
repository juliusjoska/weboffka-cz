import { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portfolio | Weboffka',
  description: 'Ukázky webových projektů. Landing pages, firemní prezentace, e-commerce.',
  openGraph: {
    title: 'Portfolio | Weboffka',
    description: 'Ukázky webových projektů. Landing pages, firemní prezentace, e-commerce.',
    url: 'https://weboffka.cz/portfolio',
  },
}

const projects = [
  {
    title: 'Sepot',
    category: 'E-commerce',
    description: 'Moderní e-shop s potravinami s důrazem na uživatelský zážitek.',
    image: '/images/portfolio/placeholder.jpg',
    link: '#',
  },
  {
    title: 'Moje Obec',
    category: 'SaaS',
    description: 'Platforma pro správu obecních webů a komunikaci s občany.',
    image: '/images/portfolio/placeholder.jpg',
    link: '#',
  },
  {
    title: 'Tastly',
    category: 'Aplikace',
    description: 'Mobilní aplikace pro sdílení a objevování receptů.',
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
              Výběr projektů, na které jsem hrdý. Každý web je příběh.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-background-secondary rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-background relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted">
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
              Některé projekty nemůžu zveřejnit kvůli NDA.
              <br />
              Pokud chcete vidět více, napište mi.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent/10 border-t border-border">
        <div className="container text-center">
          <h2 className="heading-2 mb-4">Chcete podobný web?</h2>
          <p className="text-muted mb-8">
            Napište mi o vašem projektu a udělám něco skvělého.
          </p>
          <Link href="/kontakt" className="btn-primary">
            Začít projekt
          </Link>
        </div>
      </section>
    </div>
  )
}
