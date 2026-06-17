import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fabioaap.com"),
  title: "Fábio Alves — Product, UX, UI & Growth Designer",
  description:
    "Senior Product, UX, UI & Growth Designer com 20 anos de experiência no digital e foco em SaaS, atuando com uma abordagem AI-first. Ajudo negócios a escalarem suas vendas através do design.",
  openGraph: {
    title: "Fábio Alves — Product, UX, UI & Growth Designer",
    description:
      "Ajudo negócios a escalarem suas vendas através do design. Senior Product, UX, UI & Growth Designer com 20 anos de experiência, foco em SaaS e abordagem AI-first.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
