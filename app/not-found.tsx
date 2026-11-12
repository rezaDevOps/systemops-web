import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container not-found">
      <h1 className="section__title">Page not found</h1>
      <p className="lead">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className="btn btn--primary">
        Go to the homepage
      </Link>
    </section>
  );
}
