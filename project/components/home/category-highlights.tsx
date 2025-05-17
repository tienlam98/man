import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Placeholder data - In a real implementation, this would come from Outstatic
const categoryData = {
  skills: [
    {
      id: "s1",
      slug: "woodworking-fundamentals",
      title: "Woodworking Fundamentals: Getting Started with Hand Tools",
      excerpt: "Learn the essential hand tools and techniques to begin your woodworking journey.",
      imageUrl: "https://images.pexels.com/photos/3637786/pexels-photo-3637786.jpeg",
      readTime: "15 min read"
    },
    {
      id: "s2",
      slug: "financial-planning-basics",
      title: "Financial Planning Basics Every Man Should Master",
      excerpt: "Take control of your financial future with these foundational principles and practical strategies.",
      imageUrl: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg",
      readTime: "12 min read"
    },
    {
      id: "s3",
      slug: "wilderness-survival-skills",
      title: "Essential Wilderness Survival Skills",
      excerpt: "The core skills that could save your life in the wilderness, from fire-making to navigation.",
      imageUrl: "https://images.pexels.com/photos/6271625/pexels-photo-6271625.jpeg",
      readTime: "18 min read"
    }
  ],
  philosophy: [
    {
      id: "p1",
      slug: "stoicism-daily-practice",
      title: "Stoicism as a Daily Practice",
      excerpt: "Practical exercises to incorporate stoic philosophy into your everyday life.",
      imageUrl: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
      readTime: "10 min read"
    },
    {
      id: "p2",
      slug: "virtue-ethics-modern-world",
      title: "Virtue Ethics in the Modern World",
      excerpt: "How ancient ideas about character and virtue can guide modern decision-making.",
      imageUrl: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
      readTime: "14 min read"
    },
    {
      id: "p3",
      slug: "meaning-purpose-finding-path",
      title: "Finding Meaning and Purpose in Life",
      excerpt: "Philosophical approaches to discovering your personal mission and living with intention.",
      imageUrl: "https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg",
      readTime: "16 min read"
    }
  ],
  fitness: [
    {
      id: "f1",
      slug: "strength-training-foundations",
      title: "Strength Training Foundations",
      excerpt: "The core principles and movements that form the basis of an effective strength program.",
      imageUrl: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
      readTime: "13 min read"
    },
    {
      id: "f2",
      slug: "mobility-overlooked-fitness",
      title: "Mobility: The Overlooked Component of Fitness",
      excerpt: "Why mobility matters and how to incorporate it into your training regime.",
      imageUrl: "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
      readTime: "9 min read"
    },
    {
      id: "f3",
      slug: "nutrition-performance-recovery",
      title: "Nutrition for Performance and Recovery",
      excerpt: "Fuel your body effectively to maximize workout results and enhance recovery.",
      imageUrl: "https://images.pexels.com/photos/8777074/pexels-photo-8777074.jpeg",
      readTime: "11 min read"
    }
  ]
}

export function CategoryHighlights() {
  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive deeper into topics that interest you most on your journey of personal development.
          </p>
        </div>
        
        <Tabs defaultValue="skills" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
              <TabsTrigger value="fitness">Fitness</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.entries(categoryData).map(([category, articles]) => (
            <TabsContent key={category} value={category} className="animate-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/articles/${article.slug}`}
                    className="group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="outline" className="capitalize">
                          {category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <Button variant="outline" asChild>
                  <Link href={`/category/${category}`}>
                    View All {category.charAt(0).toUpperCase() + category.slice(1)} Articles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}