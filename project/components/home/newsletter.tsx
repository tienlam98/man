"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

type FormData = {
  email: string
}

export function Newsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const { toast } = useToast()
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubscribed(true)
    reset()
    
    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to our newsletter.",
    })
    
    // Reset subscription state after a few seconds
    setTimeout(() => setIsSubscribed(false), 3000)
  }
  
  return (
    <section className="py-16 bg-accent/5">
      <div className="container-custom max-w-4xl">
        <div className="bg-card rounded-xl shadow-lg p-8 md:p-12 border">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Join Our Newsletter</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get weekly insights, exclusive content, and practical wisdom delivered directly to your inbox.
            </p>
          </div>
          
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Your email address"
                className={errors.email ? "border-destructive" : ""}
                disabled={isSubmitting || isSubscribed}
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
              )}
            </div>
            <Button 
              type="submit" 
              disabled={isSubmitting || isSubscribed}
              className="min-w-[120px]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Subscribing
                </>
              ) : isSubscribed ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Subscribed
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
          
          <p className="text-center text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}