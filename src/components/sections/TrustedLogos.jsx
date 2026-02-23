import { motion } from 'framer-motion';
import { logos } from '../../data';

export default function TrustedLogos() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: "easeOut" }
        },
    };
    return (
        <section className="py-8 bg-primary overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div
                    className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-16 md:gap-24 px-8"
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <img
                            key={`${logo.name}-${index}`}
                            src={logo.url}
                            alt={`${logo.name} logo`}
                            className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-75 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300 cursor-pointer flex-shrink-0"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
