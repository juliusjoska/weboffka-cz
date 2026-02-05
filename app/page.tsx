import { Hero } from '@/components/sections/Hero'
import { PainPoints } from '@/components/sections/PainPoints'
import { Solution } from '@/components/sections/Solution'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Services } from '@/components/sections/Services'
import { Pricing } from '@/components/sections/Pricing'
import { About } from '@/components/sections/About'
import { CTA } from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Solution />
      <HowItWorks />
      <Services />
      <Pricing />
      <About />
      <CTA />
    </>
  )
}
