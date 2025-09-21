"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard } from "lucide-react"

const doctors = [
  { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiology", fee: 150 },
  { id: 2, name: "Dr. Michael Chen", specialty: "Dermatology", fee: 120 },
  { id: 3, name: "Dr. Emily Rodriguez", specialty: "Pediatrics", fee: 100 },
]

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
]

export default function BookAppointmentPage() {
  const searchParams = useSearchParams()
  const doctorId = searchParams.get("doctor")

  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    doctorId: doctorId || "",
    appointmentType: "",
    date: "",
    time: "",
    reason: "",
    notes: "",
    patientName: "",
    patientEmail: "",
    patientPhone: "",
  })

  const selectedDoctor = doctors.find((d) => d.id.toString() === formData.doctorId)

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    console.log("Booking appointment:", formData)
    // Handle appointment booking logic here
    alert("Appointment booked successfully!")
  }

  const generateCalendarDays = () => {
    const today = new Date()
    const days = []

    for (let i = 1; i <= 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      days.push(date)
    }

    return days
  }

  const calendarDays = generateCalendarDays()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Book an Appointment</h1>
          <p className="text-gray-600 mt-2">Schedule your consultation with our healthcare professionals</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= stepNumber ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 mx-2 ${step > stepNumber ? "bg-primary" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {step === 1 && "Select Doctor & Date"}
              {step === 2 && "Patient Information"}
              {step === 3 && "Confirm & Pay"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Doctor & Date Selection */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Select Doctor</Label>
                  <Select value={formData.doctorId} onValueChange={(value) => handleInputChange("doctorId", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      {doctors.map((doctor) => (
                        <SelectItem key={doctor.id} value={doctor.id.toString()}>
                          {doctor.name} - {doctor.specialty} (${doctor.fee})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Appointment Type</Label>
                  <Select
                    value={formData.appointmentType}
                    onValueChange={(value) => handleInputChange("appointmentType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select appointment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="in-person">In-Person Visit</SelectItem>
                      <SelectItem value="video-call">Video Consultation</SelectItem>
                      <SelectItem value="phone-call">Phone Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Select Date</Label>
                  <div className="grid grid-cols-7 gap-2 max-h-64 overflow-y-auto">
                    {calendarDays.map((date, index) => (
                      <button
                        key={index}
                        onClick={() => handleInputChange("date", date.toISOString().split("T")[0])}
                        className={`p-2 text-sm rounded-lg border ${
                          formData.date === date.toISOString().split("T")[0]
                            ? "bg-primary text-white border-primary"
                            : "bg-white hover:bg-gray-50 border-gray-200"
                        }`}
                      >
                        <div className="font-medium">{date.getDate()}</div>
                        <div className="text-xs">{date.toLocaleDateString("en-US", { weekday: "short" })}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Select Time</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleInputChange("time", time)}
                        className={`p-3 text-sm rounded-lg border ${
                          formData.time === time
                            ? "bg-primary text-white border-primary"
                            : "bg-white hover:bg-gray-50 border-gray-200"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Visit</Label>
                  <Input
                    id="reason"
                    placeholder="Brief description of your concern"
                    value={formData.reason}
                    onChange={(e) => handleInputChange("reason", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any additional information you'd like to share"
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Patient Information */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="patientName">Full Name</Label>
                  <Input
                    id="patientName"
                    placeholder="Enter your full name"
                    value={formData.patientName}
                    onChange={(e) => handleInputChange("patientName", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="patientEmail">Email Address</Label>
                  <Input
                    id="patientEmail"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.patientEmail}
                    onChange={(e) => handleInputChange("patientEmail", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="patientPhone">Phone Number</Label>
                  <Input
                    id="patientPhone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.patientPhone}
                    onChange={(e) => handleInputChange("patientPhone", e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Confirmation & Payment */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4">Appointment Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Doctor:</span>
                      <span>{selectedDoctor?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Specialty:</span>
                      <span>{selectedDoctor?.specialty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span>{formData.date && new Date(formData.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span>{formData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Type:</span>
                      <span className="capitalize">{formData.appointmentType?.replace("-", " ")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Patient:</span>
                      <span>{formData.patientName}</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between font-semibold">
                        <span>Total:</span>
                        <span>${selectedDoctor?.fee}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Payment Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Card Number</Label>
                      <Input placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="space-y-2">
                      <Label>Expiry Date</Label>
                      <Input placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label>CVV</Label>
                      <Input placeholder="123" />
                    </div>
                    <div className="space-y-2">
                      <Label>Cardholder Name</Label>
                      <Input placeholder="John Doe" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button variant="outline" onClick={handlePrevious} disabled={step === 1} className="bg-transparent">
                Previous
              </Button>
              {step < 3 ? (
                <Button onClick={handleNext}>Next</Button>
              ) : (
                <Button onClick={handleSubmit}>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Confirm & Pay ${selectedDoctor?.fee}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
