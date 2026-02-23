import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        id: '01',
        title: 'Local Roots, Global Reach',
        text: 'Where we move beyond developing websites we design digital experiences that help your business grow and stand out.',
    },
    {
        id: '02',
        title: 'A Passionate Team',
        text: 'Our approach is built on custom execution, performance insights, and a steadfast dedication.',
    },
    {
        id: '03',
        title: 'Professionalism In Every Pixel',
        text: 'With a dedicated focus on quality ensure to deliver the best experience for our clients.',
    }
];

export default function AboutFeatures() {
    return (
        <section className="py-20 px-6 md:px-10 lg:px-16 bg-[#FAFBFF] overflow-hidden">
            <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-xl mx-auto lg:max-w-none"
                >
                    <img
                        src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
                        alt="Team looking at laptop"
                        className="w-full h-auto object-cover rounded-2xl shadow-xl aspect-video"
                    />
                </motion.div>

                {/* Right Features List */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col space-y-10 relative"
                >
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-[1.15rem] top-6 bottom-6 w-[2px] bg-blue-100 z-0"></div>

                    {features.map((feature) => (
                        <div key={feature.id} className="relative z-10 flex gap-6 sm:gap-8 items-start">
                            {/* Number Badge */}
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md mt-1">
                                {feature.id}
                            </div>

                            {/* Text Content */}
                            <div>
                                <h3 className="text-xl font-bold text-dark mb-2 tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                                    {feature.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
