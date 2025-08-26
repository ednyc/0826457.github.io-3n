import { Navigation } from "@/source/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/source/components/ui/card"
import { Button } from "@/source/components/ui/button"
import { Badge } from "@/source/components/ui/badge"
import Link from "next/link"
import { ArrowRight, MapPin, Clock, DollarSign, Users, Code, Palette, Brain } from "lucide-react"

const openPositions = [
  {
    id: "senior-fullstack-engineer",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $160k",
    description:
      "Join our engineering team to build scalable web applications using modern technologies. You'll work on diverse projects across industries.",
    requirements: [
      "5+ years of full-stack development experience",
      "Expertise in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, GCP, or Azure)",
      "Strong understanding of database design and optimization",
    ],
    icon: Code,
  },
  {
    id: "product-designer",
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$100k - $140k",
    description:
      "Lead design for client projects from research to final implementation. Create user experiences that delight customers and drive business results.",
    requirements: [
      "4+ years of product design experience",
      "Proficiency in Figma and design systems",
      "Experience with user research and testing",
      "Portfolio demonstrating end-to-end design process",
    ],
    icon: Palette,
  },
  {
    id: "ai-ml-engineer",
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$130k - $180k",
    description:
      "Build AI-powered features and machine learning models that give our clients competitive advantages in their markets.",
    requirements: [
      "3+ years of ML/AI development experience",
      "Expertise in Python, TensorFlow, or PyTorch",
      "Experience with cloud ML platforms",
      "Strong understanding of data engineering",
    ],
    icon: Brain,
  },
  {
    id: "project-manager",
    title: "Technical Project Manager",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    salary: "$90k - $120k",
    description:
      "Lead client projects from inception to delivery, ensuring quality, timeline, and budget adherence while maintaining excellent client relationships.",
    requirements: [
      "3+ years of technical project management",
      "Experience with agile methodologies",
      "Strong communication and leadership skills",
      "Background in software development preferred",
    ],
    icon: Users,
  },
]

const benefits = [
  "Competitive salary and equity package",
  "Comprehensive health, dental, and vision insurance",
  "Unlimited PTO and flexible working hours",
  "Remote-first culture with annual team retreats",
  "Professional development budget ($3k/year)",
  "Latest equipment and home office setup allowance",
  "20% innovation time for personal projects",
  "Stock options in a growing company",
]

const values = [
  {
    title: "Ownership Mindset",
    description: "Take ownership of your work and drive projects to successful completion.",
  },
  {
    title: "Continuous Learning",
    description: "Stay curious, embrace new technologies, and share knowledge with the team.",
  },
  {
    title: "Client Success",
    description: "Our clients' success is our success. Always think from their perspective.",
  },
  {
    title: "Quality First",
    description: "Never compromise on quality. Build things you're proud to put your name on.",
  },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Join Our <span className="text-accent">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Build the future of software with a team of passionate entrepreneurs, engineers, and designers who are
              changing the world one product at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-serif text-3xl font-bold text-accent mb-2">45+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-accent mb-2">15</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-accent mb-2">4.9/5</div>
              <div className="text-muted-foreground">Employee Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground">
              Join a team that's building the future of software development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position) => {
              const Icon = position.icon
              return (
                <Card key={position.id} className="border-border hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-semibold text-foreground">{position.title}</CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {position.department}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {position.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {position.salary}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Requirements:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {position.requirements.slice(0, 2).map((req, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button asChild className="w-full">
                        <Link href={`/careers/${position.id}`} className="flex items-center gap-2">
                          View Details & Apply
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

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Benefits & Perks</h2>
            <p className="text-xl text-muted-foreground">We invest in our team's success, growth, and well-being.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border text-center">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              These principles guide how we work, make decisions, and treat each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Don't See the Right Role?</h2>
          <p className="text-xl mb-8 opacity-90 text-pretty">
            We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact" className="flex items-center gap-2">
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
