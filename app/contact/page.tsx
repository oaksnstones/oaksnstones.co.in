import type { Metadata } from "next"
import
 from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Oaks N Stones interior designers in Wakad, Pune. Schedule a free consultation, request a quote, or visit our studio. Call +91 95039 31331.",
  keywords: ["contact interior designer pune", "interior design consultation pune", "interior designer wakad", "book interior designer"],
  openGraph: {
    title: "Contact Oaks N Stones | Interior Design Consultation",
    description: "Schedule a free consultation with Pune's leading interior designers.",
    images: ["/images/service-consultation.jpg"],
  },
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 95039 31331", ""],
    action: "tel:+919503931331"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["oaksnstones@gmail.com", "oaksnstones@gmail.com"],
    action: "mailto:oaksnstones@gmail.com"
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Office No. 404, MI Commercia", "Pink City Road, Wakad, Pune 411057"],
    action: "https://maps.google.com"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sunday: By Appointment"],
    action: null
  }
]

const socialLinks = [
  { href: "https://instagram.com/oaksnstones", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com/oaksnstones", icon: Facebook, label: "Facebook" },
  { href: "https://linkedin.com/company/oaksnstones", icon: Linkedin, label: "LinkedIn" },
  { href: "https://youtube.com/@oaksnstones", icon: Youtube, label: "YouTube" },
]

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
            Ready to transform your space? Get in touch with our design experts for a free 
            consultation. We&apos;d love to hear about your project and discuss how we can bring 
            your vision to life.
          </p>
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
                  {info.details.map((detail, index) => (
                    info.action ? (
                      <a
                        key={index}
                        href={info.action}
                        className="block text-sm text-muted-foreground transition-colors hover:text-accent"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p key={index} className="text-sm text-muted-foreground">{detail}</p>
                    )
                  ))}
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
            {/* Contact Form */}
            <div>
              <h2 className="font-sans text-2xl font-bold text-foreground">Send Us a Message</h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Map and Social */}
            <div>
              <h2 className="font-sans text-2xl font-bold text-foreground">Visit Our Studio</h2>
              <p className="mt-2 text-muted-foreground">
                Come see our showroom and discuss your project in person.
              </p>
              
              {/* Map */}
              <div className="mt-6 aspect-[4/3] overflow-hidden rounded-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5551896376!2d73.7640!3d18.5978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM1JzUyLjEiTiA3M8KwNDUnNTAuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Oaks N Stones Location - Wakad, Pune"
                  className="grayscale transition-all hover:grayscale-0"
                />
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-semibold text-foreground">Follow Us</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Stay updated with our latest projects and design inspiration.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      aria-label={social.label}
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

      {/* FAQ Section */}
      <section className="bg-muted px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-sans text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="mt-2 text-muted-foreground">
              Quick answers to common questions about working with us.
            </p>
          </div>
          <div className="mt-12 space-y-6">
            {[
              {
                q: "What is your design process?",
                a: "Our process includes initial consultation, concept development, 3D visualization, material selection, and project execution. We keep you involved at every step."
              },
              {
                q: "How much does interior design cost?",
                a: "Budget ranges: 2 BHK ₹8–24L · 3 BHK ₹13–38L · 4 BHK ₹20–75L depending on finish level. We provide a detailed free quote after your consultation."
              },
              {
                q: "How long does a project take?",
                a: "Typical residential projects take 8-12 weeks from design to completion. Timeline depends on project size and complexity."
              },
              {
                q: "Do you offer free consultations?",
                a: "Yes! We offer a free initial consultation to understand your requirements and discuss how we can help transform your space."
              }
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
