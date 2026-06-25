import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-subtle py-16 md:py-24">
      <div className="container-site">
        <h2 className="heading text-2xl md:text-3xl">Portfólio</h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
