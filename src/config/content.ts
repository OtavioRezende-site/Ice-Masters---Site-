import { SITE } from './siteConfig';

export interface MarketingContent {
  hero: {
    eyebrow: string;
    headline: {
      part1: string;
      highlight: string;
      part2: string;
    };
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustPills: string[];
  };
  whyChooseUs: {
    kicker: string;
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      desc: string;
      fearAddressed: string;
      badge: string;
    }>;
  };
  process: {
    kicker: string;
    title: string;
    subtitle: string;
    steps: Array<{
      step: string;
      title: string;
      desc: string;
    }>;
    cta: string;
  };
  about: {
    kicker: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
    highlights: string[];
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    callPrompt: string;
    onlinePrompt: string;
  };
  finalCta: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: {
    description: string;
    copyright: string;
    privacyNotice: string;
  };
  thankYou: {
    title: string;
    subtitle: string;
    message: string;
    buttonText: string;
  };
  notFound: {
    title: string;
    subtitle: string;
    message: string;
    buttonText: string;
  };
}

export const CONTENT: MarketingContent = {
  hero: {
    eyebrow: `CONSERTO, MANUTENÇÃO E LIMPEZA DE AR-CONDICIONADO EM ${SITE.baseCity.toUpperCase()}`,
    headline: {
      part1: "SEU AR-CONDICIONADO",
      highlight: "GELANDO FORTE",
      part2: "SEM VAZAMENTOS E SEM SUJEIRA."
    },
    subheadline: `Atendimento técnico no local em ${SITE.serviceAreas.join(', ')}. Diagnóstico preciso para aparelhos que pararam de gelar, estão pingando ou precisam de higienização completa.`,
    ctaPrimary: "SOLICITAR ORÇAMENTO",
    ctaSecondary: `LIGAR: ${SITE.phone.display}`,
    trustPills: [
      "Manutenção e Reparos",
      "Limpeza e Higienização",
      "Serviço no Local",
      "Estimativas On-line"
    ]
  },

  whyChooseUs: {
    kicker: "POR QUE CONTRATAR",
    title: "RESOLVEMOS O PROBLEMA DO SEU APARELHO SEM ENROLAÇÃO",
    subtitle: `Contratar assistência técnica não precisa ser uma dor de cabeça. Na ${SITE.name}, você sabe exatamente o que será feito no seu equipamento.`,
    items: [
      {
        id: "atendimento-direto",
        title: "Atendimento Rápido e Direto",
        desc: "Fale direto com a equipe. Sem intermediários, você explica o defeito e recebe orientação prática de agendamento.",
        fearAddressed: "Sem espera de dias apenas para ter uma resposta.",
        badge: "Sem Burocracia"
      },
      {
        id: "servico-limpo",
        title: "Higienização sem Sujar sua Parede",
        desc: "Lavagem técnica com bolsa coletora e proteção do ambiente. Seu ar-condicionado limpo e seu cômodo impecável.",
        fearAddressed: "Acabe com o medo de sujeira, respingos e bagunça na sua casa.",
        badge: "Cuidado e Capricho"
      },
      {
        id: "diagnostico-correto",
        title: "Reparo no Ponto Certo",
        desc: "Identificamos a causa real do defeito antes de trocar qualquer peça. Avaliação honesta para o aparelho voltar a gelar.",
        fearAddressed: "Evite trocas desnecessárias de peças ou diagnósticos errados.",
        badge: "Técnica Precisa"
      },
      {
        id: "ar-saudavel",
        title: "Limpeza Contra Fungos e Mau Cheiro",
        desc: "Remoção de lodo, ácaros e poeira acumulada na turbina e na serpentina. Ar puro e fluxo de vento destravado.",
        fearAddressed: "Proteja a respiração da sua família contra odores e bactérias.",
        badge: "Saúde e Ar Puro"
      },
      {
        id: "cobertura-local",
        title: "Técnico Próximo de Você",
        desc: `Atendimento focado em ${SITE.serviceAreas.join(', ')}. Agilidade para quem precisa do ar funcionando logo.`,
        fearAddressed: "Chega de técnicos que cobram deslocamentos abusivos ou nunca chegam.",
        badge: "Presença Local"
      },
      {
        id: "pagamento-facil",
        title: "Pagamento Facilitado no Local",
        desc: "Aceitamos cartão de crédito, pagamento por aproximação (NFC), Mastercard e Visa direto na finalização do serviço.",
        fearAddressed: "Transparência total sem surpresas na hora de pagar.",
        badge: "Cartão e NFC"
      }
    ]
  },

  process: {
    kicker: "COMO FUNCIONA",
    title: "SEU AR-CONDICIONADO RESOLVIDO EM 3 PASSOS SIMPLES",
    subtitle: "Do primeiro contato ao serviço concluído no seu endereço, sem complicações.",
    steps: [
      {
        step: "01",
        title: "DIGA O QUE ESTÁ ACONTECENDO",
        desc: "Preencha o formulário rápido de orçamento ou faça uma ligação. Conte qual é o modelo do ar e o sintoma do defeito."
      },
      {
        step: "02",
        title: "ALINHAMOS A VISITA TÉCNICA",
        desc: "Avaliamos as informações do equipamento e combinamos o melhor dia e horário para o atendimento no seu endereço."
      },
      {
        step: "03",
        title: "SERVIÇO EXECUTADO NO LOCAL",
        desc: "O técnico comparece, realiza o reparo ou a limpeza com cuidado e deixa seu ar-condicionado pronto para uso."
      }
    ],
    cta: "SOLICITAR ATENDIMENTO AGORA"
  },

  about: {
    kicker: "SOBRE A EMPRESA",
    title: `ATENDIMENTO ESPECIALIZADO EM CLIMATIZAÇÃO`,
    subtitle: `A ${SITE.name} atua na manutenção, no reparo e na higienização de aparelhos de ar-condicionado residencial e comercial.`,
    paragraphs: [
      `Com base operacional em ${SITE.baseCity} e atendimento ativo em ${SITE.serviceAreas.join(', ')}, nosso trabalho é focado em solucionar falhas térmicas e prolongar a vida útil dos aparelhos de climatização.`,
      `Entendemos o desconforto de um ar-condicionado com vazamento, sem gelar ou soltando poeira no ambiente. Por isso, trabalhamos com procedimentos estruturados, produtos adequados para desinfecção e checagem de parâmetros operacionais.`,
      `Valorizamos a clareza com o cliente: explicamos o que o equipamento necessita e executamos o serviço com capricho e respeito ao seu espaço.`
    ],
    highlights: [
      "Atendimento presencial no local",
      "Estimativas on-line ágeis",
      "Serviços em split e aparelhos de janela",
      `Cobertura em ${SITE.serviceAreas.slice(0, 2).join(' e ')}`
    ]
  },

  contact: {
    kicker: "CONTATO",
    title: `FALE COM A ${SITE.name.toUpperCase()}`,
    subtitle: `Solicite seu orçamento on-line ou faça uma ligação para agendar sua manutenção em ${SITE.serviceAreas.join(', ')}.`,
    callPrompt: "Prefere ligar direto?",
    onlinePrompt: "Envie sua mensagem pelo formulário digital para triagem rápida."
  },

  finalCta: {
    kicker: "NÃO FIQUE NO CALOR",
    title: "SEU AR-CONDICIONADO PAROU DE GELAR OU ESTÁ PINGANDO?",
    subtitle: `Peça um orçamento técnico com a ${SITE.name} e recupere o conforto da sua casa ou empresa com quem entende do assunto.`,
    ctaPrimary: "SOLICITAR ORÇAMENTO",
    ctaSecondary: `LIGAR: ${SITE.phone.display}`
  },

  footer: {
    description: `${SITE.shortSlogan} Atendimento profissional em ${SITE.serviceAreas.join(', ')}.`,
    copyright: `© ${new Date().getFullYear()} ${SITE.legalName || SITE.name}. Todos os direitos reservados.`,
    privacyNotice: "Seus dados enviados pelo formulário são utilizados apenas para o contato técnico e agendamento solicitado."
  },

  thankYou: {
    title: "SOLICITAÇÃO RECEBIDA COM SUCESSO!",
    subtitle: "Agradecemos o seu contato com a nossa equipe.",
    message: `Recebemos suas informações. Nossa equipe técnica avaliará os detalhes do seu equipamento e entrará em contato o mais breve possível para alinhar o atendimento em ${SITE.baseCity} e região.`,
    buttonText: "VOLTAR AO INÍCIO"
  },

  notFound: {
    title: "PÁGINA NÃO ENCONTRADA (404)",
    subtitle: "O link que você tentou acessar não está disponível.",
    message: "A página pode ter sido movida ou o endereço foi digitado incorretamente. Acesse a página principal da empresa para solicitar seu atendimento.",
    buttonText: "IR PARA O INÍCIO"
  }
};
