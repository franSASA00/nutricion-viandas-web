export function Servicios() {
  const servicios = [
    {
      icono: "🏠",
      titulo: "100% Casero",
      descripcion: "En casa, con ingredientes de calidad y amor en cada preparación"
    },
    {
      icono: "👩‍🍳",
      titulo: "Asesoramiento Profesional",
      descripcion: "Licenciada en Nutrición Certificada para guiar tu alimentación"
    },
    {
      icono: "🥗",
      titulo: "Ingredientes Frescos",
      descripcion: "Seleccionamos los mejores productos para tus viandas"
    },
    {
      icono: "📦",
      titulo: "Delivery Sin Cargo",
      descripcion: "Envío gratis en pedidos de 5 viandas o más"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Calidad y profesionalismo en cada detalle
          </p>
        </div>

        {/* Grid de servicios - responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {servicios.map((servicio, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-5xl mb-4">{servicio.icono}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {servicio.titulo}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Beneficio adicional */}
        <div className="mt-10 md:mt-12 bg-emerald-50 rounded-2xl p-6 max-w-3xl mx-auto text-center">
          <p className="text-emerald-800 font-medium text-lg">
            🌟 Beneficio Especial
          </p>
          <p className="text-emerald-700 mt-2">
            Primera compra: <strong>10% de descuento</strong> con código BIENVENIDA10
          </p>
        </div>
      </div>
    </section>
  );
}
