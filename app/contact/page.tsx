import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin, Youtube } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | Interior Design Consultation Pune",
  description: "Get in touch with Oaks N Stones interior designers in Wakad, Pune. Schedule a free consultation, request a quote, or visit our studio. Call +91 95039 31331.",
  keywords: ["contact interior designer pune", "interior design consultation pune", "interior designer wakad pune", "book interior designer pune", "free interior design quote pune"],
  openGraph: {
    title: "Contact Oaks N Stones | Free Interior Design Consultation Pune",
    description: "Schedule a free consultation with Pune's leading interior designers. Call +91 95039 31331.",
    images: ["/images/service-consultation.jpg"],
  },
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 95039 31331"],
    action: "tel:+919503931331",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["oaksnstones@gmail.com"],
    action: "mailto:oaksnstones@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Office No. 404, MI Commercia", "Pink City Road, Wakad, Pune 411057"],
    action: "https://maps.google.com/?q=MI+Commercia+Pink+City+Road+Wakad+Pune",
  },
  {
    icon: Clock,
    title: "Studio Hours",
    details: ["Friday – Wednesday: 10 AM – 7 PM", "Saturday & Sunday: By Appointment"],
    action: null,
  },
]

const socialLinks = [
  { href: "https://instagram.com/oaksnstones", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com/oaksnstones", icon: Facebook, label: "Facebook" },
  { href: "https://linkedin.com/company/oaks-n-stones", icon: Linkedin, label: "LinkedIn" },
  { href: "https://youtube.com/@oaksnstones", icon: Youtube, label: "YouTube" },
]

const MAPS_EMBED = "https://maps.google.com/maps?q=MI+Commercia+Pink+City+Road+Wakad+Pune+411057&output=embed&z=18&hl=en"

export default function ContactPage() {
  return (
    <div className="pt-32 md:pt-40">
      {/* Hero */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">Contact Us</span>
          <h1 className="mt-4 font-sans text-4xl font-bold text-foreground md:text-5xl">
            Let&apos;s Start Your Project
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Ready to transform your space? Get in touch for a free consultation.
            We&apos;d love to hear about your project and bring your vision to life.
          </p>
          {/* Prominent call button */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+919503931331"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-accent-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
              Call Now: +91 95039 31331
            </a>
            <a
              href="mailto:oaksnstones@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-4 text-base font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Mail className="h-5 w-5" />
              oaksnstones@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-secondary px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info) => (
              <div key={info.title} className="rounded-xl bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{info.title}</h3>
                <div className="mt-2 space-y-1">
                  {info.details.map((detail, index) =>
                    info.action ? (
                      <a key={index} href={info.action} className="block text-sm text-muted-foreground transition-colors hover:text-accent">
                        {detail}
                      </a>
                    ) : (
                      <p key={index} className="text-sm text-muted-foreground">{detail}</p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-sans text-2xl font-bold text-foreground">Send Us a Message</h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
            <div>
              <h2 className="font-sans text-2xl font-bold text-foreground">Visit Our Studio</h2>
              <p className="mt-2 text-muted-foreground">
                Office No. 404, MI Commercia, Pink City Road, Wakad, Pune – 411057
              </p>
              <div className="mt-6 h-52 overflow-hidden rounded-xl">
                <iframe
                  src={MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Oaks N Stones Interior Design Studio — MI Commercia, Pink City Road, Wakad, Pune 411057"
                  className="grayscale transition-all hover:grayscale-0"
                />
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-foreground">Follow Us</h3>
                <p className="mt-2 text-sm text-muted-foreground">Stay updated with our latest projects and design inspiration.</p>
                <div className="mt-4 flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      aria-label={`Oaks N Stones on ${social.label}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="bg-muted px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-sans text-2xl font-bold text-foreground">Quick Answers</h2>
            <p className="mt-2 text-muted-foreground">Common questions about working with us.</p>
          </div>
          <div className="mt-12 space-y-6">
            {[
              { q: "Do you offer a free consultation?", a: "Yes! Completely free, at our studio in Wakad or your space. No obligation." },
              { q: "How much does interior design cost?", a: "2 BHK ₹8–24L · 3 BHK ₹13–38L · 4 BHK ₹20–75L depending on finish. Free detailed quote after consultation." },
              { q: "How long does a project take?", a: "2–3 BHK: 10–14 weeks. 4 BHK/villa: 16–22 weeks from design approval to handover." },
              { q: "What areas in Pune do you serve?", a: "Wakad, Baner, Hinjewadi, Aundh, Kothrud, Koregaon Park, Viman Nagar, Hadapsar & all of Pune." },
            ].map((faq, index) => (
              <div key={index} className="rounded-xl bg-card p-6 shadow-sm">
                <h3 className="font-semibold text-foreground">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
