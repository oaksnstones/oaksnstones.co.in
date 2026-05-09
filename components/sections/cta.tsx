"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="bg-primary py-24 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-primary-foreground/10 px-4 py-1 text-sm font-medium">
            Ready to Transform Your Space?
          </span>
          <h2 className="mx-auto mt-6 max-w-3xl font-sans text-3xl font-bold md:text-4xl lg:text-5xl">
            Let&apos;s Create Something Extraordinary Together
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Schedule a free consultation with our design experts and take the first step
            towards your dream interior. We&apos;re here to bring your vision to life.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+919503931331">
                <Phone className="mr-2 h-4 w-4" />
                +91 95039 31331
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
