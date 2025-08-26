import { Navigation } from "@/source/components/navigation"
import { HeroSection } from "@/source/components/hero-section"
import { ServicesOverview } from "@/source/components/services-overview"
import { WhyWorkWithUs } from "@/source/components/why-work-with-us"
import { FeaturedCaseStudies } from "@/source/components/featured-case-studies"
import { ClientTestimonials } from "@/source/components/client-testimonials"
import { FooterCTA } from "@/source/components/footer-cta"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <WhyWorkWithUs />
      <FeaturedCaseStudies />
      <ClientTestimonials />
      <FooterCTA />
    </main>
  )
}
