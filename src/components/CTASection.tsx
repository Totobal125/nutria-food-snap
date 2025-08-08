import { Button } from "@/components/ui/button";
import { Download, Apple, Smartphone } from "lucide-react";
import healthyLifestyle from "@/assets/healthy-lifestyle.jpg";
import { openAppStore } from "@/utils/downloadUtils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.3 });
  const { ref: buttonsRef, isVisible: buttonsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="py-12 sm:py-20 bg-nutria-beige-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-80 h-80 bg-nutria-green/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-nutria-brown/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div 
            ref={imageRef}
            className={`order-2 lg:order-1 transition-all duration-1000 ${
              imageVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl">
              {/* Background image integrated - creates depth */}
              <div 
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage: `url(${healthyLifestyle})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(2px) saturate(0.8)'
                }}
              ></div>
              
              {/* Main image - stable and elegant */}
              <img 
                src={healthyLifestyle} 
                alt="Personas disfrutando de comida saludable y natural en un ambiente cálido"
                className="relative z-10 w-full h-auto object-cover opacity-90"
              />
              
              {/* Professional layered overlay with original nutria colors */}
              <div className="absolute inset-0 bg-nutria-green/10 rounded-2xl"></div>
              <div className="absolute inset-0 bg-nutria-beige-light/15 rounded-2xl"></div>
            </div>
          </div>
          
          {/* CTA Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h2 
                ref={titleRef}
                className={`text-2xl sm:text-3xl md:text-4xl font-bold text-foreground transition-all duration-1000 ${
                  titleVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`}
              >
                Comienza tu viaje hacia una{" "}
                <span className="text-nutria-green inline-block">alimentación consciente</span>
              </h2>
              <p 
                ref={descRef}
                className={`text-lg sm:text-xl text-muted-foreground transition-all duration-1000 delay-200 ${
                  descVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`}
              >
                Únete a miles de personas que ya descubrieron que comer sano 
                puede ser fácil, rico y para todos.
              </p>
            </div>
            
            <div 
              ref={buttonsRef}
              className={`space-y-6 transition-all duration-1000 delay-400 ${
                buttonsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <Button 
                variant="premium" 
                size="xl" 
                className="w-full sm:w-auto button-shine hover-glow transform transition-all duration-300 hover:scale-105 animate-gradient"
                onClick={() => openAppStore('smart')}
              >
                <Download className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                Descarga nutrIA gratis
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group hover-lift"
                  onClick={() => openAppStore('ios')}
                >
                  <Apple className="mr-3 h-5 w-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  App Store
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group hover-lift"
                  onClick={() => openAppStore('android')}
                >
                  <Smartphone className="mr-3 h-5 w-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  Google Play
                </Button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-3 text-sm text-muted-foreground/80 animate-fadeIn delay-600">
                <span className="flex items-center gap-2 hover-bounce">
                                        <span className="w-2 h-2 bg-nutria-green rounded-full animate-pulse"></span>
                  iOS y Android
                </span>
                <span className="w-1 h-1 bg-muted-foreground/50 rounded-full"></span>
                <span className="flex items-center gap-2 hover-bounce">
                  <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-200"></span>
                  Gratis para siempre
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;