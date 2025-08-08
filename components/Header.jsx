import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-brand grid place-items-center text-white font-bold">TRJ</div>
            <span className="font-semibold">Tênis RJ • Next</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link className="text-sm font-medium text-slate-700 hover:text-slate-900" href="/quem-somos">Quem Somos</Link>
            <Link className="text-sm font-medium text-slate-700 hover:text-slate-900" href="/torneios">Torneios</Link>
            <Link className="text-sm font-medium text-slate-700 hover:text-slate-900" href="/ranking">Ranking</Link>
            <Link className="text-sm font-medium text-slate-700 hover:text-slate-900" href="/contato">Contato</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link className="btn hidden sm:inline-flex" href="/afiliacao">Afiliar-se</Link>
            <Link className="btn btn-solid" href="/inscricoes">Inscrições</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
