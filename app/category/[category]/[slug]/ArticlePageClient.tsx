"use client"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, Twitter, Facebook, Linkedin, Copy, ChevronRight, BookOpen, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AdUnit } from "@/components/ad-unit"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Mock article data - replace with actual API calls
const mockArticles = {
  "future-of-ai-in-business": {
    id: 1,
    title: "The Future of Artificial Intelligence in Business",
    excerpt: "Explore how AI is transforming industries and creating new opportunities for businesses worldwide.",
    content: `
      <p>Artificial Intelligence (AI) is no longer a futuristic concept confined to science fiction movies. Today, it's a transformative force reshaping how businesses operate, compete, and deliver value to customers across every industry imaginable.</p>
      
      <h2>The Current State of AI in Business</h2>
      <p>From chatbots handling customer service inquiries to sophisticated algorithms optimizing supply chains, AI has already found its way into numerous business applications. Companies like Amazon, Google, and Microsoft have invested billions in AI research and development, creating tools that are now accessible to businesses of all sizes.</p>
      
      <h3>Key Areas of AI Implementation</h3>
      <ul>
        <li><strong>Customer Service:</strong> AI-powered chatbots and virtual assistants provide 24/7 support</li>
        <li><strong>Data Analysis:</strong> Machine learning algorithms identify patterns in vast datasets</li>
        <li><strong>Process Automation:</strong> Robotic Process Automation (RPA) streamlines repetitive tasks</li>
        <li><strong>Predictive Analytics:</strong> AI forecasts market trends and customer behavior</li>
      </ul>
      
      <h2>Emerging Opportunities</h2>
      <p>As AI technology continues to evolve, new opportunities are emerging that promise to revolutionize business operations even further. Generative AI, for instance, is enabling businesses to create content, design products, and solve complex problems at unprecedented speeds.</p>
      
      <blockquote>
        "AI is not about replacing humans, but about augmenting human capabilities to achieve better outcomes." - Industry Expert
      </blockquote>
      
      <h3>Industry-Specific Applications</h3>
      <p>Different industries are leveraging AI in unique ways:</p>
      
      <h4>Healthcare</h4>
      <p>AI is revolutionizing medical diagnosis, drug discovery, and personalized treatment plans. Machine learning algorithms can analyze medical images with accuracy that often surpasses human specialists.</p>
      
      <h4>Finance</h4>
      <p>Financial institutions use AI for fraud detection, algorithmic trading, and risk assessment. AI-powered robo-advisors are democratizing investment management.</p>
      
      <h4>Retail</h4>
      <p>Recommendation engines, inventory optimization, and dynamic pricing strategies are transforming the retail landscape.</p>
      
      <h2>Challenges and Considerations</h2>
      <p>While the potential of AI is immense, businesses must navigate several challenges:</p>
      
      <ul>
        <li><strong>Data Privacy:</strong> Ensuring customer data is protected and used ethically</li>
        <li><strong>Bias and Fairness:</strong> Addressing algorithmic bias in AI systems</li>
        <li><strong>Skills Gap:</strong> Finding and training talent with AI expertise</li>
        <li><strong>Integration Complexity:</strong> Seamlessly incorporating AI into existing systems</li>
      </ul>
      
      <h2>The Road Ahead</h2>
      <p>The future of AI in business looks incredibly promising. As technology continues to advance and become more accessible, we can expect to see even more innovative applications emerge. Businesses that embrace AI today will be better positioned to compete in tomorrow's marketplace.</p>
      
      <p>The key to success lies not just in adopting AI technology, but in understanding how to integrate it strategically into business processes while maintaining a human-centered approach to customer service and employee development.</p>
    `,
    category: "Technology",
    author: {
      name: "Sarah Johnson",
      bio: "Sarah is a technology journalist with over 10 years of experience covering AI and emerging technologies. She holds a Master's degree in Computer Science and has worked with leading tech companies to understand the practical applications of AI in business.",
      avatar: "/placeholder.svg?height=80&width=80",
      social: {
        twitter: "https://twitter.com/sarahjohnson",
        linkedin: "https://linkedin.com/in/sarahjohnson",
      },
    },
    publishedAt: "2024-01-15",
    updatedAt: "2024-01-15",
    readTime: "8 min read",
    image: "/ai-business-technology.jpg",
    slug: "future-of-ai-in-business",
    tags: ["AI", "Business", "Technology", "Innovation"],
    tableOfContents: [
      { id: "current-state", title: "The Current State of AI in Business", level: 2 },
      { id: "key-areas", title: "Key Areas of AI Implementation", level: 3 },
      { id: "emerging-opportunities", title: "Emerging Opportunities", level: 2 },
      { id: "industry-applications", title: "Industry-Specific Applications", level: 3 },
      { id: "challenges", title: "Challenges and Considerations", level: 2 },
      { id: "road-ahead", title: "The Road Ahead", level: 2 },
    ],
  },
  "sustainable-living-small-changes": {
    id: 2,
    title: "Sustainable Living: Small Changes, Big Impact",
    excerpt: "Discover practical ways to reduce your environmental footprint and live more sustainably.",
    content: `
      <p>In an era of climate change and environmental awareness, sustainable living has become more than just a trend—it's a necessity. The good news is that making a positive impact doesn't require dramatic lifestyle changes. Small, consistent actions can lead to significant environmental benefits.</p>
      
      <h2>Understanding Sustainable Living</h2>
      <p>Sustainable living means adopting lifestyle choices that reduce your environmental impact while maintaining or improving your quality of life. It's about finding balance between meeting our current needs without compromising the ability of future generations to meet theirs.</p>
      
      <h2>Simple Changes for Your Home</h2>
      <h3>Energy Efficiency</h3>
      <ul>
        <li>Switch to LED light bulbs</li>
        <li>Unplug electronics when not in use</li>
        <li>Use programmable thermostats</li>
        <li>Improve home insulation</li>
      </ul>
      
      <h3>Water Conservation</h3>
      <ul>
        <li>Fix leaky faucets promptly</li>
        <li>Install low-flow showerheads</li>
        <li>Collect rainwater for gardening</li>
        <li>Run dishwashers and washing machines with full loads</li>
      </ul>
      
      <h2>Sustainable Transportation</h2>
      <p>Transportation is one of the largest sources of greenhouse gas emissions. Consider these alternatives:</p>
      <ul>
        <li>Walk or bike for short trips</li>
        <li>Use public transportation</li>
        <li>Carpool or use ride-sharing services</li>
        <li>Work from home when possible</li>
      </ul>
      
      <h2>Mindful Consumption</h2>
      <p>Being conscious about what we buy and consume can significantly reduce our environmental footprint:</p>
      
      <h3>Food Choices</h3>
      <ul>
        <li>Buy local and seasonal produce</li>
        <li>Reduce meat consumption</li>
        <li>Minimize food waste</li>
        <li>Start composting</li>
      </ul>
      
      <h3>Shopping Habits</h3>
      <ul>
        <li>Buy only what you need</li>
        <li>Choose quality over quantity</li>
        <li>Support sustainable brands</li>
        <li>Buy second-hand when possible</li>
      </ul>
      
      <h2>The Ripple Effect</h2>
      <p>When you adopt sustainable practices, you inspire others to do the same. Your actions can influence family, friends, and community members, creating a positive ripple effect that extends far beyond your individual impact.</p>
    `,
    category: "Lifestyle",
    author: {
      name: "Michael Chen",
      bio: "Michael is an environmental advocate and sustainability consultant who helps individuals and businesses adopt eco-friendly practices. He has been living sustainably for over 15 years and shares practical tips for reducing environmental impact.",
      avatar: "/placeholder.svg?height=80&width=80",
      social: {
        twitter: "https://twitter.com/michaelchen",
        linkedin: "https://linkedin.com/in/michaelchen",
      },
    },
    publishedAt: "2024-01-14",
    updatedAt: "2024-01-14",
    readTime: "6 min read",
    image: "/sustainable-living-environment.jpg",
    slug: "sustainable-living-small-changes",
    tags: ["Sustainability", "Environment", "Lifestyle", "Green Living"],
    tableOfContents: [
      { id: "understanding", title: "Understanding Sustainable Living", level: 2 },
      { id: "home-changes", title: "Simple Changes for Your Home", level: 2 },
      { id: "transportation", title: "Sustainable Transportation", level: 2 },
      { id: "consumption", title: "Mindful Consumption", level: 2 },
      { id: "ripple-effect", title: "The Ripple Effect", level: 2 },
    ],
  },
}

