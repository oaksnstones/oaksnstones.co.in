"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Home, Building2, Paintbrush, Compass, Box, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description: "Transform your home into a sanctuary that reflects your personality and lifestyle. From apartments to villas, we create stunning living spaces.",
    href: "/services#residential"
  },
  {
    icon: Building2,
    title: "Commercial Design",
    description: "Create inspiring workspaces that boost productivity and impress clients. Office interiors, retail spaces, and hospitality projects.",
    href: "/services#commercial"
  },
  {
    icon: Paintbrush,
    title: "Renovation",
    description: "Breathe new life into existing spaces with our comprehensive renovation services. We preserve character while adding modern functionality.",
    href: "/services#renovation"
  },
  {
    icon: Compass,
    title: "Design Consultation",
    description: "Expert guidance for your design decisions. Whether you need a complete overhaul or just a fresh perspective, we are here to help.",
    href: "/services#consultation"
  },
  {
    icon: Box,
    title: "3D Visualization",
    description: "See your space before it is built with our photorealistic 3D renderings. Virtual walkthroughs help you make informed decisions.",
    href: "/services#3d"
  },
  {
    icon: Wrench,
    title: "Turnkey Projects",
    description: "End-to-end project management from concept to completion. We handle everything so you can simply enjoy your new space.",
    href: "/services#turnkey"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export function ServicesPreview() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-accent">Our Services</span>
          <h2 className="mt-4 font-sans text-3xl font-bold text-foreground md:text-4xl">
            Comprehensive Interior Design Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From initial concept to final installation, we offer a full spectrum of interior design 
            services tailored to meet your unique needs and exceed your expectations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group rounded-xl bg-card p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 font-sans text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <Link
                href={service.href}
                className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-accent/80"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
