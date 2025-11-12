import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Atelier MB — Coiffeur mixte à Berre-l’Étang',
  description:
    'Salon de coiffure Atelier MB à Berre-l’Étang : coupes, colorations, soins personnalisés et réservation en ligne du mardi au samedi.',
  metadataBase: new URL('https://atelier-mb.vercel.app'),
  openGraph: {
    title: 'Atelier MB — Coiffeur mixte à Berre-l’Étang',
    description:
      'Réservez votre rendez-vous beauté à l’Atelier MB et découvrez nos services coupe, couleur et soins experts.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="page-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
