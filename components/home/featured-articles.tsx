import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllPosts } from "@/lib/outstatic"
import { formatDate } from "@/lib/utils"

export async function FeaturedArticles() {
  // Wrap in try-catch to handle potential errors gracefully
  try {
    const allPosts = await getAllPosts() || []
    
    // Use the latest 3 posts as featured
    const featuredPosts = allPosts.slice(0, 3)

    return (
      <section className="py-16 bg-secondary/20">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Articles</h2>
              <p className="text-muted-foreground">
                Discover our most popular insights and guidance
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/blog">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {featuredPosts.length === 0 ? (
            <div className="text-center p-12 border rounded-lg bg-card">
              <h3 className="text-xl font-medium mb-2">No featured articles yet</h3>
              <p className="text-muted-foreground mb-4">
                Articles added through the Outstatic CMS will appear here.
              </p>
              <Button asChild>
                <Link href="/outstatic">Go to CMS</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.slug} className="overflow-hidden">
                  <div className="relative h-48 w-full">
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
                  <CardHeader>
                    <CardTitle className="line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      {formatDate(post.publishedAt)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" asChild className="ml-auto">
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    )
  } catch (error) {
    console.error("Error in FeaturedArticles:", error);
    // Return a fallback UI in case of error
    return (
      <section className="py-16 bg-secondary/20">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Articles</h2>
              <p className="text-muted-foreground">
                Discover our most popular insights and guidance
              </p>
            </div>
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