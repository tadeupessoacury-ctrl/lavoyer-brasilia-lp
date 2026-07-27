export const site = {
  nomeNegocio: process.env.NEXT_PUBLIC_NOME_NEGOCIO ?? "Lavoyer",
  nomeFantasia: process.env.NEXT_PUBLIC_NOME_FANTASIA ?? "Lavoyer",
  segmento: process.env.NEXT_PUBLIC_SEGMENTO ?? "Academia / Calistenia",
  cidadeEstado: process.env.NEXT_PUBLIC_CIDADE_ESTADO ?? "Brasília DF",
  endereco:
    process.env.NEXT_PUBLIC_ENDERECO ??
    "SHCNW SQNW Bloco A, sala 9 - St. Noreste, Brasília - DF, 70688-260",
  horario: process.env.NEXT_PUBLIC_HORARIO ?? "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "5561991677147",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "@lavoyerbrasilia",
  anosMercado: process.env.NEXT_PUBLIC_ANOS_MERCADO ?? "10 anos",
  textoCTA: process.env.NEXT_PUBLIC_TEXTO_CTA ?? "Agendar Aula Experimental",
  diferencial1:
    process.env.NEXT_PUBLIC_DIFERENCIAL_1 ??
    "A maior rede de calistenia da América Latina, com metodologia validada em múltiplas unidades pelo Brasil.",
  diferencial2:
    process.env.NEXT_PUBLIC_DIFERENCIAL_2 ??
    "Modalidade de calistenia com uma metodologia própria e validada",
  diferencial3:
    process.env.NEXT_PUBLIC_DIFERENCIAL_3 ??
    "Graduação em níveis de calistenia, pensados pra todos os perfis de praticantes - do iniciante ao avançado",
  diferencial4:
    process.env.NEXT_PUBLIC_DIFERENCIAL_4 ??
    "Estrutura de calistenia e musculação no mesmo espaço, pra treinar como e quando fizer sentido pra você",
  outrasUnidades:
    process.env.NEXT_PUBLIC_OUTRAS_UNIDADES ??
    "Porto Velho — RO; Belo Horizonte — MG; Nova Lima — MG;",
  publicoAlvo:
    process.env.NEXT_PUBLIC_PUBLICO_ALVO ??
    "Público A+: políticos, aposentados, empresários, herdeiros e pessoas com alta renda. Faixa etária entre 20 e 40 anos.",
  slogan:
    process.env.NEXT_PUBLIC_SLOGAN ??
    "Venha com o que você tem: o seu corpo; Construa-se; Calistenia para todos;",
  servicos:
    process.env.NEXT_PUBLIC_SERVICOS ??
    "Semana experimental; Calistenia; Calistenia Kids; Musculação;",
  exibirPrecos: process.env.NEXT_PUBLIC_EXIBIR_PRECOS === "true",
  servicoDestaque: process.env.NEXT_PUBLIC_SERVICO_DESTAQUE ?? "Calistenia",
} as const;

export const slogans = site.slogan
  .split(";")
  .map((s) => s.trim())
  .filter(Boolean);

export const servicosList = site.servicos
  .split(";")
  .map((s) => s.trim())
  .filter(Boolean);

export const outrasUnidadesList = site.outrasUnidades
  .split(";")
  .map((s) => s.trim())
  .filter(Boolean);

export const whatsappHref = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const defaultWhatsappMessage = `Olá! Vim pelo site da ${site.nomeFantasia} e quero ${site.textoCTA.toLowerCase()}.`;

export const instagramHref = `https://instagram.com/${site.instagram.replace(/^@/, "")}`;
