import { Navigation } from "@/source/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/source/components/ui/card"
import { Button } from "@/source/components/ui/button"
import { Badge } from "@/source/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/source/components/ui/avatar"
import Link from "next/link"
import { ArrowRight, Heart, Target, Users, Zap, Award, Globe, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Client-First Mindset",
    description:
      "Every decision we make is guided by what's best for our clients' success. Your wins are our wins, and we're invested in your long-term growth.",
  },
  {
    icon: Target,
    title: "Product Excellence",
    description:
      "We don't just build software; we craft products that users love and businesses profit from. Quality is never negotiable.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description:
      "We work as an extension of your team, not as an external vendor. Transparency, communication, and shared ownership drive everything we do.",
  },
  {
    icon: Zap,
    title: "Lean & Agile",
    description:
      "Fast iterations, continuous feedback, and data-driven decisions. We eliminate waste and focus on what truly moves the needle.",
  },
]

const team = [
  {
    name: "Alex Chen",
    role: "Co-Founder & CEO",
    bio: "Former VP of Engineering at two successful exits. 15+ years building scalable products for startups and Fortune 500 companies.",
    image: "/team-alex-chen.png",
    expertise: ["Product Strategy", "Team Leadership", "Startup Growth"],
  },
  {
    name: "Sarah Rodriguez",
    role: "Co-Founder & CTO",
    bio: "Ex-Google senior engineer with deep expertise in distributed systems, AI/ML, and cloud architecture. PhD in Computer Science.",
    image: "/team-sarah-rodriguez.png",
    expertise: ["System Architecture", "AI/ML", "Cloud Infrastructure"],
  },
  {
    name: "Michael Thompson",
    role: "Head of Design",
    bio: "Award-winning designer who's shaped user experiences for over 50 products. Former design lead at Airbnb and Stripe.",
    image: "/team-michael-thompson.png",
    expertise: ["UX Research", "Product Design", "Design Systems"],
  },
  {
    name: "Emily Park",
    role: "VP of Engineering",
    bio: "Full-stack architect with 12+ years experience. Led engineering teams at high-growth startups through multiple funding rounds.",
    image: "/team-emily-park.png",
    expertise: ["Full-Stack Development", "DevOps", "Team Management"],
  },
]

const stats = [
  { label: "Years in Business", value: "8+" },
  { label: "Products Launched", value: "200+" },
  { label: "Team Members", value: "45+" },
  { label: "Countries Served", value: "25+" },
]

const approach = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We start by understanding your vision, market, and users. No assumptions, just data-driven insights.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    description: "User-centered design with rapid prototyping to validate concepts before development begins.",
  },
  {
    step: "03",
    title: "Build & Iterate",
    description: "Agile development with weekly demos, continuous feedback, and iterative improvements.",
  },
  {
    step: "04",
    title: "Launch & Scale",
    description: "Successful product launch with ongoing support, optimization, and feature evolution.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              About <span className="text-accent">modxgo</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Founded by entrepreneurs, for entrepreneurs. We understand the challenges of building products that scale
              and deliver real business value.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="font-serif text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-xl leading-relaxed mb-8">
              modxgo was born from a simple frustration: too many great ideas never make it to market because of poor
              execution, bloated processes, and misaligned priorities.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              As serial entrepreneurs who've built, scaled, and exited multiple companies, we've experienced firsthand
              the challenges of turning vision into reality. We've seen brilliant concepts fail due to technical debt,
              and we've watched mediocre ideas succeed because of exceptional execution.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              That's why we founded modxgo in 2016 - to bridge the gap between ambitious vision and flawless execution.
              We combine the strategic thinking of seasoned entrepreneurs with the technical excellence of world-class
              engineers and designers.
            </p>
            <p className="text-lg leading-relaxed">
              Today, we're proud to have helped over 200 companies transform their ideas into successful products,
              generating millions in revenue and serving users across the globe. But we're just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every line of code we write.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-foreground">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that eliminates risk and maximizes success at every stage of product development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, index) => (
              <Card key={index} className="border-border text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-serif text-2xl font-bold text-accent">{step.step}</span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the entrepreneurs and technologists who lead modxgo's mission to transform ideas into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-6">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback className="text-lg">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold text-foreground mb-1">{member.name}</h3>
                      <p className="text-accent font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why People Love Working Here
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've built a culture that attracts top talent and keeps them engaged, creative, and fulfilled.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border text-center">
              <CardHeader>
                <div className="p-4 bg-accent/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Remote-First Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Work from anywhere in the world. We've been remote-first since day one, with team members across 15
                  countries.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <div className="p-4 bg-accent/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Innovation Time</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  20% of your time is dedicated to learning, experimenting, and working on passion projects that could
                  become the next big thing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <div className="p-4 bg-accent/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Growth & Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Work on products that matter, with clients who are changing the world. Your code will be used by
                  millions of people.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/careers" className="flex items-center gap-2">
                View Open Positions
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 opacity-90 text-pretty">
            Let's discuss your project and explore how our team can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact" className="flex items-center gap-2">
                Start a Conversation
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
