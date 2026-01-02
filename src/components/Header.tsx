import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container px-4 mx-auto">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-foreground/20 backdrop-blur-sm">
              <Heart className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary-foreground">
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
            <a href="#" className="text-sm font-medium transition-colors text-primary-foreground/80 hover:text-primary-foreground">
              Especialidades
            </a>
            <a href="#" className="text-sm font-medium transition-colors text-primary-foreground/80 hover:text-primary-foreground">
              Clínicas
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="items-center hidden gap-3 md:flex">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              Iniciar Sesión
            </Button>
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-xl">
              Registrar Doctor
            </Button>
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
              <a href="#" className="py-2 text-sm font-medium text-foreground">Especialidades</a>
              <a href="#" className="py-2 text-sm font-medium text-foreground">Clínicas</a>
              <hr className="border-border" />
              <Button variant="outline" className="rounded-xl">Iniciar Sesión</Button>
              <Button className="bg-gradient-hero rounded-xl">Registrar Doctor</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
