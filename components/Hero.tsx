export default function Hero() {
  return (
    <section id="inicio" className="container-site py-24 md:py-36 text-center">
      <h1 className="heading mx-auto max-w-[16ch] text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.02]">
        Ajudo negócios a escalarem suas vendas através do design
      </h1>

      <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
        Sou Senior Product, UX, UI &amp; Growth Designer com 20 anos de
        experiência no digital e foco recente em SaaS, atuando com uma abordagem
        AI-first. Combino discovery orientado a dados e IA com prototipação
        rápida e ciclos contínuos de experimentação para gerar impactos
        mensuráveis em receita, retenção e eficiência operacional.
      </p>

      <div className="mt-10 flex items-center justify-center gap-4">
        <SocialLink
          href="https://www.linkedin.com/in/fabioaap/"
          label="LinkedIn"
          icon={<LinkedInIcon className="h-5 w-5" />}
        />
        <SocialLink
          href="https://www.instagram.com/fabioaap/"
          label="Instagram"
          icon={<InstagramIcon className="h-5 w-5" />}
        />
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-pill border border-subtle text-muted transition hover:bg-surface-2 hover:text-text"
    >
      {icon}
    </a>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-1 1.83-2.05 3.76-2.05C20.4 8.59 22 10.55 22 14.1V21h-4v-6.11c0-1.46-.03-3.33-2.03-3.33-2.03 0-2.34 1.58-2.34 3.22V21H9V9Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
