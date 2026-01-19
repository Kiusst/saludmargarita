import { useState, useEffect } from "react";
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
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsMinimized(currentScrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="sticky top-[52px] z-40 transition-all duration-300">
      {/* Gradient background with wave fade effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-transparent" />
      
      <div className={`container relative px-4 mx-auto transition-all duration-300 ${
        isMinimized ? "py-2" : "py-6"
      }`}>
        {/* Centered Search */}
        <div className="flex justify-center">
          <div className={`w-full transition-all duration-300 ${
            isMinimized ? "max-w-2xl" : "max-w-3xl"
          }`}>
            <div className={`flex flex-col gap-2 md:flex-row md:items-center p-2 bg-card/95 backdrop-blur-md rounded-2xl shadow-lg border border-border/50 transition-all duration-300 ${
              isMinimized ? "scale-95" : "scale-100"
            }`}>
              {/* Specialty Select */}
              <div className="relative flex-1">
                <Search className="absolute w-5 h-5 text-muted-foreground left-4 top-1/2 -translate-y-1/2" />
                <select className={`w-full pl-12 pr-4 text-foreground bg-secondary/50 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer transition-all duration-300 ${
                  isMinimized ? "py-2.5 text-sm" : "py-3.5 text-base"
                }`}>
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>

              {/* Divider - Desktop only */}
              <div className="hidden md:block w-px h-8 bg-border" />

              {/* Location Select */}
              <div className="relative flex-1">
                <MapPin className="absolute w-5 h-5 text-muted-foreground left-4 top-1/2 -translate-y-1/2" />
                <select className={`w-full pl-12 pr-4 text-foreground bg-secondary/50 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer transition-all duration-300 ${
                  isMinimized ? "py-2.5 text-sm" : "py-3.5 text-base"
                }`}>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <Button className={`font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 rounded-xl ${
                isMinimized ? "px-6 py-2.5 text-sm" : "px-8 py-3.5 text-base"
              }`}>
                <Search className="w-4 h-4 mr-2" />
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
