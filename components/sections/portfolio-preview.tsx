"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    category: "Residential",
    location: "Wakad, Pune",
    image: "/images/portfolio-bedroom.jpg",
    slug: "modern-luxury-villa"
  },
  {
    id: 2,
    title: "Contemporary Kitchen Design",
    category: "Residential",
    location: "Baner, Pune",
    image: "/images/portfolio-kitchen.jpg",
    slug: "contemporary-kitchen"
  },
  {
    id: 3,
    title: "Corporate Office Space",
    category: "Commercial",
    location: "Hinjewadi, Pune",
    image: "/images/portfolio-office.jpg",
    slug: "corporate-office"
  },
  {
    id: 4,
    title: "Spa Bathroom Suite",
    category: "Residential",
    location: "Aundh, Pune",
    image: "/images/portfolio-bathroom.jpg",
    slug: "spa-bathroom"
  },
  {
    id: 5,
    title: "Elegant Dining Space",
    category: "Residential",
    location: "Kothrud, Pune",
    image: "/images/portfolio-dining.jpg",
    slug: "elegant-dining"
  },
  {
    id: 6,
    title: "Premium Living Room",
    category: "Residential",
    location: "Wakad, Pune",
    image: "/images/hero-living-room.jpg",
    slug: "premium-living-room"
  }
]

export function PortfolioPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <span className="text-sm font-medium uppercase tracking-widest text-accent">Our Portfolio</span>
            <h2 className="mt-4 font-sans text-3xl font-bold text-foreground md:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Explore our curated collection of interior design projects that showcase 
              our commitment to excellence and attention to detail.
            </p>
          </div>
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/portfolio/${project.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    alt={`${project.title} - Interior design project by Oaks N Stones in ${project.location}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-xs font-medium uppercase tracking-wider text-primary-foreground/80">{project.category}</span>
                    <h3 className="mt-1 text-lg font-semibold text-primary-foreground">{project.title}</h3>
                    <p className="text-sm text-primary-foreground/80">{project.location}</p>
                  </div>
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-card opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5 text-foreground" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
