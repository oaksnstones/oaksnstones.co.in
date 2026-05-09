"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Bot, User, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"

const FORMSPREE = "https://formspree.io/f/xojrqbvj"

const faqs = [
  { q: "What services do you offer?", a: "We offer end-to-end interior design services: Residential Design (2BHK to penthouses), Commercial Design (offices, retail, hospitality), Home Renovation, 3D Visualization & Virtual Walkthroughs, Design Consultation, and complete Turnkey Project Execution. We serve Wakad, Baner, Hinjewadi, Aundh, Kothrud, and all of Pune." },
  { q: "How much does interior design cost in Pune?", a: "Budget depends on size and scope. Realistic ranges for a complete interior:\n• 2 BHK: ₹8–15 Lakhs (Essential) to ₹18–28 Lakhs (Luxury)\n• 3 BHK: ₹13–24 Lakhs (Essential) to ₹28–45 Lakhs (Luxury)\n• 4 BHK: ₹20–38 Lakhs (Essential) to ₹45–75 Lakhs (Luxury)\nThis includes false ceiling, painting, modular furniture, kitchen, and project management. Call us for a personalized quote!" },
  { q: "How long does a project take?", a: "Typical timelines from design approval to handover:\n• 2–3 BHK residential: 10–14 weeks\n• 4 BHK or villa: 16–22 weeks\n• Commercial office (2000–5000 sq ft): 8–14 weeks\nWe always give a firm timeline upfront and honor it. Our 250+ completed projects prove our delivery record." },
  { q: "Do you provide 3D designs before work starts?", a: "Yes, always. Every project includes detailed 3D visualizations and virtual walkthroughs before a single nail is put in. You'll see furniture placement, material finishes, lighting, and color — exactly as it will look. No surprises. Only after your complete approval do we begin execution." },
  { q: "What brands do you use?", a: "We are authorized partners with premium brands:\n• Hardware & Fittings: Hettich, Häfele, Ebco\n• Plywood & Laminates: Century Ply, Merino, Greenlam\n• Windows & Doors: Fenesta\n• Sanitaryware: Kohler, Duravit\n• Tiles: Kajaria\n• Paints: Asian Paints, Dulux\n• Storage: Godrej Interio\nAll materials carry manufacturer warranties. We never compromise on quality." },
  { q: "What is your payment structure?", a: "We follow a transparent milestone-based payment plan:\n• 30% at project initiation\n• 40% at design approval & material procurement\n• 30% on completion before handover\nNo hidden charges. No surprise costs. You'll know exactly where every rupee goes before we start." },
  { q: "What is included in your packages?", a: "Typically included: false ceiling, painting, electrical points, complete modular furniture, modular kitchen with hardware.\n\nTypically separate (add-on): bathroom flooring/tiling, external doors & windows, home appliances, sofa, curtains, decorative lights, home automation.\n\nWe explain every line item in detail during our free consultation." },
  { q: "Do you work outside Pune?", a: "Yes! We are based in Wakad, Pune but have completed projects across Maharashtra including Mumbai, Nashik, and Satara. We also offer virtual design consultation for clients outside Pune. Contact us to discuss your project location." },
  { q: "Is there a free consultation?", a: "Yes! We offer a completely free initial consultation — at our studio in Wakad or at your space. No obligation to proceed. We'll review your floor plan, understand your vision, and give you a realistic budget estimate within 24 hours." },
  { q: "Who will work on my project?", a: "Your project is handled by our core team:\n• Umang Bansal — Founder & Principal Designer\n• Shivani Bansal — Co-Founder & Principal Designer\n• Bansi Patel — Senior Designer\n• Akshay Jain — Lead Project Manager\nYou'll have a dedicated designer and project manager as your single points of contact throughout." },
  { q: "Do you offer a warranty?", a: "Yes. We provide a 1-year workmanship warranty on all projects. Material warranties (5–10 years on plywood, 2–5 years on hardware) are passed directly from manufacturers. Our premium projects include a 2-year workmanship warranty." },
  { q: "What is your studio address?", a: "Our studio is at:\nOffice No. 404, MI Commercia,\nPink City Road, Wakad,\nPune – 411057\n\nOpen: Friday to Wednesday, 10 AM – 7 PM\nSaturday & Sunday: By Appointment Only\n\nCall us: +91 95039 31331\nEmail: oaksnstones@gmail.com" },
]

const suggestions = [
  "What services do you offer?",
  "How much does interior design cost in Pune?",
  "How long does a project take?",
  "What brands do you use?",
  "Is there a free consultation?",
]

interface Msg { type: "bot" | "user"; text: string }

function matchAnswer(q: string): string | null {
  const lq = q.toLowerCase()
  for (const f of faqs) {
    const keywords = f.q.toLowerCase().split(/\s+/).filter(w => w.length > 3)
    if (keywords.some(k => lq.includes(k))) return f.a
  }
  if (/cost|price|budget|lakh|cheap|expensive|rate|package/.test(lq)) return faqs[1].a
  if (/time|week|month|long|fast|quick|deliver/.test(lq)) return faqs[2].a
  if (/brand|hettich|hafele|century|ebco|kohler|material|quality/.test(lq)) return faqs[4].a
  if (/payment|pay|advance|installment|emi/.test(lq)) return faqs[5].a
  if (/include|cover|what.*package|scope/.test(lq)) return faqs[6].a
  if (/address|office|location|where|wakad|find/.test(lq)) return faqs[11].a
  if (/team|designer|founder|who|umang|shivani|bansi|akshay/.test(lq)) return faqs[9].a
  if (/warranty|guarantee/.test(lq)) return faqs[10].a
  if (/consult|free|visit|meet/.test(lq)) return faqs[8].a
  if (/3d|visual|render|walkthrough/.test(lq)) return faqs[3].a
  return null
}

