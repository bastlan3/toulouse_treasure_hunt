# 🗝️ Chasse au Trésor — Toulouse

Une chasse au trésor interactive à travers Toulouse, la ville rose.

## 📱 Fonctionnalités

- 10 étapes à travers les sites emblématiques de Toulouse
- Progression sauvegardée localement (localStorage)
- Design mobile-first, optimisé pour utilisation en marchant
- Mode sombre automatique
- Fonctionne hors-ligne une fois chargé

## 🚀 Déploiement

### Option 1 : Vercel (le plus simple)

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Installez Vercel CLI : `npm i -g vercel`
3. Dans le dossier du projet, lancez : `vercel`
4. Suivez les instructions

Ou bien :
1. Poussez ce repo sur GitHub
2. Importez le repo dans Vercel (vercel.com/new)
3. Vercel détecte automatiquement Vite et déploie

### Option 2 : GitHub Pages

1. Créez un repo GitHub et poussez le code
2. Modifiez `vite.config.js` :
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/nom-de-votre-repo/'
   })
   ```
3. Créez un fichier `.github/workflows/deploy.yml` :
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```
4. Dans les paramètres du repo GitHub, activez Pages depuis la branche `gh-pages`

### Option 3 : Netlify

1. Créez un compte sur [netlify.com](https://netlify.com)
2. Glissez-déposez le dossier `dist` (après `npm run build`)
3. Ou connectez votre repo GitHub pour déploiement automatique

## 💻 Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour production
npm run build

# Prévisualiser la version de production
npm run preview
```

## 📍 Les étapes

1. Monument à la Gloire de la Résistance
2. Jardin des Plantes
3. Jardin Japonais Pierre-Baudis
4. Basilique Saint-Sernin
5. Notre-Dame du Taur
6. Place du Capitole
7. Couvent des Jacobins
8. Hôtel d'Assézat
9. Quartier des Carmes (Fresque Miss Van)
10. Pont Neuf

## 🎨 Crédits

Design inspiré par les couleurs de la brique toulousaine.

---

Bonne chasse ! 🏆
