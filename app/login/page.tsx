import { LoginForm } from "@/components/auth/login-form"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Welcome Back</h2>
            <p className="mt-2 text-muted-foreground">Sign in to access your health dashboard</p>
          </div>
          <LoginForm />
          <div className="text-center">
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/register" className="text-primary hover:underline">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
