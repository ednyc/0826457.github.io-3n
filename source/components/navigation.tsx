"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/source/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/source/components/ui/navigation-menu"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/source/lib/utils"
import { ThemeToggle } from "@/source/components/theme-toggle"

const services = [
  {
    title: "Product Scope & Strategy",
    href: "/services/product-strategy",
    description: "2-week vision-to-feature planning that validates ideas and cuts waste.",
  },
  {
    title: "UX/UI Design",
    href: "/services/design",
    description: "User-centric design that delights customers and reduces costs.",
  },
  {
    title: "Custom Development",
    href: "/services/development",
    description: "Full-stack web and mobile solutions with modern architecture.",
  },
  {
    title: "Dedicated Teams",
    href: "/services/teams",
    description: "Complete teams of developers, designers, and QA professionals.",
  },
  {
    title: "AI Integration",
    href: "/services/ai",
    description: "Machine learning and AI-powered features for competitive advantage.",
  },
  {
    title: "Maintenance & Support",
    href: "/services/support",
    description: "Ongoing evolution, performance tuning, and security updates.",
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="font-serif font-bold text-2xl text-foreground">
              modxgo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-accent">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-6 md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              )}
                            >
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/work" className="text-foreground hover:text-accent transition-colors">
              Work
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/insights" className="text-foreground hover:text-accent transition-colors">
              Insights
            </Link>
            <Link href="/pricing" className="text-foreground hover:text-accent transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button asChild>
              <Link href="/contact">Book Discovery Call</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-foreground hover:text-accent"
                >
                  Services
                  <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-accent"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/work" className="block px-3 py-2 text-foreground hover:text-accent">
                Work
              </Link>
              <Link href="/about" className="block px-3 py-2 text-foreground hover:text-accent">
                About
              </Link>
              <Link href="/insights" className="block px-3 py-2 text-foreground hover:text-accent">
                Insights
              </Link>
              <Link href="/pricing" className="block px-3 py-2 text-foreground hover:text-accent">
                Pricing
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-foreground hover:text-accent">
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link href="/contact">Book Discovery Call</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
