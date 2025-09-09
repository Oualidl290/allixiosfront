import type { MetadataRoute } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://allixios.com"

// Mock data - replace with actual API calls
const categories = ["technology", "business", "health", "lifestyle", "education", "travel"]
const articles = [
  { slug: "future-of-ai-in-business", category: "technology", lastModified: "2024-01-15", priority: 0.9 },
  { slug: "sustainable-living-small-changes", category: "lifestyle", lastModified: "2024-01-14", priority: 0.8 },
  { slug: "mental-health-digital-age", category: "health", lastModified: "2024-01-13", priority: 0.8 },
  { slug: "remote-work-revolution", category: "business", lastModified: "2024-01-12", priority: 0.8 },
  { slug: "science-of-learning", category: "education", lastModified: "2024-01-11", priority: 0.7 },
  { slug: "travel-photography-authentic-moments", category: "travel", lastModified: "2024-01-10", priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages with enhanced priority and change frequency
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ]

  // Category pages with enhanced metadata
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/category/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  // Article pages with dynamic priority based on recency
  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/category/${article.category}/${article.slug}`,
    lastModified: new Date(article.lastModified),
    changeFrequency: "monthly" as const,
    priority: article.priority,
  }))

  return [...staticPages, ...categoryPages, ...articlePages]
}
