/**
 * Placeholder for legal pages until the real legal information is provided.
 * Intentionally contains no company or legal data.
 */
export function LegalPending({ title }: Readonly<{ title: string }>) {
  return (
    <section className="container legal">
      <h1 className="section__title">{title}</h1>
      <p className="notice">
        <strong>Content pending.</strong> This page is being prepared. The legal information will be published
        here.
      </p>
    </section>
  );
}
