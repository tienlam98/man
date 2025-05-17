"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Compass, BookOpen, Dumbbell, Book, Menu, X, Search, Moon, Sun, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

const navigationItems = [
  { name: "Explore", href: "/explore", icon: Compass },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Skills", href: "/category/skills", icon: BookOpen },
  { name: "Philosophy", href: "/category/philosophy", icon: Book },
  { name: "Fitness", href: "/category/fitness", icon: Dumbbell },
]

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Track scroll position for transparent/solid header transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  
  return (
    <header 
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200",
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm border-b shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-bold tracking-tight">
              ManlyWisdom
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={cn(
                  "nav-link",
                  pathname === item.href && "nav-link-active"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              className="hidden md:flex"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <ModeToggle />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t bg-background"
          >
            <div className="container-custom py-4 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 py-2 px-3 rounded-md transition-colors",
                    pathname === item.href 
                      ? "bg-secondary font-medium" 
                      : "hover:bg-secondary/50"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              <div className="pt-2 border-t">
                <Button 
                  variant="secondary" 
                  className="w-full justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}