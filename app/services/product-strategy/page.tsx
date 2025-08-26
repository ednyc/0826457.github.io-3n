import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Lightbulb, CheckCircle, ArrowRight, Clock, DollarSign, Users } from "lucide-react"

const processSteps = [
  {
    step: "Week 1",
    title: "Discovery & Research",
    description:
      "Market analysis, competitor research, and stakeholder interviews to understand your vision and market opportunity.",
  },
  {
    step: "Week 2",
    title: "Strategy & Planning",
    description: "Feature prioritization, technical architecture planning, and roadmap creation with clear milestones.",
  },
]

const deliverables = [
  "Comprehensive market analysis report",
  "User persona profiles and journey maps",
  "Feature prioritization matrix with ROI analysis",
  "Technical architecture recommendations",
  "Product roadmap with 6-month milestones",
  "Go-to-market strategy framework",
  "Risk assessment and mitigation plan",
]

export default function ProductStrategyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              Strategy
            </Badge>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Product Scope & <span className="text-accent">Strategy</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Structured 2-week vision-to-feature planning that cuts waste and validates core ideas before development
              begins.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="p-6 bg-accent/10 rounded-2xl">
              <Lightbulb className="h-16 w-16 text-accent mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Why Start with Strategy?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Most product failures happen due to poor planning. Our strategic approach ensures you build the right
              thing, for the right users, at the right time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-border">
              <CardHeader>
                <div className="p-4 bg-accent/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Reduce Development Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Avoid costly pivots and feature bloat by validating ideas upfront. Save 30-50% on development costs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardHeader>
                <div className="p-4 bg-accent/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Faster Time to Market</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Clear roadmap and prioritized features mean faster development cycles and quicker market entry.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardHeader>
                <div className="p-4 bg-accent/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Better User Fit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Deep user research ensures your product solves real problems for real people from day one.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our 2-Week Process</h2>
            <p className="text-xl text-muted-foreground">
              Intensive, collaborative sessions that transform your vision into a concrete action plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {step.step}
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

      {/* Deliverables */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">What You'll Receive</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive documentation and strategic frameworks to guide your entire product development journey.
            </p>
          </div>

          <Card className="border-border">
            <CardContent className="pt-8">
              <ul className="space-y-4">
                {deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Validate Your Idea?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Investment: Starting at $15,000 for a comprehensive 2-week strategy engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Strategy Session
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
