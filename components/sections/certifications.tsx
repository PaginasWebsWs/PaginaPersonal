import { Award, ExternalLink, Calendar } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { certifications } from "@/lib/data"

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Certificaciones"
        title="Formación continua"
        description="Certificaciones y reconocimientos que respaldan mi aprendizaje constante y actualización tecnológica."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal
            key={cert.title + cert.institution}
            delay={i % 3}
            className="glass group flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                <Award className="h-5 w-5" />
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {cert.date}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-balance">{cert.title}</h3>
              <p className="text-sm font-medium text-accent">{cert.institution}</p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{cert.description}</p>
            {cert.url && cert.url !== "#" ? (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Ver certificado
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : (
              <div className="mt-auto pt-1 text-xs text-muted-foreground/60">
                Certificado en físico
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
