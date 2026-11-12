import type { Metadata } from "next";
import { LegalPending } from "@/components/LegalPending";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return <LegalPending title="Impressum" />;
}
