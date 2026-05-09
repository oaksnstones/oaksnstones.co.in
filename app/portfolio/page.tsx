import type { Metadata } from "next"
import { PortfolioClient } from "./portfolio-client"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our portfolio of luxury interior design projects in Pune. View residential, commercial, and renovation projects by Oaks N Stones.",
  keywords: ["interior design portfolio pune", "home interior projects", "commercial interior projects pune", "best interior design work pune"],
  openGraph: {
    title: "Portfolio | Oaks N Stones Interior Design Projects",
    description: "Browse our curated collection of luxury interior design projects across Pune.",
    images: ["/images/hero-living-room.jpg"],
  },
}

export default function PortfolioPage() {
  return <PortfolioClient />
}
