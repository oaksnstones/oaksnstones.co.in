"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"
import { ArrowRight } from "lucide-react"

export function BlogClient() {
  const featured = blogPosts[0]
  const rest     = blogPosts.slice(1)

  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}
      <section className="relative py-28 bg-secondary border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Our Blog</span>
            <h1 className="mt-4 font-sans text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Design Insights &amp; Inspiration
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Interior design tips, trend reports, and honest guides from the Oaks N Stones team in Wakad, Pune.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent">Featured Article</p>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {featured.category}
                  </span>
                </div>
                <div>
                  <h2 className="font-sans text-2xl font-bold text-foreground transition-colors group-hover:text-accent md:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                  <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{featured.author}</span>
                    <span>·</span>
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 font-sans text-2xl font-bold text-foreground">More Articles</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-accent/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                      {post.category}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-sans text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span>·</span>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-sans text-2xl font-bold text-foreground">Stay Inspired</h2>
          <p className="mt-3 text-muted-foreground">
            Monthly design tips and exclusive insights from our studio in Wakad, Pune.
          </p>
          <div className="mt-8 flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
            />
            <button
              type="button"
              onClick={async (e) => {
                const btn = e.currentTarget
                const input = btn.previousElementSibling as HTMLInputElement
                if (!input?.value) return
                await fetch("https://formspree.io/f/xojrqbvj", {
                  method: "POST",
                  headers: { "Content-Type": "application/json", Accept: "application/json" },
                  body: JSON.stringify({ email: input.value, source: "newsletter" }),
                }).catch(() => {})
                input.value = ""
                btn.textContent = "Subscribed ✓"
                btn.classList.add("opacity-70")
              }}
              className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
