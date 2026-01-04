'use client';

/**
 * Starfield Component
 * Subtle twinkling stars background for mystical atmosphere
 */

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  factor: number;
  increment: number;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Set canvas size to cover full page height (no DPR scaling to avoid distribution issues)
    const resize = () => {
      const fullHeight = Math.max(document.documentElement.scrollHeight, window.innerHeight);
      canvas.width = window.innerWidth;
      canvas.height = fullHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create stars with simple even distribution
    const stars: Star[] = [];
    const numStars = 300; // More stars for better visibility

    for (let i = 0; i < numStars; i++) {
      // Simple weighted distribution for size - most stars small
      const sizeRandom = Math.pow(Math.random(), 2);
      const starSize = 0.8 + sizeRandom * 1.2; // 0.8 to 2.0px for visibility
      
      stars.push({
        x: Math.random() * canvas.width, // Pure random - evenly distributed
        y: Math.random() * canvas.height, // Pure random - evenly distributed
        size: starSize,
        opacity: 0.3 + Math.random() * 0.4, // 0.3 to 0.7 for better visibility
        factor: 1,
        increment: 0.002 + Math.random() * 0.004, // Slow twinkle
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Update opacity for twinkling
        if (star.opacity > 0.5) {
          star.factor = -1;
        } else if (star.opacity <= 0.05) {
          star.factor = 1;
        }
        star.opacity += star.increment * star.factor;

        // Draw star with enhanced glow effect
        context.save();
        
        // Outer glow layer
        context.beginPath();
        context.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        const gradient = context.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
        gradient.addColorStop(0, `rgba(212, 175, 55, ${star.opacity * 0.3})`);
        gradient.addColorStop(0.5, `rgba(212, 175, 55, ${star.opacity * 0.1})`);
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
        context.fillStyle = gradient;
        context.fill();
        
        // Core star
        context.beginPath();
        context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 245, 200, ${star.opacity})`; // Brighter center
        context.shadowBlur = 4;
        context.shadowColor = `rgba(212, 175, 55, ${star.opacity})`;
        context.fill();
        
        context.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
