import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Shield, Clock } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const features = [
    {
      icon: Calendar,
      title: "Easy Appointments",
      description: "Book appointments with top doctors in just a few clicks",
    },
    {
      icon: Users,
      title: "Expert Doctors",
      description: "Connect with certified healthcare professionals",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your health data is protected with enterprise-grade security",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Get help whenever you need it with our round-the-clock support",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Your Health, <span className="text-primary">Simplified</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Experience healthcare like never before. Book appointments, manage your health records, and connect with top
            doctors all in one secure platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/register">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/doctors">Find a Doctor</Link>
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mx-auto mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
