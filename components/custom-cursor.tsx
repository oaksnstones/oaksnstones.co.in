"use client"

import { useEffect, useRef, useState } from "react"

type Variant = "default" | "hover" | "image"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const spinRef = useRef<HTMLDivElement>(null)
  const [variant, setVariant] = useState<Variant>("default")
  const [label, setLabel] = useState("")
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    let ringX = -200, ringY = -200
    let dotX = -200, dotY = -200
    let raf: number

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const loop = () => {
      ringX = lerp(ringX, dotX, 0.14)
      ringY = lerp(ringY, dotY, 0.14)

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX - 3}px, ${dotY - 3}px)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`
      }
      if (spinRef.current) {
        spinRef.current.style.transform = `translate(${ringX - 26}px, ${ringY - 26}px)`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX
      dotY = e.clientY

      const t = e.target as HTMLElement
      if (t.closest("img,[data-cursor='image']")) {
        setVariant("image")
        setLabel("View")
      } else if (t.closest("a,button")) {
        setVariant("hover")
        setLabel(t.closest("a,button")?.getAttribute("data-cursor-label") ?? "")
      } else {
        setVariant("default")
        setLabel("")
      }
    }

    const onEnter = () => setVisible(true)
    const onLeave = () => setVisible(false)

    window.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseenter", onEnter)
    document.addEventListener("mouseleave", onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseenter", onEnter)
      document.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  const ringSize = variant === "image" ? 72 : variant === "hover" ? 52 : 36
  const ringBorder = variant === "image"
    ? "2px solid rgba(120,80,20,0.9)"
    : variant === "hover"
    ? "1.5px solid rgba(120,80,20,0.85)"
    : "1.5px solid rgba(120,80,20,0.6)"
  const ringBg = variant === "image"
    ? "rgba(120,80,20,0.12)"
    : variant === "hover"
    ? "rgba(120,80,20,0.07)"
    : "transparent"

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000] hidden md:block"
        style={{
          width: 6, height: 6,
          borderRadius: "50%",
          background: "rgba(100,65,10,0.95)",
          opacity: visible && variant !== "hover" ? 1 : 0,
          transition: "opacity 0.2s, background 0.2s",
          willChange: "transform",
        }}
      />

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:flex items-center justify-center"
        style={{
          width: ringSize, height: ringSize,
          borderRadius: "50%",
          border: ringBorder,
          background: ringBg,
          opacity: visible ? 1 : 0,
          transition: "width 0.25s ease, height 0.25s ease, border 0.25s ease, background 0.25s ease, opacity 0.2s",
          willChange: "transform",
        }}
      >
        {label && (
          <span style={{
            fontSize: 9, fontWeight: 700, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "rgba(100,65,10,0.95)",
            lineHeight: 1, pointerEvents: "none",
          }}>
            {label}
          </span>
        )}
      </div>

      {/* Spinning dashed ring — only on hover */}
      <div
        ref={spinRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block"
        style={{
          width: 52, height: 52,
          borderRadius: "50%",
          border: "1px dashed rgba(100,65,10,0.3)",
          opacity: visible && variant === "hover" ? 1 : 0,
          transition: "opacity 0.25s",
          animation: "spin-slow 6s linear infinite",
          willChange: "transform",
        }}
      />

      <style>{`
        @keyframes spin-slow { to { transform: translate(var(--tx,0px), var(--ty,0px)) rotate(360deg); } }
        @media (pointer: fine) { *, *::before, *::after { cursor: none !important; } }
      `}</style>
    </>
  )
}
