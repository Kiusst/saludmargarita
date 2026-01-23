import { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { specialties, locations } from "@/data/doctors";

interface SearchBarProps {
  onSearch?: (specialty: string, location: string) => void;
}

export interface SearchBarRef {
  reset: () => void;
}

const SearchBar = forwardRef<SearchBarRef, SearchBarProps>(({ onSearch }, ref) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState("Todas las especialidades");
  const [selectedLocation, setSelectedLocation] = useState("Toda la isla");

  useImperativeHandle(ref, () => ({
    reset: () => {
      setSelectedSpecialty("Todas las especialidades");
      setSelectedLocation("Toda la isla");
      if (onSearch) {
        onSearch("Todas las especialidades", "Toda la isla");
      }
    }
  }));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsMinimized(currentScrollY > 80);
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
      className={`sticky z-40 transition-all duration-300 ${
        isMinimized 
          ? "top-[52px] bg-transparent" 
          : "top-[68px] bg-transparent"
      }`}
    >
      <div className={`container px-4 mx-auto transition-all duration-300 ${
        isMinimized ? "py-2" : "py-4"
      }`}>
        {/* Clean Search Bar - AirBNB Style */}
        <div className="flex justify-center">
          <div className={`w-full transition-all duration-300 ${
            isMinimized ? "max-w-xl" : "max-w-3xl"
          }`}>
            <div className={`flex flex-col gap-2 md:flex-row md:items-center bg-card rounded-full shadow-lg border border-border/40 transition-all duration-300 ${
              isMinimized ? "p-1.5" : "p-2"
            }`}>
              {/* Specialty Select */}
              <div className="relative flex-1 min-w-0">
                <Search className={`absolute text-muted-foreground left-4 top-1/2 -translate-y-1/2 transition-all ${
                  isMinimized ? "w-4 h-4" : "w-5 h-5"
                }`} />
                <select 
                  className={`w-full pl-11 pr-3 text-foreground bg-transparent rounded-full border-0 focus:outline-none focus:bg-secondary/30 appearance-none cursor-pointer transition-all duration-300 hover:bg-secondary/20 ${
                    isMinimized ? "py-2.5 text-sm" : "py-3 text-base"
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
              <div className="hidden md:block w-px h-8 bg-border/60" />

              {/* Location Select */}
              <div className="relative flex-1 min-w-0">
                <MapPin className={`absolute text-muted-foreground left-4 top-1/2 -translate-y-1/2 transition-all ${
                  isMinimized ? "w-4 h-4" : "w-5 h-5"
                }`} />
                <select 
                  className={`w-full pl-11 pr-3 text-foreground bg-transparent rounded-full border-0 focus:outline-none focus:bg-secondary/30 appearance-none cursor-pointer transition-all duration-300 hover:bg-secondary/20 ${
                    isMinimized ? "py-2.5 text-sm" : "py-3 text-base"
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
                className={`font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 rounded-full shrink-0 ${
                  isMinimized ? "px-5 py-2.5 text-sm" : "px-8 py-3 text-base"
                }`}
                onClick={handleSearch}
              >
                <Search className={`mr-2 ${isMinimized ? "w-3.5 h-3.5" : "w-4 h-4"}`} />
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

SearchBar.displayName = "SearchBar";

export default SearchBar;
