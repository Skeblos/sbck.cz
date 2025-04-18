function Tools() {
    try {
        const tools = [
            { name: "Docker", icon: "fab fa-docker" },
            { name: "AWS", icon: "fab fa-aws" },
            { name: "Linux", icon: "fab fa-linux" },
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "Python", icon: "fab fa-python" },
            { name: "Terminal", icon: "fas fa-terminal" }
        ];

        return (
            <section data-name="tools" id="tools" className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                            Technologie
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Nástroje, které používám pro vytváření robustních řešení
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {tools.map((tool, index) => (
                            <div key={index} className="text-center tool-icon">
                                <i className={`${tool.icon} text-5xl mb-4 text-green-600`}></i>
                                <p className="text-gray-400">{tool.name}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-gray-400 mb-8">
                            A mnoho dalších nástrojů pro komplexní DevOps řešení
                        </p>
                        <a href="#contact" className="gradient-bg text-white px-8 py-3 rounded-lg inline-block hover-scale">
                            Konzultace Zdarma
                        </a>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Tools component error:', error);
        reportError(error);
        return null;
    }
}
