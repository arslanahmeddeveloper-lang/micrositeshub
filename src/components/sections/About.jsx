import { motion } from 'framer-motion';
import { stats } from '../../data';

export default function About() {
    return (
        <section id="about" className="section-padding bg-white relative px-6 md:px-10 lg:px-16 overflow-hidden">
            <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Left Column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">About Us</span>
                    <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold text-dark mb-6 leading-tight md:leading-snug lg:leading-[58px]">
                        Redefining <span className="text-primary relative inline-block">
                            What's Possible
                            <svg className="absolute -bottom-1 w-full h-3 text-secondary/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="4" fill="none" />
                            </svg>
                        </span><br /> In the Digital World
                    </h2>
                    <p className="text-gray-500 text-base leading-relaxed mb-10 md:mb-12 max-w-lg">
                        We blend creativity, technical expertise, and strategic thinking to build digital experiences that elevate your brand and drive measurable growth.
                    </p>

                    <div className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-12">
                        {stats.map((stat) => (
                            <div key={stat.id}>
                                <div className="text-3xl md:text-4xl font-bold text-dark mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                            </div>
                        ))}
                        {/* Circular Graphic Decoration */}
                        <div className="relative w-20 h-20 md:w-24 md:h-24 hidden sm:block">
                            <svg viewBox="0 0 100 100" className="w-full h-full text-primary animate-[spin_20s_linear_infinite]">
                                <path id="curve" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                                <text width="500">
                                    <textPath href="#curve" className="fill-current text-[12px] font-bold tracking-widest uppercase">
                                        • Trusted Agency • Professional •
                                    </textPath>
                                </text>
                            </svg>
                            <div className="absolute inset-0 m-auto w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center text-white">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Collage/Image */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative w-full max-w-md md:max-w-lg mx-auto lg:max-w-none mt-16 md:mt-20 lg:mt-0"
                >
                    <div className="relative z-10 w-[85%] sm:w-[80%] ml-auto">
                        <img
                            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
                            alt="Web design process"
                            className="w-full rounded-[1.5rem] md:rounded-[2rem] shadow-xl object-cover aspect-square"
                        />
                    </div>

                    <div className="absolute bottom-[-15%] sm:bottom-[-10%] left-0 w-[70%] sm:w-[65%] z-20">
                        <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                            alt="Team collaboration"
                            className="w-full rounded-[1.5rem] md:rounded-[2rem] shadow-2xl object-cover border-4 sm:border-8 border-white aspect-[4/3]"
                        />
                    </div>

                    {/* Decorative Dot Pattern */}
                    <div className="absolute -top-6 -right-6 md:-top-10 md:right-10 w-24 h-24 md:w-32 md:h-32 bg-[radial-gradient(circle,#4F46E5_2px,transparent_2px)] bg-[length:20px_20px] opacity-20 z-0"></div>
                </motion.div>
            </div>
        </section>
    );
}
