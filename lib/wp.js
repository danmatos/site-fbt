const WP_URL = process.env.WP_URL;
const embed = '_embed=1';

// Ajuste: se quiser falhar o build quando a API cair, deixe ALLOW_EMPTY undefined
const allowEmpty = process.env.ALLOW_EMPTY === '1';

async function fetchJSON(path) {
  const url = `${WP_URL}${path}${path.includes('?') ? '&' : '?'}${embed}`;
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), 8000); // 8s timeout

  try {
    const res = await fetch(url, {
      signal: ac.signal,
      headers: { 'User-Agent': 'GH-Actions-NextJS/1.0' }
    });
    clearTimeout(t);
    if (!res.ok) throw new Error(`WP fetch ${res.status} ${url}`);
    return await res.json();
  } catch (err) {
    console.error('[WP FETCH ERROR]', err?.message || err);
    if (allowEmpty) return []; // fallback sem quebrar o build
    throw err; // quebra para você ver o erro
  }
}

export async function getPosts(limit = 6) {
  return fetchJSON(`/wp-json/wp/v2/posts?per_page=${limit}`);
}
export async function getTorneios(limit = 9) {
  return fetchJSON(`/wp-json/wp/v2/torneio?per_page=${limit}`);
}
