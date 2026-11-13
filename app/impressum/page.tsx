import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von SystemOps – Angaben gemäß § 5 DDG.",
};

export default function ImpressumPage() {
  return (
    <article className="container legal" lang="de">
      <h1 className="legal__title">Impressum</h1>

      <p>Angaben gemäß § 5 DDG</p>

      <p>
        Reza Sayyarazamani
        <br />
        handelnd unter SystemOps
      </p>

      <address>
        Am Stadtweiher 5
        <br />
        40699 Erkrath
        <br />
        Deutschland
      </address>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href="mailto:anfrage@systemops.de">anfrage@systemops.de</a>
      </p>

      <h2>Unternehmensform</h2>
      <p>Einzelunternehmen</p>

      <h2>Registereintrag</h2>
      <p>Kein Eintrag im Handelsregister.</p>

      <h2>Umsatzsteuer-Identifikationsnummer / Wirtschafts-Identifikationsnummer</h2>
      <p>Derzeit keine Angabe.</p>
    </article>
  );
}
