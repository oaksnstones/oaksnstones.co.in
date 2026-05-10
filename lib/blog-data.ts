export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  author: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "interior-design-trends-2025",
    title: "Top Interior Design Trends Shaping Pune Homes in 2025",
    excerpt: "From Japandi minimalism to biophilic living walls — discover the design movements defining luxury homes in Pune this year.",
    image: "/images/blog-trends.jpg",
    category: "Trends",
    date: "January 10, 2025",
    readTime: "5 min read",
    author: "Umang Bansal",
    content: `Interior design in 2025 is defined by one word: intention. Every material, every fixture, every colour choice is deliberate. At Oaks N Stones, we've observed this shift across all our projects in Wakad, Baner, and Hinjewadi — clients are more informed, more discerning, and more focused on quality over quantity.

Japandi — the fusion of Japanese wabi-sabi philosophy and Scandinavian functionality — continues to lead residential interiors. Clean lines, warm wood tones, handcrafted ceramics, and a deliberately curated approach to decor. No clutter. No excess. Just intentional beauty.

Biophilic design is no longer optional. Living green walls, indoor water features, natural stone surfaces, and an abundance of indoor plants are now standard requests in luxury residential projects. Studies consistently show that biophilic interiors reduce stress and improve productivity — clients in Pune are paying attention.

Warm neutrals are replacing the cool greys of the last decade. Terracotta, ochre, sage green, dusty rose — these earthy tones bring a sense of groundedness and warmth that pure whites and greys never could. Paired with matte black hardware from Häfele and natural linen textures, the result is effortlessly sophisticated.

In kitchens specifically, the slab cabinet door in a deep charcoal or forest green with integrated handles and Hettich Servo-Drive systems is the definitive 2025 look. The kitchen is a showpiece, not just a workspace.

At Oaks N Stones, we are also seeing a surge in demand for home offices that don't feel like offices — dedicated study spaces integrated seamlessly into the overall home aesthetic, with bespoke joinery, acoustic panels, and mood lighting that switches between focus and relaxation modes.`
  },
  {
    slug: "sustainable-interior-design-pune",
    title: "Sustainable Luxury: How We Build Green Without Compromising Beauty",
    excerpt: "Eco-conscious design doesn't mean beige walls and bare floors. Here's how Oaks N Stones delivers sustainable luxury across Pune.",
    image: "/images/blog-sustainable.jpg",
    category: "Sustainability",
    date: "December 18, 2024",
    readTime: "7 min read",
    author: "Shivani Bansal",
    content: `When a client in Aundh asked us for a "sustainable home interior," we didn't hand them a catalogue of recycled materials. We had a conversation about longevity. The most sustainable interior is one that lasts 20 years without needing a redo — and that starts with choosing the right materials the first time.

Century BWP (Boiling Waterproof) plywood is our default specification for all cabinetry. It doesn't warp, doesn't swell, and doesn't need replacement in 5 years. A cheap commercial ply might save ₹50,000 upfront but cost ₹3 lakhs in redoing work within a decade. That's not sustainable — financially or environmentally.

We specify Häfele and Hettich hardware for the same reason. A Hettich soft-close hinge carries a 10-year warranty. Generic hinges fail in 2–3 years. Over a 4BHK with 80+ hinges, the math is stark.

Fenesta windows with double-glazed units provide acoustic insulation that reduces outside noise by up to 30 decibels, while also cutting heat transfer significantly — this means lower AC load, lower electricity bills, lower carbon footprint. We've seen clients in west-facing flats in Wakad reduce their cooling costs by 20–25% after window upgrades.

Paint selection matters too. Asian Paints Royale Atmos and Dulux Ambiance both offer VOC-free or low-VOC formulations. In a sealed apartment, off-gassing from conventional paints can affect air quality for months. We insist on low-VOC across all our projects.

Sustainable design at Oaks N Stones also means respecting the existing structure. In our renovation projects, we salvage, refinish, and repurpose wherever possible. A solid teak wardrobe from 1990 deserves restoration, not a skip bin. The craft that went into it is part of what makes it worth keeping.`
  },
  {
    slug: "maximizing-small-spaces-pune-apartments",
    title: "Small Flat, Big Life: Design Secrets for Pune's Compact Apartments",
    excerpt: "Most Pune apartments are under 1,000 sq ft. Here's exactly how we design them to feel spacious, functional, and genuinely beautiful.",
    image: "/images/blog-small-spaces.jpg",
    category: "Tips & Tricks",
    date: "November 25, 2024",
    readTime: "6 min read",
    author: "Bansi Patel",
    content: `The average 2BHK in Wakad is about 750–900 sq ft. By the time you account for walls, passage, and bathrooms, the usable floor area for actual living is often under 650 sq ft. Designing beautifully within those constraints isn't just possible — it's some of the most rewarding work we do at Oaks N Stones.

The first principle is verticality. Floor-to-ceiling storage everywhere — wardrobes, kitchen cabinets, living room shelving — uses every centimetre of height and keeps floor space free. Ebco's pull-out drawer systems mean nothing is wasted inside those cabinets either. Every corner, every deep shelf, every overhead space is accessible and useful.

The second principle is light palette. Warm whites and soft creams on walls make rooms feel larger. A single accent wall — in a textured wallpaper or a deep, rich tone — adds depth and character without closing the space in. The key is restraint: one statement, not four.

Mirrors are underused in Indian homes. A full-height mirror on the back of a bedroom door or at the end of a corridor effectively doubles the perceived size of that space. In dining rooms, a mirror wall behind the dining table creates a sense of expansiveness that photography can barely capture.

Multi-functional furniture is not a compromise — it's clever design. A sofa-cum-bed in a study-guest room. A dining table that folds against the wall. An ottoman with storage inside. A study desk built into the wardrobe. These aren't shortcuts; they're design solutions that make a 2BHK feel like a complete home.

Finally: lighting. Small spaces live or die by their lighting design. A single overhead light makes any room feel like a hospital corridor. Layer your lighting — ambient (ceiling), task (study, kitchen), and accent (shelving, artwork) — and use dimmers. The difference between a cramped flat and an intimate, cosy apartment is often nothing more than a good lighting plan.`
  },
  {
    slug: "luxury-kitchen-design-pune-guide",
    title: "The Complete Guide to Designing a Luxury Kitchen in Pune",
    excerpt: "Your kitchen is where your home tells its story. Here's how we design kitchens that are as beautiful to cook in as they are to look at.",
    image: "/images/portfolio-kitchen.jpg",
    category: "Kitchen Design",
    date: "October 30, 2024",
    readTime: "9 min read",
    author: "Umang Bansal",
    content: `In Indian households, the kitchen is the engine room of the home. It runs from 6am to 10pm. It handles everything from morning chai to Sunday feasts. A luxury kitchen, therefore, is not just about aesthetics — it must be an ergonomic masterpiece that performs under pressure and looks extraordinary while doing it.

We start every kitchen project with a workflow analysis. How does the family cook? Is it one person or multiple? Are they making elaborate Indian food daily or more occasional cooking with daily deliveries? The answers shape everything — from the work triangle to the number of prep zones to the depth of the chimney hood we specify.

The work triangle — sink, stove, refrigerator — is the foundational principle. These three elements should be within 4–7 feet of each other. Beyond this triangle, we think in stations: a prep station with maximum counter depth, a storage station for daily-use ingredients, a cleaning station (sink and dishwasher together), and a plating station near the dining area.

For materials, our luxury kitchen specification starts with Century BWP plywood carcasses — the invisible skeleton that everything hangs on. For shutters, the choice depends on budget and lifestyle: PU acrylic lacquer for a high-gloss, mirror-smooth finish; Duco paint for a matte, luxe look; membrane press for a cost-effective sheen. Our hardware is exclusively Hettich or Häfele — their soft-close systems, pull-out units, and corner carousels make the kitchen perform as well as it looks.

Countertops: Calacatta marble for the statement island, engineered quartz for working areas (more durable against stains and acidic foods). Backsplash in metro tiles, handmade terracotta, or a slab extension of the countertop for a seamless, architectural finish.

Lighting: under-cabinet LED strips (3000K warm white) for task lighting, pendants over the island for drama and ambiance, in-cabinet lighting to make shelving a display. The kitchen should glow at night with intention.`
  },
  {
    slug: "bedroom-design-sleep-sanctuary",
    title: "Your Bedroom Should Be Your Best Sleep Environment. Here's How.",
    excerpt: "Sleep science meets luxury design: how Oaks N Stones creates bedrooms in Pune that genuinely improve how you rest.",
    image: "/images/portfolio-bedroom.jpg",
    category: "Bedroom Design",
    date: "September 15, 2024",
    readTime: "6 min read",
    author: "Shivani Bansal",
    content: `Most homeowners spend the most time thinking about their living room and kitchen. The bedroom — where they spend roughly one-third of their life — is often treated as an afterthought. At Oaks N Stones, we reverse this priority.

The bedroom has one primary function: restorative sleep. Every design decision should support that function. This doesn't mean the bedroom can't be beautiful — it means that beauty and rest must coexist without conflict.

Start with light control. Fenesta acoustic windows with double glazing dramatically reduce both light and sound infiltration. Add blackout blinds behind decorative sheer curtains. The ability to create total darkness when needed — and gentle, controlled light in the morning — fundamentally improves sleep quality.

Colour psychology is most critical in the bedroom. We favour soft blues (scientifically linked to lower heart rates and calm), warm whites (clean, peaceful, spatially generous), sage greens (grounding, natural), and deep charcoals (intimate, cocoon-like). We avoid high-saturation reds, oranges, or bright yellows — they are stimulating colours that work against relaxation.

The bed is the centrepiece and deserves the most investment. A quality mattress (we work with several local suppliers for client referrals), a substantial upholstered headboard that anchors the room visually, and premium bed linen. The headboard design sets the tone — tufted for classic luxury, clean panel for contemporary, curved for organic softness.

Bedside lighting is critical and often overlooked. A bedside pendant or articulated wall lamp at the right height and colour temperature (2700K, warm white) for reading — not overhead light. Dimmer switches throughout. USB charging integrated into the bedside design so phones stay off the bed. These small details add up to a bedroom that works for its occupant.

Walk-in wardrobes with good interior lighting are the last piece. The morning routine becomes stress-free when everything is visible, organised, and accessible. We design wardrobes with dedicated sections for different clothing categories, built-in drawers, and mirror panels — so the wardrobe itself becomes a daily ritual space, not a chaotic cupboard.`
  },
  {
    slug: "interior-design-budget-guide-pune-2025",
    title: "How Much Does Interior Design Actually Cost in Pune? An Honest Guide",
    excerpt: "No vague 'it depends' answers. Here is an honest, detailed breakdown of what interior design costs in Pune in 2025.",
    image: "/images/hero-living-room.jpg",
    category: "Budget Guide",
    date: "August 20, 2024",
    readTime: "10 min read",
    author: "Akshay Jain",
    content: `"How much will it cost?" is the first question every client asks, and the most important one to answer honestly. At Oaks N Stones, we believe in absolute transparency — so here is a detailed breakdown of what interior design genuinely costs in Pune in 2025.

The honest answer is that costs vary significantly based on three factors: the size of your home, the quality tier of materials you choose, and the scope of work (partial or complete). Here's a realistic breakdown.

For a 2BHK (approximately 700–900 sq ft usable area), complete interior design in Pune costs between ₹8 and ₹24 lakhs. The lower end uses commercial-grade plywood, standard laminates, and basic hardware. The upper end uses Century BWP plywood, imported veneers or Duco finishes, and premium Hettich or Häfele hardware throughout.

For a 3BHK (approximately 1,000–1,400 sq ft), expect ₹13 to ₹38 lakhs for a complete interior. For a 4BHK or villa (1,800 sq ft and above), ₹20 to ₹75 lakhs depending on specification.

These ranges typically include: false ceiling with concealed lighting, complete painting (two coats primer plus two finish coats), all electrical internal points and switches, modular furniture for all rooms, complete modular kitchen with hardware, and project management and supervision.

They typically exclude: bathroom floor tiling and wall dado (usually civil work), external doors, frames and windows, major appliances (refrigerator, washing machine, microwave), sofa and soft furnishings (unless specified), decorative pendant lights and chandeliers, curtains, home automation systems, and structural or civil modifications.

The most common mistake homeowners make is comparing quotes without comparing scope. A quote of ₹10 lakhs for a 3BHK that excludes the kitchen is not cheaper than ₹16 lakhs that includes a full modular kitchen with premium hardware. Always compare line items, not totals.

At Oaks N Stones, we provide itemised quotations — every line item is explained and priced. You always know exactly what you're getting and exactly what it costs. That's what 100% transparency means.`
  }
]
