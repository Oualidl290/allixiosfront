import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://allixios.com"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/", "/_next/", "/search?*", "/*?utm_*", "/*?ref=*"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/private/", "/admin/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/private/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
