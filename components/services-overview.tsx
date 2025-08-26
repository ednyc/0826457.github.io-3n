import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Palette, Code, Users, Brain, Wrench } from "lucide-react"

const services = [
  {
    icon: Lightbulb,
    title: "Product Scope & Strategy",
    description:
      "Structured 2-week vision-to-feature planning that cuts waste and validates core ideas before development begins.",
    badge: "Strategy",
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    description:
      "User-centric design that delights customers and reduces development costs through intuitive, conversion-focused experiences.",
    badge: "Design",
  },
  {
    icon: Code,
    title: "Custom Development",
    description:
      "Full-stack web and mobile solutions built with modern tech stacks, microservices architecture, and enterprise security.",
    badge: "Development",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description:
      "Embed a complete team of front-end, back-end, design, and QA professionals directly into your organization.",
    badge: "Teams",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Machine learning and AI-powered features that give your product a competitive edge in the modern marketplace.",
    badge: "AI/ML",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing evolution, performance tuning, security updates, and feature enhancements to keep your product competitive.",
    badge: "Support",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">What We Do</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From initial concept to scalable product, we provide end-to-end services that transform your ideas into
            market-ready solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge variant="secondary">{service.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
