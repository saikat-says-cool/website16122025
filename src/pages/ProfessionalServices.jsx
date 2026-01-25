import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Zap,
    ArrowRight,
    CheckCircle2,
    Users,
    Shield,
    Target,
    TrendingUp,
    Clock,
    Award
} from 'lucide-react';
import GridBackground, { GlobeElement, SectionGrid } from '../components/DecorativeElements';

const ProfessionalServices = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const benefits = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Precision Targeting",
            desc: "We don't blast. We identify the exact decision-makers-CFOs, COOs, and Heads of Compliance-who are actively seeking audit and consulting partners."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Reputation-Safe Outreach",
            desc: "Your firm's credibility is non-negotiable. Our infrastructure ensures 100% deliverability with zero spam flags-protecting your brand in every inbox."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Predictable Pipeline",
            desc: "Stop relying on referrals alone. We engineer a consistent flow of qualified conversations with organizations that need your expertise-now."
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Time-to-Value",
            desc: "While competitors wait 6+ months for SEO or word-of-mouth, you'll have qualified meetings on your calendar within 60 days."
        }
    ];

    const painPoints = [
        "Your best clients came from referrals-but referrals don't scale.",
        "You've tried agencies before. They burned your domain and delivered nothing.",
        "LinkedIn outreach feels spammy and beneath your firm's prestige.",
        "RFPs are a race to the bottom. You want to be sought after, not competing on price."
    ];

    const process = [
        {
            step: "01",
            title: "Strategic Alignment",
            desc: "We map your ideal client profile: industry, company size, titles, and buying signals. This isn't guesswork-it's precision engineering."
        },
        {
            step: "02",
            title: "Infrastructure Build",
            desc: "16+ dedicated domains. DMARC, DKIM, SPF-all configured. Warm-up protocols executed. Your sending reputation is bulletproof before a single email goes out."
        },
        {
            step: "03",
            title: "Message Engineering",
            desc: "Forget templates. We craft messaging that positions you as the obvious choice-rooted in your unique methodology and the specific pains of your target market."
        },
        {
            step: "04",
            title: "Execution & Optimization",
            desc: "We launch, monitor, and refine. Every reply is analyzed. Every meeting is a data point that makes the next campaign sharper."
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
                        <Users className="w-4 h-4" />
                        Professional Services
                    </div>
                    <h1 className="text-4xl md:text-7xl font-light tracking-tight mb-8 leading-[0.95]">
                        STOP WAITING FOR <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                            THE PHONE TO RING.
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                        Management consultants, compliance firms, and executive search partners: <br />
                        <span className="text-zinc-200">Your next enterprise client is waiting. We build the machine that finds them.</span>
                    </p>

                    {/* Client Logos */}
                    <div className="mt-20 pt-10 border-t border-zinc-900/50">
                        <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] mb-10 font-light italic text-center">Trusted by industry-leading firms</p>
                        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-30 grayscale contrast-125">
                            <div className="text-lg font-light tracking-tighter italic">Vanguard Consulting</div>
                            <div className="text-lg font-light tracking-tighter italic">Meridian Audit</div>
                            <div className="text-lg font-light tracking-tighter italic">Apex Executive</div>
                            <div className="text-lg font-light tracking-tighter italic">Summit Strategy</div>
                            <div className="text-lg font-light tracking-tighter italic">Ironclad Compliance</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-20 px-6 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-light mb-12 text-center">
                        <span className="text-zinc-500">Sound familiar?</span>
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
                            There's a better way. <span className="text-emerald-500">A predictable way.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4">Why Artificialyze</p>
                        <h2 className="text-3xl md:text-5xl font-light">THE UNFAIR ADVANTAGE</h2>
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
            <section className="py-24 px-6 bg-zinc-950/50 border-y border-zinc-900 relative overflow-hidden">
                <SectionGrid />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="p-10 border border-zinc-800 bg-zinc-900/40 rounded-sm relative">
                            <div className="text-emerald-500/20 text-6xl font-serif absolute top-4 left-4">“</div>
                            <blockquote className="text-lg text-zinc-300 font-light italic mb-8 relative z-10">
                                "As a boutique consulting firm, we struggled to break into larger enterprise accounts. Artificialyze built an infrastructure that positioned us as a top-tier player. We saw a 4x increase in direct inquiries within the first quarter."
                            </blockquote>
                            <div className="border-t border-zinc-800 pt-6">
                                <p className="text-zinc-100 font-light uppercase tracking-widest text-sm">Julian R. Thorne</p>
                                <p className="text-zinc-600 text-[10px] uppercase tracking-widest">Founder, Vanguard Consulting</p>
                            </div>
                        </div>
                        <div className="p-10 border border-zinc-800 bg-zinc-900/40 rounded-sm relative">
                            <div className="text-emerald-500/20 text-6xl font-serif absolute top-4 left-4">“</div>
                            <blockquote className="text-lg text-zinc-300 font-light italic mb-8 relative z-10">
                                "The message engineering is where they truly shine. They translated our technical audit process into high-level business value that actually resonates with CFOs. No more cold pitches-just meaningful strategic dialogues."
                            </blockquote>
                            <div className="border-t border-zinc-800 pt-6">
                                <p className="text-zinc-100 font-light uppercase tracking-widest text-sm">Elena S. Rodriguez</p>
                                <p className="text-zinc-600 text-[10px] uppercase tracking-widest">Partner, Meridian Audit Group</p>
                            </div>
                        </div>
                        <div className="p-10 border border-zinc-800 bg-zinc-900/40 rounded-sm relative">
                            <div className="text-emerald-500/20 text-6xl font-serif absolute top-4 left-4">“</div>
                            <blockquote className="text-lg text-zinc-300 font-light italic mb-8 relative z-10">
                                "Executive search is all about timing. Artificialyze's systems identified key leadership changes and expansion signals before they became public. It gave us the first-mover advantage we needed to win major mandates."
                            </blockquote>
                            <div className="border-t border-zinc-800 pt-6">
                                <p className="text-zinc-100 font-light uppercase tracking-widest text-sm">Harrison P. Finch</p>
                                <p className="text-zinc-600 text-[10px] uppercase tracking-widest">Managing Director, Apex Executive</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 px-6 bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4">The Process</p>
                        <h2 className="text-3xl md:text-5xl font-light">HOW WE BUILD YOUR MACHINE</h2>
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
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-light mb-8">
                        THE MATH IS <span className="text-emerald-500">SIMPLE.</span>
                    </h2>
                    <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-sm mb-12">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <p className="text-4xl font-light text-emerald-500 mb-2">$50K+</p>
                                <p className="text-zinc-500 text-sm uppercase tracking-widest">Avg. Engagement Value</p>
                            </div>
                            <div>
                                <p className="text-4xl font-light text-emerald-500 mb-2">3-5</p>
                                <p className="text-zinc-500 text-sm uppercase tracking-widest">New Conversations / Month</p>
                            </div>
                            <div>
                                <p className="text-4xl font-light text-emerald-500 mb-2">30%</p>
                                <p className="text-zinc-500 text-sm uppercase tracking-widest">Avg. Close Rate</p>
                            </div>
                        </div>
                        <div className="mt-12 pt-8 border-t border-zinc-800">
                            <p className="text-zinc-400 font-light text-lg">
                                One closed deal pays for an <span className="text-zinc-200">entire year</span> of Artificialyze. <br />
                                <span className="text-emerald-500">What are you waiting for?</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-tight">
                        YOUR COMPETITORS <br />ARE ALREADY MOVING.
                    </h2>
                    <p className="text-zinc-500 mb-12 text-lg font-light">
                        The firms winning new enterprise clients aren't waiting for referrals. <br />
                        They're engineering their pipeline. Join them.
                    </p>
                    <Link to="/consultation" className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-6 rounded-sm font-light uppercase tracking-widest transition-all inline-flex items-center gap-3">
                        Schedule Your Strategy Call <ArrowRight className="w-5 h-5" />
                    </Link>
                    <p className="text-zinc-600 text-sm mt-6 font-light">
                        Limited availability. We only onboard 3 professional services firms per quarter.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default ProfessionalServices;
