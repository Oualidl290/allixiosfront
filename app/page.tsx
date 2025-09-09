import Link from "next/link"
import { Calendar, Clock, User, ArrowRight, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AdUnit } from "@/components/ad-unit"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Mock data - replace with actual API calls
const featuredArticles = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence in Business",
    excerpt: "Explore how AI is transforming industries and creating new opportunities for businesses worldwide.",
    category: "Technology",
    author: "Sarah Johnson",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    image: "/ai-business-technology.jpg",
    slug: "future-of-ai-in-business",
  },
  {
    id: 2,
    title: "Sustainable Living: Small Changes, Big Impact",
    excerpt: "Discover practical ways to reduce your environmental footprint and live more sustainably.",
    category: "Lifestyle",
    author: "Michael Chen",
    publishedAt: "2024-01-14",
    readTime: "6 min read",
    image: "/sustainable-living-environment.jpg",
    slug: "sustainable-living-small-changes",
  },
  {
    id: 3,
    title: "Mental Health in the Digital Age",
    excerpt: "Understanding the impact of technology on mental health and strategies for digital wellness.",
    category: "Health",
    author: "Dr. Emily Rodriguez",
    publishedAt: "2024-01-13",
    readTime: "10 min read",
    image: "/mental-health-digital-wellness.jpg",
    slug: "mental-health-digital-age",
  },
  {
    id: 4,
    title: "Remote Work Revolution: Building Effective Teams",
    excerpt: "Best practices for managing remote teams and maintaining productivity in distributed workforces.",
    category: "Business",
    author: "James Wilson",
    publishedAt: "2024-01-12",
    readTime: "7 min read",
    image: "/remote-work-collaboration.png",
    slug: "remote-work-revolution",
  },
  {
    id: 5,
    title: "The Science of Learning: Effective Study Techniques",
    excerpt: "Evidence-based methods to improve learning efficiency and retention for students and professionals.",
    category: "Education",
    author: "Prof. Lisa Anderson",
    publishedAt: "2024-01-11",
    readTime: "9 min read",
    image: "/learning-study-techniques-education.jpg",
    slug: "science-of-learning",
  },
  {
    id: 6,
    title: "Travel Photography: Capturing Authentic Moments",
    excerpt: "Tips and techniques for taking compelling travel photos that tell meaningful stories.",
    category: "Travel",
    author: "Alex Thompson",
    publishedAt: "2024-01-10",
    readTime: "5 min read",
    image: "/travel-photography-authentic-moments.jpg",
    slug: "travel-photography-authentic-moments",
  },
]

const trendingTopics = [
  "Artificial Intelligence",
  "Sustainable Living",
  "Remote Work",
  "Mental Health",
  "Digital Marketing",
  "Cryptocurrency",
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Discover Insights That <span className="text-primary">Matter</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto mb-8 leading-relaxed">
            Your trusted source for expert content on technology, business, health, and lifestyle. Stay informed with
            our carefully curated articles and analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/category/technology">
                Explore Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </section>

        {/* Trending Topics */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Trending Topics</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {trendingTopics.map((topic) => (
              <Badge key={topic} variant="secondary" className="text-sm py-1 px-3">
                {topic}
              </Badge>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Articles Grid */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {featuredArticles.map((article) => (
                  <Card key={article.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-3 left-3" variant="secondary">
                          {article.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        <Link href={`/category/${article.category.toLowerCase()}/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* In-Article Ad */}
            <section className="mb-12">
              <AdUnit slot="1234567890" className="h-64 w-full" style={{ minHeight: "250px" }} />
            </section>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg">
                Load More Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Sidebar Ad */}
            <AdUnit slot="0987654321" format="vertical" className="h-96 w-full" style={{ minHeight: "600px" }} />

            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Stay Updated</h3>
                <p className="text-sm text-muted-foreground">Get the latest articles delivered to your inbox.</p>
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

            {/* Popular Articles */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Popular This Week</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {featuredArticles.slice(0, 3).map((article, index) => (
                  <div key={article.id} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium line-clamp-2 mb-1">
                        <Link
                          href={`/category/${article.category.toLowerCase()}/${article.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {article.title}
                        </Link>
                      </h4>
                      <p className="text-xs text-muted-foreground">{article.readTime}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
