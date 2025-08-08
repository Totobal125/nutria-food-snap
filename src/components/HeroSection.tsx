import { Button } from "@/components/ui/button";
import { Download, Apple, Smartphone } from "lucide-react";
import heroPhoneMockup from "@/assets/hero-phone-mockup.jpg";
import { openAppStore } from "@/utils/downloadUtils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.3 });
  const { ref: buttonsRef, isVisible: buttonsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const { ref: phoneRef, isVisible: phoneVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="min-h-screen flex items-center bg-background pt-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-nutria-green/8 rounded-full animate-blob blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-nutria-brown/8 rounded-full animate-blob animation-delay-2000 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Title */}
            <div className="space-y-6">
              <h1 
                ref={titleRef}
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight transition-all duration-1000 ${
                  titleVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                Comer sano es{" "}
                <span className="text-gray-800 inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold slogan-keyword">fácil</span>,{" "}
                <span className="text-nutria-brown inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold slogan-keyword">rico</span>{" "}
                <br className="hidden sm:block" />
                y para{" "}
                <span className="text-nutria-green inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold slogan-keyword">todos</span>
              </h1>
              
              {/* Description with integrated image */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-6">
                  <p 
                    ref={descRef}
                    className={`text-lg sm:text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
                      descVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-8'
                    }`}
                  >
                    Con solo una foto, entiende lo que comes con inteligencia artificial.
                  </p>
                  
                  <div 
                    ref={buttonsRef}
                    className={`space-y-6 transition-all duration-1000 delay-400 ${
                      buttonsVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <Button 
                      variant="download" 
                      size="xl" 
                      className="w-full sm:w-auto shadow-2xl hover:shadow-nutria-green/30 pulse-glow button-shine hover-glow transform transition-all duration-300 hover:scale-105"
                      onClick={() => openAppStore('smart')}
                    >
                      <Download className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                      Descargar nutrIA
                    </Button>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        variant="glass" 
                        size="lg" 
                        className="min-w-0 sm:min-w-[160px] group glass-button hover-lift"
                        onClick={() => openAppStore('ios')}
                      >
                        <Apple className="mr-3 h-5 w-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                        App Store
                      </Button>
                      <Button 
                        variant="glass" 
                        size="lg" 
                        className="min-w-0 sm:min-w-[160px] group glass-button hover-lift"
                        onClick={() => openAppStore('android')}
                      >
                        <Smartphone className="mr-3 h-5 w-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                        Google Play
                      </Button>
                    </div>
                    
                    <p className="text-sm text-muted-foreground/80 flex items-center justify-center sm:justify-start gap-2 animate-fadeIn delay-600">
                      <span className="w-2 h-2 bg-nutria-green rounded-full animate-pulse"></span>
                      Disponible gratis • Sin anuncios • Sin suscripciones
                    </p>
                  </div>
                </div>
                
                {/* Phone Mockup - now integrated with description */}
                <div className="order-1 lg:order-2 flex justify-center">
                  <div 
                    ref={phoneRef}
                    className={`relative transition-all duration-1000 delay-300 ${
                      phoneVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-8'
                    }`}
                  >
                    <div className="relative group">
                      <img 
                        src={heroPhoneMockup} 
                        alt="nutrIA app en smartphone mostrando análisis de comida con IA"
                        className="w-full max-w-xs sm:max-w-sm h-auto rounded-3xl shadow-2xl group-hover:scale-105 transition-all duration-500"
                      />
                      
                      {/* Enhanced decorative elements - static */}
                      <div className="absolute -top-3 -right-3 w-16 h-16 bg-nutria-green/20 rounded-full blur-lg"></div>
                      <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-nutria-brown/20 rounded-full blur-lg"></div>
                      
                      {/* Subtle effect on hover */}
                      <div className="absolute inset-0 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Professional glow effect */}
                      <div className="absolute inset-0 rounded-3xl bg-nutria-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;