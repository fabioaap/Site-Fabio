import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <div
        className="relative aspect-[16/10] w-full overflow-hidden rounded-card border border-subtle"
        style={{ backgroundColor: project.placeholder }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <h3 className="heading mt-5 text-xl text-text">{project.title}</h3>
      <p className="mt-1 text-base leading-relaxed text-muted">
        {project.description}
      </p>
    </article>
  );
}
