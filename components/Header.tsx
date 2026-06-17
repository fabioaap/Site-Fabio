"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre mim", href: "#sobre" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="container-site flex items-center justify-between py-5">
        <a
          href="#inicio"
          aria-label="Início"
          className="block h-12 w-12 overflow-hidden rounded-pill border border-subtle"
        >
          <Image
            src="/avatar.svg"
            alt="Fábio Alves"
            width={48}
            height={48}
            className="h-full w-full object-cover"
            priority
          />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex h-12 w-12 items-center justify-center rounded-pill border border-subtle bg-surface-2/80 backdrop-blur transition hover:bg-surface-2"
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Navegação principal"
          className="container-site pb-4"
        >
          <ul className="overflow-hidden rounded-card border border-subtle bg-surface/95 backdrop-blur">
            {navItems.map((item) => (
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
          </ul>
        </nav>
      )}
    </header>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="4" y1="8" x2="20" y2="8" />
      <line x1="4" y1="16" x2="20" y2="16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}
