"use client"

import { motion } from "framer-motion"

const partners = [
  { name: "Hettich", color: "#E30613", desc: "Hardware & Fittings" },
  { name: "Häfele", color: "#003087", desc: "Systems & Fittings" },
  { name: "Century Ply", color: "#C41E3A", desc: "Premium Plywood" },
  { name: "Fenesta", color: "#0066CC", desc: "Windows & Doors" },
  { name: "Ebco", color: "#FF6600", desc: "Modular Hardware" },
  { name: "Godrej Interio", color: "#231F20", desc: "Storage Solutions" },
  { name: "Kajaria", color: "#B8860B", desc: "Premium Tiles" },
  { name: "Asian Paints", color: "#E03C31", desc: "Paints & Textures" },
  { name: "Kohler", color: "#1B1B1B", desc: "Sanitaryware" },
  { name: "Duravit", color: "#009FE3", desc: "Bath Concepts" },
  { name: "Merino", color: "#2E7D32", desc: "Laminates" },
  { name: "Dulux", color: "#DA291C", desc: "Premium Paints" },
]

function LogoBadge({ p }: { p: typeof partners[0] }) {
  return (
    <div className="group flex h-[72px] w-36 shrink-0 flex-col items-center justify-center gap-1 rounded-xl bg-card border border-border px-3 py-2 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
      <span className="text-sm font-bold text-foreground/70 group-hover:text-foreground transition-colors text-center leading-tight">{p.name}</span>
      <span className="text-[10px] text-muted-foreground text-center">{p.desc}</span>
      <div className="h-0.5 w-8 rounded-full mt-0.5" style={{ background: p.color, opacity: 0.6 }} />
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
          <span className="text-sm font-medium uppercase tracking-widest text-accent">Trusted Brand Partners</span>
          <h2 className="mt-3 font-sans text-2xl font-bold text-foreground md:text-3xl">
            Brands We Work With
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            We are authorized partners with India's and Europe's leading hardware, plywood, tile, and sanitary brands — ensuring every project is built to last 20+ years.
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
              transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            >
              {[...partners, ...partners].map((p, i) => (
                <LogoBadge key={i} p={p} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Brand chips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {partners.map(p => (
            <span key={p.name} className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground hover:border-accent hover:text-accent transition-colors cursor-default">
              {p.name}
            </span>
          ))}
        </motion.div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          All materials carry manufacturer warranties · We never substitute quality for cost
        </p>
      </div>
    </section>
  )
}
