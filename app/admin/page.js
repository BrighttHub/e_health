"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  Calendar,
  Activity,
  TrendingUp,
  UserCheck,
  Search,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Plus,
  Download,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react"

const dashboardStats = [
  { title: "Total Patients", value: "2,847", change: "+12%", icon: Users, color: "text-blue-600" },
  { title: "Active Doctors", value: "156", change: "+3%", icon: UserCheck, color: "text-green-600" },
  { title: "Today's Appointments", value: "89", change: "+8%", icon: Calendar, color: "text-purple-600" },
  { title: "System Health", value: "99.9%", change: "0%", icon: Activity, color: "text-emerald-600" },
]

const recentPatients = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    joinDate: "2024-01-15",
    status: "Active",
    lastVisit: "2024-01-12",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 (555) 234-5678",
    joinDate: "2024-01-14",
    status: "Active",
    lastVisit: "2024-01-10",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "m.brown@email.com",
    phone: "+1 (555) 345-6789",
    joinDate: "2024-01-13",
    status: "Inactive",
    lastVisit: "2023-12-20",
  },
]

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    email: "dr.johnson@hospital.com",
    phone: "+1 (555) 111-2222",
    patients: 145,
    status: "Active",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Dermatology",
    email: "dr.chen@hospital.com",
    phone: "+1 (555) 222-3333",
    patients: 98,
    status: "Active",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    email: "dr.rodriguez@hospital.com",
    phone: "+1 (555) 333-4444",
    patients: 203,
    status: "On Leave",
    rating: 4.9,
  },
]

const appointments = [
  {
    id: 1,
    patient: "John Smith",
    doctor: "Dr. Sarah Johnson",
    date: "2024-01-15",
    time: "10:00 AM",
    type: "In-person",
    status: "Confirmed",
  },
  {
    id: 2,
    patient: "Sarah Johnson",
    doctor: "Dr. Michael Chen",
    date: "2024-01-15",
    time: "2:30 PM",
    type: "Video Call",
    status: "Pending",
  },
  {
    id: 3,
    patient: "Michael Brown",
    doctor: "Dr. Emily Rodriguez",
    date: "2024-01-15",
    time: "11:15 AM",
    type: "In-person",
    status: "Cancelled",
  },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active":
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "inactive":
      case "cancelled":
        return "bg-red-100 text-red-800"
      case "on leave":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your healthcare platform</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="doctors">Doctors</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboardStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                      <IconComponent className={`h-4 w-4 ${stat.color}`} />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-muted-foreground">
                        <span className={stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}>
                          {stat.change}
                        </span>{" "}
                        from last month
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Platform Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Patient Registrations</span>
                      <span className="font-medium">+24 this week</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Appointment Bookings</span>
                      <span className="font-medium">+156 this week</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>System Uptime</span>
                      <span className="font-medium">99.9%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "99%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    System Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <Clock className="h-4 w-4 text-yellow-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Server maintenance scheduled</p>
                      <p className="text-xs text-gray-600">Tonight at 2:00 AM - 4:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Backup completed successfully</p>
                      <p className="text-xs text-gray-600">Daily backup at 1:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Activity className="h-4 w-4 text-blue-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">New feature deployed</p>
                      <p className="text-xs text-gray-600">Video consultation improvements</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="patients" className="space-y-6">
            {/* Search and Actions */}
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search patients..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-80"
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Patients</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Patient
                </Button>
              </div>
            </div>

            {/* Patients Table */}
            <Card>
              <CardHeader>
                <CardTitle>Patient Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPatients.map((patient) => (
                    <div
                      key={patient.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{patient.name}</h3>
                          <p className="text-sm text-gray-600">{patient.email}</p>
                          <p className="text-xs text-gray-500">
                            Joined: {new Date(patient.joinDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <Badge className={getStatusColor(patient.status)}>{patient.status}</Badge>
                          <p className="text-xs text-gray-500 mt-1">
                            Last visit: {new Date(patient.lastVisit).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex space-x-1">
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700 bg-transparent"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="doctors" className="space-y-6">
            {/* Search and Actions */}
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search doctors..." className="pl-10 w-80" />
                </div>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Specialties</SelectItem>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="dermatology">Dermatology</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Doctor
                </Button>
              </div>
            </div>

            {/* Doctors Table */}
            <Card>
              <CardHeader>
                <CardTitle>Doctor Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {doctors.map((doctor) => (
                    <div
                      key={doctor.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <UserCheck className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{doctor.name}</h3>
                          <p className="text-sm text-gray-600">{doctor.specialty}</p>
                          <p className="text-xs text-gray-500">{doctor.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-sm font-medium">{doctor.patients}</p>
                          <p className="text-xs text-gray-500">Patients</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium">{doctor.rating}</p>
                          <p className="text-xs text-gray-500">Rating</p>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(doctor.status)}>{doctor.status}</Badge>
                        </div>
                        <div className="flex space-x-1">
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <MoreHorizontal className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appointments" className="space-y-6">
            {/* Search and Actions */}
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search appointments..." className="pl-10 w-80" />
                </div>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Appointments</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" className="bg-transparent">
                <Download className="mr-2 h-4 w-4" />
                Export Schedule
              </Button>
            </div>

            {/* Appointments Table */}
            <Card>
              <CardHeader>
                <CardTitle>Appointment Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{appointment.patient}</h3>
                          <p className="text-sm text-gray-600">with {appointment.doctor}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <p className="text-sm font-medium">{appointment.type}</p>
                          <p className="text-xs text-gray-500">Type</p>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                        </div>
                        <div className="flex space-x-1">
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <MoreHorizontal className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
