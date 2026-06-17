export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  /** Cor base do placeholder enquanto não há asset em alta resolução. */
  placeholder: string;
};

export const projects: Project[] = [
  {
    slug: "carteira-digital",
    title: "Carteira Digital – UI Redesign",
    description: "Reorganizando dados e ações com leveza e intenção",
    image: "/projects/carteira-digital.svg",
    placeholder: "#8B2BC2",
  },
  {
    slug: "engajamento-bootcamps",
    title: "Engajamento bootcamps",
    description: "Como aumentamos o engajamento nos bootcamps da DIO.me",
    image: "/projects/engajamento-bootcamps.svg",
    placeholder: "#2A2A2D",
  },
  {
    slug: "tim-empresas",
    title: "Landing Page TIM EMPRESAS",
    description: "Criação de página e carrinho de vendas",
    image: "/projects/tim-empresas.svg",
    placeholder: "#1E3A8A",
  },
  {
    slug: "tim-fibra",
    title: "Landing Page TIM FIBRA",
    description: "Criação página de vendas",
    image: "/projects/tim-fibra.svg",
    placeholder: "#2563EB",
  },
  {
    slug: "ymma",
    title: "YMMA",
    description: "Construção end-to-end como Product Design da plataforma SaaS",
    image: "/projects/ymma.svg",
    placeholder: "#3A0A2A",
  },
];
