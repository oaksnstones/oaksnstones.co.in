import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Home, Building2, Paintbrush, Compass, Box, Wrench, CheckCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore comprehensive interior design services by Oaks N Stones in Pune. Residential design, commercial interiors, renovation, 3D visualization, and turnkey projects. Get expert design consultation.",
  keywords: ["interior design services pune", "residential interior design", "commercial interior design pune", "home renovation pune", "3d interior visualization", "turnkey interior projects"],
  openGraph: {
    title: "Interior Design Services | Oaks N Stones Pune",
    description: "Comprehensive interior design solutions - residential, commercial, renovation & turnkey projects.",
    images: ["/images/service-consultation.jpg"],
  },
}

const services = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Interior Design",
    shortDesc: "Transform your home into a luxury sanctuary",
    description: "Our residential interior design services cover everything from cozy apartments to sprawling villas. We create personalized living spaces that reflect your unique style and enhance your daily life.",
    image: "/images/portfolio-bedroom.jpg",
    features: [
      "Complete home interior design",
      "Living room & bedroom design",
      "Modular kitchen design",
      "Bathroom & wardrobe design",
      "Balcony & terrace design",
      "Space planning & optimization"
    ],
    process: [
      "Initial consultation to understand your vision",
      "Space analysis and requirement gathering",
      "Concept development with mood boards",
      "3D visualization and design approval",
      "Material selection and procurement",
      "Execution and quality supervision"
    ]
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Interior Design",
    shortDesc: "Create inspiring workspaces that drive success",
    description: "We design commercial spaces that boost productivity, impress clients, and reinforce your brand identity. From offices to retail stores, we create environments that work for your business.",
    image: "/images/portfolio-office.jpg",
    features: [
      "Office interior design",
      "Retail store design",
      "Restaurant & cafe interiors",
      "Hotel & hospitality design",
      "Showroom design",
      "Co-working spaces"
    ],
    process: [
      "Brand and business analysis",
      "Functional space planning",
      "Design concept presentation",
      "Detailed drawings and specifications",
      "Vendor coordination",
      "Project execution and handover"
    ]
  },
  {
    id: "renovation",
    icon: Paintbrush,
    title: "Renovation & Remodeling",
    shortDesc: "Breathe new life into existing spaces",
    description: "Give your space a fresh new look with our renovation services. We preserve the character of your home while adding modern functionality and aesthetic appeal.",
    image: "/images/portfolio-kitchen.jpg",
    features: [
      "Complete home renovation",
      "Kitchen remodeling",
      "Bathroom renovation",
      "Structural modifications",
      "Flooring & wall treatments",
      "Lighting upgrades"
    ],
    process: [
      "Site assessment and inspection",
      "Renovation scope definition",
      "Design and material planning",
      "Cost estimation and approval",
      "Systematic demolition and construction",
      "Final finishing and cleanup"
    ]
  },
  {
    id: "consultation",
    icon: Compass,
    title: "Design Consultation",
    shortDesc: "Expert guidance for your design decisions",
    description: "Not ready for a full project? Our design consultation services provide expert advice on color schemes, furniture selection, space planning, and more.",
    image: "/images/service-consultation.jpg",
    features: [
      "Color consultation",
      "Furniture selection advice",
      "Space planning guidance",
      "Material recommendations",
      "Styling tips",
      "Budget planning"
    ],
    process: [
      "Brief discussion of your needs",
      "Site visit or virtual consultation",
      "Analysis and recommendations",
      "Detailed consultation report",
      "Follow-up support",
      "Implementation guidance"
    ]
  },
  {
    id: "3d",
    icon: Box,
    title: "3D Visualization",
    shortDesc: "See your space before it is built",
    description: "Our photorealistic 3D renderings and virtual walkthroughs help you visualize your space before any construction begins. Make informed decisions with confidence.",
    image: "/images/hero-living-room.jpg",
    features: [
      "Photorealistic 3D renders",
      "Virtual walkthroughs",
      "360-degree panoramas",
      "Animation videos",
      "VR experience",
      "Real-time design changes"
    ],
    process: [
      "Design brief and measurements",
      "Initial 3D modeling",
      "Material and lighting setup",
      "Client review and revisions",
      "Final render production",
      "Delivery in multiple formats"
    ]
  },
  {
    id: "turnkey",
    icon: Wrench,
    title: "Turnkey Projects",
    shortDesc: "End-to-end project management",
    description: "Sit back and relax while we handle everything from design to execution. Our turnkey services ensure a hassle-free experience with complete project management.",
    image: "/images/portfolio-dining.jpg",
    features: [
      "Complete project management",
      "Design to execution",
      "Vendor management",
      "Quality control",
      "Timeline management",
      "Single point of contact"
    ],
    process: [
      "Comprehensive project scoping",
      "Design development and approval",
      "Procurement and logistics",
      "Construction supervision",
      "Quality checks at each stage",
      "Final handover and warranty"
    ]
  }
]

