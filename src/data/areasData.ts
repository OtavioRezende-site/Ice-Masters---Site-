export interface LocalObservation {
  title: string;
  description: string;
}

export interface AreaData {
  slug: string;
  cityName: string;
  state: string;
  isBase: boolean;
  heroTitle: string;
  heroSubtitle: string;
  introParagraph: string;
  localObservations: LocalObservation[];
  finalCall: string;
  metaTitle: string;
  metaDescription: string;
}

export const AREAS_DATA: AreaData[] = [
  {
    slug: "sao-goncalo",
    cityName: "São Gonçalo",
    state: "RJ",
    isBase: true,
    heroTitle: "Manutenção e Limpeza de Ar-Condicionado em São Gonçalo RJ",
    heroSubtitle: "Base operacional da empresa com atendimento técnico no local para residências, condomínios e estabelecimentos comerciais.",
    introParagraph: "São Gonçalo é a cidade-base da nossa empresa. Por estarmos sediados no município, nossos técnicos contam com logística ágil para deslocamento até o seu endereço, realizando diagnósticos, higienizações detalhadas e reparos de ar-condicionado com pontualidade e transparência.",
    localObservations: [
      {
        title: "Centro Urbano com Alta Demanda Térmica",
        description: "Localizada no Leste Fluminense, São Gonçalo registra verões intensos e calor prolongado na maior parte do ano, tornando o bom funcionamento do ar-condicionado indispensável para a rotina diária."
      },
      {
        title: "Diversidade de Imóveis e Aparelhos",
        description: "Atendemos residências tradicionais, prédios de apartamentos e comércios locais, prestando serviços tanto em aparelhos de janela quanto em splits Hi-Wall e sistemas Inverter."
      },
      {
        title: "Base Operacional com Atendimento no Local",
        description: "Como a sede da empresa fica no município, o atendimento é estruturado com facilidade de agendamento e pagamento facilitado por cartão de crédito e NFC no próprio local."
      }
    ],
    finalCall: "Mora ou tem comércio em São Gonçalo? Solicite seu orçamento de ar-condicionado com a base técnica local.",
    metaTitle: "Ar-Condicionado em São Gonçalo RJ | Manutenção e Limpeza",
    metaDescription: "Conserto, manutenção e limpeza de ar-condicionado em São Gonçalo RJ. Atendimento técnico no local com base na cidade. Peça seu orçamento."
  },

  {
    slug: "marica",
    cityName: "Maricá",
    state: "RJ",
    isBase: false,
    heroTitle: "Manutenção e Higienização de Ar-Condicionado em Maricá RJ",
    heroSubtitle: "Atendimento técnico presencial para residências, casas de condomínio e empresas na região de Maricá.",
    introParagraph: "Maricá é uma das principais cidades atendidas pela nossa equipe. Com forte expansão residencial e comercial entre o litoral e as serras costeiras, oferecemos cobertura técnica completa para quem busca manutenção preventiva, conserto e higienização profunda de climatização.",
    localObservations: [
      {
        title: "Influência do Clima Litorâneo e Maresia",
        description: "Por ser uma cidade costeira com lagoas e praias, a umidade e a maresia exigem cuidados especiais nas serpentinas e conexões elétricas externas para evitar oxidação e perda de rendimento."
      },
      {
        title: "Predomínio de Casas e Imóveis Espaçosos",
        description: "O perfil imobiliário de Maricá conta com grande volume de casas térreas e condomínios, demandando manutenção equilibrada para aparelhos de maior capacidade em salas e quartos amplos."
      },
      {
        title: "Conexão Direta com a Cidade-Base",
        description: "O fácil acesso rodoviário a partir de São Gonçalo permite que nossa equipe faça atendimentos programados com eficiência e pontualidade no município."
      }
    ],
    finalCall: "Seu ar-condicionado em Maricá parou de gelar ou está precisando de limpeza? Agende sua visita técnica.",
    metaTitle: "Ar-Condicionado em Maricá RJ | Reparo e Higienização",
    metaDescription: "Assistência técnica de ar-condicionado em Maricá RJ. Manutenção, reparo de vazamentos e limpeza com bolsa coletora no seu endereço."
  },

  {
    slug: "proximidades-marica",
    cityName: "Proximidades de Maricá",
    state: "RJ",
    isBase: false,
    heroTitle: "Atendimento Técnico de Ar-Condicionado nas Proximidades de Maricá",
    heroSubtitle: "Serviços no local para distritos, áreas vizinhas e acessos entre São Gonçalo e a região de Maricá.",
    introParagraph: "Além do núcleo urbano de Maricá e de São Gonçalo, nossa empresa estende seus serviços de climatização para as áreas próximas e corredores de ligação regional, levando padrão profissional diretamente até o imóvel do cliente.",
    localObservations: [
      {
        title: "Região em Crescimento Residencial",
        description: "As zonas próximas entre a Região Metropolitana e a Região dos Lagos reúnem bairros residenciais em constante desenvolvimento, com alta presença de sistemas split residenciais."
      },
      {
        title: "Variações de Temperatura e Poeira",
        description: "Áreas com obras vizinhas e vegetação demandam trocas frequentes de filtros e limpeza de serpentinas para manter o ar limpo e livre de alérgenos."
      },
      {
        title: "Atendimento Planejado no Local",
        description: "Rotas de atendimento organizadas para atender chamados técnicos com rapidez, sem que o cliente precise sair de casa."
      }
    ],
    finalCall: "Está localizado nas proximidades de Maricá e precisa de assistência no ar-condicionado? Fale conosco.",
    metaTitle: "Ar-Condicionado nas Proximidades de Maricá RJ | Serviços",
    metaDescription: "Manutenção e higienização de ar-condicionado nas áreas próximas de Maricá e São Gonçalo RJ. Atendimento técnico presencial com visita agendada."
  }
];

export const getAreaBySlug = (slug: string): AreaData | undefined => {
  return AREAS_DATA.find((a) => a.slug === slug);
};
