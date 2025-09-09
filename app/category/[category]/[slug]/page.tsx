import type { Metadata } from "next"
import ArticlePageClient from "./ArticlePageClient"

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

interface ArticlePageProps {
  params: {
    category: string
    slug: string
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = mockArticles[params.slug as keyof typeof mockArticles]

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://allixios.com"
  const articleUrl = `${baseUrl}/category/${params.category}/${params.slug}`

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
    authors: [{ name: article.author.name }],
    creator: article.author.name,
    publisher: "Allixios",
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      section: article.category,
      tags: article.tags,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      url: articleUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      creator: "@allixios",
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
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

export default function ArticlePage({ params }: ArticlePageProps) {
  return <ArticlePageClient params={params} />
}

export async function generateStaticParams() {
  // Generate static params for all articles
  const params = []

  for (const [slug, article] of Object.entries(mockArticles)) {
    params.push({
      category: article.category.toLowerCase(),
      slug: slug,
    })
  }

  return params
}
