"use client"

import { useEffect, useRef, useState } from "react"

type Variant = "default" | "hover" | "image"

export function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null)
  const ringRef  = useRef<HTMLDivElement>(null)
  const spinRef  = useRef<HTMLDivElement>(null)
  const glowRef  = useRef<HTMLDivElement>(null)
  const [variant, setVariant] = useState<Variant>("default")
  const [label,   setLabel]   = useState("")
  const [visible, setVisible] = useState(false)

  const ringX = useRef(-200)
  const ringY = useRef(-200)
  const curX  = useRef(-200)
  const curY  = useRef(-200)
  const spinAngle = useRef(0)

  useEffect(() => {
    if (typeof window === "undefined") return

    let raf: number
    let lastTime = performance.now()

    const tick = (now: number) => {
      const dt = Math.min(now - lastTime, 50)
      lastTime = now

      // Lerp ring toward cursor
      const alpha = 1 - Math.pow(0.018, dt / 1000)
      ringX.current += (curX.current - ringX.current) * alpha * 18
      ringY.current += (curY.current - ringY.current) * alpha * 18

      // Apply transforms
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${curX.current - 3}px,${curY.current - 3}px,0)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX.current - 18}px,${ringY.current - 18}px,0)`
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${ringX.current - 50}px,${ringY.current - 50}px,0)`
      }
      if (spinRef.current) {
        spinAngle.current = (spinAngle.current + dt * 0.04) % 360
        spinRef.current.style.transform = `translate3d(${ringX.current - 26}px,${ringY.current - 26}px,0) rotate(${spinAngle.current}deg)`
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onMove = (e: MouseEvent) => {
      curX.current = e.clientX
      curY.current = e.clientY

      const t = e.target as HTMLElement
      if (t.closest("img,[data-cursor='image']")) {
        setVariant("image")
        setLabel("View")
      } else if (t.closest("a,button")) {
        setVariant("hover")
        setLabel(t.closest<HTMLElement>("a,button")?.getAttribute("data-cursor-label") ?? "")
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

  const isHover = variant === "hover"
  const isImage = variant === "image"
  const ringSize = isImage ? 72 : isHover ? 52 : 36

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000] hidden md:block rounded-full"
        style={{
          width: 6, height: 6,
          background: "rgba(90,55,8,0.95)",
          opacity: visible && !isHover ? 1 : 0,
          transition: "opacity 0.18s",
          willChange: "transform",
        }}
      />

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:flex items-center justify-center rounded-full"
        style={{
          width:  ringSize,
          height: ringSize,
          border: isImage
            ? "2px solid rgba(90,55,8,0.85)"
            : isHover
            ? "1.5px solid rgba(90,55,8,0.80)"
            : "1.5px solid rgba(90,55,8,0.55)",
          background: isImage
            ? "rgba(90,55,8,0.10)"
            : isHover
            ? "rgba(90,55,8,0.06)"
            : "transparent",
          opacity: visible ? 1 : 0,
          transition: "width 0.22s ease, height 0.22s ease, border 0.22s ease, background 0.22s ease, opacity 0.18s",
          willChange: "transform",
        }}
      >
        {label && (
          <span style={{
            fontSize: 9, fontWeight: 700, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "rgba(90,55,8,0.9)",
            lineHeight: 1, userSelect: "none",
          }}>
            {label}
          </span>
        )}
      </div>

      {/* Gold glow behind ring (hover only) */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 z-[9997] hidden md:block rounded-full"
        style={{
          width: 100, height: 100,
          background: "radial-gradient(circle, rgba(180,130,40,0.18) 0%, transparent 70%)",
          filter: "blur(12px)",
          opacity: visible && isHover ? 1 : 0,
          transition: "opacity 0.25s",
          willChange: "transform",
        }}
      />

      {/* Dashed spinning ring (hover only) */}
      <div
        ref={spinRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block rounded-full"
        style={{
          width: 52, height: 52,
          border: "1px dashed rgba(90,55,8,0.28)",
          opacity: visible && isHover ? 1 : 0,
          transition: "opacity 0.22s",
          willChange: "transform",
        }}
      />

      <style>{`
        @media (pointer: fine) { *, *::before, *::after { cursor: none !important; } }
      `}</style>
    </>
  )
}
