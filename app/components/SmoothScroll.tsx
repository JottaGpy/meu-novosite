"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

function AnchorIntercept() {
  const lenis = useLenis();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest("a");
      
      if (target && target.hash) {
        const hash = target.hash;
        
        if (target.origin === window.location.origin && hash) {
          e.preventDefault();
          
          lenis?.scrollTo(hash, {
            duration: 2.2, // Aumentamos o tempo de viagem para o freio ser mais perceptível
            // Esta é a fórmula mágica (Ease Out Expo) que faz ele frear suavemente no final:
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
          });
        }
      }
    };

    document.documentElement.addEventListener("click", handleClick);
    return () => document.documentElement.removeEventListener("click", handleClick);
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    // Baixamos o "lerp" de 0.05 para 0.03, isso deixa a rodinha do mouse muito mais macia e com inércia prolongada
    <ReactLenis root options={{ lerp: 0.03, smoothWheel: true }}>
      <AnchorIntercept />
      {children}
    </ReactLenis>
  );
}