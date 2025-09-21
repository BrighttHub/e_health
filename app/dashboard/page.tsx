"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, FileText, Heart, Clock, Bell } from "lucide-react"

interface User {
  email: string
  name: string
  role: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/login")
      return
    }
    setUser(JSON.parse(userData))
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  if (!user) {
    return <div>Loading...</div>
  }

  const quickActions = [
    {
      title: "Book Appointment",
      description: "Schedule with your preferred doctor",
      icon: Calendar,
      href: "/appointments/book",
      color: "bg-primary",
    },
    {
      title: "Find Doctors",
      description: "Browse our network of specialists",
      icon: Users,
      href: "/doctors",
      color: "bg-secondary",
    },
    {
      title: "Health Records",
      description: "View your medical history",
      icon: FileText,
      href: "/records",
      color: "bg-accent",
    },
    {
      title: "Emergency",
      description: "Get immediate medical help",
      icon: Heart,
      href: "/emergency",
      color: "bg-destructive",
    },
  ]

  const recentActivity = [
    { type: "appointment", message: "Upcoming appointment with Dr. Smith", time: "2 hours" },
    { type: "record", message: "Lab results uploaded", time: "1 day" },
    { type: "prescription", message: "Prescription refill reminder", time: "3 days" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back, {user.name}!</h1>
              <p className="text-muted-foreground mt-2">Here's your health dashboard overview</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              Sign Out
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className={`${action.color} text-white p-3 rounded-full w-fit mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">{action.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{action.description}</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Appointments */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Upcoming Appointments</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-card rounded-lg border">
                  <div>
                    <h4 className="font-medium">Dr. Sarah Smith</h4>
                    <p className="text-muted-foreground text-sm">General Checkup</p>
                    <p className="text-muted-foreground text-sm">Tomorrow, 2:00 PM</p>
                  </div>
                  <Button size="sm">Join Call</Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-card rounded-lg border">
                  <div>
                    <h4 className="font-medium">Dr. Michael Johnson</h4>
                    <p className="text-muted-foreground text-sm">Cardiology Consultation</p>
                    <p className="text-muted-foreground text-sm">Friday, 10:30 AM</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Reschedule
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary/10 text-primary p-2 rounded-full">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.message}</p>
                      <p className="text-xs text-muted-foreground">{activity.time} ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
