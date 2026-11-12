# Sow (Cake Lounge)

Site + cardápio digital + painel da Sow, no mesmo molde do projeto da Adega MM
(`marcato-app/Mmadega`).

## Stack

Cloudflare Worker (`src/index.js`) + D1 (`sow-db`). Sem build step — os
`.html` da raiz são servidos como estão pelos assets do Worker.

- `/` — link da bio (mesma estrutura do Beacons deles: cardápio, contato, pedido, texto "Sow Cake Lounge", as duas casas com mapa, manifesto)
- `/cardapio` — cardápio com carrinho que monta o pedido no WhatsApp
- `/mesa` (e `/loja`) — o mesmo cardápio, só consulta, pro QR das mesas
- `/admin` — painel: editar produtos/preços, esgotado, ocultar, selos
  **Vegano** e **Novidade**, dados da loja, links e QR

`assets/js/menu-data.js` é o cardápio do PDF (abril/2026). Serve de reserva
quando a página abre sem o servidor e gera a carga inicial do banco:

```bash
node scripts/gerar-cardapio-sql.mjs   # reescreve migrations/002_cardapio.sql
```

Depois do banco no ar, quem edita o cardápio é o `/admin`.

## Banco de dados

Não há deploy automático de schema. Rodar no D1 Console, em ordem:
`001_estrutura.sql`, `002_cardapio.sql`, `003_admin.sql`. Mudança nova de
banco vira um arquivo numerado em `migrations/`.

`wrangler.toml` está com `database_id` provisório: criar o banco `sow-db`
na Cloudflare e colar o id antes do primeiro deploy.

## Testes

Rodam contra SQLite real (`node:sqlite`), não mock:

```bash
node test/api.test.mjs
```
