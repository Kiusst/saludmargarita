import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import DoctorsSection from "@/components/DoctorsSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SearchBar />
      <DoctorsSection />
      <SpecialtiesSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
