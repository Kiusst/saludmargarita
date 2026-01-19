import { useState, useEffect } from "react";
import { Heart, Stethoscope, Syringe, Activity, HelpCircle, UserPlus, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Minimize on scroll down, expand on scroll up
      if (currentScrollY > 50) {
        setIsMinimized(true);
      } else {
        setIsMinimized(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { icon: HelpCircle, label: "Centro de Ayuda", href: "#" },
    { icon: UserPlus, label: "Conviértete Miembro Especialista", href: "/registro-doctor" },
    { icon: Sparkles, label: "Funcionalidades", href: "#" },
  ];

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isMinimized ? "py-2" : "py-4"
        }`}
      >
        {/* Fade gradient background - wave effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
        
        <div className="container relative px-4 mx-auto">
          <nav className="flex items-center justify-between">
            {/* Left side - Logo + Ser Miembro button */}
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2">
                <div className={`flex items-center justify-center rounded-xl bg-primary-foreground/20 backdrop-blur-sm transition-all duration-300 ${
                  isMinimized ? "w-8 h-8" : "w-10 h-10"
                }`}>
                  <Heart className={`text-primary-foreground fill-primary-foreground transition-all duration-300 ${
                    isMinimized ? "w-4 h-4" : "w-5 h-5"
                  }`} />
                </div>
                <span className={`font-bold text-primary-foreground transition-all duration-300 ${
                  isMinimized ? "text-base" : "text-lg"
                }`}>
                  Salud Margarita
                </span>
              </Link>
              
              {/* Ser Miembro Button - Desktop */}
              <Link to="/registro-doctor" className="hidden md:block">
                <Button 
                  size="sm"
                  className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg"
                >
                  <UserPlus className="w-4 h-4" />
                  Ser Miembro
                </Button>
              </Link>
            </div>

            {/* Right side - Hamburger Menu Button */}
            <button 
              className="relative p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <div className="flex items-center gap-1">
                  <Stethoscope className="w-5 h-5" />
                  <Syringe className="w-4 h-4 -rotate-45" />
                  <Activity className="w-5 h-5" />
                </div>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Ser Miembro Button - Fixed at bottom for mobile */}
      <Link 
        to="/registro-doctor" 
        className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
      >
        <Button 
          className="w-full gap-2 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl shadow-lg"
        >
          <UserPlus className="w-5 h-5" />
          Ser Miembro Especialista
        </Button>
      </Link>

      {/* Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 pt-20" onClick={() => setIsMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          <div 
            className="absolute top-16 right-4 w-72 bg-card rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-2 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-2">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-secondary rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
