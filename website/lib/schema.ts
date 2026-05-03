import type { Service, FAQPage, Place, BreadcrumbList, Review, AggregateRating } from 'schema-dts';

export function createServiceSchema(serviceName: string, description: string, url: string, priceRange: string): Service {
  return {
    "@type": "Service",
    name: serviceName,
    description: description,
    url: url,
    provider: { "@id": "https://alltimeplumbers.com/#org" },
    areaServed: { "@type": "City", name: "San Diego" },
    offers: {
      "@type": "Offer",
      price: "89.00",
      priceCurrency: "USD",
      description: `Starting at or typical range: ${priceRange}`
    }
  };
}

export function createFAQSchema(faqs: { question: string, answer: string }[]): FAQPage {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function createBreadcrumbSchema(items: { name: string, item: string }[]): BreadcrumbList {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item
    }))
  };
}
