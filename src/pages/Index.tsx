import { useState, useRef } from "react";
import Header from "@/components/Header";
import SearchBar, { SearchBarRef } from "@/components/SearchBar";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import DoctorsSection from "@/components/DoctorsSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("Todas las especialidades");
  const [selectedLocation, setSelectedLocation] = useState("Toda la isla");
  const searchBarRef = useRef<SearchBarRef>(null);

  const handleSearch = (specialty: string, location: string) => {
    setSelectedSpecialty(specialty);
    setSelectedLocation(location);
  };

  const handleSpecialtySelect = (specialty: string) => {
    setSelectedSpecialty(specialty);
  };

  const handleLogoClick = () => {
    // Reset all filters
    setSelectedSpecialty("Todas las especialidades");
    setSelectedLocation("Toda la isla");
    // Reset search bar
    searchBarRef.current?.reset();
  };

  return (
    <div className="min-h-screen">
      <Header onLogoClick={handleLogoClick} />
      <SearchBar ref={searchBarRef} onSearch={handleSearch} />
      <div id="doctors-section">
        <DoctorsSection 
          selectedSpecialty={selectedSpecialty} 
          selectedLocation={selectedLocation} 
        />
      </div>
      <SpecialtiesSection onSpecialtySelect={handleSpecialtySelect} />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
