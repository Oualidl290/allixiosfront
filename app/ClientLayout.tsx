"use client"

import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { AdSenseScript } from "@/components/adsense-script"
import { AdManagerProvider, AdBlockerNotice } from "@/components/ad-manager"
import { useSearchParams } from "next/navigation"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const searchParams = useSearchParams()

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <AdSenseScript />
      <AdManagerProvider>
        <AdBlockerNotice />
        {children}
      </AdManagerProvider>
      <Analytics />
    </ThemeProvider>
  )
}
