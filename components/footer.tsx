import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Youtube, Star } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ & Budget Guide" },
  { href: "/contact", label: "Contact" },
]

const services = [
  { href: "/services#residential", label: "Residential Design" },
  { href: "/services#commercial", label: "Commercial Design" },
  { href: "/services#renovation", label: "Renovation" },
  { href: "/services#consultation", label: "Design Consultation" },
  { href: "/services#3d", label: "3D Visualization" },
  { href: "/services#turnkey", label: "Turnkey Projects" },
]

const socialLinks = [
  { href: "https://instagram.com/oaksnstones", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com/oaksnstones", icon: Facebook, label: "Facebook" },
  { href: "https://linkedin.com/company/oaksnstones", icon: Linkedin, label: "LinkedIn" },
  { href: "https://youtube.com/@oaksnstones", icon: Youtube, label: "YouTube" },
]

const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.152870613285!2d73.75897!3d18.60815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb96b4a8e4b7%3A0x0!2sMI+Commercia%2C+Pink+City+Rd%2C+Wakad%2C+Pune%2C+Maharashtra+411057!5e0!3m2!1sen!2sin!4v1712000000000!5m2!1sen!2sin"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Map */}
      <div className="border-b border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <h3 className="mb-2 text-lg font-semibold">Visit Our Design Studio</h3>
          <p className="mb-4 text-sm text-primary-foreground/70">
            Office No. 404, MI Commercia, Pink City Road, Wakad, Pune – 411057
          </p>
          <div className="aspect-[21/9] w-full overflow-hidden rounded-xl shadow-md">
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Oaks N Stones Interior Design Studio — MI Commercia, Pink City Road, Wakad, Pune 411057"
              className="grayscale opacity-85"
            />
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Oaks N Stones — Home">
              <span className="font-sans text-2xl font-bold">
                Oaks <span className="text-accent">N</span> Stones
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
              Pune's premier luxury interior design studio. 250+ projects, 350,000+ sq ft designed,
              and a 4.9★ Google rating — delivering dream interiors with 100% pricing transparency.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary-foreground/10 px-4 py-2.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-semibold">4.9</span>
              <span className="text-xs text-primary-foreground/60">· 250+ Reviews</span>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label={`Oaks N Stones on ${social.label}`}>
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-base font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-base font-semibold">Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-base font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://maps.google.com/?q=MI+Commercia+Pink+City+Road+Wakad+Pune" target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>Office No. 404, MI Commercia,<br />Pink City Road, Wakad,<br />Pune – 411057</span>
                </a>
              </li>
              <li>
                <a href="tel:+919503931331" className="flex items-center gap-3 text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  <span>+91 95039 31331</span>
                </a>
              </li>
              <li>
                <a href="mailto:oaksnstones@gmail.com" className="flex items-center gap-3 text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  <span>oaksnstones@gmail.com</span>
                </a>
              </li>
              <li className="text-sm text-primary-foreground/60 space-y-1 pt-1">
                <p className="font-medium text-primary-foreground/80">Studio Hours</p>
                <p>Friday – Wednesday: 10 AM – 7 PM</p>
                <p>Saturday & Sunday: By Appointment</p>
                <p className="text-xs text-primary-foreground/50">(Thursday closed)</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-primary-foreground/50 md:flex-row">
          <p>© {new Date().getFullYear()} Oaks N Stones Interior Design, Pune. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-primary-foreground">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-primary-foreground">Terms of Service</Link>
            <Link href="/faq" className="transition-colors hover:text-primary-foreground">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
