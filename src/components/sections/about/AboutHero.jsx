import React from 'react';
import { motion } from 'framer-motion';
import { SiWordpress, SiElementor } from 'react-icons/si';
import { FaYoast } from 'react-icons/fa';
import { MdOutlineAnalytics } from 'react-icons/md';

export default function AboutHero() {
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

            {/* Trust Logos Strip (Blue Bar) */}
            <div className="w-full bg-[#4E62F0] py-4 relative z-20 shadow-lg">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
                    <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 sm:gap-10 opacity-100">
                        {/* Yoast */}
                        <div className="flex items-center gap-2 text-white/90 grayscale transition-all duration-300 hover:grayscale-0">
                            <FaYoast className="w-6 h-6 sm:w-8 sm:h-8" />
                            <span className="text-sm sm:text-base font-bold tracking-wider">yoast</span>
                        </div>
                        {/* Analytics */}
                        <div className="flex items-center gap-2 text-white/90 grayscale transition-all duration-300 hover:grayscale-0">
                            <MdOutlineAnalytics className="w-6 h-6 sm:w-8 sm:h-8" />
                            <span className="text-sm sm:text-base font-bold tracking-wider">Analytics</span>
                        </div>
                        {/* WordPress */}
                        <div className="flex items-center gap-2 text-white/90 grayscale transition-all duration-300 hover:grayscale-0">
                            <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white/90">
                                <SiWordpress className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <span className="text-sm sm:text-base font-bold tracking-wider">WordPress</span>
                        </div>
                        {/* Elementor */}
                        <div className="flex items-center gap-2 text-white/90 grayscale transition-all duration-300 hover:grayscale-0">
                            <SiElementor className="w-6 h-6 sm:w-8 sm:h-8" />
                            <span className="text-sm sm:text-base font-bold tracking-wider">elementor</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
