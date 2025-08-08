# Tênis – Next.js Template (GitHub Pages + WordPress Headless + ACF)

## Requisitos
- Node 20+
- Um WordPress público com REST API habilitada + plugin `ACF` + plugin `ftj-core` (CPT `torneio`).
- Importe o arquivo `acf/torneio-fields.json` em **ACF → Ferramentas → Importar**.

## Rodar localmente
```bash
npm i
WP_URL=https://SEU-WP.com npm run dev
```

## Build/export estático
```bash
WP_URL=https://SEU-WP.com npm run build
WP_URL=https://SEU-WP.com npm run export   # gera pasta ./out
```

## Deploy no GitHub Pages
1. Crie um repositório `seu-repo`.
2. Faça push deste template.
3. Settings → Pages → Source: GitHub Actions.
4. Secrets:
   - `WP_URL` = URL base do seu WordPress (ex.: https://meu-wp.com)
   - `REPO_NAME` = nome do repo (ex.: `tenis-site`)
5. A action publica a pasta `out/` automaticamente.

## Campos ACF do Torneio
- `clube` (texto)
- `cidade` (texto)
- `uf` (texto até 2 chars)
- `data_inicio` (date)
- `data_fim` (date)
- `inscricao` (url)
- `regulamento` (url)

> O template consome esses campos como `t.acf.campo` (WP REST).

## Observações
- Imagens usam `unoptimized: true` para funcionar no Pages.
- Para conteúdo dinâmico novo, reexecutar o CI (push/dispatch) para re-gerar o site.
