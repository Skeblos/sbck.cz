function Skills() {
    try {
        const [isVisible, setIsVisible] = React.useState(false);
        
        React.useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                },
                { threshold: 0.1 }
            );

            const element = document.getElementById('skills');
            if (element) {
                observer.observe(element);
            }

            return () => {
                if (element) {
                    observer.unobserve(element);
                }
            };
        }, []);

        const skills = [
            { name: "AWS", level: 90 },
            { name: "Docker", level: 95 },
            { name: "Kubernetes", level: 85 },
            { name: "Linux", level: 90 },
            { name: "Terraform", level: 80 },
            { name: "Ansible", level: 85 },
            { name: "Python", level: 75 },
            { name: "Git", level: 90 }
        ];

        return (
            <section data-name="skills" id="skills" className="py-20 bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 data-name="skills-title" className="text-3xl md:text-4xl font-bold mb-4 text-white gradient-text">
                            Technické Dovednosti
                        </h2>
                        <p data-name="skills-subtitle" className="text-gray-400 max-w-2xl mx-auto">
                            Specializované znalosti v oblasti DevOps a systémové administrace
                        </p>
                    </div>

                    <div data-name="skills-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <div 
                                key={index} 
                                data-name={`skill-item-${index}`} 
                                className={`skill-item p-4 rounded-lg card-reveal ${isVisible ? 'visible' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex justify-between mb-2">
                                    <span className="text-white">{skill.name}</span>
                                    <span className="text-gray-400">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div 
                                        className="gradient-bg rounded-full h-2 progress-bar"
                                        style={{ 
                                            width: isVisible ? `${skill.level}%` : '0%',
                                            transition: 'width 1s ease-out'
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Skills component error:', error);
        reportError(error);
        return null;
    }
}
