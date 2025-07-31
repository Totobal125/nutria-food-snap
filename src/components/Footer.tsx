const Footer = () => {
  return (
    <footer className="bg-nutria-brown-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-nutria-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold">nutrIA</span>
            </div>
            <p className="text-white/80">
              La app que te ayuda a entender lo que comes con inteligencia artificial.
            </p>
          </div>
          
          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Producto</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#que-es" className="hover:text-white transition-colors">¿Qué es nutrIA?</a></li>
              <li><a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Descargar</a></li>
            </ul>
          </div>
          
          {/* For Professionals */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Profesionales</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#nutricionistas" className="hover:text-white transition-colors">Portal Nutricionistas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">portal.nutria.dev</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Soporte</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contacto</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Soporte</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 nutrIA. Comer sano es fácil, rico y para todos.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;