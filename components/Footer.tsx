import Image from 'next/image';
import Link from 'next/link';
import { salonAddress, salonAppleMapUrl, salonEmail, salonMapUrl, salonPhone } from '@/data/contact';
import ItineraryChooser from './ItineraryChooser';

const socials = [
  { href: 'https://www.instagram.com/michael_christi_/', label: 'Instagram' },
  { href: 'https://www.facebook.com/people/Latelier-by-MB/100063580862476/', label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/logo-mb.jpg" alt="Logo Atelier MB" width={80} height={80} />
        </div>
        <div className="footer-block">
          <p className="footer-title">Nous trouver</p>
          <p className="footer-text">{salonAddress}</p>
          <a className="footer-link" href={`tel:${salonPhone}`}>
            {salonPhone}
          </a>
          <ItineraryChooser googleUrl={salonMapUrl} appleUrl={salonAppleMapUrl} />
        </div>
        <div className="footer-block">
          <p className="footer-title">Nous écrire</p>
          <a className="footer-link" href={`mailto:${salonEmail}`}>
            {salonEmail}
          </a>
          <Link className="footer-link" href="/#reservation">
            Réservation
          </Link>
        </div>
        <div className="footer-block">
          <p className="footer-title">Réseaux</p>
          <ul className="footer-list">
            {socials.map((social) => (
              <li key={social.href}>
                <a className="footer-link" href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="footer-meta">© {new Date().getFullYear()} Atelier MB — Tous droits réservés.</p>
    </footer>
  );
}
