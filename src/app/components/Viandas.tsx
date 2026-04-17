import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";

interface Vianda {
  id: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  imagen: string;
  emoji: string;
  beneficios: string[];
}

const viandas: Vianda[] = [
  // ... tus viandas existentes ...
];

export function Viandas() {
  const whatsappNumber = "5493541377939";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleViandaClick = (vianda: Vianda) => {
    const message = encodeURIComponent(
      "Hola! Vengo de la web. Me interesa la vianda:\n\n" +
      "🍽️ Producto: " + vianda.nombre + "\n" +
      "📂 Categoría: " + vianda.categoria + "\n" +
      "💰 Precio: $7.500\n\n" +
      "📍 Mi dirección de entrega: \n\n" +
      "💳 Formas de pago: Transferencia bancaria o efectivo.\n\n" +
      "✅ ¿Podrían confirmar disponibilidad y coordinar la entrega?"
    );
    window.open("https://wa.me/" + whatsappNumber + "?text=" + message, "_blank");
  };

  return (
    <section id="viandas" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header - mejorado para móvil */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 px-2">
            Nuestras Viandas Saludables 🍎
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-4">
            Cada vianda es más que comida: es <strong>tiempo y salud recuperados</strong>.
            Preparadas con amor, frescura y el respaldo científico que tu cuerpo merece.
          </p>
        </div>

        {/* Cómo funciona - mejorado para móvil */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 md:p-6 max-w-3xl mx-auto mb-8 md:mb-12">
          <p className="text-emerald-800 font-medium text-base md:text-lg mb-2 text-center">
            📅 ¿Cómo funciona?
          </p>
          <p className="text-emerald-700 text-sm md:text-base text-center">
            Cada semana publicamos el menú disponible. Podés elegir tu vianda de <strong>lunes a viernes</strong> y coordinar la entrega por WhatsApp.
          </p>
          <p className="text-emerald-900 font-bold mt-3 text-lg md:text-xl text-center">
            💰 Precio único: $7.500 por vianda
          </p>
        </div>

        {/* Grid de viandas - responsive con mejor touch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {viandas.map((vianda) => (
            <div 
              key={vianda.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col"
            >
              <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
                <ImageWithFallback 
                  src={vianda.imagen} 
                  alt={vianda.nombre} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full shadow-md">
                  <span className="text-xs md:text-sm text-emerald-700 font-medium">
                    {vianda.emoji} {vianda.categoria}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-emerald-600 text-white px-2 md:px-3 py-1 rounded-full shadow-md">
                  <span className="text-xs md:text-sm font-bold">$7.500</span>
                </div>
              </div>
              
              <div className="p-4 md:p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl mb-2 text-gray-900 font-bold">
                  {vianda.nombre}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-3">
                  {vianda.descripcion}
                </p>
                
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                  {vianda.beneficios.map((beneficio, idx) => (
                    <span 
                      key={idx} 
                      className="bg-emerald-50 text-emerald-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm"
                    >
                      ✓ {beneficio}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => handleViandaClick(vianda)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 md:py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 mt-auto font-medium text-sm md:text-base active:scale-95 md:active:scale-100"
                  aria-label={`Pedir ${vianda.nombre} por WhatsApp`}
                >
                  <span>¡Quiero esta vianda!</span>
                  <span className="text-base">📱</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Plan personalizado - mejorado */}
        <div className="mt-12 md:mt-16 text-center bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl mb-2 text-emerald-900 font-bold">
            ¿No encontrás lo que buscás?
          </h3>
          <p className="text-emerald-700 text-sm md:text-base mb-4 md:mb-6">
            Creamos planes personalizados según tus objetivos, intolerancias o preferencias alimentarias
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent("Hola! Me gustaría conocer más sobre planes personalizados de viandas");
              window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
            }}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 md:px-8 py-3 md:py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2 text-sm md:text-base active:scale-95 md:active:scale-100"
            aria-label="Consultar plan personalizado por WhatsApp"
          >
            <span>Consultar Plan Personalizado</span>
            <span className="text-base">💬</span>
          </button>
        </div>
      </div>
    </section>
  );
}
