import React from 'react';
import { motion } from 'framer-motion';

export default function AboutIntro() {
    return (
        <section className="py-20 px-6 md:px-10 lg:px-16 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="mb-6 max-w-lg">
                        Elevate Your Online Presence with <span className="text-primary">MicrositesHub.</span>
                    </h2>

                    <p className="text-gray-600 text-[15px] leading-relaxed mb-6 font-medium">
                        Where we move beyond developing websites we design digital experiences that help your business grow and stand out. With a dedicated focus on WordPress development, SEO optimization, and web design, our goal is simple: to make the web a better place and accelerate your business.
                    </p>

                    <p className="text-gray-600 text-[15px] leading-relaxed font-medium">
                        Our approach is built on custom execution, performance insights, and a steadfast dedication to doing everything locally in-house. Partner with us, and you'll soon realize that our team runs a tightly knit environment unlike large agency structures.
                    </p>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative w-full aspect-[4/3] max-w-xl mx-auto lg:max-w-none"
                >
                    <img
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                        alt="Team discussing project at laptop"
                        className="w-full h-full object-cover rounded-2xl shadow-xl"
                    />
                </motion.div>
            </div>
        </section>
    );
}
