import { SITE, ServiceItem, ProblemItem, GalleryItem, TestimonialItem } from '../config/siteConfig';

export type { ServiceItem, ProblemItem, GalleryItem, TestimonialItem };

export const COMPANY_DATA = {
  name: SITE.name,
  legalNotice: SITE.legalName || SITE.name,
  shortSlogan: SITE.shortSlogan,
  phone: SITE.phone.display,
  phoneRaw: SITE.phone.raw,
  phoneTel: SITE.phone.telLink,
  internationalPhone: SITE.phone.international,
  email: SITE.email,
  instagramHandle: SITE.links.instagramHandle || "@icemastersrefrigeracao",
  instagramUrl: SITE.links.instagramUrl || "",
  facebookUrl: SITE.links.facebookUrl || "",
  
  // Local presence
  cityBase: SITE.baseCity,
  serviceAreas: SITE.serviceAreas,
  googleMapsUrl: SITE.links.googleMapsUrl || "",
  
  showFullAddress: SITE.showAddress,
  fullAddress: SITE.address?.full || "",
  
  // Business hours
  businessHours: SITE.hours.schedule,
  onlineContactHours: SITE.hours.onlineHours || "09:00–20:00",
  
  // Google Business stats
  googleRating: SITE.proof.googleRating?.stars,
  googleRatingText: SITE.proof.googleRating?.text,
  googleReviewCount: SITE.proof.googleRating?.reviewCount,
  
  // Proof & Differentials
  realDifferentials: SITE.proof.realDifferentials,
  customerFeedbackThemes: SITE.proof.customerFeedbackThemes,
  yearsOfExperience: SITE.proof.yearsOfExperience,
  license: SITE.proof.license,
  insurance: SITE.proof.insurance,
  projectsCompleted: SITE.proof.projectsCompleted,
  testimonials: SITE.proof.testimonials,

  // Services
  primaryServices: SITE.services.filter(s => s.category === 'primary'),
  secondaryServices: SITE.services.filter(s => s.category === 'secondary'),
  allServices: SITE.services,

  // Problems Section
  commonProblems: SITE.commonProblems,

  // Gallery
  galleryItems: SITE.galleryItems,

  // Process
  processSteps: [
    {
      step: "01",
      title: `FALE COM A ${SITE.name.split(" ")[0].toUpperCase()}`,
      desc: "Conte rapidamente o que está acontecendo com seu equipamento ou qual serviço você precisa através do formulário de orçamento ou ligação direta."
    },
    {
      step: "02",
      title: "ENTENDEMOS A NECESSIDADE",
      desc: "As informações são avaliadas para alinhar o atendimento adequado, esclarecer dúvidas e agendar o melhor horário para você."
    },
    {
      step: "03",
      title: "REALIZAMOS O SERVIÇO",
      desc: "O atendimento técnico é realizado no local de acordo com a necessidade identificada, com cuidado, limpeza e dedicação."
    }
  ],

  // Instagram Highlights
  instagramHighlights: [
    {
      id: "ig-1",
      title: "Manutenções no Local",
      category: "Atendimento",
      caption: `Cuidado e técnica em cada serviço realizado em ${SITE.serviceAreas.join(' e ')}.`,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ig-2",
      title: "Limpeza & Higienização",
      category: "Processo",
      caption: "A diferença visível na serpentina e turbina após o procedimento de sanitização.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ig-3",
      title: "Reparos & Diagnósticos",
      category: "Técnico",
      caption: "Soluções precisas para equipamentos que pararam de gelar ou apresentam ruído.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ig-4",
      title: "Qualidade do Ar Interior",
      category: "Saúde",
      caption: "Ambientes climatizados, limpos e livres de impurezas para toda a família.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    }
  ]
};
