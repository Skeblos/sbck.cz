import React from "react";

function Hero() {
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = React.useState(false);
  const dotCount = 50;
  const dots = Array.from({ length: dotCount });

  // Track mouse position over the hero section
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  React.useEffect(() => {
    // Set visibility to true after component mounts to trigger animation
    // Added a small delay to ensure initial styles apply before animation starts
     const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50); // 50ms delay, adjust if needed

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <section
      data-name="hero"
      className="tech-pattern hero-section text-white-base"
      onMouseMove={handleMouseMove}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Dots background */}
      <div className="hero-dots-bg" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {dots.map((_, i) => {
          // Arrange dots in a grid
          const cols = 10;
          const size = 8;
          const gap = 40;
          const x = (i % cols) * gap + gap;
          const y = Math.floor(i / cols) * gap + gap;

          // Calculate distance to mouse
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Make dot react: scale up and change color when mouse is near
          const scale = dist < 80 ? 1.5 : 1;
          const color = dist < 80 ? "#00eaff" : "#fff";
          const opacity = dist < 80 ? 1 : 0.6;

          return (
            <span
              key={i}
              style={{
                position: "absolute",
                left: x,
                top: y,
                width: size,
                height: size,
                borderRadius: "50%",
                background: color,
                opacity,
                transform: `scale(${scale})`,
                transition: "all 0.2s",
                pointerEvents: "none",
              }}
            />
          );
        })}
      </div>

      {/* Added base text color class 'text-white-base' (defined in CSS) */}
      <div className="hero-overlay-container">
        <div className="hero-overlay overlay-opacity-60"></div>
      </div>

      {/* Content Container - Using layout classes (defined in CSS or Tailwind) */}
      <div className="hero-content-container">
        <div className="text-center"> {/* Assumes text-center is available */}

          {/* Subtitle Span - Fade In */}
          {/* Initial opacity is set by 'opacity-0-base' class */}
          <div className={`opacity-0-base ${isVisible ? 'fade-in' : ''}`}>
            {/* Styling via CSS classes */}
            <span className="hero-subtitle-accent">
              DevOps & Systémová Administrace
            </span>
          </div>

          {/* Main Heading - Fade In (with delay) */}
          <h1
            data-name="hero-title"
            // Initial opacity set by 'opacity-0-base', animation via 'fade-in'
            className={`hero-title opacity-0-base ${isVisible ? 'fade-in' : ''}`}
            style={{ animationDelay: '0.2s' }} // Animation delay
          >
            Automatizace
            {/* Gradient text via CSS class */}
            <span className="gradient-text hero-title-sub">
              pro Vaši Infrastrukturu
            </span>
          </h1>

          {/* Paragraph - Slide Up (with delay) */}
          <p
            data-name="hero-subtitle"
             // Initial opacity set by 'opacity-0-base', animation via 'slide-up'
            className={`hero-description opacity-0-base ${isVisible ? 'slide-up' : ''}`}
            style={{ animationDelay: '0.4s' }} // Animation delay
          >
            Specializuji se na moderní DevOps řešení, cloud infrastrukturu a automatizaci pro
            zvýšení efektivity vašeho IT prostředí.
          </p>

          {/* Call to Action Buttons - Slide Up (with delay) */}
          <div
            data-name="hero-cta"
            // Initial opacity set by 'opacity-0-base', animation via 'slide-up'
            // Layout via CSS class 'hero-cta-container'
            className={`hero-cta-container opacity-0-base ${isVisible ? 'slide-up' : ''}`}
            style={{ animationDelay: '0.6s' }} // Animation delay
          >
            {/* Styling and hover effects via CSS classes */}
            <a href="#contact" className="cta-button gradient-bg hover-scale hover-glow">
              <i className="fas fa-rocket icon-prefix"></i> {/* Assuming Font Awesome */}
              Začít Projekt
            </a>
            {/* Styling and hover effects via CSS classes */}
            <a href="#projects" className="cta-button cta-button-secondary hover-float">
              <i className="fas fa-code icon-prefix"></i> {/* Assuming Font Awesome */}
              Portfolio
            </a>
          </div>

          {/* Stats Section - Slide Up (with delay) */}
          <div
            data-name="hero-stats"
            // Initial opacity set by 'opacity-0-base', animation via 'slide-up'
            // Layout via CSS class 'hero-stats-grid'
            className={`hero-stats-grid opacity-0-base ${isVisible ? 'slide-up' : ''}`}
            style={{ animationDelay: '0.8s' }} // Animation delay
          >
            {/* Stat Item - Styling and hover via CSS classes */}
            <div className="stat-card hover-float">
              <div className="stat-value gradient-text">5+</div>
              <div className="stat-label">Let Zkušeností</div>
            </div>
             {/* Stat Item */}
            <div className="stat-card hover-float">
              <div className="stat-value gradient-text">50+</div>
              <div className="stat-label">Projektů</div>
            </div>
             {/* Stat Item */}
            <div className="stat-card hover-float">
              <div className="stat-value gradient-text">99%</div>
              <div className="stat-label">Spokojenost</div>
            </div>
             {/* Stat Item */}
            <div className="stat-card hover-float">
              <div className="stat-value gradient-text">24/7</div>
              <div className="stat-label">Podpora</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade - Styling via CSS classes */}
      <div className="hero-bottom-fade"></div>
    </section>
  );
}

export default Hero;