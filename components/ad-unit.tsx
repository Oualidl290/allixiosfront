"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface AdUnitProps {
  slot: string
  format?: "auto" | "rectangle" | "vertical" | "horizontal" | "fluid"
  responsive?: boolean
  className?: string
  style?: React.CSSProperties
  lazy?: boolean
  refreshInterval?: number // in seconds
  testMode?: boolean
}

export function AdUnit({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  style,
  lazy = true,
  refreshInterval,
  testMode = false,
}: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(!lazy)
  const [adLoaded, setAdLoaded] = useState(false)
  const [adError, setAdError] = useState(false)
  const refreshIntervalRef = useRef<NodeJS.Timeout>()

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || isVisible) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1, rootMargin: "100px" },
    )

    if (adRef.current) {
      observer.observe(adRef.current)
    }

    return () => observer.disconnect()
  }, [lazy, isVisible])

  // Load ad when visible
  useEffect(() => {
    if (!isVisible || adLoaded || process.env.NODE_ENV !== "production") return

    const loadAd = () => {
      try {
        if (typeof window !== "undefined" && window.adsbygoogle && adRef.current) {
          // Check if ad is already pushed
          const existingAd = adRef.current.querySelector(".adsbygoogle")
          if (existingAd && existingAd.getAttribute("data-adsbygoogle-status")) {
            return
          }

          window.adsbygoogle.push({})
          setAdLoaded(true)
        }
      } catch (error) {
        console.warn("AdSense error:", error)
        setAdError(true)
      }
    }

    // Delay ad loading slightly for better performance
    const timer = setTimeout(loadAd, 100)
    return () => clearTimeout(timer)
  }, [isVisible, adLoaded])

  // Auto-refresh ads (if enabled)
  useEffect(() => {
    if (!refreshInterval || !adLoaded || process.env.NODE_ENV !== "production") return

    refreshIntervalRef.current = setInterval(() => {
      if (adRef.current && window.adsbygoogle) {
        try {
          // Clear existing ad
          const adElement = adRef.current.querySelector(".adsbygoogle")
          if (adElement) {
            adElement.innerHTML = ""
            adElement.removeAttribute("data-adsbygoogle-status")
            window.adsbygoogle.push({})
          }
        } catch (error) {
          console.warn("Ad refresh error:", error)
        }
      }
    }, refreshInterval * 1000)

    return () => {
      if (refreshIntervalRef.current) {
        clearInterval(refreshIntervalRef.current)
      }
    }
  }, [refreshInterval, adLoaded])

  // Development/test mode placeholder
  if (process.env.NODE_ENV === "development" || testMode) {
    const placeholderText = `AdSense Unit (${slot})`
    const placeholderStyle = {
      minHeight: "250px",
      ...style,
    }

    return (
      <div
        ref={adRef}
        className={`bg-muted/30 border border-dashed border-muted-foreground/20 rounded flex items-center justify-center text-xs text-muted-foreground ${className}`}
        style={placeholderStyle}
      >
        {placeholderText}
      </div>
    )
  }

  // Production ad unit
  if (!isVisible) {
    return (
      <div
        ref={adRef}
        className={`bg-muted/10 rounded flex items-center justify-center ${className}`}
        style={{ minHeight: "250px", ...style }}
      >
        <div className="text-xs text-muted-foreground">Loading ad...</div>
      </div>
    )
  }

  return (
    <div ref={adRef} className={className} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
        data-ad-test={testMode ? "on" : undefined}
      />
      {adError && (
        <div className="bg-muted/20 border border-dashed border-muted-foreground/20 rounded p-4 text-center text-xs text-muted-foreground">
          Ad could not be loaded
        </div>
      )}
    </div>
  )
}

// Predefined ad unit configurations
export const AdUnitPresets = {
  headerBanner: {
    slot: "1234567890",
    format: "horizontal" as const,
    style: { height: "90px", width: "100%" },
    className: "w-full",
  },
  sidebarSkyscraper: {
    slot: "0987654321",
    format: "vertical" as const,
    style: { height: "600px", width: "160px" },
    className: "w-full",
  },
  inArticleResponsive: {
    slot: "1122334455",
    format: "fluid" as const,
    style: { minHeight: "250px" },
    className: "w-full my-8",
  },
  footerBanner: {
    slot: "5544332211",
    format: "horizontal" as const,
    style: { height: "90px", width: "100%" },
    className: "w-full",
  },
  mobileSticky: {
    slot: "9988776655",
    format: "rectangle" as const,
    style: { height: "50px", width: "320px" },
    className: "fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 md:hidden",
  },
}
