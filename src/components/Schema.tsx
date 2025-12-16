import React from 'react';

interface OrganizationSchemaProps {
  type?: 'Organization' | 'LocalBusiness' | 'ProfessionalService';
}

export const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({ 
  type = 'Organization' 
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: 'Hunic Solutions',
    description: 'Custom software development, AI automation, and cutting-edge web development services',
    url: 'https://hunicsolutions.com',
    logo: 'https://hunicsolutions.com/logo.png',
    image: 'https://hunicsolutions.com/og-image.jpg',
    email: 'contact@hunicsolutions.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    sameAs: [
      // Add social media profiles here
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contact@hunicsolutions.com',
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
}

export const WebPageSchema: React.FC<WebPageSchemaProps> = ({
  name,
  description,
  url,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    publisher: {
      '@type': 'Organization',
      name: 'Hunic Solutions',
      url: 'https://hunicsolutions.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hunicsolutions.com/logo.png',
      },
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider?: string;
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  provider = 'Hunic Solutions',
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: 'https://hunicsolutions.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};
