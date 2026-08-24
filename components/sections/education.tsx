import { GraduationCap, BadgeCheck, Calendar } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { education } from "@/lib/data"

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-20 md:py-28">
      <SectionHeading 
        eyebrow="Educación" 
        title="Formación académica"
        description="Mi base profesional como Ingeniero de Sistemas e Informática."
      />

      <Reveal className="glass mt-14 flex flex-col gap-6 rounded-2xl p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 md:flex-row md:items-center md:gap-8">
        <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-primary/12 text-primary">
          <GraduationCap className="h-8 w-8" />
        </span>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold">{education.university}</h3>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/12 px-3 py-1 text-xs font-medium text-accent">
              <BadgeCheck className="h-3.5 w-3.5" />
              {education.level}
            </span>
          </div>
          <p className="text-base font-medium text-foreground/90">{education.degree}</p>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            {education.period}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{education.description}</p>
        </div>
      </Reveal>
    </section>
  )
}