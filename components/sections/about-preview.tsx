"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Star, ShieldCheck, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  "100% transparent pricing — no hidden costs",
  "Dedicated designer for every project",
  "On-time project delivery — guaranteed",
  "3D visualization before execution begins",
  "Exclusive brand partnerships (Hettich, Häfele, Century)",
  "1–2 year workmanship warranty",
]

const stats = [
  { icon: Star,        value: "4.9★",  label: "Google Rating",   sub: "250+ verified reviews" },
  { icon: ShieldCheck, value: "100%",  label: "Transparent",      sub: "No hidden costs ever" },
  { icon: Clock,       value: "9+",    label: "Years Experience", sub: "Since 2017, Wakad Pune" },
]

export function AboutPreview() {
  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Visual panel instead of human photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/95 to-primary/80">
              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.2) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

              <div className="relative z-10 flex h-full flex-col justify-between p-8">
                <div>
                  <div className="text-sm font-medium uppercase tracking-widest text-accent mb-2">Oaks N Stones</div>
                  <div className="text-2xl font-bold text-white leading-tight">Designing Dreams<br />Since 2017</div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ["250+",  "Happy Clients"],
                    ["350K+", "Sq Ft Designed"],
                    ["4.9★",  "Google Rating"],
                    ["9+",    "Years Experience"],
                  ].map(([v, l]) => (
                    <div key={l} className="rounded-xl bg-white/10 backdrop-blur-sm p-4">
                      <p className="text-xl font-bold text-white">{v}</p>
                      <p className="text-xs text-white/70 mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>

                <div className="text-xs text-white/50">
                  Office No. 404, MI Commercia, Pink City Road, Wakad, Pune – 411057
                </div>
              </div>
            </div>

            {/* Floating trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-5 -right-5 rounded-xl bg-card p-4 shadow-lg md:-right-10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">100% Transparent</p>
                  <p className="text-xs text-muted-foreground">Pricing Guaranteed</p>
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
              Pune's Most Trusted Interior Design Studio
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Founded in 2017 by Umang Bansal and Shivani Bansal in Wakad, Pune — Oaks N Stones
              has built a reputation for luxury residential and commercial design that combines
              beautiful aesthetics with absolute pricing transparency.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              250+ completed projects, 350,000+ sq ft designed, and a 4.9★ Google rating across
              250+ genuine reviews tell the story better than any award. Our clients keep coming
              back — and recommending us to family and friends — because we deliver exactly what
              we promise, on time, every time.
            </p>

            {/* Feature checklist */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            {/* Mini stats row */}
            <div className="mt-8 flex flex-wrap gap-6 border-t border-border pt-6">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <s.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground leading-none">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/about">
                Meet the Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
