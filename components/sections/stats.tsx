"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { stats, type Stat } from "@/lib/data"

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // EaseOutCubic para un efecto más suave
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active, duration])
  return value
}

function StatCard({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.value, active)
  return (
    <div className="glass flex flex-col items-center gap-2 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <span className="text-4xl font-extrabold tracking-tight text-gradient sm:text-5xl">
        {value.toLocaleString("es")}
        {stat.suffix}
      </span>
      <span className="text-sm text-muted-foreground text-pretty">{stat.label}</span>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"
      >
        {stats.map((stat, index) => (
          <StatCard key={stat.label + index} stat={stat} active={inView} />
        ))}
      </motion.div>
    </section>
  )
}
