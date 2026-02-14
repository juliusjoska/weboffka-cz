import { Hero } from '@/components/sections/Hero'
import { Showcase } from '@/components/sections/Showcase'
import { Process } from '@/components/sections/Process'
import { Comparison } from '@/components/sections/Comparison'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Showcase />
      <Process />
      <Comparison />
      <Testimonials />
      <CTA />
    </>
  )
}
