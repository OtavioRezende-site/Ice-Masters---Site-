export interface ServiceStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface DetailedService {
  slug: string;
  name: string;
  shortMenuDesc: string;
  image: string;
  heroTitle: string;
  heroSubtitle: string;
  whatsIncluded: string[];
  benefits: Array<{
    title: string;
    description: string;
  }>;
  process: ServiceStep[];
  faqs: ServiceFAQ[];
  finalCall: string;
  relatedServices: string[];
  metaTitle: string;
  metaDescription: string;
}

export const SERVICES_DATA: DetailedService[] = [
  {
    slug: "air-conditioning-maintenance",
    name: "Manutenção de ar-condicionado",
    shortMenuDesc: "Manutenção e assistência técnica em aparelhos de ar-condicionado.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    heroTitle: "Manutenção Técnica de Ar-Condicionado no Local",
    heroSubtitle: "Identificação de falhas, correção operacional e recuperação do rendimento do seu aparelho.",
    whatsIncluded: [
      "Checagem das pressões de trabalho e fluido refrigerante",
      "Inspeção de conexões elétricas e bornes de alimentação",
      "Verificação do consumo de corrente do compressor",
      "Análise de ruídos anormais e fixação dos suportes",
      "Teste completo do ciclo de refrigeração no local",
      "Orientações técnicas para uso adequado no dia a dia"
    ],
    benefits: [
      {
        title: "Ar Gelando com Eficiência",
        description: "Restaura o fluxo térmico correto para que o ambiente atinja a temperatura desejada."
      },
      {
        title: "Economia no Consumo de Energia",
        description: "Equipamento regulado não sobrecarrega o compressor nem consome eletricidade excessiva."
      },
      {
        title: "Prevenção de Paradas Repentinas",
        description: "Diagnóstico preventivo para evitar que o aparelho pare nos dias mais quentes do ano."
      }
    ],
    process: [
      {
        step: "01",
        title: "Solicitação e Triagem",
        description: "Você entra em contato, descreve o defeito e agendamos a visita técnica no seu endereço."
      },
      {
        step: "02",
        title: "Inspeção Diagnóstica",
        description: "O técnico verifica pressões, componentes elétricos e o ciclo de refrigeração."
      },
      {
        step: "03",
        title: "Execução da Manutenção",
        description: "Correções operacionais e alinhamento dos parâmetros de funcionamento no local."
      },
      {
        step: "04",
        title: "Teste Operacional Final",
        description: "Comprovação da temperatura de saída e entrega do aparelho pronto para uso."
      }
    ],
    faqs: [
      {
        question: "Quando devo chamar a manutenção para o ar-condicionado?",
        answer: "Quando notar que o aparelho demora para gelar, desliga repentinamente, faz barulhos atípicos ou quando estiver há mais de seis meses sem revisão."
      },
      {
        question: "A manutenção é realizada no próprio local?",
        answer: "Sim, os atendimentos técnicos são prestados presencialmente no endereço do cliente em São Gonçalo, Maricá e proximidades."
      }
    ],
    finalCall: "Seu ar-condicionado não está funcionando como deveria? Solicite sua manutenção técnica com a nossa equipe.",
    relatedServices: [
      "air-conditioning-repair",
      "preventive-maintenance",
      "air-conditioning-deep-cleaning"
    ],
    metaTitle: "Manutenção de Ar-Condicionado | Assistência Técnica",
    metaDescription: "Manutenção técnica de ar-condicionado no local em São Gonçalo e Maricá. Diagnóstico preciso e correção de falhas para o ar voltar a gelar."
  },

  {
    slug: "air-conditioning-repair",
    name: "Reparo de sistema de ar-condicionado",
    shortMenuDesc: "Diagnóstico e reparo de problemas em sistemas de climatização.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    heroTitle: "Reparo Especializado de Sistemas de Ar-Condicionado",
    heroSubtitle: "Conserto de vazamentos, falhas eletrônicas e componentes inoperantes de climatização.",
    whatsIncluded: [
      "Localização e correção de vazamentos no circuito de gás",
      "Substituição de capacitores e relés defeituosos",
      "Reparo ou troca de sensores de temperatura e degelo",
      "Desobstrução e conserto de dreno com vazamento de água",
      "Testes de continuidade em enrolamentos e ventiladores",
      "Ajustes de carga de fluido refrigerante conforme especificação"
    ],
    benefits: [
      {
        title: "Conserto no Ponto Certo",
        description: "Identificamos a causa real do defeito antes de qualquer substituição de peças."
      },
      {
        title: "Fim dos Pingos e Vazamentos",
        description: "Elimina a água escorrendo pela parede e protege móveis e pinturas do cômodo."
      },
      {
        title: "Restauração do Ciclo de Refrigeração",
        description: "Recupera a capacidade do sistema de gerar ar gelado de forma contínua e estável."
      }
    ],
    process: [
      {
        step: "01",
        title: "Contato e Agendamento",
        description: "Informe o sintoma (pingando, não liga, estalos) e alinhamos a visita com agilidade."
      },
      {
        step: "02",
        title: "Identificação da Falha",
        description: "Testes pontuais com ferramentas de medição para achar o componente com defeito."
      },
      {
        step: "03",
        title: "Substituição e Reparo",
        description: "Conserto da parte danificada e reconexão correta dos circuitos técnicos."
      },
      {
        step: "04",
        title: "Verificação de Desempenho",
        description: "Ligamos o aparelho para confirmar que o problema foi totalmente solucionado."
      }
    ],
    faqs: [
      {
        question: "Por que o ar-condicionado começa a pingar água para dentro?",
        answer: "Geralmente é consequência de dreno entupido por sujeira/lodo acumulado ou desnivelamento da bandeja interna."
      },
      {
        question: "Vale a pena consertar um aparelho que parou de gelar?",
        answer: "Na maioria das vezes a causa é simples, como capacitor fraco ou vazamento pontual de fluido, tendo custo bem menor que comprar outro aparelho."
      }
    ],
    finalCall: "Precisa de reparo no ar-condicionado? Fale conosco para agendar o conserto do seu equipamento.",
    relatedServices: [
      "air-conditioning-maintenance",
      "electrical-hvac-maintenance",
      "emergency-service"
    ],
    metaTitle: "Reparo de Ar-Condicionado | Conserto no Local",
    metaDescription: "Conserto e reparo de sistema de ar-condicionado em São Gonçalo e Maricá. Correção de vazamentos de água, peças elétricas e falhas de refrigeração."
  },

  {
    slug: "equipment-cleaning",
    name: "Limpeza",
    shortMenuDesc: "Serviços de limpeza relacionados aos equipamentos atendidos.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    heroTitle: "Serviço de Limpeza de Equipamentos de Climatização",
    heroSubtitle: "Remoção de resíduos e impurezas acumuladas nos aparelhos para manter a circulação livre.",
    whatsIncluded: [
      "Remoção de poeira e fuligem da estrutura externa",
      "Limpeza mecânica das aletas e grades de insuflamento",
      "Desobstrução de calhas e canais de escoamento",
      "Limpeza dos filtros de ar removíveis",
      "Remoção de partículas que travam a ventilação",
      "Higienização da bandeja coletora de condensado"
    ],
    benefits: [
      {
        title: "Circulação Desimpedida",
        description: "O vento flui sem barreiras de pó, melhorando o alcance térmico no cômodo."
      },
      {
        title: "Menor Esforço do Motor",
        description: "Equipamento limpo trabalha sem sobrecarga mecânica na hélice e na turbina."
      },
      {
        title: "Ambiente Mais Agradável",
        description: "Reduz a dispersão de poeira visível e penugem no ar que você respira."
      }
    ],
    process: [
      {
        step: "01",
        title: "Avaliação do Estado",
        description: "Verificamos o nível de acúmulo de sujeira e preparamos a área de trabalho."
      },
      {
        step: "02",
        title: "Desmontagem Parcial Segura",
        description: "Abertura frontal das tampas e filtros sem danificar travas plásticas."
      },
      {
        step: "03",
        title: "Limpeza Cuidadosa",
        description: "Lavagem e aspiração das peças com produtos apropriados para climatização."
      },
      {
        step: "04",
        title: "Montagem e Teste",
        description: "Encaixe dos componentes e checagem do fluxo de ar desobstruído."
      }
    ],
    faqs: [
      {
        question: "Qual a diferença entre limpeza simples e higienização profunda?",
        answer: "A limpeza foca na desobstrução de filtros e partes externas, enquanto a higienização profunda inclui lavagem química bactericida da serpentina e turbina interna."
      },
      {
        question: "De quanto em quanto tempo devo limpar o aparelho?",
        answer: "Em ambientes residenciais, a cada 3 a 6 meses; em ambientes comerciais com circulação intensa, a cada 1 a 2 meses."
      }
    ],
    finalCall: "Seu equipamento está acumulando poeira? Agende uma limpeza técnica com a nossa equipe.",
    relatedServices: [
      "air-conditioning-deep-cleaning",
      "air-filter-replacement",
      "preventive-maintenance"
    ],
    metaTitle: "Limpeza de Equipamentos de Climatização | Local",
    metaDescription: "Serviços de limpeza para aparelhos de climatização em São Gonçalo e Maricá. Desobstrução de pó e cuidados para melhorar o rendimento."
  },

  {
    slug: "air-conditioning-deep-cleaning",
    name: "Limpeza de ar-condicionado",
    shortMenuDesc: "Limpeza e higienização de aparelhos de ar-condicionado.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    heroTitle: "Limpeza e Higienização Completa de Ar-Condicionado",
    heroSubtitle: "Lavagem técnica com bolsa coletora impermeável para eliminar ácaros, fungos e mau cheiro.",
    whatsIncluded: [
      "Instalação de bolsa coletora de lavagem para proteger paredes e móveis",
      "Aplicação de bactericida biodegradável para higienização profunda",
      "Lavagem sob pressão controlada da serpentina de alumínio e cobre",
      "Limpeza detalhada da turbina tangencial de ventilação",
      "Sanitização completa da calha de dreno e mangueira de saída",
      "Secagem e aplicação de neutralizador de odores"
    ],
    benefits: [
      {
        title: "Zero Sujeira no seu Cômodo",
        description: "Procedimento seguro com bolsa impermeável sem respingar nas paredes ou chão."
      },
      {
        title: "Fim do Mau Cheiro",
        description: "Elimina colônias de mofo e bactérias que causam aquele cheiro desagradável ao ligar."
      },
      {
        title: "Vento Forte e Gelado",
        description: "Aletas desobstruídas aumentam a vazão de ar e aceleram a refrigeração do quarto ou sala."
      }
    ],
    process: [
      {
        step: "01",
        title: "Proteção do Local",
        description: "Isolamento da parede e montagem da bolsa coletora hermética sob a evaporadora."
      },
      {
        step: "02",
        title: "Aplicação do Produto",
        description: "Pulverização de produto limpador específico para serpentinas de climatização."
      },
      {
        step: "03",
        title: "Enxágue e Desinfecção",
        description: "Remoção de todo o lodo e sujeira escorrendo direto para o reservatório seguro."
      },
      {
        step: "04",
        title: "Remontagem e Finalização",
        description: "Recolocação dos filtros higienizados e teste de vazão e odor do vento."
      }
    ],
    faqs: [
      {
        question: "Precisa tirar o ar-condicionado da parede para higienizar?",
        answer: "Não. A higienização é feita no próprio local utilizando a bolsa coletora técnica impermeável, sem quebrar ou desinstalar tubulações."
      },
      {
        question: "Quanto tempo dura o procedimento de limpeza profunda?",
        answer: "Normalmente entre 45 minutos a 1 hora e meia por aparelho, dependendo do estado de acúmulo de sujeira."
      }
    ],
    finalCall: "Seu ar-condicionado está soltando cheiro ruim ou com vento fraco? Peça sua higienização técnica.",
    relatedServices: [
      "air-filter-replacement",
      "preventive-maintenance",
      "equipment-cleaning"
    ],
    metaTitle: "Limpeza de Ar-Condicionado e Higienização | Local",
    metaDescription: "Limpeza e higienização de ar-condicionado com bolsa coletora em São Gonçalo e Maricá. Elimine fungos, ácaros e odores com serviço no local."
  },

  {
    slug: "preventive-maintenance",
    name: "Manutenção preventiva de ar-condicionado",
    shortMenuDesc: "Manutenção preventiva para ajudar a preservar o funcionamento.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    heroTitle: "Manutenção Preventiva de Ar-Condicionado",
    heroSubtitle: "Revisão periódica para prolongar a vida útil do aparelho e economizar na conta de luz.",
    whatsIncluded: [
      "Aferição do superaquecimento e pressões de gás com manômetros",
      "Medição da corrente elétrica do compressor e ventilador",
      "Higienização periódica de filtros e aletas de troca de calor",
      "Checagem do estado dos isolamentos térmicos das tubulações",
      "Inspeção e reaperto dos bornes da fiação elétrica",
      "Relatório verbal com orientações de uso e conservação"
    ],
    benefits: [
      {
        title: "Mais Anos de Vida Útil",
        description: "Evita o desgaste precoce de componentes caros como compressores e motores."
      },
      {
        title: "Menos Gastos com Reparos",
        description: "Pequenos ajustes periódicos impedem que problemas simples virem quebras custosas."
      },
      {
        title: "Eficiência Térmica Constante",
        description: "Garante que o aparelho gele sempre na potência correta com o menor consumo elétrico."
      }
    ],
    process: [
      {
        step: "01",
        title: "Agendamento Programado",
        description: "Definimos a frequência ideal para o seu perfil residencial ou comercial."
      },
      {
        step: "02",
        title: "Check-up Técnico Completo",
        description: "Varredura elétrica, mecânica e de fluídos com instrumentos especializados."
      },
      {
        step: "03",
        title: "Ajustes e Higienização",
        description: "Limpeza dos filtros, reapertos de contatos e calibração de parâmetros."
      },
      {
        step: "04",
        title: "Certificação de Funcionamento",
        description: "Aparelho liberado para operar em sua melhor performance de refrigeração."
      }
    ],
    faqs: [
      {
        question: "Qual a frequência recomendada para manutenção preventiva?",
        answer: "Em residências, pelo menos uma vez a cada 6 meses. Em consultórios, lojas e escritórios, revisões a cada 1 a 3 meses são recomendadas."
      },
      {
        question: "A preventiva realmente reduz a conta de energia?",
        answer: "Sim. Um ar-condicionado sujo ou com pressão desregulada precisa forçar o compressor para gelar, consumindo até 30% mais energia."
      }
    ],
    finalCall: "Proteja seu investimento e evite surpresas. Agende sua manutenção preventiva periódica.",
    relatedServices: [
      "air-conditioning-maintenance",
      "air-conditioning-deep-cleaning",
      "electrical-hvac-maintenance"
    ],
    metaTitle: "Manutenção Preventiva de Ar-Condicionado | Revisão",
    metaDescription: "Manutenção preventiva periódica em ar-condicionado em São Gonçalo e Maricá. Aumente a vida útil e reduza gastos com energia elétrica."
  },

  {
    slug: "emergency-service",
    name: "Serviço de emergência",
    shortMenuDesc: "Atendimento para problemas com maior urgência.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    heroTitle: "Atendimento para Situações de Maior Urgência",
    heroSubtitle: "Suporte dedicado para contingências em ambientes que não podem ficar sem climatização.",
    whatsIncluded: [
      "Triagem imediata das informações da ocorrência por ligação",
      "Verificação de disponibilidade técnica prioritária na região",
      "Diagnóstico emergencial no local para desarmes ou paradas completas",
      "Correção de curto-circuitos e disjuntores que desarmam",
      "Contenção de vazamentos severos de água em paredes",
      "Medidas de restabelecimento do ciclo de resfriamento"
    ],
    benefits: [
      {
        title: "Resposta Ágil ao Defeito",
        description: "Canal direto de atendimento para entender a urgência e verificar viabilidade de visita."
      },
      {
        title: "Proteção do seu Ambiente",
        description: "Contenção rápida de vazamentos de água que ameaçam eletrônicos e revestimentos."
      },
      {
        title: "Foco na Resolução Técnica",
        description: "Equipe preparada com ferramentas de diagnóstico para resolver no local."
      }
    ],
    process: [
      {
        step: "01",
        title: "Ligação Direta",
        description: "Ligue imediatamente e relate o problema emergencial que está ocorrendo."
      },
      {
        step: "02",
        title: "Checagem de Rota",
        description: "Verificamos a posição do técnico mais próximo para deslocamento ágil."
      },
      {
        step: "03",
        title: "Atuação no Local",
        description: "Inspeção e intervenção direta para desarmar a falha com segurança."
      },
      {
        step: "04",
        title: "Estabilização",
        description: "Equipamento testado e normalizado para evitar novos desarmes."
      }
    ],
    faqs: [
      {
        question: "O que fazer se o disjuntor do ar-condicionado desarmar repetidamente?",
        answer: "Não force o disjuntor para cima repetidas vezes. Desligue o aparelho e solicite atendimento técnico para evitar queima do compressor ou curto-circuito na fiação."
      },
      {
        question: "Atendem situações urgentes nos finais de semana?",
        answer: "Conforme nossos horários de funcionamento (sábados de 09:00 às 15:00), verificamos a escala e disponibilidade para atendimento."
      }
    ],
    finalCall: "Problema urgente no ar-condicionado? Ligue agora mesmo e conte o que está acontecendo.",
    relatedServices: [
      "air-conditioning-repair",
      "electrical-hvac-maintenance",
      "air-conditioning-maintenance"
    ],
    metaTitle: "Serviço de Emergência Ar-Condicionado | Suporte",
    metaDescription: "Atendimento para situações urgentes em ar-condicionado em São Gonçalo e Maricá. Correção rápida de desarmes e vazamentos graves no local."
  },

  {
    slug: "general-hvac-services",
    name: "Serviços de ar-condicionado",
    shortMenuDesc: "Serviços gerais relacionados à climatização.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    heroTitle: "Serviços Gerais de Ar-Condicionado e Climatização",
    heroSubtitle: "Soluções integradas para conservação, adequação técnica e conforto térmico de ambientes.",
    whatsIncluded: [
      "Avaliação geral do estado físico e operacional de aparelhos",
      "Ajustes de carga e complementação de fluido refrigerante",
      "Desobstrução de serpentinas e drenagens de condensado",
      "Adequação de fixações e amortecedores de vibração",
      "Revisão de modos de ventilação, swing e termostato",
      "Diagnóstico geral para residências, escritórios e comércios"
    ],
    benefits: [
      {
        title: "Atendimento Amplo e Flexível",
        description: "Suporte completo para diversas demandas técnicas em um único fornecedor de confiança."
      },
      {
        title: "Conhecimento Multimarcas",
        description: "Serviços adequados para aparelhos convencionais, Inverter, split e modelos de janela."
      },
      {
        title: "Comodidade no seu Endereço",
        description: "Técnico preparado que vai até o seu imóvel com ferramental completo."
      }
    ],
    process: [
      {
        step: "01",
        title: "Contato Inicial",
        description: "Explique a demanda ou a quantidade de aparelhos que necessitam de atendimento."
      },
      {
        step: "02",
        title: "Orçamento Sob Medida",
        description: "Elaboração de proposta transparente sem custos ocultos."
      },
      {
        step: "03",
        title: "Atendimento Técnico",
        description: "Execução pontual com atenção aos detalhes e respeito ao espaço do cliente."
      },
      {
        step: "04",
        title: "Conferência",
        description: "Comprovação do resultado e orientações práticas de conservação."
      }
    ],
    faqs: [
      {
        question: "Vocês atendem tanto residências quanto empresas?",
        answer: "Sim, realizamos serviços gerais de ar-condicionado em residências, apartamentos, lojas, escritórios e consultórios em São Gonçalo e Maricá."
      },
      {
        question: "Quais marcas de ar-condicionado vocês atendem?",
        answer: "Atendemos as principais marcas do mercado nacional, tanto em tecnologia convencional quanto Inverter."
      }
    ],
    finalCall: "Precisa de assistência para seu ar-condicionado? Fale com quem é especialista no assunto.",
    relatedServices: [
      "air-conditioning-maintenance",
      "window-and-split-ac",
      "preventive-maintenance"
    ],
    metaTitle: "Serviços de Ar-Condicionado e Climatização | RJ",
    metaDescription: "Serviços completos em ar-condicionado para residências e empresas em São Gonçalo e Maricá. Atendimento local com padrão técnico."
  },

  {
    slug: "portable-ac-service",
    name: "Serviços para ar-condicionado portátil",
    shortMenuDesc: "Atendimento e serviços em ar-condicionado portátil.",
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
    heroTitle: "Manutenção e Limpeza de Ar-Condicionado Portátil",
    heroSubtitle: "Cuidados técnicos e higienização interna para equipamentos portáteis de refrigeração.",
    whatsIncluded: [
      "Desmontagem da carcaça plástica para acesso aos componentes",
      "Higienização da serpentina condensadora e evaporadora interna",
      "Limpeza e desinfecção do reservatório interno de água",
      "Desobstrução do duto sanfonado e régua de exaustão",
      "Inspeção do ventilador centrífugo e motor de circulação",
      "Verificação da eficiência térmica de saída de ar frio"
    ],
    benefits: [
      {
        title: "Rendimento Renovado",
        description: "Elimina a sujeira que sufoca a condensação e faz o portátil gelar de verdade."
      },
      {
        title: "Sem Transbordar Água",
        description: "Desobstrução do sistema de evaporação e boia para evitar poças no chão."
      },
      {
        title: "Ar Livre de Odores",
        description: "Remove o mofo do reservatório que costuma causar cheiro de umidade no quarto."
      }
    ],
    process: [
      {
        step: "01",
        title: "Triagem do Modelo",
        description: "Informe a marca e a capacidade em BTUs do seu aparelho portátil."
      },
      {
        step: "02",
        title: "Abertura Técnica",
        description: "Desmontagem cuidadosa das travas plásticas e painéis do equipamento."
      },
      {
        step: "03",
        title: "Limpeza Interna",
        description: "Lavagem das serpentinas compactas e sanitização do dreno e duto."
      },
      {
        step: "04",
        title: "Teste e Fechamento",
        description: "Remontagem da carcaça e verificação do fluxo térmico e da exaustão quente."
      }
    ],
    faqs: [
      {
        question: "Por que o ar portátil desliga sozinho após alguns minutos?",
        answer: "Geralmente é causado por reservatório de água cheio (acionamento de boia de segurança) ou superaquecimento da condensadora por sujeira no duto de exaustão."
      },
      {
        question: "O ar portátil precisa de gás com frequência?",
        answer: "Não. O circuito é selado de fábrica. Se o aparelho parar de gelar, a causa quase sempre é sujeira pesada nas serpentinas ou falha no ventilador."
      }
    ],
    finalCall: "Seu ar-condicionado portátil não está gelando direito? Agende uma revisão especializada.",
    relatedServices: [
      "air-conditioning-deep-cleaning",
      "air-filter-replacement",
      "general-hvac-services"
    ],
    metaTitle: "Ar-Condicionado Portátil | Manutenção e Limpeza",
    metaDescription: "Assistência e limpeza técnica de ar-condicionado portátil em São Gonçalo e Maricá. Desobstrução interna, fim do mau cheiro e ar gelando."
  },

  {
    slug: "ventilation-systems",
    name: "Sistema de ventilação",
    shortMenuDesc: "Serviços relacionados a sistemas de ventilação.",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=600&q=80",
    heroTitle: "Serviços para Sistemas de Ventilação e Exaustão",
    heroSubtitle: "Revisão e manutenção técnica em dutos de ventilação, exaustores e circulação de ar.",
    whatsIncluded: [
      "Inspeção visual e desobstrução de dutos e grelhas de ventilação",
      "Limpeza e revisão de motores de exaustão e ventiladores",
      "Verificação de ruídos, vibrações e fixação de suportes",
      "Troca ou adequação de filtros de entrada de ar novo",
      "Testes de vazão e renovação contínua de ar no ambiente",
      "Alinhamento para conformidade de conforto térmico"
    ],
    benefits: [
      {
        title: "Renovação Contínua de Ar",
        description: "Reduz a concentração de gás carbônico e o ar abafado em ambientes fechados."
      },
      {
        title: "Silêncio Operacional",
        description: "Ajuste e lubrificação de rotores eliminam rangidos e vibrações incômodas."
      },
      {
        title: "Conforto e Frescor",
        description: "Equilíbrio térmico ideal em conjunto com aparelhos de climatização."
      }
    ],
    process: [
      {
        step: "01",
        title: "Vistoria no Local",
        description: "Análise do trajeto dos dutos, grelhas e equipamentos de ventilação."
      },
      {
        step: "02",
        title: "Identificação de Obstruções",
        description: "Checagem de poeira acumulada, travas e rotação dos ventiladores."
      },
      {
        step: "03",
        title: "Limpeza e Ajuste",
        description: "Higienização das saídas de ar e calibração mecânica dos motores."
      },
      {
        step: "04",
        title: "Medição de Vazão",
        description: "Comprovação da movimentação correta de ar pelo cômodo ou duto."
      }
    ],
    faqs: [
      {
        question: "Qual a importância da manutenção no sistema de ventilação?",
        answer: "Dutos e ventiladores sujos circulam poeira e ácaros constantemente pelo ambiente, além de forçar o motor a queimar por sobreaquecimento."
      },
      {
        question: "Vocês atendem exaustores e renovadores de ar residenciais e comerciais?",
        answer: "Sim, atendemos sistemas de renovação de ar acoplados à climatização em São Gonçalo, Maricá e região."
      }
    ],
    finalCall: "Melhore a circulação de ar do seu imóvel. Solicite uma avaliação do sistema de ventilação.",
    relatedServices: [
      "air-filter-replacement",
      "general-hvac-services",
      "preventive-maintenance"
    ],
    metaTitle: "Sistemas de Ventilação | Manutenção e Dutos",
    metaDescription: "Serviços técnicos em sistemas de ventilação e renovação de ar em São Gonçalo e Maricá. Limpeza de grelhas, exaustores e circulação de ar."
  },

  {
    slug: "air-filter-replacement",
    name: "Troca de filtro de ar-condicionado",
    shortMenuDesc: "Substituição de filtros de equipamentos de ar-condicionado.",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&q=80",
    heroTitle: "Troca e Substituição de Filtros de Ar-Condicionado",
    heroSubtitle: "Substituição de elementos filtrantes danificados ou saturados para restabelecer ar puro.",
    whatsIncluded: [
      "Remoção e descarte ecológico de filtros rasgados ou saturados",
      "Medição e verificação do modelo exato compatível com o aparelho",
      "Instalação de novas telas filtrantes de alta retenção",
      "Opções com filtros de carvão ativado ou antibacterianos",
      "Limpeza rápida do alojamento do filtro antes da colocação",
      "Teste de passagem livre de fluxo de ar"
    ],
    benefits: [
      {
        title: "Retenção Máxima de Impurezas",
        description: "Filtros novos barram poeira fina, pelos de animais e ácaros no ar."
      },
      {
        title: "Vazão de Ar Restaurada",
        description: "Telas limpas e intactas permitem que o vento saia forte e gelado."
      },
      {
        title: "Proteção da Serpentina Interna",
        description: "Impede que a poeira passe direto e suje o miolo da máquina."
      }
    ],
    process: [
      {
        step: "01",
        title: "Identificação do Aparelho",
        description: "Verificamos as dimensões e especificações do filtro do seu split ou janela."
      },
      {
        step: "02",
        title: "Remoção do Filtro Antigo",
        description: "Retirada sem espalhar poeira sobre os móveis do cômodo."
      },
      {
        step: "03",
        title: "Encaixe do Novo Elemento",
        description: "Instalação do filtro novo nas guias originais do fabricante."
      },
      {
        step: "04",
        title: "Checagem Operacional",
        description: "Verificação da sucção e vedação frontal da unidade interna."
      }
    ],
    faqs: [
      {
        question: "Quando é necessário trocar o filtro em vez de apenas lavar?",
        answer: "Quando a tela estiver ressecada, rasgada, furada ou com acúmulo de gordura e resíduos que não saem mais com a lavagem."
      },
      {
        question: "Usar o ar-condicionado sem filtro estraga o aparelho?",
        answer: "Sim. A poeira vai direto para as aletas da serpentina e gruda na turbina, travando o dreno e provocando vazamentos graves de água."
      }
    ],
    finalCall: "Seu filtro está rasgado ou muito antigo? Solicite a troca com peças compatíveis.",
    relatedServices: [
      "air-conditioning-deep-cleaning",
      "equipment-cleaning",
      "preventive-maintenance"
    ],
    metaTitle: "Troca de Filtro de Ar-Condicionado | Peças Novas",
    metaDescription: "Substituição e troca de filtros de ar-condicionado em São Gonçalo e Maricá. Telas novas para ar puro, sem pó e maior vazão de vento."
  },

  {
    slug: "electrical-hvac-maintenance",
    name: "Manutenção elétrica do ar-condicionado",
    shortMenuDesc: "Diagnóstico e manutenção de componentes elétricos.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    heroTitle: "Manutenção Elétrica de Ar-Condicionado",
    heroSubtitle: "Diagnóstico e reparo de capacitores, placas, contatores e disjuntores do sistema.",
    whatsIncluded: [
      "Medição de capacitância de capacitores de partida e marcha",
      "Inspeção e reaperto de bornes e terminais oxidados ou aquecidos",
      "Testes de aterramento e proteção contra choque elétrico",
      "Diagnóstico de fusíveis, varistores e trilhas de placas eletrônicas",
      "Verificação de disjuntor exclusivo e bitola dos cabos de força",
      "Substituição de componentes elétricos desgastados no local"
    ],
    benefits: [
      {
        title: "Proteção Contra Curtos",
        description: "Elimina fios soltos e conexões frouxas que causam faíscas e queima de placas."
      },
      {
        title: "Partida Suave do Compressor",
        description: "Capacitores regulados evitam travamento e sobretensão no motor."
      },
      {
        title: "Segurança para seu Imóvel",
        description: "Garante que o circuito elétrico trabalhe dentro das normas sem riscos de superaquecimento."
      }
    ],
    process: [
      {
        step: "01",
        title: "Desenergização Segura",
        description: "Desligamento do disjuntor para inspeção sem riscos elétricos."
      },
      {
        step: "02",
        title: "Medição com Multímetro",
        description: "Testes de tensão, continuidade, capacitância e isolamento."
      },
      {
        step: "03",
        title: "Correção e Substituição",
        description: "Troca da peça danificada e recomposição das conexões elétricas."
      },
      {
        step: "04",
        title: "Teste com Carga Ativa",
        description: "Religamento e medição da corrente real com alicate amperímetro."
      }
    ],
    faqs: [
      {
        question: "O que significa quando o ar liga a ventilação mas o motor de fora não parte?",
        answer: "Geralmente é defeito no capacitor da unidade condensadora, contator travado ou placa sem enviar sinal para o compressor."
      },
      {
        question: "Por que a fiação do ar-condicionado esquenta?",
        answer: "Fios com bitola inferior à necessária ou conexões frouxas provocam resistência elétrica excessiva, gerando calor perigoso e risco de curto."
      }
    ],
    finalCall: "Ar-condicionado com falha elétrica ou desarmando? Agende um diagnóstico elétrico seguro.",
    relatedServices: [
      "air-conditioning-repair",
      "emergency-service",
      "preventive-maintenance"
    ],
    metaTitle: "Manutenção Elétrica de Ar-Condicionado | Reparo",
    metaDescription: "Diagnóstico e reparo elétrico de ar-condicionado em São Gonçalo e Maricá. Troca de capacitor, bornes, placas e disjuntores com segurança."
  },

  {
    slug: "window-and-split-ac",
    name: "Ar-condicionado de janela e split",
    shortMenuDesc: "Serviços em aparelhos de janela e modelos split.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    heroTitle: "Serviços em Ar-Condicionado de Janela e Modelos Split",
    heroSubtitle: "Assistência técnica, limpeza e reparos tanto em aparelhos de janela quanto em sistemas split.",
    whatsIncluded: [
      "Atendimento para modelos de janela mecânicos e eletrônicos",
      "Serviços em split Hi-Wall, Inverter e convencionais",
      "Limpeza e desobstrução de calhas de modelos de janela",
      "Higienização técnica completa de evaporadora e condensadora split",
      "Correção de vibrações em caixilhos de janela e suportes split",
      "Verificação de estanqueidade e isolamento de tubulações"
    ],
    benefits: [
      {
        title: "Domínio de Modelos Variados",
        description: "Técnico experiente tanto no clássico aparelho de janela quanto na tecnologia Inverter."
      },
      {
        title: "Menos Ruído e Vibração",
        description: "Ajuste firme da carcaça e borrachas amortecedoras que eliminam o trepidar incômodo."
      },
      {
        title: "Climatização no Máximo Desempenho",
        description: "Aparelho revisado para render a capacidade térmica total descrita no manual."
      }
    ],
    process: [
      {
        step: "01",
        title: "Identificação do Tipo",
        description: "Informe se o seu equipamento é de janela ou split e a capacidade em BTUs."
      },
      {
        step: "02",
        title: "Avaliação no Local",
        description: "Inspeção do estado físico, suportes, tubulações e alimentação."
      },
      {
        step: "03",
        title: "Serviço Direcionado",
        description: "Aplicação do método correto de limpeza ou reparo para o seu modelo."
      },
      {
        step: "04",
        title: "Comprovação Térmica",
        description: "Medição da temperatura de insuflamento para atestar o funcionamento."
      }
    ],
    faqs: [
      {
        question: "Ainda vale a pena consertar ar-condicionado de janela?",
        answer: "Sim. Aparelhos de janela são robustos e mecânicos; reparos como limpeza pesada, capacitor ou chave seletora costumam restabelecer o aparelho por muitos anos com excelente custo."
      },
      {
        question: "Qual o cuidado especial com modelos Split Inverter?",
        answer: "Sistemas Inverter possuem placas eletrônicas sensíveis a surtos e necessitam de vácuo rigoroso e ferramentas digitais para medição correta de fluido."
      }
    ],
    finalCall: "Tem aparelho de janela ou split precisando de atenção? Peça uma visita técnica.",
    relatedServices: [
      "air-conditioning-maintenance",
      "air-conditioning-deep-cleaning",
      "general-hvac-services"
    ],
    metaTitle: "Ar-Condicionado Janela e Split | Serviços no Local",
    metaDescription: "Manutenção, limpeza e reparos para ar-condicionado de janela e split em São Gonçalo e Maricá. Atendimento profissional em residências e comércios."
  }
];

export const getServiceBySlug = (slug: string): DetailedService | undefined => {
  return SERVICES_DATA.find((s) => s.slug === slug);
};
