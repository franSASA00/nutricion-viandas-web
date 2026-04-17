import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Vianda {
  id: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  imagen: string;
  emoji: string;
  beneficios: string[];
  color: "green" | "red";
}

// SOLO 2 viandas destacadas
const viandasDestacadas: Vianda[] = [
  {
    id: "bowl-mediterraneo",
    nombre: "Bowl Mediterráneo",
    descripcion: "Ensalada fresca con quinoa, vegetales asados, garbanzos y aderezo de limón. Equilibrado y saciante.",
    categoria: "Control de Peso",
    imagen: "https://images.unsplash.com/photo-1546069901-04dcb46a5e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    emoji: "🥗",
    beneficios: ["Alto en fibra", "Bajo en calorías", "Proteína vegetal"],
    color: "green"
  },
  {
    id: "power-beef",
    nombre: "Power Beef Bowl",
    descripcion: "Carne magra con arroz yamaní, brócoli, espinaca y huevo. Potencia tu masa muscular con sabor.",
    categoria: "Hipertrofia",
    imagen: "https://images.unsplash.com/photo-1720443000468-89d509202615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    emoji: "💪",
    beneficios: ["Alto en proteínas", "Carbohidratos complejos", "Hierro y zinc"],
    color: "red"
  }
];

export function Viandas() {
  const whatsappNumber = "5493541377939";

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

  const getColors = (color: string) => {
    if (color === "green") {
      return {
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        button: "bg-emerald-600 hover:bg-emerald-700",
        badge: "bg-emerald-100 text-emerald-700",
        priceBg: "bg-emerald-600"
      };
    } else {
      return {
        bg: "bg-red-50",
        border: "border-red-200",
        button: "bg-red-600 hover:bg-red-700",
        badge: "bg-red-100 text-red-700",
        priceBg: "bg-red-600"
      };
    }
  };

  return (
    <section id="viandas" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Título */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Viandas Destacadas 🌟
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Las más pedidas de la semana. ¡Elegí tu favorita!
          </p>
        </div>

        {/* Cómo funciona */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 md:p-6 max-w-3xl mx-auto mb-8 md:mb-12 text-center">
          <p className="text-emerald-800 font-medium text-base md:text-lg mb-2">📅 ¿Cómo funciona?</p>
          <p className="text-emerald-700 text-sm md:text-base">
            Cada semana publicamos el menú disponible. Podés elegir tu vianda de <strong>lunes a viernes</strong> y coordinar la entrega por WhatsApp.
          </p>
          <p className="text-emerald-900 font-bold mt-3 text-lg md:text-xl">
            💰 Precio único: $7.500 por vianda
          </p>
        </div>

        {/* Grid con 2 viandas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {viandasDestacadas.map((vianda) => {
            const colors = getColors(vianda.color);
            
            return (
              <div 
                key={vianda.id} 
                className={`${colors.bg} rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border ${colors.border} flex flex-col`}
              >
                <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
                  <ImageWithFallback 
                    src={vianda.imagen} 
                    alt={vianda.nombre} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-3 left-3 ${colors.badge} px-2 md:px-3 py-1 rounded-full shadow-md text-sm`}>
                    {vianda.emoji} {vianda.categoria}
                  </div>
                  <div className={`absolute top-3 right-3 ${colors.priceBg} text-white px-2 md:px-3 py-1 rounded-full shadow-md text-sm font-bold`}>
                    $7.500
                  </div>
                </div>
                
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl mb-2 text-gray-900 font-bold">
                    {vianda.nombre}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4">
                    {vianda.descripcion}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    {vianda.beneficios.map((beneficio, idx) => (
                      <span 
                        key={idx} 
                        className={`${colors.badge} px-2 md:px-3 py-1 rounded-full text-xs md:text-sm`}
                      >
                        ✓ {beneficio}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => handleViandaClick(vianda)}
                    className={`w-full ${colors.button} text-white py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 font-medium active:scale-95`}
                  >
                    <span>¡Quiero esta vianda!</span>
                    <span>📱</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Más opciones */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 mb-3">¿Buscás otras opciones?</p>
          <button
            onClick={() => {
              const message = encodeURIComponent("Hola! Me gustaría conocer el menú completo de viandas");
              window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
            }}
            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            <span>Consultar menú completo</span>
            <span>📋</span>
          </button>
        </div>

        {/* Plan personalizado */}
        <div className="mt-12 md:mt-16 text-center bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl mb-2 text-emerald-900 font-bold">
            ¿No encontrás lo que buscás?
          </h3>
          <p className="text-emerald-700 text-sm md:text-base mb-4">
            Creamos planes personalizados según tus objetivos, intolerancias o preferencias alimentarias
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent("Hola! Me gustaría conocer más sobre planes personalizados");
              window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
            }}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 md:px-8 py-3 rounded-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            <span>Consultar Plan Personalizado</span>
            <span>💬</span>
          </button>
        </div>
      </div>
    </section>
  );
}
