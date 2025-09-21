export function StatsSection() {
  const stats = [
    { number: "50,000+", label: "Happy Patients" },
    { number: "1,200+", label: "Certified Doctors" },
    { number: "25+", label: "Medical Specialties" },
    { number: "99.9%", label: "Uptime Guarantee" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our growing community of patients and healthcare providers
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
