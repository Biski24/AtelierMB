import type { Service } from '@/types/content';

export const services: Service[] = [
  {
    id: 'signature-cut',
    title: 'Coupe Signature',
    description:
      'Diagnostic, shampoing profond, coupe personnalisée et coiffage. Idéal pour rafraîchir votre style en 45 minutes.',
    price: '22 €',
    duration: '25 min',
  },
  {
    id: 'color-expert',
    title: 'Coloration experte',
    description:
      'Coloration sur-mesure, patine et soin renforçateur de fibre. Parfait pour redonner éclat et profondeur.',
    price: '68 €',
    duration: '1 h 30',
  },
  {
    id: 'gloss',
    title: 'Gloss & Brillance',
    description:
      'Soin gloss révélateur de lumière pour réveiller les reflets tout en douceur. Finalisé avec un brushing.',
    price: '45 €',
    duration: '60 min',
  },
  {
    id: 'event-hair',
    title: 'Attache & événement',
    description:
      'Coiffure sophistiquée pour mariage ou soirée. Essai inclus pour valider la structure et les accessoires.',
    price: '120 €',
    duration: '2 h',
  },
  {
    id: 'rituel-soin',
    title: 'Rituel soin profond',
    description:
      'Diagnostic du cuir chevelu, gommage, soin réparateur et massage relaxant suivi d’un brushing naturel.',
    price: '55 €',
    duration: '1 h',
  },
  {
    id: 'barber',
    title: 'Barber précis',
    description:
      'Taille de barbe, contour au rasoir et finitions à la serviette chaude. Pour une silhouette nette et moderne.',
    price: '28 €',
    duration: '30 min',
  },
];
