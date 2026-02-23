import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Hero from './components/sections/Hero';
import TrustedLogos from './components/sections/TrustedLogos';
import Solutions from './components/sections/Solutions';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

function App() {
    return (
        <div className="font-sans text-dark bg-white overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <TrustedLogos />
                <Solutions />
                <About />
                <Portfolio />
                <Testimonials />
                <Contact />
            </main>
            <ScrollToTop />
            <Footer />
        </div>
    );
}

export default App;
