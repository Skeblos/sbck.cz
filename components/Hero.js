import React from 'react';

// Assuming you have Tailwind CSS configured and potentially custom CSS for:
// - tech-pattern (background)
// - gradient-text
// - gradient-bg
// - hover-scale
// - hover-glow
// - hover-float
// Also assuming Font Awesome is loaded for icons like <i className="fas fa-rocket mr-2"></i>

// Mock reportError function for the example
const reportError = (error) => {
  console.error("Reporting error:", error);
};

function Hero() {
  try {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
      // Add a slight delay before starting the transition for better effect
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100); // 100ms delay

      // Cleanup timer on unmount
      return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
      <section data-name="hero" className="tech-pattern min-h-screen flex items-center relative overflow-hidden text-white"> {/* Added text-white for base text color */}
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div> {/* Adjusted opacity */}
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center">

            {/* Subtitle Span */}
            <div
              className={`transition-opacity duration-1000 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="text-green-500 text-lg font-medium mb-4 block">
                DevOps & Systémová Administrace
              </span>
            </div>

            {/* Main Heading */}
            <h1
              data-name="hero-title"
              className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5' // Start slightly down
              }`}
              style={{ transitionDelay: '200ms' }} // Stagger animation start
            >
              Automatizace
              <span className="gradient-text block mt-2">
                pro Vaši Infrastrukturu
              </span>
            </h1>

            {/* Paragraph */}
            <p
              data-name="hero-subtitle"
              className={`text-xl text-gray-300 mb-12 max-w-2xl mx-auto transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '400ms' }} // Stagger animation start
            >
              Specializuji se na moderní DevOps řešení, cloud infrastrukturu a automatizaci pro
              zvýšení efektivity vašeho IT prostředí.
            </p>

            {/* Call to Action Buttons */}
            <div
              data-name="hero-cta"
              className={`flex justify-center space-x-4 sm:space-x-6 transition-all duration-1000 ease-out ${ // Added sm:space-x-6 for responsiveness
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '600ms' }} // Stagger animation start
            >
              <a
                href="#contact"
                className="gradient-bg text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover-scale hover-glow transition-transform transform" // Adjusted padding/text size
              >
                {/* Consider using SVG or a React icon library instead of Font Awesome for better consistency */}
                <i className="fas fa-rocket mr-2"></i>
                Začít Projekt
              </a>
              <a
                href="#projects"
                className="bg-gray-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-gray-700 hover-float border border-gray-700 transition-all transform" // Adjusted padding/text size
              >
                <i className="fas fa-code mr-2"></i>
                Portfolio
              </a>
            </div>

            {/* Stats Section */}
            <div
              data-name="hero-stats"
              className={`mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 transition-all duration-1000 ease-out ${ // Adjusted margin/gap
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '800ms' }} // Stagger animation start
            >
              {/* Stat Item */}
              <div className="text-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg hover-float transition-transform transform"> {/* Added slight transparency + blur */}
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-gray-400 mt-1 text-sm sm:text-base">Let Zkušeností</div> {/* Adjusted text size */}
              </div>
               {/* Stat Item */}
              <div className="text-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg hover-float transition-transform transform">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-gray-400 mt-1 text-sm sm:text-base">Projektů</div>
              </div>
               {/* Stat Item */}
              <div className="text-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg hover-float transition-transform transform">
                <div className="text-3xl font-bold gradient-text">99%</div>
                <div className="text-gray-400 mt-1 text-sm sm:text-base">Spokojenost</div>
              </div>
               {/* Stat Item */}
              <div className="text-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg hover-float transition-transform transform">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-gray-400 mt-1 text-sm sm:text-base">Podpora</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div> {/* Added pointer-events-none */}
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    // Ensure reportError is defined or handled appropriately in your actual application
    if (typeof reportError === 'function') {
      reportError(error);
    }
    // Return a fallback UI or null
    return <div className="text-red-500 text-center p-10">Error loading Hero section.</div>;
  }
}

// Export the component if it's in its own file
// export default Hero;

// If this is part of a larger App component for preview:
function App() {
  // You might need to include Tailwind CSS via a CDN link if running this standalone
  // <script src="https://cdn.tailwindcss.com"></script>
  // Also, include Font Awesome if you are using the <i> tags
  // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

  // Add some basic CSS for the custom classes if needed for preview
  const customCSS = `
    .tech-pattern {
      background-color: #0a0a0a; /* Dark background */
      /* Add a subtle pattern or image if desired */
      background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0);
      background-size: 20px 20px;
    }
    .gradient-text {
      background: linear-gradient(to right, #34d399, #2dd4bf);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    .gradient-bg {
      background-image: linear-gradient(to right, #10b981, #06b6d4);
    }
    .hover-scale:hover {
      transform: scale(1.05);
    }
    .hover-glow:hover {
      box-shadow: 0 0 15px 5px rgba(45, 212, 191, 0.4); /* Teal glow */
    }
    .hover-float:hover {
      transform: translateY(-5px);
    }
  `;

  return (
    <>
      <style>{customCSS}</style>
      <Hero />
      {/* Add other sections of your page here */}
      <div id="contact" className="h-screen bg-gray-900 p-10 text-white">Contact Section Placeholder</div>
      <div id="projects" className="h-screen bg-gray-800 p-10 text-white">Projects Section Placeholder</div>
    </>
  );
}

export default App; // Export App for preview rendering
