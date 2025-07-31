import { Button } from "@/components/ui/button";
import { Download, Apple, Smartphone } from "lucide-react";
import heroPhoneMockup from "@/assets/hero-phone-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-background to-nutria-beige-light pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Comer sano es{" "}
                <span className="text-nutria-green">fácil</span>,{" "}
                <span className="text-nutria-brown">rico</span> y{" "}
                <span className="text-nutria-green-light">para todos</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Con solo una foto, entiende lo que comes con inteligencia artificial.
              </p>
            </div>
            
            <div className="space-y-4">
              <Button variant="cta" size="xl" className="w-full sm:w-auto">
                <Download className="mr-2 h-5 w-5" />
                Descargar nutrIA
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
                  <Apple className="mr-2 h-5 w-5" />
                  App Store
                </Button>
                <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Google Play
                </Button>
              </div>
            </div>
          </div>
          
          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={heroPhoneMockup} 
                alt="nutrIA app en smartphone mostrando análisis de comida con IA"
                className="w-full max-w-md h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-nutria-green/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-nutria-brown/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;