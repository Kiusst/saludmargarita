import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import DoctorsSection from "@/components/DoctorsSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SpecialtiesSection />
      <DoctorsSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
