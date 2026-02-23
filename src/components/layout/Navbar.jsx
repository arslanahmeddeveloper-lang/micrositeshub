import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { navigation } from '../../data';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-white py-4'}`}>
            <nav className="flex items-center justify-between px-6 lg:px-16" aria-label="Global">
                {/* Logo */}
                <div className="flex w-full lg:w-1/4">
                    <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <span className="sr-only">MicrositesHub</span>
                        <div className={`w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl`}>
                            M
                        </div>
                        <span className={`font-bold text-xl text-dark`}>micrositeshub</span>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900`}
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                {/* Middle Links */}
                <div className="hidden lg:flex lg:w-2/4 lg:justify-center lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className={`text-base font-semibold leading-6 transition-colors text-slate-700 hover:text-primary`}>
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Right Button */}
                <div className="hidden lg:flex lg:w-1/4 lg:justify-end">
                    <a href="#contact" className="btn-primary py-2.5 px-6 text-sm">
                        Free Consultation +
                    </a>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">MicrositesHub</span>
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
                                M
                            </div>
                            <span className="font-bold text-xl text-dark">micrositeshub</span>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Free Consultation +
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
