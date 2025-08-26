import { Button } from "@/source/components/ui/button"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

export function FooterCTA() {
  return (
    <section className="py-20 bg-accent text-accent-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
          Ready to Transform Your Idea?
        </h2>
        <p className="text-xl mb-8 opacity-90 text-pretty">
          Let's discuss your project and explore how we can help you build something extraordinary. Book a free
          discovery call today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Link href="/contact" className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Book Discovery Call
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
          >
            <Link href="/services" className="flex items-center gap-2">
              Explore Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
