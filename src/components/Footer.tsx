import { Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

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
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-primary-foreground/10 hover:bg-primary"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {["Buscar Doctores", "Especialidades", "Clínicas", "Blog de Salud", "Preguntas Frecuentes"].map((link) => (
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
              {["Registrar Perfil", "Plan Premium", "Dashboard", "Recursos", "Soporte"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm transition-colors text-primary-foreground/70 hover:text-primary-foreground">
                    {link}
                  </a>
                </li>
              ))}
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
              <a href="#" className="text-sm transition-colors text-primary-foreground/50 hover:text-primary-foreground">
                Términos de Uso
              </a>
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
