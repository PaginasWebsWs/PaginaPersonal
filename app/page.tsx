import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { TechStack } from "@/components/sections/tech-stack"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Certifications } from "@/components/sections/certifications"
import { Education } from "@/components/sections/education"
import { Stats } from "@/components/sections/stats"
import { Contact } from "@/components/sections/contact"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
