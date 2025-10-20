import { getAllBadges } from "@/lib/badgeUtils";

export function BadgeStructuredData() {
  const credentials = getAllBadges().map((badge) => ({
    "@type": "EducationalOccupationalCredential",
    "@id": `https://mahdieh-fakhar.github.io/mf1/#credential-${badge.slug}`,
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
    image: `https://mahdieh-fakhar.github.io/mf1${badge.image}`,
  }));

  const personGraph = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://mahdieh-fakhar.github.io/mf1/#profile",
    name: "Mahdieh Fakhar",
    alternateName: ["Mahdieh Fakhar Shahreza"],
    url: "https://mahdieh-fakhar.github.io/mf1/",
    image: "https://mahdieh-fakhar.github.io/mf1/images/profile.jpg",
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
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madrid",
      addressCountry: "Spain",
    },
    hasCredential: credentials,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personGraph),
      }}
    />
  );
}
