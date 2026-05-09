"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Phone, ArrowRight, CheckCircle, IndianRupee, Home, Building2, Sparkles, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"

const faqSections = [
  {
    id: "general",
    label: "General",
    faqs: [
      {
        q: "What interior design services does Oaks N Stones offer?",
        a: "We offer comprehensive interior design services including residential interior design (apartments, villas, bungalows), commercial interior design (offices, retail, hospitality), home renovation & remodelling, design consultation, photorealistic 3D visualization, and end-to-end turnkey project management."
      },
      {
        q: "Where is Oaks N Stones located and which areas do you serve?",
        a: "Our studio is at Office No. 404, MI Commercia, Pink City Road, Wakad, Pune 411057. We serve all of Pune including Wakad, Baner, Hinjewadi, Aundh, Kothrud, Koregaon Park, Viman Nagar, Hadapsar, and surrounding areas. We also take on projects across Maharashtra."
      },
      {
        q: "How do I get started with Oaks N Stones?",
        a: "Simply call us at +91 95039 31331, email oaksnstones@gmail.com, or fill out the contact form on our website. We'll schedule a free initial consultation — either at our studio or your space — to understand your requirements and vision."
      },
      {
        q: "Do you offer a free consultation?",
        a: "Yes! We offer a complimentary initial consultation where we understand your requirements, review your space (physically or via floor plan), and provide a broad sense of design direction and budget. There is no obligation to proceed after the consultation."
      },
      {
        q: "Do you provide 3D designs before starting execution?",
        a: "Absolutely. Every project at Oaks N Stones includes detailed 3D visualizations and virtual walkthroughs before a single nail is hammered. You will see exactly how your space will look — from furniture placement to material finishes — and approve it before execution begins."
      },
      {
        q: "What makes Oaks N Stones different from other interior designers in Pune?",
        a: "We combine 10+ years of experience with 100% pricing transparency — you'll always know where every rupee is going. Our 4.9-star Google rating across 250+ reviews speaks to our commitment to quality and client satisfaction. We use only certified brand-partner materials (Hettich, Häfele, Century Ply, Fenesta, Ebco), and we deliver on-time, every time."
      },
      {
        q: "Do you work on projects outside Pune?",
        a: "Yes. While our studio is in Wakad, Pune, we have successfully completed projects in Mumbai, Nashik, and other Maharashtra cities. We also offer virtual design consultation for clients in other states."
      },
    ]
  },
  {
    id: "process",
    label: "Design Process",
    faqs: [
      {
        q: "What is your design process from start to finish?",
        a: "Our process has six stages: (1) Initial consultation & requirement gathering, (2) Site measurement & space analysis, (3) Concept development with mood boards & material palettes, (4) 3D visualization & design approval, (5) Material procurement & vendor coordination, (6) Execution, quality supervision & final handover with a walkthrough."
      },
      {
        q: "How long does a typical interior design project take?",
        a: "A standard 2–3 BHK residential project takes 10–14 weeks from design approval to handover. A 4 BHK or larger villa may take 16–22 weeks. Commercial projects vary based on size. We always give a firm timeline upfront and honour it."
      },
      {
        q: "Can I make changes after the design is approved?",
        a: "Minor refinements are accommodated throughout the project. Major design changes after material procurement may affect timelines and costs. We highly recommend using the 3D visualization stage to finalise all decisions — that's exactly what it's for."
      },
      {
        q: "Do you manage contractors and vendors, or do I need to arrange them?",
        a: "In our Turnkey package, we manage everything — design, procurement, contractors, site supervision, and quality control. You simply review progress at key milestones and move in at handover. In the Design + Consultation package, we guide you through the process and you work with your own contractors."
      },
      {
        q: "Will I have a dedicated point of contact for my project?",
        a: "Yes. Every project at Oaks N Stones is assigned a dedicated Project Designer who is your single point of contact from Day 1 through handover. You'll have direct WhatsApp access and regular site visit updates."
      },
    ]
  },
  {
    id: "budget",
    label: "Budget & Pricing",
    faqs: [
      {
        q: "How much does interior design cost in Pune?",
        a: "Interior design costs in Pune vary based on project scope, size, material quality, and the level of service. At Oaks N Stones, our packages start at ₹800 per sq ft for the Essential package, ₹1,200 per sq ft for Premium, and ₹2,000+ per sq ft for Luxury. See our Budget Guide section below for detailed package breakdowns."
      },
      {
        q: "Is your pricing per sq ft or fixed?",
        a: "Our design fees are quoted as a fixed amount for the complete scope — not percentage-based, which means they don't increase if you choose premium materials. The per sq ft figure is an indicative guide; your actual quote will be based on your specific requirements and site."
      },
      {
        q: "What is included and not included in the budget?",
        a: "Our packages include false ceiling, painting, electrical/panel points, modular furniture, and modular kitchen. Add-ons include civil work, home automation, curtains, wallpaper, sofa, decorative lights, and AC installation. Bathroom flooring/dado, external doors & frames, and appliances are typically not included."
      },
      {
        q: "What is your payment structure?",
        a: "We follow a transparent milestone-based payment schedule: 30% advance at project initiation, 40% at design approval & material procurement, and 30% on project completion before handover. We accept all major payment modes."
      },
      {
        q: "Can I get a rough budget estimate before meeting?",
        a: "Yes! Share your flat layout/floor plan and a rough brief of your requirements via WhatsApp or email, and we'll provide a preliminary budget estimate within 24 hours — completely free, with no obligations."
      },
      {
        q: "Do you offer any EMI or financing options?",
        a: "We partner with select financial institutions to offer project financing options. Please discuss this during your consultation and we'll guide you toward the best option for your situation."
      },
    ]
  },
  {
    id: "materials",
    label: "Materials & Brands",
    faqs: [
      {
        q: "Which brands do you work with?",
        a: "We are authorised partners with Hettich (hardware & fittings), Häfele (fittings & systems), Century Ply (plywood & laminates), Fenesta (windows & doors), Ebco (modular hardware), Kajaria (tiles), Asian Paints, Kohler, Duravit, and Merino Laminates, among others."
      },
      {
        q: "Why does material choice matter so much?",
        a: "Materials determine both the look and longevity of your interior. Inferior plywood warps in 2–3 years; Century BWP Grade doesn't. Cheap hardware fails within months; Hettich and Häfele carry multi-year warranties. We never compromise on material quality because your interior should last 15–20 years without major issues."
      },
      {
        q: "Can I bring my own materials or vendors?",
        a: "Yes, you can source specific items independently. We'll help you evaluate whether they meet quality standards and integrate them into the design. For critical structural elements like plywood and hardware, we strongly recommend staying with our trusted brand partners."
      },
      {
        q: "Do you provide warranties on the work?",
        a: "Yes. We provide a 1-year warranty on all workmanship. Material warranties (5–10 years for plywood, 2–5 years for hardware) are passed on directly from the manufacturer. Our Luxury package includes a 2-year warranty on workmanship."
      },
    ]
  },
]

