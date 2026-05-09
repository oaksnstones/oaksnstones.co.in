"use client"

import { useEffect, useRef, useState } from "react"

type Variant = "default" | "hover" | "image"

export function CustomCursor() {
  const dotRef    = useRef<HTMLDivElement>(null)
  const ringRef   = useRef<HTMLDivElement>(null)
  const spinRef   = useRef<HTMLDivElement>(null)
  const bubbleRef = useRef<HTMLDivElement>(null)

  const [variant, setVariant] = useState<Variant>("default")
  const [label,   setLabel]   = useState("")
  const [visible, setVisible] = useState(false)

  const ringX = useRef(-200), ringY = useRef(-200)
  const curX  = useRef(-200), curY  = useRef(-200)
  const spinAngle  = useRef(0)
  const idleTimer  = useRef<ReturnType<typeof setTimeout> | null>(null)
  const bubbleSize = useRef(0)
  const bubbleGrow = useRef(false)
  const bubbleAnim = useRef<number>(0)

  useEffect(() => {
    if (typeof window === "undefined") return
    let raf: number
    let lastTime = performance.now()

    const startBubble = () => {
      bubbleGrow.current = true
      const grow = () => {
        bubbleSize.current = Math.min(bubbleSize.current + 1.2, 52)
        if (bubbleRef.current) {
          bubbleRef.current.style.width  = `${bubbleSize.current}px`
          bubbleRef.current.style.height = `${bubbleSize.current}px`
          bubbleRef.current.style.opacity = `${bubbleSize.current / 52 * 0.35}`
        }
        if (bubbleSize.current < 52) bubbleAnim.current = requestAnimationFrame(grow)
      }
      bubbleAnim.current = requestAnimationFrame(grow)
    }

    const shrinkBubble = () => {
      bubbleGrow.current = false
      cancelAnimationFrame(bubbleAnim.current)
      const shrink = () => {
        bubbleSize.current = Math.max(bubbleSize.current - 3, 0)
        if (bubbleRef.current) {
          bubbleRef.current.style.width  = `${bubbleSize.current}px`
          bubbleRef.current.style.height = `${bubbleSize.current}px`
          bubbleRef.current.style.opacity = `${bubbleSize.current / 52 * 0.35}`
        }
        if (bubbleSize.current > 0) bubbleAnim.current = requestAnimationFrame(shrink)
      }
      bubbleAnim.current = requestAnimationFrame(shrink)
    }

    const tick = (now: number) => {
      const dt = Math.min(now - lastTime, 50)
      lastTime = now
      const alpha = 1 - Math.pow(0.015, dt / 1000)

      ringX.current += (curX.current - ringX.current) * alpha * 20
      ringY.current += (curY.current - ringY.current) * alpha * 20

      if (dotRef.current)
        dotRef.current.style.transform = `translate3d(${curX.current - 3}px,${curY.current - 3}px,0)`
      if (ringRef.current)
        ringRef.current.style.transform = `translate3d(${ringX.current - 18}px,${ringY.current - 18}px,0)`
      if (spinRef.current) {
        spinAngle.current = (spinAngle.current + dt * 0.045) % 360
        spinRef.current.style.transform = `translate3d(${ringX.current - 26}px,${ringY.current - 26}px,0) rotate(${spinAngle.current}deg)`
      }
      if (bubbleRef.current)
        bubbleRef.current.style.transform = `translate3d(${curX.current - bubbleSize.current / 2}px,${curY.current - bubbleSize.current / 2}px,0)`

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onMove = (e: MouseEvent) => {
      curX.current = e.clientX
      curY.current = e.clientY

      // Reset idle bubble on move
      shrinkBubble()
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => startBubble(), 1200)

      const t = e.target as HTMLElement
      if (t.closest("img,[data-cursor='image']")) {
        setVariant("image"); setLabel("View")
      } else if (t.closest("a,button")) {
        setVariant("hover")
        setLabel(t.closest<HTMLElement>("a,button")?.getAttribute("data-cursor-label") ?? "")
      } else {
        setVariant("default"); setLabel("")
      }
    }

    const onEnter = () => setVisible(true)
    const onLeave = () => { setVisible(false); shrinkBubble(); if (idleTimer.current) clearTimeout(idleTimer.current) }

    window.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseenter", onEnter)
    document.addEventListener("mouseleave", onLeave)

    return () => {
      cancelAnimationFrame(raf)
      cancelAnimationFrame(bubbleAnim.current)
      if (idleTimer.current) clearTimeout(idleTimer.current)
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseenter", onEnter)
      document.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  const isHover = variant === "hover"
  const isImage = variant === "image"
  const ringSize = isImage ? 72 : isHover ? 52 : 36
  const DARK = "rgba(60,38,4,0.92)"
  const RING_COLOR = isImage ? "rgba(60,38,4,0.80)" : isHover ? "rgba(60,38,4,0.75)" : "rgba(60,38,4,0.55)"

  return (
    <>
      {/* Idle bubble - expands when mouse is still */}
      <div
        ref={bubbleRef}
        className="pointer-events-none fixed top-0 left-0 z-[9996] hidden md:block rounded-full"
        style={{
          width: 0, height: 0, opacity: 0,
          background: "radial-gradient(circle, rgba(180,130,40,0.25) 0%, transparent 70%)",
          filter: "blur(6px)",
          willChange: "transform",
          transition: "none",
        }}
      />

      {/* Inner dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000] hidden md:block rounded-full"
        style={{
          width: 6, height: 6,
          background: DARK,
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
          width: ringSize, height: ringSize,
          border: `${isImage ? 2 : 1.5}px solid ${RING_COLOR}`,
          background: isImage ? "rgba(60,38,4,0.08)" : isHover ? "rgba(60,38,4,0.05)" : "transparent",
          opacity: visible ? 1 : 0,
          transition: "width 0.22s ease, height 0.22s ease, border 0.22s ease, opacity 0.15s",
          willChange: "transform",
        }}
      >
        {label && (
          <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: DARK, lineHeight: 1, userSelect: "none" }}>
            {label}
          </span>
        )}
      </div>

      {/* Spinning dashed ring (hover only) */}
      <div
        ref={spinRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block rounded-full"
        style={{
          width: 52, height: 52,
          border: "1px dashed rgba(60,38,4,0.28)",
          opacity: visible && isHover ? 1 : 0,
          transition: "opacity 0.2s",
          willChange: "transform",
        }}
      />

      <style>{`
        @media (pointer: fine) { *, *::before, *::after { cursor: none !important; } }
      `}</style>
    </>
  )
}
