export const projectDetails = [
  {
    name: "Vorthal",
    slug: "vorthal",
    links: {
      website: "https://vorthal.com.br",
    },
    imageURL: [
      {
        name: "Banner Vorthal Sistemas",
        href: "/banner-vorthal.png",
      },
      {
        name: "Inicial do Sistema Vorthal",
        href: "/sistema.png",
      },
      {
        name: "Caixa do Sistema Vorthal",
        href: "/caixa.png",
      },
      {
        name: "Cadastro de Produto Vorthal",
        href: "/cadastro-produtos.png",
      },
      {
        name: "Dashboard do Tenant Vorthal",
        href: "/dashboard-tenant.png",
      },
    ],
    description:
      "Design e desenvolvimento de sistema PDV/ERP multi-segmento completo, com aplicativo desktop (Tauri + Rust) e plataforma web SaaS com sincronização na nuvem e gestão por inquilinos.",
    tag: "Full Stack",
    date: "2026",
    local: "Brasil 🇧🇷",
    duration: "6 Meses",
    techs: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "NextAuth",
      "Tailwind CSS",
      "shadcn/ui",
      "Tauri",
      "Rust",
      "SQLite",
      "Vite",
      "Vitest",
    ],
    details: [
      {
        name: "Contexto",
        content:
          "O Vorthal One é um sistema PDV/ERP completo que se adapta ao segmento do cliente — mercado, farmácia, roupas, hortifrúti, autopeças, construção, pet shop e outros. Ele concentra vendas no caixa (PDV), controle de estoque, financeiro, emissão fiscal (NFC-e), etiquetas, balança, PIX e relatórios gerenciais em uma única plataforma, com o desktop operando offline e sincronizando com a nuvem.",
      },
      {
        name: "Desafio",
        content:
          "Construir um ecossistema que unisse um aplicativo desktop com integração fiscal real (assinatura de NFC-e, impressora térmica, balança e PIX) e uma plataforma web SaaS que centralizasse a gestão de todos os clientes (inquilinos), oferecesse acesso remoto aos dados e garantisse sincronização confiável entre as duas pontas — preservando a integridade e o histórico dos dados dos clientes em produção.",
      },
      {
        name: "Solução",
        content:
          "Desenvolvi o ecossistema em duas frentes: o aplicativo desktop em Tauri v2 + Rust, com backend 100% em Rust, banco SQLite nativo (rusqlite) e frontend em React 19 + Vite, cobrindo PDV, cadastros, estoque, compras, financeiro, relatórios, curva ABC, contábil e SPED — com stack fiscal em Rust (NFC-e/NFe com certificado A1, impressão térmica ESC/POS, etiquetas, balança, PIX), assinatura via Asaas, backups agendados e segredos protegidos no keyring do sistema; e a plataforma web em Next.js + Prisma + PostgreSQL, multi-tenant, com área do inquilino (dashboard, produtos, vendas, caixas, NFC-e, financeiro, fornecedores, clientes e configurações), API de sincronização (bootstrap, pull, push, reconcile e heartbeat), inteligência fiscal (IBPT, sugestões e auditoria) e painel administrativo com gestão de contas, clientes, contratos, propostas, cobranças e kanban.",
      },
    ],
  },
  {
    name: "Froz Advogados",
    slug: "froz-advogados",
    links: {
      website: "https://frozadvogados.com.br",
    },
    imageURL: [
      {
        name: "Banner do Projeto Froz Advogados",
        href: "/banner-froz.png",
      },
      {
        name: "Hero Page Froz Advogados",
        href: "/hero-froz.png",
      },
      {
        name: "Section 1 Froz Advogados",
        href: "/section1-froz.png",
      },
      {
        name: "Section 2 Froz Advogados",
        href: "/section2-froz.png",
      },
      {
        name: "Section 3 Froz Advogados",
        href: "/section3-froz.png",
      },
      {
        name: "Login Froz Advogados",
        href: "/login-froz.png",
      },
      {
        name: "Dashboard Froz Advogados",
        href: "/dashboard-froz.png",
      },
    ],
    description:
      "Design e desenvolvimento de plataforma full stack de gestão jurídica, com site institucional orientado a conversão, contratação de serviços com pagamento online (PIX e cartão via Asaas), área do cliente com acompanhamento de casos e painel administrativo completo.",
    tag: "Full Stack",
    date: "2026",
    local: "Brasil 🇧🇷",
    duration: "15 Dias",
    techs: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Neon",
      "NextAuth",
      "shadcn/ui",
      "Tailwind CSS",
      "ASAAS",
      "Nodemailer",
      "React Email",
      "Baileys WhatsApp",
      "react-hook-form",
      "Zod",
    ],
    details: [
      {
        name: "Contexto",
        content:
          "O Froz Advogados usa tecnologia para aproximar o escritório dos clientes e digitalizar a jornada de contratação de serviços jurídicos. O app precisava apresentar a atuação em direito civil, trabalhista e empresarial, permitir a contratação online com pagamento e dar transparência ao andamento de cada caso, de forma prática e acessível.",
      },
      {
        name: "Desafio",
        content:
          "Criar uma plataforma completa que comunicasse a proposta do escritório, apresentasse os serviços com clareza e resolvesse o fluxo de ponta a ponta: escolha do serviço, coleta de dados, pagamento, geração de protocolo e acompanhamento — tudo orientado para conversão, com CTAs estratégicos para consulta e atendimento via WhatsApp.",
      },
      {
        name: "Solução",
        content:
          "Desenvolvi uma plataforma full-stack dividida em três frentes: um site institucional visualmente impactante, com interações sutis e seção 'como funciona' que conduzem o usuário até o contato; um fluxo de contratação com formulários dinâmicos por serviço, pagamento via PIX e cartão (Asaas), protocolo automático e confirmações por WhatsApp e e-mail; e uma área do cliente com painel administrativo para acompanhamento de casos via timeline, documentos, mensagens e configurações. Tudo construído com Next.js, TypeScript e Tailwind, reforçando a identidade da marca e o SEO.",
      },
    ],
    // "Sistema completo de gestão para escritório de advocacia desenvolvido com Next.js 16 (Pages Router). Conta com cadastro e autenticação de usuários (cliente/admin), wizard de solicitação de serviços jurídicos com 6 tipos de serviço (consultas, ações judiciais, etc.), painel do cliente com overview de casos, timeline processual e documentos, painel administrativo com CRUD de usuários, gestão de casos, editor de timeline por etapas e sub-etapas, envio de mensagens e gerenciamento de documentos. Integração com ASAAS para pagamentos via Pix e Cartão de Crédito, Nodemailer + react-email para notificações por e-mail, e Baileys WhatsApp para comunicação automatizada. Banco de dados PostgreSQL na Neon com Prisma ORM.",
  },
  {
    name: "Mise en Place",
    slug: "mise-en-place",
    links: {
      website: "https://www.miseenplacemkt.com.br",
    },
    imageURL: [
      {
        name: "Banner Mise en Place",
        href: "/banner-miseenplace.png",
      },
      {
        name: "Hero Mise en Place",
        href: "/hero-mise.png",
      },
      {
        name: "Clientes Mise en Place",
        href: "/clientes-mise.png",
      },
      {
        name: "Serviços Mise en Place",
        href: "/servicos-mise.png",
      },
      {
        name: "Seção Mise en Place",
        href: "/section-mise.png",
      },
      {
        name: "Trabalhos Mise en Place",
        href: "/trabalhos-mise.png",
      },
      {
        name: "Contao e Footer Mise en Place",
        href: "/final-mise.png",
      },
    ],
    description:
      "Design e desenvolvimento de landing page de alta conversão para agência de marketing gastronômico, com conteúdo centralizado em arquivo de dados, micro-interações de scroll reveal, formulário de contato funcional com envio de e-mail e integração com WhatsApp.",
    tag: "Front-end",
    date: "2026",
    local: "Brasil 🇧🇷",
    duration: "8 dias",
    techs: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
      "React Hook Form",
      "Nodemailer",
      "React Email",
    ],
    details: [
      {
        name: "Contexto",
        content:
          "A Mise en Place é uma agência de marketing gastronômico premium, especializada em transformar restaurantes em destinos gastronômicos de sucesso. O site precisava comunicar autoridade no setor de alimentação, apresentar os serviços e gerar oportunidades de consultoria com leads qualificados.",
      },
      {
        name: "Desafio",
        content:
          "Criar uma landing page de alta fidelidade, pixel-perfect em relação ao manual de marca, que comunicasse a proposta da agência com clareza e fosse totalmente orientada para conversão — com CTAs estratégicos para consultoria gratuita, formulário funcional e atendimento direto via WhatsApp.",
      },
      {
        name: "Solução",
        content:
          "Desenvolvi uma landing page em React, Vite e TypeScript, seguindo fielmente a identidade visual da marca (paleta verde, creme e terracota, tipografia Playfair Display + Montserrat). Construí as seções de hero, sobre, serviços, cases, depoimentos e um card de contato com formulário validado via Zod e envio por serverless function na Vercel. Adicionei micro-interações de scroll reveal, carrossel de clientes reais, botão flutuante de WhatsApp e um conteúdo 100% centralizado em um único arquivo de dados, facilitando a atualização sem tocar em código.",
      },
    ],
  },
  {
    name: "Quilombo Santa Rosa",
    slug: "quilombo-santa-rosa",
    links: {
      website: "https://www.quilombosantarosa.com.br/",
    },
    imageURL: [
      {
        name: "Banner Quilombo Santa Rosa",
        href: "/banner-quilombo.png",
      },
      {
        name: "Hero Quilombo",
        href: "/hero-quilombo.png",
      },
      {
        name: "Nossa Missão Quilombo",
        href: "/misso-quilombo.png",
      },
      {
        name: "Ultimas Sections Quilombo",
        href: "/final-quilombo.png",
      },
      {
        name: "Galeria de Fotos Quilombo",
        href: "/galeria-quilombo.png",
      },
      {
        name: "História Quilombo",
        href: "/historia-quilombo.png",
      },
      {
        name: "Loja Quilombo",
        href: "/loja-quilombo.png",
      },
      {
        name: "Contato Quilombo",
        href: "/contato-quilombo.png",
      },
    ],
    description:
      "Design e desenvolvimento de site institucional com AstroJS para uma comunidade quilombola, com galeria interativa, história em formato longform, loja com pedidos via WhatsApp e formulário de contato com envio real de e-mail.",
    tag: "Front-end",
    date: "2026",
    local: "Brasil 🇧🇷",
    duration: "5 Dias",
    techs: ["Astro", "React Email", "Nodemailer"],
    details: [
      {
        name: "Contexto",
        content:
          "O Quilombo Santa Rosa, comunidade em Boa Vista, Roraima, conduz o projeto 'Plantando Sementes, Colhendo Futuros', voltado ao empoderamento de mulheres negras e patrocinado pela Fundação Banco do Brasil. O site precisava contar a história da comunidade com respeito à sua identidade cultural, apresentar o trabalho realizado e aproximar apoiadores e visitantes.",
      },
      {
        name: "Desafio",
        content:
          "Criar um site institucional que comunicasse a força e a ancestralidade do quilombo, apresentasse os pilares do projeto e reforçasse a identidade visual da marca, tudo com aparência premium e editorial — inspirada em portais jornalísticos e organizações sociais de alto nível — e CTAs estratégicos para engajamento, loja e contato.",
      },
      {
        name: "Solução",
        content:
          "Desenvolvi um site completo em AstroJS com cinco páginas: página inicial, galeria, história, loja e contato. Construí uma direção de arte própria com paleta profunda em tons de marrom e dourado, faixas tricolores e tipografia serifada, conduzindo o visitante da emoção da história à ação. Inclui galeria com filtros e lightbox, história em formato longform com drop caps e citações, loja com pedidos via WhatsApp e formulário de contato com envio real de e-mail. Todo o conteúdo é gerenciado por arquivos de dados centralizados, facilitando a manutenção e a escalabilidade futura.",
      },
    ],
  },
];
