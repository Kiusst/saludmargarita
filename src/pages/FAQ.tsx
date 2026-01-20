import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Heart, ArrowLeft, Search, Calendar, CreditCard, Shield, Users, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  icon: React.ElementType;
  title: string;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    icon: Search,
    title: "Búsqueda y Selección de Doctores",
    items: [
      {
        question: "¿Cómo puedo buscar un doctor por especialidad?",
        answer: "Utiliza la barra de búsqueda en la parte superior de la página. Puedes filtrar por especialidad médica (Cardiología, Pediatría, etc.) y por ubicación dentro de la Isla de Margarita (Porlamar, Pampatar, La Asunción, etc.)."
      },
      {
        question: "¿Qué información puedo ver de cada doctor?",
        answer: "Cada perfil de doctor incluye: nombre completo, especialidad, ubicación del consultorio, horarios de atención, calificación en estrellas, número de pacientes que lo han calificado, y si es Premium, también verás su rango de precios y botón de contacto directo por WhatsApp."
      },
      {
        question: "¿Cómo sé si un doctor es confiable?",
        answer: "Todos los doctores en Salud Margarita han sido verificados. Solicitamos documentos oficiales como cédula de identidad, matrícula MPPS, número del Colegio de Médicos, título de especialista y constancia de trabajo. Además, puedes ver las calificaciones de otros pacientes."
      },
      {
        question: "¿Puedo ver la ubicación exacta del consultorio?",
        answer: "Sí, cada perfil de doctor muestra la dirección de su consultorio. Los doctores Premium tienen mayor visibilidad y detalles de ubicación más precisos."
      }
    ]
  },
  {
    icon: Calendar,
    title: "Citas y Consultas",
    items: [
      {
        question: "¿Cómo agendo una cita con un doctor?",
        answer: "Si el doctor es Premium, puedes contactarlo directamente por WhatsApp haciendo clic en el botón 'Contactar'. Si no es Premium, verás su información de contacto básica en su perfil para que puedas comunicarte directamente con el consultorio."
      },
      {
        question: "¿Salud Margarita gestiona las citas?",
        answer: "No. Salud Margarita es un directorio de conexión. Una vez que contactas al doctor, la gestión de la cita, confirmación y cualquier trámite relacionado se realiza directamente entre tú y el consultorio médico."
      },
      {
        question: "¿Qué hago si el doctor no responde?",
        answer: "Te recomendamos intentar en diferentes horarios o llamar directamente al consultorio. Si tienes problemas recurrentes con un doctor específico, puedes reportarlo a través de nuestra sección de Soporte."
      },
      {
        question: "¿Puedo cancelar o reprogramar mi cita?",
        answer: "Las políticas de cancelación y reprogramación dependen de cada doctor y consultorio. Te recomendamos preguntar directamente al momento de agendar tu cita."
      }
    ]
  },
  {
    icon: CreditCard,
    title: "Precios y Pagos",
    items: [
      {
        question: "¿Cuánto cuesta una consulta médica?",
        answer: "Los precios varían según el doctor y la especialidad. Los doctores Premium muestran su rango de precios estimado en su perfil (ej: 40$ - 60$). Para doctores regulares, debes consultar directamente con el consultorio."
      },
      {
        question: "¿Salud Margarita cobra por el servicio?",
        answer: "No. El uso del directorio Salud Margarita es completamente gratuito para los pacientes. Solo facilitamos la conexión entre pacientes y doctores."
      },
      {
        question: "¿Qué métodos de pago aceptan los doctores?",
        answer: "Cada doctor maneja sus propios métodos de pago. La mayoría acepta efectivo en dólares o bolívares, transferencias bancarias, y algunos aceptan pagos móviles. Consulta directamente con el consultorio antes de tu cita."
      },
      {
        question: "¿Los precios incluyen exámenes o procedimientos adicionales?",
        answer: "Generalmente, los precios mostrados son solo para la consulta médica. Exámenes de laboratorio, imágenes diagnósticas o procedimientos adicionales tienen costos aparte que el doctor te informará."
      }
    ]
  },
  {
    icon: Shield,
    title: "Seguridad y Privacidad",
    items: [
      {
        question: "¿Cómo verifican a los doctores?",
        answer: "Solicitamos documentación oficial incluyendo: Cédula de Identidad (V/E), Número de Matrícula MPPS, Número del Colegio de Médicos de Nueva Esparta, Título de Especialista y Constancia de Trabajo. Todos los documentos son revisados antes de aprobar el perfil."
      },
      {
        question: "¿Qué pasa si tengo una mala experiencia con un doctor?",
        answer: "Puedes reportar cualquier problema a través de nuestra sección de Soporte. Investigamos todos los reportes y nos reservamos el derecho de eliminar perfiles que reciban quejas recurrentes de estafa, maltrato o inasistencia injustificada."
      },
      {
        question: "¿Mis datos personales están protegidos?",
        answer: "Sí. No almacenamos información médica sensible. Los datos que proporcionas son utilizados únicamente para facilitarte el contacto con los doctores. Consulta nuestra Política de Privacidad para más detalles."
      },
      {
        question: "¿Salud Margarita se hace responsable por mala praxis?",
        answer: "No. Salud Margarita actúa exclusivamente como un directorio de conexión. No nos hacemos responsables por diagnósticos erróneos, mala praxis o disputas entre médico y paciente. La relación médica es estrictamente entre las partes."
      }
    ]
  },
  {
    icon: Users,
    title: "Para Doctores",
    items: [
      {
        question: "¿Cómo puedo registrarme como doctor?",
        answer: "Haz clic en 'Ser Miembro' en la parte superior de la página. Deberás completar el formulario con tus datos personales y subir los documentos requeridos (cédula, matrícula MPPS, colegio de médicos, título de especialista y constancia de trabajo)."
      },
      {
        question: "¿Cuáles son los beneficios del Plan Premium?",
        answer: "Los doctores Premium obtienen: mayor visibilidad en las búsquedas, botón de contacto directo por WhatsApp, visualización de rango de precios, insignia Premium distintiva, y prioridad en el listado de resultados."
      },
      {
        question: "¿Cuánto tiempo tarda la verificación?",
        answer: "El proceso de verificación puede tomar entre 24 a 72 horas hábiles. Recibirás una notificación una vez que tu perfil sea aprobado."
      },
      {
        question: "¿Puedo actualizar mi información después de registrarme?",
        answer: "Sí, puedes solicitar actualizaciones de tu perfil contactando a nuestro equipo de soporte. Los cambios serán revisados antes de ser publicados."
      }
    ]
  },
  {
    icon: Phone,
    title: "Contacto y Soporte",
    items: [
      {
        question: "¿Cómo puedo contactar al equipo de Salud Margarita?",
        answer: "Puedes enviarnos un correo a info@saludmargarita.com o visitar nuestra sección de Soporte para enviar un mensaje. También estamos disponibles en nuestras redes sociales."
      },
      {
        question: "¿Tienen atención telefónica?",
        answer: "Actualmente nuestro soporte principal es por correo electrónico y formulario de contacto. Esto nos permite atender todas las consultas de manera ordenada y eficiente."
      },
      {
        question: "¿Cuánto tardan en responder?",
        answer: "Nos esforzamos por responder todas las consultas en un plazo máximo de 24 horas hábiles. Para casos urgentes, indicalo claramente en tu mensaje."
      }
    ]
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 mb-8 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-400/90">
                <Heart className="w-6 h-6 text-primary fill-primary" />
              </div>
              <h1 className="text-4xl font-bold text-foreground">Preguntas Frecuentes</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Encuentra respuestas a las dudas más comunes sobre el uso de Salud Margarita, 
              cómo buscar doctores, agendar citas y más.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex} className="bg-card rounded-2xl shadow-soft overflow-hidden">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 p-6 border-b border-border">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">{category.title}</h2>
                  </div>
                  
                  {/* Questions */}
                  <div className="divide-y divide-border">
                    {category.items.map((item, itemIndex) => {
                      const key = `${categoryIndex}-${itemIndex}`;
                      const isOpen = openItems[key];
                      
                      return (
                        <div key={itemIndex}>
                          <button
                            className="flex items-center justify-between w-full p-6 text-left hover:bg-secondary/30 transition-colors"
                            onClick={() => toggleItem(categoryIndex, itemIndex)}
                          >
                            <span className="font-medium text-foreground pr-4">{item.question}</span>
                            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                              isOpen ? "rotate-180" : ""
                            }`} />
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 pb-6 text-muted-foreground animate-in slide-in-from-top-2 duration-200">
                              {item.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Still have questions? */}
          <div className="max-w-4xl mx-auto mt-12 p-8 bg-primary/5 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              ¿Aún tienes dudas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestro equipo de soporte está listo para ayudarte con cualquier pregunta adicional.
            </p>
            <Link 
              to="/soporte"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-colors"
            >
              Contactar Soporte
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
