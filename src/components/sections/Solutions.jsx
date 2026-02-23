import { motion } from 'framer-motion';
import { solutions } from '../../data';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { FaWordpress, FaCode, FaFigma, FaCog, FaShoppingBag } from 'react-icons/fa';

export default function Solutions() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    };

    const getSolutionIcon = (iconName) => {
        switch (iconName) {
            case 'W': return <FaWordpress className="w-8 h-8" />;
            case 'Code': return <FaCode className="w-8 h-8" />;
            case 'Design': return <FaFigma className="w-8 h-8" />;
            case 'Chart': return <FaCog className="w-8 h-8" />;
            case 'Shop': return <FaShoppingBag className="w-8 h-8" />;
            default: return null;
        }
    };

    return (
        <section id="services" className="bg-bgsoft py-20">
            <div className="w-[1340px] max-w-full mx-auto">
                <div className="text-left mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-dark">
                        Our <span className="text-primary">Solutions</span>
                    </h2>
                </div>

                <motion.div
                    className="flex flex-wrap gap-6 justify-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {solutions.map((solution, index) => {
                        // Determine if it's the 5th element to center it
                        const isLastCentered = index === 4;

                        return (
                            <motion.div
                                key={solution.id}
                                variants={itemVariants}
                                className={`group relative bg-[#0B1120] border border-gray-800 rounded-3xl p-8 flex flex-col sm:flex-row items-start gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 ${isLastCentered ? 'w-full lg:w-[calc(50%-0.75rem)]' : 'w-full lg:w-[calc(50%-0.75rem)]'}`}
                            >
                                {/* Bottom right arrow */}
                                <div className="absolute bottom-6 right-6">
                                    <div className="w-8 h-8 rounded-md bg-gray-800/80 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <ArrowUpRightIcon className="w-4 h-4" />
                                    </div>
                                </div>

                                {/* Icon container */}
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${solution.colorClass}`}>
                                    {getSolutionIcon(solution.icon)}
                                </div>

                                <div className="flex-1 pr-12">
                                    <h4 className="text-xl font-semibold text-white mb-2">
                                        <a href="#" className="focus:outline-none">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            {solution.title}
                                        </a>
                                    </h4>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        {solution.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
