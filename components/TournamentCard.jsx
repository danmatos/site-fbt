function formatDateRange(start, end){
  if(!start) return null
  try{
    const s = new Date(start); const e = end ? new Date(end) : null
    const fmt = (d)=> d.toLocaleDateString('pt-BR', { day:'2-digit', month:'2-digit', year:'numeric' })
    return e ? `${fmt(s)} a ${fmt(e)}` : fmt(s)
  }catch(_){ return null }
}

export default function TournamentCard({ t }){
  const meta = t.acf || t.meta || {}
  return (
    <div className="card p-5">
      <h3 className="font-semibold" dangerouslySetInnerHTML={{__html: t.title?.rendered || t.title}}/>
      <p className="text-sm text-slate-600 mt-1">
        {meta.clube ? `${meta.clube} — ` : ''}
        {meta.cidade ? `${meta.cidade}` : ''}
        {meta.uf ? `, ${meta.uf}` : ''}
      </p>
      {(meta.data_inicio || meta.data_fim) && (
        <p className="text-sm text-slate-600">{formatDateRange(meta.data_inicio, meta.data_fim)}</p>
      )}
      <div className="mt-4 flex gap-2">
        {meta.regulamento && <a className="btn" href={meta.regulamento} target="_blank" rel="noreferrer">Regulamento</a>}
        {meta.inscricao && <a className="btn btn-solid" href={meta.inscricao} target="_blank" rel="noreferrer">Inscrever-se</a>}
      </div>
    </div>
  )
}
