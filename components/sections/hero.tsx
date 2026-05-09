"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Star, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 md:pt-40">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-living-room.jpg"
          alt="Grand duplex luxury interior design by Oaks N Stones — premium living spaces in Pune with Italian marble and floor-to-ceiling windows"
          fill priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/96 via-background/75 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid min-h-[calc(100vh-10rem)] items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-accent"
            >
              Premium Interior Design in Pune
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-sans text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              <span className="text-balance">Crafting Timeless</span>
              <br />
              <span className="text-accent">Luxury Interiors</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              From grand duplex residences to luxury penthouses — Oaks N Stones creates interiors that are as timeless as they are beautiful. Pune's most trusted studio with 250+ completed projects and a 4.9★ Google rating.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/portfolio">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {/* Google Reviews Badge */}
              <div className="flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground">4.9</span>
                <span className="text-xs text-muted-foreground">· 250+ Google Reviews</span>
              </div>
              {/* Transparency Badge */}
              <div className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 shadow-sm backdrop-blur-sm">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                <span className="text-sm font-semibold text-accent">100% Transparent Pricing</span>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mt-10 flex flex-wrap gap-8 border-t border-border pt-8"
            >
              {[
                { value: "150+", label: "Projects Completed" },
                { value: "10+", label: "Years Experience" },
                { value: "250+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-12 w-px bg-gradient-to-b from-accent to-transparent"
          />
        </div>
      </motion.div>
    </section>
  )
}
