import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, MapPin, Calendar, Ruler } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

const projects = [
  {
    id: 1,
    title: "Grand Duplex Residence",
    category: "Residential",
    location: "Wakad, Pune",
    area: "3,500 sq ft",
    year: "2024",
    duration: "14 weeks",
    budget: "Premium",
    image: "/images/portfolio-bedroom.jpg",
    gallery: ["/images/portfolio-bedroom.jpg", "/images/hero-living-room.jpg", "/images/portfolio-kitchen.jpg"],
    slug: "grand-duplex-residence",
    description: "A contemporary 4BHK villa featuring minimalist design with warm wooden accents and premium finishes.",
    challenge: "The clients wanted a modern, minimalist home that still felt warm and inviting for their growing family. The challenge was to create distinct zones for work, rest, and entertainment while maintaining visual cohesion.",
    solution: "We designed an open-concept living area with subtle zoning through furniture placement and ceiling treatments. Warm wood tones and textured fabrics were introduced to soften the modern lines, while custom storage solutions maximized functionality.",
    features: ["Custom Italian furniture", "Smart home integration", "Underfloor heating", "Home theater room", "Modular kitchen with island", "Walk-in wardrobes"]
  },
  {
    id: 2,
    title: "Contemporary Kitchen Design",
    category: "Residential",
    location: "Baner, Pune",
    area: "400 sq ft",
    year: "2024",
    duration: "6 weeks",
    budget: "Premium",
    image: "/images/portfolio-kitchen.jpg",
    gallery: ["/images/portfolio-kitchen.jpg", "/images/portfolio-dining.jpg"],
    slug: "contemporary-kitchen",
    description: "A state-of-the-art modular kitchen with Italian marble countertops and smart storage solutions.",
    challenge: "Transform a cramped, outdated kitchen into a modern culinary space that could accommodate the client's love for cooking and entertaining.",
    solution: "We completely reconfigured the layout to create an efficient work triangle. Premium materials, clever lighting, and innovative storage made the space both beautiful and functional.",
    features: ["Italian marble countertops", "German hardware", "Soft-close mechanisms", "Built-in appliances", "LED task lighting", "Pull-out pantry"]
  },
  {
    id: 3,
    title: "Corporate Office Space",
    category: "Commercial",
    location: "Hinjewadi, Pune",
    area: "5,000 sq ft",
    year: "2023",
    duration: "12 weeks",
    budget: "Standard",
    image: "/images/portfolio-office.jpg",
    gallery: ["/images/portfolio-office.jpg", "/images/portfolio-dining.jpg"],
    slug: "corporate-office",
    description: "Modern open-plan office designed to foster collaboration while maintaining individual focus areas.",
    challenge: "Create a workspace for 50+ employees that promotes collaboration while providing quiet zones for focused work, all while reflecting the company's innovative brand.",
    solution: "We designed a hybrid workspace with open collaboration areas, private phone booths, and flexible meeting spaces. The design incorporates the brand colors subtly while maintaining a professional atmosphere.",
    features: ["Open collaboration zones", "Private focus pods", "Video conferencing rooms", "Breakout areas", "Ergonomic furniture", "Biophilic elements"]
  },
  {
    id: 4,
    title: "Spa Bathroom Suite",
    category: "Residential",
    location: "Aundh, Pune",
    area: "200 sq ft",
    year: "2023",
    duration: "5 weeks",
    budget: "Luxury",
    image: "/images/portfolio-bathroom.jpg",
    gallery: ["/images/portfolio-bathroom.jpg"],
    slug: "spa-bathroom",
    description: "A luxurious spa-inspired bathroom featuring marble walls, freestanding tub, and premium fixtures.",
    challenge: "Convert a standard master bathroom into a spa-like retreat that would provide daily relaxation and wellness.",
    solution: "We selected calming materials and incorporated wellness features like a rain shower, heated floors, and ambient lighting to create a daily spa experience.",
    features: ["Freestanding soaking tub", "Rain shower system", "Heated floors", "Marble walls", "Ambient lighting", "Built-in speakers"]
  },
  {
    id: 5,
    title: "Elegant Dining Space",
    category: "Residential",
    location: "Kothrud, Pune",
    area: "300 sq ft",
    year: "2023",
    duration: "4 weeks",
    budget: "Premium",
    image: "/images/portfolio-dining.jpg",
    gallery: ["/images/portfolio-dining.jpg", "/images/portfolio-kitchen.jpg"],
    slug: "elegant-dining",
    description: "A sophisticated dining room with custom furniture, statement chandelier, and warm ambient lighting.",
    challenge: "Design a formal dining space that could accommodate large family gatherings while remaining intimate for daily meals.",
    solution: "A custom extendable dining table with complementary chairs was designed. The statement chandelier serves as the focal point, while warm wall colors and textured fabrics create intimacy.",
    features: ["Custom dining table", "Designer chandelier", "Built-in bar cabinet", "Ambient lighting", "Textured wall panels", "Acoustic treatments"]
  },
  {
    id: 6,
    title: "Premium Living Room",
    category: "Residential",
    location: "Wakad, Pune",
    area: "600 sq ft",
    year: "2024",
    duration: "8 weeks",
    budget: "Luxury",
    image: "/images/hero-living-room.jpg",
    gallery: ["/images/hero-living-room.jpg", "/images/portfolio-bedroom.jpg", "/images/portfolio-dining.jpg"],
    slug: "premium-living-room",
    description: "An expansive living space with floor-to-ceiling windows, bespoke furniture, and neutral luxury palette.",
    challenge: "Create a living space that maximizes the stunning views while providing comfortable seating for a large family and entertaining guests.",
    solution: "We designed a layout that draws the eye to the views while creating intimate conversation areas. Custom furniture pieces ensure comfort and style in equal measure.",
    features: ["Floor-to-ceiling windows", "Custom sectional sofa", "Automated blinds", "Premium AV system", "Statement art pieces", "Designer coffee tables"]
  }
]

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = (Array.isArray(projects) ? projects : []).find(p => p.slug === slug)
  
  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: project.title,
    description: `${project.description} Interior design project in ${project.location} by Oaks N Stones.`,
    openGraph: {
      title: `${project.title} | Oaks N Stones Portfolio`,
      description: project.description,
      images: [project.image],
    },
  }
}

