import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-10 max-w-5xl mx-auto w-full"
    >
      <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase mb-2 block text-center">
        04. Projects
      </span>
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-12">
        Featured Projects
      </h1>
      <div className="flex flex-col gap-8 w-full">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            date={project.date}
            image={project.image}
            bullets={[...project.bullets]}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