// Related articles data
const relatedArticles = [
  {
    id: 3,
    title: "Mental Health in the Digital Age",
    category: "Health",
    readTime: "10 min read",
    image: "/mental-health-digital-wellness.jpg",
    slug: "mental-health-digital-age",
  },
  {
    id: 4,
    title: "Remote Work Revolution: Building Effective Teams",
    category: "Business",
    readTime: "7 min read",
    image: "/remote-work-collaboration.png",
    slug: "remote-work-revolution",
  },
  {
    id: 5,
    title: "The Science of Learning: Effective Study Techniques",
    category: "Education",
    readTime: "9 min read",
    image: "/learning-study-techniques-education.jpg",
    slug: "science-of-learning",
  },
]

// Affiliate products data
const affiliateProducts = [
  {
    id: 1,
    title: "Smart Home Energy Monitor",
    description: "Track your home's energy usage in real-time",
    price: "$129.99",
    image: "/placeholder.svg?height=100&width=100",
    link: "https://amazon.com/product1",
  },
  {
    id: 2,
    title: "AI for Business Leaders Book",
    description: "Comprehensive guide to implementing AI in your organization",
    price: "$24.99",
    image: "/placeholder.svg?height=100&width=100",
    link: "https://amazon.com/product2",
  },
]

interface ArticlePageProps {
  params: {
    category: string
    slug: string
  }
}

