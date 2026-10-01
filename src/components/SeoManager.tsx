import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE } from '../config/siteConfig';
import { getServiceBySlug } from '../data/servicesData';
import { getAreaBySlug } from '../data/areasData';

export const SeoManager: React.FC = () => {
  const location = useLocation();
  const domain = SITE.domain || (typeof window !== 'undefined' ? window.location.origin : 'https://icemasters.com.br');

  useEffect(() => {
    const pathname = location.pathname;
    let title = "Manutenção de Ar-Condicionado em São Gonçalo RJ | Ice Masters";
    let description = "Conserto, manutenção e higienização de ar-condicionado em São Gonçalo e Maricá RJ. Atendimento técnico no local com a Ice Masters. Peça seu orçamento.";
    let canonical = `${domain}/`;
    let isNoIndex = false;
    let schemaData: Record<string, unknown>[] = [];

    // Helper to ensure canonical has no trailing slash (except home root)
    if (pathname === '/' || pathname === '') {
      canonical = `${domain}/`;
    } else {
      canonical = `${domain}${pathname.replace(/\/$/, '')}`;
    }

    // Determine metadata and schema by route
    if (pathname === '/services') {
      title = "Serviços de Ar-Condicionado | Ice Masters São Gonçalo";
      description = "Confira nossos serviços de ar-condicionado em São Gonçalo e Maricá: manutenção preventiva, corretiva, reparos elétricos, higienização e conserto.";
      schemaData.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Início", "item": `${domain}/` },
          { "@type": "ListItem", "position": 2, "name": "Serviços", "item": `${domain}/services` }
        ]
      });
    } else if (pathname.startsWith('/services/')) {
      const slug = pathname.replace('/services/', '').replace(/\/$/, '');
      const service = getServiceBySlug(slug);
      if (service) {
        title = `${service.metaTitle} | ${SITE.name.split(' ')[0]}`;
        if (title.length > 60) title = service.metaTitle;
        description = service.metaDescription;

        // Service Schema + FAQPage Schema
        schemaData.push({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": service.name,
          "provider": {
            "@type": "HVACBusiness",
            "name": SITE.name,
            "telephone": SITE.phone.international,
            "url": `${domain}/`
          },
          "areaServed": SITE.serviceAreas.map(city => ({
            "@type": "City",
            "name": city
          })),
          "description": service.shortMenuDesc
        });

        if (service.faqs && service.faqs.length > 0) {
          schemaData.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": service.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          });
        }

        schemaData.push({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Início", "item": `${domain}/` },
            { "@type": "ListItem", "position": 2, "name": "Serviços", "item": `${domain}/services` },
            { "@type": "ListItem", "position": 3, "name": service.name, "item": `${domain}/services/${service.slug}` }
          ]
        });
      } else {
        isNoIndex = true;
      }
    } else if (pathname === '/areas') {
      title = "Cidades Atendidas em Ar-Condicionado | Ice Masters RJ";
      description = "Cobertura confirmada de manutenção e higienização de ar-condicionado em São Gonçalo, Maricá e proximidades. Atendimento técnico no local.";
      schemaData.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Início", "item": `${domain}/` },
          { "@type": "ListItem", "position": 2, "name": "Cidades Atendidas", "item": `${domain}/areas` }
        ]
      });
    } else if (pathname.startsWith('/areas/')) {
      const slug = pathname.replace('/areas/', '').replace(/\/$/, '');
      const area = getAreaBySlug(slug);
      if (area) {
        title = `${area.metaTitle} | ${SITE.name.split(' ')[0]}`;
        if (title.length > 60) title = area.metaTitle;
        description = area.metaDescription;

        schemaData.push({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Início", "item": `${domain}/` },
            { "@type": "ListItem", "position": 2, "name": "Cidades Atendidas", "item": `${domain}/areas` },
            { "@type": "ListItem", "position": 3, "name": area.cityName, "item": `${domain}/areas/${area.slug}` }
          ]
        });
      } else {
        isNoIndex = true;
      }
    } else if (pathname === '/404' || pathname === '/obrigado') {
      title = pathname === '/404' ? "Página Não Encontrada | Ice Masters" : "Solicitação Recebida | Ice Masters";
      description = "Informações sobre atendimento de climatização e refrigeração.";
      isNoIndex = true;
    }

    // Always include Main Business Schema (HVACBusiness + LocalBusiness without aggregateRating or reviews)
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": ["HVACBusiness", "LocalBusiness"],
      "name": SITE.name,
      "description": SITE.shortSlogan,
      "url": `${domain}/`,
      "telephone": SITE.phone.international,
      "logo": `${domain}/logo.svg`,
      "image": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SITE.address?.street || "Estr. de Itaitindiba, 241",
        "addressLocality": "São Gonçalo",
        "addressRegion": "RJ",
        "postalCode": "24738-795",
        "addressCountry": "BR"
      },
      "areaServed": SITE.serviceAreas.map(cidade => ({
        "@type": "City",
        "name": cidade
      })),
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday"],
          "opens": "09:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "09:00",
          "closes": "15:00"
        }
      ],
      "paymentAccepted": "Cartão de Crédito, NFC, Mastercard, Visa",
      "sameAs": [
        SITE.links.facebookUrl,
        SITE.links.instagramUrl,
        SITE.links.googleMapsUrl
      ].filter(Boolean)
    };

    schemaData.unshift(localBusinessSchema);

    // Apply Document Title
    document.title = title;

    // Apply Meta Description
    let metaDescriptionEl = document.querySelector('meta[name="description"]');
    if (!metaDescriptionEl) {
      metaDescriptionEl = document.createElement('meta');
      metaDescriptionEl.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionEl);
    }
    metaDescriptionEl.setAttribute('content', description);

    // Apply OpenGraph Title & Description
    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl) ogTitleEl.setAttribute('content', title);
    const ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl) ogDescEl.setAttribute('content', description);

    // Apply Twitter Title & Description
    const twitterTitleEl = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitleEl) twitterTitleEl.setAttribute('content', title);
    const twitterDescEl = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescEl) twitterDescEl.setAttribute('content', description);

    // Apply Canonical Link (no trailing slash except root)
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonical);

    // Apply OpenGraph URL
    let ogUrlEl = document.querySelector('meta[property="og:url"]');
    if (!ogUrlEl) {
      ogUrlEl = document.createElement('meta');
      ogUrlEl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrlEl);
    }
    ogUrlEl.setAttribute('content', canonical);

    // Apply Robots Meta Tag (noindex for utility pages)
    let robotsEl = document.querySelector('meta[name="robots"]');
    if (!robotsEl) {
      robotsEl = document.createElement('meta');
      robotsEl.setAttribute('name', 'robots');
      document.head.appendChild(robotsEl);
    }
    robotsEl.setAttribute('content', isNoIndex ? 'noindex, follow' : 'index, follow');

    // Update JSON-LD Scripts
    const existingJsonLd = document.querySelectorAll('script[data-seo-jsonld="true"]');
    existingJsonLd.forEach(el => el.remove());

    schemaData.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', 'true');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

  }, [location.pathname, domain]);

  return null;
};
