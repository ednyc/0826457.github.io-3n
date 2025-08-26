import { Navigation } from "@/source/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/source/components/ui/card"
import { Button } from "@/source/components/ui/button"
import { Badge } from "@/source/components/ui/badge"
import Link from "next/link"
import { Lightbulb, Palette, Code, Users, Brain, Wrench, ArrowRight, CheckCircle } from "lucide-react"

const services = [
  {
    id: "product-strategy",
    icon: Lightbulb,
    title: "Product Scope & Strategy",
    description:
      "Structured 2-week vision-to-feature planning that cuts waste and validates core ideas before development begins.",
    features: [
      "Market research and competitive analysis",
      "User persona development",
      "Feature prioritization matrix",
      "Technical architecture planning",
      "Risk assessment and mitigation",
    ],
    deliverables: "Product roadmap, technical specifications, and go-to-market strategy",
    timeline: "2 weeks",
    price: "Starting at $15,000",
    badge: "Strategy",
  },
  {
    id: "design",
    icon: Palette,
    title: "UX/UI Design",
    description:
      "User-centric design that delights customers and reduces development costs through intuitive, conversion-focused experiences.",
    features: [
      "User experience research",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Design system creation",
      "Usability testing",
    ],
    deliverables: "Complete design system, interactive prototypes, and style guide",
    timeline: "4-6 weeks",
    price: "Starting at $25,000",
    badge: "Design",
  },
  {
    id: "development",
    icon: Code,
    title: "Custom Development",
    description:
      "Full-stack web and mobile solutions built with modern tech stacks, microservices architecture, and enterprise security.",
    features: [
      "Full-stack web applications",
      "Mobile app development",
      "API design and integration",
      "Database architecture",
      "Security implementation",
    ],
    deliverables: "Production-ready application with documentation and deployment",
    timeline: "8-16 weeks",
    price: "Starting at $50,000",
    badge: "Development",
  },
  {
    id: "teams",
    icon: Users,
    title: "Dedicated Teams",
    description:
      "Embed a complete team of front-end, back-end, design, and QA professionals directly into your organization.",
    features: ["Full-stack developers", "UI/UX designers", "QA engineers", "DevOps specialists", "Project management"],
    deliverables: "Dedicated team integration with your existing workflows",
    timeline: "Ongoing",
    price: "Starting at $12,000/month",
    badge: "Teams",
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI Integration",
    description:
      "Machine learning and AI-powered features that give your product a competitive edge in the modern marketplace.",
    features: [
      "Natural language processing",
      "Computer vision solutions",
      "Predictive analytics",
      "Recommendation systems",
      "AI model deployment",
    ],
    deliverables: "AI-powered features integrated into your existing product",
    timeline: "6-12 weeks",
    price: "Starting at $40,000",
    badge: "AI/ML",
  },
  {
    id: "support",
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing evolution, performance tuning, security updates, and feature enhancements to keep your product competitive.",
    features: [
      "24/7 monitoring and support",
      "Performance optimization",
      "Security updates",
      "Feature enhancements",
      "Bug fixes and maintenance",
    ],
    deliverables: "Ongoing maintenance with monthly reports and updates",
    timeline: "Ongoing",
    price: "Starting at $5,000/month",
    badge: "Support",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From initial concept to ongoing support, we provide comprehensive services that transform your ideas into
              successful, scalable products.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.id} className="border-border hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                      <Badge variant="secondary">{service.badge}</Badge>
                    </div>
                    <CardTitle className="text-2xl font-semibold text-foreground mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border">
                        <div>
                          <div className="text-sm font-semibold text-foreground">Timeline</div>
                          <div className="text-sm text-muted-foreground">{service.timeline}</div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground">Investment</div>
                          <div className="text-sm text-accent font-medium">{service.price}</div>
                        </div>
                        <div className="md:col-span-1">
                          <Button asChild size="sm" className="w-full">
                            <Link href={`/services/${service.id}`} className="flex items-center gap-2">
                              Learn More
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Book a free discovery call and we'll help you identify the best approach for your project.
          </p>
          <Button asChild size="lg">
            <Link href="/contact" className="flex items-center gap-2">
              Book Discovery Call
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
