import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, User, Filter, Grid, List, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AdUnit } from "@/components/ad-unit"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Valid categories
const validCategories = ["technology", "business", "health", "lifestyle", "education", "travel"]

// Category descriptions
const categoryDescriptions = {
  technology: "Stay ahead with the latest in AI, software development, cybersecurity, and emerging technologies.",
  business: "Insights on entrepreneurship, leadership, marketing strategies, and business growth.",
  health: "Expert advice on wellness, mental health, nutrition, and medical breakthroughs.",
  lifestyle: "Tips for better living, productivity, relationships, and personal development.",
  education: "Learning strategies, educational technology, and academic insights for all ages.",
  travel: "Travel guides, photography tips, cultural insights, and adventure stories.",
}

// Mock articles data - replace with actual API calls
const mockArticles = {
  technology: [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in Business",
      excerpt: "Explore how AI is transforming industries and creating new opportunities for businesses worldwide.",
      author: "Sarah Johnson",
      publishedAt: "2024-01-15",
      readTime: "8 min read",
      image: "/ai-business-technology.jpg",
      slug: "future-of-ai-in-business",
      featured: true,
    },
    {
      id: 7,
      title: "Quantum Computing: Breaking the Barriers",
      excerpt: "Understanding quantum computing's potential to revolutionize data processing and cryptography.",
      author: "Dr. Mark Stevens",
      publishedAt: "2024-01-14",
      readTime: "12 min read",
      image: "/quantum-computing.png",
      slug: "quantum-computing-barriers",
      featured: false,
    },
    {
      id: 8,
      title: "Cybersecurity in the Age of Remote Work",
      excerpt: "Essential security practices for protecting digital assets in distributed work environments.",
      author: "Jennifer Liu",
      publishedAt: "2024-01-13",
      readTime: "6 min read",
      image: "/cybersecurity-remote-work.png",
      slug: "cybersecurity-remote-work",
      featured: false,
    },
  ],
  business: [
    {
      id: 4,
      title: "Remote Work Revolution: Building Effective Teams",
      excerpt: "Best practices for managing remote teams and maintaining productivity in distributed workforces.",
      author: "James Wilson",
      publishedAt: "2024-01-12",
      readTime: "7 min read",
      image: "/remote-work-collaboration.png",
      slug: "remote-work-revolution",
      featured: true,
    },
    {
      id: 9,
      title: "Startup Funding Strategies for 2024",
      excerpt: "Navigate the evolving landscape of venture capital and alternative funding sources.",
      author: "Maria Rodriguez",
      publishedAt: "2024-01-11",
      readTime: "9 min read",
      image: "/startup-funding-business.jpg",
      slug: "startup-funding-strategies-2024",
      featured: false,
    },
  ],
  health: [
    {
      id: 3,
      title: "Mental Health in the Digital Age",
      excerpt: "Understanding the impact of technology on mental health and strategies for digital wellness.",
      author: "Dr. Emily Rodriguez",
      publishedAt: "2024-01-13",
      readTime: "10 min read",
      image: "/mental-health-digital-wellness.jpg",
      slug: "mental-health-digital-age",
      featured: true,
    },
  ],
  lifestyle: [
    {
      id: 2,
      title: "Sustainable Living: Small Changes, Big Impact",
      excerpt: "Discover practical ways to reduce your environmental footprint and live more sustainably.",
      author: "Michael Chen",
      publishedAt: "2024-01-14",
      readTime: "6 min read",
      image: "/sustainable-living-environment.jpg",
      slug: "sustainable-living-small-changes",
      featured: true,
    },
  ],
  education: [
    {
      id: 5,
      title: "The Science of Learning: Effective Study Techniques",
      excerpt: "Evidence-based methods to improve learning efficiency and retention for students and professionals.",
      author: "Prof. Lisa Anderson",
      publishedAt: "2024-01-11",
      readTime: "9 min read",
      image: "/learning-study-techniques-education.jpg",
      slug: "science-of-learning",
      featured: true,
    },
  ],
  travel: [
    {
      id: 6,
      title: "Travel Photography: Capturing Authentic Moments",
      excerpt: "Tips and techniques for taking compelling travel photos that tell meaningful stories.",
      author: "Alex Thompson",
      publishedAt: "2024-01-10",
      readTime: "5 min read",
      image: "/travel-photography-authentic-moments.jpg",
      slug: "travel-photography-authentic-moments",
      featured: true,
    },
  ],
}

