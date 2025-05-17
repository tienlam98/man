import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllPosts } from "@/lib/outstatic"
import { formatDate } from "@/lib/utils"

export async function LatestArticles() {
  // Wrap in try-catch to handle potential errors gracefully
  try {
    const allPosts = await getAllPosts() || [];
    
    // Skip the first 3 (featured) and take the next 4 for latest articles
    const latestPosts = allPosts.slice(3, 7);

    return (
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <Button variant="ghost" asChild>
              <Link href="/blog">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          {latestPosts.length === 0 ? (
            <div className="text-center p-12 border rounded-lg bg-card">
              <h3 className="text-xl font-medium mb-2">No articles yet</h3>
              <p className="text-muted-foreground mb-4">
                Articles added through the Outstatic CMS will appear here.
              </p>
              <Button asChild>
                <Link href="/outstatic">Go to CMS</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {latestPosts.map((post) => (
                <Card key={post.slug} className="flex flex-col h-full overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="relative h-48 md:h-auto md:w-1/3">
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <span className="text-gray-400">No image</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col flex-1 md:w-2/3">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">Blog</Badge>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            {Math.ceil((post.description?.length || 0) / 1000)} min read
                          </div>
                        </div>
                        <CardTitle className="line-clamp-2 text-xl">
                          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                            {post.title}
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2 flex-grow">
                        <p className="text-muted-foreground line-clamp-2">{post.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">
                          {formatDate(post.publishedAt)}
                        </span>
                        <Button variant="ghost" size="sm" className="p-0 h-auto" asChild>
                          <Link href={`/blog/${post.slug}`}>
                            Read more <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    )
  } catch (error) {
    console.error("Error in LatestArticles:", error);
    // Return a fallback UI in case of error
    return (
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
          </div>
          <div className="text-center p-12 border rounded-lg bg-card">
            <h3 className="text-xl font-medium mb-2">Unable to load articles</h3>
            <p className="text-muted-foreground mb-4">
              Please try again later or set up your Outstatic CMS.
            </p>
            <Button asChild>
              <Link href="/outstatic">Go to CMS</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }
}