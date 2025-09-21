import { RegisterForm } from "@/components/auth/register-form"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Create Your Account</h2>
            <p className="mt-2 text-muted-foreground">Join thousands of patients managing their health digitally</p>
          </div>
          <RegisterForm />
          <div className="text-center">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
