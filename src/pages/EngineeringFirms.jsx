import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Zap,
    ArrowRight,
    Cpu,
    Settings,
    Beaker,
    Factory,
    Target,
    Activity,
    TrendingUp,
    ShieldCheck
} from 'lucide-react';
import GridBackground, { GlobeElement } from '../components/DecorativeElements';
import { Helmet } from 'react-helmet-async';

const EngineeringFirms = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const benefits = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Technical Decision-Makers",
            desc: "We skip the HR and Procurement gatekeepers. We put your capabilities deck directly in front of the VP of Engineering, CTO, or Plant Manager."
        },
        {
            icon: <Activity className="w-6 h-6" />,
            title: "Spec-In Opportunities",
            desc: "The earlier you get involved, the better. We target firms in the design and feasibility phase, allowing you to get your specs written into the RFP."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Scalable Project Flow",
            desc: "Stop relying on 'word of mouth' and jagged referral cycles. We build a predictable engine that generates technical meetings on a consistent cadence."
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Authority Positioning",
            desc: "Engineering is sold on trust and technical competence. Our messaging frames your firm as the specialized expert, not just another vendor."
        }
    ];

    const painPoints = [
        "You're relying on referrals and repeat business, leaving you vulnerable to market shifts.",
        "Your sales team is technically brilliant but struggles with cold prospecting.",
        "You're getting involved too late in the project cycle, when specs are already locked.",
        "You're losing bids to inferior competitors who simply have better sales engines."
    ];

    const niches = [
        { icon: <Settings className="w-8 h-8" />, title: "Mechanical & Industrial", desc: "HVAC, fluid power, robotics, and heavy machinery design firms." },
        { icon: <Zap className="w-8 h-8" />, title: "Electrical & Electronics", desc: "PCB design, embedded systems, power distribution, and control systems." },
        { icon: <Beaker className="w-8 h-8" />, title: "Chemical & Process", desc: "Process engineering, petrochemical, pharmaceutical, and materials science." },
        { icon: <Factory className="w-8 h-8" />, title: "Production & Manufacturing", desc: "Lean manufacturing consultants, automation integrators, and tooling experts." }
    ];

    const process = [
        {
            step: "01",
            title: "Technical Capabilities Audit",
            desc: "We dive deep into your specific engineering competencies. We understand your 'sweet spot' projects—whether it's high-tolerance machining or complex circuit design."
        },
        {
            step: "02",
            title: "Target Matrix Engineering",
            desc: "We build a precise list of companies that match your ideal client profile, filtered by technology stack, facility size, and capital expenditure history."
        },
        {
            step: "03",
            title: "Technical Messaging",
            desc: "We speak the language of engineers. No fluff. We highlight your certifications, capacities, and past project successes to build instant credibility."
        },
        {
            step: "04",
            title: "Meeting Engineering",
            desc: "We secure discovery calls with technical leaders who have an active need for your expertise. You show up and solve their problem."
        }
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-emerald-500/30">
            <Helmet>
                <title>Engineering Firm Lead Generation | Mechanical, Electrical, Industrial | Artificialyze</title>
                <meta name="description" content="Specialized outbound lead generation for engineering firms. We help Mechanical, Electrical, and Industrial firms secure high-value contracts with technical decision-makers." />
                <meta name="keywords" content="engineering sales, lead gen for engineers, mechanical engineering sales, electrical engineering leads, industrial marketing, b2b engineering services" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative pt-44 pb-24 px-6 overflow-hidden">
                <GridBackground />
                <GlobeElement />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl opacity-30 pointer-events-none"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-[10px] font-light uppercase tracking-[0.2em] mb-8">
                        <Settings className="w-4 h-4" />
                        SPECIALIZED ENGINEERING SERVICES
                    </div>
                    <h1 className="text-4xl md:text-7xl font-light tracking-tight mb-8 leading-[0.95]">
                        PRECISION ENGINEERING NEEDS <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                            PRECISION OUTREACH.
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                        Mechanical. Electrical. Chemical. Industrial. <br />
                        <span className="text-zinc-200">We connect specialized firms with the technical leaders looking for their expertise.</span>
                    </p>

                    {/* Client Logos */}
                    <div className="mt-20 pt-10 border-t border-zinc-900/50">
                        <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] mb-10 font-light italic text-center">Powering growth for technical firms</p>
                        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-30 grayscale contrast-125">
                            <div className="text-lg font-light tracking-tighter italic">Apex Dynamics</div>
                            <div className="text-lg font-light tracking-tighter italic">Flux Systems</div>
                            <div className="text-lg font-light tracking-tighter italic">Core Material Labs</div>
                            <div className="text-lg font-light tracking-tighter italic">Synapse Automation</div>
                            <div className="text-lg font-light tracking-tighter italic">Vector Engineering</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-20 px-6 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-light mb-12 text-center">
                        <span className="text-zinc-500">The engineering sales paradox:</span>
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
                            Great engineering sells itself... <span className="text-emerald-500">but only if the right people know you exist.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Niches Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4">Sectors We Serve</p>
                        <h2 className="text-3xl md:text-5xl font-light">TECHNICAL DISCIPLINES</h2>
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
                        <p className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4">The Artificialyze Advantage</p>
                        <h2 className="text-3xl md:text-5xl font-light">SCALE YOUR EXPERTISE</h2>
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
                                "We design complex motion control systems. It's a niche market. Artificialyze managed to find us 15 specialized OEMs in Europe that we didn't even know existed."
                            </blockquote>
                            <div className="border-t border-zinc-800 pt-6">
                                <p className="text-zinc-100 font-light uppercase tracking-widest text-sm">Dr. Aris K.</p>
                                <p className="text-zinc-600 text-[10px] uppercase tracking-widest">CTO, Apex Dynamics</p>
                            </div>
                        </div>
                        <div className="p-10 border border-zinc-800 bg-zinc-900/40 rounded-sm relative">
                            <div className="text-emerald-500/20 text-6xl font-serif absolute top-4 left-4">“</div>
                            <blockquote className="text-lg text-zinc-300 font-light italic mb-8 relative z-10">
                                "Our biggest problem was getting 'spec'd in' early enough. This system put us in touch with the lead engineers during the R&D phase, effectively locking out our competitors."
                            </blockquote>
                            <div className="border-t border-zinc-800 pt-6">
                                <p className="text-zinc-100 font-light uppercase tracking-widest text-sm">Sarah Jenkins</p>
                                <p className="text-zinc-600 text-[10px] uppercase tracking-widest">VP Sales, Flux Systems</p>
                            </div>
                        </div>
                        <div className="p-10 border border-zinc-800 bg-zinc-900/40 rounded-sm relative">
                            <div className="text-emerald-500/20 text-6xl font-serif absolute top-4 left-4">“</div>
                            <blockquote className="text-lg text-zinc-300 font-light italic mb-8 relative z-10">
                                "Finally, a lead gen partner that understands the difference between a PLC and a PCB. The technical accuracy of their outreach is why we get responses."
                            </blockquote>
                            <div className="border-t border-zinc-800 pt-6">
                                <p className="text-zinc-100 font-light uppercase tracking-widest text-sm">Marcus V.</p>
                                <p className="text-zinc-600 text-[10px] uppercase tracking-widest">Director, Synapse Automation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4">The Methodology</p>
                        <h2 className="text-3xl md:text-5xl font-light">SYSTEMATIC GROWTH</h2>
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

            {/* CTA Section */}
            <section className="py-24 px-6 border-t border-zinc-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-tight">
                        STOP WAITING FOR RFPs. <br />CREATE THEM.
                    </h2>
                    <p className="text-zinc-500 mb-12 text-lg font-light">
                        Technical excellence deserves a sales engine to match. <br />
                        Let's fill your pipeline with high-value engineering contracts.
                    </p>
                    <Link to="/consultation" className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-6 rounded-sm font-light uppercase tracking-widest transition-all inline-flex items-center gap-3">
                        Engineer Your Growth Strategy <ArrowRight className="w-5 h-5" />
                    </Link>
                    <p className="text-zinc-600 text-sm mt-6 font-light">
                        Capacity is limited to ensure technical depth and market exclusivity.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default EngineeringFirms;
