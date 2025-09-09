"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export function AdSenseScript() {
  useEffect(() => {
    // Only load AdSense in production
    if (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID) {
      const script = document.createElement("script")
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      script.async = true
      script.crossOrigin = "anonymous"
      script.setAttribute("data-ad-client", process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID)

      // Add error handling
      script.onerror = () => {
        console.warn("AdSense script failed to load - ad blocker may be active")
      }

      document.head.appendChild(script)

      // Initialize adsbygoogle array
      window.adsbygoogle = window.adsbygoogle || []

      return () => {
        // Cleanup script on unmount
        const existingScript = document.querySelector(`script[src="${script.src}"]`)
        if (existingScript) {
          document.head.removeChild(existingScript)
        }
      }
    }
  }, [])

  return null
}
