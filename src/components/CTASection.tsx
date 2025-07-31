import { Button } from "@/components/ui/button";
import { Download, Apple, Smartphone } from "lucide-react";
import healthyLifestyle from "@/assets/healthy-lifestyle.jpg";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-nutria-green/5 to-nutria-brown/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img 
              src={healthyLifestyle} 
              alt="Personas disfrutando de comida saludable y natural en un ambiente cálido"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
          
          {/* CTA Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Comienza tu viaje hacia una{" "}
                <span className="text-nutria-green">alimentación consciente</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Únete a miles de personas que ya descubrieron que comer sano 
                puede ser fácil, rico y para todos.
              </p>
            </div>
            
            <div className="space-y-4">
              <Button variant="cta" size="xl" className="w-full sm:w-auto">
                <Download className="mr-2 h-5 w-5" />
                Descarga nutrIA gratis
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button variant="outline" size="lg">
                  <Apple className="mr-2 h-5 w-5" />
                  App Store
                </Button>
                <Button variant="outline" size="lg">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Google Play
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Disponible para iOS y Android • Gratis para siempre
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;