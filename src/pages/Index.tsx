import { useState } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import DoctorsSection from "@/components/DoctorsSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("Todas las especialidades");
  const [selectedLocation, setSelectedLocation] = useState("Toda la isla");

  const handleSearch = (specialty: string, location: string) => {
    setSelectedSpecialty(specialty);
    setSelectedLocation(location);
  };

  const handleSpecialtySelect = (specialty: string) => {
    setSelectedSpecialty(specialty);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <DoctorsSection 
        selectedSpecialty={selectedSpecialty} 
        selectedLocation={selectedLocation} 
      />
      <SpecialtiesSection onSpecialtySelect={handleSpecialtySelect} />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
