import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Fábio Alves`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const cs = project.caseStudy;

  return (
    <>
      {/* Mini header */}
      <header className="sticky top-0 z-50 border-b border-subtle bg-bg/90 backdrop-blur">
        <div className="container-site flex h-16 items-center justify-between gap-4">
          <nav className="flex items-center gap-1">
            <Link
              href="/#sobre"
              className="rounded-pill bg-surface-2 px-4 py-1.5 text-sm font-medium text-text transition hover:bg-[#34343a]"
            >
              Sobre mim
            </Link>
            <Link
              href="/#portfolio"
              className="rounded-pill bg-surface-2 px-4 py-1.5 text-sm font-medium text-text transition hover:bg-[#34343a]"
            >
              Portfólio
            </Link>
          </nav>

          <a
            href="mailto:fabiovisualmidia@gmail.com"
            className="inline-flex items-center rounded-pill bg-accent-orange px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Contato
          </a>
        </div>
      </header>

      <main className="container-site py-16 md:py-24">
        {/* Hero */}
        <div className="text-center">
          <h1 className="heading text-[clamp(2rem,5vw,3.5rem)] leading-tight">
            {project.title}
          </h1>
          <p className="mt-3 text-sm text-muted">{project.subtitle}</p>
        </div>

        {/* Cover image */}
        <div
          className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-card border border-subtle"
          style={{ backgroundColor: project.placeholder }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Case study content */}
        {cs ? (
          <div className="mx-auto mt-16 max-w-2xl space-y-12 text-base leading-relaxed">

            {/* Meta row: role + tools */}
            <div className="flex flex-wrap gap-3">
              <div className="min-w-[140px] flex-1 rounded-card bg-surface px-5 py-4">
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted">
                  Papel
                </p>
                <p className="text-text">{project.subtitle.split('(')[0].trim()}</p>
              </div>
              <div className="min-w-[140px] flex-1 rounded-card bg-surface px-5 py-4">
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted">
                  Ferramentas
                </p>
                <p className="text-text">{cs.tools.join(', ')}</p>
              </div>
            </div>

            {/* Context */}
            <section>
              <h2 className="heading mb-3 text-2xl text-text">Contexto</h2>
              <p className="text-muted">{cs.context}</p>
            </section>

            {/* Challenge */}
            <section className="rounded-card border border-subtle bg-surface p-6">
              <h2 className="heading mb-3 text-xl text-text">Desafio</h2>
              <p className="text-muted">{cs.challenge}</p>
            </section>

            {/* Process */}
            <section>
              <h2 className="heading mb-8 text-2xl text-text">Processo</h2>
              <div className="space-y-8">
                {cs.process.map((s, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-orange text-xs font-bold text-white">
                      {i + 1}
                    </div>
                    <div className="pt-0.5">
                      <h3 className="heading text-base text-text">{s.name}</h3>
                      <p className="mt-2 text-muted">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Solution */}
            <section>
              <h2 className="heading mb-3 text-2xl text-text">Solução</h2>
              <p className="text-muted">{cs.solution}</p>
            </section>

            {/* Results */}
            <section className="rounded-card border border-subtle bg-surface p-6">
              <h2 className="heading mb-3 text-xl text-text">Resultados</h2>
              <p className="text-muted">{cs.results}</p>
            </section>

            {/* Learnings */}
            <section>
              <h2 className="heading mb-3 text-2xl text-text">Aprendizados</h2>
              <p className="text-muted">{cs.learnings}</p>
            </section>
          </div>
        ) : (
          /* Fallback for cases without full content yet */
          <div className="mx-auto mt-16 max-w-2xl space-y-8 text-base leading-relaxed text-muted">
            <section>
              <h2 className="heading mb-3 text-2xl text-text">Contexto</h2>
              <p>{project.description}</p>
            </section>
          </div>
        )}

        {/* Back link */}
        <div className="mt-16 text-center">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-text"
          >
            ← Voltar ao portfólio
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
