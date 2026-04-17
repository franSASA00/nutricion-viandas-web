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
  {
    id: "control-peso-1",
    nombre: "Bowl Mediterráneo",
    descripcion: "Ensalada fresca con quinoa, vegetales asados, garbanzos y aderezo de limón. Equilibrado y saciante.",
    categoria: "Control de Peso",
    imagen: "https://images.unsplash.com/photo-1546069901-04dcb46a5e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    emoji: "🥗",
    beneficios: ["Alto en fibra", "Bajo en calorías", "Proteína vegetal"],
  },
  {
    id: "control-peso-2",
    nombre: "Pollo Grillé con Verduras",
    descripcion: "Pechuga de pollo a la plancha con mix de vegetales al vapor y batata horneada. Sabor casero garantizado.",
    categoria: "Control de Peso",
    imagen: "https://images.unsplash.com/photo-1642635055753-3eec6c0b2a6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    emoji: "🍗",
    beneficios: ["Alto en proteínas", "Bajo en grasas", "Rico en vitaminas"],
  },
  {
    id: "hipertrofia-1",
    nombre: "Power Beef Bowl",
    descripcion: "Carne magra con arroz yamaní, brócoli, espinaca y huevo. Potencia tu masa muscular con sabor.",
    categoria: "Hipertrofia",
    imagen: "https://images.unsplash.com/photo-1720443000468-89d509202615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    emoji: "💪",
    beneficios: ["Alto en proteínas", "Carbohidratos complejos", "Hierro y zinc"],
  },
  {
    id: "hipertrofia-2",
    nombre: "Salmón con Arroz Integral",
    descripcion: "Filet de salmón al horno con arroz integral, espárragos y palta. Omega-3 para tu rendimiento.",
    categoria: "Hipertrofia",
    imagen: "https://images.unsplash.com/photo-1607264021653-0a884a9740cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    emoji: "🐟",
    beneficios: ["Proteína de calidad", "Grasas saludables", "Anti-inflamatorio"],
  },
  {
    id: "veggie-1",
    nombre: "Buddha Bowl Vegano",
    descripcion: "Combinación perfecta de garbanzos especiados, quinoa, kale, zanahoria y tahini. Colores y nutrición.",
    categoria: "Veggie",
    imagen: "https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    emoji: "🌱",
    beneficios: ["100% vegano", "Rico en antioxidantes", "Completo nutricionalmente"],
  },
  {
    id: "express-1",
    nombre: "Wrap Fitness Express",
    descripcion: "Wrap integral con pollo, lechuga, tomate, zanahoria y salsa yogurt. Listo en 2 minutos.",
    categoria: "Express",
    imagen: "https://images.unsplash.com/photo-1662714208483-3480ccd2de39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    emoji: "⚡",
    beneficios: ["Rápido", "Portátil", "Completo"],
  },
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

  return (
    <section id="viandas" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Nuestras Viandas Saludables 🍎
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Cada vianda es más que comida: es <strong>tiempo y salud recuperados</strong>.
            Preparadas con amor, frescura y el respaldo científico que tu cuerpo merece.
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 md:p-6 max-w-3xl mx-auto mb-8 md:mb-12 text-center">
          <p className="text-emerald-800 font-medium text-base md:text-lg mb-2">📅 ¿Cómo funciona?</p>
          <p className="text-emerald-700 text-sm md:text-base">
            Cada semana publicamos el menú disponible. Podés elegir tu vianda de <strong>lunes a viernes</strong> y coordinar la entrega por WhatsApp.
          </p>
          <p className="text-emerald-900 font-bold mt-3 text-lg md:text-xl">
            💰 Precio único: $7.500 por vianda
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {viandas.map((vianda) => (
            <div key={vianda.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col">
              <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
                <ImageWithFallback src={vianda.imagen} alt={vianda.nombre} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full shadow-md">
                  <span className="text-xs md:text-sm text-emerald-700 font-medium">{vianda.emoji} {vianda.categoria}</span>
                </div>
                <div className="absolute top-3 right-3 bg-emerald-600 text-white px-2 md:px-3 py-1 rounded-full shadow-md">
                  <span className="text-xs md:text-sm font-bold">$7.500</span>
                </div>
              </div>
              <div className="p-4 md:p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl mb-2 text-gray-900 font-bold">{vianda.nombre}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">{vianda.descripcion}</p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                  {vianda.beneficios.map((beneficio, idx) => (
                    <span key={idx} className="bg-emerald-50 text-emerald-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                      ✓ {beneficio}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleViandaClick(vianda)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 md:py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 mt-auto font-medium text-sm md:text-base active:scale-95 md:active:scale-100"
                >
                  <span>¡Quiero esta vianda!</span>
                  <span>📱</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center bg-emerald-50 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl mb-2 text-emerald-900 font-bold">¿No encontrás lo que buscás?</h3>
          <p className="text-emerald-700 text-sm md:text-base mb-4 md:mb-6">
            Creamos planes personalizados según tus objetivos, intolerancias o preferencias alimentarias
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent("Hola! Me gustaría conocer más sobre planes personalizados de viandas");
              window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
            }}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 md:px-8 py-3 md:py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2 text-sm md:text-base active:scale-95 md:active:scale-100"
          >
            <span>Consultar Plan Personalizado</span>
            <span>💬</span>
          </button>
        </div>
      </div>
    </section>
  );
}
