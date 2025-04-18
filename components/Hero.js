function Hero() {
  try {
      const [isVisible, setIsVisible] = React.useState(false);

      React.useEffect(() => {
          setIsVisible(true);
      }, []);

      return (
          <section data-name="hero" className="tech-pattern min-h-screen flex items-center relative overflow-hidden">
              <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
              </div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                  <div className="text-center">
                      <div className={`opacity-0 ${isVisible ? 'fade-in' : ''}`}>
                          <span className="text-green-500 text-lg font-medium mb-4 block">
                              DevOps & Systémová Administrace
                          </span>
                      </div>
                      
                      <h1 data-name="hero-title" 
                          className={`text-5xl md:text-7xl font-bold mb-6 opacity-0 ${
                              isVisible ? 'fade-in' : ''
                          }`}
                          style={{ animationDelay: '0.2s' }}
                      >
                          Automatizace
                          <span className="gradient-text block mt-2">
                              pro Vaši Infrastrukturu
                          </span>
                      </h1>
                      
                      <p data-name="hero-subtitle" 
                          className={`text-xl text-gray-300 mb-12 max-w-2xl mx-auto opacity-0 ${
                              isVisible ? 'slide-up' : ''
                          }`}
                          style={{ animationDelay: '0.4s' }}
                      >
                          Specializuji se na moderní DevOps řešení, cloud infrastrukturu a automatizaci pro 
                          zvýšení efektivity vašeho IT prostředí.
                      </p>
                      
                      <div data-name="hero-cta" 
                          className={`flex justify-center space-x-6 opacity-0 ${
                              isVisible ? 'slide-up' : ''
                          }`}
                          style={{ animationDelay: '0.6s' }}
                      >
                          <a href="#contact" 
                              className="gradient-bg text-white px-8 py-4 rounded-lg text-lg font-medium hover-scale hover-glow"
                          >
                              <i className="fas fa-rocket mr-2"></i>
                              Začít Projekt
                          </a>
                          <a href="#projects" 
                              className="bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-700 hover-float border border-gray-700"
                          >
                              <i className="fas fa-code mr-2"></i>
                              Portfolio
                          </a>
                      </div>

                      <div data-name="hero-stats" 
                          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 ${
                              isVisible ? 'slide-up' : ''
                          }`}
                          style={{ animationDelay: '0.8s' }}
                      >
                          <div className="text-center p-4 bg-gray-800 rounded-lg hover-float">
                              <div className="text-3xl font-bold gradient-text">5+</div>
                              <div className="text-gray-400 mt-1">Let Zkušeností</div>
                          </div>
                          <div className="text-center p-4 bg-gray-800 rounded-lg hover-float">
                              <div className="text-3xl font-bold gradient-text">50+</div>
                              <div className="text-gray-400 mt-1">Projektů</div>
                          </div>
                          <div className="text-center p-4 bg-gray-800 rounded-lg hover-float">
                              <div className="text-3xl font-bold gradient-text">99%</div>
                              <div className="text-gray-400 mt-1">Spokojenost</div>
                          </div>
                          <div className="text-center p-4 bg-gray-800 rounded-lg hover-float">
                              <div className="text-3xl font-bold gradient-text">24/7</div>
                              <div className="text-gray-400 mt-1">Podpora</div>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
          </section>
      );
  } catch (error) {
      console.error('Hero component error:', error);
      reportError(error);
      return null;
  }
}
