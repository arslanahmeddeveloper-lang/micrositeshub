import React from 'react';
import { motion } from 'framer-motion';
import { SiWordpress, SiElementor } from 'react-icons/si';
import { FaYoast } from 'react-icons/fa';
import { MdOutlineAnalytics } from 'react-icons/md';

export default function AboutHero() {
    // We duplicate the logos array inline so it loops seamlessly.
    const logoItems = [
        { icon: <FaYoast className="w-8 h-8" />, name: "yoast" },
        { icon: <MdOutlineAnalytics className="w-8 h-8" />, name: "Analytics" },
        {
            icon: (
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white/90">
                    <SiWordpress className="w-5 h-5" />
                </div>
            ), name: "WordPress"
        },
        { icon: <SiElementor className="w-8 h-8" />, name: "elementor" }
    ];

    return (
        <section className="relative pt-32 pb-0 w-full overflow-hidden bg-gradient-to-b from-blue-50/50 to-white flex flex-col items-center">
            {/* Soft Purple Gradient Spheres (Background Details) */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute top-10 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -left-6 top-32 w-16 h-16 rounded-full bg-indigo-500 shadow-xl shadow-indigo-500/40 z-10 flex items-center justify-center"></div>

            {/* Main Header Content */}
            <div className="max-w-[1440px] w-full mx-auto px-6 md:px-10 lg:px-16 text-center relative z-20 pb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-5xl font-bold text-dark tracking-tight"
                >
                    About US
                </motion.h1>
            </div>

            {/* Trust Logos Strip (Blue Bar) - Doubled height via py-10 and infinite scroll */}
            <div className="w-full bg-[#4E62F0] py-10 relative z-20 shadow-lg overflow-hidden flex">
                <div className="flex w-max animate-marquee space-x-16 sm:space-x-24 px-8">
                    {/* First set of logos */}
                    {logoItems.map((item, index) => (
                        <div key={`logo-1-${index}`} className="flex items-center gap-3 text-white/90 grayscale transition-all duration-300 hover:grayscale-0 shrink-0">
                            {item.icon}
                            <span className="text-base sm:text-lg font-bold tracking-wider">{item.name}</span>
                        </div>
                    ))}
                    {/* Second duplicated set for seamless looping */}
                    {logoItems.map((item, index) => (
                        <div key={`logo-2-${index}`} className="flex items-center gap-3 text-white/90 grayscale transition-all duration-300 hover:grayscale-0 shrink-0">
                            {item.icon}
                            <span className="text-base sm:text-lg font-bold tracking-wider">{item.name}</span>
                        </div>
                    ))}
                    {/* Third duplicated set to ensure no gap on large screens */}
                    {logoItems.map((item, index) => (
                        <div key={`logo-3-${index}`} className="flex items-center gap-3 text-white/90 grayscale transition-all duration-300 hover:grayscale-0 shrink-0">
                            {item.icon}
                            <span className="text-base sm:text-lg font-bold tracking-wider">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
