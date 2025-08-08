export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-12">
      <div className="container py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2025 Federação de Tênis – RJ (Demo Next). Todos os direitos reservados.</p>
        <div className="flex items-center gap-4">
          <a className="hover:underline" href="#">Institucional</a>
          <a className="hover:underline" href="#">Privacidade</a>
          <a className="hover:underline" href="#">Acessibilidade</a>
        </div>
      </div>
    </footer>
  )
}
