import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <section id="portfolio" className="container-site py-16 md:py-24">
      <h2 className="heading text-[clamp(2rem,6vw,3rem)] leading-tight">
        Portfólio
      </h2>

      <div className="mt-10 flex flex-col gap-14">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
