interface OrganizationData {
  name: string
  url: string
  logo: string
  description: string
  sameAs: string[]
}

interface ArticleData {
  headline: string
  description: string
  image: string
  author: {
    name: string
    url?: string
  }
  publisher: OrganizationData
  datePublished: string
  dateModified: string
  url: string
  keywords: string[]
}

interface BreadcrumbData {
  items: Array<{
    name: string
    url: string
  }>
}

interface WebsiteData {
  name: string
  url: string
  description: string
  potentialAction: {
    target: string
    queryInput: string
  }
}

interface StructuredDataProps {
  type: "organization" | "article" | "breadcrumb" | "website"
  data: OrganizationData | ArticleData | BreadcrumbData | WebsiteData
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const generateStructuredData = () => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://allixios.com"

    switch (type) {
      case "organization":
        const orgData = data as OrganizationData
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: orgData.name,
          url: orgData.url,
          logo: {
            "@type": "ImageObject",
            url: orgData.logo,
          },
          description: orgData.description,
          sameAs: orgData.sameAs,
        }

      case "article":
        const articleData = data as ArticleData
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: articleData.headline,
          description: articleData.description,
          image: {
            "@type": "ImageObject",
            url: articleData.image,
          },
          author: {
            "@type": "Person",
            name: articleData.author.name,
            url: articleData.author.url,
          },
          publisher: {
            "@type": "Organization",
            name: articleData.publisher.name,
            logo: {
              "@type": "ImageObject",
              url: articleData.publisher.logo,
            },
          },
          datePublished: articleData.datePublished,
          dateModified: articleData.dateModified,
          url: articleData.url,
          keywords: articleData.keywords.join(", "),
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": articleData.url,
          },
        }

      case "breadcrumb":
        const breadcrumbData = data as BreadcrumbData
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbData.items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        }

      case "website":
        const websiteData = data as WebsiteData
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: websiteData.name,
          url: websiteData.url,
          description: websiteData.description,
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: websiteData.potentialAction.target,
            },
            "query-input": websiteData.potentialAction.queryInput,
          },
        }

      default:
        return {}
    }
  }

  const structuredData = generateStructuredData()

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
