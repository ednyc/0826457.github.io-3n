import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Palette, ArrowRight, Eye, Smartphone, Zap } from "lucide-react"

const designProcess = [
  {
    phase: "Research",
    title: "User Research & Analysis",
    description:
      "Deep dive into user needs, behaviors, and pain points through interviews, surveys, and competitive analysis.",
  },
  {
    phase: "Ideation",
    title: "Wireframing & Prototyping",
    description: "Create low-fidelity wireframes and interactive prototypes to test concepts and user flows.",
  },
  {
    phase: "Design",
    title: "Visual Design & Branding",
    description:
      "Develop high-fidelity designs, color schemes, typography, and brand elements that resonate with users.",
  },
  {
    phase: "System",
    title: "Design System Creation",
    description: "Build comprehensive design systems with reusable components for consistent, scalable design.",
  },
]

const designServices = [
  {
    icon: Eye,
    title: "User Experience (UX)",
    description: "Research-driven UX design that creates intuitive, delightful user journeys.",
  },
  {
    icon: Palette,
    title: "User Interface (UI)",
    description: "Beautiful, modern interfaces that convert visitors into customers.",
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    description: "Native mobile app designs optimized for iOS and Android platforms.",
  },
  {
    icon: Zap,
    title: "Design Systems",
    description: "Scalable design systems that ensure consistency across all touchpoints.",
  },
]

export default function DesignPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              Design
            </Badge>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              UX/UI <span className="text-accent">Design</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              User-centric design that delights customers and reduces development costs through intuitive,
              conversion-focused experiences.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="p-6 bg-accent/10 rounded-2xl">
              <Palette className="h-16 w-16 text-accent mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Design Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From user research to final implementation, we create designs that users love and businesses profit from.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="p-4 bg-accent/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Design Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that ensures every design decision is backed by user research and business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designProcess.map((step, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {step.phase}
                  </Badge>
                  <CardTitle className="text-2xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Design Portfolio</h2>
            <p className="text-xl text-muted-foreground">
              See how our design expertise has transformed products across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-border">
              <div className="aspect-video bg-muted">
                <img
                  src="/fintech-dashboard.png"
                  alt="FinTech Dashboard Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">FinTech Dashboard</CardTitle>
                <CardDescription>Clean, data-driven interface for financial management platform</CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden border-border">
              <div className="aspect-video bg-muted">
                <img
                  src="/mobile-health-app-interface.png"
                  alt="Mobile Health App"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Health App Interface</CardTitle>
                <CardDescription>Intuitive mobile design for patient monitoring and telemedicine</CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden border-border">
              <div className="aspect-video bg-muted">
                <img
                  src="/enterprise-saas-analytics-dashboard.png"
                  alt="SaaS Analytics"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">SaaS Analytics</CardTitle>
                <CardDescription>Enterprise dashboard with advanced data visualization</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/work">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Create Amazing User Experiences?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Investment: Starting at $25,000 for comprehensive UX/UI design including research, prototyping, and design
            systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Design Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
