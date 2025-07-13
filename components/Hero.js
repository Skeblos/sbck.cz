import React, { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouse = { x: width / 2, y: height / 2 };

    canvas.width = width;
    canvas.height = height;

    const gridSpacing = 40;
    const maxRadius = 4;
    const minRadius = 1;
    const influenceRadius = 150;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let y = 0; y < height; y += gridSpacing) {
        for (let x = 0; x < width; x += gridSpacing) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const radius = Math.max(
            minRadius,
            maxRadius - (distance / influenceRadius) * maxRadius
          );

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255,255,255,0.1)';
          ctx.fill();
        }
      }

      requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section data-name="hero" className="relative hero-section text-white-base">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      <div className="hero-overlay-container">
        <div className="hero-overlay overlay-opacity-60"></div>
      </div>

      <div className="hero-content-container relative z-10">
        <div className="text-center">
          <div className={`opacity-0-base ${isVisible ? 'fade-in' : ''}`}>
            <span className="hero-subtitle-accent">
              DevOps & Systémová Administrace
            </span>
          </div>

          <h1
            data-name="hero-title"
            className={`hero-title opacity-0-base ${isVisible ? 'fade-in' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            Automatizace
            <span className="gradient-text hero-title-sub">
              pro Vaši Infrastrukturu
            </span>
          </h1>

          <p
            data-name="hero-subtitle"
            className={`hero-description opacity-0-base ${isVisible ? 'slide-up' : ''}`}
            style={{ animationDelay: '0.4s' }}
          >
            Specializuji se na moderní DevOps řešení, cloud infrastrukturu a automatizaci pro
            zvýšení efektivity vašeho IT prostředí.
          </p>

          <div
            data-name="hero-cta"
            className={`hero-cta-container opacity-0-base ${isVisible ? 'slide-up' : ''}`}
            style={{ animationDelay: '0.6s' }}
          >
            <a href="#contact" className="cta-button gradient-bg hover-scale hover-glow">
              <i className="fas fa-rocket icon-prefix"></i>
              Začít Projekt
            </a>
            <a href="#projects" className="cta-button cta-button-secondary hover-float">
              <i className="fas fa-code icon-prefix"></i>
              Portfolio
            </a>
          </div>

          <div
            data-name="hero-stats"
            className={`hero-stats-grid opacity-0-base ${isVisible ? 'slide-up' : ''}`}
            style={{ animationDelay: '0.8s' }}
          >
            <div className="stat-card hover-float">
              <div className="stat-value gradient-text">5+</div>
              <div className="stat-label">Let Zkušeností</div>
            </div>
            <div className="stat-card hover-float">
              <div className="stat-value gradient-text">50+</div>
              <div className="stat-label">Projektů</div>
            </div>
            <div className="stat-card hover-float">
              <div className="stat-value gradient-text">99%</div>
              <div className="stat-label">Spokojenost</div>
            </div>
            <div className="stat-card hover-float">
              <div className="stat-value gradient-text">24/7</div>
              <div className="stat-label">Podpora</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom-fade"></div>
    </section>
  );
}
