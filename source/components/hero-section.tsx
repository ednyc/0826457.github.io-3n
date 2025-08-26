import { Button } from "@/source/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Turning Bold Ideas into <span className="text-accent">Scalable Products</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            We design. We build. You transform. From MVP to enterprise-scale solutions, we turn your vision into reality
            with cutting-edge technology and proven expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/contact" className="flex items-center gap-2">
                Book Discovery Call
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <Link href="/work" className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
