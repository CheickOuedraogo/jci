# JCI Yennèga Amazones Émergentes

Site officiel de la **JCI Yennèga Amazones Émergentes** — première Organisation Locale
100 % féminine de JCI Burkina Faso.

- **Stack** : [Astro](https://astro.build) (génération statique, zéro serveur)
- **Hébergement** : GitHub Pages (gratuit, HTTPS)
- **Formulaires** : Web3Forms (gratuit, 250 envois/mois)
- **Dons** : CinetPay (Mobile Money Burkina Faso) — lien à configurer

## Commandes

```bash
pnpm install        # installer
pnpm dev            # serveur local de dev : http://localhost:4321
pnpm build          # générer le site dans dist/
pnpm preview        # prévisualiser le build
```

## Structure

```
src/
  assets/            logo + visuels optimisés
  components/        header, footer, formulaire, don…
  data/content.ts    tout le texte FR + EN
  layouts/Base.astro gabarit commun (SEO, hreflang)
  lib/site.config.ts coordonnées, liens, clés (placeholders)
  pages/             /, /a-propos, /nos-axes, /devenir-amazone, /contact + /en/…
public/              favicons, logo, .nojekyll
.github/workflows/   déploiement GitHub Pages automatique
```

## À configurer (obligatoire avant production)

1. **Web3Forms** — clé d'accès à placer dans `src/lib/site.config.ts` (`FORM_ACCESS_KEY`).
2. **CinetPay** — lien de don à placer dans `DONATION_URL`.
3. **Réseaux sociaux** — URLs des pages Facebook / TikTok / LinkedIn dans `SOCIALS`.
4. **Domaine / base URL** — `site` dans `astro.config.mjs`, et `base` si le dépôt
   n'est pas à la racine d'un compte `*.github.io`.

> Le fichier `TODO.md` (ignoré par git) te guide pas à pas.

## Déploiement

Le workflow `.github/workflows/deploy.yml` construit et publie automatiquement le site
sur chaque push vers `main`. Côté GitHub : réglages du dépôt → **Pages** → Source =
**GitHub Actions**.

Commande de mise en ligne (depuis la racine du projet) :

```bash
git remote add origin <URL-DE-TON-REPO>
git branch -M main
git push -u origin main
```