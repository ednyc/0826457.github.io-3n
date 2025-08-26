import { Navigation } from "@/source/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/source/components/ui/card"
import { Button } from "@/source/components/ui/button"
import { Badge } from "@/source/components/ui/badge"
import Link from "next/link"
import { ArrowRight, CheckCircle, Zap, Users, Clock, Infinity } from "lucide-react"

const engagementModels = [
  {
    id: "mvp-sprint",
    icon: Zap,
    title: "MVP Sprint",
    subtitle: "Perfect for validating ideas quickly",
    description: "Get your product to market fast with our proven MVP development process.",
    duration: "8-12 weeks",
    price: "$30k - $70k",
    ideal: "Startups, new product ideas, market validation",
    includes: [
      "Product strategy & scope definition",
      "UX/UI design and prototyping",
      "Core feature development",
      "Basic testing and deployment",
      "2 weeks post-launch support",
    ],
    popular: false,
  },
  {
    id: "dedicated-team",
    icon: Users,
    title: "Dedicated Team",
    subtitle: "Your extended development team",
    description: "Scale your development capacity with a dedicated team of experts.",
    duration: "3+ months",
    price: "$12k - $25k/month",
    ideal: "Growing companies, ongoing development, scaling teams",
    includes: [
      "Full-stack developers (2-6 people)",
      "UI/UX designer",
      "QA engineer",
      "Technical project manager",
      "Weekly progress reports",
    ],
    popular: true,
  },
  {
    id: "hourly-consulting",
    icon: Clock,
    title: "Hourly Consulting",
    subtitle: "Flexible support when you need it",
    description: "Get expert advice and development support on an as-needed basis.",
    duration: "Flexible",
    price: "$150 - $250/hour",
    ideal: "Technical audits, code reviews, strategic consulting",
    includes: [
      "Senior-level expertise",
      "Flexible scheduling",
      "No long-term commitment",
      "Technical documentation",
      "Strategic recommendations",
    ],
    popular: false,
  },
  {
    id: "unlimited-design",
    icon: Infinity,
    title: "Unlimited Design",
    subtitle: "All the design work you need",
    description: "Unlimited design requests with fast turnaround times.",
    duration: "Monthly subscription",
    price: "$4,995/month",
    ideal: "Marketing teams, ongoing design needs, multiple projects",
    includes: [
      "Unlimited design requests",
      "2-3 day average turnaround",
      "Web & mobile design",
      "Brand & marketing materials",
      "Pause or cancel anytime",
    ],
    popular: false,
  },
]

const additionalServices = [
  {
    service: "Technical Audit",
    description: "Comprehensive review of your existing codebase and architecture",
    price: "$5k - $15k",
  },
  {
    service: "AI/ML Integration",
    description: "Add intelligent features to your existing product",
    price: "$25k - $75k",
  },
  {
    service: "Performance Optimization",
    description: "Speed up your application and reduce infrastructure costs",
    price: "$10k - $30k",
  },
  {
    service: "Security Assessment",
    description: "Identify and fix security vulnerabilities",
    price: "$8k - $20k",
  },
]

const faqs = [
  {
    question: "How do you determine project pricing?",
    answer:
      "We base pricing on project complexity, timeline, team size, and technology requirements. After our discovery call, we provide a detailed proposal with transparent pricing.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "We love working with startups and offer flexible payment terms. Many of our clients have gone from idea to successful exit with our help.",
  },
  {
    question: "What's included in ongoing support?",
    answer:
      "Our support includes bug fixes, security updates, performance monitoring, and feature enhancements. We offer different support tiers based on your needs.",
  },
  {
    question: "Can we start small and scale up?",
    answer:
      "Yes! Many clients start with an MVP Sprint and then move to a Dedicated Team model as they grow. We're flexible and adapt to your changing needs.",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Transparent <span className="text-accent">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Choose the engagement model that fits your needs and budget. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Engagement Models</h2>
            <p className="text-xl text-muted-foreground">
              Flexible options designed to match your project needs and business stage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {engagementModels.map((model) => {
              const Icon = model.icon
              return (
                <Card
                  key={model.id}
                  className={`border-border hover:shadow-lg transition-shadow duration-300 relative ${
                    model.popular ? "ring-2 ring-accent" : ""
                  }`}
                >
                  {model.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-semibold text-foreground">{model.title}</CardTitle>
                        <CardDescription className="text-accent font-medium">{model.subtitle}</CardDescription>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{model.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-serif text-3xl font-bold text-foreground">{model.price}</div>
                        <div className="text-sm text-muted-foreground">{model.duration}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold text-foreground mb-2">Ideal for:</div>
                        <p className="text-sm text-muted-foreground">{model.ideal}</p>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground mb-3">What's included:</div>
                        <ul className="space-y-2">
                          {model.includes.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button asChild className="w-full">
                        <Link href="/contact" className="flex items-center gap-2">
                          Get Started
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground">
              Specialized services to enhance and optimize your existing products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-semibold text-foreground">{service.service}</CardTitle>
                    <Badge variant="outline">{service.price}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about working with us.</p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 text-pretty">
            Book a free discovery call to discuss your project and get a custom proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact" className="flex items-center gap-2">
                Book Discovery Call
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
            >
              <Link href="/work">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
