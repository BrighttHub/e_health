"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Calendar,
  FileText,
  Users,
  Activity,
  Heart,
  Thermometer,
  Weight,
  Pill,
  Bell,
  TrendingUp,
  Clock,
  AlertCircle,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

const healthMetrics = [
  { name: "Blood Pressure", value: "120/80", status: "normal", icon: Heart, color: "text-green-600" },
  { name: "Heart Rate", value: "72 bpm", status: "normal", icon: Activity, color: "text-green-600" },
  { name: "Temperature", value: "98.6°F", status: "normal", icon: Thermometer, color: "text-green-600" },
  { name: "Weight", value: "165 lbs", status: "stable", icon: Weight, color: "text-blue-600" },
]

const medications = [
  { name: "Lisinopril", dosage: "10mg", frequency: "Once daily", nextDose: "8:00 AM", status: "active" },
  { name: "Metformin", dosage: "500mg", frequency: "Twice daily", nextDose: "6:00 PM", status: "active" },
  { name: "Vitamin D3", dosage: "1000 IU", frequency: "Once daily", nextDose: "8:00 AM", status: "active" },
]

const recentTests = [
  { name: "Complete Blood Count", date: "2024-01-10", status: "normal", doctor: "Dr. Sarah Johnson" },
  { name: "Lipid Panel", date: "2024-01-08", status: "review", doctor: "Dr. Sarah Johnson" },
  { name: "HbA1c", date: "2024-01-05", status: "normal", doctor: "Dr. Michael Chen" },
]

const upcomingAppointments = [
  { doctor: "Dr. Sarah Johnson", specialty: "Cardiology", date: "2024-01-15", time: "10:00 AM" },
  { doctor: "Dr. Michael Chen", specialty: "Dermatology", date: "2024-01-18", time: "2:30 PM" },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="text-gray-600 mt-2">Here's your health overview for today</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="health">Health Metrics</TabsTrigger>
            <TabsTrigger value="medications">Medications</TabsTrigger>
            <TabsTrigger value="tests">Test Results</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Next: Tomorrow 10:00 AM</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Medications</CardTitle>
                  <Pill className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Next dose: 6:00 PM</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Health Score</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">85%</div>
                  <p className="text-xs text-muted-foreground">Good overall health</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Results</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">Lipid panel review</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Upcoming Appointments */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Upcoming Appointments
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingAppointments.map((appointment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{appointment.doctor}</p>
                        <p className="text-sm text-gray-600">{appointment.specialty}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                        </p>
                      </div>
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <Clock className="mr-1 h-3 w-3" />
                        Reschedule
                      </Button>
                    </div>
                  ))}
                  <Link href="/appointments/book">
                    <Button className="w-full">Book New Appointment</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="mr-2 h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Blood pressure recorded</p>
                        <p className="text-xs text-gray-500">Today, 8:00 AM</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Medication reminder sent</p>
                        <p className="text-xs text-gray-500">Yesterday, 6:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Lab results available</p>
                        <p className="text-xs text-gray-500">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Appointment completed</p>
                        <p className="text-xs text-gray-500">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link href="/appointments/book">
                    <Button className="w-full justify-start">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Appointment
                    </Button>
                  </Link>
                  <Link href="/health-records">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <FileText className="mr-2 h-4 w-4" />
                      View Records
                    </Button>
                  </Link>
                  <Link href="/doctors">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Users className="mr-2 h-4 w-4" />
                      Find Doctor
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="health" className="space-y-6">
            {/* Health Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {healthMetrics.map((metric, index) => {
                const IconComponent = metric.icon
                return (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{metric.name}</CardTitle>
                      <IconComponent className={`h-4 w-4 ${metric.color}`} />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <Badge
                        variant="secondary"
                        className={`mt-2 ${
                          metric.status === "normal"
                            ? "bg-green-100 text-green-800"
                            : metric.status === "stable"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {metric.status}
                      </Badge>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Health Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Health Trends (Last 30 Days)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Blood Pressure Control</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Medication Adherence</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Exercise Goals</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="medications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Pill className="mr-2 h-5 w-5" />
                  Current Medications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {medications.map((medication, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium">{medication.name}</h3>
                      <p className="text-sm text-gray-600">
                        {medication.dosage} - {medication.frequency}
                      </p>
                      <p className="text-sm text-gray-500">Next dose: {medication.nextDose}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {medication.status}
                      </Badge>
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <Bell className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tests" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Recent Test Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentTests.map((test, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium">{test.name}</h3>
                      <p className="text-sm text-gray-600">Ordered by {test.doctor}</p>
                      <p className="text-sm text-gray-500">{new Date(test.date).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant="secondary"
                        className={
                          test.status === "normal"
                            ? "bg-green-100 text-green-800"
                            : test.status === "review"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }
                      >
                        {test.status === "review" ? (
                          <AlertCircle className="mr-1 h-3 w-3" />
                        ) : (
                          <CheckCircle className="mr-1 h-3 w-3" />
                        )}
                        {test.status}
                      </Badge>
                      <Button size="sm" variant="outline" className="bg-transparent">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
