import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const clinics = [
  {
    name: "Clínica Santa María",
    address: "Av. 4 de Mayo, Porlamar",
    phone: "+58 295-263-1234",
    hours: "24 horas",
    doctors: 28,
  },
  {
    name: "Centro Médico Margarita",
    address: "Calle El Cristo, Pampatar",
    phone: "+58 295-267-5678",
    hours: "7:00 AM - 9:00 PM",
    doctors: 35,
  },
  {
    name: "Hospital Central",
    address: "Av. Principal, La Asunción",
    phone: "+58 295-242-9012",
    hours: "24 horas",
    doctors: 52,
  },
  {
    name: "Policlínica Juan Griego",
    address: "Calle La Marina, Juan Griego",
    phone: "+58 295-253-3456",
    hours: "6:00 AM - 8:00 PM",
    doctors: 18,
  },
];

const MapSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-14 text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Ubicaciones
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Clínicas en Margarita
          </h2>
          <p className="text-muted-foreground">
            Encuentra el centro de salud más cercano a tu ubicación
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <div className="relative overflow-hidden bg-secondary rounded-2xl shadow-card min-h-[400px] lg:min-h-[500px]">
            {/* Map placeholder with styled background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02813854445!2d-64.13739899999999!3d10.9970723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c30829ec8f8b06f%3A0xe7f8c4cd3c847ea9!2sIsla%20de%20Margarita!5e0!3m2!1ses!2sve!4v1704067200000!5m2!1ses!2sve"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
            
            {/* Map overlay with branding */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="p-4 bg-card/95 backdrop-blur-sm rounded-xl shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-hero">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Isla de Margarita</p>
                    <p className="text-sm text-muted-foreground">15+ centros de salud</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clinics List */}
          <div className="space-y-4">
            {clinics.map((clinic, index) => (
              <div 
                key={index}
                className="p-5 transition-all bg-card rounded-2xl shadow-soft hover:shadow-card hover:-translate-x-1 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {clinic.name}
                    </h3>
                    <span className="text-sm text-primary font-medium">
                      {clinic.doctors} doctores disponibles
                    </span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="flex-shrink-0 w-4 h-4 text-primary" />
                    <span>{clinic.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="flex-shrink-0 w-4 h-4 text-primary" />
                    <span>{clinic.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="flex-shrink-0 w-4 h-4 text-primary" />
                    <span>{clinic.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
