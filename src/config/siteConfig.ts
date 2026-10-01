export interface BusinessHours {
  day: string;
  hours: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc?: string;
  category: 'primary' | 'secondary';
  image: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  rating: number;
  highlight?: string;
  text: string;
  date?: string;
  verified?: boolean;
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  symptom: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'MANUTENÇÕES' | 'LIMPEZA' | 'REPAROS' | 'CLIMATIZAÇÃO' | 'EQUIPAMENTOS';
  description: string;
  tag: string;
  image: string;
}

export interface SiteConfig {
  domain?: string;
  name: string;
  legalName?: string;
  niche: string;
  shortSlogan: string;
  phone: {
    display: string;
    international: string;
    raw: string;
    telLink: string;
  };
  email?: string;
  address?: {
    full: string;
    street?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
  };
  showAddress: boolean;
  baseCity: string;
  serviceAreas: string[];
  hours: {
    schedule: BusinessHours[];
    readableText: string;
    onlineHours?: string;
  };
  proof: {
    yearsOfExperience?: number;
    license?: string;
    insurance?: string;
    projectsCompleted?: number;
    googleRating?: {
      stars: number;
      text: string;
      reviewCount?: number;
    };
    realDifferentials: string[];
    customerFeedbackThemes: string[];
    testimonials?: TestimonialItem[];
  };
  offer?: {
    title: string;
    description: string;
  };
  services: ServiceItem[];
  commonProblems: ProblemItem[];
  galleryItems: GalleryItem[];
  links: {
    googleBusiness?: string;
    googleMapsUrl?: string;
    googleReviewUrl?: string;
    googleMapsEmbedUrl?: string;
    facebookUrl?: string;
    instagramUrl?: string;
    instagramHandle?: string;
    whatsappUrl?: string;
  };
  integrations: {
    ghlFormId: string;
    ghlFormUrl: string;
    ghlChatWidgetId: string;
    ghlLocationId?: string;
    ghlServiceCustomFieldId?: string;
    ghlMessageCustomFieldId?: string;
  };
}

