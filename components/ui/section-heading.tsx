import { Reveal } from "@/components/ui/reveal"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <Reveal
      className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">{title}</h2>
      {description ? (
        <p className={`max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
