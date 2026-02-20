import React, { useLayoutEffect, useRef, memo } from 'react';
import Plasma from './Plasma';
import { gsap } from 'gsap';

const Hero = memo(function Hero() {
    const heroRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo('.hero-text-item',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out' }
            )
                .fromTo('.hero-visual',
                    { opacity: 0, scale: 0.9 },
                    { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' },
                    '-=0.8'
                );
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className="relative min-h-screen bg-slate-900 text-white overflow-hidden font-sans selection:bg-cyan-500/30">
            {/* Background Effect */}
            <div className="absolute inset-0 z-0">
                <Plasma
                    color="#4f46e5" // Indigo-600ish
                    speed={0.4}
                    scale={0.8}
                    opacity={0.3}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900 pointer-events-none" />
            </div>

            {/* Content Container */}
            {/* Content Container */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-12 flex flex-col md:flex-row items-center h-screen justify-center">

                {/* Left Content */}
                <div className="w-full md:w-1/2 text-left mb-12 md:mb-0">
                    {/* Pill */}
                    <div className="hero-text-item inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 backdrop-blur-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-medium text-slate-300">Pioneering the Future of Technology</span>
                    </div>

                    {/* Headline */}
                    <h1 className="hero-text-item text-4xl md:text-6xl font-bold leading-tight mb-4 tracking-tight">
                        Transform Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
                            Digital Future
                        </span> <br />
                        With AI & Blockchain
                    </h1>

                    {/* Description */}
                    <p className="hero-text-item text-base md:text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
                        We engineer cutting-edge solutions that bridge innovation and business reality.
                        From intelligent automation to decentralized systems, we build the technology
                        that drives tomorrow's enterprises.
                    </p>

                    {/* Buttons */}
                    <div className="hero-text-item flex flex-col sm:flex-row gap-4 mb-10">
                        <button className="group relative px-8 py-4 bg-blue-600 rounded-full font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:-translate-y-1 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-100 transition-opacity" />
                            <span className="relative flex items-center gap-2">
                                Start Your Project
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </span>
                        </button>

                        <button className="group px-8 py-4 rounded-full font-semibold text-white border border-slate-600 hover:bg-slate-800/50 transition-all hover:-translate-y-1 backdrop-blur-sm flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-white transition-colors"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                            View Our Work
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="hero-text-item grid grid-cols-3 gap-8 border-t border-slate-800 pt-6">
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">150+</div>
                            <div className="text-xs text-slate-500 font-medium">Projects Delivered</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">50+</div>
                            <div className="text-xs text-slate-500 font-medium">Enterprise Clients</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">99%</div>
                            <div className="text-xs text-slate-500 font-medium">Client Satisfaction</div>
                        </div>
                    </div>
                </div>

                {/* Right Visual (Globe/Network Representation) */}
                <div className="hero-visual w-full md:w-1/2 h-[500px] relative mt-12 md:mt-0 flex items-center justify-center perspective-1000">
                    {/* Abstract Globe/Network Visual using CSS/SVG */}
                    <div className="relative w-80 h-80 md:w-96 md:h-96 animate-float-slow">
                        {/* Core Gradient Orb */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-3xl" />

                        {/* Wireframe Globe SVG */}
                        <svg viewBox="0 0 200 200" className="w-full h-full opacity-60 animate-spin-slow" style={{ animationDuration: '60s' }}>
                            <defs>
                                <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                                    <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                            <circle cx="100" cy="100" r="95" fill="url(#globeGrad)" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.3" />
                            {/* Longitudes */}
                            <ellipse cx="100" cy="100" rx="40" ry="95" fill="none" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.2" />
                            <ellipse cx="100" cy="100" rx="70" ry="95" fill="none" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.2" />
                            <line x1="100" y1="5" x2="100" y2="195" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.4" />

                            {/* Latitudes */}
                            <ellipse cx="100" cy="100" rx="95" ry="40" fill="none" stroke="#c084fc" strokeWidth="0.5" strokeOpacity="0.2" />
                            <ellipse cx="100" cy="100" rx="95" ry="70" fill="none" stroke="#c084fc" strokeWidth="0.5" strokeOpacity="0.2" />
                            <line x1="5" y1="100" x2="195" y2="100" stroke="#c084fc" strokeWidth="0.5" strokeOpacity="0.4" />

                            {/* Nodes */}
                            <circle cx="140" cy="60" r="2" fill="#60a5fa" className="animate-pulse" />
                            <circle cx="60" cy="140" r="2" fill="#c084fc" className="animate-pulse" style={{ animationDelay: '1s' }} />
                            <circle cx="170" cy="100" r="1.5" fill="#fff" className="animate-pulse" style={{ animationDelay: '2s' }} />
                        </svg>

                        {/* Floating Elements */}
                        <div className="absolute top-1/4 -right-4 p-4 bg-slate-800/80 backdrop-blur-md rounded-xl border border-slate-700 shadow-2xl animate-float" style={{ animationDelay: '-2s' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400">Global Reach</div>
                                    <div className="text-sm font-bold text-white">24/7 Active</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-1/4 -left-8 p-4 bg-slate-800/80 backdrop-blur-md rounded-xl border border-slate-700 shadow-2xl animate-float" style={{ animationDelay: '1.5s' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400">System Status</div>
                                    <div className="text-sm font-bold text-green-400">Optimal</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
});

export default Hero;
