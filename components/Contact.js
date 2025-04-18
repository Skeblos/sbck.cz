function Contact() {
    try {
        return (
            <section data-name="contact" id="contact" className="py-20 bg-gray-800">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 data-name="contact-title" className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Kontaktujte Mě
                        </h2>
                        <p data-name="contact-subtitle" className="text-gray-400">
                            Máte projekt nebo dotaz? Neváhejte mě kontaktovat.
                        </p>
                    </div>

                    <div data-name="contact-form" className="bg-gray-900 p-8 rounded-xl">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Jméno
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Zpráva
                                </label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                                ></textarea>
                            </div>
                            <button className="w-full gradient-bg text-white py-2 px-4 rounded-lg hover:opacity-90">
                                Odeslat Zprávu
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
        return null;
    }
}
