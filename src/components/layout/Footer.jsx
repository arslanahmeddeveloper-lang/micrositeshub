import { motion } from 'framer-motion';
import { navigation } from '../../data';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';

export default function Footer() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
    };

    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-card text-white pt-24 pb-8 px-6 lg:px-16"
        >
            <motion.div variants={containerVariants} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <motion.div variants={itemVariants} className="lg:pr-8">
                    <a href="#" className="flex items-center gap-2 mb-6">
                        <div className="w-10 h-10 bg-primary flex items-center justify-center text-white" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                            <span className="font-bold text-xl">M</span>
                        </div>
                        <span className="font-bold text-2xl text-white tracking-tight">micrositeshub</span>
                    </a>
                    <p className="text-gray-400 text-sm leading-loose max-w-sm">
                        Expert WordPress solutions for ambitious businesses. We build, manage, and optimize digital platforms that drive real results.
                    </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <h3 className="text-lg font-semibold text-white mb-6">Useful Links</h3>
                    <ul className="space-y-4">
                        {['About', 'Services', 'Blog', 'Portfolio'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="flex items-center gap-3">
                            <span className="text-primary text-xl">📞</span>
                            +1 (555) 123-4567
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-primary text-xl">✉️</span>
                            hello@micrositeshub.com
                        </li>
                    </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <h3 className="text-lg font-bold text-white mb-6">Newsletter</h3>
                    <form className="mb-8">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-transparent border-b border-gray-600 px-0 py-2 text-sm focus:outline-none focus:border-primary text-white transition-colors placeholder:text-gray-500"
                        />
                    </form>
                    <div className="flex gap-4">
                        {/* Social Icons inside Newsletter column matching screenshot */}
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 shrink-0 text-gray-300 hover:text-white" aria-label="Facebook">
                            <FaFacebookF size={14} />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 shrink-0 text-gray-300 hover:text-white" aria-label="LinkedIn">
                            <FaLinkedinIn size={14} />
                        </a>
                        <a href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 shrink-0 text-gray-300 hover:text-white" aria-label="Upwork">
                            <SiUpwork size={14} />
                        </a>
                        <a href="https://www.fiverr.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 shrink-0 text-gray-300 hover:text-white" aria-label="Fiverr">
                            <SiFiverr size={18} />
                        </a>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-7xl mx-auto py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <p>Copyright © {new Date().getFullYear()} micrositeshub.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
                    <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
                </div>
            </motion.div>
        </motion.footer>
    );
}
