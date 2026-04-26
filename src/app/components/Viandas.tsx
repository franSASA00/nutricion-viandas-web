interface Vianda {
  id: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  imagen: string;
  beneficios: string[];
  precio: string;
  kcal: string;
}

const viandas: Vianda[] = [
  {
    id: "control-peso-1",
    nombre: "Bowl Mediterráneo",
    descripcion: "Quinoa, vegetales asados, garbanzos y aderezo de limón. Equilibrado y saciante.",
    categoria: "Control de Peso",
    imagen: "https://images.unsplash.com/photo-1546069901-04dcb46a5e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    beneficios: ["Alto en fibra", "Bajo en calorías", "Proteína vegetal"],
    precio: "$8.500",
    kcal: "380 kcal"
  },
  {
    id: "control-peso-2",
    nombre: "Pollo Grillé con Verduras",
    descripcion: "Pechuga a la plancha con mix de vegetales al vapor y batata horneada.",
    categoria: "Control de Peso",
    imagen: "https://images.unsplash.com/photo-1642635055753-3eec6c0b2a6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    beneficios: ["Alto en proteínas", "Bajo en grasas", "Rico en vitaminas"],
    precio: "$9.200",
    kcal: "420 kcal"
  },
  {
    id: "hipertrofia-1",
    nombre: "Power Beef Bowl",
    descripcion: "Carne magra con arroz yamaní, brócoli, espinaca y huevo duro.",
    categoria: "Hipertrofia",
    imagen: "https://images.unsplash.com/photo-1720443000468-89d509202615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    beneficios: ["Alto en proteínas", "Carbohidratos complejos", "Hierro y zinc"],
    precio: "$10.800",
    kcal: "620 kcal"
  },
  {
    id: "hipertrofia-2",
    nombre: "Salmón con Arroz Integral",
    descripcion: "Filet al horno con arroz integral, espárragos y palta. Omega-3 para tu rendimiento.",
    categoria: "Hipertrofia",
    imagen: "https://images.unsplash.com/photo-1607264021653-0a884a9740cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    beneficios: ["Proteína de calidad", "Grasas saludables", "Anti-inflamatorio"],
    precio: "$12.500",
    kcal: "580 kcal"
  },
  {
    id: "veggie-1",
    nombre: "Buddha Bowl Vegano",
    descripcion: "Garbanzos especiados, quinoa, kale, zanahoria y tahini.",
    categoria: "Veggie",
    imagen: "https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    beneficios: ["100% vegano", "Rico en antioxidantes", "Completo nutricionalmente"],
    precio: "$8.800",
    kcal: "410 kcal"
  },
  {
    id: "express-1",
    nombre: "Wrap Fitness Express",
    descripcion: "Wrap integral con pollo, lechuga, tomate, zanahoria y salsa yogurt.",
    categoria: "Express",
    imagen: "https://images.unsplash.com/photo-1662714208483-3480ccd2de39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    beneficios: ["Rápido", "Portátil", "Completo"],
    precio: "$7.500",
    kcal: "340 kcal"
  },
];

const categoryColors: Record<string, string> = {
  "Control de Peso": "#2d6a4f",
  "Hipertrofia": "#1d3557",
  "Veggie": "#386641",
  "Express": "#6b4226",
};

