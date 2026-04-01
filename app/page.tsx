import { About } from "@/components/main/about";
import { Certifications } from "@/components/main/certifications";
import { ContactCTA } from "@/components/main/contact-cta";
import { Education } from "@/components/main/education";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Training } from "@/components/main/training";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Training />
        <ContactCTA />
      </div>
    </main>
  );
}
