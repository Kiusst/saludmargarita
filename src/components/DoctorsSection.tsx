import DoctorCard from "./DoctorCard";

const doctors = [
  {
    name: "Dra. María González",
    specialty: "Cardiología",
    location: "Clínica Santa María, Porlamar",
    schedule: "Lun - Vie: 8:00 AM - 4:00 PM",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
    isPremium: true,
    whatsapp: "584121234567",
  },
  {
    name: "Dr. Carlos Rodríguez",
    specialty: "Traumatología",
    location: "Centro Médico Margarita, Pampatar",
    schedule: "Lun - Sáb: 9:00 AM - 5:00 PM",
    rating: 4.8,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
    isPremium: true,
    whatsapp: "584129876543",
  },
  {
    name: "Dra. Ana Martínez",
    specialty: "Pediatría",
    location: "Hospital Central, La Asunción",
    schedule: "Lun - Vie: 7:00 AM - 3:00 PM",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face",
    isPremium: false,
  },
  {
    name: "Dr. José Hernández",
    specialty: "Odontología",
    location: "Dental Care, Juan Griego",
    schedule: "Mar - Sáb: 8:00 AM - 6:00 PM",
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face",
    isPremium: false,
  },
  {
    name: "Dra. Laura Pérez",
    specialty: "Nutrición",
    location: "NutriVida Center, Porlamar",
    schedule: "Lun - Vie: 9:00 AM - 5:00 PM",
    rating: 4.8,
    reviews: 72,
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=200&h=200&fit=crop&crop=face",
    isPremium: false,
  },
  {
    name: "Dr. Miguel Ramírez",
    specialty: "Oftalmología",
    location: "Vista Clara Clinic, Porlamar",
    schedule: "Lun - Jue: 8:00 AM - 4:00 PM",
    rating: 4.6,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop&crop=face",
    isPremium: false,
  },
];

const DoctorsSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-14 text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Directorio
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Doctores Destacados
          </h2>
          <p className="text-muted-foreground">
            Conoce a los profesionales de la salud mejor valorados de la isla
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 font-semibold transition-all border-2 rounded-xl text-primary border-primary hover:bg-primary hover:text-primary-foreground">
            Ver más doctores
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
