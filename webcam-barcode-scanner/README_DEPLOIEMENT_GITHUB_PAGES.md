# Déploiement sur GitHub Pages

1. **Placez-vous à la racine du dépôt** (là où se trouve le dossier `webcam-barcode-scanner`).

2. **Ajoutez et validez le fichier `.nojekyll`** (déjà fait automatiquement).

3. **Poussez vos modifications sur GitHub** :
   ```bash
   git push origin main
   ```

4. **Sur GitHub, allez dans les paramètres du dépôt** :
   - Onglet "Settings" > "Pages"
   - Dans "Source", choisissez la branche `main` et le dossier `/webcam-barcode-scanner` comme racine du site.
   - Validez.

5. **L’URL de votre site sera affichée** (exemple : `https://<votre-utilisateur>.github.io/<nom-du-repo>/`).

6. **Accédez à l’URL et testez l’application** (la webcam fonctionnera si vous êtes en HTTPS et sur un navigateur compatible).

**Remarque** : Si vous ne voyez pas le site immédiatement, attendez quelques minutes et rafraîchissez la page.
