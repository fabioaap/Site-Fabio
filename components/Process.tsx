const steps = [
  {
    title: "Discovery & Strategy",
    description:
      "Começo o processo com uma análise profunda das necessidades dos usuários e do mercado, utilizando inteligência artificial e pesquisa qualitativa e quantitativa para mapear dores e oportunidades. Esse entendimento permite estruturar soluções fundamentadas em dados reais.",
    bullets: [
      "Pesquisas de mercado detalhadas para análise de concorrentes e tendências",
      "Coleta de insights para validar hipóteses e direcionar estratégias",
      "Mapeamento de comportamento dos usuários para otimizar a experiência",
      "Alinhamento estratégico entre stakeholders para garantir foco e eficiência",
    ],
  },
  {
    title: "Estruturação e Planejamento",
    description:
      "Participo ativamente da construção e atualização do roadmap do produto, sempre considerando a experiência do usuário e as necessidades do negócio. Meu objetivo é garantir um fluxo claro e otimizado, alinhando expectativas e garantindo entregas estratégicas.",
    bullets: [
      "Definição de roadmap e priorização de funcionalidades",
      "Construção de jornadas e fluxos de alta complexidade",
      "Tradução de requisitos em soluções aplicáveis à equipe de produto",
      "Priorização de funcionalidades essenciais",
    ],
  },
  {
    title: "UX/UI Design e Prototipação",
    description:
      "Desenvolvo wireframes, protótipos interativos e interfaces otimizadas, garantindo que cada decisão de design seja embasada em pesquisa e validação com usuários reais.",
    bullets: [
      "Criação de wireframes estratégicos e design system escalável",
      "Prototipação interativa para validação rápida de conceitos",
      "Testes de usabilidade para refinar interfaces e fluxos",
      "Aplicação de boas práticas de acessibilidade e UX",
    ],
  },
  {
    title: "Handoff e Implementação",
    description:
      "A transição entre design e desenvolvimento é estruturada para garantir a continuidade e consistência das entregas. Forneço documentação clara e protótipos detalhados para facilitar o trabalho das equipes de desenvolvimento.",
    bullets: [
      "Documentação no Notion e protótipos no Figma",
      "Organização de assets e especificações técnicas para desenvolvimento",
      "Suporte contínuo na implementação e refinamento do produto",
      "Testes A/B e acompanhamento de métricas para melhoria contínua",
    ],
  },
];

export default function Process() {
  return (
    <section id="processo" className="border-t border-subtle py-16 md:py-24">
      <div className="container-site">
        <div className="flex items-center justify-between gap-4">
          <h2 className="heading text-[clamp(2rem,6vw,3rem)] leading-tight">
            Meu processo
          </h2>
          <a
            href="mailto:fabiovisualmidia@gmail.com"
            className="shrink-0 inline-flex items-center gap-2 rounded-pill bg-accent-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            <span>→</span> Bora começar!
          </a>
        </div>

        <div className="mt-12 space-y-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12"
            >
              <div>
                <h3 className="heading text-lg text-text">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>

              <ul className="space-y-3">
                {step.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-orange"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-muted">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
