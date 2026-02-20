import React, { useState, useEffect, useLayoutEffect, useRef, useCallback, memo } from 'react';
import { gsap } from 'gsap';

const Navbar = memo(function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
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
                    <span className="text-4xl font-serif text-purple-400 font-bold tracking-tighter hover:text-purple-300 transition-colors">N</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-bold tracking-widest text-white">
                        NEURONIC
                    </span>
                    <span className="text-[0.6rem] text-gray-400 tracking-[0.2em] uppercase">
                        Tech Today, Tomorrow, Together
                    </span>
                </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
                {['Services', 'Process', 'Case Studies', 'About', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                        className="nav-item text-gray-300 hover:text-white text-sm font-medium transition-colors tracking-wide"
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
                <button className="nav-item px-6 py-2 rounded-full relative gradient-border-mask text-white text-sm font-medium hover:bg-white/10 transition-all">
                    Contact
                </button>
                <button className="nav-item px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-purple-500/25">
                    Get Started
                </button>
            </div>
        </nav>
    );
});

export default Navbar;
