import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Target, CheckCircle, TrendingUp } from "lucide-react"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const getCaseStudy = (slug: string) => {
  const caseStudies = {
    "fintech-mvp": {
      id: "fintech-mvp",
      title: "FinanceFlow: FinTech MVP Launch",
      subtitle: "From Concept to 10K+ Users in 12 Weeks",
      client: "FinanceFlow",
      industry: "FinTech",
      timeline: "12 weeks",
      teamSize: "6 people",
      budget: "$75,000",
      image: "/fintech-dashboard.png",
      challenge:
        "FinanceFlow needed to rapidly enter the competitive fintech market with a secure, user-friendly platform that could handle payments, user onboarding, and compliance requirements while maintaining the agility of a startup.",
      solution:
        "We implemented a lean development approach, focusing on core MVP features while building a scalable architecture. Our team prioritized security and compliance from day one, implementing bank-level encryption and following PCI DSS standards.",
      outcome:
        "The platform successfully launched on schedule and exceeded all initial targets, acquiring over 10,000 users within the first three months and processing over $2.5M in transactions.",
      metrics: [
        { label: "User Acquisition", value: "10,000+", description: "Active users within 3 months" },
        { label: "Transaction Volume", value: "$2.5M", description: "Processed in first quarter" },
        { label: "User Retention", value: "85%", description: "Monthly active user retention" },
        { label: "Security Score", value: "A+", description: "Third-party security audit rating" },
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Docker", "Redis", "JWT Authentication"],
      features: [
        "Secure user authentication and KYC verification",
        "Real-time payment processing with Stripe integration",
        "Comprehensive dashboard with transaction history",
        "Mobile-responsive design for all devices",
        "Advanced security with 2FA and encryption",
        "Automated compliance reporting",
      ],
      testimonial: {
        quote:
          "modxgo delivered exactly what we needed - a secure, scalable platform that allowed us to compete with established players from day one. Their expertise in fintech compliance was invaluable.",
        author: "Sarah Chen",
        role: "Co-Founder & CTO",
        company: "FinanceFlow",
      },
    },
    "enterprise-saas": {
      id: "enterprise-saas",
      title: "DataVision: Enterprise SaaS Platform",
      subtitle: "Scaling to 1M+ Daily Transactions with AI-Powered Analytics",
      client: "DataVision",
      industry: "SaaS",
      timeline: "16 weeks",
      teamSize: "8 people",
      budget: "$120,000",
      image: "/enterprise-saas-analytics-dashboard.png",
      challenge:
        "DataVision's existing platform was struggling with performance issues and couldn't scale to meet growing enterprise demand. They needed a complete architectural overhaul while maintaining zero downtime for existing customers.",
      solution:
        "We implemented a microservices architecture with Kubernetes orchestration, integrated AI-powered analytics for real-time insights, and built a comprehensive admin dashboard. The new system was designed for horizontal scaling and fault tolerance.",
      outcome:
        "The platform now handles over 1 million transactions daily with 99.9% uptime, reduced operational costs by 40%, and improved performance by 300%. Customer satisfaction scores increased significantly.",
      metrics: [
        { label: "Daily Transactions", value: "1M+", description: "Processed without performance issues" },
        { label: "Performance Improvement", value: "300%", description: "Faster response times" },
        { label: "Cost Reduction", value: "40%", description: "Lower operational expenses" },
        { label: "Uptime", value: "99.9%", description: "System availability guarantee" },
      ],
      technologies: ["Next.js", "Kubernetes", "AI/ML", "Redis", "PostgreSQL", "Docker", "Microservices", "GraphQL"],
      features: [
        "Microservices architecture for scalability",
        "AI-powered predictive analytics",
        "Real-time data processing and visualization",
        "Advanced admin dashboard with role-based access",
        "Automated scaling and load balancing",
        "Comprehensive API with GraphQL",
      ],
      testimonial: {
        quote:
          "The transformation was remarkable. Our platform went from struggling with basic operations to handling enterprise-scale workloads effortlessly. The AI analytics have become a key differentiator for us.",
        author: "Michael Rodriguez",
        role: "VP of Product",
        company: "DataVision",
      },
    },
    "mobile-health": {
      id: "mobile-health",
      title: "HealthConnect: Mobile Health Platform",
      subtitle: "HIPAA-Compliant Telemedicine with 50K+ Active Patients",
      client: "HealthTech Solutions",
      industry: "HealthTech",
      timeline: "14 weeks",
      teamSize: "7 people",
      budget: "$95,000",
      image: "/mobile-health-app-interface.png",
      challenge:
        "HealthTech Solutions needed a comprehensive mobile health platform that could handle telemedicine consultations, patient monitoring, and health data management while maintaining strict HIPAA compliance and ensuring excellent user experience.",
      solution:
        "We developed a React Native mobile application with WebRTC for video consultations, integrated FHIR standards for health data interoperability, and implemented end-to-end encryption. The platform includes both patient and provider interfaces.",
      outcome:
        "The platform successfully onboarded over 50,000 active patients, achieved a 95% consultation success rate, and received a 4.8/5 app store rating. Healthcare providers reported significant improvements in patient engagement.",
      metrics: [
        { label: "Active Patients", value: "50,000+", description: "Registered and active users" },
        { label: "Consultation Success", value: "95%", description: "Successful video consultations" },
        { label: "App Store Rating", value: "4.8/5", description: "Average user rating" },
        { label: "Provider Satisfaction", value: "92%", description: "Healthcare provider approval" },
      ],
      technologies: ["React Native", "WebRTC", "FHIR", "AWS", "MongoDB", "Node.js", "Socket.io", "Encryption"],
      features: [
        "HIPAA-compliant video consultations",
        "Real-time patient monitoring and alerts",
        "Electronic health records integration",
        "Prescription management system",
        "Appointment scheduling and reminders",
        "Secure messaging between patients and providers",
      ],
      testimonial: {
        quote:
          "modxgo understood the complexity of healthcare technology and delivered a platform that not only meets all compliance requirements but also provides an exceptional user experience for both patients and providers.",
        author: "Emily Watson",
        role: "Head of Engineering",
        company: "HealthTech Solutions",
      },
    },
  }

  return caseStudies[slug as keyof typeof caseStudies] || null
}

export async function generateStaticParams() {
  return [{ slug: "fintech-mvp" }, { slug: "enterprise-saas" }, { slug: "mobile-health" }]
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudy(params.slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/work" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Work
              </Link>
            </Button>
            <Badge variant="secondary" className="mb-4">
              {caseStudy.industry}
            </Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">{caseStudy.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-sm text-muted-foreground">Client</div>
              <div className="font-semibold text-foreground">{caseStudy.client}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Timeline</div>
              <div className="font-semibold text-foreground">{caseStudy.timeline}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Team Size</div>
              <div className="font-semibold text-foreground">{caseStudy.teamSize}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Investment</div>
              <div className="font-semibold text-foreground">{caseStudy.budget}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <img
              src={caseStudy.image || "/placeholder.svg"}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Challenge, Solution, Outcome */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-6 w-6 text-accent" />
                <h3 className="font-serif text-2xl font-bold text-foreground">Challenge</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
                <h3 className="font-serif text-2xl font-bold text-foreground">Solution</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
                <h3 className="font-serif text-2xl font-bold text-foreground">Outcome</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.outcome}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Results That Matter</h2>
            <p className="text-xl text-muted-foreground">Measurable impact across key performance indicators.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudy.metrics.map((metric, index) => (
              <Card key={index} className="text-center border-border">
                <CardContent className="pt-8">
                  <div className="font-serif text-4xl font-bold text-accent mb-2">{metric.value}</div>
                  <div className="font-semibold text-foreground mb-2">{metric.label}</div>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Technologies */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-3xl font-bold text-foreground mb-8">Key Features</h3>
              <ul className="space-y-4">
                {caseStudy.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-3xl font-bold text-foreground mb-8">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {caseStudy.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-sm py-2 px-3">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border">
            <CardContent className="pt-8">
              <blockquote className="text-xl text-muted-foreground mb-8 text-center italic leading-relaxed">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-foreground">{caseStudy.testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {caseStudy.testimonial.role}, {caseStudy.testimonial.company}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help transform your business with a custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/work">View More Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
