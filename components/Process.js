function Process() {
    try {
        const steps = [
            {
                icon: "fa-search",
                title: "Analýza",
                description: "Důkladná analýza vašich potřeb a současné infrastruktury"
            },
            {
                icon: "fa-sitemap",
                title: "Návrh",
                description: "Vytvoření optimálního řešení pro vaše specifické požadavky"
            },
            {
                icon: "fa-code",
                title: "Implementace",
                description: "Realizace řešení s důrazem na bezpečnost a efektivitu"
            },
            {
                icon: "fa-chart-line",
                title: "Monitoring",
                description: "Kontinuální sledování a optimalizace výkonu"
            }
        ];

        return (
            <section data-name="process" id="process" className="py-20 bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                            Jak Pracuji
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Systematický přístup k vašim IT projektům
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="process-card p-6 rounded-lg hover-float">
                                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                                    <i className={`fas ${step.icon} text-white text-xl`}></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 terminal-window">
                        <div className="terminal-header">
                            <div className="terminal-button terminal-close"></div>
                            <div className="terminal-button terminal-minimize"></div>
                            <div className="terminal-button terminal-maximize"></div>
                        </div>
                        <div className="terminal-content text-green-500">
                            <p className="terminal-line">$ initializing project setup...</p>
                            <p className="terminal-line">$ running system analysis...</p>
                            <p className="terminal-line">$ deploying infrastructure...</p>
                            <p className="terminal-line cursor">$ optimization complete</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Process component error:', error);
        reportError(error);
        return null;
    }
}
