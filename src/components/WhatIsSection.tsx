import { Camera, Mic, Heart } from "lucide-react";

const WhatIsSection = () => {
  return (
    <section id="que-es" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¿Qué es nutrIA?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            nutrIA es una app con inteligencia artificial que analiza lo que comes usando una foto, texto o audio. 
            El usuario puede seleccionar sus comidas favoritas para subirlas más rápido y compartir su perfil 
            con un nutricionista. Una forma simple y cálida de entender tu alimentación.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-nutria-green/10 rounded-2xl flex items-center justify-center mx-auto">
                <Camera className="w-8 h-8 text-nutria-green" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Foto</h3>
              <p className="text-muted-foreground">
                Toma una foto de tu comida y la IA la analizará al instante
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-nutria-brown/10 rounded-2xl flex items-center justify-center mx-auto">
                <Mic className="w-8 h-8 text-nutria-brown" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Audio</h3>
              <p className="text-muted-foreground">
                Describe lo que comiste con tu voz de forma natural
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-nutria-green-light/10 rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-nutria-green-light" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Favoritos</h3>
              <p className="text-muted-foreground">
                Guarda tus comidas favoritas para registrarlas más rápido
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;