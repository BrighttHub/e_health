import { Card, CardContent } from "@/components/ui/card"

export function StatsSection() {
  const stats = [
    { number: "10,000+", label: "Happy Patients" },
    { number: "500+", label: "Expert Doctors" },
    { number: "50+", label: "Specializations" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-card-foreground mb-4">Trusted by Thousands</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our growing community of patients and healthcare providers who trust HealthCare Plus for their medical
            needs.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-background border-border">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
