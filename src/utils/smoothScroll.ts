import { useState, useEffect } from 'react';

/**
 * Utilidad para scroll suave mejorado con animaciones personalizadas
 */

interface SmoothScrollOptions {
  duration?: number;
  offset?: number;
  easing?: (t: number) => number;
}

// Funciones de easing personalizadas
const easingFunctions = {
  easeInOutCubic: (t: number): number => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeOutQuart: (t: number): number => 1 - (--t) * t * t * t,
  easeInOutQuint: (t: number): number => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t,
};

/**
 * Scroll suave hacia un elemento con animación personalizada
 */
export const smoothScrollToElement = (
  elementId: string, 
  options: SmoothScrollOptions = {}
): void => {
  const {
    duration = 1200,
    offset = 80, // Compensar header fijo
    easing = easingFunctions.easeInOutCubic
  } = options;

  const targetElement = document.getElementById(elementId);
  
  if (!targetElement) {
    console.warn(`Element with id "${elementId}" not found`);
    return;
  }

  const startPosition = window.pageYOffset;
  const targetPosition = targetElement.offsetTop - offset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const ease = easing(progress);
    const currentPosition = startPosition + (distance * ease);
    
    window.scrollTo(0, currentPosition);
    
    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

/**
 * Hook para manejar navegación suave
 */
export const useSmoothNavigation = () => {
  const navigateToSection = (sectionId: string, options?: SmoothScrollOptions) => {
    // Remover el # si viene incluido
    const cleanId = sectionId.replace('#', '');
    
    smoothScrollToElement(cleanId, {
      duration: 1000,
      offset: 100,
      easing: easingFunctions.easeInOutCubic,
      ...options
    });
  };

  return { navigateToSection };
};

/**
 * Función para convertir enlaces anchor en scroll suave
 */
export const initializeSmoothScroll = (): void => {
  // Prevenir comportamiento por defecto de enlaces anchor
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
    
    if (link && link.getAttribute('href')?.startsWith('#')) {
      e.preventDefault();
      const sectionId = link.getAttribute('href')?.substring(1);
      
      if (sectionId) {
        smoothScrollToElement(sectionId, {
          duration: 1200,
          offset: 100,
          easing: easingFunctions.easeInOutCubic
        });
      }
    }
  });
};

/**
 * Detectar sección activa durante el scroll
 */
export const useActiveSection = (sections: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return activeSection;
};