import { useState } from "react";
import { MapPin, Clock, Star, MessageCircle, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import DoctorProfileModal from "./DoctorProfileModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsApp = () => {
    if (whatsapp) {
      window.open(`https://wa.me/${whatsapp}?text=Hola Dr. ${name}, me gustaría agendar una cita.`, "_blank");
    }
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  // Generate star rating - only stars, no text reviews
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? "fill-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)]" : "text-muted-foreground/30"}`} 
      />
    ));
  };

  const doctor = {
    name,
    specialty,
    location,
    schedule,
    rating,
    reviews,
    image,
    isPremium,
    whatsapp,
    priceRange,
  };

  return (
    <>
      <div 
        className={`relative overflow-hidden bg-card rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
          isPremium 
            ? "shadow-premium border-2 border-[hsl(38,92%,50%)]/30 hover:border-[hsl(38,92%,50%)]/50" 
            : "shadow-card hover:shadow-hover"
        }`}
      >
        {/* Premium Badge */}
        {isPremium && (
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-golden rounded-full shadow-golden">
            <Crown className="w-4 h-4 text-white" />
            <span className="text-xs font-bold text-white">PREMIUM</span>
          </div>
        )}

        {/* Doctor Image - Clickable to open modal */}
        <div 
          className="relative w-full aspect-[4/3] overflow-hidden cursor-pointer group"
          onClick={handleImageClick}
        >
          <img
            src={image}
            alt={name}
            className="object-cover object-top w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-sm font-medium bg-black/50 px-3 py-1.5 rounded-full">
              Ver Perfil
            </span>
          </div>
          
          {/* Rating on image - Stars only */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2.5 py-1.5 bg-black/50 backdrop-blur-sm rounded-full">
            {renderStars(rating)}
            <span className="text-xs text-white/70 ml-1">({reviews})</span>
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
              className={`py-3 h-auto rounded-xl border-border hover:bg-blue-500 hover:text-white hover:border-blue-500 font-semibold transition-all duration-200 ${isPremium && whatsapp ? 'flex-1' : 'w-full'}`}
              onClick={() => setIsModalOpen(true)}
            >
              Ver Perfil
            </Button>
            
            {isPremium && whatsapp && (
              <Button 
                onClick={handleWhatsApp}
                className="flex-1 gap-2 py-3 h-auto bg-green-500 hover:bg-green-600 rounded-xl text-white font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            )}
          </div>
        </div>
      </div>

      <DoctorProfileModal 
        doctor={doctor}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default DoctorCard;
