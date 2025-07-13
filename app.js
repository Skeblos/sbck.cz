import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportError from './reportError';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    try {
        return (
            <div data-name="app">
                <Navbar />
                <Hero />
                <Services />
                <Process />
                <Tools />
                <Projects />
                <Contact />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
