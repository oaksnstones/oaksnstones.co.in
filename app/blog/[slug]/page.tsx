import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Tag, User } from "lucide-react"
import { notFound } from "next/navigation"
import { blogPosts } from "../blog-client"
import { Button } from "@/components/ui/button"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Oaks N Stones Blog`,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) notFound()

  const idx = blogPosts.findIndex(p => p.slug === slug)
  const prev = blogPosts[idx - 1]
  const next = blogPosts[idx + 1]
  const related = blogPosts.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <div className="pt-32 md:pt-40">
      {/* Hero Image */}
      <section className="px-6 pb-0">
        <div className="mx-auto max-w-5xl">
          <Link href="/blog" className="mb-6 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src={post.image} alt={post.title} fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-3">
            <article className="lg:col-span-2">
              <h1 className="font-sans text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-6 border-b border-border pb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-accent" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-accent" />
                  <span>{post.date}</span>
                </div>
              </div>

              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>

              <div className="mt-8 space-y-6">
                {post.content.split("\n\n").filter(Boolean).map((para, i) => (
                  <p key={i} className="leading-relaxed text-foreground/80">{para}</p>
                ))}
              </div>

              {/* CTA inside article */}
              <div className="mt-12 rounded-2xl bg-accent/10 p-8 text-center">
                <h3 className="font-sans text-xl font-bold text-foreground">
                  Ready to Transform Your Space?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Get a free consultation from Pune's most trusted interior design team.
                </p>
                <Button asChild className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact">Book Free Consultation</Link>
                </Button>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="rounded-xl bg-muted p-6">
                <h3 className="font-semibold text-foreground">About Oaks N Stones</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Pune's premier luxury interior design firm. 150+ projects, 10+ years, and a 4.9 ★ Google rating.
                </p>
                <Button asChild size="sm" className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>

              <div className="rounded-xl bg-card p-6 shadow-sm">
                <h3 className="font-semibold text-foreground mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {related.map(r => (
                    <Link key={r.slug} href={`/blog/${r.slug}`} className="group flex gap-3">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                        <Image src={r.image} alt={r.title} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">{r.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{r.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-primary p-6 text-primary-foreground">
                <h3 className="font-semibold">Contact Us</h3>
                <p className="mt-2 text-sm text-primary-foreground/80">Have a project in mind?</p>
                <a href="tel:+919503931331" className="mt-3 block text-accent font-medium text-sm hover:underline">
                  +91 95039 31331
                </a>
                <a href="mailto:oaksnstones@gmail.com" className="block text-accent font-medium text-sm hover:underline">
                  oaksnstones@gmail.com
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="border-t border-border px-6 py-12">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="group flex items-center gap-3">
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              <div>
                <p className="text-xs text-muted-foreground">Previous</p>
                <p className="font-medium text-foreground">{prev.title}</p>
              </div>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/blog/${next.slug}`} className="group flex items-center gap-3 text-right">
              <div>
                <p className="text-xs text-muted-foreground">Next</p>
                <p className="font-medium text-foreground">{next.title}</p>
              </div>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : <div />}
        </div>
      </section>
    </div>
  )
}
