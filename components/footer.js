import Link from "next/link"
import { Heart, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">HealthCare Plus</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted digital health partner, connecting you with quality healthcare services and certified medical
              professionals.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-300">support@healthcareplus.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-gray-300">123 Health Street, Medical City, MC 12345</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/doctors" className="text-gray-300 hover:text-primary">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="text-gray-300 hover:text-primary">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/emergency" className="text-gray-300 hover:text-primary">
                  Emergency Care
                </Link>
              </li>
              <li>
                <Link href="/telemedicine" className="text-gray-300 hover:text-primary">
                  Telemedicine
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-300 hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-gray-300 hover:text-primary">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 HealthCare Plus. All rights reserved. | Licensed Healthcare Provider</p>
        </div>
      </div>
    </footer>
  )
}
