"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Download, Upload, Search, Calendar, User, Pill, TestTube, Heart, Eye, Filter } from "lucide-react"

const medicalHistory = [
  {
    id: 1,
    condition: "Hypertension",
    diagnosedDate: "2020-03-15",
    status: "Active",
    doctor: "Dr. Sarah Johnson",
    notes: "Well controlled with medication",
  },
  {
    id: 2,
    condition: "Type 2 Diabetes",
    diagnosedDate: "2019-08-22",
    status: "Active",
    doctor: "Dr. Michael Chen",
    notes: "Managed with diet and metformin",
  },
  {
    id: 3,
    condition: "Seasonal Allergies",
    diagnosedDate: "2018-04-10",
    status: "Active",
    doctor: "Dr. Emily Rodriguez",
    notes: "Responds well to antihistamines",
  },
]

const labResults = [
  {
    id: 1,
    testName: "Complete Blood Count",
    date: "2024-01-10",
    status: "Normal",
    doctor: "Dr. Sarah Johnson",
    results: {
      "White Blood Cells": "7.2 K/uL (Normal: 4.0-11.0)",
      "Red Blood Cells": "4.8 M/uL (Normal: 4.2-5.4)",
      Hemoglobin: "14.2 g/dL (Normal: 12.0-16.0)",
      Hematocrit: "42% (Normal: 36-46%)",
    },
  },
  {
    id: 2,
    testName: "Lipid Panel",
    date: "2024-01-08",
    status: "Review Required",
    doctor: "Dr. Sarah Johnson",
    results: {
      "Total Cholesterol": "220 mg/dL (Normal: <200)",
      "LDL Cholesterol": "140 mg/dL (Normal: <100)",
      "HDL Cholesterol": "45 mg/dL (Normal: >40)",
      Triglycerides: "180 mg/dL (Normal: <150)",
    },
  },
  {
    id: 3,
    testName: "HbA1c",
    date: "2024-01-05",
    status: "Normal",
    doctor: "Dr. Michael Chen",
    results: {
      HbA1c: "6.8% (Target: <7.0%)",
      "Average Glucose": "148 mg/dL",
    },
  },
]

const prescriptions = [
  {
    id: 1,
    medication: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    prescribedDate: "2023-12-15",
    doctor: "Dr. Sarah Johnson",
    status: "Active",
    refillsLeft: 3,
  },
  {
    id: 2,
    medication: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    prescribedDate: "2023-11-20",
    doctor: "Dr. Michael Chen",
    status: "Active",
    refillsLeft: 2,
  },
  {
    id: 3,
    medication: "Atorvastatin",
    dosage: "20mg",
    frequency: "Once daily at bedtime",
    prescribedDate: "2024-01-08",
    doctor: "Dr. Sarah Johnson",
    status: "Active",
    refillsLeft: 5,
  },
]

const documents = [
  {
    id: 1,
    name: "Cardiology Consultation Report",
    type: "Consultation",
    date: "2024-01-12",
    doctor: "Dr. Sarah Johnson",
    size: "2.4 MB",
  },
  {
    id: 2,
    name: "Chest X-Ray Results",
    type: "Imaging",
    date: "2024-01-10",
    doctor: "Dr. Robert Kim",
    size: "8.7 MB",
  },
  {
    id: 3,
    name: "Annual Physical Exam",
    type: "Physical Exam",
    date: "2023-12-20",
    doctor: "Dr. Robert Kim",
    size: "1.8 MB",
  },
]

export default function HealthRecordsPage() {
  const [activeTab, setActiveTab] = useState("history")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "normal":
      case "active":
        return "bg-green-100 text-green-800"
      case "review required":
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "abnormal":
      case "inactive":
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
            <h1 className="text-3xl font-bold text-gray-900">Health Records</h1>
            <p className="text-gray-600 mt-2">Manage your complete medical history and documents</p>
          </div>
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search records, conditions, medications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Records</SelectItem>
                <SelectItem value="recent">Recent (30 days)</SelectItem>
                <SelectItem value="active">Active Conditions</SelectItem>
                <SelectItem value="medications">Medications</SelectItem>
                <SelectItem value="lab-results">Lab Results</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="bg-transparent">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="history">Medical History</TabsTrigger>
            <TabsTrigger value="lab-results">Lab Results</TabsTrigger>
            <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="space-y-4">
            {medicalHistory.map((condition) => (
              <Card key={condition.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Heart className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold">{condition.condition}</h3>
                        <Badge className={getStatusColor(condition.status)}>{condition.status}</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Diagnosed: {new Date(condition.diagnosedDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          {condition.doctor}
                        </div>
                      </div>
                      <p className="text-gray-700">{condition.notes}</p>
                    </div>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Eye className="mr-2 h-3 w-3" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="lab-results" className="space-y-4">
            {labResults.map((test) => (
              <Card key={test.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <TestTube className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold">{test.testName}</h3>
                        <Badge className={getStatusColor(test.status)}>{test.status}</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(test.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          {test.doctor}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Download className="mr-2 h-3 w-3" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Eye className="mr-2 h-3 w-3" />
                        View
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium mb-3">Test Results:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {Object.entries(test.results).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="text-gray-600">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="prescriptions" className="space-y-4">
            {prescriptions.map((prescription) => (
              <Card key={prescription.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Pill className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold">{prescription.medication}</h3>
                        <Badge className={getStatusColor(prescription.status)}>{prescription.status}</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-3">
                        <div>
                          <span className="font-medium">Dosage:</span> {prescription.dosage}
                        </div>
                        <div>
                          <span className="font-medium">Frequency:</span> {prescription.frequency}
                        </div>
                        <div>
                          <span className="font-medium">Prescribed:</span>{" "}
                          {new Date(prescription.prescribedDate).toLocaleDateString()}
                        </div>
                        <div>
                          <span className="font-medium">Refills Left:</span> {prescription.refillsLeft}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Prescribed by {prescription.doctor}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Request Refill
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Eye className="mr-2 h-3 w-3" />
                        Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="documents" className="space-y-4">
            {documents.map((document) => (
              <Card key={document.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{document.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span>{document.type}</span>
                          <span>{new Date(document.date).toLocaleDateString()}</span>
                          <span>{document.size}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">From {document.doctor}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Download className="mr-2 h-3 w-3" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Eye className="mr-2 h-3 w-3" />
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
