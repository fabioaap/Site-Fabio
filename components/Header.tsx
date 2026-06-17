"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Sobre mim", href: "#sobre" },
  { label: "Portfólio", href: "#portfolio" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-subtle bg-bg/90 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        {/* Avatar */}
        <a href="#inicio" aria-label="Início" className="shrink-0">
          <div className="h-10 w-10 overflow-hidden rounded-full border border-subtle">
            <Image
              src="/avatar.svg"
              alt="Fábio Alves"
              width={40}
              height={40}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </a>

        {/* Desktop nav — centro */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-pill bg-surface-2 px-4 py-1.5 text-sm font-medium text-text transition hover:bg-[#34343a]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="mailto:fabiovisualmidia@gmail.com"
          className="hidden md:inline-flex items-center rounded-pill bg-accent-orange px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110 shrink-0"
        >
          Contato
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex md:hidden h-10 w-10 items-center justify-center rounded-pill border border-subtle bg-surface-2"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="md:hidden container-site pb-4">
          <ul className="overflow-hidden rounded-card border border-subtle bg-surface/95 backdrop-blur">
            {navLinks.map((item) => (
              <li key={item.href} className="border-b border-subtle last:border-b-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-lg text-text transition hover:bg-surface-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:fabiovisualmidia@gmail.com"
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-lg font-semibold text-accent-orange transition hover:bg-surface-2"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="4" y1="8" x2="20" y2="8" />
      <line x1="4" y1="16" x2="20" y2="16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}
