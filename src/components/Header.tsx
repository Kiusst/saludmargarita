import { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import { Heart, Menu, X, HelpCircle, UserPlus, Sparkles, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { specialties, locations } from "@/data/doctors";

const Header = forwardRef(function Header({ onLogoClick, onSearch }: any, ref: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState("Todas las especialidades");
  const [selectedLocation, setSelectedLocation] = useState("Toda la isla");
  const navigate = useNavigate();
  const location = useLocation();

  useImperativeHandle(ref, () => ({
    resetSearch: () => {
      setSelectedSpecialty("Todas las especialidades");
      setSelectedLocation("Toda la isla");
      if (onSearch) {
        onSearch("Todas las especialidades", "Toda la isla");
      }
    }
  }));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsMinimized(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    
    // Reset search
    setSelectedSpecialty("Todas las especialidades");
    setSelectedLocation("Toda la isla");
    if (onSearch) {
      onSearch("Todas las especialidades", "Toda la isla");
    }
    
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      onLogoClick?.();
    } else {
      navigate("/");
    }
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(selectedSpecialty, selectedLocation);
    }
    const doctorsSection = document.getElementById("doctors-section");
    if (doctorsSection) {
      doctorsSection.scrollIntoView({ behavior: "smooth", block: "start" });
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
          isMinimized ? "py-2 shadow-md" : "py-3 md:py-4"
        }`}
      >
        <div className="container relative px-3 sm:px-4 mx-auto">
          {/* Top row - Logo and Menu */}
          <nav className="flex items-center justify-between mb-2 md:mb-3">
            {/* Left side - Logo */}
            <a 
              href="/" 
              onClick={handleLogoClick}
              className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group shrink-0"
            >
              <div className={`flex items-center justify-center rounded-lg sm:rounded-xl bg-gradient-golden shadow-golden transition-all duration-300 group-hover:scale-105 ${
                isMinimized ? "w-7 h-7 sm:w-8 sm:h-8" : "w-8 h-8 sm:w-10 sm:h-10"
              }`}>
                <Heart className={`text-white fill-white transition-all duration-300 ${
                  isMinimized ? "w-3.5 h-3.5 sm:w-4 sm:h-4" : "w-4 h-4 sm:w-5 sm:h-5"
                }`} />
              </div>
              <span className={`font-bold text-primary-foreground transition-all duration-300 group-hover:opacity-90 ${
                isMinimized ? "text-sm sm:text-base" : "text-base sm:text-lg"
              }`}>
                Salud Margarita
              </span>
            </a>

            {/* Right side - Ser Miembro Button + Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Ser Miembro Button - Desktop only */}
              <Link to="/registro-doctor" className="hidden lg:block">
                <Button 
                  size="sm"
                  className="gap-2 bg-gradient-golden hover:opacity-90 text-white font-semibold rounded-lg shadow-golden transition-all duration-200"
                >
                  <UserPlus className="w-4 h-4" />
                  Ser Miembro
                </Button>
              </Link>

              {/* Hamburger Menu Button */}
              <button 
                className="relative p-1.5 sm:p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-lg sm:rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menú"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </nav>

          {/* Search Bar - Integrated in Header */}
          <div className="flex justify-center">
            <div className={`w-full transition-all duration-300 ${
              isMinimized ? "max-w-lg md:max-w-xl lg:max-w-2xl" : "max-w-xl md:max-w-2xl lg:max-w-3xl"
            }`}>
              {/* Mobile: Stacked layout */}
              <div className="flex md:hidden flex-col gap-2">
                <div className="flex gap-2">
                  {/* Specialty Select - Mobile */}
                  <div className="relative flex-1">
                    <Search className="absolute w-4 h-4 text-muted-foreground left-3 top-1/2 -translate-y-1/2" />
                    <select 
                      className={`w-full pl-9 pr-2 text-foreground bg-card rounded-xl border border-border/30 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 appearance-none cursor-pointer transition-all ${
                        isMinimized ? "py-2 text-xs" : "py-2.5 text-sm"
                      }`}
                      value={selectedSpecialty}
                      onChange={(e) => setSelectedSpecialty(e.target.value)}
                    >
                      <option value="Todas las especialidades">Especialidad</option>
                      {specialties.map((specialty) => (
                        <option key={specialty} value={specialty}>
                          {specialty}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location Select - Mobile */}
                  <div className="relative flex-1">
                    <MapPin className="absolute w-4 h-4 text-muted-foreground left-3 top-1/2 -translate-y-1/2" />
                    <select 
                      className={`w-full pl-9 pr-2 text-foreground bg-card rounded-xl border border-border/30 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 appearance-none cursor-pointer transition-all ${
                        isMinimized ? "py-2 text-xs" : "py-2.5 text-sm"
                      }`}
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                    >
                      <option value="Toda la isla">Ubicación</option>
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Search Button - Mobile */}
                  <Button 
                    className={`shrink-0 bg-gradient-golden hover:opacity-90 text-white font-semibold transition-all rounded-xl shadow-golden ${
                      isMinimized ? "px-3 py-2" : "px-4 py-2.5"
                    }`}
                    onClick={handleSearch}
                  >
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Tablet & Desktop: Pill layout */}
              <div className="hidden md:block">
                <div className={`flex items-center bg-card rounded-full shadow-lg border border-border/30 transition-all duration-300 ${
                  isMinimized ? "p-1" : "p-1.5 lg:p-2"
                }`}>
                  {/* Specialty Select */}
                  <div className="relative flex-1 min-w-0">
                    <Search className={`absolute text-muted-foreground left-3 lg:left-4 top-1/2 -translate-y-1/2 transition-all ${
                      isMinimized ? "w-4 h-4" : "w-4 h-4 lg:w-5 lg:h-5"
                    }`} />
                    <select 
                      className={`w-full pl-9 lg:pl-11 pr-2 text-foreground bg-transparent rounded-full border-0 focus:outline-none focus:bg-secondary/30 appearance-none cursor-pointer transition-all duration-300 hover:bg-secondary/20 ${
                        isMinimized ? "py-2 text-sm" : "py-2.5 lg:py-3 text-sm lg:text-base"
                      }`}
                      value={selectedSpecialty}
                      onChange={(e) => setSelectedSpecialty(e.target.value)}
                    >
                      <option value="Todas las especialidades">Todas las especialidades</option>
                      {specialties.map((specialty) => (
                        <option key={specialty} value={specialty}>
                          {specialty}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Divider */}
                  <div className={`w-px bg-border/60 ${isMinimized ? "h-6" : "h-7 lg:h-8"}`} />

                  {/* Location Select */}
                  <div className="relative flex-1 min-w-0">
                    <MapPin className={`absolute text-muted-foreground left-3 lg:left-4 top-1/2 -translate-y-1/2 transition-all ${
                      isMinimized ? "w-4 h-4" : "w-4 h-4 lg:w-5 lg:h-5"
                    }`} />
                    <select 
                      className={`w-full pl-9 lg:pl-11 pr-2 text-foreground bg-transparent rounded-full border-0 focus:outline-none focus:bg-secondary/30 appearance-none cursor-pointer transition-all duration-300 hover:bg-secondary/20 ${
                        isMinimized ? "py-2 text-sm" : "py-2.5 lg:py-3 text-sm lg:text-base"
                      }`}
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                    >
                      <option value="Toda la isla">Toda la isla</option>
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Search Button */}
                  <Button 
                    className={`font-semibold bg-gradient-golden hover:opacity-90 text-white transition-all duration-300 rounded-full shrink-0 shadow-golden ${
                      isMinimized ? "px-4 py-2 text-sm" : "px-5 lg:px-8 py-2.5 lg:py-3 text-sm lg:text-base"
                    }`}
                    onClick={handleSearch}
                  >
                    <Search className={`mr-1.5 lg:mr-2 ${isMinimized ? "w-3.5 h-3.5" : "w-4 h-4"}`} />
                    Buscar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Ser Miembro Button - Fixed at bottom */}
      <Link 
        to="/registro-doctor" 
        className="fixed bottom-4 left-4 right-4 z-40 lg:hidden"
      >
        <Button 
          className="w-full gap-2 py-3 sm:py-4 bg-gradient-golden hover:opacity-90 text-white font-semibold rounded-xl shadow-golden text-sm sm:text-base"
        >
          <UserPlus className="w-4 h-4 sm:w-5 sm:h-5" />
          Ser Miembro Especialista
        </Button>
      </Link>

      {/* Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] pt-20" onClick={() => setIsMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/20" />
          <div 
            className="absolute top-20 sm:top-16 right-3 sm:right-4 w-[calc(100%-1.5rem)] sm:w-72 bg-card rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-2 duration-200"
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
});

Header.displayName = "Header";

export default Header;
