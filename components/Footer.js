function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 py-12 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div data-name="footer-brand" className="col-span-1">
                            <h3 className="text-xl font-bold text-white mb-4">ITOps Pro</h3>
                            <p className="text-gray-400 mb-4">
                                Profesionální IT služby pro vaši infrastrukturu a DevOps řešení.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div data-name="footer-links">
                            <h4 className="text-lg font-semibold mb-4 text-white">Služby</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Cloud Infrastruktura</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">DevOps</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Bezpečnost</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Konzultace</a></li>
                            </ul>
                        </div>
                        
                        <div data-name="footer-contact">
                            <h4 className="text-lg font-semibold mb-4 text-white">Kontakt</h4>
                            <ul className="space-y-2">
                                <li className="text-gray-400">
                                    <i className="fas fa-envelope mr-2"></i>
                                    info@itops-pro.cz
                                </li>
                                <li className="text-gray-400">
                                    <i className="fas fa-phone mr-2"></i>
                                    +420 777 888 999
                                </li>
                                <li className="text-gray-400">
                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                    Praha, Česká republika
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div data-name="footer-bottom" className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 ITOps Pro. Všechna práva vyhrazena.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
