"use client"

import type React from "react"

import Link from "next/link"
import { Mail, Twitter, Facebook, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FooterBannerAd, MobileStickyAd } from "./enhanced-ad-units"

const categories = ["Technology", "Business", "Health", "Lifestyle", "Education", "Travel"]

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "RSS Feed", href: "/rss.xml" },
]

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup
    console.log("Newsletter signup submitted")
  }

  return (
    <footer className="bg-muted/30 border-t">
      <FooterBannerAd />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">Allixios</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted source for insightful articles on technology, business, health, and lifestyle. Stay informed
              with our expert content and analysis.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/category/${category.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest articles and insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input type="email" placeholder="Enter your email" required className="text-sm" />
              <Button type="submit" size="sm" className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Allixios. All rights reserved. Built with ❤️ for content creators.
          </p>
        </div>
      </div>

      <MobileStickyAd />
    </footer>
  )
}
