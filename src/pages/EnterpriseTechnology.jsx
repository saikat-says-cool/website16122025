import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Zap,
    ArrowRight,
    CheckCircle2,
    Cpu,
    Shield,
    Target,
    TrendingUp,
    Lock,
    AlertTriangle,
    Server
} from 'lucide-react';
import GridBackground, { GlobeElement } from '../components/DecorativeElements';

const EnterpriseTechnology = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const benefits = [
        {
            icon: <Lock className="w-6 h-6" />,
            title: "Security-First Positioning",
            desc: "Your prospects are paranoid-and they should be. We position you as the trusted advisor, not another vendor pitching features. Every touchpoint reinforces your authority."
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "CISO-Level Access",
            desc: "Forget gatekeepers. Our targeting identifies the CISOs, VPs of Security, and IT Directors who are actively evaluating solutions-right now, this quarter."
        },
        {
            icon: <AlertTriangle className="w-6 h-6" />,
            title: "Urgency Without Desperation",
            desc: "Cybersecurity sells on fear and trust. We craft messaging that creates urgency around real threats while positioning your firm as the calm, competent solution."
        },
        {
            icon: <Server className="w-6 h-6" />,
            title: "Technical Credibility",
            desc: "Generic sales emails get deleted. We engineer outreach that speaks the language of your prospects-frameworks, compliance requirements, and technical depth."
        }
    ];

    const painPoints = [
        "Your sales team is stuck chasing tire-kickers who 'might have budget next year.'",
        "Channel partners deliver volume, but the leads are garbage.",
        "Your ACV justifies outbound, but your team doesn't have the infrastructure to do it right.",
        "You've seen competitors with worse tech win deals because they got there first."
    ];

    const niches = [
        { title: "MSSPs", desc: "Managed Security Service Providers drowning in noise need qualified enterprise accounts-not SMBs who churn in 6 months." },
        { title: "Penetration Testing", desc: "Your assessments are world-class. Your pipeline shouldn't depend on hope and conferences." },
        { title: "Compliance & GRC", desc: "SOC 2, ISO 27001, HIPAA-the demand is exploding. We help you capture it." },
        { title: "Security Consultancies", desc: "vCISO services, security architecture, incident response-we find the enterprises that need you yesterday." }
    ];

    const process = [
        {
            step: "01",
            title: "Threat Landscape Mapping",
            desc: "We identify organizations in your ICP experiencing the exact pain points your solution addresses-recent breaches, compliance deadlines, or M&A activity."
        },
        {
            step: "02",
            title: "Infrastructure Fortification",
            desc: "16+ dedicated sending domains. Pristine reputation. Your outreach lands in the inbox, not spam-essential when targeting security-conscious prospects."
        },
        {
            step: "03",
            title: "Authority Messaging",
            desc: "We craft sequences that establish you as a thought leader first, vendor second. No 'just checking in'-only value-driven touchpoints."
        },
        {
            step: "04",
            title: "Continuous Threat Intelligence",
            desc: "We monitor for buying signals: new funding rounds, compliance deadlines, executive hires. When opportunity strikes, you're first in the inbox."
        }
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-emerald-500/30">

            {/* Hero Section */}
            <section className="relative pt-44 pb-24 px-6 overflow-hidden">
                <GridBackground />
                <GlobeElement />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl opacity-30 pointer-events-none"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-[10px] font-light uppercase tracking-[0.2em] mb-8">
                        <Cpu className="w-4 h-4" />
                        Enterprise Technology & Cybersecurity
                    </div>
                    <h1 className="text-4xl md:text-7xl font-light tracking-tight mb-8 leading-[0.95]">
                        THE BEST SECURITY <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                            WON'T SELL ITSELF.
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                        MSSPs, Pentesting Firms, and Cybersecurity Consultancies: <br />
                        <span className="text-zinc-200">Your expertise protects enterprises. We fill your pipeline with them.</span>
                    </p>

                    {/* Client Logos */}
                    <div className="mt-20 pt-10 border-t border-zinc-900/50">
                        <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] mb-10 font-light italic text-center">Trusted by high-growth security firms</p>
                        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-30 grayscale contrast-125">
                            <div className="text-lg font-light tracking-tighter italic">Sentinel Cyber</div>
                            <div className="text-lg font-light tracking-tighter italic">Veritas Ops</div>
                            <div className="text-lg font-light tracking-tighter italic">Blackwood Security</div>
                            <div className="text-lg font-light tracking-tighter italic">Novus Tech</div>
                            <div className="text-lg font-light tracking-tighter italic">IronGate Systems</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-20 px-6 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-light mb-12 text-center">
                        <span className="text-zinc-500">The cybersecurity sales problem:</span>
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
                            Speed wins in security sales. <span className="text-emerald-500">We get you there first.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Niches Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4">Who We Serve</p>
                        <h2 className="text-3xl md:text-5xl font-light">BUILT FOR SECURITY LEADERS</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {niches.map((niche, idx) => (
                            <div key={idx} className="p-8 border border-zinc-800 bg-zinc-900/30 hover:border-emerald-500/50 transition-all rounded-sm">
                                <h3 className="text-xl font-light mb-4 text-emerald-400">{niche.title}</h3>
                                <p className="text-zinc-400 font-light leading-relaxed">{niche.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 px-6 bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4">The Artificialyze Edge</p>
                        <h2 className="text-3xl md:text-5xl font-light">OUTBOUND THAT RESPECTS THE GAME</h2>
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
                                "In the cybersecurity space, trust is your only currency. Artificialyze understood this immediately. They built a system that didn't just 'outreach'-it educated. We've seen a 300% increase in discovery calls with legitimate Enterprise CISOs."
                            </blockquote>
                            <div className="border-t border-zinc-800 pt-6">
                                <p className="text-zinc-100 font-light uppercase tracking-widest text-sm">Alexander K. Voss</p>
                                <p className="text-zinc-600 text-[10px] uppercase tracking-widest">CEO, Sentinel Cyber Group</p>
                            </div>
                        </div>
                        <div className="p-10 border border-zinc-800 bg-zinc-900/40 rounded-sm relative">
                            <div className="text-emerald-500/20 text-6xl font-serif absolute top-4 left-4">“</div>
                            <blockquote className="text-lg text-zinc-300 font-light italic mb-8 relative z-10">
                                "The technical delivery is flawless. We target security-conscious IT directors, so any hint of spam is a death sentence. Their infrastructure is so clean that we maintain a 98% inbox rate even at scale."
                            </blockquote>
                            <div className="border-t border-zinc-800 pt-6">
                                <p className="text-zinc-100 font-light uppercase tracking-widest text-sm">Marcus L. Thorne</p>
                                <p className="text-zinc-600 text-[10px] uppercase tracking-widest">VP Sales, Blackwood Security</p>
                            </div>
                        </div>
                        <div className="p-10 border border-zinc-800 bg-zinc-900/40 rounded-sm relative">
                            <div className="text-emerald-500/20 text-6xl font-serif absolute top-4 left-4">“</div>
                            <blockquote className="text-lg text-zinc-300 font-light italic mb-8 relative z-10">
                                "The speed-to-market is the biggest differentiator. We had our entire machine running and the first C-level meeting on the calendar in under 45 days. They are true engineers, not just another agency."
                            </blockquote>
                            <div className="border-t border-zinc-800 pt-6">
                                <p className="text-zinc-100 font-light uppercase tracking-widest text-sm">Sarah J. Miller</p>
                                <p className="text-zinc-600 text-[10px] uppercase tracking-widest">Head of Partnerships, Novus Tech</p>
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
                        <h2 className="text-3xl md:text-5xl font-light">SECURITY-GRADE PIPELINE ENGINEERING</h2>
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
                        ONE DEAL. <span className="text-emerald-500">ONE YEAR. PAID.</span>
                    </h2>
                    <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-sm mb-12">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <p className="text-4xl font-light text-emerald-500 mb-2">$75K+</p>
                                <p className="text-zinc-500 text-sm uppercase tracking-widest">Avg. Annual Contract</p>
                            </div>
                            <div>
                                <p className="text-4xl font-light text-emerald-500 mb-2">4-8</p>
                                <p className="text-zinc-500 text-sm uppercase tracking-widest">Qualified Meetings / Month</p>
                            </div>
                            <div>
                                <p className="text-4xl font-light text-emerald-500 mb-2">6-12 mo</p>
                                <p className="text-zinc-500 text-sm uppercase tracking-widest">Shorter Sales Cycle</p>
                            </div>
                        </div>
                        <div className="mt-12 pt-8 border-t border-zinc-800">
                            <p className="text-zinc-400 font-light text-lg">
                                Your SOC 2 assessment closes for $40K. Your MSSP retainer is $8K/month. <br />
                                <span className="text-emerald-500">Do the math. Then schedule the call.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 border-t border-zinc-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-tight">
                        BREACHES DON'T WAIT. <br />NEITHER SHOULD YOUR PIPELINE.
                    </h2>
                    <p className="text-zinc-500 mb-12 text-lg font-light">
                        Every day without a predictable pipeline is a day your competitors <br />
                        are closing the deals you should have won.
                    </p>
                    <Link to="/consultation" className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-6 rounded-sm font-light uppercase tracking-widest transition-all inline-flex items-center gap-3">
                        Book Your Briefing <ArrowRight className="w-5 h-5" />
                    </Link>
                    <p className="text-zinc-600 text-sm mt-6 font-light">
                        We work with 2 cybersecurity firms per vertical, per quarter. Exclusivity matters.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default EnterpriseTechnology;
