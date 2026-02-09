import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { Technologies } from '@/components/sections/Technologies'
import { WhyUs } from '@/components/sections/WhyUs'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Technologies />
      <WhyUs />
      <Testimonials />
      <CTA />
    </>
  )
}
