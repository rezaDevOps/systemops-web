import type { Metadata } from "next";
import { LegalPending } from "@/components/LegalPending";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return <LegalPending title="Datenschutz" />;
}
