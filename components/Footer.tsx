const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fabioaap/",
    icon: LinkedInIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fabioaap/",
    icon: InstagramIcon,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-subtle py-10">
      <div className="container-site flex items-center justify-between gap-4">
        <p className="text-sm text-muted">
          Criado por <span className="font-medium text-text">Fábio Alves</span>
        </p>

        <div className="flex items-center gap-4">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted transition hover:text-text"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
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
