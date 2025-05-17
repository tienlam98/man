import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <h2 className="font-serif text-2xl font-bold tracking-tight mb-4">
                ManlyWisdom
              </h2>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Timeless wisdom, practical skills, and thoughtful reflections
              for men who aspire to live with purpose, integrity, and excellence.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/category/philosophy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="/category/fitness" className="text-muted-foreground hover:text-foreground transition-colors">
                  Fitness
                </Link>
              </li>
              <li>
                <Link href="/category/lifestyle" className="text-muted-foreground hover:text-foreground transition-colors">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Join our newsletter for weekly wisdom and updates.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-background"
                required
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ManlyWisdom. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}