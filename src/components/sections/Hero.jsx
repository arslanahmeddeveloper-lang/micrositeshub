import { motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaLinkedinIn } from 'react-icons/fa';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        },
    };

    const floatingVariants = {
        animate: {
            y: [0, -10, 0],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
    };

    return (
        <section id="home" className="relative pt-32 pb-20 px-6 lg:px-16 overflow-hidden bg-white min-h-[90vh] flex items-center">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[140%] border-[0.5px] border-gray-200 transform -skew-x-12 opacity-50 z-0"></div>
                <div className="absolute -top-[20%] right-[10%] w-[30%] h-[140%] border-x-[0.5px] border-gray-200 transform -skew-x-12 opacity-50 z-0"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Column */}
                <motion.div
                    className="max-w-2xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6 tracking-tight"
                    >
                        Expert WordPress <br className="hidden lg:block" />
                        Services <span className="text-dark">for<br className="hidden lg:block" />Melbourne Businesses</span>
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-base text-gray-500 mb-10 leading-relaxed max-w-lg"
                    >
                        Grow your Melbourne business with a custom WordPress website, expertly crafted for SEO, performance, and impact.
                    </motion.p>
                    <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6">
                        <a href="#contact" className="btn-primary flex items-center justify-center gap-2">
                            Start Your Journey <span className="text-lg leading-none">&rarr;</span>
                        </a>
                        <div className="flex gap-3">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
                                <FaFacebookF size={16} />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                                <FaInstagram size={18} />
                            </a>
                            <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Telegram">
                                <FaTelegramPlane size={18} />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label="LinkedIn">
                                <FaLinkedinIn size={16} />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Column */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
                >
                    <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[500px] max-w-md mx-auto lg:max-w-none lg:w-[80%]">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                            alt="Team discussing at table"
                            className="relative w-full h-full object-cover rounded-[2.5rem] shadow-xl z-20"
                        />

                        {/* Floating Badges */}
                        <motion.div
                            variants={floatingVariants}
                            animate="animate"
                            className="absolute -left-12 top-[15%] z-30 bg-primary px-5 py-2 rounded-lg shadow-lg flex items-center justify-center gap-2"
                        >
                            <span className="text-white font-medium text-sm whitespace-nowrap">WordPress</span>
                            {/* Pointing Right-Down from bottom right corner */}
                            <div className="absolute -bottom-5 -right-5 pointer-events-none">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[90deg] text-secondary">
                                    <path d="M20.738 2.05L1.8 8.058a1.2 1.2 0 00-.024 2.277l8.653 4.197 4.197 8.653a1.2 1.2 0 002.277-.024l6.008-18.938A1.2 1.2 0 0020.738 2.05z" fill="currentColor" stroke="white" strokeWidth="1" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={floatingVariants}
                            animate="animate"
                            style={{ animationDelay: '1.5s' }}
                            className="absolute -right-8 bottom-[35%] z-30 bg-primary px-5 py-2 rounded-lg shadow-lg flex items-center justify-center gap-2"
                        >
                            {/* Pointing Left-Up from top left edge */}
                            <div className="absolute -top-6 -left-6 pointer-events-none">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="-rotate-[90deg] text-secondary">
                                    <path d="M20.738 2.05L1.8 8.058a1.2 1.2 0 00-.024 2.277l8.653 4.197 4.197 8.653a1.2 1.2 0 002.277-.024l6.008-18.938A1.2 1.2 0 0020.738 2.05z" fill="currentColor" stroke="white" strokeWidth="1" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-white font-medium text-sm whitespace-nowrap">Web Design</span>
                        </motion.div>

                        {/* Blue dotted circle decoration */}
                        <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full border-[6px] border-dotted border-primary opacity-80 z-10 animate-[spin_10s_linear_infinite]"></div>

                        {/* Dark floating box badge */}
                        <motion.div
                            variants={floatingVariants}
                            animate="animate"
                            style={{ animationDelay: '2.5s' }}
                            className="absolute -bottom-4 -left-4 z-30 bg-[#1A1A2E] px-5 py-2 rounded-lg shadow-lg flex items-center justify-center"
                        >
                            <span className="text-white font-medium text-sm whitespace-nowrap">Web Development</span>
                            {/* Dark Gray Pointing Top-Right from top right edge */}
                            <div className="absolute -top-6 -right-5 pointer-events-none">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[0deg]">
                                    <path d="M20.738 2.05L1.8 8.058a1.2 1.2 0 00-.024 2.277l8.653 4.197 4.197 8.653a1.2 1.2 0 002.277-.024l6.008-18.938A1.2 1.2 0 0020.738 2.05z" fill="rgb(26 26 46 / var(--tw-bg-opacity, 1))" stroke="white" strokeWidth="1" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
