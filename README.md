# Marée

Site vitrine d'un hôtel de plage sur la côte Atlantique : suites, expériences, histoire de l'hôtel et réservation en ligne (Maquette).

Construit avec **Next.js (App Router)** et du CSS pur.

---

## Aperçu

| Page           | Route          | Contenu                                          |
| -------------- | -------------- | ------------------------------------------------ |
| Accueil        | `/`            | Hero, journée type, appel à l'action             |
| Suites         | `/chambres`    | Les quatre suites avec photos, détails et tarifs |
| Expériences    | `/experiences` | Spa marin et autres activités                    |
| Notre Histoire | `/histoire`    | Chiffres clés et récit de l'hôtel                |
| Réservation    | `/reservation` | Formulaire de réservation                        |

## Fonctionnalités

- Design responsive (mobile, tablette, desktop)
- Menu hamburger en panneau compact sous 900 px
- Bouton « retour en haut » avec défilement doux
- Fond dégradé avec texture de grain (SVG `feTurbulence`)
- Photos de suites inclinées en forme de capsule
- Respect de `prefers-reduced-motion`

## Démarrage

```bash
npm install
npm run dev
```

Le site est disponible sur [http://localhost:3000].

Build de production :

```bash
npm run build
npm start
```

## Structure du projet

```
maree-website/
├── app/
│   ├── chambres/page.js       # Suites
│   ├── experiences/page.js    # Expériences
│   ├── histoire/page.js       # Notre Histoire
│   ├── reservation/page.js    # Réservation
│   ├── globals.css            # Styles globaux et variables
│   ├── layout.js              # Layout commun
│   └── page.js                # Accueil
├── components/
│   ├── BackToTop.js           # Bouton retour en haut
│   ├── BookingForm.js         # Formulaire de réservation
│   ├── Footer.js              # Pied de page
│   ├── Nav.js                 # Navigation + menu hamburger
│   └── PageHead.js            # En-tête de page
├── lib/
│   └── data.js                # Données (liens, suites, etc.)
├── public/
│   ├── suites/                # Photos des suites
│   └── logo.png
├── jsconfig.json
├── next.config.mjs
└── package.json
```

## Palette « Soft Beach »

Les couleurs sont définies en variables CSS dans `app/globals.css`.

| Variable  | Couleur   | Usage           |
| --------- | --------- | --------------- |
| `--blue`  | `#51E2F5` | Bleu océan      |
| `--sea`   | `#9DF9EF` | Turquoise clair |
| `--mist`  | `#FFFFFF` | Blanc           |
| `--mistt` | `#D7E7E6` | Brume           |
| `--sand`  | `#B8808F` | Rose sable      |
| `--dark`  | `#A28089` | Mauve           |
| `--ink`   | `#37282E` | Texte           |
| `--deep`  | `#6E525B` | Mauve profond   |

## Modifier le contenu

- **Suites, liens de navigation** : `lib/data.js`
- **Photos des suites** : `public/suites/`
- **Couleurs et espacements** : `app/globals.css`

## Technologies

- [Next.js](https://nextjs.org/) (App Router)
- React
- CSS pur, sans framework

---

Projet 2026 par David Roussety (Maquette).
