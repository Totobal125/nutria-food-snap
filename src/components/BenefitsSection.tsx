import { Brain, Shield, Smile, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Aprende sobre tu alimentación",
      description: "Entiende realmente lo que comes sin complicaciones técnicas ni datos confusos"
    },
    {
      icon: Shield,
      title: "Sin reglas rígidas",
      description: "No hay restricciones estrictas. Come lo que te gusta mientras aprendes a hacerlo mejor"
    },
    {
      icon: Smile,
      title: "Relación saludable con la comida",
      description: "Fomenta una conexión positiva y consciente con tus alimentos diarios"
    },
    {
      icon: Users,
      title: "Para toda la familia",
      description: "Una herramienta que toda la familia puede usar para comer mejor juntos"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-nutria-beige-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Beneficios para ti
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Diseñado para personas que quieren comer mejor sin seguir dietas estrictas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-soft bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-nutria-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-nutria-green" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-nutria-green mb-4">
            "Comer sano es fácil, rico y para todos"
          </h3>
          <p className="text-lg text-muted-foreground">
            Nuestra filosofía: alimentación consciente sin restricciones
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;