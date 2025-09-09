import type { Metadata } from "next"
import Link from "next/link"
import { Users, Target, Award, TrendingUp, Mail, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InArticleAd } from "@/components/enhanced-ad-units"
import { MonetizationSidebar } from "@/components/monetization-sidebar"

export const metadata: Metadata = {
  title: "About Us - Our Mission & Team",
  description:
    "Learn about Allixios, our mission to provide expert content on technology, business, health, and lifestyle. Meet our team of industry professionals and content creators.",
  keywords: ["about allixios", "our mission", "content team", "expert writers", "company story"],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Allixios - Our Mission & Team",
    description: "Learn about our mission to provide expert content on technology, business, health, and lifestyle.",
    type: "website",
    url: "/about",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "About Allixios - Our Mission & Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Allixios - Our Mission & Team",
    description: "Learn about our mission to provide expert content on technology, business, health, and lifestyle.",
  },
}

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Technology Editor",
    bio: "10+ years covering AI and emerging technologies. Former tech lead at Fortune 500 companies.",
    image: "/placeholder.svg?height=200&width=200",
    social: {
      twitter: "https://twitter.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson",
    },
  },
  {
    name: "Michael Chen",
    role: "Sustainability Expert",
    bio: "Environmental advocate and consultant with 15+ years in sustainable living practices.",
    image: "/placeholder.svg?height=200&width=200",
    social: {
      twitter: "https://twitter.com/michaelchen",
      linkedin: "https://linkedin.com/in/michaelchen",
    },
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Health & Wellness Writer",
    bio: "Licensed physician specializing in digital wellness and mental health advocacy.",
    image: "/placeholder.svg?height=200&width=200",
    social: {
      linkedin: "https://linkedin.com/in/emilyrodriguez",
    },
  },
  {
    name: "James Wilson",
    role: "Business Strategy Analyst",
    bio: "Former management consultant with expertise in remote work and team building.",
    image: "/placeholder.svg?height=200&width=200",
    social: {
      twitter: "https://twitter.com/jameswilson",
      linkedin: "https://linkedin.com/in/jameswilson",
    },
  },
]

const achievements = [
  {
    icon: Users,
    number: "500K+",
    label: "Monthly Readers",
    description: "Growing community of engaged readers",
  },
  {
    icon: Award,
    number: "50+",
    label: "Expert Contributors",
    description: "Industry professionals and thought leaders",
  },
  {
    icon: TrendingUp,
    number: "1000+",
    label: "Articles Published",
    description: "High-quality content across all categories",
  },
  {
    icon: Target,
    number: "95%",
    label: "Reader Satisfaction",
    description: "Based on our latest reader survey",
  },
]

const testimonials = [
  {
    quote:
      "Allixios has become my go-to source for staying updated on the latest technology trends. The insights are always practical and well-researched.",
    author: "Alex Thompson",
    role: "CTO, TechStart Inc.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "The sustainability articles have genuinely changed how I approach daily life. Small changes, big impact indeed!",
    author: "Maria Garcia",
    role: "Environmental Consultant",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "As a business leader, I find the remote work and team management content incredibly valuable for our distributed workforce.",
    author: "David Kim",
    role: "VP of Operations, GlobalCorp",
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function AboutPage() {
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
          <span className="text-foreground">About</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                About <span className="text-primary">Allixios</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We're on a mission to democratize access to expert knowledge and insights across technology, business,
                health, and lifestyle. Our platform connects readers with industry professionals who share practical,
                actionable content that makes a real difference.
              </p>
            </section>

            {/* Our Story */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Our Story</h2>
              <div className="prose prose-lg max-w-none leading-relaxed">
                <p>
                  Founded in 2023, Allixios emerged from a simple observation: the internet was full of content, but
                  finding truly expert, actionable insights was becoming increasingly difficult. We set out to change
                  that by creating a platform where industry professionals could share their knowledge in an accessible,
                  engaging format.
                </p>
                <p>
                  What started as a small blog has grown into a comprehensive content platform serving hundreds of
                  thousands of readers monthly. Our success stems from our unwavering commitment to quality, accuracy,
                  and practical value in every piece of content we publish.
                </p>
                <p>
                  Today, we work with over 50 expert contributors across various fields, from AI researchers and
                  sustainability consultants to healthcare professionals and business strategists. Each brings unique
                  insights that help our readers make informed decisions in their personal and professional lives.
                </p>
              </div>
            </section>

            {/* Mission & Values */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Our Mission & Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-semibold">Our Mission</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      To bridge the gap between expert knowledge and everyday application, making complex topics
                      accessible and actionable for everyone.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-semibold">Our Values</h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        • <strong>Expertise:</strong> Only industry professionals contribute content
                      </li>
                      <li>
                        • <strong>Accuracy:</strong> Every article is fact-checked and verified
                      </li>
                      <li>
                        • <strong>Practicality:</strong> Focus on actionable insights and real-world application
                      </li>
                      <li>
                        • <strong>Accessibility:</strong> Complex topics explained in clear, understandable language
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* In-Article Ad */}
            <InArticleAd className="mb-16" />

            {/* Achievements */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                      <div className="font-semibold mb-2">{achievement.label}</div>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Team */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                          <Badge variant="secondary" className="mb-3 text-xs">
                            {member.role}
                          </Badge>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                          <div className="flex gap-2">
                            {member.social.twitter && (
                              <Button variant="ghost" size="sm" asChild>
                                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                                  <Twitter className="h-4 w-4" />
                                </a>
                              </Button>
                            )}
                            {member.social.linkedin && (
                              <Button variant="ghost" size="sm" asChild>
                                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                  <Linkedin className="h-4 w-4" />
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">What Our Readers Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.author}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold text-sm">{testimonial.author}</div>
                          <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center bg-muted/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Stay updated with our latest insights and join thousands of readers who trust Allixios for expert
                content and practical advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/category/technology">Explore Articles</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <MonetizationSidebar showAffiliateProducts={false} showDonation={true} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
