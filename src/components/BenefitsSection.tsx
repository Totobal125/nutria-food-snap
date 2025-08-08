import { Brain, Shield, Smile, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation, useScrollAnimationList } from "@/hooks/useScrollAnimation";

const BenefitsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation({ threshold: 0.3 });
  const { setRef, visibleItems } = useScrollAnimationList(4, { threshold: 0.1 });

  const benefits = [
    {
      icon: Brain,
      title: "Aprende sobre tu alimentación",
      description: "Entiende realmente lo que comes sin complicaciones técnicas ni datos confusos",
      color: "text-nutria-accent",
      bgColor: "bg-nutria-gray-light"
    },
    {
      icon: Shield,
      title: "Sin reglas rígidas",
      description: "No hay restricciones estrictas. Come lo que te gusta mientras aprendes a hacerlo mejor",
      color: "text-nutria-green",
      bgColor: "bg-nutria-beige"
    },
    {
      icon: Smile,
      title: "Relación saludable con la comida",
      description: "Fomenta una conexión positiva y consciente con tus alimentos diarios",
      color: "text-nutria-brown",
      bgColor: "bg-nutria-beige-light"
    },
    {
      icon: Users,
      title: "Para toda la familia",
      description: "Una herramienta que toda la familia puede usar para comer mejor juntos",
      color: "text-nutria-green-dark",
      bgColor: "bg-nutria-beige"
    }
  ];

  return (
    <section id="beneficios" className="py-12 sm:py-20 bg-nutria-beige-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-nutria-green/5 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-nutria-brown/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16">
          <h2 
            ref={headerRef}
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 transition-all duration-1000 ${
              headerVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            Beneficios para <span className="text-nutria-green">ti</span>
          </h2>
          <p 
            ref={descRef}
            className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              descVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            Diseñado para personas que quieren comer mejor sin seguir dietas estrictas
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              ref={setRef(index)}
              className={`border-none shadow-soft bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-700 group cursor-pointer hover-lift ${
                visibleItems[index] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
              style={{ animationDelay: `${index * 150 + 400}ms` }}
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${benefit.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <benefit.icon className={`w-6 h-6 ${benefit.color} transition-all duration-300 group-hover:scale-125`} />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-nutria-green transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div 
          ref={quoteRef}
          className={`text-center mt-16 transition-all duration-1000 ${
            quoteVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-nutria-green mb-4 hover-bounce">
            "Comer sano es fácil, rico y para todos"
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground">
            Nuestra filosofía: alimentación consciente sin restricciones
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;