import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoNutria from "@/assets/logo nutria.png";
import { useSmoothNavigation, useActiveSection } from "@/utils/smoothScroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navigateToSection } = useSmoothNavigation();
  
  // Secciones para detectar cuál está activa
  const sections = ['que-es', 'como-funciona', 'beneficios', 'testimonios'];
  const activeSection = useActiveSection(sections);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (sectionId: string) => {
    navigateToSection(sectionId);
    setIsMenuOpen(false); // Cerrar menú móvil
  };

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-border/50 z-50 shadow-sm">
      <div className="container mx-auto px-3 sm:px-6 py-2 sm:py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img
            src={logoNutria}
            alt="nutrIA Logo"
            className="w-16 h-16 sm:w-18 sm:h-20 lg:w-20 lg:h-24 object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>
        
        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 flex-1 justify-center">
          <button 
            onClick={() => handleNavClick('que-es')}
            className={`transition-all duration-300 hover:scale-105 font-medium relative group ${
              activeSection === 'que-es' 
                ? 'text-nutria-green' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            ¿Qué es?
            {activeSection === 'que-es' && (
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-nutria-green rounded-full"></div>
            )}
          </button>
          <button 
            onClick={() => handleNavClick('como-funciona')}
            className={`transition-all duration-300 hover:scale-105 font-medium relative group ${
              activeSection === 'como-funciona' 
                ? 'text-nutria-green' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Cómo funciona
            {activeSection === 'como-funciona' && (
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-nutria-green rounded-full"></div>
            )}
          </button>
          <button 
            onClick={() => handleNavClick('beneficios')}
            className={`transition-all duration-300 hover:scale-105 font-medium relative group ${
              activeSection === 'beneficios' 
                ? 'text-nutria-green' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Beneficios
            {activeSection === 'beneficios' && (
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-nutria-green rounded-full"></div>
            )}
          </button>
          <button 
            onClick={() => handleNavClick('testimonios')}
            className={`transition-all duration-300 hover:scale-105 font-medium relative group ${
              activeSection === 'testimonios' 
                ? 'text-nutria-green' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Testimonios
            {activeSection === 'testimonios' && (
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-nutria-green rounded-full"></div>
            )}
          </button>
        </nav>
        
        {/* Desktop CTA Buttons */}
        <div className="flex items-center flex-shrink-0 space-x-3">
          <a 
            href="/portal-nutricionistas" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex"
          >
            <Button variant="warm" size="sm" className="hover:shadow-nutria-brown/30 shadow-lg">
              Portal Nutricionistas
            </Button>
          </a>
          <a 
            href="https://apps.apple.com/cl/app/nutria/id6744851977" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex"
          >
            <Button variant="cta" size="sm" className="hover:shadow-nutria-green/30 shadow-lg">
              Descargar App
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center flex-shrink-0">
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-accent/80 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 shadow-lg">
          <nav className="container mx-auto px-6 py-8 space-y-6">
            {/* Mobile Logo */}
            <div className="flex justify-center pb-4 border-b border-border/30">
                                    <img
                        src={logoNutria}
                        alt="nutrIA Logo"
                        className="w-20 h-24 object-contain hover:scale-105 transition-transform duration-300"
                      />
            </div>
            <button 
              onClick={() => handleNavClick('que-es')}
              className={`w-full text-left block transition-all duration-300 py-4 px-4 rounded-xl hover:bg-accent/50 font-medium ${
                activeSection === 'que-es' 
                  ? 'text-nutria-green bg-nutria-green/10' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              ¿Qué es?
            </button>
            <button 
              onClick={() => handleNavClick('como-funciona')}
              className={`w-full text-left block transition-all duration-300 py-4 px-4 rounded-xl hover:bg-accent/50 font-medium ${
                activeSection === 'como-funciona' 
                  ? 'text-nutria-green bg-nutria-green/10' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Cómo funciona
            </button>
            <button 
              onClick={() => handleNavClick('beneficios')}
              className={`w-full text-left block transition-all duration-300 py-4 px-4 rounded-xl hover:bg-accent/50 font-medium ${
                activeSection === 'beneficios' 
                  ? 'text-nutria-green bg-nutria-green/10' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Beneficios
            </button>
            <button 
              onClick={() => handleNavClick('testimonios')}
              className={`w-full text-left block transition-all duration-300 py-4 px-4 rounded-xl hover:bg-accent/50 font-medium ${
                activeSection === 'testimonios' 
                  ? 'text-nutria-green bg-nutria-green/10' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Testimonios
            </button>
            <a 
              href="/portal-nutricionistas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full px-2"
            >
              <Button variant="warm" size="lg" className="w-full shadow-xl hover:shadow-nutria-brown/30">
                Portal Nutricionistas
              </Button>
            </a>
            <a 
              href="https://apps.apple.com/cl/app/nutria/id6744851977" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full mt-12 px-2"
            >
              <Button variant="cta" size="lg" className="w-full shadow-xl hover:shadow-nutria-green/30">
                Descargar App
              </Button>
            </a>
            {/* Espaciado adicional al final del menú */}
            <div className="pt-6"></div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;