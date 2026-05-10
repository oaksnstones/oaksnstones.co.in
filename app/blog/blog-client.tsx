"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { blogPosts } from "@/lib/blog-data"


export function BlogClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-accent uppercase tracking-[0.3em] text-sm font-medium">Our Blog</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
              Design Insights & Inspiration
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Explore our collection of articles featuring interior design tips, trends,
              and expert insights from Pune&apos;s leading interior designers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href={`/blog/${(Array.isArray(blogPosts) && blogPosts[0]) ? blogPosts[0].slug : ""}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={(Array.isArray(blogPosts) && blogPosts[0]) ? blogPosts[0].image : "/images/hero-living-room.jpg"} alt={(Array.isArray(blogPosts) && blogPosts[0]) ? blogPosts[0].title : ""} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 text-sm font-medium">Featured</div>
                </div>
                <div>
                  <span className="text-accent uppercase tracking-wider text-sm">{(Array.isArray(blogPosts) && blogPosts[0]) ? blogPosts[0].category : ""}</span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-serif text-foreground group-hover:text-accent transition-colors">
                    {(Array.isArray(blogPosts) && blogPosts[0]) ? blogPosts[0].title : ""}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{(Array.isArray(blogPosts) && blogPosts[0]) ? blogPosts[0].excerpt : ""}</p>
                  <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{(Array.isArray(blogPosts) && blogPosts[0]) ? blogPosts[0].date : ""}</span>
                    <span>•</span>
                    <span>{(Array.isArray(blogPosts) && blogPosts[0]) ? blogPosts[0].readTime : ""}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-serif text-foreground mb-12"
          >
            Latest Articles
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(Array.isArray(blogPosts) ? blogPosts : []).slice(1).map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden mb-6">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <span className="text-accent uppercase tracking-wider text-xs">{post.category}</span>
                  <h3 className="mt-2 text-xl font-serif text-foreground group-hover:text-accent transition-colors">{post.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Stay Inspired</h2>
            <p className="mt-4 text-muted-foreground">
              Subscribe to our newsletter for the latest design trends, tips, and exclusive insights
              from Pune&apos;s premier interior design studio.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
              />
              <button
                type="button"
                onClick={async (e) => {
                  const emailInput = e.currentTarget.previousElementSibling as HTMLInputElement
                  if (!emailInput?.value) return
                  await fetch("https://formspree.io/f/xojrqbvj", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Accept: "application/json" },
                    body: JSON.stringify({ email: emailInput.value, source: "newsletter" }),
                  }).catch(() => {})
                  emailInput.value = ""
                  e.currentTarget.textContent = "Subscribed ✓"
                }}
                className="px-8 py-3 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
