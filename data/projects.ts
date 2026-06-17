export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  placeholder: string;
};

export const projects: Project[] = [
  {
    slug: "carteira-digital",
    title: "Carteira Digital – UI Redesign",
    subtitle: "Primary visual/Interaction (2024)",
    description: "Reorganizando dados e ações com leveza e intenção",
    image: "/projects/carteira-digital.svg",
    placeholder: "#8B2BC2",
  },
  {
    slug: "tim-fibra",
    title: "Landing Page TIM FIBRA",
    subtitle: "Web design (2023)",
    description: "Criação página de vendas",
    image: "/projects/tim-fibra.svg",
    placeholder: "#2563EB",
  },
  {
    slug: "engajamento-bootcamps",
    title: "Engajamento bootcamps",
    subtitle: "UX/Growth Design (2023)",
    description: "Como aumentamos o engajamento nos bootcamps da DIO.me",
    image: "/projects/engajamento-bootcamps.svg",
    placeholder: "#2A2A2D",
  },
  {
    slug: "ymma",
    title: "YMMA",
    subtitle: "Product Design end-to-end (2024)",
    description: "Construção end-to-end como Product Design da plataforma SaaS",
    image: "/projects/ymma.svg",
    placeholder: "#3A0A2A",
  },
  {
    slug: "tim-empresas",
    title: "Landing Page TIM EMPRESAS",
    subtitle: "Web design (2023)",
    description: "Criação de página e carrinho de vendas",
    image: "/projects/tim-empresas.svg",
    placeholder: "#1E3A8A",
  },
];
