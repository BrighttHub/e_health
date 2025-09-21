import { RegisterForm } from "@/components/auth/register-form"
import Link from "next/link"
import { Heart } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-gray-900">HealthCare Plus</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">Create your account</h2>
          <p className="mt-2 text-gray-600">Join thousands of patients who trust us</p>
        </div>
        <RegisterForm />
        <div className="text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:text-primary/80 font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
