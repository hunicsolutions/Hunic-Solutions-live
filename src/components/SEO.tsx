import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
}) => {
  const fullTitle = `${title} | Hunic Solutions`;
  const siteUrl = 'https://hunicsolutions.com';
  const fullCanonicalUrl = canonicalUrl || siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Hunic Solutions" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
    </>
  );
};
