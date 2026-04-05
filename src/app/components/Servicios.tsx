interface Servicio {
  id: string;
  titulo: string;
  descripcion: string;
  beneficios: string[];
  emoji: string;
  tipo: "curso" | "asesoria";
}

const servicios: Servicio[] = [
  {
    id: "asesoria-personalizada",
    titulo: "Asesoría Nutricional Personalizada",
    descripcion: "Consultas individuales con Licenciada en Nutrición. Plan alimentario adaptado a tus objetivos, análisis de composición corporal y seguimiento continuo.",
    beneficios: [
      "Plan alimentario personalizado",
      "Seguimiento mensual",
      "Análisis antropométrico",
      "Educación alimentaria"
    ],
    emoji: "🎯",
    tipo: "asesoria"
  },
  {
    id: "paquete-integral",
    titulo: "Paquete Integral: Viandas + Asesoría",
    descripcion: "El combo perfecto: viandas semanales diseñadas específicamente para tu plan nutricional + seguimiento profesional mensual.",
    beneficios: [
      "Viandas personalizadas",
      "Consultas mensuales",
      "Ajustes continuos",
      "Precio preferencial"
    ],
    emoji: "✨",
    tipo: "asesoria"
  }
];

export function Servicios() {
  const whatsappNumber = "5493541377939";

  const handleServicioClick = (servicio: Servicio) => {
    const message = encodeURIComponent(
      `¡Hola! Vengo de la web. Me interesa el servicio:\n\n` +
      `📚 Servicio: ${servicio.titulo}\n` +
      `📋 Tipo: ${servicio.tipo === 'curso' ? 'Curso de Formación' : 'Asesoría Nutricional'}\n\n` +
      `¿Podrían darme más información sobre fechas, inversión y modalidad?`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            Servicios Profesionales de Nutrición 🎓
          </h2>
          <p className="text-muted-foreground">
            Más que viandas: transformamos tu relación con la comida a través de la <strong>ciencia y el acompañamiento profesional</strong>.
            Respaldo académico, resultados reales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">{servicio.emoji}</div>
                <div className="flex-1">
                  <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm mb-3">
                    {servicio.tipo === 'curso' ? '📖 Curso' : '👨‍⚕️ Asesoría'}
                  </div>
                  <h3 className="mb-3 text-gray-900">{servicio.titulo}</h3>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                {servicio.descripcion}
              </p>

              <div className="space-y-3 mb-6">
                <h4 className="text-emerald-700 text-sm">Lo que incluye:</h4>
                <ul className="space-y-2">
                  {servicio.beneficios.map((beneficio, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>{beneficio}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleServicioClick(servicio)}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                <span>Consultar disponibilidad</span>
                <span>📱</span>
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 border-2 border-emerald-100">
          <div className="text-center mb-8">
            <h3 className="mb-3 text-gray-900">¿Por qué elegirnos?</h3>
            <p className="text-muted-foreground">
              No somos influencers de dietas de moda. Somos profesionales con respaldo científico y compromiso real con tu salud.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4">
              <div className="text-3xl mb-3">🔬</div>
              <h4 className="mb-2 text-emerald-700">Ciencia, no tendencias</h4>
              <p className="text-muted-foreground text-sm">Basado en evidencia científica actualizada</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-3">🎓</div>
              <h4 className="mb-2 text-emerald-700">Formación profesional</h4>
              <p className="text-muted-foreground text-sm">Licenciada en Nutrición certificada</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-3">💚</div>
              <h4 className="mb-2 text-emerald-700">Acompañamiento real</h4>
              <p className="text-muted-foreground text-sm">Seguimiento continuo y personalizado</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                const message = encodeURIComponent("¡Hola! Me gustaría conocer más sobre los servicios de nutrición profesional");
                window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
              }}
              className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-10 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
            >
              <span>💬</span>
              <span>Comencemos tu camino hacia una vida mejor</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
