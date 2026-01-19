import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling down, hide when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`sticky top-0 z-50 bg-gradient-hero shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container px-4 mx-auto">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-amber-400">
              <Heart className="w-5 h-5 text-amber-900 fill-amber-900" />
            </div>
            <span className="text-lg font-bold text-primary-foreground">
              Salud Margarita
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-8 md:flex">
            <a href="#" className="text-sm font-medium transition-colors text-primary-foreground/80 hover:text-primary-foreground">
              Inicio
            </a>
            <a href="#" className="text-sm font-medium transition-colors text-primary-foreground/80 hover:text-primary-foreground">
              Doctores
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="p-2 md:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute left-4 right-4 p-4 bg-card rounded-2xl shadow-card md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#" className="py-2 text-sm font-medium text-foreground">Inicio</a>
              <a href="#" className="py-2 text-sm font-medium text-foreground">Doctores</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
