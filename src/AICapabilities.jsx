import React, { useEffect, useRef, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeading from "./AnimatedHeading";

gsap.registerPlugin(ScrollTrigger);

const DemoCard = memo(function DemoCard({ icon, title, description, tags, gradient, buttonColor, index }) {
    return (
        <div className="demo-card group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 opacity-0 translate-y-10">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} mb-6 shadow-lg flex items-center justify-center`}>
                {icon}
            </div>

            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 h-20">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-900 text-slate-300 border border-slate-700">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex gap-3 mt-auto">
                <button className={`flex-1 py-2.5 px-4 rounded-lg bg-gradient-to-r ${buttonColor} text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    Live Demo
                </button>
                <button className="flex-1 py-2.5 px-4 rounded-lg border border-slate-600 text-slate-300 text-sm font-semibold hover:bg-slate-800 transition-all hover:text-white flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    Code
                </button>
            </div>
        </div>
    );
});

const AICapabilities = memo(function AICapabilities() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('.demo-card', {
                opacity: 1,
                y: 0,
                duration: 0.2,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    once: true
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-32 bg-slate-950 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                        <span className="text-xs font-medium text-blue-300 uppercase tracking-widest">Demo Projects</span>
                    </div>

                    <AnimatedHeading
                        tag="h2"
                        className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
                    >
                        Experience Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">AI Capabilities</span>
                    </AnimatedHeading>

                    <p className="max-w-2xl mx-auto text-slate-400 text-lg">
                        Explore interactive demos showcasing our expertise in generative AI and cutting-edge technology solutions.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Chat Assistant */}
                    <DemoCard
                        index={0}
                        title="AI Chat Assistant"
                        description="A conversational AI powered by GPT-4 with custom knowledge base integration, multi-turn conversations, and context-aware responses."
                        tags={['GPT-4', 'LangChain', 'Vector DB', 'React']}
                        gradient="from-indigo-500 to-purple-500"
                        buttonColor="from-indigo-600 to-purple-600"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" width="24" height="24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                        }
                    />

                    {/* Image Gen Studio */}
                    <DemoCard
                        index={1}
                        title="Image Generation Studio"
                        description="Text-to-image generation platform using Stable Diffusion with style transfer, inpainting, and batch processing capabilities."
                        tags={['Stable Diffusion', 'Python', 'FastAPI', 'Next.js']}
                        gradient="from-blue-500 to-cyan-500"
                        buttonColor="from-blue-600 to-cyan-600"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" width="24" height="24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                            </svg>
                        }
                    />

                    {/* Doc Analyzer */}
                    <DemoCard
                        index={2}
                        title="Intelligent Document Analyzer"
                        description="RAG-powered document analysis tool that extracts insights, summarizes content, and answers questions from uploaded PDFs and documents."
                        tags={['RAG', 'Embeddings', 'Claude', 'TypeScript']}
                        gradient="from-slate-400 to-indigo-400"
                        buttonColor="from-slate-600 to-indigo-600"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 18V5" />
                                <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
                                <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
                                <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
                                <path d="M18 18a4 4 0 0 0 2-7.464" />
                                <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
                                <path d="M6 18a4 4 0 0 1-2-7.464" />
                                <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
                            </svg>
                        }
                    />

                </div>
            </div>
        </section>
    );
});

export default AICapabilities;
