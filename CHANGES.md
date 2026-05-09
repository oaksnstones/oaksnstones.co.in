# Oaks N Stones — Changes Summary

## Bug Fixes
- **Blog page**: Separated `"use client"` and `Metadata` export (were incompatible in Next.js App Router). Blog now has a server wrapper (`page.tsx`) and a client component (`blog-client.tsx`).
- **Portfolio filter**: Filter buttons are now fully functional with client-side state, animations, and `AnimatePresence` transitions.
- **Missing blog images**: Replaced broken `/images/portfolio-living.jpg` references with existing images.
- **Favicon**: Added `icon.svg` to `/public/` to prevent 404s.

## Contact Info Updated (All Files)
- **Phone**: +91 95039 31331
- **Email**: oaksnstones@gmail.com
- **Address**: Office No. 404, MI Commercia, Pink City Road, Wakad, Pune – 411057

Files updated: `header.tsx`, `footer.tsx`, `contact/page.tsx`, `contact-form.tsx`, `whatsapp-cta.tsx`, `cta.tsx`, `layout.tsx`, `faq-chatbot.tsx`, `about/page.tsx`, `services/page.tsx`

## New & Upgraded Components

### Premium Custom Cursor (`components/custom-cursor.tsx`)
- Dual-ring design: outer ring + spinning dashed decorative ring on hover
- Magnetic dot that disappears on hover
- Context-aware variants: `default`, `hover`, `image`, `text`
- Gold glow bloom on interactive elements
- Label text inside ring ("View" on images, custom labels via `data-cursor-label`)

### Hero Section — Key Strengths Added
- **Google Reviews badge**: 5 stars · 4.9 · 250+ reviews
- **100% Transparent Pricing** badge with shield icon
- Stats row: 150+ Projects, 10+ Years, 250+ Happy Clients

### Partners Section (`components/sections/partners.tsx`) — NEW
- Animated marquee of brand logos: Hettich, Häfele, Century Ply, Fenesta, Ebco, Kajaria, Asian Paints, Kohler, Duravit, Merino
- Brand chips below marquee
- Clearbit logo images with graceful text fallback

## New Pages Built

### FAQ Page (`app/faq/`)
- 4 tabbed sections: General, Design Process, Budget & Pricing, Materials & Brands
- Animated accordion items
- Budget Guide section with 3 package cards (Essential, Premium, Luxury) with BHK-wise price ranges
- "What's Included / Excluded" reference table
- Inline CTA to contact

### Blog [slug] Page (`app/blog/[slug]/`)
- Full article content for all 6 blog posts
- Sidebar: About Us widget, Related Articles, contact details
- Prev/Next navigation
- `generateStaticParams` for static rendering

## Navigation Updates
- **Header**: FAQ added under "More" dropdown; top bar now shows Google rating + Transparent Pricing trust badges; mobile menu includes FAQ
- **Footer**: FAQ link in Quick Links and bottom bar; Google rating badge; correct address

