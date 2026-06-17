# Design System — Site Fábio Alves

Fonte de verdade dos **tokens de design** e da **identidade visual**, extraída do
site no Framer (`fabioaap.framer.ai`). Os valores aqui descritos são refletidos em
`tailwind.config.ts` (theme) e em `app/globals.css` (CSS custom properties).

## Princípios

- **Dark mode** como tema único.
- **Minimalismo monocromático**: fundo quase preto, texto branco, secundário cinza.
  A cor aparece apenas dentro das thumbnails dos projetos — a UI permanece neutra.
- **Flat**: sem sombras pesadas; profundidade vem de superfícies levemente mais claras.
- **Cantos arredondados** generosos (cards) e elementos em pílula/círculo (botões, avatar).

## Cores (tokens)

| Token          | Hex / valor                | Uso                                        |
| -------------- | -------------------------- | ------------------------------------------ |
| `bg`           | `#0A0A0A`                  | Fundo da página                            |
| `surface`      | `#1A1A1C`                  | Cards de projeto                           |
| `surface-2`    | `#2A2A2D`                  | Botão de menu, pílulas escuras             |
| `text`         | `#FAFAFA`                  | Texto primário / títulos                   |
| `text-muted`   | `#8C8C8C`                  | Parágrafos secundários                     |
| `border`       | `rgba(255,255,255,0.08)`   | Bordas sutis de cards/pílulas              |
| `accent-purple`| `#8B2BC2`                  | Apenas dentro de assets de projeto         |
| `accent-red`   | `#FF2D55`                  | Apenas dentro de assets de projeto         |
| `accent-orange`| `#F26522`                  | CTA principal (botão "Contato", "Bora começar!", dots do processo) |

## Tipografia

- **Família:** grotesca sans. Implementada via `next/font`. Default: **Inter**.
  (Substituível pela fonte exata do Framer quando confirmada.)
- **Títulos:** weight 600, `letter-spacing` levemente negativo (`-0.02em`),
  `line-height` apertado (~1.02).

| Papel       | Tamanho                          | Peso | Line-height | Cor          |
| ----------- | -------------------------------- | ---- | ----------- | ------------ |
| H1 (hero)   | `clamp(2.5rem, 9vw, 4.5rem)`     | 600  | 1.02        | `text`       |
| H2 (seção)  | `clamp(2rem, 6vw, 3rem)`         | 600  | 1.05        | `text`       |
| Body        | `1.125rem`                       | 400  | 1.5         | `text`       |
| Muted       | `1.125rem`                       | 400  | 1.5         | `text-muted` |
| Card título | `1.25rem`                        | 600  | 1.2         | `text`       |
| Card desc   | `1rem`                           | 400  | 1.5         | `text-muted` |

## Raio (border-radius)

| Token   | Valor      | Uso                       |
| ------- | ---------- | ------------------------- |
| `card`  | `20px`     | Cards de projeto / imagens|
| `pill`  | `9999px`   | Botões, avatar, menu      |

## Espaçamento & Layout

- **Container:** centralizado, `max-width: 48rem` (~768px), padding horizontal `1.5rem`.
- **Seções:** padding vertical `4rem` (mobile) → `7rem` (desktop).
- **Mobile-first**; breakpoints padrão Tailwind: `sm 640 / md 768 / lg 1024`.

## Layout desktop

- **Header:** 3 colunas — avatar (esquerda) | nav pills "Sobre mim" + "Portfólio" (centro) | botão "Contato" laranja (direita). Mobile: avatar + hambúrguer.
- **Hero:** texto e parágrafo **centralizados**, ícones sociais abaixo do parágrafo.
- **Portfólio:** grid **2 colunas** no desktop; 5 projetos (2+2+1).
- **Sobre mim:** **2 colunas** — texto (esquerda) + foto + botão (direita).
- **Serviços:** lista de pares em grid 2 colunas, separados por linha horizontal sutil.
- **Meu processo:** título + botão "Bora começar!" (laranja) alinhados; 4 etapas em 2 colunas (texto + bullets laranja).
- **Footer:** "Criado por Fábio Alves" (esquerda) + ícones sociais (direita).
- **Páginas de projeto:** rota `/portfolio/[slug]` com mini-header, hero do projeto e case study.
