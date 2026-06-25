import { Metadata } from "next";
import CaseAssistant from "@/components/CaseAssistant";

export const metadata: Metadata = {
  title: "Novo Case — Fábio Alves",
  robots: { index: false },
};

export default function NovoCasePage() {
  return <CaseAssistant />;
}
