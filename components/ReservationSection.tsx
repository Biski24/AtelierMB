import Link from 'next/link';
import { salonAddress, salonEmail, salonPhone } from '@/data/contact';

export default function ReservationSection() {
  return (
    <section id="reservation" className="section container">
      <div className="section-header">
        <div>
          <p className="eyebrow">Réservation</p>
          <h2>Appelez ou écrivez pour bloquer votre créneau</h2>
          <p>
            Michael et l’équipe confirment chaque demande par téléphone. Choisissez votre canal et indiquez le rituel
            souhaité.
          </p>
        </div>
      </div>
      <div className="cards-grid reservation-grid">
        <article className="card">
          <p className="eyebrow">Coordonnées</p>
          <ul className="contact-list">
            <li>
              <span>Téléphone</span>
              <a className="footer-link" href={`tel:${salonPhone}`}>
                {salonPhone}
              </a>
            </li>
            <li>
              <span>Email</span>
              <a className="footer-link" href={`mailto:${salonEmail}`}>
                {salonEmail}
              </a>
            </li>
            <li>
              <span>Adresse</span>
              <p className="footer-text">{salonAddress}</p>
            </li>
          </ul>
        </article>
        <article className="card reservation-cta">
          <p className="eyebrow">Action rapide</p>
          <h3>Besoin d’un rendez-vous express ?</h3>
          <p>Appelez-nous, précisez le service et vos disponibilités. Nous vous rappelons si le créneau est libre.</p>
          <div className="contact-actions">
            <a className="btn" href={`tel:${salonPhone}`}>
              Appeler le salon
            </a>
            <Link className="btn ghost" href={`mailto:${salonEmail}`}>
              Écrire un message
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
