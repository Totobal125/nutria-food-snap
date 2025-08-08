import { useState, useEffect } from "react";
import { Camera, Brain, BarChart3, Sparkles, ScanLine, Star, Clock, Users } from "lucide-react";

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: Camera,
      title: "Múltiples formas de captura",
      description: "Elige entre 6 métodos intuitivos para registrar tu comida de manera rápida y sencilla",
      color: "text-nutria-green",
      image: "/app-step-1-capture.jpg",
      features: ["Fotografía directa", "Escaneo de códigos", "Búsqueda en galería", "Descripción por texto", "Comando de voz", "Favoritos guardados"],
      highlight: "6 opciones disponibles",
      stats: "95% precisión"
    },
    {
      icon: ScanLine,
      title: "Captura instantánea",
      description: "Interfaz de cámara optimizada con IA para detectar automáticamente los alimentos",
      color: "text-nutria-green",
      image: "/app-step-2-camera.jpg",
      features: ["Enfoque automático", "Detección inteligente", "Captura optimizada", "Reconocimiento instantáneo"],
      highlight: "Un clic es suficiente",
      stats: "< 2 segundos"
    },
    {
      icon: Brain,
      title: "Análisis por IA avanzada",
      description: "Procesamiento inteligente que identifica ingredientes y calcula información nutricional completa",
      color: "text-purple-600",
      image: "/app-step-3-results.jpg",
      features: ["Reconocimiento de alimentos", "Cálculo nutricional", "Desglose detallado", "Análisis de porciones"],
      highlight: "Precisión profesional",
      stats: "98% exactitud"
    },
    {
      icon: BarChart3,
      title: "Dashboard inteligente",
      description: "Seguimiento completo de tu progreso nutricional con métricas avanzadas y recomendaciones personalizadas",
      color: "text-amber-600",
      image: "/app-step-4-dashboard.jpg",
      features: ["Métricas en tiempo real", "Progreso visual", "Historial detallado", "Recomendaciones IA"],
      highlight: "Control total",
      stats: "100% personalizado"
    }
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-nutria-green/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-nutria-brown/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
                      <div className="inline-flex items-center gap-2 bg-nutria-green/10 text-nutria-green px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Aplicación real en funcionamiento
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                          Así funciona <span className="text-nutria-green">nutrIA</span> 
            <br className="hidden sm:block" />
            <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-700">en tiempo real</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Descubre el proceso completo desde la captura hasta el análisis nutricional detallado. 
                          <span className="text-nutria-green font-semibold"> Tecnología real, resultados inmediatos.</span>
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start max-w-7xl mx-auto">
          
          {/* Phone Mockup Section */}
          <div className="flex-shrink-0 order-2 lg:order-1 w-full lg:w-auto flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-72 sm:w-80 md:w-96 lg:w-80 xl:w-96">
                <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="relative bg-black rounded-[2rem] p-1">
                    <div className="bg-white rounded-[1.8rem] overflow-hidden relative">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-30"></div>
                      
                      {/* Screen Content */}
                      <div className="aspect-[9/19.5] bg-gray-50 relative overflow-hidden">
                        <img 
                          src={steps[activeStep].image}
                          alt={`nutrIA App - ${steps[activeStep].title}`}
                          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                        />
                        
                        {/* Step Indicator */}
                        <div className="absolute top-8 right-4 z-20">
                          <div className="bg-nutria-green text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm flex items-center gap-2">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            Paso {activeStep + 1} de 4
                          </div>
                        </div>

                        {/* Feature Badge */}
                        <div className="absolute top-8 left-4 z-20">
                          <div className="bg-black/80 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                            {steps[activeStep].highlight}
                          </div>
                        </div>

                        {/* Stats Badge */}
                        <div className="absolute bottom-6 left-4 z-20">
                          <div className="bg-white/95 text-gray-800 px-3 py-2 rounded-xl text-xs font-semibold shadow-lg backdrop-blur-sm flex items-center gap-2">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            {steps[activeStep].stats}
                          </div>
                        </div>

                        {/* AI Processing Animation for step 3 */}
                        {activeStep === 2 && (
                          <div className="absolute inset-0 z-10">
                            <div className="absolute inset-0 bg-nutria-green/20 animate-pulse">
                              {/* Scanning lines */}
                              <div className="absolute top-1/4 left-0 w-full h-px bg-nutria-green animate-pulse shadow-lg"></div>
                              <div className="absolute top-2/4 left-0 w-full h-px bg-nutria-green animate-pulse delay-500 shadow-lg"></div>
                              <div className="absolute top-3/4 left-0 w-full h-px bg-nutria-green animate-pulse delay-1000 shadow-lg"></div>
                              
                              {/* AI Processing Indicator */}
                              <div className="absolute bottom-16 left-4 right-4">
                                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-white/50">
                                  <div className="flex items-center gap-3">
                                    <div className="relative">
                                      <Brain className="w-5 h-5 text-purple-600 animate-spin" />
                                      <div className="absolute inset-0 bg-purple-400 rounded-full blur animate-pulse"></div>
                                    </div>
                                    <div>
                                      <p className="font-bold text-gray-800 text-xs">IA Procesando</p>
                                      <p className="text-xs text-gray-600">Analizando nutrientes...</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                                            <div className="absolute -top-8 -right-8 w-16 h-16 bg-nutria-green/30 rounded-full blur-xl animate-pulse"></div>
                                            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-nutria-brown/30 rounded-full blur-xl animate-pulse delay-1000"></div>
                
                {/* Step Progress Indicator */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200">
                    {steps.map((step, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`relative transition-all duration-300 group ${
                          activeStep === index 
                            ? 'scale-125' 
                            : 'hover:scale-110 opacity-70'
                        }`}
                      >
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeStep === index 
                            ? 'bg-nutria-green shadow-lg' 
                            : 'bg-gray-300 group-hover:bg-gray-400'
                        }`}>
                          {activeStep === index && (
                            <div className="absolute inset-0 bg-nutria-green rounded-full animate-ping opacity-75"></div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps Content Section */}
          <div className="flex-1 order-1 lg:order-2 w-full max-w-2xl lg:max-w-none">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-700 cursor-pointer ${
                    activeStep === index 
                      ? 'bg-white shadow-2xl scale-105 border-2 border-nutria-green' 
                      : 'bg-white/80 backdrop-blur-sm hover:bg-white/95 shadow-lg hover:shadow-xl border border-gray-100'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-nutria-green"></div>
                  </div>
                  
                  <div className="relative p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      {/* Icon Container */}
                      <div className={`relative flex-shrink-0 transition-all duration-500 ${
                        activeStep === index ? 'scale-110' : 'group-hover:scale-105'
                      }`}>
                        <div className={`w-16 h-16 lg:w-18 lg:h-18 rounded-2xl shadow-xl flex items-center justify-center transition-all duration-500 ${
                          activeStep === index 
                            ? 'bg-white shadow-2xl' 
                            : 'bg-white shadow-lg group-hover:shadow-xl'
                        }`}>
                          <step.icon className={`w-8 h-8 lg:w-9 lg:h-9 transition-all duration-500 ${
                            activeStep === index ? step.color : 'text-gray-400 group-hover:text-gray-600'
                          }`} />
                        </div>
                        
                        {/* Step Number Badge */}
                        <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          activeStep === index
                            ? 'bg-nutria-green text-white shadow-lg'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {index + 1}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className={`text-lg lg:text-xl font-bold transition-all duration-500 ${
                            activeStep === index ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-800'
                          }`}>
                            {step.title}
                          </h3>
                          
                          {activeStep === index && (
                            <div className="flex items-center gap-2 bg-nutria-green/10 text-nutria-green px-3 py-1 rounded-full animate-fadeIn">
                              <div className="w-1.5 h-1.5 bg-nutria-green rounded-full animate-pulse"></div>
                              <span className="text-xs font-semibold">En vivo</span>
                            </div>
                          )}
                        </div>
                        
                        <p className={`text-sm lg:text-base leading-relaxed mb-4 transition-all duration-500 ${
                          activeStep === index 
                            ? 'text-gray-700' 
                            : 'text-gray-500 group-hover:text-gray-600'
                        }`}>
                          {step.description}
                        </p>
                        
                        {/* Features Grid */}
                        <div className={`transition-all duration-500 ${
                          activeStep === index ? 'opacity-100' : 'opacity-70 group-hover:opacity-90'
                        }`}>
                          <div className="grid grid-cols-2 gap-2">
                            {step.features.slice(0, 4).map((feature, idx) => (
                              <div
                                key={idx}
                                className={`flex items-center gap-2 text-xs transition-all duration-300 ${
                                  activeStep === index 
                                    ? 'text-gray-700 font-medium' 
                                    : 'text-gray-500'
                                }`}
                              >
                                <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                  activeStep === index ? step.color.replace('text-', 'bg-') : 'bg-gray-300'
                                }`}></div>
                                <span className="truncate">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Progress Bar */}
                        {activeStep === index && (
                          <div className="mt-4">
                            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-nutria-green rounded-full animate-pulse"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                <div className="flex items-center justify-center gap-2 mb-2">
                                        <Users className="w-4 h-4 text-nutria-green" />
                  <span className="text-2xl font-bold text-gray-900">50K+</span>
                </div>
                <p className="text-xs text-gray-600">Usuarios activos</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                <div className="flex items-center justify-center gap-2 mb-2">
                                        <Clock className="w-4 h-4 text-nutria-brown" />
                  <span className="text-2xl font-bold text-gray-900">&lt;3s</span>
                </div>
                <p className="text-xs text-gray-600">Tiempo promedio</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-2xl font-bold text-gray-900">98%</span>
                </div>
                <p className="text-xs text-gray-600">Precisión</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;