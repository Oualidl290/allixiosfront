import Head from "next/head"
import { StructuredData } from "./structured-data"

interface SEOMetaProps {
  title: string
  description: string
  canonical?: string
  image?: string
  type?: "website" | "article"
  article?: {
    author: string
    publishedTime: string
    modifiedTime: string
    tags: string[]
  }
  breadcrumbs?: Array<{
    name: string
    url: string
  }>
}

export function SEOMeta({
  title,
  description,
  canonical,
  image,
  type = "website",
  article,
  breadcrumbs,
}: SEOMetaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://allixios.com"
  const fullImageUrl = image ? `${baseUrl}${image}` : `${baseUrl}/og-default.jpg`
  const fullCanonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl

  return (
    <>
      <Head>
        {/* Enhanced Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={fullCanonicalUrl} />

        {/* Keywords for articles */}
        {article?.tags && <meta name="keywords" content={article.tags.join(", ")} />}

        {/* Open Graph Enhanced */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={fullCanonicalUrl} />
        <meta property="og:site_name" content="Allixios" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@allixios" />
        <meta name="twitter:creator" content="@allixios" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={fullImageUrl} />

        {/* Article-specific meta tags */}
        {type === "article" && article && (
          <>
            <meta property="article:author" content={article.author} />
            <meta property="article:published_time" content={article.publishedTime} />
            <meta property="article:modified_time" content={article.modifiedTime} />
            <meta property="article:section" content="Technology" />
            {article.tags.map((tag) => (
              <meta key={tag} property="article:tag" content={tag} />
            ))}
          </>
        )}

        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </Head>

      {/* Organization Structured Data */}
      <StructuredData
        type="organization"
        data={{
          name: "Allixios",
          url: baseUrl,
          logo: `${baseUrl}/logo.png`,
          description:
            "Professional content platform providing expert insights on technology, business, health, and lifestyle.",
          sameAs: [
            "https://twitter.com/allixios",
            "https://facebook.com/allixios",
            "https://linkedin.com/company/allixios",
          ],
        }}
      />

      {/* Website Structured Data */}
      <StructuredData
        type="website"
        data={{
          name: "Allixios",
          url: baseUrl,
          description: "Your trusted source for insightful articles on technology, business, health, and lifestyle.",
          potentialAction: {
            target: `${baseUrl}/search?q={search_term_string}`,
            queryInput: "required name=search_term_string",
          },
        }}
      />

      {/* Article Structured Data */}
      {type === "article" && article && (
        <StructuredData
          type="article"
          data={{
            headline: title,
            description: description,
            image: fullImageUrl,
            author: {
              name: article.author,
              url: `${baseUrl}/author/${article.author.toLowerCase().replace(/\s+/g, "-")}`,
            },
            publisher: {
              name: "Allixios",
              url: baseUrl,
              logo: `${baseUrl}/logo.png`,
              description: "Professional content platform",
              sameAs: [],
            },
            datePublished: article.publishedTime,
            dateModified: article.modifiedTime,
            url: fullCanonicalUrl,
            keywords: article.tags,
          }}
        />
      )}

      {/* Breadcrumb Structured Data */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <StructuredData
          type="breadcrumb"
          data={{
            items: breadcrumbs,
          }}
        />
      )}
    </>
  )
}
