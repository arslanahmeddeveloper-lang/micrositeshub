import React from 'react';
import { motion } from 'framer-motion';

export default function AboutVision() {
    return (
        <section className="py-20 px-6 md:px-10 lg:px-16 bg-[#F8F9FE] overflow-hidden">
            <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-xl mx-auto lg:max-w-none"
                >
                    <img
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                        alt="Man presenting to team"
                        className="w-full h-auto object-cover rounded-3xl shadow-xl aspect-[4/3]"
                    />
                </motion.div>

                {/* Right Vision Text & Checklist */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-dark mb-6 leading-tight tracking-tight">
                        Redefining <span className="text-primary">Web Development</span> In Melbourne.
                    </h2>

                    <p className="text-gray-500 text-[15px] sm:text-base leading-relaxed mb-10 max-w-lg">
                        As these services often intertwine, that's where we shine. We haven't limited ourselves, and thus, we bring together leading minds to give you a cohesive end product that boosts visibility and conversions.
                    </p>

                    <div className="space-y-6">
                        {/* Call to Action Button */}
                        <div className="flex items-start mb-6">
                            <button className="btn-primary">
                                Get in Touch
                            </button>
                        </div>

                        {/* List Items */}
                        <div className="flex flex-col space-y-4 pt-2">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary flex-shrink-0">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-dark font-bold text-sm sm:text-base">Tailored Designs</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary flex-shrink-0">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-dark font-bold text-sm sm:text-base">Full-Service Solutions</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary flex-shrink-0">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-dark font-bold text-sm sm:text-base">Ongoing Support</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
