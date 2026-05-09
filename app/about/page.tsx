import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Users, Target, Heart, Lightbulb, CheckCircle, TrendingUp, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us | Oaks N Stones Interior Design Pune",
  description: "Meet the team behind Oaks N Stones — Pune's most trusted interior design firm since 2017. Umang Bansal & Shivani Bansal lead a passionate team delivering 250+ luxury projects across Pune & Maharashtra.",
  keywords: ["about oaks n stones pune","interior designers wakad pune","umang bansal interior designer","luxury interior design firm pune","best interior design company pune","interior design team pune"],
  openGraph: {
    title: "About Oaks N Stones | Luxury Interior Design Experts in Pune",
    description: "250+ projects, 350,000+ sq ft designed, 4.9★ Google rating. Meet the designers transforming Pune homes.",
    images: ["/images/hero-living-room.jpg"],
  },
}

const values = [
  { icon: Target, title: "Excellence", description: "We pursue perfection in every detail, ensuring each project reflects the highest standards of design and craftsmanship across every material we specify." },
  { icon: Heart, title: "Passion", description: "Our love for interior design drives us to create spaces that inspire and delight. We pour our hearts into every 2BHK, penthouse, and commercial space." },
  { icon: Lightbulb, title: "Innovation", description: "We embrace new materials, technologies, and design philosophies — from Hettich Servo-Drive systems to home automation — delivering solutions that stand the test of time." },
  { icon: Users, title: "Transparency", description: "100% transparent pricing with no hidden costs. You know exactly where every rupee goes before we begin. Our detailed quotations are our promise to you." },
]

const team = [
  {
    name: "Umang Bansal",
    role: "Founder & Principal Designer",
    initials: "UB",
    description: "Umang leads the studio's design vision with a decade of experience in luxury residential and commercial interiors. His work is defined by clean lines, thoughtful material choices, and a deep understanding of how clients live.",
    speciality: "Luxury Residential · Commercial Design"
  },
  {
    name: "Shivani Bansal",
    role: "Co-Founder & Principal Designer",
    initials: "SB",
    description: "Shivani brings a rare blend of aesthetic sensitivity and project precision. She champions sustainable material choices and has designed some of the studio's most celebrated residential interiors across Pune.",
    speciality: "Residential Design · Sustainable Interiors"
  },
  {
    name: "Bansi Patel",
    role: "Senior Designer",
    initials: "BP",
    description: "Bansi leads design development for mid-scale to large residential projects. Her expertise in 3D visualization and space planning ensures clients can see exactly what their space will look like before execution begins.",
    speciality: "3D Visualization · Space Planning"
  },
  {
    name: "Akshay Jain",
    role: "Lead Project Manager",
    initials: "AJ",
    description: "Akshay ensures every project is delivered on time, within budget, and to the exact quality specified. His deep relationships with vendors and contractors are why Oaks N Stones consistently delivers on-time.",
    speciality: "Project Execution · Vendor Management"
  },
]

const milestones = [
  { year: "2017", title: "Founded", description: "Oaks N Stones established in Wakad, Pune by Umang & Shivani Bansal" },
  { year: "2018", title: "First 25 Projects", description: "Completed 25 residential projects across Wakad, Baner & Aundh" },
  { year: "2019", title: "Team Expansion", description: "Grew to a dedicated team of designers and project managers" },
  { year: "2021", title: "100+ Projects", description: "Celebrated 100 successful project completions across Pune & Maharashtra" },
  { year: "2022", title: "Commercial Growth", description: "Expanded into large-scale commercial projects in Hinjewadi & Baner" },
  { year: "2023", title: "Recognised", description: "Recognised among Pune's Top Interior Design Studios by clients & industry peers" },
  { year: "2024", title: "200+ Projects", description: "Crossed 200 projects and 300,000 sq ft of designed spaces" },
  { year: "2025", title: "250+ Happy Clients", description: "4.9★ Google rating across 250+ reviews — Maharashtra's most trusted studio" },
  { year: "2026", title: "350,000+ Sq Ft", description: "Designed & renovated over 350,000 sq ft of residential & commercial spaces" },
]

