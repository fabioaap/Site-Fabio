import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block">
      <div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-card border border-subtle"
        style={{ backgroundColor: project.placeholder }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <h3 className="heading mt-4 text-lg text-text">{project.title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
    </Link>
  );
}
