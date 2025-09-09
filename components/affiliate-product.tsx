"use client"
import { ExternalLink, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AffiliateProductProps {
  title: string
  description: string
  price: string
  originalPrice?: string
  rating?: number
  reviewCount?: number
  image: string
  affiliateLink: string
  category?: string
  sponsored?: boolean
  className?: string
}

export function AffiliateProduct({
  title,
  description,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  affiliateLink,
  category,
  sponsored = false,
  className = "",
}: AffiliateProductProps) {
  const handleClick = () => {
    // Track affiliate click for analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "affiliate_click", {
        event_category: "monetization",
        event_label: title,
        value: Number.parseFloat(price.replace(/[^0-9.]/g, "")),
      })
    }
  }

  return (
    <Card className={`group hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <CardContent className="p-4">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                {sponsored && (
                  <Badge variant="outline" className="text-xs mb-1">
                    Sponsored
                  </Badge>
                )}
                {category && (
                  <Badge variant="secondary" className="text-xs mb-1 ml-1">
                    {category}
                  </Badge>
                )}
              </div>
            </div>

            <h4 className="font-semibold text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">
              {title}
            </h4>

            <p className="text-xs text-muted-foreground mb-2 line-clamp-2 leading-relaxed">{description}</p>

            {rating && (
              <div className="flex items-center gap-1 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  {rating.toFixed(1)}
                  {reviewCount && ` (${reviewCount})`}
                </span>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary text-sm">{price}</span>
                {originalPrice && <span className="text-xs text-muted-foreground line-through">{originalPrice}</span>}
              </div>
              <Button
                size="sm"
                variant="outline"
                asChild
                onClick={handleClick}
                className="text-xs px-2 py-1 h-auto bg-transparent"
              >
                <a href={affiliateLink} target="_blank" rel="noopener noreferrer sponsored">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View Deal
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Affiliate disclosure component
export function AffiliateDisclosure({ className = "" }: { className?: string }) {
  return (
    <div className={`text-xs text-muted-foreground bg-muted/30 p-3 rounded-lg border ${className}`}>
      <p>
        <strong>Affiliate Disclosure:</strong> This post contains affiliate links. When you click on these links and
        make a purchase, we may earn a commission at no additional cost to you. This helps support our content creation.
      </p>
    </div>
  )
}
