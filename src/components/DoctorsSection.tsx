import { useState } from "react";
import DoctorCard from "./DoctorCard";
import { Doctor, doctors as allDoctors, filterDoctors } from "@/data/doctors";

interface DoctorsSectionProps {
  selectedSpecialty?: string;
  selectedLocation?: string;
}

const DoctorsSection = ({ selectedSpecialty = "Todas las especialidades", selectedLocation = "Toda la isla" }: DoctorsSectionProps) => {
  const [showAll, setShowAll] = useState(false);
  
  const filteredDoctors = filterDoctors(selectedSpecialty, selectedLocation);
  const displayedDoctors = showAll ? filteredDoctors : filteredDoctors.slice(0, 8);
  
  const totalDoctors = allDoctors.length;
  const totalSpecialties = [...new Set(allDoctors.map(d => d.specialty))].length;
  const totalClinics = [...new Set(allDoctors.map(d => d.location.split(',')[0]))].length;

  return (
    <section className="py-8 sm:py-12 bg-secondary/30">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-6 sm:mb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground md:text-4xl">
              Directorio de Doctores
            </h1>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-muted-foreground">
              {selectedSpecialty !== "Todas las especialidades" || selectedLocation !== "Toda la isla" 
                ? `Mostrando ${filteredDoctors.length} resultado${filteredDoctors.length !== 1 ? 's' : ''}`
                : "Encuentra los mejores profesionales de la salud en Margarita"}
            </p>
          </div>
          
          {/* Stats */}
          <div className="flex gap-4 sm:gap-6">
            {[
              { value: `${totalDoctors}+`, label: "Doctores" },
              { value: `${totalSpecialties}`, label: "Especialidades" },
              { value: `${totalClinics}+`, label: "Clínicas" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Doctors Grid - Responsive with better spacing */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>

        {/* No results message */}
        {filteredDoctors.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-muted-foreground">No se encontraron doctores con los filtros seleccionados.</p>
          </div>
        )}

        {/* Load More */}
        {filteredDoctors.length > 8 && !showAll && (
          <div className="mt-8 sm:mt-12 text-center">
            <button 
              className="px-8 sm:px-10 py-3 sm:py-4 font-semibold transition-all border-2 rounded-xl text-primary border-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => setShowAll(true)}
            >
              Ver más doctores ({filteredDoctors.length - 8} más)
            </button>
          </div>
        )}

        {showAll && filteredDoctors.length > 8 && (
          <div className="mt-8 sm:mt-12 text-center">
            <button 
              className="px-8 sm:px-10 py-3 sm:py-4 font-semibold transition-all border-2 rounded-xl text-muted-foreground border-border hover:bg-secondary"
              onClick={() => setShowAll(false)}
            >
              Ver menos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorsSection;
