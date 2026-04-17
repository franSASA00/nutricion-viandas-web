export function Hero() {
  const whatsappNumber = "5493541377939";
  
  const handleOrderClick = () => {
    const message = encodeURIComponent("Hola! Me interesa conocer sus viandas saludables");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Título */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Nutrición Profesional
          </h1>
          
          {/* Subtítulo */}
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-700 mb-4">
            Que no debería ser trabajo
          </h2>
          
          {/* Descripción */}
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Comida real, directo a tu mesa
          </p>
          
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Preparada por profesionales para transformar tu alimentación. 
            Recuperarás tu tiempo y tu energía en cada plato.
          </p>
          
          {/* Botón WhatsApp */}
          <button
            onClick={handleOrderClick}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2 text-lg"
          >
            <span>Pedir por WhatsApp</span>
            <span>📱</span>
          </button>
        </div>
      </div>
    </section>
  );
}
