import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"
import { Heart } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-gray-900">HealthCare Plus</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-gray-600">Sign in to your account</p>
        </div>
        <LoginForm />
        <div className="text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary hover:text-primary/80 font-medium">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
