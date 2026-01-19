import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Scale, AlertTriangle, FileText, Heart } from "lucide-react";

const Terminos = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container px-4 py-4 mx-auto">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-secondary rounded-xl transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold text-foreground">Términos y Condiciones</h1>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8 mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Términos y Condiciones</h1>
          <p className="text-muted-foreground">Salud Margarita - Directorio Médico</p>
          <p className="text-sm text-muted-foreground mt-2">Última actualización: Enero 2025</p>
        </div>

        <div className="space-y-8">
          {/* Section 1 - Declaración Jurada */}
          <section className="bg-card rounded-2xl p-6 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Scale className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">1. Cláusula de Veracidad (Declaración Jurada)</h2>
            </div>
            
            <div className="prose prose-sm text-muted-foreground">
              <p className="leading-relaxed">
                El Usuario declara bajo fe de juramento que es médico titulado y colegiado, y que toda la información 
                suministrada a través del formulario de registro es veraz y verificable.
              </p>
              <p className="leading-relaxed mt-4">
                La falsificación de documentos, títulos profesionales, matrículas o cualquier información relacionada 
                con la práctica médica acarreará:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>La eliminación inmediata del perfil sin previo aviso</li>
                <li>La notificación a las autoridades competentes (MPPS, Colegio de Médicos)</li>
                <li>Posibles acciones legales según la legislación venezolana vigente</li>
              </ul>
            </div>
          </section>

          {/* Section 2 - Exoneración */}
          <section className="bg-card rounded-2xl p-6 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-amber-500" />
              </div>
              <h2 className="text-xl font-bold text-foreground">2. Cláusula de Exoneración de Responsabilidad</h2>
            </div>
            
            <div className="prose prose-sm text-muted-foreground">
              <p className="leading-relaxed">
                <strong>Salud Margarita actúa exclusivamente como un directorio de conexión</strong> entre pacientes 
                y profesionales de la salud. Bajo ningún concepto la plataforma:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Proporciona servicios médicos directos</li>
                <li>Garantiza la calidad de los servicios prestados por los profesionales listados</li>
                <li>Se hace responsable por mala praxis médica</li>
                <li>Responde por diagnósticos erróneos</li>
                <li>Media en disputas entre médico y paciente</li>
              </ul>
              <p className="leading-relaxed mt-4">
                La relación médico-paciente es estrictamente entre las partes involucradas, quienes asumen 
                toda la responsabilidad derivada de dicha relación profesional.
              </p>
            </div>
          </section>

          {/* Section 3 - Derecho de Admisión */}
          <section className="bg-card rounded-2xl p-6 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <h2 className="text-xl font-bold text-foreground">3. Derecho de Admisión y Veto</h2>
            </div>
            
            <div className="prose prose-sm text-muted-foreground">
              <p className="leading-relaxed">
                Salud Margarita se reserva el derecho de:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Aprobar o rechazar solicitudes de registro sin obligación de justificación</li>
                <li>Eliminar cualquier perfil que reciba reportes recurrentes de estafa, maltrato o inasistencia injustificada</li>
                <li>Suspender temporal o permanentemente cuentas que violen estos términos</li>
                <li>Modificar o eliminar contenido que considere inapropiado</li>
              </ul>
              <p className="leading-relaxed mt-4 font-medium text-foreground">
                En caso de eliminación del perfil por violación de términos, no habrá derecho a reembolso 
                de ninguna suscripción o pago realizado.
              </p>
            </div>
          </section>

          {/* Section 4 - Uso de Datos */}
          <section className="bg-card rounded-2xl p-6 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">4. Uso de Datos y Privacidad</h2>
            </div>
            
            <div className="prose prose-sm text-muted-foreground">
              <p className="leading-relaxed">
                Los datos proporcionados serán utilizados exclusivamente para:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Verificación de credenciales profesionales</li>
                <li>Publicación del perfil en el directorio</li>
                <li>Comunicaciones relacionadas con el servicio</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Los documentos sensibles (cédula, títulos) serán almacenados de forma segura y no serán 
                compartidos públicamente.
              </p>
            </div>
          </section>

          {/* Section 5 - Membresías */}
          <section className="bg-card rounded-2xl p-6 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-premium/10 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-premium" />
              </div>
              <h2 className="text-xl font-bold text-foreground">5. Membresías y Pagos</h2>
            </div>
            
            <div className="prose prose-sm text-muted-foreground">
              <p className="leading-relaxed">
                Los planes premium ofrecen beneficios adicionales como:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Mayor visibilidad en el directorio</li>
                <li>Botón de contacto directo por WhatsApp</li>
                <li>Badge de verificación</li>
                <li>Estadísticas de perfil</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Los pagos de membresía no son reembolsables una vez iniciado el período de facturación.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
            <h3 className="text-lg font-semibold text-foreground mb-2">¿Preguntas?</h3>
            <p className="text-muted-foreground text-sm">
              Si tiene alguna pregunta sobre estos términos, puede contactarnos en{" "}
              <a href="mailto:legal@saludmargarita.com" className="text-primary hover:underline">
                legal@saludmargarita.com
              </a>
            </p>
          </section>
        </div>

        {/* Back button */}
        <div className="mt-12 text-center">
          <Link to="/">
            <button className="px-8 py-3 font-semibold text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors">
              Volver al Inicio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Terminos;
