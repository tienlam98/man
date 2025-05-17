import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Placeholder data - In a real implementation, this would come from Outstatic
const latestArticles = [
  {
    id: "1",
    slug: "building-resilience-through-adversity",
    title: "Building Resilience Through Adversity",
    excerpt: "The unexpected benefits of challenging times and how to develop mental toughness.",
    category: "Personal Growth",
    imageUrl: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
    publishedAt: new Date("2023-04-10"),
    readTime: "8 min read"
  },
  {
    id: "2",
    slug: "essential-skills-every-man-should-know",
    title: "10 Essential Skills Every Man Should Know",
    excerpt: "From basic home repairs to wilderness survival, these skills build confidence and self-reliance.",
    category: "Skills",
    imageUrl: "https://images.pexels.com/photos/4484071/pexels-photo-4484071.jpeg",
    publishedAt: new Date("2023-04-05"),
    readTime: "12 min read"
  },
  {
    id: "3",
    slug: "mindful-leadership-principles",
    title: "Mindful Leadership: Principles for Leading Yourself and Others",
    excerpt: "How to develop a leadership style based on integrity, empathy, and clear communication.",
    category: "Leadership",
    imageUrl: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
    publishedAt: new Date("2023-03-28"),
    readTime: "10 min read"
  },
  {
    id: "4",
    slug: "relationships-foundation-trust",
    title: "Building Relationships on a Foundation of Trust",
    excerpt: "The essential components of meaningful relationships and how to cultivate them.",
    category: "Relationships",
    imageUrl: "https://images.pexels.com/photos/4629633/pexels-photo-4629633.jpeg",
    publishedAt: new Date("2023-03-22"),
    readTime: "9 min read"
  }
]

export function LatestArticles() {
  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <Button variant="ghost" asChild>
            <Link href="/articles">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestArticles.map((article) => (
            <Card key={article.id} className="flex flex-col h-full overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row h-full">
                <div className="relative h-48 md:h-auto md:w-1/3">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
                <div className="flex flex-col flex-1 md:w-2/3">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{article.category}</Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 text-xl">
                      <Link href={`/articles/${article.slug}`} className="hover:text-primary transition-colors">
                        {article.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2 flex-grow">
                    <p className="text-muted-foreground line-clamp-2">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">
                      {formatDistanceToNow(article.publishedAt, { addSuffix: true })}
                    </span>
                    <Button variant="ghost" size="sm" className="p-0 h-auto" asChild>
                      <Link href={`/articles/${article.slug}`}>
                        Read more <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}