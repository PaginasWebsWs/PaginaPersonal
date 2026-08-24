import { Briefcase, Sparkles } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { experiences } from "@/lib/data"

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Experiencia"
        title="Mi trayectoria profesional"
        description="Un recorrido por los roles y proyectos que han forjado mi experiencia como Ingeniero de Sistemas y desarrollador."
      />

      <div className="relative mt-14">
        <div
          aria-hidden
          className="absolute top-0 bottom-0 left-4 w-px bg-linear-to-b from-primary/60 via-border to-transparent md:left-1/2"
        />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <Reveal
              key={exp.company + exp.period}
              delay={i}
              className={`relative pl-12 md:w-1/2 md:pl-0 ${
                i % 2 === 0 ? "md:self-start md:pr-12 md:text-right" : "md:ml-auto md:self-end md:pl-12"
              }`}
            >
              <span
                className={`absolute top-1 left-2 grid h-6 w-6 place-items-center rounded-full border border-primary/50 bg-background text-primary md:left-auto ${
                  i % 2 === 0 ? "md:-right-3" : "md:-left-3"
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>

              <article className="glass rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/12 px-3 py-1 text-xs font-medium text-primary">
                  {exp.period}
                </span>
                <h3 className="mt-3 flex items-center gap-2 text-lg font-semibold">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-accent">{exp.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">{exp.description}</p>

                <ul className="mt-4 flex flex-col gap-2">
                  {exp.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-foreground/85">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-pretty">{a}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
