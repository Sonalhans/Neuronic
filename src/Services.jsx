import React, { useEffect, useRef, memo } from 'react';
import AnimatedHeading from "./AnimatedHeading";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = memo(function ServiceCard({ icon, title, description, tags, gradient, index }) {
    return (
        <div className="service-card group relative p-1 rounded-2xl bg-gradient-to-b from-slate-700/50 to-slate-800/30 hover:from-slate-600/50 hover:to-slate-700/30 transition-all duration-300 opacity-0 translate-y-10">
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
            <div className="relative h-full bg-slate-900/90 backdrop-blur-xl rounded-xl p-8 border border-slate-700/50 hover:border-slate-600 transition-colors">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    {icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
})

const Services = memo(function Services() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.expertise-badge',
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        once: true
                    }
                }
            );

            gsap.to('.service-card', {
                opacity: 1,
                y: 0,
                duration: 1.5,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                    once: true
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="services" className="relative py-32 bg-slate-950 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="expertise-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">Our Expertise</span>
                    </div>

                    <AnimatedHeading
                        tag="h2"
                        className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
                    >
                        Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Technology</span> Solutions
                    </AnimatedHeading>

                    <AnimatedHeading
                        tag="p"
                        className="max-w-2xl mx-auto text-slate-400 text-lg text-center"
                        delay={150}
                    >
                        We combine deep technical expertise with strategic thinking to deliver transformative solutions across the digital landscape.
                    </AnimatedHeading>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* AI Card */}
                    <ServiceCard
                        index={0}
                        title="AI Development"
                        description="Harness the power of artificial intelligence with custom neural networks, computer vision systems, and natural language processing solutions."
                        tags={['Neural Networks', 'Computer Vision', 'NLP & LLMs', 'Predictive Analytics']}
                        gradient="from-blue-500 to-cyan-500"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /><path d="M5 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M19 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M5 24a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M19 24a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M12 2v6" /><path d="M12 16v6" /><path d="M5 4l3.5 3.5" /><path d="M19 4l-3.5 3.5" /><path d="M5 20l3.5-3.5" /><path d="M19 20l-3.5-3.5" />
                            </svg>
                        }
                    />

                    {/* Blockchain Card */}
                    <ServiceCard
                        index={1}
                        title="Blockchain & Web3"
                        description="Build decentralized applications, smart contracts, and tokenized ecosystems with enterprise-grade security and scalability."
                        tags={['Smart Contracts', 'DeFi Protocols', 'NFT Platforms', 'Security Audits']}
                        gradient="from-purple-500 to-pink-500"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                            </svg>
                        }
                    />

                    {/* Software Engineering Card */}
                    <ServiceCard
                        index={2}
                        title="Software Engineering"
                        description="Craft scalable, resilient software architectures with modern cloud infrastructure and DevOps excellence."
                        tags={['Cloud Architecture', 'Microservices', 'DevOps Pipelines', 'API Development']}
                        gradient="from-slate-700 to-slate-800"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                        }
                    />

                    {/* Digital Transformation Card */}
                    <ServiceCard
                        index={3}
                        title="Digital Transformation"
                        description="Modernize legacy systems and optimize operations with strategic consulting and cutting-edge technology implementation."
                        tags={['Strategy Design', 'Process Automation', 'Legacy Migration', 'Data Analytics']}
                        gradient="from-orange-500 to-red-500"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>
                            </svg>
                        }
                    />
                </div>
            </div>
        </section>
    );
});

export default Services;
