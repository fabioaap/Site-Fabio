import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="border-t border-subtle py-16 md:py-24">
      <div className="container-site">
        <h2 className="heading text-[clamp(2rem,6vw,3rem)] leading-tight">
          Sobre mim
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
          {/* Texto */}
          <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
            <p>
              Produtos digitais não falham por falta de esforço — falham por
              falta do entendimento. Muitas vezes, times constroem soluções
              baseadas em suposições, e não em dados reais.
            </p>
            <p>
              A consequência? Experiências confusas, pouco engajamento e baixa
              retenção. Eu sou designer de produto especializado em transformar
              complexidade em clareza. Acredito que design é mais do que
              estética: é entender profundamente o usuário e entregar soluções
              que funcionam — de verdade.
            </p>
            <p>
              Já ajudei plataformas com milhares de usuários a reorganizarem
              suas jornadas, validarem hipóteses e criarem experiências mais
              fluidas. Faço isso com processos baseados em dados, entrevistas,
              benchmark, testes de usabilidade e discovery contínuo.
            </p>
            <p>
              Se você está construindo algo que merece mais engajamento, mais
              conexão e mais impacto, podemos conversar. Porque o seu produto
              pode (e deve) ser intuitivo, desejado e centrado nas pessoas.
            </p>
          </div>

          {/* Foto + botão */}
          <div className="flex flex-col items-start gap-6">
            <div className="w-full overflow-hidden rounded-card border border-subtle bg-surface">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/about.svg"
                  alt="Retrato de Fábio Alves"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center rounded-pill border border-subtle bg-surface-2 px-8 py-3 text-sm font-medium text-text transition hover:bg-[#34343a]"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
