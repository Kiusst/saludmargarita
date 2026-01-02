import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const specialties = [
  "Todas las especialidades",
  "Cardiología",
  "Dermatología",
  "Ginecología",
  "Nutrición",
  "Odontología",
  "Oftalmología",
  "Pediatría",
  "Traumatología",
];

const locations = [
  "Toda la isla",
  "Porlamar",
  "Pampatar",
  "La Asunción",
  "Juan Griego",
  "El Valle",
  "Juangriego",
];

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-foreground/15 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-soft" />
            <span className="text-sm font-medium text-primary-foreground">
              +200 Doctores disponibles en Margarita
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Encuentra tu Doctor
            <br />
            <span className="text-accent">en Isla de Margarita</span>
          </h1>

          <p className="max-w-2xl mx-auto mb-10 text-lg text-primary-foreground/85 md:text-xl">
            El directorio médico más completo de la isla. Encuentra especialistas, 
            consulta horarios y agenda tu cita fácilmente.
          </p>

          {/* Search Box */}
          <div className="p-3 mx-auto bg-card rounded-2xl shadow-card max-w-3xl">
            <div className="flex flex-col gap-3 md:flex-row">
              {/* Specialty Select */}
              <div className="relative flex-1">
                <Search className="absolute w-5 h-5 text-muted-foreground left-4 top-1/2 -translate-y-1/2" />
                <select className="w-full py-4 pl-12 pr-4 text-foreground bg-secondary rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer">
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Select */}
              <div className="relative flex-1">
                <MapPin className="absolute w-5 h-5 text-muted-foreground left-4 top-1/2 -translate-y-1/2" />
                <select className="w-full py-4 pl-12 pr-4 text-foreground bg-secondary rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer">
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <Button className="px-8 py-4 h-auto text-base font-semibold bg-gradient-hero hover:opacity-90 transition-opacity rounded-xl">
                Buscar Doctores
              </Button>
            </div>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            {[
              { value: "200+", label: "Doctores" },
              { value: "25+", label: "Especialidades" },
              { value: "15+", label: "Clínicas" },
              { value: "5000+", label: "Pacientes atendidos" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-primary-foreground md:text-3xl">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
