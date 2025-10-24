import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  schema
}) => {
  const defaultTitle = 'ALLCOM | Tecnología para Tiendas, Sin Enredos';
  const defaultDescription = 'Soluciones de hardware y software para retail: Kioskos de autopago, terminales POS, balanzas comerciales. +17 años de experiencia. Soporte 24/7 en Chile.';
  const defaultOgImage = 'https://allcom.cl/logo-allcom.png';
  const siteUrl = 'https://allcom.cl';

  const fullTitle = title ? `${title} | ALLCOM` : defaultTitle;
  const fullDescription = description || defaultDescription;
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullOgImage = ogImage || defaultOgImage;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:locale" content="es_CL" />
      <meta property="og:site_name" content="ALLCOM" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:image" content={fullOgImage} />
      
      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
