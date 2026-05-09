"use client"

import { motion } from "framer-motion"
import { Star, Quote, ExternalLink } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    id: 1,
    name: "Suresh Deshmukh",
    role: "Homeowner, Wakad, Pune",
    content: "Oaks N Stones ने आमच्या 3BHK फ्लॅटचे सुंदर रूपांतर केले. Umang आणि Shivani यांनी आमची प्रत्येक गरज समजून घेतली. The quality of Hettich hardware and Century ply they used is outstanding. Highly recommend!",
    rating: 5,
    google: true,
  },
  {
    id: 2,
    name: "Prabhavati Kulkarni",
    role: "Homeowner, Baner, Pune",
    content: "खूप छान काम केले. The team was professional and delivered on time. Our modular kitchen with Häfele fittings is exactly what we dreamed of. 100% transparent pricing — no hidden costs at all. Best interior designers in Pune!",
    rating: 5,
    google: true,
  },
  {
    id: 3,
    name: "Sanjay Bhosale",
    role: "Business Owner, Hinjewadi",
    content: "We hired Oaks N Stones for our office in Hinjewadi. Akshay managed the entire project flawlessly. The Ebco modular storage systems and the false ceiling work is world class. Delivered 2 weeks ahead of schedule!",
    rating: 5,
    google: true,
  },
  {
    id: 4,
    name: "Vandana Pawar",
    role: "Homeowner, Kothrud, Pune",
    content: "Bansi Patel ने आमचं घर एखाद्या मॅगझीनच्या पानासारखं बनवलं. The 3D visualization before execution was so accurate — what we saw is exactly what we got. Worth every rupee. खूप धन्यवाद!",
    rating: 5,
    google: true,
  },
  {
    id: 5,
    name: "Nilesh Jadhav",
    role: "Homeowner, Aundh, Pune",
    content: "Fenesta windows and Kohler sanitaryware they specified are premium quality. The entire 4BHK renovation was done in 14 weeks as promised. Oaks N Stones is the best interior design firm in Wakad. Truly luxury at its finest.",
    rating: 5,
    google: true,
  },
  {
    id: 6,
    name: "Meenakshi Gaikwad",
    role: "Homeowner, Pimple Saudagar",
    content: "Asian Paints Royale finish and the Merino laminates they used look stunning even after 2 years. The team is honest, punctual and the quality is unmatched. Shivani Bansal has an excellent eye for detail. 5 stars easily!",
    rating: 5,
    google: true,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-accent">Google Reviews</span>
          <h2 className="mt-4 font-sans text-3xl font-bold text-foreground md:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-bold text-foreground">4.9</span>
            <span className="text-muted-foreground">· 250+ verified Google Reviews</span>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col rounded-xl bg-card p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-8 w-8 text-accent/25" />
                {t.google && (
                  <span className="flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    Google
                  </span>
                )}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{t.content}</p>
              <div className="mt-4 flex items-center gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="mt-3 border-t border-border pt-3">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://g.page/r/oaksnstones/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:border-accent hover:text-accent"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Read all 250+ Reviews on Google
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