export function Viandas() {
  const whatsappNumber = "543541377939";

  const handleViandaClick = (vianda: Vianda) => {
    const message = encodeURIComponent(
      `¡Hola! Vengo de la web. Me interesa la vianda:\n\n` +
      `📦 Producto: ${vianda.nombre}\n` +
      `🏷️ Categoría: ${vianda.categoria}\n` +
      `💰 Precio estimado: ${vianda.precio}\n\n` +
      `¿Podrían darme más información y coordinar la entrega?`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="viandas" style={{ background: '#f8faf8', padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>

        <div style={{ marginBottom: 64 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 32, height: 2, background: '#1a4a2b' }} />
            <span style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1a4a2b', fontFamily: 'system-ui', fontWeight: 700 }}>
              Menú Semanal
            </span>
          </div>
          <h2 style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 700, color: '#0d2b18', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: 16 }}>
            Viandas diseñadas con precisión nutricional
          </h2>
          <p style={{ fontSize: 16, color: '#4a6650', fontFamily: 'system-ui', lineHeight: 1.6, maxWidth: 520 }}>
            Cada preparación responde a un objetivo clínico. Ingredientes frescos, macronutrientes calculados, y sabor que no sacrifica la ciencia.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {viandas.map((vianda) => (
            <div
              key={vianda.id}
              style={{ background: 'white', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', border: '1px solid rgba(26,74,43,0.08)', transition: 'box-shadow 0.2s, transform 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(26,74,43,0.14)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
            >
              <div style={{ position: 'relative', height: 200, overflow: 'hidden', background: '#e8f0ea' }}>
                <img src={vianda.imagen} alt={vianda.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', top: 14, left: 14, background: categoryColors[vianda.categoria] || '#1a4a2b', color: 'white', padding: '4px 12px', borderRadius: 4, fontSize: 11, fontFamily: 'system-ui', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {vianda.categoria}
                </div>
                <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(255,255,255,0.95)', color: '#0d2b18', padding: '4px 10px', borderRadius: 4, fontSize: 11, fontFamily: 'system-ui', fontWeight: 600 }}>
                  {vianda.kcal}
                </div>
              </div>

              <div style={{ padding: '22px 24px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <h3 style={{ fontFamily: "'Georgia', serif", fontSize: 17, fontWeight: 700, color: '#0d2b18', lineHeight: 1.3, margin: 0 }}>
                    {vianda.nombre}
                  </h3>
                  <span style={{ fontFamily: "'Georgia', serif", fontSize: 16, fontWeight: 700, color: '#1a4a2b', whiteSpace: 'nowrap', marginLeft: 12 }}>
                    {vianda.precio}
                  </span>
                </div>

                <p style={{ fontSize: 13, color: '#5a7460', fontFamily: 'system-ui', lineHeight: 1.6, marginBottom: 16 }}>
                  {vianda.descripcion}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {vianda.beneficios.map((b, i) => (
                    <span key={i} style={{ fontSize: 11, color: '#1a4a2b', background: 'rgba(26,74,43,0.07)', border: '1px solid rgba(26,74,43,0.15)', padding: '3px 10px', borderRadius: 100, fontFamily: 'system-ui', fontWeight: 500, letterSpacing: '0.02em' }}>
                      {b}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleViandaClick(vianda)}
                  style={{ width: '100%', background: '#1a4a2b', color: 'white', border: 'none', padding: '12px', borderRadius: 7, fontSize: 13, fontFamily: 'system-ui', fontWeight: 600, cursor: 'pointer', letterSpacing: '0.04em' }}
                >
                  Consultar disponibilidad
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 60, background: '#0d2b18', borderRadius: 14, padding: '48px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 40 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', fontFamily: 'system-ui', marginBottom: 12 }}>
              Plan Personalizado
            </div>
            <h3 style={{ fontFamily: "'Georgia', serif", fontSize: 24, fontWeight: 700, color: 'white', margin: '0 0 10px', letterSpacing: '-0.02em' }}>
              ¿Tenés necesidades especiales?
            </h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', fontFamily: 'system-ui', lineHeight: 1.6, margin: 0 }}>
              Intolerancias, objetivos clínicos, patologías. Diseñamos tu plan desde cero.
            </p>
          </div>
          <button
            onClick={() => { const message = encodeURIComponent("Hola! Me gustaría conocer más sobre planes personalizados de viandas"); window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank'); }}
            style={{ background: 'white', color: '#0d2b18', border: 'none', padding: '16px 32px', borderRadius: 8, fontSize: 14, fontFamily: 'system-ui', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', letterSpacing: '0.02em' }}
          >
            Consultar plan personalizado →
          </button>
        </div>
      </div>
    </section>
  );
}
