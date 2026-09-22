# Vinícius Reis — Portfólio

Portfólio pessoal de [Vinícius Reis](https://viniciusdev.site), Desenvolvedor Full Stack, construído com **Astro** e estilizado com **Tailwind CSS**. Site estático com páginas de projeto detalhadas, galeria de imagens com lightbox, SEO e sitemap automáticos.

## 🚀 Stack

- [Astro](https://astro.build) 7 — output estático
- [Tailwind CSS](https://tailwindcss.com) 4 (via plugin Vite)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [@vercel/analytics](https://vercel.com/docs/analytics)

## 📂 Estrutura do projeto

```text
/
├── public/                    # Assets estáticos (imagens, favicon)
├── src/
│   ├── components/
│   │   ├── icons/             # Ícones SVG (Arrow*, Chevron, Close)
│   │   ├── sections/          # Seções da home (Hero, About, Projects, Services)
│   │   ├── ui/                # Botões e componentes reutilizáveis
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── ProjectGallery.astro  # Grid de imagens + lightbox fullscreen
│   ├── data/                  # Conteúdo (projetos, serviços, habilidades, links)
│   ├── layouts/
│   │   └── Layout.astro       # Shell da página (head, SEO, JSON-LD)
│   ├── pages/
│   │   ├── index.astro        # Home
│   │   └── projetos/
│   │       ├── index.astro    # Lista de projetos
│   │       └── [...slug].astro# Detalhe de cada projeto (rota dinâmica)
│   └── styles/
│       └── global.css         # Tokens de tema (cores, tipografia)
└── package.json
```

## 📝 Conteúdo

Os dados do site ficam em `src/data/` e são tipados:

| Arquivo                          | Conteúdo                                       |
| :------------------------------- | :--------------------------------------------- |
| `projectList.ts`                 | Projetos exibidos na listagem                  |
| `projectDetails.ts`              | Detalhes de cada projeto (imagens, techs, texto) |
| `services.ts` / `skills.ts`      | Serviços e habilidades da home                 |
| `socialLinks.ts`                 | Links sociais do rodapé                        |

Para adicionar um projeto: criar o entry no `projectDetails.ts` (o `slug` gera a rota `/projetos/{slug}` automaticamente por `getStaticPaths`) e referenciá-lo em `projectList.ts`.

## 🧞 Comandos

Todos os comandos rodam na raiz do projeto, usando **npm** (também funciona com pnpm):

| Comando                   | Ação                                              |
| :------------------------ | :------------------------------------------------ |
| `npm install`             | Instala as dependências                           |
| `npm run dev`             | Inicia o servidor de dev em `localhost:4321`      |
| `npm run build`           | Gera o site de produção em `./dist/`              |
| `npm run preview`         | Preview do build localmente antes do deploy       |
| `npm run astro ...`       | Comandos da CLI do Astro (ex.: `astro add`)       |

### Dev server em background

O fluxo de desenvolvimento usa o dev server em background (veja `AGENTS.md`):

```
astro dev --background   # inicia em background
astro dev status         # mostra o status
astro dev logs           # mostra os logs
astro dev stop           # para o servidor
```

## 🔧 Configuração

- `astro.config.mjs` — site URL (`https://viniciusdev.site`) e integração de sitemap.
- `src/styles/global.css` — tokens de tema (fundo, texto, cor primária).

## 🚀 Deploy

Gere o build com `npm run build` e publique o conteúdo de `dist/` em qualquer host estático (Vercel, Netlify, Cloudflare Pages, etc.). O deploy é automático via Vercel.