"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Star, Calendar, Filter } from "lucide-react"
import Link from "next/link"

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    rating: 4.9,
    reviews: 127,
    experience: "15 years",
    location: "Downtown Medical Center",
    image: "/professional-female-doctor.png",
    availability: "Available Today",
    consultationFee: "$150",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Dermatology",
    rating: 4.8,
    reviews: 89,
    experience: "12 years",
    location: "Skin Care Clinic",
    image: "/professional-male-doctor.png",
    availability: "Available Tomorrow",
    consultationFee: "$120",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    rating: 4.9,
    reviews: 156,
    experience: "18 years",
    location: "Children's Hospital",
    image: "/professional-female-pediatrician.png",
    availability: "Available Today",
    consultationFee: "$100",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    rating: 4.7,
    reviews: 94,
    experience: "20 years",
    location: "Sports Medicine Center",
    image: "/professional-male-orthopedic-doctor.jpg",
    availability: "Available Next Week",
    consultationFee: "$180",
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    specialty: "Neurology",
    rating: 4.8,
    reviews: 73,
    experience: "14 years",
    location: "Brain & Spine Institute",
    image: "/professional-female-neurologist.jpg",
    availability: "Available Today",
    consultationFee: "$200",
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    specialty: "Internal Medicine",
    rating: 4.6,
    reviews: 112,
    experience: "16 years",
    location: "Primary Care Center",
    image: "/professional-male-internal-medicine-doctor.jpg",
    availability: "Available Tomorrow",
    consultationFee: "$130",
  },
]

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")

  const specialties = [...new Set(doctors.map((doctor) => doctor.specialty))]
  const locations = [...new Set(doctors.map((doctor) => doctor.location))]

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = selectedSpecialty === "all" || doctor.specialty === selectedSpecialty
    const matchesLocation = selectedLocation === "all" || doctor.location === selectedLocation

    return matchesSearch && matchesSpecialty && matchesLocation
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find a Doctor</h1>
          <p className="text-gray-600">Search and book appointments with certified healthcare professionals</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search doctors or specialties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger>
                <SelectValue placeholder="All Specialties" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specialties</SelectItem>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="w-full">
              <Filter className="mr-2 h-4 w-4" />
              Apply Filters
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-lg">{doctor.name}</CardTitle>
                    <p className="text-primary font-medium">{doctor.specialty}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{doctor.rating}</span>
                      <span className="text-sm text-gray-500">({doctor.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {doctor.location}
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-medium">{doctor.experience}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Consultation:</span>
                    <span className="font-medium">{doctor.consultationFee}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge
                    variant={doctor.availability.includes("Today") ? "default" : "secondary"}
                    className={doctor.availability.includes("Today") ? "bg-green-100 text-green-800" : ""}
                  >
                    {doctor.availability}
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Link href={`/doctors/${doctor.id}`} className="flex-1">
                    <Button variant="outline" className="w-full bg-transparent">
                      View Profile
                    </Button>
                  </Link>
                  <Link href={`/appointments/book?doctor=${doctor.id}`} className="flex-1">
                    <Button className="w-full">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