const budgetPackages = [
  {
    icon: Home,
    name: "Essential",
    tagline: "Smart interiors within budget",
    color: "bg-secondary",
    border: "border-border",
    priceLabel: "Starting from",
    bhk2: "₹5 – 8 Lacs",
    bhk3: "₹8 – 13 Lacs",
    bhk4: "₹13 – 20 Lacs",
    perSqFt: "2 BHK: ₹8–15L · 3 BHK: ₹13–20L",
    includes: [
      "Gurjan / Commercial BWP Plywood",
      "Standard laminates (Merino / Greenlam)",
      "Hettich / Ebco soft-close hardware",
      "2D layouts + basic 3D views",
      "Asian Paints standard finish",
      "3 design revisions",
    ],
    doesNotInclude: [
      "Imported materials",
      "VR walkthrough",
      "On-site daily supervision",
    ],
    popular: false,
  },
  {
    icon: Sparkles,
    name: "Premium",
    tagline: "Our most popular package",
    color: "bg-accent",
    border: "border-accent",
    priceLabel: "Starting from",
    bhk2: "₹10 – 15 Lacs",
    bhk3: "₹15 – 24 Lacs",
    bhk4: "₹24 – 38 Lacs",
    perSqFt: "2 BHK: ₹15–24L · 3 BHK: ₹20–38L",
    includes: [
      "Century BWP / Archidply Plywood",
      "Merino / Century laminates or veneer",
      "Hettich / Häfele premium hardware",
      "Full 3D visualization + virtual walkthrough",
      "Asian Paints Royale / Dulux Velvet finish",
      "Dedicated project designer",
      "On-site supervision",
      "Unlimited design revisions",
    ],
    doesNotInclude: [
      "Imported stone countertops",
      "Home automation",
    ],
    popular: true,
  },
  {
    icon: Crown,
    name: "Luxury",
    tagline: "For discerning clients who want the best",
    color: "bg-primary",
    border: "border-primary",
    priceLabel: "Starting from",
    bhk2: "₹18 – 28 Lacs",
    bhk3: "₹28 – 45 Lacs",
    bhk4: "₹45 – 75 Lacs",
    perSqFt: "3 BHK: ₹28–45L · 4 BHK: ₹45–75L",
    includes: [
      "Century / Greenply premium grade plywood",
      "Italian/European veneers & Duco paint",
      "Häfele / Hettich premium & Servo-Drive systems",
      "Photorealistic renders + VR walkthrough",
      "Imported marble / stone surfaces",
      "Home automation integration",
      "Kohler / Duravit sanitaryware",
      "Fenesta acoustic windows & doors",
      "White-glove project management",
      "2-year workmanship warranty",
    ],
    doesNotInclude: [],
    popular: false,
  },
]

