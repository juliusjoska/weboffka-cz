import { Hero } from '@/components/sections/Hero'
import { PainPoints } from '@/components/sections/PainPoints'
import { Solution } from '@/components/sections/Solution'
import { Services } from '@/components/sections/Services'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { About } from '@/components/sections/About'
import { CTA } from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Solution />
      <Services />
      <HowItWorks />
      <About />
      <CTA />
    </>
  )
}
