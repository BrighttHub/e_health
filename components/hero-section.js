import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Shield, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Your Health, <span className="text-primary">Our Priority</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty">
            Connect with certified healthcare professionals, book appointments instantly, and manage your health records
            all in one secure platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/register">
              <Button size="lg" className="text-lg px-8 py-3">
                Get Started Today
              </Button>
            </Link>
            <Link href="/doctors">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
                Find a Doctor
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Booking</h3>
            <p className="text-gray-600">Schedule appointments with just a few clicks</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Doctors</h3>
            <p className="text-gray-600">Access to certified healthcare professionals</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Private</h3>
            <p className="text-gray-600">Your health data is protected and confidential</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock healthcare assistance</p>
          </div>
        </div>
      </div>
    </section>
  )
}
