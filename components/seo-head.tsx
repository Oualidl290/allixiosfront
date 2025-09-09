import Head from "next/head"

interface SEOHeadProps {
  title: string
  description: string
  canonical?: string
  image?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  author?: string
  tags?: string[]
}

export function SEOHead({
  title,
  description,
  canonical,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  tags,
}: SEOHeadProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://allixios.com"
  const fullImageUrl = image ? `${siteUrl}${image}` : `${siteUrl}/og-image.jpg`
  const fullCanonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl

  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebSite",
    headline: title,
    description: description,
    image: fullImageUrl,
    url: fullCanonicalUrl,
    ...(type === "article" && {
      author: {
        "@type": "Person",
        name: author,
      },
      publisher: {
        "@type": "Organization",
        name: "Allixios",
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`,
        },
      },
      datePublished: publishedTime,
      dateModified: modifiedTime,
      keywords: tags?.join(", "),
    }),
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={tags?.join(", ")} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content="Allixios" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@allixios" />

      {/* Article-specific meta tags */}
      {type === "article" && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:modified_time" content={modifiedTime} />
          {tags?.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </Head>
  )
}
