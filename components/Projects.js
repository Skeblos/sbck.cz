function Projects() {
    try {
        const projects = [
            {
                title: "Cloud Migrace",
                description: "Migrace on-premise infrastruktury do AWS cloudu pro finanční společnost.",
                tags: ["AWS", "Terraform", "Docker"]
            },
            {
                title: "Kubernetes Cluster",
                description: "Implementace a správa Kubernetes clusteru pro škálovatelnou mikroslužební architekturu.",
                tags: ["Kubernetes", "Docker", "CI/CD"]
            },
            {
                title: "Monitoring Systém",
                description: "Nasazení komplexního monitorovacího řešení pomocí Prometheus a Grafana.",
                tags: ["Monitoring", "DevOps", "Python"]
            }
        ];

        return (
            <section data-name="projects" id="projects" className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 data-name="projects-title" className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Vybrané Projekty
                        </h2>
                        <p data-name="projects-subtitle" className="text-gray-400 max-w-2xl mx-auto">
                            Ukázky úspěšně realizovaných projektů
                        </p>
                    </div>

                    <div data-name="projects-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} data-name={`project-card-${index}`} className="service-card p-6 rounded-xl">
                                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span 
                                            key={tagIndex}
                                            className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Projects component error:', error);
        reportError(error);
        return null;
    }
}
