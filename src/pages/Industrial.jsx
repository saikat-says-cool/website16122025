import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Zap,
    ArrowRight,
    Building2,
    Truck,
    Sun,
    HardHat,
    Target,
    Clock,
    TrendingUp,
    Handshake
} from 'lucide-react';
import GridBackground, { GlobeElement } from '../components/DecorativeElements';

const Industrial = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const benefits = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Decision-Maker Direct",
            desc: "We bypass procurement and go straight to the VPs of Operations, Facility Directors, and C-suite executives who approve capital expenditures."
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Project-Cycle Aligned",
            desc: "Industrial sales follow budget cycles and project timelines. We identify organizations in active planning phases-not those locked into 5-year contracts."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "CapEx-Ready Prospects",
            desc: "We target organizations with recent funding, expansion plans, or facility upgrades-the signals that indicate budget availability."
        },
        {
            icon: <Handshake className="w-6 h-6" />,
            title: "Relationship-First Outreach",
            desc: "Industrial deals are built on trust and long-term partnerships. Our outreach establishes credibility before pushing for the meeting."
        }
    ];

    const painPoints = [
        "Your best projects came from relationships built over decades-but you need growth now.",
        "Trade shows cost $50K+ and yield business cards, not contracts.",
        "RFPs are commoditized. You're competing on price instead of value.",
        "Your sales team knows the industry but doesn't have time for prospecting."
    ];

    const niches = [
        { icon: <Building2 className="w-8 h-8" />, title: "Architecture & Planning", desc: "Commercial architects and urban planners serving developers, municipalities, and institutional clients." },
        { icon: <Sun className="w-8 h-8" />, title: "Renewables & Clean Energy", desc: "Solar, wind, and energy storage companies selling to commercial and industrial buyers." },
        { icon: <Truck className="w-8 h-8" />, title: "Logistics & Supply Chain", desc: "3PLs, warehouse operators, and supply chain consultants serving enterprise shippers." },
        { icon: <HardHat className="w-8 h-8" />, title: "Construction & Engineering", desc: "General contractors, MEP firms, and specialized trades serving commercial and industrial markets." }
    ];

    const process = [
        {
            step: "01",
            title: "Market Intelligence",
            desc: "We map your ideal project types, geographies, and decision-makers. Then we identify organizations with active capital plans."
        },
        {
            step: "02",
            title: "Authority Infrastructure",
            desc: "16+ dedicated domains, pristine reputation, and deliverability engineering. Your firm's name reaches the right inbox-every time."
        },
        {
            step: "03",
            title: "Value-Led Messaging",
            desc: "No cold pitches. We lead with insights about their specific challenges-new regulations, expansion bottlenecks, or sustainability mandates."
        },
        {
            step: "04",
            title: "Pipeline Acceleration",
            desc: "We qualify interest, schedule initial conversations, and hand off warm prospects ready for your technical team."
        }
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-emerald-500/30">

            {/* Hero Section */}
            <section className="relative pt-44 pb-24 px-6 overflow-hidden">
                <GridBackground />
                <GlobeElement />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-orange-500/10 to-transparent blur-3xl opacity-30 pointer-events-none"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-[10px] font-light uppercase tracking-[0.2em] mb-8">
                        <Building2 className="w-4 h-4" />
                        Industrial & Built Environment
                    </div>
                    <h1 className="text-4xl md:text-7xl font-light tracking-tight mb-8 leading-[0.95]">
                        BIG PROJECTS NEED <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                            BIG PIPELINES.
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                        Architecture, Renewables, Logistics, and Construction firms: <br />
                        <span className="text-zinc-200">Your next multi-million dollar project is out there. We help you find it.</span>
                    </p>

                    {/* Client Logos */}
                    <div className="mt-20 pt-10 border-t border-zinc-900/50">
                        <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] mb-10 font-light italic text-center">Trusted by world-class industrial firms</p>
                        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-30 grayscale contrast-125">
                            <div className="text-lg font-light tracking-tighter italic">Stellar Architecture</div>
                            <div className="text-lg font-light tracking-tighter italic">Titan Energy</div>
                            <div className="text-lg font-light tracking-tighter italic">Lumina Renewables</div>
                            <div className="text-lg font-light tracking-tighter italic">Vanguard Supply Chain</div>
                            <div className="text-lg font-light tracking-tighter italic">Omega Build</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-20 px-6 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-light mb-12 text-center">
                        <span className="text-zinc-500">The industrial sales reality:</span>
                    </h2>
                    <div className="space-y-6">
                        {painPoints.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-sm">
                                <div className="text-red-400 mt-1">✗</div>
                                <p className="text-zinc-300 text-lg font-light">{point}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-2xl text-zinc-200 font-light">
                            Relationships still matter. <span className="text-emerald-500">We just help you start more of them.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Niches Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4">Industries We Serve</p>
                        <h2 className="text-3xl md:text-5xl font-light">BUILT FOR BUILDERS</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {niches.map((niche, idx) => (
                            <div key={idx} className="p-8 border border-zinc-800 bg-zinc-900/30 hover:border-emerald-500/50 transition-all rounded-sm flex items-start gap-6">
                                <div className="text-emerald-500">{niche.icon}</div>
                                <div>
                                    <h3 className="text-xl font-light mb-3 text-white">{niche.title}</h3>
                                    <p className="text-zinc-400 font-light leading-relaxed">{niche.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 px-6 bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4">The Artificialyze Difference</p>
                        <h2 className="text-3xl md:text-5xl font-light">OUTBOUND FOR THE LONG GAME</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="p-8 border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all group rounded-sm">
                                <div className="text-emerald-500 mb-6">{benefit.icon}</div>
                                <h3 className="text-xl font-light mb-4 group-hover:text-emerald-400 transition-colors">{benefit.title}</h3>
                                <p className="text-zinc-400 font-light leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-6 bg-zinc-950/50 border-y border-zinc-900">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="p-10 border border-zinc-800 bg-zinc-900/40 rounded-sm relative">
                            <div className="text-emerald-500/20 text-6xl font-serif absolute top-4 left-4">“</div>
                            <blockquote className="text-lg text-zinc-300 font-light italic mb-8 relative z-10">
                                "In the built environment, it's all about project visibility. Artificialyze mapped our entire market and identified developers planning Multi-MW solar sites months before the RFPs were issued. It completely shifted our sales strategy."
                            </blockquote>
                            <div className="border-t border-zinc-800 pt-6">
                                <p className="text-zinc-100 font-light uppercase tracking-widest text-sm">Daniel R. Thorne</p>
                                <p className="text-zinc-600 text-[10px] uppercase tracking-widest">VP Operations, Titan Energy</p>
                            </div>
                        </div>
                        <div className="p-10 border border-zinc-800 bg-zinc-900/40 rounded-sm relative">
                            <div className="text-emerald-500/20 text-6xl font-serif absolute top-4 left-4">“</div>
                            <blockquote className="text-lg text-zinc-300 font-light italic mb-8 relative z-10">
                                "Their understanding of the industrial project cycle is impressive. They didn't just 'send emails'-they positioned our engineering expertise to the exact decision-makers who approve the budget for capital projects."
                            </blockquote>
                            <div className="border-t border-zinc-800 pt-6">
                                <p className="text-zinc-100 font-light uppercase tracking-widest text-sm">Elena S. Rodriguez</p>
                                <p className="text-zinc-600 text-[10px] uppercase tracking-widest">Managing Partner, Stellar Architecture</p>
                            </div>
                        </div>
                        <div className="p-10 border border-zinc-800 bg-zinc-900/40 rounded-sm relative">
                            <div className="text-emerald-500/20 text-6xl font-serif absolute top-4 left-4">“</div>
                            <blockquote className="text-lg text-zinc-300 font-light italic mb-8 relative z-10">
                                "The quality of the conversations we're having reflects the quality of their system. We're no longer chasing dead leads; we're in high-level discussions with CEOs of logistics hubs who need our infrastructure setup yesterday."
                            </blockquote>
                            <div className="border-t border-zinc-800 pt-6">
                                <p className="text-zinc-100 font-light uppercase tracking-widest text-sm">Harrison P. Finch</p>
                                <p className="text-zinc-600 text-[10px] uppercase tracking-widest">Founder, Vanguard Supply Chain</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4">The Process</p>
                        <h2 className="text-3xl md:text-5xl font-light">ENGINEERING YOUR PIPELINE</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((item, idx) => (
                            <div key={idx} className="p-8 border border-zinc-800 bg-zinc-900/20 rounded-sm relative">
                                <div className="text-6xl font-light text-zinc-800 absolute top-4 right-4">{item.step}</div>
                                <h3 className="text-lg font-light mb-4 text-emerald-400 relative z-10">{item.title}</h3>
                                <p className="text-zinc-500 text-sm font-light leading-relaxed relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* No Brainer Section */}
            <section className="py-24 px-6 bg-zinc-950">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-light mb-8">
                        ONE PROJECT. <span className="text-emerald-500">INFINITE ROI.</span>
                    </h2>
                    <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-sm mb-12">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <p className="text-4xl font-light text-emerald-500 mb-2">$500K+</p>
                                <p className="text-zinc-500 text-sm uppercase tracking-widest">Avg. Project Value</p>
                            </div>
                            <div>
                                <p className="text-4xl font-light text-emerald-500 mb-2">2-4</p>
                                <p className="text-zinc-500 text-sm uppercase tracking-widest">Qualified Opps / Month</p>
                            </div>
                            <div>
                                <p className="text-4xl font-light text-emerald-500 mb-2">18-24 mo</p>
                                <p className="text-zinc-500 text-sm uppercase tracking-widest">Project Relationships</p>
                            </div>
                        </div>
                        <div className="mt-12 pt-8 border-t border-zinc-800">
                            <p className="text-zinc-400 font-light text-lg">
                                A single commercial project can fund your entire sales operation for years. <br />
                                <span className="text-emerald-500">We help you find more of them.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 border-t border-zinc-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-tight">
                        THE NEXT BIG PROJECT <br />WON'T FIND ITSELF.
                    </h2>
                    <p className="text-zinc-500 mb-12 text-lg font-light">
                        While you're waiting on referrals and RFPs, your competitors are <br />
                        having conversations with your future clients. Let's change that.
                    </p>
                    <Link to="/consultation" className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-6 rounded-sm font-light uppercase tracking-widest transition-all inline-flex items-center gap-3">
                        Schedule Your Strategy Session <ArrowRight className="w-5 h-5" />
                    </Link>
                    <p className="text-zinc-600 text-sm mt-6 font-light">
                        We partner with 2 firms per industrial vertical, per region. Exclusivity ensures results.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default Industrial;
