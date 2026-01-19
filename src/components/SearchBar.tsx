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
];

const SearchBar = () => {
  return (
    <section className="bg-gradient-hero shadow-md">
      <div className="container px-4 py-4 mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Left side - Badge */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/15 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-soft" />
              <span className="text-sm font-medium text-primary-foreground">
                +200 Doctores disponibles
              </span>
            </div>
          </div>

          {/* Right side - Search */}
          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <div className="flex flex-1 gap-2 p-1.5 bg-primary-foreground/10 backdrop-blur-sm rounded-xl">
              {/* Specialty Select */}
              <div className="relative flex-1 min-w-[160px]">
                <Search className="absolute w-4 h-4 text-primary-foreground/60 left-3 top-1/2 -translate-y-1/2" />
                <select className="w-full py-2.5 pl-9 pr-3 text-sm text-primary-foreground bg-transparent rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 appearance-none cursor-pointer">
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty} className="text-foreground">
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Select */}
              <div className="relative flex-1 min-w-[140px]">
                <MapPin className="absolute w-4 h-4 text-primary-foreground/60 left-3 top-1/2 -translate-y-1/2" />
                <select className="w-full py-2.5 pl-9 pr-3 text-sm text-primary-foreground bg-transparent rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 appearance-none cursor-pointer">
                  {locations.map((location) => (
                    <option key={location} value={location} className="text-foreground">
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <Button className="px-6 py-2.5 h-auto text-sm font-semibold bg-accent hover:bg-accent/90 text-accent-foreground transition-colors rounded-lg">
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
