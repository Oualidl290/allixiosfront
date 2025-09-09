import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import ClientLayout from "./ClientLayout"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Allixios - Professional Content Platform",
    template: "%s | Allixios",
  },
  description:
    "Your trusted source for insightful articles on technology, business, health, and lifestyle. Expert content and analysis from industry professionals.",
  generator: "Allixios",
  applicationName: "Allixios",
  referrer: "origin-when-cross-origin",
  keywords: [
    "content platform",
    "articles",
    "technology news",
    "business insights",
    "health tips",
    "lifestyle advice",
    "expert analysis",
    "professional content",
    "AI",
    "sustainability",
    "remote work",
    "digital wellness",
  ],
  authors: [{ name: "Allixios Team", url: "https://allixios.com/about" }],
  creator: "Allixios",
  publisher: "Allixios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://allixios.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Allixios",
    title: "Allixios - Professional Content Platform",
    description:
      "Your trusted source for insightful articles on technology, business, health, and lifestyle. Expert content and analysis from industry professionals.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Allixios - Professional Content Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Allixios - Professional Content Platform",
    description: "Your trusted source for insightful articles on technology, business, health, and lifestyle.",
    creator: "@allixios",
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>
      <body className="font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
