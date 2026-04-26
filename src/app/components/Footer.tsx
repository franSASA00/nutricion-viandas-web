export function Footer() {
  const whatsappNumber = "543541377939";
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#0d2b18', color: 'white', padding: '72px 0 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>

        {/* Top CTA banner */}
        <div style={{
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          paddingBottom: 56,
          marginBottom: 56,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 40,
        }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontFamily: 'system-ui', marginBottom: 12 }}>
              ¿Listo para empezar?
            </div>
            <h3 style={{ fontFamily: "'Georgia', serif", fontSize: 28, fontWeight: 700, color: 'white', margin: 0, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Tu próximo paso hacia<br />una alimentación consciente.
            </h3>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("¡Hola! Quiero comenzar con mi plan nutricional")}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'white',
              color: '#0d2b18',
              padding: '16px 28px',
              borderRadius: 8,
              fontSize: 14,
              fontFamily: 'system-ui',
              fontWeight: 700,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              letterSpacing: '0.02em',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#0d2b18">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M11.5 2.25C6.39 2.25 2.25 6.39 2.25 11.5c0 1.584.395 3.078 1.09 4.385L2 22l6.296-1.316A9.226 9.226 0 0 0 11.5 20.75C16.61 20.75 20.75 16.61 20.75 11.5S16.61 2.25 11.5 2.25z"/>
            </svg>
            Escribinos por WhatsApp
          </a>
        </div>

        {/* Main footer grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 64, marginBottom: 56 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.12)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 2a10 10 0 0 1 10 10"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: 16, color: 'white' }}>Lic. María Eugenia Álvarez</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'system-ui' }}>Nutrición &amp; Viandas</div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontFamily: 'system-ui', lineHeight: 1.7, maxWidth: 320, margin: '0 0 24px' }}>
              Alimentación con respaldo científico. Viandas diseñadas por profesionales para quienes toman en serio su salud.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.06)', borderRadius: 6, border: '1px solid rgba(255,255,255,0.1)', fontSize: 12, color: 'rgba(255,255,255,0.6)', fontFamily: 'system-ui' }}>
                Carlos Paz (sin Colinas)
              </div>
              <div style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.06)', borderRadius: 6, border: '1px solid rgba(255,255,255,0.1)', fontSize: 12, color: 'rgba(255,255,255,0.6)', fontFamily: 'system-ui' }}>
                Entrega a domicilio
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontFamily: 'system-ui', fontWeight: 700, marginBottom: 20 }}>
              Navegación
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { label: 'Menú de Viandas', href: '#viandas' },
                { label: 'Servicios Profesionales', href: '#servicios' },
                { label: 'Plan Personalizado', href: `https://wa.me/${whatsappNumber}` },
              ].map(({ label, href }) => (
                <a key={label} href={href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', fontFamily: 'system-ui', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Horarios */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontFamily: 'system-ui', fontWeight: 700, marginBottom: 20 }}>
              Atención
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { dia: 'Viandas (pedidos)', horario: '8:00 – 11:30' },
                { dia: 'Nutricionista', horario: '15:00 – 19:00' },
                { dia: 'Domingos', horario: 'Cerrado' },
              ].map(({ dia, horario }) => (
                <div key={dia}>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontFamily: 'system-ui', marginBottom: 2 }}>{dia}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', fontFamily: 'system-ui', fontWeight: 500 }}>{horario}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontFamily: 'system-ui', margin: 0 }}>
            © {currentYear} Nutrición &amp; Viandas. Todos los derechos reservados.
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', fontFamily: 'system-ui', margin: 0 }}>
            Diseñado con propósito · Villa Carlos Paz, Córdoba
          </p>
        </div>
      </div>
    </footer>
  );
}
