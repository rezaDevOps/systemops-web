import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const sans = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "SystemOps — Cloud Security, Governance & Compliance",
    template: "%s — SystemOps",
  },
  description:
    "SystemOps builds practical SaaS products that help companies understand, secure and govern their cloud and AI environments.",
  applicationName: "SystemOps",
  openGraph: {
    type: "website",
    siteName: "SystemOps",
    title: "SystemOps — Cloud Security, Governance & Compliance",
    description: "Cloud Security, Governance & Compliance — made practical.",
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F6F7",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
