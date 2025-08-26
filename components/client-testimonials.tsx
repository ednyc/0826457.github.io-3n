import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Their deliverables, timeliness, and budget alignment exceeded expectations. The team's technical expertise and collaborative approach made our product launch a huge success.",
    author: "Sarah Chen",
    role: "Co-Founder & CTO",
    company: "FinanceFlow",
    avatar: "/professional-woman-headshot.png",
  },
  {
    quote:
      "modxgo transformed our complex requirements into an elegant, scalable solution. Their AI integration capabilities gave us a significant competitive advantage.",
    author: "Michael Rodriguez",
    role: "VP of Product",
    company: "DataVision",
    avatar: "/professional-man-headshot.png",
  },
  {
    quote:
      "Working with their dedicated team felt like having an extension of our own engineering department. The quality and speed of delivery was exceptional.",
    author: "Emily Watson",
    role: "Head of Engineering",
    company: "HealthTech Solutions",
    avatar: "/professional-woman-engineer.png",
  },
]

export function ClientTestimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Don't just take our word for it. Here's what industry leaders say about working with modxgo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Quote className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <blockquote className="text-muted-foreground mb-6 text-center italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
