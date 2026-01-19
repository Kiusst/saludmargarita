import { MapPin, Clock, Star, MessageCircle, Crown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DoctorCardProps {
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
}

const DoctorCard = ({
  name,
  specialty,
  location,
  schedule,
  rating,
  reviews,
  image,
  isPremium = false,
  whatsapp,
  priceRange,
}: DoctorCardProps) => {
  const handleWhatsApp = () => {
    if (whatsapp) {
      window.open(`https://wa.me/${whatsapp}?text=Hola Dr. ${name}, me gustaría agendar una cita.`, "_blank");
    }
  };

  return (
    <div 
      className={`relative overflow-hidden bg-card rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
        isPremium 
          ? "shadow-premium border-2 border-premium/30 hover:border-premium/50" 
          : "shadow-card hover:shadow-hover"
      }`}
    >
      {/* Premium Badge */}
      {isPremium && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-premium rounded-full shadow-lg">
          <Crown className="w-4 h-4 text-premium-foreground" />
          <span className="text-xs font-bold text-premium-foreground">PREMIUM</span>
        </div>
      )}

      {/* Doctor Image - Larger */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Rating on image */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2.5 py-1 bg-black/50 backdrop-blur-sm rounded-full">
          <Star className="w-4 h-4 fill-premium text-premium" />
          <span className="text-sm font-semibold text-white">{rating}</span>
          <span className="text-xs text-white/70">({reviews})</span>
        </div>

        {/* Price on image for premium */}
        {isPremium && priceRange && (
          <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-accent/90 backdrop-blur-sm rounded-full">
            <span className="text-xs font-bold text-accent-foreground">{priceRange}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Name and Specialty */}
        <div className="mb-4">
          <h3 className="mb-1 text-xl font-bold text-foreground">
            {name}
          </h3>
          <p className="text-base font-semibold text-primary">
            {specialty}
          </p>
        </div>

        {/* Details */}
        <div className="space-y-2.5 mb-5">
          <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <MapPin className="flex-shrink-0 w-4 h-4 text-primary" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <Clock className="flex-shrink-0 w-4 h-4 text-primary" />
            <span>{schedule}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="flex-1 py-3 h-auto rounded-xl border-border hover:bg-secondary font-semibold"
          >
            Ver Perfil
          </Button>
          
          {isPremium && whatsapp ? (
            <Button 
              onClick={handleWhatsApp}
              className="flex-1 gap-2 py-3 h-auto bg-green-500 hover:bg-green-600 rounded-xl text-white font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          ) : (
            <Button 
              variant="outline"
              className="flex-1 gap-2 py-3 h-auto rounded-xl border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
            >
              <Phone className="w-4 h-4" />
              Contactar
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
