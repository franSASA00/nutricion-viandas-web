export function Hero() {
  const whatsappNumber = "5491123456789";
  const handleCTA = () => {
    const message = encodeURIComponent("¡Hola! Vengo de la web. Quiero conocer más sobre las viandas y servicios de nutrición.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8faf8 0%, #ffffff 50%, #f0f4f0 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Subtle grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(rgba(26,74,43,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,74,43,0.04) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      {/* Top bar / Nav */}
      <nav style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 48px',
        borderBottom: '1px solid rgba(26,74,43,0.1)',
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(8px)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: 36, height: 36,
            background: '#1a4a2b',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10H12V2z"/>
              <path d="M12 2a10 10 0 0 1 10 10"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: 16, color: '#1a4a2b', letterSpacing: '-0.02em' }}>
              Nutrición &amp; Viandas
            </div>
            <div style={{ fontSize: 10, color: '#6b8f71', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'system-ui' }}>
              Lic. en Nutrición
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          <a href="#viandas" style={{ fontSize: 14, color: '#3d6b47', textDecoration: 'none', fontFamily: 'system-ui', letterSpacing: '0.02em' }}>Menú</a>
          <a href="#servicios" style={{ fontSize: 14, color: '#3d6b47', textDecoration: 'none', fontFamily: 'system-ui', letterSpacing: '0.02em' }}>Servicios</a>
          <button
            onClick={handleCTA}
            style={{
              background: '#1a4a2b',
              color: 'white',
              border: 'none',
              padding: '10px 22px',
              borderRadius: 6,
              fontSize: 13,
              fontFamily: 'system-ui',
              cursor: 'pointer',
              letterSpacing: '0.04em',
              fontWeight: 500,
            }}
          >
            Consultá ahora
          </button>
        </div>
      </nav>

      {/* Hero content */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        padding: '60px 48px',
        maxWidth: 1200,
        margin: '0 auto',
        width: '100%',
        position: 'relative',
        zIndex: 10,
        gap: 80,
      }}>
        {/* Left column */}
        <div style={{ flex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(26,74,43,0.07)',
            border: '1px solid rgba(26,74,43,0.2)',
            padding: '6px 16px',
            borderRadius: 100,
            marginBottom: 28,
          }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#2d7a3a' }} />
            <span style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1a4a2b', fontFamily: 'system-ui', fontWeight: 600 }}>
              Nutrición con Respaldo Científico
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#0d2b18',
            marginBottom: 24,
            letterSpacing: '-0.03em',
          }}>
            Tu salud merece<br />
            <span style={{ color: '#2d7a3a' }}>atención profesional</span><br />
            en cada comida.
          </h1>

          <p style={{
            fontSize: 17,
            color: '#4a6650',
            lineHeight: 1.7,
            marginBottom: 40,
            fontFamily: 'system-ui',
            maxWidth: 480,
          }}>
            Viandas diseñadas por Licenciada en Nutrición, con enfoque clínico y sabor casero. 
            Cada plato es un protocolo alimentario pensado para tu bienestar.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button
              onClick={handleCTA}
              style={{
                background: '#1a4a2b',
                color: 'white',
                border: 'none',
                padding: '16px 32px',
                borderRadius: 8,
                fontSize: 15,
                fontFamily: 'system-ui',
                cursor: 'pointer',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                boxShadow: '0 4px 24px rgba(26,74,43,0.25)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M11.5 2.25C6.39 2.25 2.25 6.39 2.25 11.5c0 1.584.395 3.078 1.09 4.385L2 22l6.296-1.316A9.226 9.226 0 0 0 11.5 20.75C16.61 20.75 20.75 16.61 20.75 11.5S16.61 2.25 11.5 2.25z"/>
              </svg>
              Consultá por WhatsApp
            </button>
            <button
              onClick={() => document.getElementById('viandas')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'white',
                color: '#1a4a2b',
                border: '1.5px solid rgba(26,74,43,0.3)',
                padding: '16px 32px',
                borderRadius: 8,
                fontSize: 15,
                fontFamily: 'system-ui',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Ver el menú →
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 40, marginTop: 52, paddingTop: 40, borderTop: '1px solid rgba(26,74,43,0.12)' }}>
            {[
              { num: '100%', label: 'Ingredientes frescos' },
              { num: 'Lic.', label: 'Nutricionista a cargo' },
              { num: '5★', label: 'Satisfacción garantizada' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div style={{ fontFamily: "'Georgia', serif", fontSize: 26, fontWeight: 700, color: '#1a4a2b', lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 12, color: '#6b8f71', marginTop: 4, fontFamily: 'system-ui', letterSpacing: '0.02em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - visual card */}
        <div style={{ flex: '0 0 420px', position: 'relative' }}>
          {/* Main image card */}
          <div style={{
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(26,74,43,0.18)',
            position: 'relative',
          }}>
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Vianda saludable"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(13,43,24,0.6) 0%, transparent 50%)',
            }} />
            <div style={{
              position: 'absolute',
              bottom: 24,
              left: 24,
              right: 24,
              color: 'white',
            }}>
              <div style={{ fontFamily: "'Georgia', serif", fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
                Diseñado para tu objetivo
              </div>
              <div style={{ fontSize: 13, opacity: 0.85, fontFamily: 'system-ui' }}>
                Control de peso · Hipertrofia · Veggie · Express
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div style={{
            position: 'absolute',
            top: -20,
            right: -20,
            background: 'white',
            borderRadius: 12,
            padding: '14px 18px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            border: '1px solid rgba(26,74,43,0.1)',
          }}>
            <div style={{ fontSize: 11, color: '#6b8f71', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'system-ui', marginBottom: 4 }}>
              Preparación
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#2d7a3a' }} />
              <span style={{ fontSize: 14, fontWeight: 600, color: '#0d2b18', fontFamily: 'system-ui' }}>Diaria · Sin conservantes</span>
            </div>
          </div>

          {/* Floating pill */}
          <div style={{
            position: 'absolute',
            bottom: -16,
            left: -24,
            background: '#1a4a2b',
            borderRadius: 10,
            padding: '12px 20px',
            boxShadow: '0 8px 24px rgba(26,74,43,0.3)',
            color: 'white',
          }}>
            <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7, fontFamily: 'system-ui' }}>Entrega</div>
            <div style={{ fontSize: 14, fontWeight: 600, fontFamily: 'system-ui', marginTop: 2 }}>Carlos Paz y zona</div>
          </div>
        </div>
      </div>

      {/* Bottom scroll cue */}
      <div style={{
        textAlign: 'center',
        paddingBottom: 28,
        color: '#6b8f71',
        fontSize: 12,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        fontFamily: 'system-ui',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{ marginBottom: 8 }}>Ver menú</div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ margin: '0 auto', display: 'block', animation: 'bounce 1.5s infinite' }}>
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <style>{`@keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(6px); } }`}</style>
    </section>
  );
}