const pricingTiers = [
  {
    name: "Essential",
    price: "₹8–20 L",
    unit: "2–3 BHK range",
    description: "Smart interiors with Century BWP plywood & Hettich hardware",
    features: ["2D layout + basic 3D views", "Century / Gurjan BWP plywood", "Hettich / Ebco hardware", "Asian Paints standard finish", "3 design revisions", "Project supervision"]
  },
  {
    name: "Premium",
    price: "₹15–38 L",
    unit: "2–4 BHK range",
    description: "Our most popular — full 3D walkthrough & Häfele fittings",
    features: ["Full 3D visualization + VR walkthrough", "Century BWP / Archidply plywood", "Häfele / Hettich premium hardware", "Asian Paints Royale / Dulux finish", "Dedicated designer + on-site manager", "Unlimited revisions"],
    popular: true
  },
  {
    name: "Luxury",
    price: "₹28–75 L",
    unit: "3–4 BHK / villa range",
    description: "Italian materials, home automation & white-glove service",
    features: ["Italian / European veneers & Duco paint", "Häfele Servo-Drive systems", "Fenesta acoustic windows & doors", "Kohler / Duravit sanitaryware", "Home automation integration", "2-year workmanship warranty"]
  }
]

export default function ServicesPage() {
  return (
    <div className="pt-32 md:pt-40">
      {/* Hero */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">Our Services</span>
          <h1 className="mt-4 font-sans text-4xl font-bold text-foreground md:text-5xl">
            Comprehensive Interior Design Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            From initial concept to final installation, we offer a complete range of interior 
            design services tailored to meet your unique needs and exceed your expectations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-secondary px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="group flex flex-col rounded-xl bg-card p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-sans text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{service.shortDesc}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-accent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`px-6 py-24 ${index % 2 === 0 ? "" : "bg-muted"}`}
        >
          <div className="mx-auto max-w-7xl">
            <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <service.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-sans text-3xl font-bold text-foreground">{service.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{service.description}</p>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-foreground">What We Offer</h3>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 shrink-0 text-accent" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-foreground">Our Process</h3>
                  <ol className="mt-4 space-y-2">
                    {service.process.map((step, i) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent">
                          {i + 1}
                        </span>
                        <span className="text-sm text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={`${service.title} by Oaks N Stones in Pune`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing */}
      <section className="bg-primary px-6 py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-accent">Pricing</span>
            <h2 className="mt-4 font-sans text-3xl font-bold md:text-4xl">
              Transparent Pricing Packages
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Choose a package that fits your budget. All packages include personalized design 
              and quality materials. Contact us for a detailed quote.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-8 ${tier.popular ? "bg-accent text-accent-foreground" : "bg-primary-foreground/10"}`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="font-sans text-xl font-semibold">{tier.name}</h3>
                <p className={`mt-2 text-sm ${tier.popular ? "text-accent-foreground/80" : "text-primary-foreground/60"}`}>
                  {tier.description}
                </p>
                <div className="mt-6">
                  <span className="text-4xl font-bold">INR {tier.price}</span>
                  <span className={`text-sm ${tier.popular ? "text-accent-foreground/80" : "text-primary-foreground/60"}`}> {tier.unit}</span>
                </div>
                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`mt-8 w-full ${tier.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-primary-foreground/20 hover:bg-primary-foreground/30"}`}
                >
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-sans text-3xl font-bold text-foreground md:text-4xl">
            Ready to Transform Your Space?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Schedule a free consultation with our design experts. We will help you understand 
            your options and create a plan that fits your needs and budget.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+919503931331">
                <Phone className="mr-2 h-4 w-4" />
                +91 95039 31331
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
