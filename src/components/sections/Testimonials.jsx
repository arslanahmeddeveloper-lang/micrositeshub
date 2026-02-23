import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../../data';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const current = testimonials[currentIndex];

    return (
        <section className="section-padding bg-white overflow-hidden py-24">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-lg mx-auto lg:max-w-none"
                >
                    <div className="relative aspect-square w-full lg:w-[90%] left-0 lg:left-[10%]">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                            alt="Happy client"
                            className="relative w-full h-full object-cover rounded-3xl shadow-xl z-10"
                        />
                        {/* Decorative Background Offset */}
                        <div className="absolute top-8 -left-8 w-full h-full border-2 border-primary/20 rounded-3xl z-0"></div>
                    </div>
                </motion.div>

                {/* Right Column: Review Card */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative flex flex-col justify-center h-full"
                >
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-dark mb-12 leading-tight">
                        What Our Clients Say <br /> <span className="text-primary">About Us?</span>
                    </h2>

                    <div className="relative">
                        {/* Quote Icon */}
                        <div className="absolute -top-6 -left-6 text-primary/10">
                            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>
                        </div>

                        <div className="relative z-10 pl-6">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={current.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8"
                                >
                                    "{current.content}"
                                </motion.p>
                            </AnimatePresence>

                            <div className="flex items-center justify-between">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`author-${current.id}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                            <img src={`https://i.pravatar.cc/150?u=${current.id}`} alt={current.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-1.5">
                                                <h4 className="text-lg font-bold text-dark">{current.name}</h4>
                                                <div className="relative flex items-center group">
                                                    <CheckBadgeIcon className="w-5 h-5 text-blue-500 cursor-pointer peer" />
                                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-[10px] font-medium rounded opacity-0 invisible peer-hover:opacity-100 peer-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-lg">
                                                        Verified
                                                        {/* Tooltip Triangle pointer */}
                                                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 text-primary mt-1">
                                                {[...Array(current.rating)].map((_, i) => (
                                                    <StarIcon key={i} className="w-4 h-4" />
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                <div className="flex gap-3">
                                    <button
                                        onClick={prevTestimonial}
                                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:border-primary transition-all focus:outline-none"
                                        aria-label="Previous testimonial"
                                    >
                                        <ChevronLeftIcon className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={nextTestimonial}
                                        className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 hover:shadow-lg transition-all focus:outline-none"
                                        aria-label="Next testimonial"
                                    >
                                        <ChevronRightIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
