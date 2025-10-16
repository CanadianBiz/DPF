Déployer le Worker itac-parser

1. Installer Wrangler (si pas déjà):
   npm install -g wrangler

2. Créer un nouveau Worker et déployer:
   wrangler login
   wrangler publish workers/itac-parser.js --name itac-parser

3. Récupérer l'URL du Worker et le coller dans `PROXY_URL` dans `webcam-barcode-scanner/index.html`.

Le Worker fait une requête GET vers l'URL fournie et renvoie un JSON contenant `license`, `lastName`, `firstName` si trouvés.
