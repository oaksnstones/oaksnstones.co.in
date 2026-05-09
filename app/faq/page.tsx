import type { Metadata } from "next"
import { FAQClient } from "./faq-client"

export const metadata: Metadata = {
  title: "FAQ & Budget Guide",
  description: "Frequently asked questions about Oaks N Stones interior design services in Pune. Understand our design process, pricing, budget packages, and what to expect when working with us.",
  keywords: ["interior design faq pune", "interior design cost pune", "interior design budget pune", "how much interior design cost", "interior design packages pune"],
  openGraph: {
    title: "FAQ & Budget Guide | Oaks N Stones Interior Design Pune",
    description: "Everything you need to know before starting your interior design project — process, pricing, budgets, and more.",
    images: ["/images/service-consultation.jpg"],
  },
}

export default function FAQPage() {
  return <FAQClient />
}
