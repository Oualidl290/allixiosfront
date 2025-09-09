"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

interface AdManagerContextType {
  adsEnabled: boolean
  adBlockerDetected: boolean
  toggleAds: () => void
}

const AdManagerContext = createContext<AdManagerContextType>({
  adsEnabled: true,
  adBlockerDetected: false,
  toggleAds: () => {},
})

export function useAdManager() {
  return useContext(AdManagerContext)
}

interface AdManagerProviderProps {
  children: React.ReactNode
}

export function AdManagerProvider({ children }: AdManagerProviderProps) {
  const [adsEnabled, setAdsEnabled] = useState(true)
  const [adBlockerDetected, setAdBlockerDetected] = useState(false)

  // Detect ad blocker
  useEffect(() => {
    const detectAdBlocker = async () => {
      try {
        // Create a test element that ad blockers typically block
        const testAd = document.createElement("div")
        testAd.innerHTML = "&nbsp;"
        testAd.className = "adsbox"
        testAd.style.position = "absolute"
        testAd.style.left = "-10000px"
        testAd.style.width = "1px"
        testAd.style.height = "1px"

        document.body.appendChild(testAd)

        // Wait a bit then check if it was blocked
        setTimeout(() => {
          const isBlocked = testAd.offsetHeight === 0
          setAdBlockerDetected(isBlocked)
          document.body.removeChild(testAd)
        }, 100)
      } catch (error) {
        // If there's an error, assume ad blocker is present
        setAdBlockerDetected(true)
      }
    }

    detectAdBlocker()
  }, [])

  // Load user preference from localStorage
  useEffect(() => {
    const savedPreference = localStorage.getItem("adsEnabled")
    if (savedPreference !== null) {
      setAdsEnabled(JSON.parse(savedPreference))
    }
  }, [])

  const toggleAds = () => {
    const newState = !adsEnabled
    setAdsEnabled(newState)
    localStorage.setItem("adsEnabled", JSON.stringify(newState))
  }

  return (
    <AdManagerContext.Provider value={{ adsEnabled, adBlockerDetected, toggleAds }}>
      {children}
    </AdManagerContext.Provider>
  )
}

// Ad blocker notice component
export function AdBlockerNotice() {
  const { adBlockerDetected } = useAdManager()
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const isDismissed = localStorage.getItem("adBlockerNoticeDismissed")
    if (isDismissed) {
      setDismissed(true)
    }
  }, [])

  const handleDismiss = () => {
    setDismissed(true)
    localStorage.setItem("adBlockerNoticeDismissed", "true")
  }

  if (!adBlockerDetected || dismissed) {
    return null
  }

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
      <div className="flex">
        <div className="flex-1">
          <p className="text-sm text-yellow-700">
            <strong>Ad Blocker Detected:</strong> We rely on ads to keep our content free. Please consider disabling
            your ad blocker or supporting us through other means.
          </p>
        </div>
        <button onClick={handleDismiss} className="ml-4 text-yellow-400 hover:text-yellow-600">
          ×
        </button>
      </div>
    </div>
  )
}
