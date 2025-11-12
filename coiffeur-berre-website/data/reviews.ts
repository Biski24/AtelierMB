import type { Review } from '@/types/content';

export const reviews: Review[] = [
  {
    id: 'julie',
    author: 'Julie L.',
    rating: 5,
    content:
      'Ravie de mon balayage, Mélanie a compris exactement ce que je voulais. Salon très cosy et conseils personnalisés.',
    service: 'Balayage',
    date: 'Mars 2024',
  },
  {
    id: 'virginie',
    author: 'Virginie P.',
    rating: 5,
    content:
      'Premier rendez-vous et déjà conquise. Bastien a réussi la coupe courte que je n’avais jamais osé faire.',
    service: 'Coupe courte',
    date: 'Mai 2024',
  },
  {
    id: 'cedric',
    author: 'Cédric F.',
    rating: 4,
    content:
      'Toujours nickel pour entretenir barbe et cheveux. Prise de rendez-vous rapide et respect des horaires.',
    service: 'Barber',
    date: 'Juin 2024',
  },
];