export default function AboutPage() {
  return (
    <div className="pt-32 md:pt-40">
      {/* Hero */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-sm font-medium uppercase tracking-widest text-accent">About Us</span>
              <h1 className="mt-4 font-sans text-4xl font-bold text-foreground md:text-5xl">
                Designing Dreams Since 2017
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Oaks N Stones is Pune's most trusted luxury interior design firm, based in Wakad.
                Founded by Umang Bansal and Shivani Bansal, we specialise in creating residential
                and commercial spaces that are as functional as they are beautiful.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                With 250+ completed projects, 350,000+ sq ft designed, and a 4.9★ Google rating,
                we bring together premium brand partnerships, 100% transparent pricing, and a
                passionate team dedicated to delivering on time, every time.
              </p>
              <div className="mt-8 flex flex-wrap gap-8">
                {[
                  { value: "9+", label: "Years Experience" },
                  { value: "250+", label: "Happy Clients" },
                  { value: "350K+", label: "Sq Ft Designed" },
                  { value: "4.9★", label: "Google Rating" },
                ].map(s => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-foreground">{s.value}</p>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Design accent instead of human photo */}
            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-accent/30 p-10 flex flex-col justify-end">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[["250+","Happy Clients"],["350K+","Sq Ft Designed"],["4.9★","Google Rating"],["9+","Years"]].map(([v,l]) => (
                    <div key={l} className="rounded-xl bg-white/10 p-4">
                      <p className="text-2xl font-bold text-white">{v}</p>
                      <p className="text-xs text-white/70">{l}</p>
                    </div>
                  ))}
                </div>
                <div className="text-white/80 text-sm font-medium">Office No. 404, MI Commercia, Pink City Road, Wakad, Pune</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-card p-8 shadow-sm">
              <h2 className="font-sans text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To transform ordinary spaces into extraordinary living and working experiences —
                combining innovative design, premium brand materials, and personalized service.
                Every project we take on must enhance how our client lives, works, and feels at home.
              </p>
            </div>
            <div className="rounded-xl bg-card p-8 shadow-sm">
              <h2 className="font-sans text-2xl font-bold text-foreground">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To be Maharashtra's most trusted interior design firm — recognised for absolute
                transparency, quality without compromise, and client satisfaction that speaks for itself
                through 250+ five-star reviews. Design that outlasts trends and earns lifelong clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-accent">Our Values</span>
            <h2 className="mt-4 font-sans text-3xl font-bold text-foreground">What We Stand For</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  <v.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mt-4 font-sans text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-accent">Our Team</span>
            <h2 className="mt-4 font-sans text-3xl font-bold text-foreground">Meet the Designers</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A small, focused team of experienced designers and project managers — each dedicated to delivering your project with precision and care.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <div key={i} className="rounded-xl bg-card p-6 shadow-sm text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-3xl font-bold text-white">
                  {member.initials}
                </div>
                <h3 className="mt-4 font-sans text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm font-medium text-accent">{member.role}</p>
                <p className="mt-2 text-xs text-muted-foreground/80 italic">{member.speciality}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-accent">Our Journey</span>
            <h2 className="mt-4 font-sans text-3xl font-bold text-foreground">Milestones That Matter</h2>
          </div>
          <div className="mt-16 relative">
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={i} className={`flex flex-col gap-4 md:flex-row md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <div className="rounded-xl bg-card p-5 shadow-sm inline-block text-left max-w-xs">
                      <span className="text-xs font-bold text-accent uppercase tracking-widest">{m.year}</span>
                      <h3 className="mt-1 font-sans text-base font-semibold text-foreground">{m.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{m.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground z-10">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-medium uppercase tracking-widest text-accent">Why Choose Us</span>
              <h2 className="mt-4 font-sans text-3xl font-bold text-foreground md:text-4xl">
                What Makes Oaks N Stones Different
              </h2>
              <div className="mt-8 space-y-4">
                {[
                  "4.9★ rating across 250+ genuine Google Reviews",
                  "100% transparent pricing — no hidden costs, ever",
                  "Exclusive partnerships with Hettich, Häfele, Century Ply, Fenesta, Ebco",
                  "Dedicated project manager for every project",
                  "Firm timelines — we deliver on the date we promise",
                  "3D visualization before any execution begins",
                  "1–2 year workmanship warranty on all projects",
                  "350,000+ sq ft of residential & commercial spaces designed",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "250+", label: "Happy Clients", sub: "Across Pune & Maharashtra" },
                { val: "350K+", label: "Sq Ft Designed", sub: "Residential & Commercial" },
                { val: "4.9★", label: "Google Rating", sub: "250+ verified reviews" },
                { val: "9+", label: "Years Experience", sub: "Since 2017" },
              ].map(s => (
                <div key={s.label} className="rounded-xl bg-card p-6 shadow-sm text-center">
                  <p className="font-sans text-3xl font-bold text-foreground">{s.val}</p>
                  <p className="mt-1 font-medium text-foreground text-sm">{s.label}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-6 py-24 text-primary-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <Star className="mx-auto h-10 w-10 text-accent mb-4" />
          <h2 className="font-sans text-3xl font-bold">Ready to Transform Your Space?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Join 250+ happy clients who trusted Oaks N Stones with their homes and offices. Book your free consultation today.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+919503931331">Call +91 95039 31331</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
