addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Proxy simple qui récupère une URL publique (itac.pro) et tente d'extraire
 * licence, nom, prénom depuis le HTML retourné.
 */
async function handleRequest(request) {
  const url = new URL(request.url)
  const target = url.searchParams.get('url')
  if (!target) return new Response(JSON.stringify({ error: 'missing url param' }), { status: 400 })

  try {
    const resp = await fetch(target, { method: 'GET' })
    const html = await resp.text()

    // heuristique : chercher des chaînes numériques de type licence et des noms
    const licenseMatch = html.match(/(\b\d{6,}\b)/)
    const nameMatch = html.match(/<strong[^>]*>\s*Nom\s*<\/strong>\s*<span[^>]*>([^<]+)<\/span>/i)
    const firstMatch = html.match(/<strong[^>]*>\s*Prénom\s*<\/strong>\s*<span[^>]*>([^<]+)<\/span>/i)

    const result = {
      license: licenseMatch ? licenseMatch[1] : null,
      lastName: nameMatch ? nameMatch[1].trim() : null,
      firstName: firstMatch ? firstMatch[1].trim() : null,
      raw: null
    }

    return new Response(JSON.stringify(result), { headers: { 'content-type': 'application/json' } })
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { 'content-type': 'application/json' } })
  }
}
