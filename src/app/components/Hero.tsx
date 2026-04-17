export function Hero() {
  const whatsappNumber = "5493541377939";
  
  const handleOrderClick = () => {
    const message = encodeURIComponent("Hola! Me interesa conocer sus viandas saludables");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50 pt-16 md:pt-20 pb-12 md:pb-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4 md:mb-6">
            🌱 Comida real para tu día a día
          </div>
          
          {/* Título principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent">
            Nutrición que <br className="hidden sm:block" />
            transforma tu energía
          </h1>
          
          {/* Descripción */}
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 px-2">
            Viandas saludables, frescas y listas para disfrutar. 
            Cuidamos tu alimentación para que vos solo te preocupes por brillar.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <button
              onClick={handleOrderClick}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 md:active:scale-100"
            >
              Pedir mi vianda 📦
            </button>
            <a
              href="#viandas"
              className="w-full sm:w-auto border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-medium transition-all duration-300 text-center"
            >
              Ver catálogo 👀
            </a>
          </div>
          
          {/* Stats o beneficios rápidos - opcional */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 mt-8 md:mt-12 pt-4 md:pt-8 border-t border-gray-200">
            <div>
              <p className="text-xl md:text-2xl font-bold text-emerald-600">+15</p>
              <p className="text-xs md:text-sm text-gray-500">Viandas</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold text-emerald-600">100%</p>
              <p className="text-xs md:text-sm text-gray-500">Frescura</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold text-emerald-600">24/7</p>
              <p className="text-xs md:text-sm text-gray-500">Atención</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