export const SITE: SiteConfig = {
  domain: "https://icemasters.com.br", // Conectar domínio oficial do cliente
  name: "Ice Masters Refrigeração e Climatização",
  legalName: undefined, // PRECISA CONFIRMAR
  niche: "Serviço de conserto, manutenção e limpeza de aparelhos de ar-condicionado / Refrigeração e Climatização",
  shortSlogan: "Soluções em refrigeração e climatização com atendimento profissional e especializado.",
  
  phone: {
    display: "(21) 98054-5569",
    international: "+5521980545569",
    raw: "21980545569",
    telLink: "tel:+5521980545569"
  },
  
  email: undefined, // PRECISA CONFIRMAR
  
  address: {
    full: "Estr. de Itaitindiba, 241 - Santa Izabel, São Gonçalo - RJ, 24738-795",
    street: "Estr. de Itaitindiba, 241",
    neighborhood: "Santa Izabel",
    city: "São Gonçalo",
    state: "RJ",
    zip: "24738-795",
    country: "Brasil"
  },
  showAddress: false, // PRECISA CONFIRMAR
  
  baseCity: "São Gonçalo, RJ",
  serviceAreas: [
    "São Gonçalo, RJ",
    "Maricá, RJ",
    "Proximidades de Maricá"
  ],
  
  hours: {
    schedule: [
      { day: "Segunda-feira", hours: "09:00–17:00" },
      { day: "Terça-feira", hours: "08:00–18:00" },
      { day: "Quarta-feira", hours: "08:00–18:00" },
      { day: "Quinta-feira", hours: "08:00–18:00" },
      { day: "Sexta-feira", hours: "08:00–18:00" },
      { day: "Sábado", hours: "09:00–15:00" },
      { day: "Domingo", hours: "Fechado" }
    ],
    readableText: "Seg 09:00–17:00 | Ter a Sex 08:00–18:00 | Sáb 09:00–15:00",
    onlineHours: "09:00–20:00"
  },
  
  // PROVA CONDICIONAL
  // Campos com "PRECISA CONFIRMAR" ou "NENHUM" são deixados como undefined
  proof: {
    yearsOfExperience: undefined, // PRECISA CONFIRMAR -> NENHUM
    license: undefined, // PRECISA CONFIRMAR -> NENHUM
    insurance: undefined, // PRECISA CONFIRMAR -> NENHUM
    projectsCompleted: undefined, // NENHUM
    googleRating: {
      stars: 5.0,
      text: "5,0 estrelas",
      reviewCount: 8
    },
    realDifferentials: [
      "Estimativas on-line",
      "Serviços no local",
      "Serviços de reparos",
      "Aceita cartão de crédito",
      "Aceita pagamentos por NFC",
      "Aceita Mastercard",
      "Aceita Visa"
    ],
    customerFeedbackThemes: [
      "Atendimento profissional",
      "Resposta rápida",
      "Atenção aos detalhes",
      "Capricho no serviço",
      "Resolução de problemas",
      "Limpeza cuidadosa",
      "Preço justo"
    ],
    // Depoimentos individuais fixos removidos conforme regra 3 (não havia na ficha)
    testimonials: undefined
  },
  
  offer: undefined, // NENHUM / PRECISA CONFIRMAR
  
  // SERVIÇOS DA FICHA
  services: [
    {
      id: "manutencao",
      title: "Manutenção de ar-condicionado",
      shortDesc: "Manutenção e assistência técnica em aparelhos de ar-condicionado.",
      fullDesc: "Identificação precisa de anomalias operacionais, checagem de pressões, parâmetros térmicos e testes elétricos para que seu aparelho opere com eficiência e consumo equilibrado.",
      category: "primary",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "reparo-sistema",
      title: "Reparo de sistema de ar-condicionado",
      shortDesc: "Diagnóstico e reparo de problemas em sistemas de climatização.",
      fullDesc: "Resolução de vazamentos de fluido, falhas em compressores, substituição de sensores, capacitores e placas eletrônicas com diagnóstico criterioso.",
      category: "primary",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "limpeza-geral",
      title: "Limpeza",
      shortDesc: "Serviços de limpeza relacionados aos equipamentos atendidos pela empresa.",
      fullDesc: "Remoção de resíduos, desobstrução de dutos e calhas, assegurando ambiente limpo e fluxo de ar contínuo.",
      category: "primary",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "limpeza-higienizacao",
      title: "Limpeza de ar-condicionado",
      shortDesc: "Limpeza e higienização de aparelhos de ar-condicionado.",
      fullDesc: "Higienização técnica da serpentina evaporadora, turbina, bandeja de dreno e filtros, eliminando poeira acumulada, ácaros e fungos prejudiciais à qualidade do ar.",
      category: "primary",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "preventiva",
      title: "Manutenção preventiva de ar-condicionado",
      shortDesc: "Manutenção preventiva para ajudar a preservar o funcionamento dos equipamentos.",
      fullDesc: "Acompanhamento programado para aumentar a durabilidade do ar-condicionado, manter o rendimento térmico constante e evitar paradas inesperadas.",
      category: "secondary",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "emergencia",
      title: "Serviço de emergência",
      shortDesc: "Atendimento para problemas que exigem assistência com maior urgência.",
      fullDesc: "Suporte dedicado para contingências em ambientes que não podem ficar sem climatização.",
      category: "secondary",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "gerais",
      title: "Serviços de ar-condicionado",
      shortDesc: "Serviços gerais relacionados à climatização e aparelhos de ar-condicionado.",
      fullDesc: "Soluções completas para instalação, revisão técnica e balanceamento de equipamentos residenciais e comerciais.",
      category: "secondary",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "portatil",
      title: "Serviços para ar-condicionado portátil",
      shortDesc: "Atendimento e serviços relacionados a equipamentos de ar-condicionado portátil.",
      fullDesc: "Limpeza técnica interna, desobstrução de dutos e revisão de componentes de modelos portáteis residenciais e comerciais.",
      category: "secondary",
      image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ventilacao",
      title: "Sistema de ventilação",
      shortDesc: "Serviços relacionados a sistemas de ventilação.",
      fullDesc: "Revisão e manutenção técnica em dutos de ventilação, exaustores e circulação de ar para ambientes residenciais e comerciais.",
      category: "secondary",
      image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "troca-filtro",
      title: "Troca de filtro de ar-condicionado",
      shortDesc: "Substituição de filtros de equipamentos de ar-condicionado.",
      fullDesc: "Troca de elementos filtrantes convencionais ou especiais para assegurar a passagem livre de ar limpo e saudável.",
      category: "secondary",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "eletrica",
      title: "Manutenção elétrica do ar-condicionado",
      shortDesc: "Diagnóstico e manutenção de componentes elétricos dos sistemas de ar-condicionado.",
      fullDesc: "Verificação de fiação, contatores, disjuntores, bornes e aterramento para proteção e estabilidade elétrica do aparelho.",
      category: "secondary",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "janela-split",
      title: "Ar-condicionado de janela e split",
      shortDesc: "Serviços em aparelhos de ar-condicionado de janela e modelos split.",
      fullDesc: "Atendimento especializado abrangendo desde aparelhos convencionais de janela (ACJ) até sistemas split Hi-Wall e Inverter.",
      category: "secondary",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    }
  ],

  // Problemas mapeados para diagnóstico rápido
  commonProblems: [
    {
      id: "nao-gela",
      title: "Não está gelando",
      symptom: "O aparelho liga, mas o ambiente continua quente",
      description: "Pode indicar necessidade de limpeza na serpentina, revisão de fluido refrigerante ou falha no compressor."
    },
    {
      id: "pingando",
      title: "Pingando água",
      symptom: "Vazamento interno escorrendo pela parede",
      description: "Geralmente associado a dreno entupido por lodo ou calha desnivelada que necessita de higienização técnica."
    },
    {
      id: "mau-cheiro",
      title: "Mau cheiro",
      symptom: "Odor desagradável ao ligar a ventilação",
      description: "Acúmulo de fungos, bactérias e umidade na turbina evaporadora que exige limpeza química e sanitização."
    },
    {
      id: "ar-fraco",
      title: "Ar fraco",
      symptom: "Vento saindo com pouca força mesmo na velocidade máxima",
      description: "Filtros e aletas obstruídos por poeira espessa, impedindo o fluxo normal de ar pelo ambiente."
    },
    {
      id: "barulho-anormal",
      title: "Barulho fora do normal",
      symptom: "Ruídos de vibração, estalos ou zumbido no motor",
      description: "Desbalanceamento de turbina, rolamentos desgastados ou fixação frouxa da unidade interna ou externa."
    },
    {
      id: "filtro-sujo",
      title: "Filtro muito sujo",
      symptom: "Camada visível de poeira e penugem no filtro frontal",
      description: "Reduz drasticamente o rendimento térmico e força o equipamento a consumir muito mais energia elétrica."
    },
    {
      id: "para-funcionar",
      title: "Para de funcionar",
      symptom: "Desliga sozinho após alguns minutos de funcionamento",
      description: "Pode ser desarme por superaquecimento do compressor, falha de sensor térmico ou oscilação na rede elétrica."
    },
    {
      id: "irregular",
      title: "Funcionamento irregular",
      symptom: "Oscila entre gelar e ventilar aleatoriamente",
      description: "Possível falha na placa eletrônica, capacitor de partida enfraquecido ou termostato descalibrado."
    },
    {
      id: "tempo-sem-limpeza",
      title: "Muito tempo sem limpeza",
      symptom: "Mais de 6 meses sem nenhuma manutenção interna",
      description: "A sujeira invisível acumulada reduz a vida útil do equipamento e compromete a respiração de toda a família."
    },
    {
      id: "precisa-manutencao",
      title: "Precisa de manutenção",
      symptom: "Equipamento necessitando de revisão geral",
      description: "Avaliação técnica completa para renovar o desempenho e garantir ar gelado e seguro."
    }
  ],

  // Galeria de registros visuais
  galleryItems: [
    {
      id: "gal-1",
      title: "Higienização Profunda de Evaporadora Split",
      category: "LIMPEZA",
      description: "Lavagem técnica com bolsa coletora impermeável, aplicação de bactericida e desinfecção de serpentina.",
      tag: "Limpeza Técnica",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-2",
      title: "Diagnóstico de Pressão com Manifold Digital",
      category: "MANUTENÇÕES",
      description: "Verificação minuciosa de pressões de trabalho, superaquecimento e fluido refrigerante.",
      tag: "Manutenção Preventiva",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-3",
      title: "Substituição de Capacitor e Ajuste de Bornes",
      category: "REPAROS",
      description: "Correção de componente elétrico na condensadora para restauração imediata do ciclo térmico.",
      tag: "Reparo Elétrico",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-4",
      title: "Revisão e Limpeza de Turbina de Ventilação",
      category: "CLIMATIZAÇÃO",
      description: "Remoção de película de poeira e fungos para fluxo de vento 100% desimpedido e ar saudável.",
      tag: "Qualidade do Ar",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-5",
      title: "Manutenção em Unidade Split Inverter",
      category: "MANUTENÇÕES",
      description: "Checagem de consumo de corrente, limpeza de drenagem e calibração de sensores eletrônicos.",
      tag: "Inverter",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-6",
      title: "Desmontagem Completa para Sanitização",
      category: "EQUIPAMENTOS",
      description: "Cuidado cuidadoso com a carcaça plástica, calhas de dreno e aletas da unidade evaporadora.",
      tag: "Capricho no Serviço",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // LINKS
  links: {
    googleBusiness: "Perfil Ice Masters Refrigeração e Climatização no Google",
    googleMapsUrl: "https://www.google.com/maps/place/Ice+Masters+Refrigera%C3%A7%C3%A3o+e+Climatiza%C3%A7%C3%A3o/",
    googleReviewUrl: undefined, // PRECISA OBTER
    googleMapsEmbedUrl: undefined, // PRECISA OBTER
    facebookUrl: "https://www.facebook.com/profile.php?id=61575168655767",
    instagramUrl: "https://www.instagram.com/icemastersrefrigeracao",
    instagramHandle: "@icemastersrefrigeracao",
    whatsappUrl: "https://wa.me/5521980545569"
  },

  // INTEGRAÇÕES
  integrations: {
    ghlFormId: "V2getowmokHr4p59Ke9V",
    ghlFormUrl: "https://api.leadconnectorhq.com/widget/form/V2getowmokHr4p59Ke9V",
    ghlChatWidgetId: "6abe750893bdc8881e8ca6ba",
    ghlLocationId: "LOCATION_ID_DA_SUBCONTA", // Insira o Location ID da sua subconta GHL
    ghlServiceCustomFieldId: "service_requested", // ID do campo personalizado de Serviço no GHL
    ghlMessageCustomFieldId: "message", // ID do campo personalizado de Mensagem no GHL
  }
};
