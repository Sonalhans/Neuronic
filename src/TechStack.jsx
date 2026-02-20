import React, { useEffect, useRef, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeading from './AnimatedHeading';

gsap.registerPlugin(ScrollTrigger);

const techs = [
    { letter: 'A', name: 'AWS', category: 'Cloud', color: '#FF9900' },
    { letter: 'K', name: 'Kubernetes', category: 'Infrastructure', color: '#326CE5' },
    { letter: 'P', name: 'Python', category: 'Language', color: '#3776AB' },
    { letter: 'T', name: 'TensorFlow', category: 'AI/ML', color: '#FF6F00' },
    { letter: 'P', name: 'PyTorch', category: 'AI/ML', color: '#EE4C2C' },
    { letter: 'S', name: 'Solidity', category: 'Blockchain', color: '#627EEA' },
    { letter: 'E', name: 'Ethereum', category: 'Blockchain', color: '#527FE9' },
    { letter: 'R', name: 'React', category: 'Frontend', color: '#61DAFB' },
    { letter: 'N', name: 'Node.js', category: 'Backend', color: '#68A063' },
    { letter: 'P', name: 'PostgreSQL', category: 'Database', color: '#336791' },
    { letter: 'D', name: 'Docker', category: 'DevOps', color: '#2496ED' },
    { letter: 'T', name: 'Terraform', category: 'IaC', color: '#844FBA' },
];

const badges = [
    { label: 'SOC 2', sub: 'Type II Certified', gradient: 'from-blue-400 to-indigo-400' },
    { label: 'ISO 27001', sub: 'Compliant', gradient: 'from-indigo-400 to-purple-400' },
    { label: 'GDPR', sub: 'Ready', gradient: 'from-pink-400 to-rose-400' },
    { label: 'HIPAA', sub: 'Compliant', gradient: 'from-purple-400 to-pink-400' },
];

const TechCard = memo(function TechCard({ letter, name, category, color }) {
    return (
        <div className="tech-card group flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-slate-600 opacity-0 translate-y-8 cursor-default"
            style={{
                transition: 'transform 0.22s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.22s ease, border-color 0.22s ease',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.04)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = '';
            }}
        >
            <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold text-white shadow-lg transition-all duration-200 group-hover:scale-125"
                style={{ background: `linear-gradient(135deg, ${color}33, ${color}66)`, border: `1px solid ${color}44` }}
            >
                <span style={{ color }}>{letter}</span>
            </div>
            <div className="text-center">
                <p className="text-sm font-semibold text-white">{name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{category}</p>
            </div>
        </div>
    );
});

const TechStack = memo(function TechStack() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('.tech-card', {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.07,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 72%',
                    once: true,
                },
            });

            gsap.fromTo(
                '.compliance-bar',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.compliance-bar',
                        start: 'top 85%',
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-32 bg-slate-950 overflow-hidden">
            {/* Subtle background glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="w-[700px] h-[400px] rounded-full bg-indigo-900/10 blur-3xl" />
            </div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-xs font-medium text-blue-300 uppercase tracking-widest">Technology Stack</span>
                    </div>

                    <AnimatedHeading
                        tag="h2"
                        className="text-4xl md:text-5xl font-bold text-white mb-5 text-center"
                    >
                        Built With{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
                            Industry Standards
                        </span>
                    </AnimatedHeading>

                    <p className="max-w-xl mx-auto text-slate-400 text-base leading-relaxed">
                        We leverage cutting-edge technologies and frameworks trusted by the world's
                        leading enterprises.
                    </p>
                </div>

                {/* Tech grid — 6 columns on md, 3 on sm */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-12">
                    {techs.map((tech, i) => (
                        <TechCard key={i} {...tech} />
                    ))}
                </div>

                {/* Compliance badges bar */}
                <div className="compliance-bar mt-8 rounded-2xl border border-slate-700/60 bg-slate-800/30 backdrop-blur-sm px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {badges.map((b, i) => (
                        <div key={i} className="flex flex-col items-center gap-1 text-center">
                            <span
                                className={`text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${b.gradient}`}
                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                                {b.label}
                            </span>
                            <span className="text-xs text-slate-500">{b.sub}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default TechStack;
