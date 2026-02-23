import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
    {
        id: 1,
        title: 'Proven Result',
        text: 'We focus on performance-driven campaigns that drive ROI for our clients.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        )
    },
    {
        id: 2,
        title: 'Affordable Packages',
        text: 'High quality standards at competitive pricing guarantees.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        id: 3,
        title: 'National Support',
        text: 'Get access to expert strategy and round the clock responsive staff.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        )
    },
    {
        id: 4,
        title: '24/7 Hours',
        text: 'Tailored solutions designed out of hours for minimal site disruptions.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    }
];

export default function AboutWhyChooseUs() {
    return (
        <section className="py-24 px-6 md:px-10 lg:px-16 bg-[#F8F9FE]">
            <div className="max-w-[1440px] mx-auto text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-[800px] mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-dark mb-6 tracking-tight">
                        <span className="text-primary">Why</span> We're the Right Choice
                    </h2>
                    <p className="text-gray-500 text-[15px] md:text-base leading-relaxed">
                        Our approach is built on custom execution, performance insights, and a steadfast dedication to doing things locally in-house. Partner with us, and you'll soon realize that our team operates at a different tier unlike large agency structures.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Outer Ring with Inner Circle */}
                            <div className="w-28 h-28 rounded-full border border-gray-200 border-dashed flex items-center justify-center mb-6 relative group-hover:border-primary/50 group-hover:rotate-[30deg] transition-all duration-500">
                                <div className="w-[4.5rem] h-[4.5rem] bg-blue-50 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 group-hover:-rotate-[30deg]">
                                    {item.icon}
                                </div>
                            </div>

                            <h4 className="text-[17px] font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                                {item.title}
                            </h4>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-[220px] mx-auto">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
