import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, MessageCircle, Crown, Users, Award, Stethoscope, GraduationCap } from "lucide-react";

interface Doctor {
  name: string;
  specialty: string;
  location: string;
  schedule: string;
  rating: number;
  reviews: number;
  image: string;
  isPremium?: boolean;
  whatsapp?: string;
  priceRange?: string;
  description?: string;
  specialties?: string[];
  education?: string;
  experience?: string;
  raters?: { name: string; avatar: string }[];
}

interface DoctorProfileModalProps {
  doctor: Doctor | null;
  isOpen: boolean;
  onClose: () => void;
}

const DoctorProfileModal = ({ doctor, isOpen, onClose }: DoctorProfileModalProps) => {
  if (!doctor) return null;

  const handleWhatsApp = () => {
    if (doctor.whatsapp) {
      window.open(`https://wa.me/${doctor.whatsapp}?text=Hola Dr. ${doctor.name}, me gustaría agendar una cita.`, "_blank");
    }
  };

  // Generate star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < Math.floor(rating) ? "fill-premium text-premium" : "text-muted-foreground/30"}`} 
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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header with image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Premium Badge */}
          {doctor.isPremium && (
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-premium rounded-full shadow-lg">
              <Crown className="w-4 h-4 text-premium-foreground" />
              <span className="text-xs font-bold text-premium-foreground">PREMIUM</span>
            </div>
          )}

          {/* Doctor Info on Image */}
          <div className="absolute bottom-4 left-6 right-6">
            <h2 className="text-2xl font-bold text-white mb-1">{doctor.name}</h2>
            <p className="text-lg text-white/90 font-medium">{doctor.specialty}</p>
          </div>
        </div>

        <div className="p-6">
          {/* Rating Section */}
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
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

          {/* Location and Schedule - Primary Info */}
          <div className="grid gap-4 mb-6">
            <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground">{doctor.location}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl">
              <Clock className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground">{doctor.schedule}</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
              <Stethoscope className="w-5 h-5 text-primary" />
              Sobre el Doctor
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {doctor.description || 
                `${doctor.name} es un profesional de la salud altamente calificado con amplia experiencia en ${doctor.specialty}. 
                Comprometido con brindar atención médica de calidad a todos sus pacientes en la Isla de Margarita, 
                utilizando las técnicas más modernas y un enfoque personalizado para cada caso.`}
            </p>
          </div>

          {/* Specialties */}
          <div className="mb-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
              <Award className="w-5 h-5 text-primary" />
              Especialidades
            </h3>
            <div className="flex flex-wrap gap-2">
              {(doctor.specialties || [doctor.specialty, "Consulta General", "Urgencias"]).map((spec, i) => (
                <span 
                  key={i}
                  className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
              <GraduationCap className="w-5 h-5 text-primary" />
              Formación
            </h3>
            <p className="text-muted-foreground">
              {doctor.education || "Universidad Central de Venezuela - Médico Cirujano"}
            </p>
          </div>

          {/* People who rated */}
          <div className="mb-6 p-4 bg-secondary/30 rounded-xl">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
              <Users className="w-4 h-4 text-primary" />
              {doctor.reviews} personas han puntuado a este doctor
            </h3>
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {raters.slice(0, 5).map((rater, i) => (
                  <img
                    key={i}
                    src={rater.avatar}
                    alt={rater.name}
                    className="w-8 h-8 rounded-full border-2 border-card object-cover"
                  />
                ))}
              </div>
              {doctor.reviews > 5 && (
                <span className="ml-3 text-sm text-muted-foreground">
                  +{doctor.reviews - 5} más
                </span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-border">
            <Button 
              variant="outline" 
              className="flex-1 py-3 h-auto rounded-xl"
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