export default function ArticlePageClient({ params }: ArticlePageProps) {
  const article = mockArticles[params.slug as keyof typeof mockArticles]

  if (!article) {
    notFound()
  }

  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/category/${params.category}/${params.slug}`
  const shareText = `Check out this article: ${article.title}`

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href={`/category/${params.category}`} className="hover:text-primary transition-colors">
            {params.category.charAt(0).toUpperCase() + params.category.slice(1)}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground line-clamp-1">{article.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Article Content */}
          <article className="lg:col-span-3">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{article.category}</Badge>
                {article.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6 leading-tight">
                {article.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{article.excerpt}</p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <img
                      src={article.author.avatar || "/placeholder.svg"}
                      alt={article.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium">{article.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Social Share Buttons */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground mr-2">Share:</span>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(shareUrl)}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-8">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>

            {/* Table of Contents */}
            {article.tableOfContents && article.tableOfContents.length > 0 && (
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    <h3 className="text-lg font-semibold">Table of Contents</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    {article.tableOfContents.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className={`block text-sm hover:text-primary transition-colors ${
                          item.level === 3 ? "ml-4" : ""
                        }`}
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            )}

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none mb-8 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* In-Article Ad */}
            <div className="my-12">
              <AdUnit slot="1234567890" className="h-64 w-full" style={{ minHeight: "250px" }} />
            </div>

            {/* Author Bio */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <img
                    src={article.author.avatar || "/placeholder.svg"}
                    alt={article.author.name}
                    className="w-16 h-16 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">About {article.author.name}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{article.author.bio}</p>
                    <div className="flex gap-2">
                      {article.author.social.twitter && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={article.author.social.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-4 w-4 mr-2" />
                            Twitter
                          </a>
                        </Button>
                      )}
                      {article.author.social.linkedin && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={article.author.social.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Card key={relatedArticle.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={relatedArticle.image || "/placeholder.svg"}
                          alt={relatedArticle.title}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-2 left-2 text-xs" variant="secondary">
                          {relatedArticle.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        <Link href={`/category/${relatedArticle.category.toLowerCase()}/${relatedArticle.slug}`}>
                          {relatedArticle.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-muted-foreground">{relatedArticle.readTime}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Sidebar Ad */}
            <AdUnit slot="0987654321" format="vertical" className="h-96 w-full" style={{ minHeight: "600px" }} />

            {/* Affiliate Products */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Recommended Products</h3>
                <p className="text-sm text-muted-foreground">Products we recommend based on this article</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {affiliateProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2 mb-1">{product.title}</h4>
                      <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-primary">{product.price}</span>
                        <Button size="sm" variant="outline" asChild>
                          <a href={product.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Stay Updated</h3>
                <p className="text-sm text-muted-foreground">Get more articles like this delivered to your inbox.</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-input rounded-md text-sm"
                />
                <Button className="w-full" size="sm">
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}
