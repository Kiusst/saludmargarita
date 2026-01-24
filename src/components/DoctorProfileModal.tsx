import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, MessageCircle, Crown, Users, Award, Stethoscope, GraduationCap, X } from "lucide-react";

const DoctorProfileModal = ({ doctor, isOpen, onClose }) => {
  if (!doctor) return null;

  const handleWhatsApp = () => {
    if (doctor.whatsapp) {
      window.open(`https://wa.me/${doctor.whatsapp}?text=Hola Dr. ${doctor.name}, me gustaría agendar una cita.`, "_blank");
    }
  };

  // Generate star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < Math.floor(rating) ? "fill-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)]" : "text-muted-foreground/30"}`} 
      />
    ));
  };

  // Mock raters data
  const raters = doctor.raters || [
    { name: "María L.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" },
    { name: "Carlos M.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
    { name: "Ana P.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
    { name: "José R.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
    { name: "Laura S.", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        {/* Header with image - Centered and responsive */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] overflow-hidden">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          
          {/* Premium Badge */}
          {doctor.isPremium && (
            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-golden rounded-full shadow-golden">
              <Crown className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white">PREMIUM</span>
            </div>
          )}

          {/* Doctor Info on Image */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">{doctor.name}</h2>
            <p className="text-base sm:text-lg text-white/90 font-medium">{doctor.specialty}</p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Rating Section */}
          <div className="flex items-center justify-between pb-6 border-b border-border">
            <div className="flex items-center gap-2">
              {renderStars(doctor.rating)}
              <span className="text-lg font-bold text-foreground ml-2">{doctor.rating}</span>
            </div>
            {doctor.isPremium && doctor.priceRange && (
              <div className="px-4 py-2 bg-accent/10 rounded-full">
                <span className="text-sm font-bold text-accent">{doctor.priceRange}</span>
              </div>
            )}
          </div>

          {/* Location and Schedule - Compact design */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">{doctor.location}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl">
              <Clock className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">{doctor.schedule}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="flex items-center gap-2 text-base font-semibold text-foreground mb-2">
              <Stethoscope className="w-4 h-4 text-primary" />
              Sobre el Doctor
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {doctor.description || 
                `${doctor.name} es un profesional de la salud altamente calificado con amplia experiencia en ${doctor.specialty}. 
                Comprometido con brindar atención médica de calidad a todos sus pacientes en la Isla de Margarita.`}
            </p>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="flex items-center gap-2 text-base font-semibold text-foreground mb-2">
              <Award className="w-4 h-4 text-primary" />
              Especialidades
            </h3>
            <div className="flex flex-wrap gap-2">
              {(doctor.specialties || [doctor.specialty, "Consulta General"]).map((spec, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-base font-semibold text-foreground mb-2">
              <GraduationCap className="w-4 h-4 text-primary" />
              Formación
            </h3>
            <p className="text-sm text-muted-foreground">
              {doctor.education || "Universidad Central de Venezuela - Médico Cirujano"}
            </p>
          </div>

          {/* People who rated - Compact */}
          <div className="p-4 bg-secondary/30 rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {doctor.reviews} valoraciones
                </span>
              </div>
              <div className="flex -space-x-2">
                {raters.slice(0, 4).map((rater, i) => (
                  <img
                    key={i}
                    src={rater.avatar}
                    alt={rater.name}
                    className="w-7 h-7 rounded-full border-2 border-card object-cover"
                  />
                ))}
                {doctor.reviews > 4 && (
                  <div className="w-7 h-7 rounded-full border-2 border-card bg-primary flex items-center justify-center">
                    <span className="text-[10px] font-medium text-primary-foreground">
                      +{doctor.reviews - 4}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <Button 
              variant="outline" 
              className="flex-1 py-3 h-auto rounded-xl hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all"
              onClick={onClose}
            >
              Cerrar
            </Button>
            {doctor.isPremium && doctor.whatsapp && (
              <Button 
                onClick={handleWhatsApp}
                className="flex-1 gap-2 py-3 h-auto bg-green-500 hover:bg-green-600 rounded-xl text-white font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                Contactar por WhatsApp
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DoctorProfileModal;
