import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

// Custom X (Twitter) Icon
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Custom Instagram Icon (current design)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 bg-foreground text-primary-foreground">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
                <Heart className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Salud Margarita</span>
            </div>
            <p className="mb-6 text-sm text-primary-foreground/70">
              El directorio médico más completo de la Isla de Margarita. 
              Conectando pacientes con los mejores profesionales de la salud.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-primary-foreground/10 hover:bg-primary"
                aria-label="X (Twitter)"
              >
                <XIcon />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-primary-foreground/10 hover:bg-primary"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {["Buscar Doctores", "Blog de Salud", "Preguntas Frecuentes"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm transition-colors text-primary-foreground/70 hover:text-primary-foreground">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Doctors */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Para Doctores
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/registro-doctor" className="text-sm transition-colors text-primary-foreground/70 hover:text-primary-foreground">
                  Registrar Perfil
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors text-primary-foreground/70 hover:text-primary-foreground">
                  Plan Premium
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors text-primary-foreground/70 hover:text-primary-foreground">
                  Soporte
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 text-primary" />
                info@saludmargarita.com
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 text-primary" />
                +58 295-123-4567
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="flex-shrink-0 w-4 h-4 mt-0.5 text-primary" />
                Isla de Margarita, Nueva Esparta, Venezuela
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-primary-foreground/50">
              © 2025 Salud Margarita. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link to="/terminos" className="text-sm transition-colors text-primary-foreground/50 hover:text-primary-foreground">
                Términos de Uso
              </Link>
              <a href="#" className="text-sm transition-colors text-primary-foreground/50 hover:text-primary-foreground">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
