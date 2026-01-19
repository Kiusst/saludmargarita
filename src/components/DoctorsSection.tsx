import DoctorCard from "./DoctorCard";

const doctors = [
  {
    name: "Dra. María González",
    specialty: "Cardiología",
    location: "Clínica Santa María, Porlamar",
    schedule: "Lun - Vie: 8:00 AM - 4:00 PM",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop&crop=face",
    isPremium: true,
    whatsapp: "584121234567",
    priceRange: "40$ - 60$",
  },
  {
    name: "Dr. Carlos Rodríguez",
    specialty: "Traumatología",
    location: "Centro Médico Margarita, Pampatar",
    schedule: "Lun - Sáb: 9:00 AM - 5:00 PM",
    rating: 4.8,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop&crop=face",
    isPremium: true,
    whatsapp: "584129876543",
    priceRange: "40$ - 60$",
  },
  {
    name: "Dra. Ana Martínez",
    specialty: "Pediatría",
    location: "Hospital Central, La Asunción",
    schedule: "Lun - Vie: 7:00 AM - 3:00 PM",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=300&fit=crop&crop=face",
    isPremium: false,
  },
  {
    name: "Dr. José Hernández",
    specialty: "Odontología",
    location: "Dental Care, Juan Griego",
    schedule: "Mar - Sáb: 8:00 AM - 6:00 PM",
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=300&fit=crop&crop=face",
    isPremium: false,
  },
  {
    name: "Dra. Laura Pérez",
    specialty: "Nutrición",
    location: "NutriVida Center, Porlamar",
    schedule: "Lun - Vie: 9:00 AM - 5:00 PM",
    rating: 4.8,
    reviews: 72,
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=300&fit=crop&crop=face",
    isPremium: false,
  },
  {
    name: "Dr. Miguel Ramírez",
    specialty: "Oftalmología",
    location: "Vista Clara Clinic, Porlamar",
    schedule: "Lun - Jue: 8:00 AM - 4:00 PM",
    rating: 4.6,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=300&fit=crop&crop=face",
    isPremium: false,
  },
  {
    name: "Dra. Carmen Vásquez",
    specialty: "Dermatología",
    location: "Clínica Dermis, Porlamar",
    schedule: "Lun - Vie: 8:00 AM - 5:00 PM",
    rating: 4.8,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop&crop=face",
    isPremium: true,
    whatsapp: "584123456789",
    priceRange: "35$ - 50$",
  },
  {
    name: "Dr. Roberto Silva",
    specialty: "Ginecología",
    location: "Centro Médico Femenino, Pampatar",
    schedule: "Lun - Sáb: 7:00 AM - 4:00 PM",
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop&crop=face",
    isPremium: true,
    whatsapp: "584127654321",
    priceRange: "45$ - 70$",
  },
];

const DoctorsSection = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground md:text-4xl">
              Directorio de Doctores
            </h1>
            <p className="mt-2 text-muted-foreground">
              Encuentra los mejores profesionales de la salud en Margarita
            </p>
          </div>
          
          {/* Stats */}
          <div className="flex gap-6">
            {[
              { value: "200+", label: "Doctores" },
              { value: "25+", label: "Especialidades" },
              { value: "15+", label: "Clínicas" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Doctors Grid - Larger cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-10 py-4 font-semibold transition-all border-2 rounded-xl text-primary border-primary hover:bg-primary hover:text-primary-foreground">
            Ver más doctores
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
