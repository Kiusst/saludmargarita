import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Check, 
  Star, 
  MessageCircle, 
  Eye, 
  BadgeCheck, 
  TrendingUp,
  Sparkles,
  Users,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const benefits = [
  {
    icon: Eye,
    title: "Mayor Visibilidad",
    description: "Tu perfil aparece primero en las búsquedas y destacado con la insignia Premium."
  },
  {
    icon: MessageCircle,
    title: "Contacto Directo por WhatsApp",
    description: "Los pacientes pueden contactarte directamente con un solo clic."
  },
  {
    icon: BadgeCheck,
    title: "Insignia Premium Distintiva",
    description: "Destaca entre otros doctores con una insignia dorada que inspira confianza."
  },
  {
    icon: TrendingUp,
    title: "Rango de Precios Visible",
    description: "Muestra tu rango de precios para que los pacientes sepan qué esperar."
  },
  {
    icon: Star,
    title: "Prioridad en Resultados",
    description: "Apareces antes que los perfiles gratuitos en todas las búsquedas."
  },
  {
    icon: Users,
    title: "Más Pacientes",
    description: "Los doctores Premium reciben en promedio 5x más consultas que los regulares."
  }
];

const testimonials = [
  {
    name: "Dra. María González",
    specialty: "Cardiología",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    text: "Desde que activé mi membresía Premium, mis consultas aumentaron significativamente. La inversión se paga sola."
  },
  {
    name: "Dr. Carlos Rodríguez",
    specialty: "Traumatología",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
    text: "El contacto directo por WhatsApp ha sido increíble. Los pacientes pueden agendar citas mucho más rápido."
  },
  {
    name: "Dra. Laura Pérez",
    specialty: "Nutrición",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=100&h=100&fit=crop&crop=face",
    text: "La visibilidad Premium me ha ayudado a construir mi práctica en Margarita. Lo recomiendo totalmente."
  }
];

const PlanPremium = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(43,40%,95%)] via-background to-primary/5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[hsl(38,92%,50%)]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container relative px-4 mx-auto">
          <div className="mb-8">
            <BackButton />
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[hsl(38,92%,50%)]/20 rounded-full">
              <Sparkles className="w-5 h-5 text-[hsl(32,90%,42%)]" />
              <span className="text-sm font-semibold text-[hsl(32,90%,35%)]">Membresía para Doctores</span>
            </div>
            
            <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl mb-6">
              Destaca como{" "}
              <span className="text-transparent bg-clip-text bg-gradient-golden">
                Doctor Premium
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Aumenta tu visibilidad, conecta con más pacientes y haz crecer tu práctica médica 
              en la Isla de Margarita.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/registro-doctor">
                <Button size="lg" className="gap-2 px-8 py-6 text-lg bg-gradient-golden hover:opacity-90 text-white rounded-xl shadow-golden">
                  <Star className="w-5 h-5" />
                  Activar Premium
                </Button>
              </Link>
              <Link to="/faq">
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-xl">
                  Ver preguntas frecuentes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-card">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Beneficios Exclusivos Premium
            </h2>
            <p className="text-muted-foreground">
              Todo lo que necesitas para destacar y conectar con más pacientes
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="p-6 bg-background rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-[hsl(38,92%,50%)]/20">
                    <Icon className="w-7 h-7 text-[hsl(32,90%,42%)]" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Compara los Planes
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Free Plan */}
              <div className="p-8 bg-card rounded-2xl shadow-soft">
                <h3 className="text-xl font-bold text-foreground mb-2">Plan Gratuito</h3>
                <p className="text-muted-foreground mb-6">Para empezar en Salud Margarita</p>
                
                <div className="text-4xl font-bold text-foreground mb-8">
                  $0 <span className="text-lg font-normal text-muted-foreground">/mes</span>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    Perfil básico verificado
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    Información de contacto
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    Ubicación y horarios
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground line-through opacity-50">
                    Contacto directo WhatsApp
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground line-through opacity-50">
                    Rango de precios visible
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground line-through opacity-50">
                    Insignia Premium
                  </li>
                </ul>

                <Link to="/registro-doctor">
                  <Button variant="outline" className="w-full py-6 rounded-xl">
                    Registrarse Gratis
                  </Button>
                </Link>
              </div>

              {/* Premium Plan */}
              <div className="relative p-8 bg-gradient-to-br from-[hsl(43,40%,95%)] to-[hsl(38,50%,92%)] rounded-2xl shadow-lg border-2 border-[hsl(38,92%,50%)]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-golden text-white text-sm font-semibold rounded-full shadow-golden">
                  Más Popular
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  Plan Premium
                  <Star className="w-5 h-5 text-[hsl(38,92%,50%)] fill-[hsl(38,92%,50%)]" />
                </h3>
                <p className="text-muted-foreground mb-6">Para doctores que quieren crecer</p>
                
                <div className="text-4xl font-bold text-foreground mb-2">
                  $29 <span className="text-lg font-normal text-muted-foreground">/mes</span>
                </div>
                <p className="text-sm text-[hsl(32,90%,42%)] mb-8">Ahorra 20% con el plan anual</p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-[hsl(32,90%,42%)] flex-shrink-0" />
                    <strong>Todo del plan gratuito</strong>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-[hsl(32,90%,42%)] flex-shrink-0" />
                    Contacto directo por WhatsApp
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-[hsl(32,90%,42%)] flex-shrink-0" />
                    Rango de precios visible
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-[hsl(32,90%,42%)] flex-shrink-0" />
                    Insignia Premium distintiva
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-[hsl(32,90%,42%)] flex-shrink-0" />
                    Prioridad en búsquedas
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-[hsl(32,90%,42%)] flex-shrink-0" />
                    Estadísticas de visitas
                  </li>
                </ul>

                <Link to="/registro-doctor">
                  <Button className="w-full py-6 rounded-xl bg-gradient-golden hover:opacity-90 text-white shadow-golden">
                    Comenzar Ahora
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Doctores que Confían en Nosotros
            </h2>
            <p className="text-muted-foreground">
              Escucha lo que dicen los profesionales que ya son Premium
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 bg-background rounded-2xl shadow-soft"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.specialty}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[hsl(38,92%,50%)] fill-[hsl(38,92%,50%)]" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto p-10 bg-gradient-to-br from-primary to-primary/80 rounded-3xl text-center text-primary-foreground">
            <Clock className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para Hacer Crecer tu Práctica?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Únete a los doctores que ya están aprovechando los beneficios Premium 
              y conectando con más pacientes cada día.
            </p>
            <Link to="/registro-doctor">
              <Button size="lg" className="px-10 py-6 text-lg bg-gradient-golden hover:opacity-90 text-white font-bold rounded-xl shadow-golden">
                Activar Premium Ahora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlanPremium;
