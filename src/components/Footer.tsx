import logoNutria from "@/assets/logo nutria.png";

const Footer = () => {
  return (
    <footer className="bg-nutria-brown-dark text-white py-12 sm:py-16 border-t border-nutria-brown/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Brand */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <div className="flex items-center">
              <img 
                                    src={logoNutria}
                    alt="nutrIA Logo"
                    className="w-16 h-16 sm:w-18 sm:h-20 lg:w-20 lg:h-24 object-contain brightness-0 invert hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <p className="text-white/80">
              La app que te ayuda a entender lo que comes con inteligencia artificial.
            </p>
          </div>
          
          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Producto</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#que-es" className="hover:text-white transition-all duration-300 hover:translate-x-1">¿Qué es nutrIA?</a></li>
              <li><a href="#beneficios" className="hover:text-white transition-all duration-300 hover:translate-x-1">Beneficios</a></li>
              <li><a href="https://apps.apple.com/cl/app/nutria/id6744851977" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:translate-x-1">Descargar</a></li>
            </ul>
          </div>
          
          {/* For Professionals */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Profesionales</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#nutricionistas" className="hover:text-white transition-all duration-300 hover:translate-x-1">Portal Nutricionistas</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1">portal.nutria.dev</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1">Soporte</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contacto</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1">Soporte</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1">Términos</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p className="font-medium">&copy; 2025 nutrIA. Comer sano es fácil, rico y para todos.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;