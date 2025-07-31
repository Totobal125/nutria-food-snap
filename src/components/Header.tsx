import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-nutria-green rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <span className="text-xl font-bold text-foreground">nutrIA</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#que-es" className="text-muted-foreground hover:text-foreground transition-colors">
            ¿Qué es?
          </a>
          <a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors">
            Beneficios
          </a>
          <a href="#nutricionistas" className="text-muted-foreground hover:text-foreground transition-colors">
            Para Nutricionistas
          </a>
        </nav>
        
        <Button variant="cta" size="sm">
          Descargar App
        </Button>
      </div>
    </header>
  );
};

export default Header;