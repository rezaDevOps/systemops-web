import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <Link href="/" className="wordmark wordmark--footer">
            <LogoMark size={20} />
            <span>SystemOps</span>
          </Link>
          <p className="site-footer__tagline">Cloud Security · Governance · Compliance</p>
        </div>
        <div className="site-footer__meta">
          <p className="site-footer__products">
            <Link href="/cloudpilot">CloudPilot</Link>
            <span aria-hidden="true"> · </span>
            <span>NIS2</span>
            <span aria-hidden="true"> · </span>
            <span>EU AI Act</span>
          </p>
          <p>
            <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>
          </p>
          <nav className="site-footer__legal" aria-label="Legal">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </nav>
          <p className="site-footer__copy">© {new Date().getFullYear()} SystemOps</p>
        </div>
      </div>
    </footer>
  );
}
