import { useState, useEffect } from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { specialties, locations } from "@/data/doctors";

interface SearchBarProps {
  onSearch?: (specialty: string, location: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState("Todas las especialidades");
  const [selectedLocation, setSelectedLocation] = useState("Toda la isla");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsMinimized(currentScrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(selectedSpecialty, selectedLocation);
    }
    // Scroll to doctors section
    const doctorsSection = document.getElementById("doctors-section");
    if (doctorsSection) {
      doctorsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSpecialtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSpecialty(value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedLocation(value);
  };

  return (
    <section 
      id="search-bar"
      className={`sticky z-40 transition-all duration-300 bg-gradient-to-b from-primary to-primary/80 ${
        isMinimized ? "top-[52px]" : "top-[68px]"
      }`}
    >
      <div className={`container px-4 mx-auto transition-all duration-300 ${
        isMinimized ? "py-2" : "py-6"
      }`}>
        {/* Centered Search */}
        <div className="flex justify-center">
          <div className={`w-full transition-all duration-300 ${
            isMinimized ? "max-w-2xl" : "max-w-4xl"
          }`}>
            <div className={`flex flex-col gap-2 md:flex-row md:items-center p-3 bg-card/95 backdrop-blur-md rounded-2xl shadow-lg border border-border/20 transition-all duration-300 ${
              isMinimized ? "scale-95" : "scale-100"
            }`}>
              {/* Specialty Select */}
              <div className="relative flex-1">
                <Search className="absolute w-5 h-5 text-muted-foreground left-4 top-1/2 -translate-y-1/2" />
                <select 
                  className={`w-full pl-12 pr-4 text-foreground bg-secondary/50 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer transition-all duration-300 ${
                    isMinimized ? "py-3 text-sm" : "py-4 text-base"
                  }`}
                  value={selectedSpecialty}
                  onChange={handleSpecialtyChange}
                >
                  <option value="Todas las especialidades">Todas las especialidades</option>
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>

              {/* Divider - Desktop only */}
              <div className="hidden md:block w-px h-10 bg-border" />

              {/* Location Select */}
              <div className="relative flex-1">
                <MapPin className="absolute w-5 h-5 text-muted-foreground left-4 top-1/2 -translate-y-1/2" />
                <select 
                  className={`w-full pl-12 pr-4 text-foreground bg-secondary/50 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer transition-all duration-300 ${
                    isMinimized ? "py-3 text-sm" : "py-4 text-base"
                  }`}
                  value={selectedLocation}
                  onChange={handleLocationChange}
                >
                  <option value="Toda la isla">Toda la isla</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <Button 
                className={`font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 rounded-xl ${
                  isMinimized ? "px-6 py-3 text-sm" : "px-10 py-4 text-base"
                }`}
                onClick={handleSearch}
              >
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
