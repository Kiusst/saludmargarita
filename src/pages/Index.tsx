import { useState, useRef } from "react";
import Header from "@/components/Header";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import DoctorsSection from "@/components/DoctorsSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("Todas las especialidades");
  const [selectedLocation, setSelectedLocation] = useState("Toda la isla");
  const headerRef = useRef(null);

  const handleSearch = (specialty: string, location: string) => {
    setSelectedSpecialty(specialty);
    setSelectedLocation(location);
  };

  const handleSpecialtySelect = (specialty) => {
    setSelectedSpecialty(specialty);
  };

  const handleLogoClick = () => {
    setSelectedSpecialty("Todas las especialidades");
    setSelectedLocation("Toda la isla");
    headerRef.current?.resetSearch();
  };

  return (
    <div className="min-h-screen">
      <Header ref={headerRef} onLogoClick={handleLogoClick} onSearch={handleSearch} />
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
