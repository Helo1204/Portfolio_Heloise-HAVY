# Portfolio d'Héloïse Havy

Site portfolio statique, en français, sans dépendance ni compilation. Il s'ouvre directement depuis `index.html` et peut être publié sur GitHub Pages ou tout hébergement de fichiers statiques.

## Personnaliser le site

Les textes de démonstration sont à remplacer par ton parcours réel. Les pages concernées sont `index.html`, `etudes.html`, `projets.html`, `experiences.html`, `competences.html`, `engagement-associatif.html` et `engagements-solidaires.html`. Dans chaque page secondaire, adapte les boutons de catégorie et les panneaux correspondants. Le JavaScript dans `js/main.js` gère les onglets; il n'est pas nécessaire de le modifier pour changer leurs titres ou leur contenu.

Le bandeau de navigation est partagé par toutes les pages et défini dans `js/main.js`. Le lien correspondant à la page courante est sélectionné automatiquement; il n'est donc plus nécessaire de copier ou modifier le bandeau dans chaque fichier HTML.

### Photo, logo et CV

- Ajoute ton portrait en JPG à `assets/images/portrait.jpg`. Le cadre de la page d'accueil utilise ce chemin et garde un visuel de remplacement tant que la photo manque.
- Le logo de l'école est facultatif : ajoute un SVG à `assets/images/logo-ecole.svg`. Le bloc de remplacement sera remplacé automatiquement par le logo.
- Ajoute ton CV au format PDF sous `assets/documents/CV-Heloise-Havy.pdf`. Le bouton de téléchargement de l'accueil cible ce fichier. Tu peux modifier son nom et son chemin dans `index.html` si tu préfères.

Respecte les règles d'utilisation de ton école avant de publier son logo. Pour une photo publique, choisis une image que tu as le droit de partager.

## Prévisualiser

Ouvre `index.html` dans un navigateur. Tous les liens entre pages sont relatifs; aucun outil de compilation n'est requis. Pour lancer un serveur local si tu le préfères, utilise `python3 -m http.server 8000`, puis visite `http://localhost:8000`.

## Publier sur GitHub Pages

1. Envoie les fichiers du portfolio dans un dépôt GitHub.
2. Dans les paramètres du dépôt, ouvre **Pages** et choisis la branche à publier ainsi que le dossier racine (`/`).
3. Enregistre : GitHub Pages publiera `index.html` et les pages liées.

Vérifie que le portrait et le PDF sont bien présents avant la mise en ligne. Le logo de l'école reste optionnel.