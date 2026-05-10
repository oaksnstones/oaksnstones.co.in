"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Official or Clearbit logo sources - verified working CDN URLs
const partners = [
  {
    name: "Hettich",
    logo: "https://logo.clearbit.com/hettich.com",
    color: "#E30613",
    desc: "Hardware & Fittings",
    bg: "#fff",
  },
  {
    name: "Häfele",
    logo: "https://logo.clearbit.com/haefele.de",
    color: "#003087",
    desc: "Systems & Fittings",
    bg: "#fff",
  },
  {
    name: "Century Ply",
    logo: "https://logo.clearbit.com/centuryply.com",
    color: "#C41E3A",
    desc: "Premium Plywood",
    bg: "#fff",
  },
  {
    name: "Fenesta",
    logo: "https://logo.clearbit.com/fenesta.com",
    color: "#0066CC",
    desc: "Windows & Doors",
    bg: "#fff",
  },
  {
    name: "Ebco",
    logo: "https://logo.clearbit.com/ebco.in",
    color: "#FF6600",
    desc: "Modular Hardware",
    bg: "#fff",
  },
  {
    name: "Kajaria",
    logo: "https://logo.clearbit.com/kajariaceramics.com",
    color: "#B8860B",
    desc: "Premium Tiles",
    bg: "#fff",
  },
  {
    name: "Asian Paints",
    logo: "https://logo.clearbit.com/asianpaints.com",
    color: "#E03C31",
    desc: "Paints & Textures",
    bg: "#fff",
  },
  {
    name: "Kohler",
    logo: "https://logo.clearbit.com/kohler.com",
    color: "#1B1B1B",
    desc: "Sanitaryware",
    bg: "#fff",
  },
  {
    name: "Duravit",
    logo: "https://logo.clearbit.com/duravit.com",
    color: "#009FE3",
    desc: "Bath Concepts",
    bg: "#fff",
  },
  {
    name: "Merino",
    logo: "https://logo.clearbit.com/merinogroup.com",
    color: "#2E7D32",
    desc: "Laminates",
    bg: "#fff",
  },
  {
    name: "Dulux",
    logo: "https://logo.clearbit.com/dulux.com",
    color: "#DA291C",
    desc: "Premium Paints",
    bg: "#fff",
  },
]

function BrandCard({ p }: { p: typeof partners[0] }) {
  return (
    <div className="group flex h-20 w-40 shrink-0 flex-col items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-3 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10">
      <div className="relative h-8 w-28 flex items-center justify-center">
        <Image
          src={p.logo}
          alt={`${p.name} — brand partner of Oaks N Stones interior design Pune`}
          fill
          className="object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
          unoptimized
          onError={(e) => {
            const img = e.target as HTMLImageElement
            img.style.display = "none"
            const parent = img.parentElement
            if (parent) {
              const span = document.createElement("span")
              span.style.cssText = `font-size:12px;font-weight:700;color:${p.color};text-align:center;line-height:1.2`
              span.textContent = p.name
              parent.appendChild(span)
            }
          }}
        />
      </div>
      <span className="text-[10px] text-muted-foreground text-center leading-tight">{p.desc}</span>
    </div>
  )
}

export function Partners() {
  return (
    <section className="overflow-hidden border-y border-border bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Trusted Brand Partners
          </span>
          <h2 className="mt-3 font-sans text-2xl font-bold text-foreground md:text-3xl">
            Brands We Build With
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Authorized partners with India&apos;s and Europe&apos;s leading hardware, plywood, tile, and sanitary brands — every project built to last 20+ years.
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-secondary to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-secondary to-transparent" />
          <div className="flex overflow-hidden">
            <motion.div
              className="flex shrink-0 gap-4 pr-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
            >
              {[...partners, ...partners].map((p, i) => (
                <BrandCard key={`${p.name}-${i}`} p={p} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Static logo grid below marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-11"
        >
          {partners.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-2">
              <div className="relative h-8 w-16">
                <Image
                  src={p.logo}
                  alt={`${p.name} logo`}
                  fill
                  className="object-contain opacity-50 grayscale transition-all hover:opacity-80 hover:grayscale-0"
                  unoptimized
                  onError={(e) => {
                    const img = e.target as HTMLImageElement
                    img.style.display = "none"
                  }}
                />
              </div>
              <span className="text-center text-[9px] font-medium text-muted-foreground">{p.name}</span>
            </div>
          ))}
        </motion.div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          All materials carry manufacturer warranties · We never substitute quality for cost
        </p>
      </div>
    </section>
  )
}
