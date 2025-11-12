import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero container">
      <div>
        <p className="eyebrow">Coiffeur mixte à Berre-l’Étang</p>
        <h1>
          Atelier MB sublime vos cheveux
          <br />
          du mardi au samedi
        </h1>
        <p>
          Des coupes graphiques, couleurs maîtrisées et rituels de soin. Réservez votre créneau en ligne et laissez-vous
          guider par l’équipe.
        </p>
        <div className="hero-cta">
          <Link href="/#reservation" className="btn">
            Réserver un créneau
          </Link>
          <Link href="/#portfolio" className="btn ghost">
            Voir le portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
