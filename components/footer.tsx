import Link from "next/link"
import { Heart, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const footerLinks = {
    "Quick Links": [
      { href: "/doctors", label: "Find Doctors" },
      { href: "/appointments", label: "Book Appointment" },
      { href: "/records", label: "Health Records" },
      { href: "/emergency", label: "Emergency" },
    ],
    Support: [
      { href: "/help", label: "Help Center" },
      { href: "/contact", label: "Contact Us" },
      { href: "/faq", label: "FAQ" },
      { href: "/feedback", label: "Feedback" },
    ],
    Legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/hipaa", label: "HIPAA Compliance" },
      { href: "/security", label: "Security" },
    ],
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Heart className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-card-foreground">HealthCare Plus</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your trusted digital health partner, connecting you with quality healthcare services and expert medical
              professionals.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>1-800-HEALTH</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@healthcareplus.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Available Nationwide</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-card-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 HealthCare Plus. All rights reserved. | HIPAA Compliant</p>
        </div>
      </div>
    </footer>
  )
}
