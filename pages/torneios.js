import { getTorneios } from '@/lib/wp'
import TournamentCard from '@/components/TournamentCard'

export async function getStaticProps(){
  const torneios = await getTorneios(30)
  return { props: { torneios } }
}
export default function Torneios({ torneios }){
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Calendário de Torneios</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {torneios.map(t => <TournamentCard key={t.id} t={t} />)}
      </div>
    </main>
  )
}
