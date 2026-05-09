"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  { id: 1, title: "Grand Duplex Residence", category: "Residential", location: "Wakad, Pune", area: "3,500 sq ft", year: "2024", image: "/images/portfolio-bedroom.jpg", slug: "grand-duplex-residence", description: "A magnificent 4BHK duplex spanning 3,500 sq ft — Italian marble flooring, floor-to-ceiling windows, Häfele cabinetry, and a sky lounge that redefines luxury living in Pune." },
  { id: 2, title: "Contemporary Kitchen Design", category: "Residential", location: "Baner, Pune", area: "400 sq ft", year: "2024", image: "/images/portfolio-kitchen.jpg", slug: "contemporary-kitchen", description: "A state-of-the-art modular kitchen with Italian marble countertops and smart storage solutions." },
  { id: 3, title: "Corporate Office Space", category: "Commercial", location: "Hinjewadi, Pune", area: "5,000 sq ft", year: "2023", image: "/images/portfolio-office.jpg", slug: "corporate-office", description: "Modern open-plan office designed to foster collaboration while maintaining individual focus areas." },
  { id: 4, title: "Spa Bathroom Suite", category: "Residential", location: "Aundh, Pune", area: "200 sq ft", year: "2023", image: "/images/portfolio-bathroom.jpg", slug: "spa-bathroom", description: "A luxurious spa-inspired bathroom featuring marble walls, freestanding tub, and premium fixtures." },
  { id: 5, title: "Elegant Dining Space", category: "Residential", location: "Kothrud, Pune", area: "300 sq ft", year: "2023", image: "/images/portfolio-dining.jpg", slug: "elegant-dining", description: "A sophisticated dining room with custom furniture, statement chandelier, and warm ambient lighting." },
  { id: 6, title: "Premium Living Room", category: "Residential", location: "Wakad, Pune", area: "600 sq ft", year: "2024", image: "/images/hero-living-room.jpg", slug: "premium-living-room", description: "An expansive living space with floor-to-ceiling windows, bespoke furniture, and neutral luxury palette." },
  { id: 7, title: "Boutique Retail Store", category: "Commercial", location: "FC Road, Pune", area: "1,200 sq ft", year: "2023", image: "/images/service-consultation.jpg", slug: "boutique-retail", description: "A high-end fashion retail space designed to create an immersive shopping experience." },
  { id: 8, title: "Penthouse Renovation", category: "Renovation", location: "Koregaon Park, Pune", area: "4,000 sq ft", year: "2024", image: "/images/portfolio-dining.jpg", slug: "penthouse-renovation", description: "Complete transformation of a dated penthouse into a modern luxury residence with panoramic views." },
]

const categories = ["All", "Residential", "Commercial", "Renovation"]

export function PortfolioClient() {
  const [active, setActive] = useState("All")

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active)

  return (
    <div className="pt-32 md:pt-40">
      {/* Hero */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">Our Portfolio</span>
          <h1 className="mt-4 font-sans text-4xl font-bold text-foreground md:text-5xl">Featured Projects</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Explore our curated collection of interior design projects that showcase our
            commitment to excellence, attention to detail, and passion for creating beautiful spaces.
          </p>
          {/* Filter */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-secondary px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div layout className="grid gap-8 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className={index === 0 && filtered.length > 2 ? "md:col-span-2" : ""}
                >
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group relative block overflow-hidden rounded-2xl"
                  >
                    <div className={`relative overflow-hidden ${index === 0 && filtered.length > 2 ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
                      <Image
                        src={project.image}
                        alt={`${project.title} - Interior design by Oaks N Stones in ${project.location}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                        <div className="flex items-center gap-3">
                          <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                            {project.category}
                          </span>
                          <span className="text-xs text-primary-foreground/80">{project.year}</span>
                        </div>
                        <h3 className="mt-3 font-sans text-xl font-bold text-primary-foreground md:text-2xl">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm text-primary-foreground/80 md:max-w-lg">{project.description}</p>
                        <div className="mt-3 flex items-center gap-4 text-xs text-primary-foreground/60">
                          <span>{project.location}</span>
                          <span>|</span>
                          <span>{project.area}</span>
                        </div>
                      </div>
                      <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-card opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <ArrowUpRight className="h-5 w-5 text-foreground" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { value: "150+", label: "Projects Completed" },
              { value: "250+", label: "Happy Clients" },
              { value: "25,000+", label: "Square Feet Designed" },
              { value: "10+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-sans text-4xl font-bold text-foreground md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-6 py-24 text-primary-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-sans text-3xl font-bold md:text-4xl">Want to See More?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Schedule a consultation to view detailed case studies and discuss how we can transform your space.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center rounded-lg bg-accent px-8 py-4 font-medium text-accent-foreground transition-colors hover:bg-accent/90">
              Start Your Project
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
