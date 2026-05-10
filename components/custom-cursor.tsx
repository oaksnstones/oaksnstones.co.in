"use client"

import { useEffect, useRef, useState } from "react"

type Variant = "default" | "hover" | "image"

export function CustomCursor() {
  const dotRef    = useRef<HTMLDivElement>(null)
  const ringRef   = useRef<HTMLDivElement>(null)
  const trailRef  = useRef<HTMLDivElement>(null)
  const bubbleRef = useRef<HTMLDivElement>(null)

  const [visible, setVisible] = useState(false)
  const [ringSize, setRingSize] = useState(44)
  const [label, setLabel] = useState("")
  const [isHover, setIsHover] = useState(false)
  const [isImage, setIsImage] = useState(false)

  const curX   = useRef(-400), curY   = useRef(-400)
  const ringX  = useRef(-400), ringY  = useRef(-400)
  const trailX = useRef(-400), trailY = useRef(-400)
  const bubbleAlpha  = useRef(0)
  const bubbleTarget = useRef(0)
  const idleTimer    = useRef<ReturnType<typeof setTimeout> | null>(null)
  const spinAngle    = useRef(0)
  const variantRef   = useRef<Variant>("default")

  useEffect(() => {
    if (typeof window === "undefined") return
    let raf: number
    let last = performance.now()

    const tick = (now: number) => {
      const dt = Math.min(now - last, 50)
      last = now

      // Ring drag — noticeable lag (lerp ~0.08 per frame at 60fps)
      const ringAlpha  = 1 - Math.pow(0.00004, dt / 1000)
      // Trail drag — heavy slow drag
      const trailAlpha = 1 - Math.pow(0.0000001, dt / 1000)

      ringX.current  += (curX.current - ringX.current)  * ringAlpha  * 7
      ringY.current  += (curY.current - ringY.current)  * ringAlpha  * 7
      trailX.current += (curX.current - trailX.current) * trailAlpha * 3
      trailY.current += (curY.current - trailY.current) * trailAlpha * 3

      // Bubble
      const bDir = bubbleTarget.current > 0 ? 0.025 : -0.04
      bubbleAlpha.current = Math.max(0, Math.min(1, bubbleAlpha.current + bDir))

      // Spin
      spinAngle.current = (spinAngle.current + dt * 0.06) % 360

      const v = variantRef.current
      const dot    = dotRef.current
      const ring   = ringRef.current
      const trail  = trailRef.current
      const bubble = bubbleRef.current

      if (dot)  dot.style.transform  = `translate3d(${curX.current - 5}px,${curY.current - 5}px,0)`

      if (ring) {
        const half = ring.offsetWidth / 2
        ring.style.transform = `translate3d(${ringX.current - half}px,${ringY.current - half}px,0)`
      }

      if (trail) {
        trail.style.transform = `translate3d(${trailX.current - 34}px,${trailY.current - 34}px,0) rotate(${spinAngle.current}deg)`
        trail.style.opacity   = v === "hover" ? "0.5" : "0"
      }

      if (bubble) {
        bubble.style.transform = `translate3d(${curX.current - 48}px,${curY.current - 48}px,0)`
        bubble.style.opacity   = `${bubbleAlpha.current * 0.52}`
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const scheduleIdle = () => {
      bubbleTarget.current = 0
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => { bubbleTarget.current = 1 }, 900)
    }

    const onMove = (e: MouseEvent) => {
      curX.current = e.clientX
      curY.current = e.clientY
      scheduleIdle()

      const t = e.target as HTMLElement
      if (t.closest("img,[data-cursor='image']")) {
        variantRef.current = "image"
        setIsImage(true); setIsHover(false)
        setLabel("View"); setRingSize(76)
      } else if (t.closest("a,button,input,textarea,[role='button']")) {
        variantRef.current = "hover"
        setIsHover(true); setIsImage(false)
        const el = t.closest<HTMLElement>("a,button,[role='button']")
        setLabel(el?.getAttribute("data-cursor-label") ?? "")
        setRingSize(56)
      } else {
        variantRef.current = "default"
        setIsHover(false); setIsImage(false)
        setLabel(""); setRingSize(44)
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

  const GOLD      = "rgba(210,168,60,0.95)"
  const GOLD_RING = `rgba(210,168,60,${isImage ? 0.85 : isHover ? 0.78 : 0.62})`

  return (
    <>
      {/* Single faded bubble — appears after cursor is idle for 0.9s */}
      <div
        ref={bubbleRef}
        className="pointer-events-none fixed top-0 left-0 z-[9995] hidden md:block rounded-full"
        style={{
          width: 96,
          height: 96,
          background: "radial-gradient(circle, rgba(210,168,60,0.30) 0%, rgba(210,168,60,0.08) 50%, transparent 72%)",
          opacity: 0,
          filter: "blur(5px)",
          willChange: "transform, opacity",
        }}
      />

      {/* Slow dashed trailing ring — heavy drag on hover */}
      <div
        ref={trailRef}
        className="pointer-events-none fixed top-0 left-0 z-[9997] hidden md:block rounded-full"
        style={{
          width: 68,
          height: 68,
          border: "1px dashed rgba(210,168,60,0.28)",
          opacity: 0,
          willChange: "transform, opacity",
        }}
      />

      {/* Main ring — medium drag */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:flex items-center justify-center rounded-full"
        style={{
          width:  ringSize,
          height: ringSize,
          border: `${isImage ? 2 : 1.5}px solid ${GOLD_RING}`,
          background: isHover || isImage ? "rgba(210,168,60,0.05)" : "transparent",
          boxShadow: isHover || isImage
            ? "0 0 20px rgba(210,168,60,0.15), inset 0 0 8px rgba(210,168,60,0.04)"
            : "none",
          opacity: visible ? 1 : 0,
          transition: "width 0.22s ease, height 0.22s ease, border 0.22s ease, box-shadow 0.25s ease, opacity 0.15s",
          willChange: "transform",
        }}
      >
        {label && (
          <span style={{
            fontSize: 9, fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: GOLD, lineHeight: 1,
            userSelect: "none",
          }}>
            {label}
          </span>
        )}
      </div>

      {/* Dot — snaps instantly (no lag), gold glow */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000] hidden md:block rounded-full"
        style={{
          width: 10,
          height: 10,
          background: GOLD,
          boxShadow: "0 0 10px rgba(210,168,60,0.6)",
          opacity: visible && !isHover ? 1 : 0,
          transition: "opacity 0.15s",
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
