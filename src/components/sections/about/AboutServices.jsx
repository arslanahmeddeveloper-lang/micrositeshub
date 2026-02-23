import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        id: 'wp',
        title: 'WordPress Services',
        desc: 'Expert WordPress hosting, custom plugins, and full maintenance for high-performing websites.',
        icon: (
            <div className="w-14 h-14 rounded-2xl bg-[#E2F1FF] flex items-center justify-center text-[#1E73BE] shrink-0 border-4 border-white/5 shadow-sm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M12.158 12.786l-2.698 7.841c.806.236 1.657.365 2.54.365 1.047 0 2.05-.18 2.986-.51-.024-.037-.046-.078-.065-.123l-2.763-7.573zM4.61 12c0-1.01.218-1.95.59-2.79l3.05 8.52c-2.17-1.39-3.64-3.8-3.64-6.53zM15.22 10.3c0-.98-.34-1.66-.99-2.05-.65-.39-1.48-.59-2.48-.59-.62 0-1.22.1-1.8.3-.58.2-1.07.48-1.47.85-.39.37-.68.8-.88 1.28-.19.49-.29 1.03-.29 1.63 0 1.01.25 1.84.75 2.5s1.22 1.09 2.16 1.3c.94.21 2.05.32 3.32.32 1.2 0 2.22-.1 3.06-.3s1.48-.52 1.9-1c.42-.48.63-1.08.63-1.8 0-.6-.18-1.12-.53-1.56-.35-.44-.81-.74-1.38-1.04z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.6C6.152 22.6 1.4 17.848 1.4 12S6.152 1.4 12 1.4 22.6 6.152 22.6 12 17.848 22.6 12 22.6zM18.8 12c0-1.01-.218-1.95-.59-2.79l-3.04 8.5c2.16-1.38 3.63-3.79 3.63-6.51z" />
                </svg>
            </div>
        )
    },
    {
        id: 'dev',
        title: 'Custom Development',
        desc: 'Tailored web development to meet your unique business goals with modern frameworks.',
        icon: (
            <div className="w-14 h-14 rounded-2xl bg-[#EEF2FF] flex items-center justify-center text-[#6366F1] shrink-0 border-4 border-white/5 shadow-sm">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            </div>
        )
    },
    {
        id: 'desi',
        title: 'Web Design',
        desc: 'Creative and user-centric designs to elevate your brand identity and digital engagement.',
        icon: (
            <div className="w-14 h-14 rounded-2xl bg-[#FFF1F2] flex items-center justify-center text-[#E11D48] shrink-0 border-4 border-white/5 shadow-sm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
            </div>
        )
    },
    {
        id: 'seo',
        title: 'SEO Services',
        desc: 'Optimize your digital reach with data-driven SEO techniques that generate organic traffic.',
        icon: (
            <div className="w-14 h-14 rounded-2xl bg-[#FFFBEB] flex items-center justify-center text-[#F59E0B] shrink-0 border-4 border-white/5 shadow-sm">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
        )
    }
];

export default function AboutServices() {
    return (
        <section className="py-20 px-6 md:px-10 lg:px-16 bg-[#F8F9FE]">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-left mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-dark">
                        End-to-End Web <span className="text-primary">Solutions.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((svc, index) => (
                        <motion.div
                            key={svc.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-[#111827] rounded-3xl p-6 sm:p-8 flex items-start gap-5 sm:gap-6 relative group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                        >
                            {/* Icon Wrapper */}
                            {svc.icon}

                            {/* Text Content */}
                            <div className="flex flex-col flex-grow pr-10">
                                <h3 className="text-white font-bold text-xl mb-2">{svc.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                    {svc.desc}
                                </p>
                            </div>

                            {/* Bottom Right Arrow Target */}
                            <div className="absolute bottom-6 right-6 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}

                    {/* Centered Bottom Item (Shopify) */}
                    <div className="md:col-span-2 flex justify-center mt-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-[#111827] rounded-3xl p-6 sm:p-8 flex items-start gap-5 sm:gap-6 relative group cursor-pointer hover:-translate-y-1 transition-transform duration-300 w-full lg:w-[calc(50%-1rem)]"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#E8F5E9] flex items-center justify-center text-[#4CAF50] shrink-0 border-4 border-white/5 shadow-sm">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                    <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12z" />
                                </svg>
                            </div>
                            <div className="flex flex-col flex-grow pr-10">
                                <h3 className="text-white font-bold text-xl mb-2">Shopify Services</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                    E-commerce solutions tailored for speed, reliability, and sales. Connect to limitless value.
                                </p>
                            </div>
                            <div className="absolute bottom-6 right-6 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
