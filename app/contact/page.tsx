"use client"

import type React from "react"

import type { Metadata } from "next"
import Link from "next/link"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, Twitter, Facebook, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InArticleAd } from "@/components/enhanced-ad-units"
import { MonetizationSidebar } from "@/components/monetization-sidebar"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@allixios.com",
    description: "Send us an email and we'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Available Monday to Friday, 9 AM - 6 PM EST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Content Street, Digital City, DC 12345",
    description: "Our headquarters - visitors welcome by appointment",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 9 AM - 6 PM EST",
    description: "We're here to help during business hours",
  },
]

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/allixios", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com/allixios", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com/company/allixios", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/allixios", label: "GitHub" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Track form submission
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "contact_form_submit", {
          event_category: "engagement",
          event_label: formData.category,
        })
      }

      // TODO: Implement actual form submission
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Contact</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Hero Section */}
            <section className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Have a question, suggestion, or want to collaborate? We'd love to hear from you. Reach out and let's
                start a conversation.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <info.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-primary font-medium mb-2">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Contact Form */}
            <section className="mb-12">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Brief subject of your message"
                        />
                      </div>
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium mb-2">
                          Category
                        </label>
                        <Select value={formData.category} onValueChange={handleSelectChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="collaboration">Collaboration</SelectItem>
                            <SelectItem value="guest-post">Guest Post</SelectItem>
                            <SelectItem value="advertising">Advertising</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your inquiry..."
                        className="resize-none"
                      />
                    </div>

                    {submitStatus === "success" && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-green-800 text-sm">
                          Thank you for your message! We'll get back to you within 24 hours.
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-800 text-sm">
                          Sorry, there was an error sending your message. Please try again.
                        </p>
                      </div>
                    )}

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </section>

            {/* In-Article Ad */}
            <InArticleAd className="mb-12" />

            {/* Social Media & Additional Info */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Social Media */}
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-semibold">Follow Us</h3>
                    <p className="text-muted-foreground">
                      Stay connected with us on social media for the latest updates and insights.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3">
                      {socialLinks.map((social, index) => (
                        <Button key={index} variant="outline" size="sm" asChild>
                          <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                            <social.icon className="h-4 w-4" />
                          </a>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ */}
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-semibold">Quick Questions?</h3>
                    <p className="text-muted-foreground">
                      Check our frequently asked questions or browse our help center.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" asChild>
                        <Link href="/faq">View FAQ</Link>
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" asChild>
                        <Link href="/help">Help Center</Link>
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" asChild>
                        <Link href="/privacy">Privacy Policy</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <MonetizationSidebar showAffiliateProducts={false} showNewsletter={true} showDonation={false} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

// Export metadata for the page
export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Have questions or want to collaborate? Contact the Allixios team. We're here to help with inquiries about our content, partnerships, and more.",
  keywords: ["contact allixios", "get in touch", "customer support", "collaboration", "guest posts"],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Allixios - Get in Touch",
    description:
      "Have questions or want to collaborate? Contact the Allixios team for inquiries about content, partnerships, and more.",
    type: "website",
    url: "/contact",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Allixios - Get in Touch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Allixios - Get in Touch",
    description:
      "Have questions or want to collaborate? Contact the Allixios team for inquiries about content, partnerships, and more.",
  },
}
