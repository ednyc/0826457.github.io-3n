import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { WhyWorkWithUs } from "@/components/why-work-with-us"
import { FeaturedCaseStudies } from "@/components/featured-case-studies"
import { ClientTestimonials } from "@/components/client-testimonials"
import { FooterCTA } from "@/components/footer-cta"

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
