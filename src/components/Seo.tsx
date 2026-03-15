// src/components/Seo.tsx
import { Helmet } from "react-helmet";

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  baseUrl?: string;
  organizationName?: string;
  logoUrl?: string;
  sameAs?: string[];
  email?: string[];
}

export function Seo({
  title = "Bedriftsnavn – Profesjonell nettside",
  description = "Skriv inn en kort og presis beskrivelse av tjenesten eller bedriften.",
  path = "/",
  image = "/social-preview.png",
  baseUrl = "https://www.dittdomene.no",
  organizationName = "Bedriftsnavn",
  logoUrl = "/logo.svg",
  sameAs = [],
  email = [],
}: SeoProps) {
  const fullUrl = `${baseUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={fullUrl} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: organizationName,
          url: baseUrl,
          logo: logoUrl,
          sameAs: sameAs,
          description: description,
          email: email,
        })}
      </script>
    </Helmet>
  );
}
