import { Hero } from "@/components/sections/hero"
import { ServicesPreview } from "@/components/sections/services-preview"
import { PortfolioPreview } from "@/components/sections/portfolio-preview"
import { AboutPreview } from "@/components/sections/about-preview"
import { Testimonials } from "@/components/sections/testimonials"
import { Partners } from "@/components/sections/partners"
import { CTA } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <PortfolioPreview />
      <Partners />
      <Testimonials />
      <CTA />
    </>
  )
}
