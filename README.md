# NoisePort Commons

Ce dépôt contient le site public et le manifeste de NoisePort.

## Tech Stack
- React + TypeScript + Vite
- Tailwind CSS (typography plugin)
- Framer Motion
- React Router DOM
- Google Fonts: Kode Mono (titres/logo), Syne (texte)

## Fonctionnalités
- Thème sombre (bg-neutral-950, text-neutral-100)
- Layout responsive
- Animations fluides (Framer Motion)
- 4 routes :
  - `/` — Accueil
  - `/manifeste` — Manifeste
  - `/installer` — Guide d’installation
  - `/contact` — Contact
- Composants NavBar et Footer réutilisables

## Déploiement
Le site est statique, généré dans `/dist`.
Prêt pour GitHub Pages, Cloudflare Pages, ou Nginx.

## Scripts
- `npm run dev` — développement
- `npm run build` — build production
- `npm run preview` — prévisualisation

## Footer
© 2025 Noiseport — open-source & indépendant
Construit avec React · Typo Kode Mono & Syne
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
