"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Info, X, Play } from "lucide-react"
import { GithubIcon } from "@/components/ui/brand-icons"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { projects, type Project } from "@/lib/data"

const statusStyles: Record<Project["status"], string> = {
  Producción: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "En desarrollo": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  Completado: "bg-primary/15 text-primary border-primary/30",
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const [videoModal, setVideoModal] = useState<Project | null>(null)

  // Función para obtener la URL de embed de Drive
  const getDriveEmbedUrl = (driveUrl: string) => {
    const match = driveUrl.match(/\/d\/(.+?)\//) || driveUrl.match(/id=(.+?)(&|$)/)
    if (match) {
      return `https://drive.google.com/file/d/${match[1]}/preview`
    }
    return driveUrl
  }

  // Función para manejar el clic en Demo
  const handleDemoClick = (project: Project) => {
    // Si el proyecto tiene video, abrir modal de video
    if (project.video) {
      setVideoModal(project)
    } else if (project.demo && project.demo !== "#") {
      // Si no tiene video pero tiene demo URL, abrir en nueva pestaña
      window.open(project.demo, "_blank")
    }
  }

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Proyectos"
        title="Proyectos destacados"
        description="Una selección de soluciones empresariales que he diseñado y construido, desde aplicaciones web y móviles hasta sistemas de gestión."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal
            key={project.title + project.status}
            delay={i % 3}
            className="group glass flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="relative h-56 overflow-hidden bg-secondary/40">
              {project.image && project.image !== "#" ? (
                <Image
                  src={project.image}
                  alt={`Vista previa del proyecto ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-secondary/30">
                  <span className="text-4xl font-bold text-primary/20">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-linear-to-t from-card via-card/20 to-transparent" />
              
              {/* Badge de video */}
              {project.video && (
                <button
                  onClick={() => setVideoModal(project)}
                  className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-xs text-white backdrop-blur-sm transition hover:bg-black/80"
                >
                  <Play className="h-3 w-3" />
                  Ver video
                </button>
              )}
              
              <span
                className={`absolute top-3 right-3 rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[project.status]}`}
              >
                {project.status}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 5 && (
                  <span className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-xs text-muted-foreground">
                    +{project.tech.length - 5}
                  </span>
                )}
              </div>

              <div className="mt-auto flex items-center gap-2 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Código de ${project.title} en GitHub`}
                  className={`grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors ${
                    project.github && project.github !== "#" 
                      ? "hover:border-primary/50 hover:text-foreground" 
                      : "opacity-50 cursor-not-allowed pointer-events-none"
                  }`}
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                
                {/* Botón Demo - Ahora abre el modal de video */}
                <button
                  onClick={() => handleDemoClick(project)}
                  className={`inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border py-2 text-sm font-medium transition-colors ${
                    project.video || (project.demo && project.demo !== "#")
                      ? "hover:border-primary/50 hover:text-primary"
                      : "opacity-50 cursor-not-allowed pointer-events-none"
                  }`}
                >
                  <Play className="h-4 w-4" />
                  Demo
                </button>
                
                <button
                  type="button"
                  onClick={() => setActive(project)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Info className="h-4 w-4" />
                  Detalles
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Modal de video */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`Video de ${videoModal.title}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <button
                onClick={() => setVideoModal(null)}
                className="absolute -top-12 right-0 text-white/60 transition hover:text-white"
              >
                <X className="h-8 w-8" />
              </button>
              
              <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
                <iframe
                  src={videoModal.video ? getDriveEmbedUrl(videoModal.video) : videoModal.demo}
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  title={`Video de ${videoModal.title}`}
                />
              </div>
              
              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-semibold">{videoModal.title}</h3>
                <p className="text-sm text-white/60">Video demostrativo</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de detalles */}
      <AnimatePresence>
        {active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`Detalles de ${active.title}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative w-full max-w-lg overflow-hidden rounded-2xl"
            >
              <div className="relative h-64 bg-secondary/40">
                {active.image && active.image !== "#" ? (
                  <Image 
                    src={active.image} 
                    alt={active.title} 
                    fill 
                    className="object-cover" 
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-secondary/30">
                    <span className="text-6xl font-bold text-primary/20">
                      {active.title.charAt(0)}
                    </span>
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Cerrar"
                  className="absolute top-3 right-3 grid h-8 w-8 place-items-center rounded-lg bg-background/70 text-foreground backdrop-blur transition-colors hover:bg-background/90"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold">{active.title}</h3>
                  <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[active.status]}`}>
                    {active.status}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{active.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {active.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                {/* Botón para ver video desde el modal de detalles */}
                {active.video && (
                  <button
                    onClick={() => {
                      setActive(null)
                      setTimeout(() => setVideoModal(active), 300)
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary/10 py-2 text-sm font-medium text-primary transition hover:bg-primary/20"
                  >
                    <Play className="h-4 w-4" />
                    Ver video demostrativo
                  </button>
                )}
                
                <div className="flex gap-2 pt-1">
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border py-2 text-sm font-medium transition-colors ${
                      active.github && active.github !== "#" 
                        ? "hover:border-primary/50" 
                        : "opacity-50 cursor-not-allowed pointer-events-none"
                    }`}
                  >
                    <GithubIcon className="h-4 w-4" />
                    GitHub
                  </a>
                  <button
                    onClick={() => handleDemoClick(active)}
                    className={`inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-2 text-sm font-medium text-primary-foreground transition-colors ${
                      active.video || (active.demo && active.demo !== "#")
                        ? "hover:bg-primary/90"
                        : "opacity-50 cursor-not-allowed pointer-events-none"
                    }`}
                  >
                    <Play className="h-4 w-4" />
                    Ver demo
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
