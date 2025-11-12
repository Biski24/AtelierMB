# Atelier MB — site vitrine

Application Next.js 14 qui regroupe le site public, la prise de rendez-vous et les formulaires de contact du salon Atelier MB à Berre-l’Étang. Cette version est pensée pour tourner sans serveur dédié et se déploie instantanément sur Vercel.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router, API routes serverless)
- TypeScript + ESLint (config `next/core-web-vitals`)
- CSS globale minimaliste (pas de dépendance UI)

## Démarrage local

```bash
npm install
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).  
Pour vérifier la build de production : `npm run build && npm run start`.

## Variables d’environnement

Copiez `.env.example` vers `.env` puis adaptez selon vos coordonnées :

```
NEXT_PUBLIC_SALON_PHONE=04 42 09 04 78
NEXT_PUBLIC_SALON_ADDRESS=15 rue de la République, 13130 Berre-l'Étang
NEXT_PUBLIC_SALON_EMAIL=contact@atelier-mb.fr
NEXT_PUBLIC_SALON_MAP_URL=https://maps.google.com/...
NEXT_PUBLIC_SALON_APPLE_MAP_URL=https://maps.apple.com/...
CONTACT_FORWARD_EMAIL=contact@atelier-mb.fr
APPOINTMENT_FORWARD_EMAIL=rdv@atelier-mb.fr
```

Les deux dernières valeurs sont simplement utilisées pour mentionner l’adresse interne vers laquelle les formulaires seraient routés. Intégrez votre outil (Resend, Mailjet, Airtable…) dans `app/api/*` si besoin.

## Déploiement Vercel

1. Importer le repo sur [vercel.com](https://vercel.com/) (bouton “New Project”).
2. Choisir le framework Next.js (détection automatique).
3. Définir les variables d’environnement listées ci-dessus dans l’onglet *Environment Variables*.
4. Lancer le déploiement : Vercel installe les dépendances, exécute `npm run build` puis expose le site. Le projet vit désormais à la racine du dépôt, aucun "Root Directory" supplémentaire n’est requis.

## Structure

- `app/` : la page unique (`page.tsx`) et les routes API (ex. `/api/contact`).
- `components/` : sections réutilisables (hero, services, portfolio, équipe, réservation…).
- `data/` : contenu statique (services, équipe, avis, coordonnées).
- `app/globals.css` : thème global & grille responsive.

## Aller plus loin

- Brancher un outil d’emailing dans les routes API pour transformer les formulaires en messages envoyés.
- Remplacer les données statiques (`data/`) par un CMS/headless ou une base Firestore/Supabase si nécessaire.
- Ajouter l’analytics de Vercel ou Plausible pour suivre les conversions “Prendre RDV”.
