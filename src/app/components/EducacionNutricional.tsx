export function EducacionNutricional() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Título principal */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Educación Nutricional
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Conocé los fundamentos de una alimentación saludable
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 md:space-y-10">
          
          {/* ¿Qué es la nutrición? */}
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-emerald-700 mb-3 flex items-center gap-2">
              <span>❓</span> ¿Qué es la nutrición?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              La nutrición es fundamental para mantener una buena salud y vivir. 
              Es un conjunto de actividades que incluyen comer alimentos, tomar agua y consumir nutrientes. 
              La nutrición ayuda a los seres humanos a crecer, mantenerse en forma y desarrollar habilidades físicas. 
              Además, ayuda a prevenir enfermedades y mejorar la calidad de vida.
            </p>
          </div>

          {/* ¿Qué son las calorías? */}
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-emerald-700 mb-3 flex items-center gap-2">
              <span>🔥</span> ¿Qué son las calorías?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Las calorías son unidades de energía que se utilizan para alimentarse. 
              Son necesarias para mantener el funcionamiento normal del cuerpo. 
              Las calorías se originan cuando se consumen carbohidratos, grasas y aceites, 
              proporcionando energía a los organismos vivos.
            </p>
          </div>

          {/* ¿Qué son los nutrientes? */}
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
              <span>🥗</span> ¿Qué son los nutrientes?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Los nutrientes son sustancias esenciales que proporcionan al organismo los elementos necesarios 
              para su crecimiento, desarrollo y función.
            </p>

            <div className="space-y-4">
              {/* Carbohidratos */}
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-bold text-gray-800 text-lg mb-1">🍚 Carbohidratos</h4>
                <p className="text-gray-600 text-sm">Son compuestos de carbono e hidratos de carbono. Son los principales componentes de los alimentos. Existen dos tipos: simples (azúcares) y complejos (almidones y fibras).</p>
              </div>

              {/* Grasas */}
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-bold text-gray-800 text-lg mb-1">🫒 Grasas</h4>
                <p className="text-gray-600 text-sm">Importantes para la producción de hormonas y vitaminas. Existen dos tipos: saturadas (animales) e insaturadas (vegetales).</p>
              </div>

              {/* Proteínas */}
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-bold text-gray-800 text-lg mb-1">🍗 Proteínas</h4>
                <p className="text-gray-600 text-sm">Esenciales para la construcción de tejidos y funciones vitales como la defensa y el transporte de oxígeno.</p>
              </div>

              {/* Vitaminas */}
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-bold text-gray-800 text-lg mb-1">💊 Vitaminas</h4>
                <p className="text-gray-600 text-sm">Esenciales para la salud general, la función de la vista, la audición y la piel. Incluyen vitaminas A, B1, B2, B3, B5, B6, B9 y B12.</p>
              </div>

              {/* Minerales */}
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-bold text-gray-800 text-lg mb-1">🪨 Minerales</h4>
                <p className="text-gray-600 text-sm">Elementos inorgánicos que desempeñan funciones importantes. Se dividen en macronutrientes y micronutrientes (calcio, fósforo, hierro y magnesio).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="mt-10 md:mt-12 text-center bg-emerald-600 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
          <p className="text-white font-medium text-lg mb-3">
            ¿Querés una alimentación personalizada?
          </p>
          <p className="text-emerald-100 mb-4">
            Consultá nuestros planes nutricionales adaptados a vos
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent("Hola! Me interesa conocer más sobre planes nutricionales personalizados");
              window.open(`https://wa.me/5493541377939?text=${message}`, '_blank');
            }}
            className="bg-white text-emerald-600 hover:bg-gray-100 px-6 md:px-8 py-3 rounded-xl font-medium transition-all duration-300 inline-flex items-center gap-2"
          >
            <span>Consultar ahora</span>
            <span>💬</span>
          </button>
        </div>
      </div>
    </section>
  );
}
