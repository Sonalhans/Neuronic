import React, { useRef, useEffect, useState, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeading from './AnimatedHeading';

gsap.registerPlugin(ScrollTrigger);

const Contact = memo(function Contact() {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        description: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [submitError, setSubmitError] = useState('');

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.contact-left',
                { opacity: 0, x: -40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                        once: true,
                    },
                }
            );
            gsap.fromTo(
                '.contact-right',
                { opacity: 0, x: 40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                        once: true,
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setSubmitError('');

        // TO GET YOUR OWN ACCESS KEY: 
        // 1. Go to https://web3forms.com/
        // 2. Enter sonalhans05@gmail.com and click "Create your Access Key"
        // 3. Paste the key below:
        const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `New Project Inquiry from ${formData.fullName}`,
                    "Full Name": formData.fullName,
                    "Email Address": formData.email,
                    "Company Name": formData.company || "N/A",
                    "Project Type": formData.projectType,
                    "Budget Range": formData.budget || "Not specified",
                    "Project Description": formData.description
                }),
            });

            const result = await response.json();
            if (result.success) {
                setSubmitted(true);
            } else {
                setSubmitError("Failed to send message. Please try again.");
            }
        } catch (error) {
            setSubmitError("An error occurred. Please check your connection.");
            console.error(error);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative pt-32 bg-slate-950 overflow-hidden"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="w-[600px] h-[400px] rounded-full bg-purple-900/10 blur-3xl" />
            </div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-800 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                        <span className="text-xs font-medium text-purple-300 uppercase tracking-widest">
                            Get In Touch
                        </span>
                    </div>

                    <AnimatedHeading
                        tag="h2"
                        className="text-4xl md:text-5xl font-bold text-white mb-5 text-center"
                    >
                        Start Your{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
                            Project Today
                        </span>
                    </AnimatedHeading>

                    <p className="max-w-xl mx-auto text-slate-400 text-base leading-relaxed">
                        Ready to transform your business with cutting-edge technology? Let's discuss
                        your project.
                    </p>
                </div>

                {/* Two-column layout */}
                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* ── Left panel ── */}
                    <div className="contact-left opacity-0 flex flex-col gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">
                                Let's Build Something Amazing
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                Whether you're looking to implement AI solutions, build blockchain
                                applications, or modernize your infrastructure, we're here to help
                                you succeed.
                            </p>
                        </div>

                        {/* Contact info */}
                        <div className="flex flex-col gap-4">
                            <a
                                href="mailto:info@theneuronic.com"
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-11 h-11 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center group-hover:border-purple-600 transition-colors">
                                    {/* email icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-purple-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.8}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest">
                                        Email Us
                                    </p>
                                    <p className="text-sm text-white group-hover:text-purple-300 transition-colors">
                                        info@theneuronic.com
                                    </p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center">
                                    {/* location icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-purple-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.8}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest">
                                        Location
                                    </p>
                                    <p className="text-sm text-white">India</p>
                                </div>
                            </div>
                        </div>

                        {/* Stat badges */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-2xl border border-slate-700/60 bg-slate-800/30 backdrop-blur-sm p-5 text-center">
                                <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                    24/7
                                </p>
                                <p className="text-xs text-slate-500 mt-1">Support Available</p>
                            </div>
                            <div className="rounded-2xl border border-slate-700/60 bg-slate-800/30 backdrop-blur-sm p-5 text-center">
                                <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                    Free
                                </p>
                                <p className="text-xs text-slate-500 mt-1">Consultation</p>
                            </div>
                        </div>
                    </div>

                    {/* ── Right panel — form ── */}
                    <div className="contact-right opacity-0">
                        {submitted ? (
                            <div className="rounded-2xl border border-purple-700/40 bg-slate-800/40 backdrop-blur-sm p-10 flex flex-col items-center text-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl">
                                    ✓
                                </div>
                                <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                                <p className="text-slate-400 text-sm">
                                    Thank you for reaching out. We'll get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="rounded-2xl border border-slate-700/60 bg-slate-800/30 backdrop-blur-sm p-8 flex flex-col gap-5"
                            >
                                {/* Row 1 */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs text-slate-400 font-medium">
                                            Full Name <span className="text-purple-400">*</span>
                                        </label>
                                        <input
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                            className="rounded-xl bg-slate-900/60 border border-slate-700/50 focus:border-purple-600 outline-none px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs text-slate-400 font-medium">
                                            Email Address <span className="text-purple-400">*</span>
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@company.com"
                                            className="rounded-xl bg-slate-900/60 border border-slate-700/50 focus:border-purple-600 outline-none px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs text-slate-400 font-medium">
                                            Company Name
                                        </label>
                                        <input
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Your Company"
                                            className="rounded-xl bg-slate-900/60 border border-slate-700/50 focus:border-purple-600 outline-none px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs text-slate-400 font-medium">
                                            Project Type <span className="text-purple-400">*</span>
                                        </label>
                                        <select
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleChange}
                                            required
                                            className="rounded-xl bg-slate-900/60 border border-slate-700/50 focus:border-purple-600 outline-none px-4 py-3 text-sm text-white transition-colors appearance-none"
                                        >
                                            <option value="" disabled>
                                                Select project type
                                            </option>
                                            <option value="ai">AI / ML Solution</option>
                                            <option value="blockchain">Blockchain App</option>
                                            <option value="cloud">Cloud Infrastructure</option>
                                            <option value="web">Web Application</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Budget */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs text-slate-400 font-medium">
                                        Budget Range
                                    </label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="rounded-xl bg-slate-900/60 border border-slate-700/50 focus:border-purple-600 outline-none px-4 py-3 text-sm text-white transition-colors appearance-none"
                                    >
                                        <option value="">Select budget range (optional)</option>
                                        <option value="<1L">Under ₹1 Lakh</option>
                                        <option value="1-5L">₹1L – ₹5L</option>
                                        <option value="5-20L">₹5L – ₹20L</option>
                                        <option value="20-50L">₹20L – ₹50L</option>
                                        <option value="50L+">₹50L+</option>
                                    </select>
                                </div>

                                {/* Description */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs text-slate-400 font-medium">
                                        Project Description <span className="text-purple-400">*</span>
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell us about your project, goals, and timeline…"
                                        className="rounded-xl bg-slate-900/60 border border-slate-700/50 focus:border-purple-600 outline-none px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors resize-none"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className={`w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-purple-500/30 flex items-center justify-center gap-2 ${isSending ? 'opacity-70 cursor-not-allowed' : ''
                                        }`}
                                >
                                    {isSending ? 'Sending...' : 'Send Message'}
                                    {!isSending && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                            />
                                        </svg>
                                    )}
                                </button>

                                {submitError && (
                                    <p className="text-red-400 text-xs text-center">{submitError}</p>
                                )}

                                <p className="text-center text-xs text-slate-600">
                                    By submitting this form, you agree to our{' '}
                                    <span className="text-slate-500 underline cursor-pointer">
                                        Privacy Policy
                                    </span>{' '}
                                    and{' '}
                                    <span className="text-slate-500 underline cursor-pointer">
                                        Terms of Service
                                    </span>
                                    .
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer Strip */}
            <div className="border-t border-slate-800/60 mt-24">
                <div className="container mx-auto px-6 pt-8 pb-4 max-w-6xl flex flex-col gap-6 relative z-10">

                    {/* Top Row: Copyright & Legal */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Copyright */}
                        <p className="text-slate-400 text-sm">
                            2024 Neuronic. All rights reserved.
                        </p>

                        {/* Legal Links */}
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                        </div>
                    </div>

                    {/* Bottom Row: Logo & Brand */}
                    <div className="flex items-center justify-center gap-3 opacity-60 hover:opacity-100 transition-opacity pb-1">
                        <img src="/N.webp" alt="Neuronic Logo" className="w-10 h-10 object-contain" />
                        <span className="text-2xl font-medium tracking-[0.2em] text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                            NEURONIC
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
});

export default Contact;
