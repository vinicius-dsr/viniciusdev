export const projectDetails = [
  {
    name: "",
    slug: "",
    links: { website: "" },
    imageURL: "",
    description: "",
    tag: "",
    date: "",
    techs: ["", ""],
    details: "",
  },

  {
    name: "Froz Advogados",
    slug: "froz-advogados",
    links: {
      website: "https://frozadvogados.com.br",
    },
    imageURL: "/froz.png",
    description:
      "Plataforma full stack de gestão jurídica com formulários de solicitação de serviços, painéis de cliente e administrador, integração de pagamentos ASAAS e notificações automatizadas.",
    tag: "Full Stack",
    date: "2025",
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
      "Baileys WhatsApp",
      "react-hook-form",
      "Zod",
    ],
    details:
      "Sistema completo de gestão para escritório de advocacia desenvolvido com Next.js 16 (Pages Router). Conta com cadastro e autenticação de usuários (cliente/admin), wizard de solicitação de serviços jurídicos com 6 tipos de serviço (consultas, ações judiciais, etc.), painel do cliente com overview de casos, timeline processual e documentos, painel administrativo com CRUD de usuários, gestão de casos, editor de timeline por etapas e sub-etapas, envio de mensagens e gerenciamento de documentos. Integração com ASAAS para pagamentos via Pix e Cartão de Crédito, Nodemailer + react-email para notificações por e-mail, e Baileys WhatsApp para comunicação automatizada. Banco de dados PostgreSQL na Neon com Prisma ORM.",
  },
];
