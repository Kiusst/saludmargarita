import { MapPin, Clock, Star, MessageCircle, Crown } from "lucide-react";
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
      className={`relative p-5 bg-card rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
        isPremium 
          ? "shadow-premium border-2 border-premium/30 hover:border-premium/50" 
          : "shadow-card hover:shadow-hover"
      }`}
    >
      {/* Premium Badge */}
      {isPremium && (
        <div className="absolute -top-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-premium rounded-full shadow-lg">
          <Crown className="w-4 h-4 text-premium-foreground" />
          <span className="text-xs font-bold text-premium-foreground">PREMIUM</span>
        </div>
      )}

      <div className="flex gap-4">
        {/* Doctor Image */}
        <div className={`relative flex-shrink-0 w-20 h-20 overflow-hidden rounded-xl ${isPremium ? "ring-2 ring-premium ring-offset-2" : ""}`}>
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="mb-1 text-lg font-semibold truncate text-foreground">
            {name}
          </h3>
          <p className="mb-2 text-sm font-medium text-primary">
            {specialty}
          </p>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 fill-premium text-premium" />
            <span className="text-sm font-medium text-foreground">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviews} reseñas)</span>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="flex-shrink-0 w-4 h-4 text-primary" />
          <span className="truncate">{location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="flex-shrink-0 w-4 h-4 text-primary" />
          <span>{schedule}</span>
        </div>
        {isPremium && priceRange && (
          <div className="flex items-center gap-2 text-sm font-semibold text-premium">
            <span>💰 Consulta: {priceRange}</span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-5">
        <Button 
          variant="outline" 
          className="flex-1 rounded-xl border-border hover:bg-secondary"
        >
          Ver Perfil
        </Button>
        
        {isPremium && whatsapp && (
          <Button 
            onClick={handleWhatsApp}
            className="flex-1 gap-2 bg-green-500 hover:bg-green-600 rounded-xl text-white"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;
