import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ type: 'error', message: 'Please fill out all required fields.' });
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            setStatus({ type: 'error', message: 'Please enter a valid email address.' });
            return;
        }

        // Simulate API call
        setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    };

    return (
        <section id="contact" className="section-padding bg-bgsoft px-6 md:px-10 lg:px-16 overflow-hidden">
            <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24">
                {/* Left Column: Company Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center"
                >
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Get in Touch</span>
                    <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold text-dark mb-6 leading-tight md:leading-snug">
                        Partner With <span className="text-primary">MicrositesHub</span> <br className="hidden lg:block" /> For Digital Excellence
                    </h2>
                    <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-lg">
                        Reach out to discuss your project. Our experts are ready to provide custom solutions that elevate your online presence and business performance.
                    </p>

                    <div className="flex flex-col space-y-4">
                        <div className="flex bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 items-start gap-4 sm:gap-6">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-dark mb-1 text-sm sm:text-base">Call Us</h4>
                                <p className="text-gray-500 text-sm sm:text-base">+1 (555) 123-4567</p>
                                <p className="text-xs sm:text-sm text-gray-400 mt-1">Mon-Fri from 9am to 6pm</p>
                            </div>
                        </div>

                        <div className="flex bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 items-start gap-4 sm:gap-6">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-dark mb-1 text-sm sm:text-base">Email Us</h4>
                                <p className="text-gray-500 text-sm sm:text-base">hello@agency.com</p>
                                <p className="text-xs sm:text-sm text-gray-400 mt-1">We'll respond within 24 hours</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl border border-gray-100 relative overflow-hidden mt-10 lg:mt-0">
                        {/* Decorative gradient corner */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-full blur-2xl"></div>

                        <h3 className="text-xl sm:text-2xl font-bold text-dark mb-2 sm:mb-3 relative z-10">Place Your Order In</h3>
                        <p className="text-gray-500 mb-6 sm:mb-8 text-sm relative z-10">Fill out the following information and our team will get back to you.</p>

                        {status.message && (
                            <div className={`p-4 rounded-xl mb-6 text-sm font-medium ${status.type === 'error' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-green-50 text-green-600 border border-green-100'}`}>
                                {status.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-dark mb-1 sm:mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full h-11 sm:h-12 px-4 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition-all bg-slate-50 text-dark placeholder-gray-400"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-dark mb-1 sm:mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full h-11 sm:h-12 px-4 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition-all bg-slate-50 text-dark placeholder-gray-400"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1 sm:mb-2">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full h-11 sm:h-12 px-4 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition-all bg-slate-50 text-dark placeholder-gray-400"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-dark mb-1 sm:mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full p-4 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition-all bg-slate-50 text-dark placeholder-gray-400 resize-none text-sm sm:text-base"
                                    placeholder="Type your message here..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full py-3 sm:py-4 text-sm sm:text-base font-bold flex items-center justify-center gap-2">
                                Submit Request <span>&rarr;</span>
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
