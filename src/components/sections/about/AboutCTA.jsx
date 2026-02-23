import React from 'react';
import { motion } from 'framer-motion';
import { SiWordpress, SiElementor } from 'react-icons/si';
import { FaYoast } from 'react-icons/fa';
import { MdOutlineAnalytics } from 'react-icons/md';

export default function AboutCTA() {
    return (
        <section className="py-20 px-6 md:px-10 lg:px-16 bg-[#F8F9FE]">
            <div className="max-w-[1440px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-[#1A1A2E] rounded-[2rem] p-10 md:p-16 lg:px-24 text-center relative overflow-hidden"
                >
                    {/* Background Noise Detail (Optional visual flair referencing image) */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1.5px)] bg-[length:24px_24px] pointer-events-none"></div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight relative z-10">
                        Take the First Step Towards an Exceptional<br className="hidden md:block" />
                        <span className="text-[#3B82F6]"> Online Presence!</span>
                    </h2>

                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto relative z-10">
                        How can we bring your vision to life? Connect with us to leverage proven expertise and robust solutions that drive secure ROI straight to your brand.
                    </p>

                    <button className="bg-[#4E62F0] hover:bg-[#3B4BE0] text-white font-bold py-3 px-8 rounded-full transition-transform hover:-translate-y-1 shadow-lg shadow-blue-500/20 mb-16 relative z-10 uppercase tracking-widest text-xs">
                        Contact Us
                    </button>

                    {/* Trust Logos Strip (White Bar Overlay inline inside card) */}
                    <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 sm:gap-10 border-t border-white/10 pt-8 relative z-10">
                        {/* Yoast */}
                        <div className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                            <FaYoast className="w-6 h-6 sm:w-8 sm:h-8" />
                            <span className="text-sm sm:text-base font-bold tracking-wider">yoast</span>
                        </div>
                        {/* Analytics */}
                        <div className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                            <MdOutlineAnalytics className="w-6 h-6 sm:w-8 sm:h-8" />
                            <span className="text-sm sm:text-base font-bold tracking-wider">Analytics</span>
                        </div>
                        {/* WordPress */}
                        <div className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                            <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-current">
                                <SiWordpress className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <span className="text-sm sm:text-base font-bold tracking-wider">WordPress</span>
                        </div>
                        {/* Elementor */}
                        <div className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                            <SiElementor className="w-6 h-6 sm:w-8 sm:h-8" />
                            <span className="text-sm sm:text-base font-bold tracking-wider">elementor</span>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
