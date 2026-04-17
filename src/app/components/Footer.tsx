export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "5493541377939";
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">🍎 Nutrición & Viandas</h3>
            <p className="text-gray-400 text-sm">
              Comida saludable preparada con amor y ciencia para potenciar tu bienestar.
            </p>
          </div>
          
          {/* Links rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Inicio</a></li>
              <li><a href="#viandas" className="text-gray-400 hover:text-emerald-400 transition-colors">Viandas</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-emerald-400 transition-colors">Servicios</a></li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span>📱</span>
                <a href={`https://wa.me/${whatsappNumber}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:nutricion@viandas.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  nutricion@viandas.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Horarios */}
          <div>
            <h4 className="font-semibold mb-4">Horarios</h4>
            <p className="text-gray-400 text-sm">Lun a Vie: 9:00 - 20:00</p>
            <p className="text-gray-400 text-sm">Sábados: 10:00 - 14:00</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Nutrición y Viandas Saludables. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
