import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { About } from '@/components/sections/About'
import { CTA } from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <About />
      <CTA />
    </>
  )
}