export async function generateStaticParams() {
  return (Array.isArray(projects) ? projects : []).map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = (Array.isArray(projects) ? projects : []).find(p => p.slug === slug)
  
  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex(p => p.slug === slug)
  const prevProject = projects[currentIndex - 1]
  const nextProject = projects[currentIndex + 1]

  return (
    <div className="pt-32 md:pt-40">
      {/* Hero Image */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <Link href="/portfolio" className="mb-6 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
            <Image
              src={project.image}
              alt={`${project.title} - Interior design by Oaks N Stones in ${project.location}`}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <span className="rounded-full bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
                {project.category}
              </span>
              <h1 className="mt-4 font-sans text-3xl font-bold text-foreground md:text-4xl">
                {project.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-12">
                <h2 className="font-sans text-xl font-semibold text-foreground">The Challenge</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.challenge}</p>
              </div>

              <div className="mt-8">
                <h2 className="font-sans text-xl font-semibold text-foreground">Our Solution</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.solution}</p>
              </div>

              <div className="mt-8">
                <h2 className="font-sans text-xl font-semibold text-foreground">Key Features</h2>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-xl bg-muted p-6">
                <h3 className="font-semibold text-foreground">Project Details</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Ruler className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Area</p>
                      <p className="font-medium text-foreground">{project.area}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Completed</p>
                      <p className="font-medium text-foreground">{project.year}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-accent/10 p-6">
                <h3 className="font-semibold text-foreground">Start Your Project</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Inspired by this project? Let&apos;s create something amazing for your space.
                </p>
                <Button asChild className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 1 && (
        <section className="bg-muted px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 font-sans text-2xl font-bold text-foreground">Project Gallery</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="border-t border-border px-6 py-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {prevProject ? (
            <Link href={`/portfolio/${prevProject.slug}`} className="group flex items-center gap-3">
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              <div>
                <p className="text-xs text-muted-foreground">Previous</p>
                <p className="font-medium text-foreground">{prevProject.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link href={`/portfolio/${nextProject.slug}`} className="group flex items-center gap-3 text-right">
              <div>
                <p className="text-xs text-muted-foreground">Next</p>
                <p className="font-medium text-foreground">{nextProject.title}</p>
              </div>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </div>
  )
}
