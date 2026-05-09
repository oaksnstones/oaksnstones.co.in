import type { Metadata } from "next"
import { BlogClient } from "./blog-client"

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore interior design tips, trends, and expert insights from Oaks N Stones — Pune's leading interior design studio.",
  keywords: ["interior design blog pune", "interior design tips", "home decor ideas", "interior design trends india"],
  openGraph: {
    title: "Design Insights & Inspiration | Oaks N Stones Blog",
    description: "Expert tips, trends, and ideas from Pune's premier interior designers.",
    images: ["/images/hero-living-room.jpg"],
  },
}

export default function BlogPage() {
  return <BlogClient />
}
