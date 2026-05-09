"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export const blogPosts = [
  {
    slug: "interior-design-trends-2024",
    title: "Top Interior Design Trends for 2024",
    excerpt: "Discover the latest interior design trends that are shaping homes and commercial spaces in 2024. From sustainable materials to bold color choices.",
    image: "/images/hero-living-room.jpg",
    category: "Trends",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Oaks N Stones Team",
    content: `Interior design in 2024 is all about blending sustainability with luxury. Biophilic design continues to lead the way, bringing nature indoors through living walls, natural textures, and earthy palettes. Japandi — the fusion of Japanese minimalism with Scandinavian functionality — remains hugely popular in Indian homes.

Bold accent walls, curved furniture, and layered lighting are defining residential interiors this year. Homeowners are moving away from cold greys toward warm terracottas, sage greens, and deep ochres.

In Pune particularly, modular kitchens with integrated appliances and smart storage are in massive demand. Wardrobe designs have evolved from simple hinged units to walk-in closet systems with dedicated lighting and mirror arrangements.

Sustainability is no longer optional — clients are increasingly asking for eco-friendly materials, VOC-free paints like Asian Paints Royale Atmos, and FSC-certified wood. At Oaks N Stones, we've been championing sustainable luxury since day one.`
  },
  {
    slug: "sustainable-interior-design",
    title: "Sustainable Interior Design: Building a Greener Future",
    excerpt: "Learn how eco-friendly materials and sustainable practices are revolutionizing the interior design industry in Pune and beyond.",
    image: "/images/portfolio-kitchen.jpg",
    category: "Sustainability",
    date: "March 10, 2024",
    readTime: "7 min read",
    author: "Oaks N Stones Team",
    content: `Sustainability in interior design is no longer a niche trend — it has become the expectation. At Oaks N Stones, we believe that a beautiful home should also be a responsible one.

We source Century Ply and Merino laminates that carry green certifications, use Häfele and Hettich hardware that is built to last decades (reducing replacement waste), and specify Fenesta windows for superior insulation that lowers energy consumption.

Water-efficient sanitary ware from brands like Kohler and Duravit, paired with sensor-based taps and dual-flush systems, can reduce household water usage by up to 40%. LED lighting systems with smart controls further cut energy bills.

Our renovation projects focus on upcycling existing elements wherever possible. A beautiful teak door doesn't need to be replaced — it needs to be restored, refinished, and celebrated. This philosophy of conscious luxury guides every decision we make.`
  },
  {
    slug: "maximizing-small-spaces",
    title: "Maximizing Small Spaces: Design Tips for Compact Homes",
    excerpt: "Expert tips on how to make the most of limited space in apartments and compact homes without compromising on style or functionality.",
    image: "/images/portfolio-bedroom.jpg",
    category: "Tips & Tricks",
    date: "March 5, 2024",
    readTime: "6 min read",
    author: "Oaks N Stones Team",
    content: `Small space design is an art — and one we've mastered over 150+ projects in Pune's compact urban apartments. The secret lies in smart planning, vertical thinking, and multi-functional furniture.

Start with a light colour palette. Whites, soft creams, and light greys visually expand a space. Add depth with a single accent wall rather than four busy walls. Use mirrors strategically — a full-length mirror at the end of a corridor makes it appear twice as long.

Floor-to-ceiling wardrobes in bedrooms use every centimetre of height, while under-bed storage drawers and ottomans with hidden compartments handle excess storage without clutter. In the kitchen, Ebco's pull-out systems and corner carousels make every inch count.

Multi-functional furniture is a game-changer: sofa-cum-beds, dining tables that fold against the wall, and study desks built into wardrobes. With Hettich's lift-up mechanisms, wall beds have become stylish, not a compromise.`
  },
  {
    slug: "choosing-right-color-palette",
    title: "How to Choose the Right Color Palette for Your Home",
    excerpt: "A comprehensive guide to selecting colors that reflect your personality and create the perfect ambiance in every room.",
    image: "/images/hero-living-room.jpg",
    category: "Color Theory",
    date: "February 28, 2024",
    readTime: "8 min read",
    author: "Oaks N Stones Team",
    content: `Colour is the most powerful tool in an interior designer's kit. It sets mood, affects perception of space, and tells the story of who you are. Yet for most homeowners, choosing a palette is the most intimidating part of the design process.

Start with a feeling, not a colour. Do you want your living room to feel energising or serene? Expansive or intimate? These emotional goals point you toward the right palette. Warm tones (ochres, terracottas, deep reds) create energy and warmth; cool tones (blues, greens, greys) feel calm and spacious.

The 60-30-10 rule is your anchor: 60% dominant colour (walls, large furniture), 30% secondary colour (upholstery, curtains), 10% accent (cushions, artwork, plants). This proportion creates visual harmony without monotony.

At Oaks N Stones, we always review colours in the actual space — natural light changes a colour completely. Asian Paints' colour consultants and our in-house expertise help clients move past analysis paralysis and into confident, beautiful decisions.`
  },
  {
    slug: "luxury-kitchen-design-guide",
    title: "The Complete Guide to Luxury Kitchen Design",
    excerpt: "Everything you need to know about designing a high-end kitchen that combines functionality with aesthetic excellence.",
    image: "/images/portfolio-kitchen.jpg",
    category: "Kitchen Design",
    date: "February 20, 2024",
    readTime: "10 min read",
    author: "Oaks N Stones Team",
    content: `The kitchen is the heart of the home, and in modern Indian households, it's also a statement of lifestyle. A luxury kitchen is not defined by cost alone — it's defined by how seamlessly it combines beauty with function.

The work triangle (sink, stove, refrigerator) remains the foundational planning principle. Every other decision flows from this layout. For larger kitchens, an island adds prep space, casual dining, and a social hub where family gathers while someone cooks.

Materials make the luxury statement: Calacatta marble countertops, handleless lacquered cabinets in Duco finish, or German-engineered soft-close drawers from Hettich or Häfele. Integrated appliances — ovens, dishwashers, and refrigerators flush behind cabinet panels — create a seamless, architectural look.

Lighting deserves special attention: under-cabinet LEDs for task lighting, pendants over the island for ambiance, and in-cabinet lighting that makes every shelf a display. Our kitchen projects in Baner and Wakad have consistently won praise for this layered approach.`
  },
  {
    slug: "bedroom-design-better-sleep",
    title: "Bedroom Design for Better Sleep: Creating Your Sanctuary",
    excerpt: "Learn how thoughtful bedroom design can improve your sleep quality and overall well-being.",
    image: "/images/portfolio-bedroom.jpg",
    category: "Bedroom Design",
    date: "February 15, 2024",
    readTime: "6 min read",
    author: "Oaks N Stones Team",
    content: `A bedroom should be the most restorative room in your home. Yet most people underinvest here, focusing on living rooms and kitchens while treating the bedroom as an afterthought. Sleep scientists and designers agree: your sleeping environment has a profound impact on your rest quality.

Start with darkness and quiet. Blackout curtains or Fenesta's acoustic windows that block out both light and traffic noise transform sleep quality. Heavy drapes also add a layer of visual luxury.

The bed is the centrepiece — invest in a quality mattress and a headboard that anchors the room. Flanking bedside tables with integrated USB charging, soft reading lights with warm (2700K) LEDs, and thoughtfully placed artwork create a hotel-suite quality experience.

Colour psychology matters here most of all. Soft blues, warm whites, and sage greens are scientifically proven to aid relaxation. We always avoid high-saturation colours and harsh overhead lighting in bedrooms. Dimmer switches are non-negotiable.

Walk-in wardrobes with good interior lighting reduce morning stress — everything is visible and organised. Our clients in Kothrud and Aundh have reported significant improvements in their daily routine after wardrobe redesigns.`
  }
]

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
