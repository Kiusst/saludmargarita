import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Upload, CheckCircle, ArrowLeft, FileText, Camera, CreditCard, Award, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const RegistroDoctor = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    especialidad: "",
    cedulaIdentidad: null as File | null,
    matriculaMPPS: "",
    cedulaColegio: "",
    tituloEspecialista: null as File | null,
    constanciaTrabajo: null as File | null,
  });

  const handleFileChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, [field]: e.target.files![0] }));
    }
  };

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center animate-in fade-in zoom-in duration-500">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto bg-green-500 rounded-full flex items-center justify-center animate-in zoom-in duration-700">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
            <div className="absolute inset-0 w-32 h-32 mx-auto bg-green-500/30 rounded-full animate-ping" />
          </div>
          
          <h1 className="text-3xl font-bold text-foreground mb-4">
            ¡Información Enviada Correctamente!
          </h1>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Su información será puesta a revisión para que pueda ser miembro del Directorio de Salud Margarita. 
            Le notificaremos por correo electrónico una vez que su perfil sea aprobado.
          </p>
          
          <Button 
            onClick={() => navigate("/")}
            className="px-8 py-3 h-auto rounded-xl font-semibold"
          >
            Volver al Inicio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container px-4 py-4 mx-auto">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-secondary rounded-xl transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold text-foreground">Aplicar como Doctor</h1>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8 mx-auto max-w-2xl">
        {/* Intro */}
        <div className="mb-8 p-6 bg-primary/5 rounded-2xl border border-primary/20">
          <h2 className="text-lg font-semibold text-foreground mb-2">
            Únete al Directorio Médico de Margarita
          </h2>
          <p className="text-muted-foreground text-sm">
            Complete el siguiente formulario con sus datos profesionales. Todos los documentos serán verificados 
            para garantizar la autenticidad de los profesionales en nuestro directorio.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Info */}
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              Información Personal
            </h3>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input 
                  id="nombre" 
                  placeholder="Dr. Juan" 
                  value={formData.nombre}
                  onChange={handleInputChange("nombre")}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apellido">Apellido</Label>
                <Input 
                  id="apellido" 
                  placeholder="Pérez" 
                  value={formData.apellido}
                  onChange={handleInputChange("apellido")}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="doctor@email.com" 
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input 
                  id="telefono" 
                  placeholder="+58 412 123 4567" 
                  value={formData.telefono}
                  onChange={handleInputChange("telefono")}
                  required 
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="especialidad">Especialidad</Label>
                <Input 
                  id="especialidad" 
                  placeholder="Cardiología, Pediatría, etc." 
                  value={formData.especialidad}
                  onChange={handleInputChange("especialidad")}
                  required 
                />
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Documentos Requeridos
            </h3>
            
            <div className="space-y-6">
              {/* Cedula */}
              <div className="p-4 border border-dashed border-border rounded-xl">
                <div className="flex items-start gap-3 mb-3">
                  <Camera className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Cédula de Identidad (V/E)</h4>
                    <p className="text-sm text-muted-foreground">Foto clara por ambos lados</p>
                  </div>
                </div>
                <label className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-primary/30 rounded-xl cursor-pointer hover:bg-primary/5 transition-colors">
                  <Upload className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    {formData.cedulaIdentidad ? formData.cedulaIdentidad.name : "Subir archivo"}
                  </span>
                  <input 
                    type="file" 
                    accept="image/*,.pdf" 
                    className="hidden" 
                    onChange={handleFileChange("cedulaIdentidad")}
                    required
                  />
                </label>
              </div>

              {/* MPPS */}
              <div className="p-4 border border-dashed border-border rounded-xl">
                <div className="flex items-start gap-3 mb-3">
                  <Award className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Número de Matrícula MPPS (MSAS)</h4>
                    <p className="text-sm text-muted-foreground">Número del Ministerio del Poder Popular para la Salud</p>
                  </div>
                </div>
                <Input 
                  placeholder="Ej: 12345" 
                  value={formData.matriculaMPPS}
                  onChange={handleInputChange("matriculaMPPS")}
                  required
                />
              </div>

              {/* Colegio de Médicos */}
              <div className="p-4 border border-dashed border-border rounded-xl">
                <div className="flex items-start gap-3 mb-3">
                  <Award className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Número de Colegio de Médicos (CM)</h4>
                    <p className="text-sm text-muted-foreground">Matrícula del Colegio de Médicos de Nueva Esparta</p>
                  </div>
                </div>
                <Input 
                  placeholder="Ej: CM-12345" 
                  value={formData.cedulaColegio}
                  onChange={handleInputChange("cedulaColegio")}
                  required
                />
              </div>

              {/* Titulo Especialista */}
              <div className="p-4 border border-dashed border-border rounded-xl">
                <div className="flex items-start gap-3 mb-3">
                  <FileText className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Foto del Título de Especialista</h4>
                    <p className="text-sm text-muted-foreground">Si declara ser especialista, debe presentar el título correspondiente</p>
                  </div>
                </div>
                <label className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-primary/30 rounded-xl cursor-pointer hover:bg-primary/5 transition-colors">
                  <Upload className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    {formData.tituloEspecialista ? formData.tituloEspecialista.name : "Subir archivo"}
                  </span>
                  <input 
                    type="file" 
                    accept="image/*,.pdf" 
                    className="hidden" 
                    onChange={handleFileChange("tituloEspecialista")}
                    required
                  />
                </label>
              </div>

              {/* Constancia Trabajo */}
              <div className="p-4 border border-dashed border-border rounded-xl">
                <div className="flex items-start gap-3 mb-3">
                  <Building className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Constancia de Trabajo o Alquiler</h4>
                    <p className="text-sm text-muted-foreground">Documento que vincule al doctor con la clínica (carta o recibo)</p>
                  </div>
                </div>
                <label className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-primary/30 rounded-xl cursor-pointer hover:bg-primary/5 transition-colors">
                  <Upload className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    {formData.constanciaTrabajo ? formData.constanciaTrabajo.name : "Subir archivo"}
                  </span>
                  <input 
                    type="file" 
                    accept="image/*,.pdf" 
                    className="hidden" 
                    onChange={handleFileChange("constanciaTrabajo")}
                    required
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Legal Terms */}
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">⚖️ Blindaje Legal</h3>
            
            <div className="space-y-4 text-sm text-muted-foreground mb-6">
              <p>
                Al registrarse, usted acepta los siguientes términos:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Cláusula de Veracidad:</strong> Declaro bajo fe de juramento que soy médico titulado y colegiado, 
                  y que toda la información suministrada es veraz y verificable.
                </li>
                <li>
                  <strong>Exoneración de Responsabilidad:</strong> Salud Margarita actúa exclusivamente como un directorio de conexión. 
                  No se hace responsable por mala praxis, diagnósticos erróneos o disputas entre médico y paciente.
                </li>
                <li>
                  <strong>Derecho de Admisión:</strong> Nos reservamos el derecho de eliminar cualquier perfil que reciba reportes 
                  recurrentes, sin derecho a reembolso.
                </li>
              </ul>
            </div>

            <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
              <Checkbox 
                id="terms" 
                checked={acceptedTerms}
                onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                className="mt-0.5"
              />
              <label htmlFor="terms" className="text-sm cursor-pointer">
                Acepto los{" "}
                <Link to="/terminos" className="text-primary hover:underline font-medium">
                  Términos y Condiciones
                </Link>{" "}
                y Declaro bajo Fe de Juramento que toda la información proporcionada es veraz.
              </label>
            </div>
          </div>

          {/* Submit */}
          <Button 
            type="submit" 
            disabled={!acceptedTerms || isSubmitting}
            className="w-full py-4 h-auto text-lg font-semibold rounded-xl"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Enviando...
              </div>
            ) : (
              "Enviar Solicitud"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegistroDoctor;
