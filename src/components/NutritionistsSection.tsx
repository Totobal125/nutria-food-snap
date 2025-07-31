import { Button } from "@/components/ui/button";
import { BarChart3, Eye, Clock, TrendingUp } from "lucide-react";
import nutritionistDashboard from "@/assets/nutritionist-dashboard.jpg";

const NutritionistsSection = () => {
  const features = [
    {
      icon: Eye,
      title: "Visión en tiempo real",
      description: "Ve lo que comen tus pacientes al momento"
    },
    {
      icon: BarChart3,
      title: "Análisis automáticos",
      description: "Gráficos y métricas generadas por IA"
    },
    {
      icon: Clock,
      title: "Seguimiento continuo",
      description: "Historial completo de alimentación"
    },
    {
      icon: TrendingUp,
      title: "Insights inteligentes",
      description: "Patrones y tendencias alimentarias"
    }
  ];

  return (
    <section id="nutricionistas" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Portal exclusivo para{" "}
                <span className="text-nutria-brown">nutricionistas</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Accede a <strong>portal.nutria.dev</strong> y ve en tiempo real lo que comen tus pacientes, 
                junto con análisis automáticos y gráficos generados por inteligencia artificial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-nutria-brown/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-nutria-brown" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <Button variant="warm" size="lg">
                Acceder al Portal
              </Button>
            </div>
          </div>
          
          {/* Dashboard Image */}
          <div className="relative">
            <img 
              src={nutritionistDashboard} 
              alt="Portal de nutricionistas con dashboard de análisis de pacientes en tiempo real"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nutria-brown/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionistsSection;