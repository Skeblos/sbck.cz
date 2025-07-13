function Navbar() {
    try {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <nav data-name="navbar" className="bg-gray-900 fixed w-full z-50 border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <span data-name="logo" className="text-xl font-bold gradient-text">ITOps Pro</span>
                        </div>
                        
                        <div className="hidden md:flex items-center space-x-8">
                            <a data-name="nav-services" href="#services" className="text-gray-300 hover:text-white">Služby</a>
                            <a data-name="nav-skills" href="#skills" className="text-gray-300 hover:text-white">Dovednosti</a>
                            <a data-name="nav-projects" href="#projects" className="text-gray-300 hover:text-white">Projekty</a>
                            <a data-name="nav-contact" href="#contact" className="gradient-bg text-white px-4 py-2 rounded-lg hover:opacity-90">
                                Kontakt
                            </a>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button data-name="mobile-menu-button" onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
                                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                            </button>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div data-name="mobile-menu" className="md:hidden bg-gray-800">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-white">Služby</a>
                            <a href="#skills" className="block px-3 py-2 text-gray-300 hover:text-white">Dovednosti</a>
                            <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-white">Projekty</a>
                            <a href="#contact" className="block px-3 py-2 gradient-bg text-white rounded-lg text-center mt-2">
                                Kontakt
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
        return null;
    }
}
