"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Award, Users, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  "Award-winning design team",
  "Personalized approach",
  "On-time project delivery",
  "Transparent pricing",
  "Post-project support",
  "Quality materials"
]

export function AboutPreview() {
  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/portfolio-dining.jpg"
                alt="Oaks N Stones interior design team at work in Pune"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 rounded-xl bg-card p-6 shadow-lg md:-right-12"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">10+</p>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-accent">About Us</span>
            <h2 className="mt-4 font-sans text-3xl font-bold text-foreground md:text-4xl">
              Designing Dreams, Building Realities
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Founded in Wakad, Pune, Oaks N Stones has been at the forefront of luxury interior 
              design for over a decade. Our team of passionate designers and craftsmen work 
              together to create spaces that inspire, comfort, and delight.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We believe that great design should be accessible to everyone. That&apos;s why we 
              offer customized solutions that cater to diverse budgets without compromising 
              on quality or aesthetics.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 flex gap-8 border-t border-border pt-8">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-xl font-bold text-foreground">50+</p>
                  <p className="text-xs text-muted-foreground">Happy Clients</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-xl font-bold text-foreground">150+</p>
                  <p className="text-xs text-muted-foreground">Projects Done</p>
                </div>
              </div>
            </div>

            <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
