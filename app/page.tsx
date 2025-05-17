import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, BookOpen, Users, Award } from "lucide-react"
import { FeaturedArticles } from "@/components/home/featured-articles"
import { LatestArticles } from "@/components/home/latest-articles"
import { Newsletter } from "@/components/home/newsletter"
import { CategoryHighlights } from "@/components/home/category-highlights"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-secondary/50 py-16 md:py-24">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Timeless Wisdom for the <span className="text-primary">Modern Man</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Practical guidance for men who aspire to live with purpose, integrity, and excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/explore">
                    Start Exploring <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">About Us</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 relative aspect-[4/3] w-full max-w-xl">
              <Image
                src="https://images.pexels.com/photos/1727004/pexels-photo-1727004.jpeg"
                alt="Man in nature reflecting"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Growth Mindset",
                description: "Embrace challenges and develop resilience through continuous self-improvement."
              },
              {
                icon: BookOpen,
                title: "Practical Skills",
                description: "Learn practical skills from woodworking to financial literacy for greater self-reliance."
              },
              {
                icon: Users,
                title: "Community",
                description: "Connect with like-minded men on a similar journey of self-development."
              },
              {
                icon: Award,
                title: "Time-Tested Wisdom",
                description: "Explore timeless principles that have guided generations of honorable men."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 text-center rounded-lg border bg-card hover:shadow-md transition-shadow"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Articles */}
      <FeaturedArticles />
      
      {/* Category Highlights */}
      <CategoryHighlights />
      
      {/* Latest Articles */}
      <LatestArticles />
      
      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}