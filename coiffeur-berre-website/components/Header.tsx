'use client';

import Image from 'next/image';
import Link from 'next/link';
import ItineraryChooser from './ItineraryChooser';
import { salonAppleMapUrl, salonMapUrl } from '@/data/contact';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/#services', label: 'Services' },
  { href: '/#reservation', label: 'Réservation' },
  { href: '/#portfolio', label: 'Portfolio' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo" aria-label="Accueil Atelier MB">
          <Image src="/logo-mb.jpg" alt="Logo Atelier MB" width={72} height={72} priority />
        </Link>
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <li className="nav-itinerary">
              <ItineraryChooser googleUrl={salonMapUrl} appleUrl={salonAppleMapUrl} />
            </li>
          </ul>
        </nav>
        <div className="header-cta">
          <div className="social-links">
            <a className="social-link" href="https://www.instagram.com/michael_christi_/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a
              className="social-link"
              href="https://www.facebook.com/people/Latelier-by-MB/100063580862476/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
          <Link href="/#reservation" className="btn">
            Prendre RDV
          </Link>
        </div>
      </div>
    </header>
  );
}
