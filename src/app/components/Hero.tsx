import fondoHero from "../../assets/fondo-hero.jpg";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
const whatsappNumber = "5493541373782";
  const handleCTA = () => {
    const message = encodeURIComponent("¡Hola! Vengo de la web. Quiero conocer más sobre las viandas y servicios de nutrición.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" style={{ backgroundImage: `url(${fondoHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

          <div className="mb-6">
            <span className="bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full inline-flex items-center gap-2">
              <span className="text-xl">🌿</span>
              <span>Nutrición Profesional</span>
            </span>
          </div>

          <h1 className="mb-6 leading-tight bg-white/90 backdrop-blur-sm rounded-xl px-6 py-4 shadow-md w-full max-w-2xl">
            Comer bien no debería ser un trabajo.<br/>
            <span className="text-emerald-600">Nutrición real, directo a tu mesa.</span>
          </h1>

          <p className="mb-8 text-muted-foreground bg-white/90 backdrop-blur-sm rounded-xl px-6 py-4 shadow-md w-full max-w-2xl">
            Viandas diseñadas por profesionales y formación de alto nivel para transformar tu estilo de vida.
            Recuperá tu tiempo y tu salud con cada plato.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={handleCTA}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
            >
              <span>📱</span>
              <span>Consultar por WhatsApp</span>
            </button>
            <button
              onClick={() => document.getElementById('viandas')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-50 text-emerald-700 border-2 border-emerald-600 px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2"
            >
              <span>🥗</span>
              <span>Ver Menú</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl w-full">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
              <div className="mb-3">✨</div>
              <h3 className="mb-2 text-emerald-700">100% Casero</h3>
              <p className="text-muted-foreground">Preparado como en casa, con ingredientes frescos de calidad</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
              <div className="mb-3">🎓</div>
              <h3 className="mb-2 text-emerald-700">Respaldo Profesional</h3>
              <p className="text-muted-foreground">Diseñado por Licenciada en Nutrición certificada</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
              <div className="mb-3">⏰</div>
              <h3 className="mb-2 text-emerald-700">Ahorrá Tiempo</h3>
              <p className="text-muted-foreground">Listo para calentar y disfrutar en minutos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
