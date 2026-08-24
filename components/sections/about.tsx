// components/sections/about.tsx
import { Code, Database, Cloud, Smartphone, Shield, Network } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Sobre Mí"
        title="Ingeniero de Sistemas con visión integral"
        description="Especialista en desarrollo de software, infraestructura tecnológica y soporte técnico, combinando tecnología y negocio para crear soluciones de alto impacto."
      />

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr]">
        {/* Columna izquierda - Descripción personal */}
        <Reveal className="glass flex flex-col gap-5 rounded-2xl p-8 border border-blue-100/50 dark:border-blue-800/30">
          <p className="text-base leading-relaxed text-muted-foreground text-pretty">
            Soy <span className="font-semibold text-foreground">Williams Anthony Sanabria Tinoco</span>, 
            Ingeniero de Sistemas e Informática con experiencia integral en 
            <span className="font-semibold text-blue-600 dark:text-blue-400"> desarrollo de software full-stack</span>, 
            gestión de infraestructura tecnológica y soporte técnico especializado.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground text-pretty">
            He trabajado en el <span className="font-semibold text-blue-600 dark:text-blue-400">sector microfinanciero</span>, 
            retail y proyectos independientes, combinando habilidades técnicas con una fuerte orientación al cliente. 
            Desarrollo aplicaciones web con Next.js y NestJS, aplicaciones móviles con Flutter, y administro 
            sistemas y redes para garantizar la continuidad operativa.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              🚀 Full Stack
            </span>
            <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
              📱 Flutter
            </span>
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              🐳 Docker
            </span>
            <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
              ☁️ Cloud
            </span>
            <span className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
              📊 Power BI
            </span>
          </div>
        </Reveal>

        {/* Columna derecha - Especialidades */}
        <Reveal delay={1} className="glass rounded-2xl p-8 border border-blue-100/50 dark:border-blue-800/30">
          <h3 className="mb-5 text-sm font-semibold tracking-wide text-muted-foreground uppercase flex items-center gap-2">
            <span className="h-px flex-1 bg-linear-to-r from-transparent to-blue-200 dark:to-blue-800"></span>
            <span>Especialidades</span>
            <span className="h-px flex-1 bg-linear-to-l from-transparent to-blue-200 dark:to-blue-800"></span>
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-sm text-foreground/90 hover:text-foreground transition-colors">
              <Code className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <span className="font-medium">Desarrollo Full Stack</span>
                <p className="text-xs text-muted-foreground">Next.js, NestJS, Node.js, TypeScript</p>
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm text-foreground/90 hover:text-foreground transition-colors">
              <Smartphone className="h-5 w-5 shrink-0 text-indigo-600 dark:text-indigo-400 mt-0.5" />
              <div>
                <span className="font-medium">Aplicaciones Móviles</span>
                <p className="text-xs text-muted-foreground">Flutter (Dart) multiplataforma</p>
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm text-foreground/90 hover:text-foreground transition-colors">
              <Database className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
              <div>
                <span className="font-medium">Bases de Datos</span>
                <p className="text-xs text-muted-foreground">PostgreSQL, MySQL, SQL Server, SQLite</p>
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm text-foreground/90 hover:text-foreground transition-colors">
              <Cloud className="h-5 w-5 shrink-0 text-purple-600 dark:text-purple-400 mt-0.5" />
              <div>
                <span className="font-medium">DevOps & Cloud</span>
                <p className="text-xs text-muted-foreground">Docker, DigitalOcean, Linux, CI/CD</p>
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm text-foreground/90 hover:text-foreground transition-colors">
              <Network className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div>
                <span className="font-medium">Infraestructura & Redes</span>
                <p className="text-xs text-muted-foreground">Fibra óptica, redes, soporte TI</p>
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm text-foreground/90 hover:text-foreground transition-colors">
              <Shield className="h-5 w-5 shrink-0 text-rose-600 dark:text-rose-400 mt-0.5" />
              <div>
                <span className="font-medium">Análisis de Datos</span>
                <p className="text-xs text-muted-foreground">Power BI, Excel avanzado, Dashboards</p>
              </div>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
