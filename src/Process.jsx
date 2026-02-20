import React, { useEffect, useRef, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeading from "./AnimatedHeading";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
    {
        id: 1,
        title: "Discovery",
        description: "Deep dive into your business goals, challenges, and opportunities.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        ),
        color: "bg-blue-500"
    },
    {
        id: 2,
        title: "Planning",
        description: "Strategic roadmap creation with clear milestones and deliverables.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
        ),
        color: "bg-purple-500"
    },
    {
        id: 3,
        title: "Architecture",
        description: "Designing scalable, secure, and future-proof technical foundations.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        ),
        color: "bg-indigo-500"
    },
    {
        id: 4,
        title: "Development",
        description: "Agile implementation with continuous integration and quality checks.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        ),
        color: "bg-blue-600"
    },
    {
        id: 5,
        title: "Testing",
        description: "Rigorous QA processes ensuring reliability and performance.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        ),
        color: "bg-purple-600"
    },
    {
        id: 6,
        title: "Deployment",
        description: "Smooth launches with zero-downtime deployment strategies.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
        ),
        color: "bg-teal-500"
    },
    {
        id: 7,
        title: "Support",
        description: "Ongoing maintenance, optimization, and 24/7 technical support.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
        ),
        color: "bg-blue-400"
    }
];

const Process = memo(function Process() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.process-step',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                        once: true
                    }
                }
            );

            gsap.fromTo('.connector-line',
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 1.5,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                        once: true
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="process" className="relative py-32 bg-slate-900 border-t border-slate-800/50">

            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                        <span className="text-xs font-medium text-slate-300 uppercase tracking-widest">Our Process</span>
                    </div>

                    <AnimatedHeading
                        tag="h2"
                        className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
                    >
                        From Concept to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Launch & Beyond</span>
                    </AnimatedHeading>

                    <p className="max-w-2xl mx-auto text-slate-400 text-lg">
                        A proven methodology that transforms complex challenges into elegant, scalable solutions.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connecting Line - Absolute */}
                    <div className="hidden md:block absolute top-[2.25rem] left-0 w-full h-0.5 bg-slate-800 -z-10">
                        <div className="connector-line w-full h-full bg-gradient-to-r from-blue-500/0 via-purple-500/50 to-blue-500/0 origin-left" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={step.id} className="process-step group flex flex-col items-center text-center relative">

                                {/* Icon Circle */}
                                <div className={`w-18 h-18 rounded-2xl ${step.color} bg-opacity-10 backdrop-blur-sm border border-slate-700 p-4 mb-6 relative z-10 group-hover:bg-opacity-20 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg shadow-blue-500/20`}>
                                    <div className={`p-3 rounded-xl bg-gradient-to-br from-white/10 to-transparent text-white w-full h-full flex items-center justify-center`}>
                                        {step.icon}
                                    </div>

                                    {/* Number Badge */}
                                    <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-slate-400 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-colors">
                                        {step.id}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed text-balance">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Process;
