import React from 'react';
import Hero from '../components/sections/Hero';
import TrustedLogos from '../components/sections/TrustedLogos';
import Solutions from '../components/sections/Solutions';
import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

export default function Home() {
    return (
        <main>
            <Hero />
            <TrustedLogos />
            <Solutions />
            <About />
            <Portfolio />
            <Testimonials />
            <Contact />
        </main>
    );
}
