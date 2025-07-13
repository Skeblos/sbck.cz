function Services() {
    try {
        const services = [
            {
                icon: "fa-cloud",
                title: "Cloud Infrastruktura",
                description: "AWS, Azure a Google Cloud platformy. Návrh a implementace škálovatelných řešení."
            },
            {
                icon: "fa-code-branch",
                title: "DevOps Automatizace",
                description: "CI/CD pipeline, kontejnerizace a orchestrace pomocí Kubernetes."
            },
            {
                icon: "fa-shield-alt",
                title: "Bezpečnost",
                description: "Implementace bezpečnostních best practices, monitoring a ochrana infrastruktury."
            },
            {
                icon: "fa-server",
                title: "Správa Systémů",
                description: "Linux administrace, monitoring, zálohování a disaster recovery."
            }
        ];

        return (
            <section data-name="services" id="services" className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 data-name="services-title" className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Moje Služby
                        </h2>
                        <p data-name="services-subtitle" className="text-gray-400 max-w-2xl mx-auto">
                            Komplexní řešení pro vaši IT infrastrukturu
                        </p>
                    </div>

                    <div data-name="services-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div key={index} data-name={`service-card-${index}`} className="service-card p-6 rounded-xl">
                                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                                    <i className={`fas ${service.icon} text-white text-xl`}></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                                <p className="text-gray-400">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Services component error:', error);
        reportError(error);
        return null;
    }
}
