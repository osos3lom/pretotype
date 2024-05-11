import { About } from '@/components/landingpage/About'
import { Cta } from '@/components/landingpage/Cta'
import { Features } from '@/components/landingpage/Features'
import { Footer } from '@/components/landingpage/Footer'
import { Hero } from '@/components/landingpage/Hero'
import { HowItWorks } from '@/components/landingpage/HowItWorks'
import { Newsletter } from '@/components/landingpage/Newsletter'
import { Pricing } from '@/components/landingpage/Pricing'
import { Services } from '@/components/landingpage/Services'

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About/>
        <HowItWorks/>
        <Features/>
        <Services/>
        <Cta/>
        <Pricing/>
        <Newsletter/>
        <Footer/>
      </main>
    </div>
  )
}
