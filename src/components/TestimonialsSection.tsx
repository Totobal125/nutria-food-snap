import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useScrollAnimation, useScrollAnimationList } from "@/hooks/useScrollAnimation";

const TestimonialsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.3 });
  const { setRef, visibleItems } = useScrollAnimationList<HTMLDivElement>(3, { threshold: 0.1 });

  const testimonials = [
    {
      name: "María González",
      role: "Madre de familia",
      content: "Desde que uso nutrIA, comer sano dejó de ser complicado. Mi familia ahora entiende mejor lo que come.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "Dr. Carlos Ruiz",
      role: "Nutricionista",
      content: "El portal me permite hacer un seguimiento real de mis pacientes. Los análisis automáticos son increíbles.",
      rating: 5,
      avatar: "CR"
    },
    {
      name: "Ana Martínez",
      role: "Trabajadora independiente",
      content: "Perfecto para mi ritmo de vida. Solo tomo una foto y ya sé si estoy comiendo bien. Sin complicaciones.",
      rating: 5,
      avatar: "AM"
    }
  ];

  return (
    <section id="testimonios" className="py-12 sm:py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-64 h-64 bg-nutria-brown/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-nutria-green/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
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
            Lo que dicen nuestros <span className="text-nutria-green">usuarios</span>
          </h2>
          <p 
            ref={descRef}
            className={`text-lg sm:text-xl text-muted-foreground transition-all duration-1000 delay-200 ${
              descVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            Experiencias reales de quienes ya usan nutrIA
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              ref={setRef(index)}
              className={`border-none shadow-soft bg-card/70 backdrop-blur-sm hover:shadow-xl transition-all duration-700 group cursor-pointer hover-lift relative ${
                visibleItems[index] 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: `${index * 200 + 400}ms` }}
            >
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-8 h-8 text-nutria-green" />
              </div>
              
              <CardContent className="p-6 sm:p-8 text-center relative">
                {/* Avatar */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {testimonial.avatar}
                </div>
                
                {/* Stars */}
                <div className="flex justify-center mb-4 space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" 
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                
                {/* Quote content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic relative group-hover:text-gray-600 transition-colors duration-300">
                  "{testimonial.content}"
                </p>
                
                {/* Author info */}
                <div className="border-t border-gray-200 pt-4 group-hover:border-nutria-green/30 transition-colors duration-300">
                  <h4 className="font-semibold text-foreground group-hover:text-nutria-green transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-nutria-brown group-hover:text-nutria-brown/80 transition-colors duration-300">
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