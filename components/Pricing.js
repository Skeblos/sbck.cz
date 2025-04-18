function Pricing() {
    try {
        const plans = [
            {
                name: "Starter",
                price: "49",
                features: [
                    "Up to 5 team members",
                    "Basic analytics",
                    "2 projects",
                    "Email support",
                    "Basic integrations"
                ]
            },
            {
                name: "Professional",
                price: "99",
                popular: true,
                features: [
                    "Up to 20 team members",
                    "Advanced analytics",
                    "Unlimited projects",
                    "Priority support",
                    "Advanced integrations",
                    "Custom workflows"
                ]
            },
            {
                name: "Enterprise",
                price: "249",
                features: [
                    "Unlimited team members",
                    "Custom analytics",
                    "Unlimited projects",
                    "24/7 support",
                    "Custom integrations",
                    "Dedicated account manager",
                    "Custom features"
                ]
            }
        ];

        return (
            <section data-name="pricing" id="pricing" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 data-name="pricing-title" className="text-3xl md:text-4xl font-bold mb-4">
                            Simple, Transparent Pricing
                        </h2>
                        <p data-name="pricing-subtitle" className="text-gray-600 max-w-2xl mx-auto">
                            Choose the perfect plan for your business needs
                        </p>
                    </div>

                    <div data-name="pricing-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div 
                                key={index}
                                data-name={`pricing-card-${index}`}
                                className={`rounded-xl p-8 ${
                                    plan.popular 
                                        ? 'gradient-bg text-white transform scale-105' 
                                        : 'bg-white border border-gray-200'
                                }`}
                            >
                                {plan.popular && (
                                    <span className="bg-white text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </span>
                                )}
                                <h3 className={`text-xl font-semibold mt-4 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                                    {plan.name}
                                </h3>
                                <div className="mt-4 flex items-baseline">
                                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                                        ${plan.price}
                                    </span>
                                    <span className={`ml-1 ${plan.popular ? 'text-white' : 'text-gray-600'}`}>/month</span>
                                </div>
                                <ul className="mt-6 space-y-4">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <i className={`fas fa-check mr-2 ${plan.popular ? 'text-white' : 'text-green-500'}`}></i>
                                            <span className={plan.popular ? 'text-white' : 'text-gray-600'}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button 
                                    className={`mt-8 w-full py-3 px-6 rounded-lg font-medium ${
                                        plan.popular 
                                            ? 'bg-white text-indigo-600 hover:bg-gray-50' 
                                            : 'gradient-bg text-white hover:opacity-90'
                                    }`}
                                >
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Pricing component error:', error);
        reportError(error);
        return null;
    }
}