interface CategoryPageProps {
  params: {
    category: string
  }
  searchParams: {
    page?: string
    sort?: string
    view?: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = params.category.toLowerCase()

  if (!validCategories.includes(category)) {
    return {
      title: "Category Not Found",
    }
  }

  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1)
  const description = categoryDescriptions[category as keyof typeof categoryDescriptions]
  const categoryUrl = `/category/${category}`

  return {
    title: `${categoryTitle} Articles`,
    description: description,
    keywords: [categoryTitle.toLowerCase(), "articles", "content", "insights", "expert analysis"],
    alternates: {
      canonical: categoryUrl,
    },
    openGraph: {
      title: `${categoryTitle} Articles - Allixios`,
      description: description,
      type: "website",
      url: categoryUrl,
      images: [
        {
          url: "/og-default.jpg",
          width: 1200,
          height: 630,
          alt: `${categoryTitle} Articles on Allixios`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryTitle} Articles - Allixios`,
      description: description,
      creator: "@allixios",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const category = params.category.toLowerCase()
  const currentPage = Number.parseInt(searchParams.page || "1")
  const sortBy = searchParams.sort || "newest"
  const viewMode = searchParams.view || "grid"

  // Validate category
  if (!validCategories.includes(category)) {
    notFound()
  }

  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1)
  const categoryDescription = categoryDescriptions[category as keyof typeof categoryDescriptions]
  const articles = mockArticles[category as keyof typeof mockArticles] || []

  // Pagination logic
  const articlesPerPage = 9
  const totalPages = Math.ceil(articles.length / articlesPerPage)
  const startIndex = (currentPage - 1) * articlesPerPage
  const paginatedArticles = articles.slice(startIndex, startIndex + articlesPerPage)

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
          <span className="text-foreground">{categoryTitle}</span>
        </nav>

        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {categoryTitle} <span className="text-primary">Articles</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{categoryDescription}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filters and View Toggle */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Sort by:</span>
                </div>
                <Select value={sortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="reading-time">Reading Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Button variant={viewMode === "grid" ? "default" : "ghost"} size="sm" asChild>
                  <Link href={`/category/${category}?view=grid&sort=${sortBy}&page=${currentPage}`}>
                    <Grid className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant={viewMode === "list" ? "default" : "ghost"} size="sm" asChild>
                  <Link href={`/category/${category}?view=list&sort=${sortBy}&page=${currentPage}`}>
                    <List className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Articles Grid/List */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                {paginatedArticles.map((article) => (
                  <Card key={article.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {article.featured && (
                          <Badge className="absolute top-3 left-3" variant="default">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        <Link href={`/category/${category}/${article.slug}`}>{article.title}</Link>
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
            ) : (
              <div className="space-y-6 mb-12">
                {paginatedArticles.map((article) => (
                  <Card key={article.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <img
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            className="w-32 h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            {article.featured && (
                              <Badge variant="default" className="text-xs">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            <Link href={`/category/${category}/${article.slug}`}>{article.title}</Link>
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">{article.excerpt}</p>
                          <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <span>{article.author}</span>
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
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <Button variant="outline" size="sm" disabled={currentPage === 1} asChild={currentPage > 1}>
                  {currentPage > 1 ? (
                    <Link href={`/category/${category}?page=${currentPage - 1}&sort=${sortBy}&view=${viewMode}`}>
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Previous
                    </Link>
                  ) : (
                    <>
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Previous
                    </>
                  )}
                </Button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button key={page} variant={page === currentPage ? "default" : "ghost"} size="sm" asChild>
                      <Link href={`/category/${category}?page=${page}&sort=${sortBy}&view=${viewMode}`}>{page}</Link>
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === totalPages}
                  asChild={currentPage < totalPages}
                >
                  {currentPage < totalPages ? (
                    <Link href={`/category/${category}?page=${currentPage + 1}&sort=${sortBy}&view=${viewMode}`}>
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  ) : (
                    <>
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Sidebar Ad */}
            <AdUnit slot="0987654321" format="vertical" className="h-96 w-full" style={{ minHeight: "600px" }} />

            {/* Related Categories */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Explore Categories</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                {validCategories
                  .filter((cat) => cat !== category)
                  .map((cat) => (
                    <Link
                      key={cat}
                      href={`/category/${cat}`}
                      className="block py-2 px-3 rounded-md text-sm hover:bg-muted transition-colors"
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </Link>
                  ))}
              </CardContent>
            </Card>

            {/* Popular in Category */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Popular in {categoryTitle}</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {articles.slice(0, 3).map((article, index) => (
                  <div key={article.id} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium line-clamp-2 mb-1">
                        <Link
                          href={`/category/${category}/${article.slug}`}
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

export async function generateStaticParams() {
  return validCategories.map((category) => ({
    category: category,
  }))
}
