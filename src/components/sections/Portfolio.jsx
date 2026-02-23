import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolio } from '../../data';
import { FaWordpress, FaCode, FaFigma, FaCog } from 'react-icons/fa';

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState('All');

    const categories = ['All', ...new Set(portfolio.map(item => item.category))];

    const filteredItems = activeTab === 'All'
        ? portfolio
        : portfolio.filter(item => item.category === activeTab);

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'WordPress': return <FaWordpress className="w-4 h-4 shrink-0" />;
            case 'Web Development': return <FaCode className="w-4 h-4 shrink-0" />;
            case 'Web Design': return <FaFigma className="w-4 h-4 shrink-0" />;
            case 'SEO': return <FaCog className="w-4 h-4 shrink-0" />;
            default: return null;
        }
    };

    return (
        <section id="portfolio" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
                            Our Recent <span className="text-primary">Works</span>
                        </h2>
                    </div>

                    {/* Tabs Filter */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex flex-wrap items-center justify-center p-1.5 bg-gray-100 rounded-full">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveTab(category)}
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${activeTab === category
                                        ? 'bg-dark text-white shadow-md'
                                        : 'text-gray-500 hover:text-dark hover:bg-white/50'
                                        }`}
                                >
                                    {category !== 'All' && getCategoryIcon(category)}
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-100 cursor-pointer shadow-md"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Overlay Hover Effect */}
                                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        <h4 className="text-2xl font-semibold text-white mb-2">{item.title}</h4>
                                        <span className="text-gray-300 font-medium text-sm flex items-center gap-2">
                                            {getCategoryIcon(item.category)}
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a href="#portfolio" className="inline-flex items-center gap-2 text-dark font-semibold hover:text-primary transition-colors border-b-2 border-dark hover:border-primary pb-1">
                        View All Portfolio <span>&rarr;</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
