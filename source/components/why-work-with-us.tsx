import { Card, CardContent } from "@/source/components/ui/card"
import { Award, Clock, Users, TrendingUp } from "lucide-react"

const metrics = [
  {
    icon: Award,
    value: "20+",
    label: "Years of Experience",
    description: "Proven track record in enterprise and startup environments",
  },
  {
    icon: Users,
    value: "95%+",
    label: "Client Satisfaction",
    description: "Consistently exceeding expectations with quality deliverables",
  },
  {
    icon: Clock,
    value: "100%",
    label: "On-Time Delivery",
    description: "Guaranteed project completion within agreed timelines",
  },
  {
    icon: TrendingUp,
    value: "200+",
    label: "Products Launched",
    description: "From MVPs to enterprise solutions across industries",
  },
]

export function WhyWorkWithUs() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Work With Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Founded by entrepreneurs, for entrepreneurs. We understand the challenges of building products that scale
            and deliver real business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-accent/10 rounded-full">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <div className="font-serif text-4xl font-bold text-foreground mb-2">{metric.value}</div>
                  <div className="font-semibold text-foreground mb-2">{metric.label}</div>
                  <p className="text-sm text-muted-foreground text-pretty">{metric.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
