import React from 'react';
import AboutHero from '../components/sections/about/AboutHero';
import AboutIntro from '../components/sections/about/AboutIntro';
import AboutFeatures from '../components/sections/about/AboutFeatures';
import AboutWhyChooseUs from '../components/sections/about/AboutWhyChooseUs';
import AboutVision from '../components/sections/about/AboutVision';
import AboutServices from '../components/sections/about/AboutServices';
import AboutTestimonials from '../components/sections/about/AboutTestimonials';
import AboutCTA from '../components/sections/about/AboutCTA';

export default function AboutPage() {
    return (
        <main className="w-full bg-white">
            <AboutHero />
            <AboutIntro />
            <AboutFeatures />
            <AboutWhyChooseUs />
            <AboutVision />
            <AboutServices />
            <AboutTestimonials />
            <AboutCTA />
        </main>
    );
}
