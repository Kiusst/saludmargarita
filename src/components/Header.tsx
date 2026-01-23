import { useState, useEffect } from "react";
import { Heart, Menu, X, HelpCircle, UserPlus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";

interface HeaderProps {
  onLogoClick?: () => void;
}

const Header = ({ onLogoClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsMinimized(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // If already on home, do a full refresh
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      onLogoClick?.(); // Reset search bar state
    } else {
      // Navigate to home
      navigate("/");
    }
  };

  const menuItems = [
    { icon: HelpCircle, label: "Centro de Ayuda", href: "/soporte", highlight: false },
    { icon: UserPlus, label: "Conviértete Miembro Especialista", href: "/registro-doctor", highlight: false },
    { icon: Sparkles, label: "Plan Premium", href: "/plan-premium", highlight: true },
  ];

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 bg-gradient-to-r from-primary via-primary/95 to-primary/90 ${
          isMinimized ? "py-2 shadow-md" : "py-4"
        }`}
      >
        <div className="container relative px-4 mx-auto">
          <nav className="flex items-center justify-between">
            {/* Left side - Logo - Clickable to Home */}
            <a 
              href="/" 
              onClick={handleLogoClick}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className={`flex items-center justify-center rounded-xl bg-gradient-golden shadow-golden transition-all duration-300 group-hover:scale-105 ${
                isMinimized ? "w-8 h-8" : "w-10 h-10"
              }`}>
                <Heart className={`text-white fill-white transition-all duration-300 ${
                  isMinimized ? "w-4 h-4" : "w-5 h-5"
                }`} />
              </div>
              <span className={`font-bold text-primary-foreground transition-all duration-300 group-hover:opacity-90 ${
                isMinimized ? "text-base" : "text-lg"
              }`}>
                Salud Margarita
              </span>
            </a>

            {/* Right side - Ser Miembro Button + Hamburger */}
            <div className="flex items-center gap-3">
              {/* Ser Miembro Button - Desktop */}
              <Link to="/registro-doctor" className="hidden md:block">
                <Button 
                  size="sm"
                  className="gap-2 bg-gradient-golden hover:opacity-90 text-white font-semibold rounded-lg shadow-golden transition-all duration-200"
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
          className="w-full gap-2 py-4 bg-gradient-golden hover:opacity-90 text-white font-semibold rounded-xl shadow-golden"
        >
          <UserPlus className="w-5 h-5" />
          Ser Miembro Especialista
        </Button>
      </Link>

      {/* Menu Dropdown - No blur background */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] pt-20" onClick={() => setIsMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/20" />
          <div 
            className="absolute top-16 right-4 w-72 bg-card rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-2 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-2">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    item.highlight 
                      ? "bg-gradient-to-r from-[hsl(38,92%,50%)]/10 to-[hsl(43,96%,56%)]/20 hover:from-[hsl(38,92%,50%)]/20 hover:to-[hsl(43,96%,56%)]/30 border border-[hsl(38,92%,50%)]/30" 
                      : "text-foreground hover:bg-secondary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className={`w-5 h-5 ${item.highlight ? "text-[hsl(38,92%,50%)]" : "text-primary"}`} />
                  <span className={`text-sm font-medium ${item.highlight ? "text-[hsl(38,92%,50%)]" : ""}`}>
                    {item.label}
                  </span>
                  {item.highlight && (
                    <Sparkles className="w-4 h-4 text-[hsl(38,92%,50%)] ml-auto" />
                  )}
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
