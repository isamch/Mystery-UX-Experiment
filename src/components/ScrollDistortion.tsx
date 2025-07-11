import React, { useEffect, useRef } from 'react';

interface ScrollDistortionProps {
  scrollY: number;
}

export const ScrollDistortion: React.FC<ScrollDistortionProps> = ({ scrollY }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create distortion effect based on scroll
      const distortionIntensity = Math.min(scrollY / 1000, 1);
      const time = Date.now() * 0.001;

      // Draw multiple layers for depth
      for (let layer = 0; layer < 3; layer++) {
        const layerOpacity = 0.1 - layer * 0.02;
        const layerSpeed = 1 + layer * 0.5;
        
        ctx.save();
        ctx.globalAlpha = layerOpacity;
        ctx.strokeStyle = `hsl(${180 + layer * 60}, 70%, 60%)`;
        ctx.lineWidth = 1;

        // Create wave pattern
        for (let x = 0; x < canvas.width; x += 20) {
          const y = canvas.height / 2 + 
            Math.sin(x * 0.01 + time * layerSpeed) * 50 * distortionIntensity +
            Math.sin(x * 0.005 + time * layerSpeed * 0.7) * 30 * distortionIntensity;

          if (x === 0) {
            ctx.beginPath();
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
        ctx.restore();
      }

      // Add floating particles
      for (let i = 0; i < 20; i++) {
        const x = (Math.sin(time * 0.5 + i) + 1) * canvas.width / 2;
        const y = (Math.cos(time * 0.3 + i * 0.5) + 1) * canvas.height / 2;
        const size = Math.sin(time + i) * 2 + 3;
        
        ctx.save();
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = `hsl(${200 + i * 10}, 70%, 60%)`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Add matrix-style characters
      if (distortionIntensity > 0.3) {
        ctx.save();
        ctx.globalAlpha = 0.1 * distortionIntensity;
        ctx.fillStyle = '#00ffff';
        ctx.font = '12px monospace';
        
        for (let i = 0; i < 50; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const char = String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96));
          
          ctx.fillText(char, x, y);
        }
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [scrollY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          mixBlendMode: 'screen',
          opacity: Math.min(scrollY / 500, 0.8)
        }}
      />
      
      {/* Additional visual effects */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent"
        style={{
          opacity: Math.min(scrollY / 1000, 0.3)
        }}
      />
      
      {/* Energy field effect */}
      <div 
        className="absolute inset-0 rounded-full border border-cyan-400/20 animate-pulse"
        style={{
          transform: `scale(${1 + Math.min(scrollY / 2000, 0.5)})`,
          opacity: Math.min(scrollY / 1000, 0.2)
        }}
      />
    </div>
  );
};