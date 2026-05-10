"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Bot, User, Phone, ChevronRight } from "lucide-react"

const FORMSPREE = "https://formspree.io/f/xojrqbvj"

interface Msg {
  type: "bot" | "user"
  text: string
  suggestions?: string[]
}

// Knowledge base
const KB: { keywords: string[]; answer: string; next: string[] }[] = [
  {
    keywords: ["service", "offer", "do you", "what do", "help"],
    answer: "We offer complete interior design services across Pune:\n• Residential Design (2BHK to penthouses & villas)\n• Commercial Design (offices, retail, hospitality)\n• Renovation & Remodelling\n• 3D Visualization & Virtual Walkthroughs\n• Turnkey Project Execution\n\nWhat would you like to know more about?",
    next: ["How much does it cost?", "How long does a project take?", "Do you do free consultation?"],
  },
  {
    keywords: ["cost", "price", "budget", "lakh", "rate", "charge", "fee", "how much", "expensive", "affordable"],
    answer: "Here are realistic budget ranges for complete interiors:\n\n🏠 2 BHK — ₹8–24 Lakhs\n🏠 3 BHK — ₹13–38 Lakhs\n🏠 4 BHK — ₹20–75 Lakhs\n\nThis includes false ceiling, painting, modular furniture, kitchen & supervision. Pricing depends on material quality & scope.\n\nWant a free personalised quote?",
    next: ["What is included in the package?", "Request a free quote", "What brands do you use?"],
  },
  {
    keywords: ["includ", "cover", "scope", "package", "what is"],
    answer: "✅ Typically included:\nFalse ceiling · Painting · Electrical points · Modular furniture · Modular kitchen with hardware · Project supervision\n\nℹ️ Usually separate (add-on):\nBathroom flooring · External doors · Appliances · Sofa · Curtains · Decorative lights · Home automation\n\nWe explain every line item clearly before you commit.",
    next: ["How much does it cost?", "What brands do you use?", "Book free consultation"],
  },
  {
    keywords: ["time", "long", "week", "month", "duration", "fast", "quick", "when"],
    answer: "Typical project timelines:\n\n⏱ 2–3 BHK → 10–14 weeks\n⏱ 4 BHK / Villa → 16–22 weeks\n⏱ Office (2000–5000 sq ft) → 8–14 weeks\n\nWe give you a firm date upfront and stick to it. Our 250+ clients confirm this!",
    next: ["How much does it cost?", "Do you do free consultation?", "Who will work on my project?"],
  },
  {
    keywords: ["brand", "hettich", "hafele", "century", "material", "quality", "product", "fenesta", "ebco", "kohler", "godrej"],
    answer: "We are authorized partners with premium brands:\n\n🔧 Hardware: Hettich, Häfele, Ebco\n🪵 Plywood: Century Ply, Merino\n🚪 Windows: Fenesta\n🚿 Sanitaryware: Kohler, Duravit\n🎨 Paints: Asian Paints, Dulux\n🏗 Tiles: Kajaria\n\nAll materials carry manufacturer warranties.",
    next: ["What is included in the package?", "How much does it cost?", "Book free consultation"],
  },
  {
    keywords: ["consult", "free", "meet", "visit", "appointment", "book"],
    answer: "Yes! We offer a 100% free initial consultation — at our Wakad studio or at your home. No obligation whatsoever.\n\nDuring the visit we:\n✓ Understand your vision\n✓ Review your floor plan\n✓ Suggest design directions\n✓ Give a budget estimate\n\nShall I arrange a callback for you?",
    next: ["Request a free quote", "Where is your studio?", "Who will work on my project?"],
  },
  {
    keywords: ["team", "designer", "who", "umang", "shivani", "bansi", "akshay", "founder"],
    answer: "Your project is managed by our core team:\n\n👤 Umang Bansal — Founder & Principal Designer\n👤 Shivani Bansal — Co-Founder & Principal Designer\n👤 Bansi Patel — Senior Designer\n👤 Akshay Jain — Lead Project Manager\n\nEvery project gets a dedicated designer + project manager.",
    next: ["Do you do free consultation?", "How long does a project take?", "Book free consultation"],
  },
  {
    keywords: ["3d", "visual", "render", "walkthrough", "design before", "see before"],
    answer: "Yes! Every project includes detailed 3D visualizations and VR walkthroughs before a single nail goes in.\n\nYou'll approve:\n✓ Furniture placement\n✓ Material & colour finishes\n✓ Lighting plan\n✓ Full room-by-room look\n\nOnly after your full approval do we begin execution.",
    next: ["How much does it cost?", "Book free consultation", "What brands do you use?"],
  },
  {
    keywords: ["warrant", "guarant", "after", "support"],
    answer: "We provide:\n🛡 1-year workmanship warranty on all projects\n🛡 2-year warranty on our Premium/Luxury packages\n📋 Material warranties passed on from manufacturers (5–10 yrs on plywood, 2–5 yrs on hardware)",
    next: ["What brands do you use?", "How much does it cost?", "Book free consultation"],
  },
  {
    keywords: ["address", "office", "location", "where", "wakad", "find", "studio", "visit"],
    answer: "📍 Our Studio:\nOffice No. 404, MI Commercia,\nPink City Road, Wakad,\nPune – 411057\n\n🕐 Open: Friday–Wednesday, 10 AM – 7 PM\n📅 Saturday & Sunday: By Appointment\n\n📞 +91 95039 31331\n✉ oaksnstones@gmail.com",
    next: ["Book free consultation", "Do you do free consultation?"],
  },
  {
    keywords: ["payment", "pay", "advance", "installment", "emi", "structure"],
    answer: "Our transparent payment structure:\n\n💰 30% — At project initiation\n💰 40% — At design approval & material procurement\n💰 30% — On completion before handover\n\nNo hidden charges. No surprises. Every rupee accounted for.",
    next: ["What is included in the package?", "Book free consultation"],
  },
  {
    keywords: ["outside pune", "mumbai", "nashik", "other city", "maharashtra"],
    answer: "Yes! We are based in Wakad, Pune but have completed projects across Maharashtra — Mumbai, Nashik, Satara and more.\n\nWe also offer virtual design consultation for clients outside Pune.",
    next: ["Do you do free consultation?", "Book free consultation"],
  },
]

