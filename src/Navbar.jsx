import React, { useState, useEffect, useLayoutEffect, useRef, useCallback, memo } from 'react';
import { gsap } from 'gsap';

const Navbar = memo(function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.nav-item',
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
            );
        }, navRef);
        return () => ctx.revert();
    }, []);

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 20);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <nav ref={navRef} className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-4 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 shadow-xl backdrop-blur-md py-3' : 'bg-transparent py-4'
            }`}>
            {/* Logo Section */}
            <div className="nav-item flex items-center gap-2">
                <div className="relative group cursor-pointer">
                    <img src="/N.webp" alt="Neuronic Logo" className="w-10 h-10 object-contain hover:opacity-80 transition-opacity" />
                </div>
                <div className="flex flex-col group/brand" style={{ fontFamily: "'Playfair Display', serif" }}>
                    <span className="text-xl font-medium tracking-widest text-white transition-all duration-300 group-hover/brand:scale-105 group-hover/brand:text-transparent group-hover/brand:bg-clip-text group-hover/brand:bg-gradient-to-r group-hover/brand:from-blue-400 group-hover/brand:to-purple-400 origin-left">
                        NEURONIC
                    </span>
                    <span className="text-[0.6rem] text-gray-400 tracking-[0.2em] uppercase transition-colors duration-300 group-hover/brand:text-gray-300" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                        Tech Today, Tomorrow, Together
                    </span>
                </div>
            </div>

            {/* Navigation Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-8">
                {['Services', 'Process', 'Case Studies', 'About', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                        className="nav-item group relative text-gray-300 hover:text-white text-sm font-medium transition-colors tracking-wide py-1"
                    >
                        {item}
                        {/* Glowing Oval Underline Hover Effect */}
                        <div className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent group-hover:w-[120%] group-hover:-left-[10%] transition-all duration-300 ease-out z-10 rounded-full" />
                        <div className="absolute -bottom-1 left-1/2 w-0 h-[3px] bg-gradient-to-r from-transparent via-purple-500 to-transparent group-hover:w-[120%] group-hover:-left-[10%] transition-all duration-300 ease-out blur-[4px] opacity-0 group-hover:opacity-100 z-0 rounded-full" />
                    </a>
                ))}
            </div>

            {/* Action Buttons (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
                <a href="#contact" className="nav-item px-6 py-2 rounded-full relative gradient-border-mask text-white text-sm font-medium hover:bg-white/10 transition-all">
                    Contact
                </a>
                <a href="#contact" className="nav-item px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-purple-500/25">
                    Get Started
                </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
                className="lg:hidden text-white p-2 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMobileMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 lg:hidden flex flex-col items-center py-6 gap-6 shadow-2xl">
                    {['Services', 'Process', 'Case Studies', 'About', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-gray-300 hover:text-white text-base font-medium transition-colors tracking-wide"
                        >
                            {item}
                        </a>
                    ))}
                    <div className="flex flex-col gap-4 w-full px-8 mt-2">
                        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center px-6 py-3 rounded-xl relative gradient-border-mask text-white text-sm font-medium hover:bg-white/10 transition-all">
                            Contact
                        </a>
                        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg">
                            Get Started
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
});

export default Navbar;
