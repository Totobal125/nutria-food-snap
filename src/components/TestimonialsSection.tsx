import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Madre de familia",
      content: "Desde que uso nutrIA, comer sano dejó de ser complicado. Mi familia ahora entiende mejor lo que come.",
      rating: 5
    },
    {
      name: "Dr. Carlos Ruiz",
      role: "Nutricionista",
      content: "El portal me permite hacer un seguimiento real de mis pacientes. Los análisis automáticos son increíbles.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "Trabajadora independiente",
      content: "Perfecto para mi ritmo de vida. Solo tomo una foto y ya sé si estoy comiendo bien. Sin complicaciones.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-nutria-beige-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-xl text-muted-foreground">
            Experiencias reales de quienes ya usan nutrIA
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-soft bg-card/70 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-nutria-brown">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;