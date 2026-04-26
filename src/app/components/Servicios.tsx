interface Servicio {
  id: string;
  titulo: string;
  descripcion: string;
  beneficios: string[];
  tipo: "curso" | "asesoria";
}

const servicios: Servicio[] = [
  {
    id: "asesoria-personalizada",
    titulo: "Asesoría Nutricional Personalizada",
    descripcion: "Consultas individuales con Licenciada en Nutrición. Plan alimentario adaptado a tus objetivos, análisis de composición corporal y seguimiento continuo.",
    beneficios: ["Plan alimentario personalizado", "Seguimiento mensual", "Análisis antropométrico", "Educación alimentaria"],
    tipo: "asesoria"
  },
  {
    id: "paquete-integral",
    titulo: "Paquete Integral: Viandas + Asesoría",
    descripcion: "El combo perfecto: viandas semanales diseñadas específicamente para tu plan nutricional + seguimiento profesional mensual.",
    beneficios: ["Viandas personalizadas", "Consultas mensuales", "Ajustes continuos", "Precio preferencial"],
    tipo: "asesoria"
  }
];

const credenciales = [
  { icono: "🎓", titulo: "Lic. en Nutrición", subtitulo: "Título universitario certificado" },
  { icono: "🔬", titulo: "Evidencia científica", subtitulo: "Protocolos basados en investigación" },
  { icono: "📋", titulo: "Seguimiento clínico", subtitulo: "Registro y ajuste continuo" },
  { icono: "💚", titulo: "Enfoque integral", subtitulo: "Salud física y relación con la comida" },
];

export function Servicios() {
  const whatsappNumber = "5491123456789";

  const handleServicioClick = (servicio: Servicio) => {
    const message = encodeURIComponent(
      `¡Hola! Vengo de la web. Me interesa el servicio:\n\n` +
      `📚 Servicio: ${servicio.titulo}\n\n` +
      `¿Podrían darme más información sobre fechas, inversión y modalidad?`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="servicios" style={{ background: 'white', padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 32, height: 2, background: '#1a4a2b' }} />
            <span style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1a4a2b', fontFamily: 'system-ui', fontWeight: 700 }}>
              Servicios Profesionales
            </span>
          </div>
          <h2 style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 700, color: '#0d2b18', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: 16 }}>
            Más allá del plato: acompañamiento clínico real
          </h2>
          <p style={{ fontSize: 16, color: '#4a6650', fontFamily: 'system-ui', lineHeight: 1.6, maxWidth: 520 }}>
            Transformar tu alimentación requiere ciencia, seguimiento y contexto personal. No dietas de moda: un plan que funciona para tu cuerpo y tu vida.
          </p>
        </div>

        {/* Servicios cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28, marginBottom: 64 }}>
          {servicios.map((servicio, idx) => (
            <div
              key={servicio.id}
              style={{
                borderRadius: 14,
                overflow: 'hidden',
                border: idx === 1 ? '2px solid #1a4a2b' : '1px solid rgba(26,74,43,0.12)',
                background: idx === 1 ? '#f2f8f4' : 'white',
                position: 'relative',
              }}
            >
              {idx === 1 && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  background: '#1a4a2b',
                  color: 'white',
                  textAlign: 'center',
                  padding: '8px',
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontFamily: 'system-ui',
                  fontWeight: 700,
                }}>
                  Más elegido
                </div>
              )}
              <div style={{ padding: idx === 1 ? '52px 36px 36px' : '36px' }}>
                <div style={{
                  display: 'inline-block',
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#1a4a2b',
                  background: 'rgba(26,74,43,0.08)',
                  border: '1px solid rgba(26,74,43,0.2)',
                  padding: '4px 12px',
                  borderRadius: 100,
                  fontFamily: 'system-ui',
                  fontWeight: 600,
                  marginBottom: 20,
                }}>
                  {servicio.tipo === 'asesoria' ? 'Asesoría Clínica' : 'Curso'}
                </div>

                <h3 style={{ fontFamily: "'Georgia', serif", fontSize: 20, fontWeight: 700, color: '#0d2b18', margin: '0 0 14px', lineHeight: 1.3 }}>
                  {servicio.titulo}
                </h3>
                <p style={{ fontSize: 14, color: '#5a7460', fontFamily: 'system-ui', lineHeight: 1.7, marginBottom: 24 }}>
                  {servicio.descripcion}
                </p>

                <div style={{ marginBottom: 28 }}>
                  <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1a4a2b', fontFamily: 'system-ui', fontWeight: 700, marginBottom: 12 }}>
                    Incluye
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {servicio.beneficios.map((b, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#1a4a2b', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span style={{ fontSize: 14, color: '#3d5a43', fontFamily: 'system-ui' }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleServicioClick(servicio)}
                  style={{
                    width: '100%',
                    background: idx === 1 ? '#1a4a2b' : 'white',
                    color: idx === 1 ? 'white' : '#1a4a2b',
                    border: idx === 1 ? 'none' : '1.5px solid #1a4a2b',
                    padding: '14px',
                    borderRadius: 8,
                    fontSize: 14,
                    fontFamily: 'system-ui',
                    fontWeight: 600,
                    cursor: 'pointer',
                    letterSpacing: '0.04em',
                  }}
                >
                  Consultar disponibilidad
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Credenciales */}
        <div style={{
          background: '#f8faf8',
          borderRadius: 14,
          padding: '48px',
          border: '1px solid rgba(26,74,43,0.08)',
        }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h3 style={{ fontFamily: "'Georgia', serif", fontSize: 22, fontWeight: 700, color: '#0d2b18', margin: '0 0 10px' }}>
              ¿Por qué confiar en nuestro trabajo?
            </h3>
            <p style={{ fontSize: 14, color: '#5a7460', fontFamily: 'system-ui', margin: 0 }}>
              No somos influencers de dietas. Somos profesionales con formación académica y resultados medibles.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {credenciales.map(({ icono, titulo, subtitulo }) => (
              <div key={titulo} style={{ textAlign: 'center', padding: '24px 16px', background: 'white', borderRadius: 10, border: '1px solid rgba(26,74,43,0.08)' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{icono}</div>
                <div style={{ fontFamily: "'Georgia', serif", fontSize: 15, fontWeight: 700, color: '#0d2b18', marginBottom: 6 }}>{titulo}</div>
                <div style={{ fontSize: 12, color: '#6b8f71', fontFamily: 'system-ui', lineHeight: 1.5 }}>{subtitulo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
