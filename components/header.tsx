"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  {
    label: "More",
    children: [
      { href: "/blog", label: "Blog & Insights" },
      { href: "/faq", label: "FAQ & Budget Guide" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-background/90 backdrop-blur-md">
      {/* Top bar */}
      <div className="hidden border-b border-border bg-primary px-6 py-2 text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919503931331" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <Phone className="h-3.5 w-3.5" />
              <span>+91 95039 31331</span>
            </a>
            <a href="mailto:oaksnstones@gmail.com" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <Mail className="h-3.5 w-3.5" />
              <span>oaksnstones@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1 text-xs text-primary-foreground/70">
            <span className="inline-flex items-center gap-1 rounded-full bg-accent/20 px-3 py-0.5 text-accent">★ 4.9 · 250+ Google Reviews</span>
            <span className="ml-2 rounded-full bg-primary-foreground/10 px-3 py-0.5">100% Transparent Pricing</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="border-b border-border px-6 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Oaks N Stones — Home">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                <Image
                  src="/logo.jpg"
                  alt="Oaks N Stones Logo — The Interior Designing Firm"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <span className="font-sans text-lg font-bold tracking-tight text-foreground leading-none">
                  Oaks N Stones
                </span>
                <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground leading-tight">
                  The Interior Designing Firm
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}>
                  <button className="flex items-center gap-1 text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-2 w-52 rounded-xl border border-border bg-card p-2 shadow-xl"
                      >
                        {link.children.map((child) => (
                          <Link key={child.href} href={child.href}
                            className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent">
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={link.href} href={link.href!}
                  className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              )
            )}
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground md:hidden" aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {["Home", "About", "Services", "Portfolio", "Blog", "FAQ & Budget Guide", "Contact"].map((label) => {
                const hrefs: Record<string, string> = {
                  "Home": "/", "About": "/about", "Services": "/services",
                  "Portfolio": "/portfolio", "Blog": "/blog",
                  "FAQ & Budget Guide": "/faq", "Contact": "/contact"
                }
                return (
                  <Link key={label} href={hrefs[label]} onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-accent">
                    {label}
                  </Link>
                )
              })}
              <Button asChild className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact" onClick={() => setIsOpen(false)}>Get a Free Quote</Link>
              </Button>
              <div className="flex flex-col gap-2 border-t border-border pt-4">
                <a href="tel:+919503931331" className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-accent" />+91 95039 31331
                </a>
                <a href="mailto:oaksnstones@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-accent" />oaksnstones@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
