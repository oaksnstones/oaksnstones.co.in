"use client"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const FORMSPREE = "https://formspree.io/f/xojrqbvj"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", projectType: "", budget: "", location: "", message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      })
    } catch {}
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="mt-8 rounded-xl bg-accent/10 p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="mt-6 font-sans text-xl font-semibold text-foreground">Thank You!</h3>
        <p className="mt-2 text-muted-foreground">We&apos;ve received your enquiry and will respond within 24 hours. You can also call us directly at <a href="tel:+919503931331" className="text-accent font-medium">+91 95039 31331</a>.</p>
        <Button onClick={() => { setIsSubmitted(false); setFormData({ name:"",email:"",phone:"",projectType:"",budget:"",location:"",message:"" }) }} variant="outline" className="mt-6">Send Another Message</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" placeholder="Your full name" value={formData.name} onChange={e => setFormData({...formData,name:e.target.value})} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({...formData,email:e.target.value})} />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={e => setFormData({...formData,phone:e.target.value})} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Project Location</Label>
          <Input id="location" placeholder="e.g., Wakad, Pune" value={formData.location} onChange={e => setFormData({...formData,location:e.target.value})} />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Project Type</Label>
          <Select value={formData.projectType} onValueChange={v => setFormData({...formData,projectType:v})}>
            <SelectTrigger><SelectValue placeholder="Select project type" /></SelectTrigger>
            <SelectContent>
              {["Residential Interior","Commercial Interior","Renovation","Design Consultation","3D Visualization","Turnkey Project","Other"].map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Budget Range</Label>
          <Select value={formData.budget} onValueChange={v => setFormData({...formData,budget:v})}>
            <SelectTrigger><SelectValue placeholder="Select budget range" /></SelectTrigger>
            <SelectContent>
              {["Under ₹5 Lakhs","₹5–10 Lakhs","₹10–20 Lakhs","₹20–40 Lakhs","₹40–75 Lakhs","Above ₹75 Lakhs"].map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Tell Us About Your Project *</Label>
        <Textarea id="message" placeholder="Describe your space, requirements, style preferences, and timeline..." rows={5} value={formData.message} onChange={e => setFormData({...formData,message:e.target.value})} required />
      </div>
      <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : <><Send className="mr-2 h-4 w-4" /> Send Enquiry</>}
      </Button>
      <p className="text-center text-xs text-muted-foreground">We respond within 24 hours · <a href="tel:+919503931331" className="underline hover:text-foreground">+91 95039 31331</a></p>
    </form>
  )
}
