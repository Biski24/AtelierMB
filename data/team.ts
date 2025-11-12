import type { TeamMember } from '@/types/content';

export const team: TeamMember[] = [
  {
    id: 'michael',
    name: 'Michael',
    role: 'Patron & barber',
    description:
      'Fondateur de l’Atelier MB, il façonne les coupes homme/femme et les barbes avec une signature précise et chaleureuse.',
    specialties: ['Barber', 'Coupe transformation', 'Conseil style'],
  },
  {
    id: 'brigitte',
    name: 'Brigitte',
    role: 'Coiffeuse coloriste',
    description:
      'Référence couleur du salon, elle maîtrise les mèches subtiles comme les blonds solaires et adore les brushings soyeux.',
    specialties: ['Balayage lumineux', 'Brushing couture', 'Soin gloss'],
  },
  {
    id: 'maddy',
    name: 'Maddy',
    role: 'Apprentie passionnée',
    description:
      'Toujours à l’écoute, elle accompagne Michael et Brigitte sur les rituels soin et les préparations coupe.',
    specialties: ['Assistante coloration', 'Protocoles soin', 'Suivi rendez-vous'],
  },
];
