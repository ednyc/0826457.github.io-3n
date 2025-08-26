"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import { useState } from "react"

const articles = [
  {
    id: "mvp-development-guide",
    title: "The Complete Guide to MVP Development in 2024",
    excerpt:
      "Learn how to build a successful MVP that validates your idea without breaking the bank. Our proven framework has helped 200+ startups launch successfully.",
    category: "Strategy",
    readTime: "8 min read",
    publishDate: "Dec 15, 2024",
    author: "Alex Chen",
    image: "/mvp-development-guide-illustration-with-startup-pl.png",
    featured: true,
  },
  {
    id: "ai-integration-trends",
    title: "AI Integration Trends: What Every Business Should Know",
    excerpt:
      "Discover the latest AI trends and how to integrate machine learning features into your product without the complexity.",
    category: "Technology",
    readTime: "6 min read",
    publishDate: "Dec 10, 2024",
    author: "Sarah Rodriguez",
    image: "/ai-and-machine-learning-technology-trends-with-neu.png",
    featured: true,
  },
  {
    id: "scaling-development-teams",
    title: "Scaling Development Teams: When and How to Grow",
    excerpt:
      "A practical guide to scaling your development team, from hiring your first engineer to building a world-class engineering organization.",
    category: "Management",
    readTime: "10 min read",
    publishDate: "Dec 5, 2024",
    author: "Emily Park",
    image: "/development-team-scaling-with-organizational-growt.png",
    featured: false,
  },
  {
    id: "ux-design-principles",
    title: "10 UX Design Principles That Drive Conversions",
    excerpt:
      "Evidence-based design principles that can increase your conversion rates by up to 200%. Real examples from our client projects.",
    category: "Design",
    readTime: "7 min read",
    publishDate: "Nov 28, 2024",
    author: "Michael Thompson",
    image: "/ux-design-principles-with-user-interface-wireframe.png",
    featured: false,
  },
  {
    id: "startup-tech-stack",
    title: "Choosing the Right Tech Stack for Your Startup",
    excerpt:
      "A comprehensive guide to selecting technologies that will scale with your business, from MVP to enterprise.",
    category: "Technology",
    readTime: "12 min read",
    publishDate: "Nov 20, 2024",
    author: "Sarah Rodriguez",
    image: "/technology-stack-selection-with-programming-langua.png",
    featured: false,
  },
  {
    id: "product-market-fit",
    title: "Finding Product-Market Fit: A Data-Driven Approach",
    excerpt:
      "Learn how to measure and achieve product-market fit using metrics that matter. Includes templates and frameworks.",
    category: "Strategy",
    readTime: "9 min read",
    publishDate: "Nov 15, 2024",
    author: "Alex Chen",
    image: "/product-market-fit-analysis-with-data-charts-and-c.png",
    featured: false,
  },
]

const categories = ["All", "Strategy", "Technology", "Design", "Management"]

const whitepapers = [
  {
    title: "Product Scope: A Lean Guide to Feature Planning",
    description: "Our proven framework for defining product scope and prioritizing features that matter.",
    pages: "24 pages",
    downloadUrl: "#",
  },
  {
    title: "The ROI of Good UX Design",
    description: "Data-driven insights on how design investment impacts business metrics.",
    pages: "18 pages",
    downloadUrl: "#",
  },
  {
    title: "Scaling Engineering Teams: A Playbook",
    description: "Best practices for growing engineering teams from 5 to 50+ developers.",
    pages: "32 pages",
    downloadUrl: "#",
  },
]

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredArticles = articles.filter((article) => activeCategory === "All" || article.category === activeCategory)

  const featuredArticles = filteredArticles.filter((article) => article.featured)
  const allArticles = filteredArticles

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Insights & <span className="text-accent">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Expert insights on product development, technology trends, and building successful software companies.
            </p>
          </div>

          {/* Category Filter */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-sm font-medium transition-all duration-200 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                >
                  {category}
                  <span className="ml-1 text-xs opacity-70">
                    ({category === "All" ? articles.length : articles.filter((a) => a.category === category).length})
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Articles</h2>
              <p className="text-xl text-muted-foreground">Our most popular and impactful content.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="border-border hover:shadow-lg transition-shadow duration-300 group">
                  <div className="aspect-video bg-muted overflow-hidden rounded-t-lg">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{article.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-3 w-3" />
                        {article.author}
                        <Calendar className="h-3 w-3 ml-2" />
                        {article.publishDate}
                      </div>
                      <Button asChild size="sm" variant="ghost">
                        <Link href={`/insights/${article.id}`} className="flex items-center gap-1">
                          Read More
                          <ArrowRight className="h-3 w-3" />
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

      {/* All Articles */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {activeCategory === "All" ? "Latest Articles" : `${activeCategory} Articles`}
            </h2>
            <p className="text-xl text-muted-foreground">
              {allArticles.length} article{allArticles.length !== 1 ? "s" : ""}
              {activeCategory !== "All" && ` in ${activeCategory}`}
            </p>
          </div>

          {/* Empty State */}
          {allArticles.length === 0 ? (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-6">
                  No articles match the selected category. Try selecting a different category.
                </p>
                <Button onClick={() => setActiveCategory("All")} variant="outline">
                  View All Articles
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allArticles.map((article) => (
                <Card key={article.id} className="border-border hover:shadow-lg transition-shadow duration-300 group">
                  <div className="aspect-video bg-muted overflow-hidden rounded-t-lg">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{article.category}</Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">{article.publishDate}</div>
                      <Button asChild size="sm" variant="ghost">
                        <Link href={`/insights/${article.id}`} className="flex items-center gap-1">
                          Read
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* White Papers */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">White Papers & Guides</h2>
            <p className="text-xl text-muted-foreground">
              In-depth resources to help you make better product decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">{paper.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{paper.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{paper.pages}</Badge>
                    <Button asChild size="sm">
                      <a href={paper.downloadUrl} className="flex items-center gap-1">
                        Download
                        <ArrowRight className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90 text-pretty">
            Get the latest insights on product development, technology trends, and startup growth delivered to your
            inbox.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact" className="flex items-center gap-2">
              Subscribe to Newsletter
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
