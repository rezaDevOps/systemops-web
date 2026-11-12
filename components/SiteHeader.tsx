import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { CONTACT_MAILTO, EARLY_ACCESS_MAILTO } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="wordmark" aria-label="SystemOps home">
          <LogoMark />
          <span>SystemOps</span>
        </Link>
        <nav className="site-nav" aria-label="Main">
          <Link href="/cloudpilot">CloudPilot</Link>
          <Link href="/#products">Products</Link>
          <a href={CONTACT_MAILTO}>Contact</a>
          <a href={EARLY_ACCESS_MAILTO} className="btn btn--primary btn--small site-nav__cta">
            Request early access
          </a>
        </nav>
      </div>
    </header>
  );
}
