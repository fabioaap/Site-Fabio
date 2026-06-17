import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="container-site py-16 md:py-24">
      <h2 className="heading text-[clamp(2rem,6vw,3rem)] leading-tight">
        Sobre mim
      </h2>

      <div className="mt-8 overflow-hidden rounded-card border border-subtle bg-surface">
        <div className="relative aspect-[3/2] w-full">
          <Image
            src="/about.svg"
            alt="Retrato de Fábio Alves"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      </div>

      <a
        href="/cv.pdf"
        download
        className="mt-8 inline-flex items-center justify-center rounded-pill border border-subtle bg-surface-2 px-8 py-4 text-base font-medium text-text transition hover:bg-[#34343a]"
      >
        Download CV
      </a>

      <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-muted md:text-xl">
        <p>
          Produtos digitais não falham por falta de esforço — falham por falta
          de entendimento. Muitas vezes, times constroem soluções baseadas em
          suposições, e não em dados reais.
        </p>
        <p>
          Meu trabalho começa pelo entendimento profundo do problema: ouço
          usuários, analiso dados e alinho design a metas de negócio para
          transformar complexidade em experiências simples, claras e que geram
          resultado.
        </p>
      </div>
    </section>
  );
}
