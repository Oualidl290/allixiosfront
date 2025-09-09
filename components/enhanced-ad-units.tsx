"use client"
import { AdUnit, AdUnitPresets } from "./ad-unit"
import { useAdManager } from "./ad-manager"

// Header banner ad component
export function HeaderBannerAd() {
  const { adsEnabled } = useAdManager()

  if (!adsEnabled) return null

  return (
    <div className="w-full bg-muted/50 py-2 text-center border-b">
      <AdUnit
        {...AdUnitPresets.headerBanner}
        lazy={false} // Load immediately for above-fold content
      />
    </div>
  )
}

// Sidebar skyscraper ad component
export function SidebarAd({ className = "" }: { className?: string }) {
  const { adsEnabled } = useAdManager()

  if (!adsEnabled) return null

  return (
    <div className={className}>
      <AdUnit
        {...AdUnitPresets.sidebarSkyscraper}
        refreshInterval={300} // Refresh every 5 minutes
      />
    </div>
  )
}

// In-article responsive ad component
export function InArticleAd({ className = "" }: { className?: string }) {
  const { adsEnabled } = useAdManager()

  if (!adsEnabled) return null

  return (
    <div className={`flex justify-center ${className}`}>
      <AdUnit {...AdUnitPresets.inArticleResponsive} />
    </div>
  )
}

// Footer banner ad component
export function FooterBannerAd() {
  const { adsEnabled } = useAdManager()

  if (!adsEnabled) return null

  return (
    <div className="w-full bg-muted/50 py-2 text-center border-t">
      <AdUnit {...AdUnitPresets.footerBanner} />
    </div>
  )
}

// Mobile sticky ad component
export function MobileStickyAd() {
  const { adsEnabled } = useAdManager()

  if (!adsEnabled) return null

  return (
    <AdUnit
      {...AdUnitPresets.mobileSticky}
      lazy={false} // Load immediately for sticky ads
    />
  )
}

// Native ad component that blends with content
export function NativeAd({
  title = "Recommended for You",
  className = "",
}: {
  title?: string
  className?: string
}) {
  const { adsEnabled } = useAdManager()

  if (!adsEnabled) return null

  return (
    <div className={`border rounded-lg p-4 bg-card ${className}`}>
      <h3 className="text-sm font-medium text-muted-foreground mb-3">{title}</h3>
      <AdUnit slot="6677889900" format="fluid" style={{ minHeight: "200px" }} className="w-full" />
    </div>
  )
}
