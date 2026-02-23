import React from 'react';
import { motion } from 'framer-motion';

export default function AboutTestimonials() {
    return (
        <section className="py-20 px-6 md:px-10 lg:px-16 bg-white overflow-hidden">
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
                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800"
                        alt="Team reviewing on tablet"
                        className="w-full h-auto object-cover rounded-3xl shadow-xl aspect-square lg:aspect-[4/3]"
                    />
                </motion.div>

                {/* Right Text & Review Flow */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-dark mb-4 leading-tight tracking-tight">
                        What Our Clients Say <br />
                        <span className="text-primary italic">About Us?</span>
                    </h2>

                    {/* Quotation Marks */}
                    <div className="text-primary text-5xl font-serif mb-6 leading-none">
                        &ldquo;
                    </div>

                    <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed mb-10 max-w-lg italic">
                        Working with them was a game-changer for our digital strategy. They provided in-depth insights and a seamless process that helped us outsmart our goals.
                    </p>

                    {/* Reviewer / Nav Control */}
                    <div className="flex items-center justify-between max-w-lg pr-4">
                        <div className="flex items-center gap-4">
                            <img
                                src="https://randomuser.me/api/portraits/women/65.jpg"
                                alt="Client avatar"
                                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                            />
                            <div>
                                <h4 className="text-dark font-bold text-base">Linda Cline</h4>
                                <div className="flex items-center gap-1 mt-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className="w-4 h-4 text-[#FFB800]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Slider Controls */}
                        <div className="flex gap-2">
                            <button className="w-10 h-10 rounded-lg bg-blue-50 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center hover:bg-blue-600 transition-colors shadow-md">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
