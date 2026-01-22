import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Heart, 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  Send,
  AlertCircle,
  HelpCircle,
  FileText,
  UserX,
  CreditCard,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { toast } from "@/hooks/use-toast";

const supportCategories = [
  {
    icon: HelpCircle,
    title: "Dudas Generales",
    description: "Preguntas sobre el uso de la plataforma"
  },
  {
    icon: AlertCircle,
    title: "Reportar un Doctor",
    description: "Informar sobre mala conducta o perfil falso"
  },
  {
    icon: FileText,
    title: "Problemas con Registro",
    description: "Ayuda con el proceso de registro de doctores"
  },
  {
    icon: UserX,
    title: "Eliminar mi Perfil",
    description: "Solicitar la eliminación de datos"
  },
  {
    icon: CreditCard,
    title: "Facturación y Pagos",
    description: "Consultas sobre membresía Premium"
  },
  {
    icon: MessageCircle,
    title: "Sugerencias",
    description: "Ideas para mejorar Salud Margarita"
  }
];

const commonIssues = [
  {
    question: "No puedo contactar a un doctor",
    answer: "Solo los doctores Premium tienen botón de contacto directo por WhatsApp. Para doctores regulares, la información de contacto aparece en su perfil completo al hacer clic en 'Ver Perfil'."
  },
  {
    question: "Un doctor no me atendió en la cita",
    answer: "Lamentamos la experiencia. Puedes reportar al doctor usando el formulario de contacto seleccionando 'Reportar un Doctor'. Investigamos todos los reportes y tomamos acciones correspondientes."
  },
  {
    question: "¿Cómo cancelo mi membresía Premium?",
    answer: "Para cancelar tu membresía, envíanos un correo a soporte@saludmargarita.com con el asunto 'Cancelar Membresía' desde el correo registrado. La cancelación será efectiva al finalizar el período actual."
  },
  {
    question: "Mi perfil de doctor no aparece en las búsquedas",
    answer: "Los perfiles nuevos pueden tardar hasta 24-48 horas en aparecer en las búsquedas. Si después de ese tiempo no apareces, contáctanos para verificar el estado de tu perfil."
  },
  {
    question: "¿Cómo actualizo mi información de consultorio?",
    answer: "Para actualizar tu información (horarios, dirección, precios), envía un correo a soporte@saludmargarita.com con los cambios que deseas realizar. Procesamos las solicitudes en un plazo de 24-48 horas."
  }
];

const Soporte = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Mensaje enviado",
      description: "Hemos recibido tu mensaje. Te responderemos pronto.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="max-w-lg mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center animate-in zoom-in duration-500">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                ¡Mensaje Enviado!
              </h1>
              <p className="text-muted-foreground mb-8">
                Hemos recibido tu solicitud de soporte. Nuestro equipo revisará tu mensaje 
                y te responderá en un plazo máximo de 24 horas hábiles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button className="gap-2 bg-primary hover:bg-primary/90">
                    Volver al Inicio
                  </Button>
                </Link>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", category: "", message: "" });
                  }}
                >
                  Enviar Otro Mensaje
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 mx-auto">
          <div className="mb-8">
            <BackButton />
          </div>
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-golden shadow-golden">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <h1 className="text-4xl font-bold text-foreground">Centro de Soporte</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Estamos aquí para ayudarte. Encuentra respuestas a problemas comunes o 
              contáctanos directamente.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-card">
        <div className="container px-4 mx-auto">
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="p-6 bg-background rounded-2xl shadow-soft text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-primary/10">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Correo Electrónico</h3>
              <p className="text-muted-foreground">soporte@saludmargarita.com</p>
            </div>
            
            <div className="p-6 bg-background rounded-2xl shadow-soft text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-primary/10">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Tiempo de Respuesta</h3>
              <p className="text-muted-foreground">Máximo 24 horas hábiles</p>
            </div>
            
            <div className="p-6 bg-background rounded-2xl shadow-soft text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-primary/10">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Horario de Atención</h3>
              <p className="text-muted-foreground">Lun - Vie: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Soluciones Rápidas
            </h2>
            
            <div className="space-y-4">
              {commonIssues.map((issue, index) => (
                <details 
                  key={index} 
                  className="group p-6 bg-card rounded-2xl shadow-soft cursor-pointer"
                >
                  <summary className="flex items-center justify-between font-medium text-foreground list-none">
                    {issue.question}
                    <span className="text-muted-foreground group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-muted-foreground">{issue.answer}</p>
                </details>
              ))}
            </div>
            
            <p className="text-center text-muted-foreground mt-6">
              ¿No encuentras lo que buscas?{" "}
              <Link to="/faq" className="text-primary hover:underline">
                Ver todas las preguntas frecuentes
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-card">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
              Envíanos un Mensaje
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Selecciona la categoría que mejor describe tu consulta
            </p>

            {/* Category Selection - Improved buttons */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
              {supportCategories.map((category, index) => {
                const Icon = category.icon;
                const isSelected = formData.category === category.title;
                
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, category: category.title }))}
                    className={`p-4 rounded-xl text-left transition-all duration-200 border-2 ${
                      isSelected 
                        ? "bg-primary text-primary-foreground border-primary shadow-lg scale-[1.02]" 
                        : "bg-background border-border hover:border-primary/50 hover:bg-primary/5 hover:shadow-md"
                    }`}
                  >
                    <Icon className={`w-6 h-6 mb-2 ${isSelected ? "text-primary-foreground" : "text-primary"}`} />
                    <h3 className="font-semibold">{category.title}</h3>
                    <p className={`text-sm ${isSelected ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      {category.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 bg-background rounded-2xl shadow-soft">
              <div className="grid gap-6 md:grid-cols-2 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nombre Completo *
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Tu nombre"
                    className="rounded-xl"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Correo Electrónico *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="tu@correo.com"
                    className="rounded-xl"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Categoría Seleccionada
                </label>
                <Input
                  value={formData.category || "Ninguna seleccionada"}
                  className="rounded-xl bg-secondary/50"
                  readOnly
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Descripción del Problema *
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Describe tu problema o consulta con el mayor detalle posible..."
                  className="rounded-xl min-h-[150px]"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full py-6 rounded-xl gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto p-8 bg-primary/5 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Enlaces Útiles
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/faq"
                className="px-6 py-2 bg-card rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Preguntas Frecuentes
              </Link>
              <Link 
                to="/terminos"
                className="px-6 py-2 bg-card rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Términos de Uso
              </Link>
              <Link 
                to="/privacidad"
                className="px-6 py-2 bg-card rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link 
                to="/plan-premium"
                className="px-6 py-2 bg-card rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Plan Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Soporte;