function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium text-foreground">{q}</span>
        <ChevronDown
          className={`mt-0.5 h-5 w-5 shrink-0 text-accent transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQClient() {
  const [activeTab, setActiveTab] = useState("general")
  const activeSection = faqSections.find(s => s.id === activeTab)!

  return (
    <div className="pt-32 md:pt-40">
      {/* Hero */}
      <section className="bg-secondary px-6 pb-24 pt-16">
        <div className="mx-auto max-w-7xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">Help Centre</span>
          <h1 className="mt-4 font-sans text-4xl font-bold text-foreground md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Everything you need to know before starting your interior design journey with us.
            Can't find your answer? Call us directly.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="tel:+919503931331">
                <Phone className="mr-2 h-4 w-4" />
                Call +91 95039 31331
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Send a Message</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          {/* Tab Nav */}
          <div className="mb-12 flex flex-wrap gap-2 rounded-xl bg-secondary p-2">
            {faqSections.map(s => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                  activeTab === s.id
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeSection.faqs.map(faq => (
              <Accordion key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Budget Guide */}
      <section id="budget" className="bg-secondary px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-accent">Budget Guide</span>
            <h2 className="mt-4 font-sans text-3xl font-bold text-foreground md:text-4xl">
              What Will My Interior Design Cost?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Budget varies by project size, material quality, and your requirements. Below is a realistic guide
              based on our completed projects across Pune. All prices are indicative — your quote will be tailored
              to your specific needs.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              * Prices effective 2024–25. Does not include bathroom flooring/dado, external doors & frames, or electronic appliances.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {budgetPackages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  pkg.name === "Premium"
                    ? "bg-accent text-accent-foreground ring-2 ring-accent ring-offset-2 ring-offset-secondary"
                    : pkg.name === "Luxury"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-card-foreground shadow-sm"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-4 py-1 text-xs font-semibold text-background">
                    Most Popular
                  </div>
                )}

                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${pkg.name === "Essential" ? "bg-accent/10 text-accent" : "bg-white/15"}`}>
                  <pkg.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-sans text-2xl font-bold">{pkg.name}</h3>
                <p className={`mt-1 text-sm ${pkg.name === "Essential" ? "text-muted-foreground" : "opacity-75"}`}>
                  {pkg.tagline}
                </p>

                <div className={`mt-4 inline-block rounded-lg px-3 py-1.5 text-xs font-medium ${pkg.name === "Essential" ? "bg-accent/10 text-accent" : "bg-white/15"}`}>
                  {pkg.perSqFt}
                </div>

                {/* BHK table */}
                <div className={`mt-6 rounded-xl p-4 space-y-3 ${pkg.name === "Essential" ? "bg-muted" : "bg-white/10"}`}>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${pkg.name === "Essential" ? "text-muted-foreground" : "opacity-60"}`}>
                    Approximate Budget Range
                  </p>
                  {[
                    { label: "2 BHK", value: pkg.bhk2 },
                    { label: "3 BHK", value: pkg.bhk3 },
                    { label: "4 BHK", value: pkg.bhk4 },
                  ].map(row => (
                    <div key={row.label} className="flex items-center justify-between text-sm">
                      <span className={pkg.name === "Essential" ? "text-muted-foreground" : "opacity-70"}>{row.label}</span>
                      <span className="font-semibold">{row.value}</span>
                    </div>
                  ))}
                </div>

                <ul className="mt-6 space-y-2.5">
                  {pkg.includes.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 opacity-80" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`mt-8 w-full ${
                    pkg.name === "Premium"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : pkg.name === "Luxury"
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "bg-accent text-accent-foreground hover:bg-accent/90"
                  }`}
                >
                  <Link href="/contact">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* What's typically included / excluded */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-card p-8 shadow-sm">
              <h3 className="font-sans text-lg font-bold text-foreground">✅ Typically Included</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {[
                  "False ceiling design & execution",
                  "Interior painting (walls & ceilings)",
                  "Electrical panel & internal points",
                  "Complete modular furniture (living, bedroom, study)",
                  "Modular kitchen with hardware",
                  "3D design & visualization",
                  "Project management & supervision",
                ].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-card p-8 shadow-sm">
              <h3 className="font-sans text-lg font-bold text-foreground">ℹ️ Typically Separate / Add-on</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {[
                  "Bathroom flooring & tile dado",
                  "External doors, frames & windows",
                  "Electronic appliances (fridge, washing machine, etc.)",
                  "Sofa, dining table, center table (unless specified)",
                  "Curtains & soft furnishings",
                  "Decorative lights & chandeliers",
                  "Home automation & smart systems",
                  "Civil / structural work (if required)",
                ].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-2xl bg-primary p-12 text-primary-foreground">
            <IndianRupee className="mx-auto h-12 w-12 opacity-60" />
            <h2 className="mt-6 font-sans text-3xl font-bold">Get Your Personalised Quote</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Share your floor plan or project details and receive a detailed, transparent quote
              within 24 hours — absolutely free.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {/* Prominent Call CTA */}
              <a
                href="tel:+919503931331"
                className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                Call Now: +91 95039 31331
              </a>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/contact">
                  Request Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
