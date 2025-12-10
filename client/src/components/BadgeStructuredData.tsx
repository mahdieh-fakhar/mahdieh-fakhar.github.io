import { getAllBadges } from "@/lib/badgeUtils";

export function BadgeStructuredData() {
  const siteUrl = "https://mahdieh-fakhar.github.io/";

  const credentials = getAllBadges().map((badge) => ({
    "@type": "EducationalOccupationalCredential",
    "@id": `${siteUrl}#credential-${badge.slug}`,
    name: badge.title,
    description: badge.summary,
    url: badge.url,
    dateIssued: badge.issueDate,
    credentialCategory: "Certification",
    recognizedBy: {
      "@type": "Organization",
      name: badge.issuer,
    },
    skill: badge.skills.map((skill) => ({
      "@type": "DefinedTerm",
      name: skill,
    })),
    image: `${siteUrl}${badge.image.startsWith("/") ? badge.image.slice(1) : badge.image}`,
  }));

  const personGraph = {
    "@type": "Person",
    "@id": `${siteUrl}#profile`,
    name: "Mahdieh Fakhar",
    alternateName: ["Mahdieh Fakhar Shahreza"],
    description:
      "Mahdieh Fakhar academic profile featuring data science, big data, AI research, scientometrics, bibliometrics, and governance roles.",
    url: siteUrl,
    image: `${siteUrl}images/profile.jpg`,
    jobTitle: [
      "Data Scientist",
      "Researcher",
      "Academic Strategist",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Universidad Internacional de La Rioja (UNIR)",
    },
    sameAs: [
      "https://www.linkedin.com/in/mahdieh-fakhar-b7319a1a5",
      "https://github.com/mahdieh-fakhar",
    ],
    knowsAbout: [
      "Data Science",
      "Artificial Intelligence",
      "Bibliometric Analysis",
      "Big Data",
      "Language Technology"
    ],
    keywords: [
      "AI-powered academic portfolio",
      "data science student",
      "big data student",
      "scientometrics researcher",
      "bibliometrics researcher"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madrid",
      addressCountry: "Spain",
    },
    hasCredential: credentials.map((credential) => ({ "@id": credential["@id"] })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    url: siteUrl,
    name: "Mahdieh Fakhar | AI-powered academic portfolio",
    description:
      "AI-powered digital portfolio template for data science, big data, scientometrics, bibliometrics, and academic research.",
    inLanguage: "en",
    publisher: { "@id": personGraph["@id"] },
    sameAs: personGraph.sameAs,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${siteUrl}#webpage`,
    url: siteUrl,
    name: "Mahdieh Fakhar academic portfolio website",
    description:
      "Academic portfolio website for data science and AI student Mahdieh Fakhar with research, projects, resume, and contact options.",
    isPartOf: { "@id": website["@id"] },
    about: { "@id": personGraph["@id"] },
    inLanguage: "en",
    primaryImageOfPage: {
      "@type": "ImageObject",
      "@id": `${siteUrl}#primaryimage`,
      url: `${siteUrl}images/profile.jpg`,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Portfolio", item: `${siteUrl}works` },
      ],
    },
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [website, personGraph, webpage, ...credentials],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
