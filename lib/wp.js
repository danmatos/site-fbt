const WP_URL = process.env.WP_URL
const embed = '_embed=1'

async function fetchJSON(path){
  const url = `${WP_URL}${path}${path.includes('?') ? '&' : '?'}${embed}`
  const res = await fetch(url)
  if(!res.ok) throw new Error(`WP fetch failed ${res.status}`)
  return res.json()
}

export async function getPosts(limit=6){
  return fetchJSON(`/wp-json/wp/v2/posts?per_page=${limit}`)
}

export async function getTorneios(limit=9){
  return fetchJSON(`/wp-json/wp/v2/torneio?per_page=${limit}`)
}
