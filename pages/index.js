import { getPosts, getTorneios } from '@/lib/wp'
import Link from 'next/link'
import TournamentCard from '@/components/TournamentCard'

export async function getStaticProps(){
  const [posts, torneios] = await Promise.all([ getPosts(3), getTorneios(6) ])
  return { props: { posts, torneios } }
}

export default function Home({ posts, torneios }){
  return (
    <main>
      <section className="hero-gradient">
        <div className="container py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="badge">Esporte para a vida toda</span>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">Tênis no Rio de Janeiro<br/><span className="text-brand">para todas as idades</span></h1>
              <p className="mt-4 text-slate-600 max-w-prose">Promovemos e incentivamos a prática do tênis social e profissional no estado do Rio de Janeiro. Confira torneios, ranking, notícias e programas de capacitação.</p>
              <div className="mt-6 flex gap-3">
                <Link className="btn btn-solid" href="/torneios">Ver Torneios</Link>
                <Link className="btn" href="#noticias">Últimas notícias</Link>
              </div>
            </div>
            <div className="card p-4 md:p-6">
              <img className="rounded-xl w-full aspect-[16/10] object-cover" src="https://images.unsplash.com/photo-1541924847-19be9f5ffb23?q=80&w=1200&auto=format&fit=crop" alt="Quadra de tênis"/>
              <div className="mt-4 flex gap-3">
                <span className="badge">Calendário 2025</span>
                <span className="badge">Regulamentos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="destaques" className="py-12 md:py-16 container">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Destaques</h2>
          <Link className="text-sm font-medium underline" href="#noticias">Ver todas as notícias</Link>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {posts.map(p => (
            <article key={p.id} className="card overflow-hidden">
              {p._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                <img className="w-full aspect-[16/9] object-cover" src={p._embedded['wp:featuredmedia'][0].source_url} alt=""/>
              )}
              <div className="p-5">
                <span className="badge">Notícias</span>
                <h3 className="mt-3 font-semibold text-lg" dangerouslySetInnerHTML={{__html:p.title.rendered}}/>
                <div className="mt-2 text-sm text-slate-600" dangerouslySetInnerHTML={{__html:p.excerpt.rendered}}/>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="torneios" className="py-12 md:py-16 bg-slate-50">
        <div className="container">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">Próximos Torneios</h2>
            <Link className="text-sm font-medium underline" href="/torneios">Ver calendário completo</Link>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {torneios.map(t => <TournamentCard key={t.id} t={t} />)}
          </div>
        </div>
      </section>
    </main>
  )
}
