import { Camera, Mic, Heart } from "lucide-react";
import { useScrollAnimation, useScrollAnimationList } from "@/hooks/useScrollAnimation";

const WhatIsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.3 });
  const { setRef, visibleItems } = useScrollAnimationList<HTMLDivElement>(3, { threshold: 0.2 });

  return (
    <section id="que-es" className="py-12 sm:py-20 bg-nutria-gray-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-nutria-green/8 rounded-full blur-2xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-nutria-brown/8 rounded-full blur-2xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 
            ref={headerRef}
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 transition-all duration-1000 ${
              headerVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            ¿Qué es <span className="text-nutria-green">nutrIA</span>?
          </h2>
          
          <p 
            ref={descRef}
            className={`text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed transition-all duration-1000 delay-200 ${
              descVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            nutrIA es una app con inteligencia artificial que analiza lo que comes usando una foto, texto o audio. 
            El usuario puede seleccionar sus comidas favoritas para subirlas más rápido y compartir su perfil 
            con un nutricionista. Una forma simple y cálida de entender tu alimentación.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Camera,
                title: "Foto",
                description: "Toma una foto de tu comida y la IA la analizará al instante",
                color: "text-nutria-green",
                bgColor: "bg-nutria-green/10",
                hoverColor: "hover:bg-nutria-green/20"
              },
              {
                icon: Mic,
                title: "Audio",
                description: "Describe lo que comiste con tu voz de forma natural",
                color: "text-nutria-brown",
                bgColor: "bg-nutria-brown/10",
                hoverColor: "hover:bg-nutria-brown/20"
              },
              {
                icon: Heart,
                title: "Favoritos",
                description: "Guarda tus comidas favoritas para registrarlas más rápido",
                color: "text-nutria-green-light",
                bgColor: "bg-nutria-green-light/10",
                hoverColor: "hover:bg-nutria-green-light/20"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                ref={setRef(index)}
                className={`text-center space-y-4 group cursor-pointer transition-all duration-1000 ${
                  visibleItems[index] 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                }`}
                style={{ animationDelay: `${index * 200 + 400}ms` }}
              >
                <div className={`w-16 h-16 ${feature.bgColor} ${feature.hoverColor} rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 hover-lift`}>
                  <feature.icon className={`w-8 h-8 ${feature.color} transition-all duration-300 group-hover:scale-125`} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-nutria-green transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;