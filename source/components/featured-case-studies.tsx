import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/source/components/ui/card"
import { Badge } from "@/source/components/ui/badge"
import { Button } from "@/source/components/ui/button"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

const caseStudies = [
  {
    title: "FinTech MVP Launch",
    description:
      "Built and launched a complete fintech MVP in 12 weeks, enabling secure payments and user onboarding for 10K+ users.",
    industry: "FinTech",
    outcome: "10K+ Users in 3 months",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "/fintech-dashboard.png",
  },
  {
    title: "Enterprise SaaS Platform",
    description:
      "Scaled a B2B SaaS platform to handle 1M+ transactions daily with microservices architecture and AI-powered analytics.",
    industry: "SaaS",
    outcome: "1M+ Daily Transactions",
    technologies: ["Next.js", "Kubernetes", "AI/ML", "Redis"],
    image: "/enterprise-saas-analytics-dashboard.png",
  },
  {
    title: "Mobile Health App",
    description:
      "Developed a HIPAA-compliant mobile health application with real-time monitoring and telemedicine capabilities.",
    industry: "HealthTech",
    outcome: "50K+ Active Patients",
    technologies: ["React Native", "WebRTC", "FHIR", "AWS"],
    image: "/mobile-health-app-interface.png",
  },
]

export function FeaturedCaseStudies() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Real wins from real clients. See how we've helped businesses transform their ideas into successful, scalable
            products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="aspect-video bg-muted">
                <img src={study.image || "/placeholder.svg"} alt={study.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{study.industry}</Badge>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{study.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{study.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="font-semibold text-accent mb-1">Outcome:</div>
                  <div className="text-foreground">{study.outcome}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/work" className="flex items-center gap-2">
              View All Case Studies
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