function findAnswer(q: string): { answer: string; next: string[] } | null {
  const lq = q.toLowerCase()
  for (const entry of KB) {
    if (entry.keywords.some(k => lq.includes(k))) {
      return { answer: entry.answer, next: entry.next }
    }
  }
  return null
}

const INITIAL_SUGGESTIONS = [
  "What services do you offer?",
  "How much does it cost?",
  "How long does a project take?",
  "Do you do free consultation?",
  "Where is your studio?",
]

export function FAQChatbot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      type: "bot",
      text: "Hello! 👋 I'm the Oaks N Stones assistant. I can answer questions about our services, pricing, process, and more.\n\nWhat would you like to know?",
      suggestions: INITIAL_SUGGESTIONS,
    },
  ])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: "", phone: "" })
  const [formSent, setFormSent] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [msgs, typing, showForm])

  const addMsg = useCallback((type: "bot" | "user", text: string, suggestions?: string[]) => {
    setMsgs(p => [...p, { type, text, suggestions }])
  }, [])

  const respond = useCallback((q: string) => {
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      if (/quote|callback|call me|contact|request|book|appointment/i.test(q)) {
        addMsg("bot", "Great! Let me take your details and we'll call you back within 2 hours.", undefined)
        setShowForm(true)
        return
      }
      const result = findAnswer(q)
      if (result) {
        addMsg("bot", result.answer, result.next)
      } else {
        addMsg("bot",
          "I don't have a specific answer for that, but our team will!\n\nShare your number and we'll call you back within 2 hours 🙂",
          ["Request a free quote", "Call us now"]
        )
      }
    }, 600)
  }, [addMsg])

  const handleSend = (text?: string) => {
    const q = (text ?? input).trim()
    if (!q) return
    setInput("")
    if (q === "Call us now") {
      window.location.href = "tel:+919503931331"
      return
    }
    addMsg("user", q)
    respond(q)
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
    addMsg("bot", `✅ Thank you, ${formData.name}! We'll call ${formData.phone} within 2 hours.\n\nIs there anything else I can help with?`, INITIAL_SUGGESTIONS)
    setFormData({ name: "", phone: "" })
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: open ? 0 : 1, opacity: open ? 0 : 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        aria-label="Open chat assistant"
      >
        <MessageSquare className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-accent-foreground">?</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-6 z-50 flex h-[600px] w-[370px] max-w-[calc(100vw-20px)] flex-col overflow-hidden rounded-2xl bg-card shadow-2xl border border-border"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-sm">ON</div>
                <div>
                  <p className="font-semibold text-sm">Oaks N Stones</p>
                  <p className="text-[11px] text-primary-foreground/70 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 inline-block" />
                    Design Assistant · Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a href="tel:+919503931331" className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" title="Call us">
                  <Phone className="h-4 w-4" />
                </a>
                <button onClick={() => setOpen(false)} className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {msgs.map((m, i) => (
                <div key={i} className={`flex items-start gap-2 ${m.type === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${m.type === "user" ? "bg-accent text-accent-foreground" : "bg-muted text-foreground"}`}>
                    {m.type === "user" ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                  </div>
                  <div className="max-w-[82%] space-y-2">
                    <div className={`rounded-2xl px-3 py-2.5 text-[12px] leading-relaxed whitespace-pre-line ${m.type === "user" ? "bg-accent text-accent-foreground rounded-tr-none" : "bg-muted text-foreground rounded-tl-none"}`}>
                      {m.text}
                    </div>
                    {/* Suggestion chips */}
                    {m.suggestions && m.suggestions.length > 0 && i === msgs.length - 1 && (
                      <div className="flex flex-col gap-1.5 mt-1">
                        {m.suggestions.map(s => (
                          <button
                            key={s}
                            onClick={() => handleSend(s)}
                            className="flex items-center gap-2 text-left rounded-xl border border-border bg-background px-3 py-2 text-[11px] font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/5 hover:text-accent"
                          >
                            <ChevronRight className="h-3 w-3 text-accent shrink-0" />
                            {s}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex items-start gap-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted"><Bot className="h-3.5 w-3.5" /></div>
                  <div className="bg-muted rounded-2xl rounded-tl-none px-3 py-2.5 flex gap-1 items-center">
                    {[0,1,2].map(i => (
                      <span key={i} className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              )}

              {/* Callback form */}
              {showForm && !formSent && (
                <form onSubmit={handleFormSubmit} className="rounded-xl border border-accent/30 bg-accent/5 p-3 space-y-2 mt-2">
                  <p className="text-[11px] font-semibold text-foreground">📞 Quick Callback Request</p>
                  <input
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-[12px] focus:outline-none focus:border-accent"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={e => setFormData(d => ({ ...d, phone: e.target.value }))}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-[12px] focus:outline-none focus:border-accent"
                  />
                  <button type="submit" className="w-full rounded-lg bg-accent py-2 text-[12px] font-semibold text-accent-foreground hover:bg-accent/90 transition-colors">
                    Request Callback
                  </button>
                  <button type="button" onClick={() => setShowForm(false)} className="w-full text-center text-[11px] text-muted-foreground hover:text-foreground">
                    Cancel
                  </button>
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
                  placeholder="Type your question…"
                  className="flex-1 rounded-xl border border-border bg-secondary px-3 py-2 text-[12px] focus:outline-none focus:border-accent"
                />
                <button
                  onClick={() => handleSend()}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className="mt-1.5 text-center text-[10px] text-muted-foreground">
                Or call · <a href="tel:+919503931331" className="text-accent font-medium">+91 95039 31331</a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
