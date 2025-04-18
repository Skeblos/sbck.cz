function Features() {
    try {
        const features = [
            {
                icon: "fa-chart-line",
                title: "Advanced Analytics",
                description: "Get deep insights into your business performance with real-time analytics and custom reports."
            },
            {
                icon: "fa-bolt",
                title: "Automation",
                description: "Automate repetitive tasks and workflows to save time and reduce human error."
            },
            {
                icon: "fa-users",
                title: "Team Collaboration",
                description: "Work seamlessly with your team through shared workspaces and real-time updates."
            },
            {
                icon: "fa-shield-alt",
                title: "Enterprise Security",
                description: "Keep your data safe with enterprise-grade security and compliance features."
            },
            {
                icon: "fa-code",
                title: "API Integration",
                description: "Connect with your favorite tools through our robust API and webhooks."
            },
            {
                icon: "fa-mobile-alt",
                title: "Mobile Ready",
                description: "Access your workspace from anywhere with our mobile-responsive platform."
            }
        ];

        return (
            <section data-name="features" id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 data-name="features-title" className="text-3xl md:text-4xl font-bold mb-4">
                            Powerful Features for Your Business
                        </h2>
                        <p data-name="features-subtitle" className="text-gray-600 max-w-2xl mx-auto">
                            Everything you need to manage and grow your business in one powerful platform.
                        </p>
                    </div>

                    <div data-name="features-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} data-name={`feature-card-${index}`} className="feature-card p-6 rounded-xl border border-gray-200 hover:shadow-lg">
                                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                                    <i className={`fas ${feature.icon} text-white text-xl`}></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features component error:', error);
        reportError(error);
        return null;
    }
}
