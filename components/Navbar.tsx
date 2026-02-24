"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/#about" },
        { name: "Why Us", href: "/#why-us" },
        { name: "Contact", href: "/#contact" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="sticky top-0 z-50 glass-morphism border-b border-black/5 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-3 w-full">
                <div className="flex items-center gap-2 md:gap-3">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo1.PNG"
                            alt="CAR STYLE Logo"
                            width={150}
                            height={40}
                            className="h-9 md:h-10 w-auto object-contain cursor-pointer"
                            priority
                        />
                    </Link>
                    <span className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest ml-1 hidden lg:inline border-l border-black/10 pl-3 leading-none">
                        Premium Detailing Studio
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`transition-all relative py-1 hover:text-primary ${isActive
                                    ? "text-primary"
                                    : "text-gray-600"
                                    }`}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.span
                                        layoutId="navUnderline"
                                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:block bg-black text-white px-5 md:px-6 py-2 md:py-2.5 rounded text-xs md:text-sm font-bold hover:bg-primary transition-all shadow-md active:scale-95">
                        Book Now
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-black/5 overflow-hidden shadow-2xl"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link, index) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`flex items-center justify-between text-lg font-bold py-2 ${isActive ? "text-primary" : "text-gray-800"
                                                }`}
                                        >
                                            {link.name}
                                            <ArrowRight size={18} className={isActive ? "opacity-100" : "opacity-0"} />
                                        </Link>
                                    </motion.div>
                                );
                            })}
                            <motion.button
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="w-full bg-primary text-white py-4 rounded-xl font-bold mt-4 shadow-lg active:scale-95 transition-all text-center"
                            >
                                Book Your Appointment
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