export function FAQChatbot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([
    { type: "bot", text: "Hello! 👋 I'm the Oaks N Stones assistant. Ask me anything about our interior design services, pricing, process, or team — or pick a question below." }
  ])
  const [input, setInput] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" })
  const [formSent, setFormSent] = useState(false)
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [msgs, typing, showForm])

  const addMsg = (type: "bot" | "user", text: string) => setMsgs(p => [...p, { type, text }])

  const handleSend = (text?: string) => {
    const q = (text ?? input).trim()
    if (!q) return
    setInput("")
    addMsg("user", q)
    setTyping(true)

    setTimeout(() => {
      setTyping(false)
      const ans = matchAnswer(q)
      if (ans) {
        addMsg("bot", ans)
      } else if (/contact|call|speak|human|talk|whatsapp/.test(q.toLowerCase())) {
        addMsg("bot", "I'll connect you with our team right away! You can call us at +91 95039 31331 or fill out the quick form below — we'll call you back within 2 hours.")
        setShowForm(true)
      } else {
        addMsg("bot", "Great question! That's something our designers can answer in detail. Fill out the quick form below and we'll call you back within 2 hours, or call us directly at +91 95039 31331.")
        setShowForm(true)
      }
    }, 700)
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch(FORMSPREE, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ source: "chatbot", ...formData }),
    }).catch(() => {})
    setFormSent(true)
    setShowForm(false)
    addMsg("bot", `Thank you ${formData.name}! 🎉 Our team will call you at ${formData.phone} within 2 hours. Is there anything else I can help you with?`)
    setFormData({ name: "", phone: "", message: "" })
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: open ? 0 : 1, opacity: open ? 0 : 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        aria-label="Open chat assistant"
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-6 z-50 flex h-[580px] w-[360px] max-w-[calc(100vw-24px)] flex-col overflow-hidden rounded-2xl bg-card shadow-2xl border border-border"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent">
                  <Bot className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Oaks N Stones</p>
                  <p className="text-xs text-primary-foreground/70 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 inline-block" />
                    Design Assistant · Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a href="tel:+919503931331" className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="Call us">
                  <Phone className="h-4 w-4" />
                </a>
                <button onClick={() => setOpen(false)} className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="Close">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth">
              {msgs.map((m, i) => (
                <div key={i} className={`flex items-start gap-2 ${m.type === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${m.type === "user" ? "bg-accent" : "bg-muted"}`}>
                    {m.type === "user" ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                  </div>
                  <div className={`max-w-[78%] rounded-2xl px-3 py-2 text-xs leading-relaxed whitespace-pre-line ${m.type === "user" ? "bg-accent text-accent-foreground rounded-tr-none" : "bg-muted text-foreground rounded-tl-none"}`}>
                    {m.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex items-start gap-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted"><Bot className="h-3.5 w-3.5" /></div>
                  <div className="bg-muted rounded-2xl rounded-tl-none px-3 py-2 flex gap-1 items-center">
                    {[0,1,2].map(i => <span key={i} className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: `${i*0.15}s` }} />)}
                  </div>
                </div>
              )}

              {/* Quick suggestions — show only at start */}
              {msgs.length === 1 && (
                <div className="space-y-1.5 pt-1">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground px-1">Common Questions</p>
                  {suggestions.map(s => (
                    <button key={s} onClick={() => handleSend(s)} className="block w-full text-left rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground transition-colors hover:border-accent hover:text-accent">
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {/* Quick callback form */}
              {showForm && !formSent && (
                <form onSubmit={handleFormSubmit} className="rounded-xl border border-accent/30 bg-accent/5 p-3 space-y-2">
                  <p className="text-xs font-semibold text-foreground">Quick Callback Request</p>
                  <input required placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData,name:e.target.value})} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs focus:outline-none focus:border-accent" />
                  <input required type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData,phone:e.target.value})} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs focus:outline-none focus:border-accent" />
                  <input placeholder="Brief requirement (optional)" value={formData.message} onChange={e => setFormData({...formData,message:e.target.value})} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs focus:outline-none focus:border-accent" />
                  <button type="submit" className="w-full rounded-lg bg-accent py-2 text-xs font-semibold text-accent-foreground hover:bg-accent/90 transition-colors">Request Callback</button>
                </form>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input bar */}
            <div className="border-t border-border bg-background px-3 py-3">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSend()}
                  placeholder="Ask anything about our services…"
                  className="flex-1 rounded-xl border border-border bg-secondary px-3 py-2 text-xs focus:outline-none focus:border-accent"
                />
                <button onClick={() => handleSend()} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 transition-colors">
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-muted-foreground">
                Or call directly · <a href="tel:+919503931331" className="text-accent font-medium">+91 95039 31331</a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
