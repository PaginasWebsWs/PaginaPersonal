"use client"

import { motion } from "framer-motion"
import {
  Server,
  Layout,
  Database,
  Container,
  Cloud,
  Wrench,
  Smartphone,
  BarChart3,
  Network,
  type LucideIcon,
} from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { techStack } from "@/lib/data"

const categoryIcons: Record<string, LucideIcon> = {
  Backend: Server,
  Frontend: Layout,
  "Bases de datos": Database,
  "Desarrollo Móvil": Smartphone,
  "DevOps & Cloud": Container,
  Cloud: Cloud,
  "Análisis & Visualización": BarChart3,
  "Infraestructura & Soporte": Network,
  Herramientas: Wrench,
}

export function TechStack() {
  return (
    <section id="tech" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Tecnologías"
        title="Mi stack tecnológico"
        description="Herramientas y tecnologías que utilizo para construir productos de calidad, con su nivel de dominio y experiencia."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group, gi) => {
          const Icon = categoryIcons[group.category] ?? Wrench
          return (
            <Reveal
              key={group.category}
              delay={gi % 3}
              className="glass group flex flex-col gap-5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/12 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{group.category}</h3>
              </div>

              <ul className="flex flex-col gap-4">
                {group.items.map((tech) => (
                  <li key={tech.name} className="flex flex-col gap-1.5">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-sm font-medium text-foreground/90">{tech.name}</span>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {tech.levelLabel} · {tech.years}
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full bg-linear-to-r from-primary to-accent"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
