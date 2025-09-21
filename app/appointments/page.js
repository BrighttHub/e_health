"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, MapPin, Phone } from "lucide-react"
import Link from "next/link"

const appointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    date: "2024-01-15",
    time: "10:00 AM",
    status: "confirmed",
    location: "Downtown Medical Center",
    type: "In-person",
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "Dermatology",
    date: "2024-01-18",
    time: "2:30 PM",
    status: "pending",
    location: "Skin Care Clinic",
    type: "Video Call",
  },
  {
    id: 3,
    doctor: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    date: "2024-01-22",
    time: "11:15 AM",
    status: "confirmed",
    location: "Children's Hospital",
    type: "In-person",
  },
]

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
            <p className="text-gray-600 mt-2">Manage your healthcare appointments</p>
          </div>
          <Link href="/appointments/book">
            <Button>
              <Calendar className="mr-2 h-4 w-4" />
              Book New Appointment
            </Button>
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === "upcoming" ? "bg-primary text-white" : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === "past" ? "bg-primary text-white" : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            Past
          </button>
          <button
            onClick={() => setActiveTab("cancelled")}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === "cancelled" ? "bg-primary text-white" : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            Cancelled
          </button>
        </div>

        {/* Appointments List */}
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <Card key={appointment.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{appointment.doctor}</h3>
                        <p className="text-primary">{appointment.specialty}</p>
                      </div>
                      <Badge className={getStatusColor(appointment.status)}>
                        {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(appointment.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {appointment.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {appointment.type}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{appointment.location}</p>
                  </div>
                  <div className="flex space-x-2">
                    {appointment.type === "Video Call" && (
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Phone className="mr-2 h-4 w-4" />
                        Join Call
                      </Button>
                    )}
                    <Button variant="outline" size="sm" className="bg-transparent">
                      Reschedule
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                      Cancel
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {appointments.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No appointments found</h3>
              <p className="text-gray-600 mb-4">You don't have any appointments scheduled yet.</p>
              <Link href="/appointments/book">
                <Button>Book Your First Appointment</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
