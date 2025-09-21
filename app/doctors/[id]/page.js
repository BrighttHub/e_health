"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, MapPin, Calendar, Clock, Award, GraduationCap, Users, Phone, Mail } from "lucide-react"
import Link from "next/link"

// Mock doctor data - in real app this would come from API
const doctorData = {
  1: {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    rating: 4.9,
    reviews: 127,
    experience: "15 years",
    location: "Downtown Medical Center",
    image: "/professional-female-cardiologist.jpg",
    availability: "Available Today",
    consultationFee: "$150",
    about:
      "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating cardiovascular diseases. She specializes in preventive cardiology, heart failure management, and interventional procedures.",
    education: [
      "MD - Harvard Medical School (2008)",
      "Residency - Johns Hopkins Hospital (2012)",
      "Fellowship - Mayo Clinic Cardiology (2014)",
    ],
    certifications: [
      "Board Certified in Cardiovascular Disease",
      "Board Certified in Internal Medicine",
      "Advanced Cardiac Life Support (ACLS)",
    ],
    languages: ["English", "Spanish"],
    phone: "+1 (555) 123-4567",
    email: "dr.johnson@healthcareplus.com",
    workingHours: {
      monday: "9:00 AM - 5:00 PM",
      tuesday: "9:00 AM - 5:00 PM",
      wednesday: "9:00 AM - 5:00 PM",
      thursday: "9:00 AM - 5:00 PM",
      friday: "9:00 AM - 3:00 PM",
      saturday: "Closed",
      sunday: "Closed",
    },
  },
}

export default function DoctorProfilePage({ params }) {
  const doctor = doctorData[params.id] || doctorData[1] // Fallback to first doctor

  const reviews = [
    {
      id: 1,
      patient: "John D.",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Dr. Johnson is exceptional. She took the time to explain my condition thoroughly and made me feel comfortable throughout the entire process.",
    },
    {
      id: 2,
      patient: "Maria S.",
      rating: 5,
      date: "1 month ago",
      comment:
        "Highly recommend Dr. Johnson. Her expertise in cardiology is evident, and she has a wonderful bedside manner.",
    },
    {
      id: 3,
      patient: "Robert K.",
      rating: 4,
      date: "2 months ago",
      comment:
        "Great doctor with extensive knowledge. The appointment was on time and she answered all my questions patiently.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={doctor.image || "/placeholder.svg"}
              alt={doctor.name}
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
              <p className="text-xl text-primary font-medium mb-2">{doctor.specialty}</p>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{doctor.rating}</span>
                  <span className="text-gray-500">({doctor.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  {doctor.location}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">{doctor.experience} Experience</Badge>
                <Badge
                  variant={doctor.availability.includes("Today") ? "default" : "secondary"}
                  className={doctor.availability.includes("Today") ? "bg-green-100 text-green-800" : ""}
                >
                  {doctor.availability}
                </Badge>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary mb-2">{doctor.consultationFee}</p>
              <p className="text-gray-600 mb-4">Consultation Fee</p>
              <Link href={`/appointments/book?doctor=${doctor.id}`}>
                <Button size="lg" className="w-full md:w-auto">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="about" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About Dr. {doctor.name.split(" ")[1]}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{doctor.about}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {doctor.education.map((edu, index) => (
                        <li key={index} className="text-gray-600">
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="mr-2 h-5 w-5" />
                      Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {doctor.certifications.map((cert, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Languages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {doctor.languages.map((lang, index) => (
                        <Badge key={index} variant="outline">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Patient Reviews ({doctor.reviews})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{review.patient}</span>
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Working Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(doctor.workingHours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between items-center">
                      <span className="font-medium capitalize">{day}</span>
                      <span className="text-gray-600">{hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>{doctor.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>{doctor.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{doctor.location}</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
