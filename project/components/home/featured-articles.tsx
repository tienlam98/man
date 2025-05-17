import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Placeholder data - In a real implementation, this would come from Outstatic
const featuredArticles = [
  {
    id: "1",
    slug: "the-lost-art-of-stoicism",
    title: "The Lost Art of Stoicism: Ancient Wisdom for Modern Challenges",
    description: "How the ancient philosophy of Stoicism can help men navigate the complexities of modern life with resilience and virtue.",
    category: "Philosophy",
    imageUrl: "https://images.pexels.com/photos/39905/pexels-photo-39905.jpeg",
    publishedAt: "2023-03-15",
    author: "Marcus Reynolds"
  },
  {
    id: "2",
    slug: "mastering-the-fundamentals-of-strength-training",
    title: "Mastering the Fundamentals of Strength Training",
    description: "A comprehensive guide to building strength, maintaining mobility, and developing a sustainable fitness routine.",
    category: "Fitness",
    imageUrl: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg",
    publishedAt: "2023-02-28",
    author: "James Harrison"
  },
  {
    id: "3",
    slug: "financial-independence-first-steps",
    title: "Financial Independence: Your First Steps Toward Freedom",
    description: "Essential strategies for building wealth, eliminating debt, and creating the foundation for long-term financial independence.",
    category: "Skills",
    imageUrl: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg",
    publishedAt: "2023-01-17",
    author: "Thomas Warren"
  }
]

export function FeaturedArticles() {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Articles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our carefully selected content designed to inspire and guide your journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <Card key={article.id} className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-56 w-full">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="text-sm text-muted-foreground">{article.publishedAt}</span>
                </div>
                <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                  <Link href={`/articles/${article.slug}`}>
                    {article.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm">
                  By {article.author}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pb-2">
                <p className="text-muted-foreground line-clamp-3">{article.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                  <Link href={`/articles/${article.slug}`}>
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link href="/articles">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}