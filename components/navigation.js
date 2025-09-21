"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-gray-900">HealthCare Plus</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/doctors"
                className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Find Doctors
              </Link>
              <Link
                href="/appointments"
                className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              href="/doctors"
              className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              Find Doctors
            </Link>
            <Link
              href="/appointments"
              className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3 space-x-3">
                <Link href="/login">
                  <Button variant="ghost" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
