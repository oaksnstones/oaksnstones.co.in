"use client"

import { useEffect, useRef, useState } from "react"

type Variant = "default" | "hover" | "image"

export function CustomCursor() {
  const dotRef    = useRef<HTMLDivElement>(null)
  const ringRef   = useRef<HTMLDivElement>(null)
  const spinRef   = useRef<HTMLDivElement>(null)
  const bubbleRef = useRef<HTMLDivElement>(null)

  const [variant, setVariant] = useState<Variant>("default")
  const [label, setLabel]     = useState("")
  const [visible, setVisible] = useState(false)

  const curX = useRef(-300), curY = useRef(-300)
  const ringX = useRef(-300), ringY = useRef(-300)
  const spinAngle = useRef(0)

  // Bubble state managed via refs to avoid re-renders
  const bubbleOpacity = useRef(0)
  const idleTimer     = useRef<ReturnType<typeof setTimeout> | null>(null)
  const bubbleTarget  = useRef(0) // 0 = shrink, 1 = grow

  useEffect(() => {
    if (typeof window === "undefined") return
    let raf: number
    let last = performance.now()

    const tick = (now: number) => {
      const dt = Math.min(now - last, 50)
      last = now

      // Smooth ring follow
      const t = 1 - Math.pow(0.01, dt / 1000)
      ringX.current += (curX.current - ringX.current) * t * 12
      ringY.current += (curY.current - ringY.current) * t * 12

      // Bubble fade
      const bDelta = bubbleTarget.current === 1 ? 0.025 : -0.04
      bubbleOpacity.current = Math.max(0, Math.min(0.55, bubbleOpacity.current + bDelta))

      // Apply transforms
      const dot = dotRef.current
      const ring = ringRef.current
      const spin = spinRef.current
      const bub  = bubbleRef.current

      if (dot)  dot.style.transform  = `translate3d(${curX.current - 4}px,${curY.current - 4}px,0)`
      if (ring) ring.style.transform = `translate3d(${ringX.current - 20}px,${ringY.current - 20}px,0)`
      if (spin) {
        spinAngle.current = (spinAngle.current + dt * 0.05) % 360
        spin.style.transform = `translate3d(${ringX.current - 28}px,${ringY.current - 28}px,0) rotate(${spinAngle.current}deg)`
      }
      if (bub) {
        const size = 80 + bubbleOpacity.current * 60
        bub.style.transform = `translate3d(${curX.current - size/2}px,${curY.current - size/2}px,0)`
        bub.style.width = `${size}px`
        bub.style.height = `${size}px`
        bub.style.opacity = `${bubbleOpacity.current}`
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const resetIdle = () => {
      bubbleTarget.current = 0
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => { bubbleTarget.current = 1 }, 900)
    }

    const onMove = (e: MouseEvent) => {
      curX.current = e.clientX
      curY.current = e.clientY
      resetIdle()

      const t = e.target as HTMLElement
      if (t.closest("img,[data-cursor='image']")) {
        setVariant("image"); setLabel("View")
      } else if (t.closest("a,button,input,textarea,select,[role='button']")) {
        setVariant("hover")
        const el = t.closest<HTMLElement>("a,button,[role='button']")
        setLabel(el?.getAttribute("data-cursor-label") ?? "")
      } else {
        setVariant("default"); setLabel("")
      }
    }

    const onEnter = () => setVisible(true)
    const onLeave = () => {
      setVisible(false)
      bubbleTarget.current = 0
      if (idleTimer.current) clearTimeout(idleTimer.current)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseenter", onEnter)
    document.addEventListener("mouseleave", onLeave)

    return () => {
      cancelAnimationFrame(raf)
      if (idleTimer.current) clearTimeout(idleTimer.current)
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseenter", onEnter)
      document.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  const isHover = variant === "hover"
  const isImage = variant === "image"
  const ringSize = isImage ? 76 : isHover ? 56 : 40

  // Gold color — prominent on dark backgrounds
  const GOLD      = "rgba(212,170,70,0.95)"
  const GOLD_RING = isImage ? "rgba(212,170,70,0.85)" : isHover ? "rgba(212,170,70,0.80)" : "rgba(212,170,70,0.65)"

  return (
    <>
      {/* Idle glow bubble — fades in when stopped */}
      <div
        ref={bubbleRef}
        className="pointer-events-none fixed top-0 left-0 z-[9996] hidden md:block rounded-full"
        style={{
          width: 80, height: 80,
          background: "radial-gradient(circle, rgba(212,170,70,0.22) 0%, rgba(212,170,70,0.06) 50%, transparent 70%)",
          opacity: 0,
          willChange: "transform, opacity, width, height",
          transition: "none",
          filter: "blur(2px)",
        }}
      />

      {/* Dot — larger and more visible (8px) */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000] hidden md:block rounded-full"
        style={{
          width: 8, height: 8,
          background: GOLD,
          boxShadow: `0 0 6px rgba(212,170,70,0.6)`,
          opacity: visible && !isHover ? 1 : 0,
          transition: "opacity 0.15s",
          willChange: "transform",
        }}
      />

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:flex items-center justify-center rounded-full"
        style={{
          width: ringSize,
          height: ringSize,
          border: `${isImage ? 2 : 1.5}px solid ${GOLD_RING}`,
          background: isImage
            ? "rgba(212,170,70,0.08)"
            : isHover
            ? "rgba(212,170,70,0.05)"
            : "transparent",
          boxShadow: isHover || isImage
            ? `0 0 16px rgba(212,170,70,0.15), inset 0 0 8px rgba(212,170,70,0.05)`
            : "none",
          opacity: visible ? 1 : 0,
          transition: "width 0.2s ease, height 0.2s ease, border 0.2s ease, box-shadow 0.2s ease, opacity 0.15s",
          willChange: "transform",
        }}
      >
        {label && (
          <span style={{
            fontSize: 9, fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: GOLD,
            lineHeight: 1,
            userSelect: "none",
          }}>
            {label}
          </span>
        )}
      </div>

      {/* Spinning dashed outer ring on hover */}
      <div
        ref={spinRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block rounded-full"
        style={{
          width: 56,
          height: 56,
          border: "1px dashed rgba(212,170,70,0.35)",
          opacity: visible && isHover ? 1 : 0,
          transition: "opacity 0.2s",
          willChange: "transform",
        }}
      />

      <style>{`
        @media (pointer: fine) {
          *, *::before, *::after { cursor: none !important; }
        }
      `}</style>
    </>
  )
}
