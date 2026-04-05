export function Footer() {
  const whatsappNumber = "5493541377939";
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-4 text-emerald-400">🌿 Nutrición y Viandas</h3>
            <p className="text-gray-400 mb-4">
              Transformando vidas a través de la alimentación consciente y el respaldo profesional.
            </p>
            <div className="flex gap-4">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-2">
                <span>📱</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-emerald-400">Navegación</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#viandas" className="hover:text-emerald-400 transition-colors">🥗 Nuestras Viandas</a></li>
              <li><a href="#servicios" className="hover:text-emerald-400 transition-colors">🎓 Servicios Profesionales</a></li>
              <li><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">💬 Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-emerald-400">Horarios de Atención</h4>
            <ul className="space-y-2 text-gray-400">
              <li>⏰ Lunes a Viernes: 9:00 - 14:00</li>
              <li>📋 Pedidos hasta las 11:30 hs</li>
              <li>📍 Villa Carlos Paz, Córdoba, Argentina</li>
              <li>🚚 Reparto gratuito en Villa Carlos Paz</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="mb-2">© {currentYear} Nutrición y Viandas. Todos los derechos reservados.</p>
          <p className="text-sm">Diseñado con 💚 para tu bienestar</p>
        </div>
      </div>
    </footer>
  );
}
