import { 
  Heart, 
  Stethoscope, 
  Baby, 
  Eye, 
  Bone, 
  Apple, 
  Smile,
  Brain
} from "lucide-react";

const specialties = [
  { icon: Heart, name: "Cardiología", count: 18, color: "bg-red-50 text-red-500" },
  { icon: Stethoscope, name: "Medicina General", count: 45, color: "bg-primary/10 text-primary" },
  { icon: Baby, name: "Pediatría", count: 22, color: "bg-pink-50 text-pink-500" },
  { icon: Eye, name: "Oftalmología", count: 12, color: "bg-blue-50 text-blue-500" },
  { icon: Bone, name: "Traumatología", count: 15, color: "bg-orange-50 text-orange-500" },
  { icon: Apple, name: "Nutrición", count: 20, color: "bg-green-50 text-green-500" },
  { icon: Smile, name: "Odontología", count: 35, color: "bg-cyan-50 text-cyan-500" },
  { icon: Brain, name: "Neurología", count: 8, color: "bg-purple-50 text-purple-500" },
];

const SpecialtiesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-14 text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Especialidades
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Encuentra por Especialidad
          </h2>
          <p className="text-muted-foreground">
            Explora nuestra amplia red de especialistas médicos en toda la Isla de Margarita
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
          {specialties.map((specialty) => {
            const Icon = specialty.icon;
            return (
              <button
                key={specialty.name}
                className="group p-6 bg-card rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 text-left"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl ${specialty.color} transition-transform group-hover:scale-110`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">
                  {specialty.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {specialty.count} doctores
                </p>
              </button>
            );
          })}
        </div>

        {/* View all button */}
        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 font-medium transition-colors rounded-xl text-primary hover:bg-primary/5">
            Ver todas las especialidades
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
