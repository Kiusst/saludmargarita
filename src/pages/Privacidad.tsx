import { Link } from "react-router-dom";
import { Heart, ArrowLeft, Shield, Eye, Lock, FileText, Users, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacidad = () => {
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
              <h1 className="text-4xl font-bold text-foreground">Política de Privacidad</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Tu privacidad es importante para nosotros. Esta política explica cómo recopilamos, 
              usamos y protegemos tu información personal.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Última actualización: Enero 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-12 p-8 bg-card rounded-2xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Introducción</h2>
              </div>
              <div className="prose prose-muted max-w-none">
                <p className="text-muted-foreground mb-4">
                  Salud Margarita ("nosotros", "nuestro" o "la plataforma") opera el sitio web 
                  saludmargarita.lovable.app y cualquier servicio relacionado. Esta Política de 
                  Privacidad describe cómo recopilamos, usamos, almacenamos y compartimos información 
                  cuando utilizas nuestra plataforma.
                </p>
                <p className="text-muted-foreground">
                  Al utilizar Salud Margarita, aceptas las prácticas descritas en esta Política de 
                  Privacidad. Si no estás de acuerdo con estos términos, te pedimos que no utilices 
                  nuestros servicios.
                </p>
              </div>
            </div>

            {/* Information Collection */}
            <div className="mb-12 p-8 bg-card rounded-2xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Información que Recopilamos</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Para Pacientes (Usuarios)</h3>
                  <p className="text-muted-foreground mb-3">
                    Salud Margarita funciona principalmente como un directorio público. Los usuarios 
                    pueden navegar y buscar doctores sin necesidad de crear una cuenta o proporcionar 
                    información personal. Sin embargo, podemos recopilar:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Información de navegación (páginas visitadas, búsquedas realizadas)</li>
                    <li>Datos técnicos del dispositivo (navegador, sistema operativo, dirección IP)</li>
                    <li>Cookies y tecnologías similares para mejorar la experiencia</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Para Doctores (Miembros)</h3>
                  <p className="text-muted-foreground mb-3">
                    Los profesionales médicos que se registran en nuestra plataforma proporcionan 
                    voluntariamente la siguiente información:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Nombre completo y datos de contacto profesional</li>
                    <li>Cédula de Identidad (para verificación)</li>
                    <li>Número de Matrícula MPPS y Colegio de Médicos</li>
                    <li>Título de Especialista (copia digitalizada)</li>
                    <li>Información del consultorio (dirección, horarios, precios)</li>
                    <li>Fotografía profesional</li>
                    <li>Constancia de trabajo o alquiler</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12 p-8 bg-card rounded-2xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Cómo Usamos tu Información</h2>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Funcionamiento del Directorio:</span>
                    <p className="text-muted-foreground">Mostrar perfiles de doctores verificados a los usuarios.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Verificación de Identidad:</span>
                    <p className="text-muted-foreground">Confirmar que los doctores son profesionales legítimos y colegiados.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Mejora del Servicio:</span>
                    <p className="text-muted-foreground">Analizar el uso de la plataforma para optimizar la experiencia.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">4</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Comunicaciones:</span>
                    <p className="text-muted-foreground">Enviar información importante sobre el servicio a los doctores registrados.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">5</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Cumplimiento Legal:</span>
                    <p className="text-muted-foreground">Responder a requerimientos legales o proteger nuestros derechos.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12 p-8 bg-card rounded-2xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Seguridad de la Información</h2>
              </div>
              
              <p className="text-muted-foreground mb-4">
                Implementamos medidas de seguridad técnicas y organizativas para proteger la información:
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Conexiones encriptadas (HTTPS) para todas las comunicaciones</li>
                <li>Almacenamiento seguro de documentos sensibles</li>
                <li>Acceso restringido a información personal solo al personal autorizado</li>
                <li>Revisión periódica de nuestras prácticas de seguridad</li>
              </ul>
              
              <p className="text-muted-foreground mt-4 italic">
                Sin embargo, ningún sistema es 100% seguro. No podemos garantizar la seguridad 
                absoluta de la información transmitida por Internet.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12 p-8 bg-amber-50 border-2 border-amber-200 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-400/30">
                  <AlertTriangle className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Limitación de Responsabilidad</h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/60 rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">Naturaleza del Servicio</h3>
                  <p className="text-muted-foreground">
                    Salud Margarita opera exclusivamente como un <strong>directorio de conexión</strong> entre 
                    pacientes y profesionales de la salud. No somos un prestador de servicios médicos.
                  </p>
                </div>

                <div className="p-4 bg-white/60 rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">Exoneración de Responsabilidad Médica</h3>
                  <p className="text-muted-foreground">
                    <strong>No nos hacemos responsables por:</strong> diagnósticos erróneos, mala praxis médica, 
                    tratamientos inadecuados, disputas entre médico y paciente, o cualquier daño derivado 
                    de la atención médica recibida. La relación médico-paciente es estrictamente entre las partes.
                  </p>
                </div>

                <div className="p-4 bg-white/60 rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">Verificación de Información</h3>
                  <p className="text-muted-foreground">
                    Aunque verificamos la documentación de los doctores al momento del registro, no podemos 
                    garantizar la vigencia continua de sus credenciales. Los usuarios son responsables de 
                    verificar las credenciales actualizadas del profesional que elijan.
                  </p>
                </div>

                <div className="p-4 bg-white/60 rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">Membresías y Reembolsos</h3>
                  <p className="text-muted-foreground">
                    Nos reservamos el derecho de eliminar perfiles que reciban reportes de estafa, maltrato 
                    o inasistencia injustificada, sin derecho a reembolso de membresía. Las membresías Premium 
                    no son reembolsables una vez activadas.
                  </p>
                </div>
              </div>
            </div>

            {/* Legal Compliance */}
            <div className="mb-12 p-8 bg-card rounded-2xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Marco Legal Aplicable</h2>
              </div>
              
              <p className="text-muted-foreground mb-4">
                Esta política cumple con las siguientes normativas aplicables en Venezuela:
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Constitución de la República Bolivariana de Venezuela (Artículos 28 y 60 - Protección de datos)</li>
                <li>Ley Especial Contra los Delitos Informáticos</li>
                <li>Ley de Infogobierno</li>
                <li>Ley para la Protección de las Comunicaciones Privadas</li>
              </ul>
            </div>

            {/* User Rights */}
            <div className="mb-12 p-8 bg-card rounded-2xl shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-6">Tus Derechos</h2>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-secondary/30 rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">Acceso</h3>
                  <p className="text-sm text-muted-foreground">
                    Puedes solicitar información sobre los datos que tenemos sobre ti.
                  </p>
                </div>
                <div className="p-4 bg-secondary/30 rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">Rectificación</h3>
                  <p className="text-sm text-muted-foreground">
                    Puedes solicitar la corrección de datos inexactos.
                  </p>
                </div>
                <div className="p-4 bg-secondary/30 rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">Eliminación</h3>
                  <p className="text-sm text-muted-foreground">
                    Puedes solicitar la eliminación de tu perfil y datos asociados.
                  </p>
                </div>
                <div className="p-4 bg-secondary/30 rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">Oposición</h3>
                  <p className="text-sm text-muted-foreground">
                    Puedes oponerte al tratamiento de tus datos para ciertos fines.
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground mt-6">
                Para ejercer estos derechos, contáctanos en: <strong>privacidad@saludmargarita.com</strong>
              </p>
            </div>

            {/* Contact */}
            <div className="p-8 bg-primary/5 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                ¿Preguntas sobre Privacidad?
              </h3>
              <p className="text-muted-foreground mb-6">
                Si tienes dudas sobre esta política o sobre el tratamiento de tus datos, 
                no dudes en contactarnos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/soporte"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Contactar Soporte
                </Link>
                <Link 
                  to="/terminos"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-primary bg-transparent border-2 border-primary rounded-xl hover:bg-primary/5 transition-colors"
                >
                  Ver Términos de Uso
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacidad;
