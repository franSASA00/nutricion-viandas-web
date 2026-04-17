export function Servicios() {
  const servicios = [
    {
      icono: "🥗",
      titulo: "Plan Semanal",
      descripcion: "Elegí tus viandas favoritas para toda la semana con delivery programado"
    },
    {
      icono: "📋",
      titulo: "Plan Personalizado",
      descripcion: "Nutricionista diseña un plan según tus objetivos y preferencias"
    },
    {
      icono: "🚚",
      titulo: "Delivery sin cargo",
      descripcion: "Envío gratis en pedidos de 5 viandas o más en zona céntrica"
    },
    {
      icono: "🎯",
      titulo: "Seguimiento",
      descripcion: "Acompañamiento continuo para alcanzar tus metas de salud"
    }
  ];

  return (
    <section id="servicios" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Nuestros Servicios ⭐
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para una alimentación saludable y sin complicaciones
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {servicios.map((servicio, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{servicio.icono}</div>
              <h3 className="text-xl font-bold mb-2">{servicio.titulo}</h3>
              <p className="text-gray-600 text-sm">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
