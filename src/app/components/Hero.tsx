export function Hero() {
  const whatsappNumber = "5493541377939";
  
  const scrollToViandas = () => {
    const element = document.getElementById('viandas');
    if (element) {
      element.scrollTo({ behavior: 'smooth' });
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleOrderClick = () => {
    const message = encodeURIComponent("Hola! Me interesa conocer sus viandas saludables");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 pt-12 md:pt-16 pb-10 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Título */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-4">
            Nutrición Profesional
          </h1>
          
          {/* Subtítulo */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-emerald-700 mb-3 md:mb-4">
            Que no debería ser trabajo
          </h2>
          
          {/* Descripción */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto">
            Comida real, directo a tu mesa
          </p>
          
          <p className="text-sm sm:text-base text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            Preparada por profesionales para transformar tu alimentación. 
            Recuperarás tu tiempo y tu energía en cada plato.
          </p>
          
          {/* Botones duales - mejora para móvil */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
            <button
              onClick={scrollToViandas}
              className="w-full sm:w-auto bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 md:px-8 py-3 rounded-xl font-medium transition-all duration-300 active:scale-95 text-sm md:text-base"
            >
              📋 Ver Menú
            </button>
            
            <button
              onClick={handleOrderClick}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-6 md:px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 text-sm md:text-base inline-flex items-center justify-center gap-2"
            >
              <span>Pedir por WhatsApp</span>
              <span>📱</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
