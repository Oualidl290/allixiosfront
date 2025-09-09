"use client"

import type React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Coffee, Heart } from "lucide-react"
import { SidebarAd } from "./enhanced-ad-units"
import { AffiliateProduct, AffiliateDisclosure } from "./affiliate-product"
import { useAdManager } from "./ad-manager"

// Sample affiliate products data
const sampleProducts = [
  {
    title: "Smart Home Energy Monitor",
    description: "Track your home's energy usage in real-time and save on electricity bills",
    price: "$129.99",
    originalPrice: "$159.99",
    rating: 4.5,
    reviewCount: 1247,
    image: "/placeholder.svg?height=100&width=100",
    affiliateLink: "https://amazon.com/dp/example1?tag=allixios-20",
    category: "Smart Home",
    sponsored: true,
  },
  {
    title: "AI for Business Leaders Book",
    description: "Comprehensive guide to implementing AI strategies in your organization",
    price: "$24.99",
    originalPrice: "$34.99",
    rating: 4.8,
    reviewCount: 892,
    image: "/placeholder.svg?height=100&width=100",
    affiliateLink: "https://amazon.com/dp/example2?tag=allixios-20",
    category: "Business",
  },
]

interface MonetizationSidebarProps {
  showAffiliateProducts?: boolean
  showNewsletter?: boolean
  showDonation?: boolean
  className?: string
}

export function MonetizationSidebar({
  showAffiliateProducts = true,
  showNewsletter = true,
  showDonation = false,
  className = "",
}: MonetizationSidebarProps) {
  const { adsEnabled } = useAdManager()

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Track newsletter signup
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "newsletter_signup", {
        event_category: "engagement",
        event_label: "sidebar",
      })
    }
    // TODO: Implement newsletter signup
    console.log("Newsletter signup submitted")
  }

  const handleDonation = () => {
    // Track donation click
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "donation_click", {
        event_category: "monetization",
        event_label: "sidebar",
      })
    }
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Primary Ad Unit */}
      {adsEnabled && <SidebarAd />}

      {/* Affiliate Products */}
      {showAffiliateProducts && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Recommended Products</h3>
          {sampleProducts.map((product, index) => (
            <AffiliateProduct key={index} {...product} />
          ))}
          <AffiliateDisclosure className="mt-4" />
        </div>
      )}

      {/* Newsletter Signup */}
      {showNewsletter && (
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Get the latest articles and insights delivered to your inbox weekly.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input type="email" placeholder="Enter your email" required className="text-sm" />
              <Button type="submit" className="w-full" size="sm">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe Free
              </Button>
            </form>
            <p className="text-xs text-muted-foreground text-center">No spam. Unsubscribe anytime.</p>
          </CardContent>
        </Card>
      )}

      {/* Support/Donation */}
      {showDonation && (
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Support Our Work</h3>
            <p className="text-sm text-muted-foreground">
              Help us create more quality content by supporting our mission.
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full bg-transparent" size="sm" onClick={handleDonation} asChild>
              <a href="https://buymeacoffee.com/allixios" target="_blank" rel="noopener noreferrer">
                <Coffee className="h-4 w-4 mr-2" />
                Buy us a coffee
              </a>
            </Button>
            <Button variant="outline" className="w-full bg-transparent" size="sm" onClick={handleDonation} asChild>
              <a href="https://patreon.com/allixios" target="_blank" rel="noopener noreferrer">
                <Heart className="h-4 w-4 mr-2" />
                Become a Patron
              </a>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
