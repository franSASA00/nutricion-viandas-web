import { useState, useRef } from "react";

const fotos = [
  {
    src: "https://images.unsplash.com/photo-1546069901-04dcb46a5e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    titulo: "Bowl Mediterráneo",
    categoria: "Control de Peso"
  },
  {
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    titulo: "Plato del día",
    categoria: "Variedad"
  },
  {
    src: "https://images.unsplash.com/photo-1642635055753-3eec6c0b2a6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    titulo: "Pollo Grillé",
    categoria: "Control de Peso"
  },
  {
    src: "https://images.unsplash.com/photo-1720443000468-89d509202615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    titulo: "Power Beef Bowl",
    categoria: "Hipertrofia"
  },
  {
    src: "https://images.unsplash.com/photo-1607264021653-0a884a9740cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    titulo: "Salmón con Arroz Integral",
    categoria: "Hipertrofia"
  },
  {
    src: "https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    titulo: "Buddha Bowl Vegano",
    categoria: "Veggie"
  },
  {
    src: "https://images.unsplash.com/photo-1662714208483-3480ccd2de39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    titulo: "Wrap Fitness Express",
    categoria: "Express"
  },
];

export function Galeria() {
  const [activo, setActivo] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const anterior = () => setActivo(a => (a === 0 ? fotos.length - 1 : a - 1));
  const siguiente = () => setActivo(a => (a === fotos.length - 1 ? 0 : a + 1));

  return (
    <section id="galeria" style={{ background: '#f8faf8', padding: '100px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <div style={{ width: 32, height: 2, background: '#1a4a2b' }} />
              <span style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1a4a2b', fontFamily: 'system-ui', fontWeight: 700 }}>
                Galería
              </span>
            </div>
            <h2 style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 700, color: '#0d2b18', letterSpacing: '-0.03em', lineHeight: 1.2, margin: 0 }}>
              Nuestros platos, de cerca
            </h2>
          </div>

          {/* Controles */}
          <div style={{ display: 'flex', gap: 12 }}>
            <button
              onClick={anterior}
              style={{ width: 48, height: 48, borderRadius: '50%', border: '1.5px solid rgba(26,74,43,0.25)', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#1a4a2b'; (e.currentTarget as HTMLElement).style.borderColor = '#1a4a2b'; (e.currentTarget.querySelector('svg') as SVGElement).style.stroke = 'white'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'white'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,74,43,0.25)'; (e.currentTarget.querySelector('svg') as SVGElement).style.stroke = '#1a4a2b'; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a4a2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button
              onClick={siguiente}
              style={{ width: 48, height: 48, borderRadius: '50%', border: '1.5px solid rgba(26,74,43,0.25)', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#1a4a2b'; (e.currentTarget as HTMLElement).style.borderColor = '#1a4a2b'; (e.currentTarget.querySelector('svg') as SVGElement).style.stroke = 'white'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'white'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,74,43,0.25)'; (e.currentTarget.querySelector('svg') as SVGElement).style.stroke = '#1a4a2b'; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a4a2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Carrusel */}
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 16 }}>
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              gap: 20,
              transform: `translateX(calc(-${activo * (440 + 20)}px))`,
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {fotos.map((foto, i) => (
              <div
                key={i}
                onClick={() => setActivo(i)}
                style={{
                  flexShrink: 0,
                  width: 440,
                  borderRadius: 14,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  boxShadow: i === activo ? '0 20px 60px rgba(26,74,43,0.2)' : '0 4px 20px rgba(0,0,0,0.08)',
                  transform: i === activo ? 'scale(1)' : 'scale(0.96)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  opacity: i === activo ? 1 : 0.65,
                }}
              >
                <img
                  src={foto.src}
                  alt={foto.titulo}
                  style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(13,43,24,0.75) 0%, transparent 55%)',
                }} />
                <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                  <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', fontFamily: 'system-ui', marginBottom: 6 }}>
                    {foto.categoria}
                  </div>
                  <div style={{ fontFamily: "'Georgia', serif", fontSize: 20, fontWeight: 700, color: 'white' }}>
                    {foto.titulo}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
          {fotos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActivo(i)}
              style={{
                width: i === activo ? 28 : 8,
                height: 8,
                borderRadius: 100,
                background: i === activo ? '#1a4a2b' : 'rgba(26,74,43,0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Aviso fotos reales */}
        <div style={{
          marginTop: 40,
          textAlign: 'center',
          padding: '14px 24px',
          background: 'rgba(26,74,43,0.05)',
          border: '1px dashed rgba(26,74,43,0.2)',
          borderRadius: 8,
          display: 'inline-block',
          marginLeft: '50%',
          transform: 'translateX(-50%)',
        }}>
          <span style={{ fontSize: 13, color: '#4a6650', fontFamily: 'system-ui' }}>
            📸 Próximamente: fotos reales de nuestros platos
          </span>
        </div>
      </div>
    </section>
  );
}
