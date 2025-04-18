function Testimonials() {
    try {
        const testimonials = [
            {
                name: "Sarah Johnson",
                role: "CEO at TechCorp",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                quote: "SaaSFlow has completely transformed how we manage our operations. The automation features alone have saved us countless hours."
            },
            {
                name: "Michael Chen",
                role: "CTO at StartupX",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                quote: "The integration capabilities are incredible. We've been able to connect all our tools seamlessly."
            },
            {
                name: "Emily Rodriguez",
                role: "Product Manager",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                quote: "The analytics dashboard provides insights that have helped us make better business decisions."
            }
        ];

        return (
            <section data-name="testimonials" id="testimonials" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 data-name="testimonials-title" className="text-3xl md:text-4xl font-bold mb-4">
                            Trusted by Industry Leaders
                        </h2>
                        <p data-name="testimonials-subtitle" className="text-gray-600 max-w-2xl mx-auto">
                            See what our customers have to say about their experience with SaaSFlow.
                        </p>
                    </div>

                    <div data-name="testimonials-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} data-name={`testimonial-card-${index}`} className="bg-white p-6 rounded-xl shadow-md">
                                <div className="flex items-center mb-4">
                                    <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h3 className="font-semibold">{testimonial.name}</h3>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Testimonials component error:', error);
        reportError(error);
        return null;
    }
}
