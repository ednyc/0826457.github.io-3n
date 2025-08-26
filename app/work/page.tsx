"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowRight, ExternalLink, Calendar, Users, TrendingUp } from "lucide-react"
import { useState } from "react"

const caseStudies = [
  {
    id: "fintech-mvp",
    title: "FinanceFlow: FinTech MVP Launch",
    description:
      "Built and launched a complete fintech MVP in 12 weeks, enabling secure payments and user onboarding for 10K+ users.",
    industry: "FinTech",
    client: "FinanceFlow",
    timeline: "12 weeks",
    teamSize: "6 people",
    outcome: "10K+ Users in 3 months",
    metrics: [
      { label: "User Growth", value: "10,000+" },
      { label: "Transaction Volume", value: "$2.5M" },
      { label: "User Retention", value: "85%" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    image: "/fintech-dashboard.png",
    featured: true,
  },
  {
    id: "enterprise-saas",
    title: "DataVision: Enterprise SaaS Platform",
    description:
      "Scaled a B2B SaaS platform to handle 1M+ transactions daily with microservices architecture and AI-powered analytics.",
    industry: "SaaS",
    client: "DataVision",
    timeline: "16 weeks",
    teamSize: "8 people",
    outcome: "1M+ Daily Transactions",
    metrics: [
      { label: "Daily Transactions", value: "1M+" },
      { label: "Performance Improvement", value: "300%" },
      { label: "Cost Reduction", value: "40%" },
    ],
    technologies: ["Next.js", "Kubernetes", "AI/ML", "Redis", "PostgreSQL"],
    image: "/enterprise-saas-analytics-dashboard.png",
    featured: true,
  },
  {
    id: "mobile-health",
    title: "HealthConnect: Mobile Health Platform",
    description:
      "Developed a HIPAA-compliant mobile health application with real-time monitoring and telemedicine capabilities.",
    industry: "HealthTech",
    client: "HealthTech Solutions",
    timeline: "14 weeks",
    teamSize: "7 people",
    outcome: "50K+ Active Patients",
    metrics: [
      { label: "Active Patients", value: "50,000+" },
      { label: "Consultation Success", value: "95%" },
      { label: "App Store Rating", value: "4.8/5" },
    ],
    technologies: ["React Native", "WebRTC", "FHIR", "AWS", "MongoDB"],
    image: "/mobile-health-app-interface.png",
    featured: true,
  },
  {
    id: "ecommerce-platform",
    title: "ShopSmart: E-commerce Platform",
    description:
      "Built a scalable e-commerce platform with AI-powered recommendations and multi-vendor marketplace capabilities.",
    industry: "E-commerce",
    client: "ShopSmart",
    timeline: "20 weeks",
    teamSize: "10 people",
    outcome: "$5M+ GMV in Year 1",
    metrics: [
      { label: "Gross Merchandise Value", value: "$5M+" },
      { label: "Active Vendors", value: "500+" },
      { label: "Conversion Rate", value: "3.2%" },
    ],
    technologies: ["Next.js", "Microservices", "AI/ML", "Stripe", "Redis"],
    image: "/ecommerce-platform-dashboard.png",
    featured: false,
  },
  {
    id: "logistics-app",
    title: "LogiTrack: Supply Chain Management",
    description:
      "Developed a comprehensive logistics platform with real-time tracking, route optimization, and predictive analytics.",
    industry: "Logistics",
    client: "LogiTrack",
    timeline: "18 weeks",
    teamSize: "9 people",
    outcome: "30% Cost Reduction",
    metrics: [
      { label: "Cost Reduction", value: "30%" },
      { label: "Delivery Efficiency", value: "45%" },
      { label: "Customer Satisfaction", value: "92%" },
    ],
    technologies: ["React", "Node.js", "MongoDB", "Google Maps API", "ML"],
    image: "/logistics-tracking-dashboard.png",
    featured: false,
  },
  {
    id: "edtech-platform",
    title: "LearnHub: Educational Platform",
    description:
      "Created an interactive learning platform with video streaming, progress tracking, and AI-powered personalization.",
    industry: "EdTech",
    client: "LearnHub",
    timeline: "16 weeks",
    teamSize: "8 people",
    outcome: "100K+ Students",
    metrics: [
      { label: "Active Students", value: "100,000+" },
      { label: "Course Completion", value: "78%" },
      { label: "Student Satisfaction", value: "4.7/5" },
    ],
    technologies: ["Next.js", "Video Streaming", "AI/ML", "PostgreSQL", "AWS"],
    image: "/edtech-learning-platform.png",
    featured: false,
  },
]

const industries = ["All", "FinTech", "SaaS", "HealthTech", "E-commerce", "Logistics", "EdTech"]

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState("All")

  const filteredCaseStudies =
    activeTab === "All" ? caseStudies : caseStudies.filter((study) => study.industry === activeTab)

  const filteredFeaturedStudies =
    activeTab === "All"
      ? caseStudies.filter((study) => study.featured)
      : caseStudies.filter((study) => study.featured && study.industry === activeTab)

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Our <span className="text-accent">Work</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Real projects, real results. See how we've helped businesses across industries transform their ideas into
              successful, scalable products.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl">
              <TabsList className="grid w-full grid-cols-7 bg-muted/50 p-1 rounded-lg">
                {industries.map((industry) => (
                  <TabsTrigger
                    key={industry}
                    value={industry}
                    className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground transition-all duration-200 text-sm font-medium"
                  >
                    {industry}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground">
              Showing {filteredCaseStudies.length} project{filteredCaseStudies.length !== 1 ? "s" : ""}
              {activeTab !== "All" && ` in ${activeTab}`}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {filteredFeaturedStudies.length > 0 && (
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Projects
                {activeTab !== "All" && ` in ${activeTab}`}
              </h2>
              <p className="text-xl text-muted-foreground">
                Our most impactful projects that showcase our expertise
                {activeTab !== "All" ? ` in ${activeTab.toLowerCase()}` : " across different industries"}.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {filteredFeaturedStudies.map((study) => (
                <Card
                  key={study.id}
                  className="border-border hover:shadow-lg transition-all duration-300 group hover:border-accent/50"
                >
                  <div className="aspect-video bg-muted overflow-hidden rounded-t-lg">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                        {study.industry}
                      </Badge>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {study.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">{study.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        {study.metrics.slice(0, 3).map((metric, index) => (
                          <div key={index}>
                            <div className="font-semibold text-accent text-sm">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {study.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{study.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <Button
                        asChild
                        className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                      >
                        <Link href={`/work/${study.id}`} className="flex items-center gap-2">
                          View Case Study
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Case Studies */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {activeTab === "All" ? "All Projects" : `${activeTab} Projects`}
            </h2>
            <p className="text-xl text-muted-foreground">
              {activeTab === "All"
                ? "Explore our complete portfolio of successful product launches and transformations."
                : `Discover our ${activeTab.toLowerCase()} expertise and successful implementations.`}
            </p>
          </div>

          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-muted-foreground mb-4">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">No projects found in {activeTab}</p>
                <p className="text-sm">Try selecting a different industry or view all projects.</p>
              </div>
              <Button variant="outline" onClick={() => setActiveTab("All")} className="mt-4">
                View All Projects
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study) => (
                <Card
                  key={study.id}
                  className="border-border hover:shadow-lg transition-all duration-300 group hover:border-accent/50"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="aspect-square md:aspect-auto md:h-full bg-muted overflow-hidden rounded-l-lg">
                        <img
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                            {study.industry}
                          </Badge>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {study.timeline}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {study.teamSize}
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                          {study.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                          {study.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-accent" />
                            <span className="font-semibold text-accent text-sm">{study.outcome}</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {study.technologies.slice(0, 4).map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <Button
                            asChild
                            size="sm"
                            className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                          >
                            <Link href={`/work/${study.id}`} className="flex items-center gap-2">
                              View Details
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl mb-8 opacity-90 text-pretty">
            Let's discuss your project and explore how we can help you achieve similar results.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact" className="flex items-center gap-2">
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
