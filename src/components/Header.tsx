import { useState, useEffect } from "react";
import { Heart, Menu, X, HelpCircle, UserPlus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsMinimized(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { icon: HelpCircle, label: "Centro de Ayuda", href: "/soporte" },
    { icon: UserPlus, label: "Conviértete Miembro Especialista", href: "/registro-doctor" },
    { icon: Sparkles, label: "Plan Premium", href: "/plan-premium" },
  ];

  return (
    <>
      {/* Background blur layer - fixed behind everything */}
      <div className="fixed top-0 left-0 right-0 h-24 z-40 pointer-events-none backdrop-blur-md bg-primary/70" />
      
      <header 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isMinimized ? "py-2" : "py-4"
        }`}
      >
        <div className="container relative px-4 mx-auto">
          <nav className="flex items-center justify-between">
            {/* Left side - Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className={`flex items-center justify-center rounded-xl bg-orange-500 backdrop-blur-sm transition-all duration-300 ${
                isMinimized ? "w-8 h-8" : "w-10 h-10"
              }`}>
                <Heart className={`text-white fill-white transition-all duration-300 ${
                  isMinimized ? "w-4 h-4" : "w-5 h-5"
                }`} />
              </div>
              <span className={`font-bold text-primary-foreground transition-all duration-300 ${
                isMinimized ? "text-base" : "text-lg"
              }`}>
                Salud Margarita
              </span>
            </Link>

            {/* Right side - Ser Miembro Button + Hamburger */}
            <div className="flex items-center gap-3">
              {/* Ser Miembro Button - Desktop */}
              <Link to="/registro-doctor" className="hidden md:block">
                <Button 
                  size="sm"
                  className="gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg"
                >
                  <UserPlus className="w-4 h-4" />
                  Ser Miembro
                </Button>
              </Link>

              {/* Simple Hamburger Menu Button */}
              <button 
                className="relative p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menú"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Ser Miembro Button - Fixed at bottom for mobile */}
      <Link 
        to="/registro-doctor" 
        className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
      >
        <Button 
          className="w-full gap-2 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg"
        >
          <UserPlus className="w-5 h-5" />
          Ser Miembro Especialista
        </Button>
      </Link>

      {/* Menu Dropdown - z-[60] ensures it overlays everything */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] pt-20" onClick={() => setIsMenuOpen(false)}>
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
              <div className="my-2 border-t border-border" />
              <Link
                to="/faq"
                className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-secondary rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <HelpCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Preguntas Frecuentes</span>
              </Link>
              <Link
                to="/privacidad"
                className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-secondary rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-sm font-medium">Política de Privacidad</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
