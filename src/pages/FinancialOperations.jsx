import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Zap,
    ArrowRight,
    Banknote,
    Building,
    BarChart4,
    Briefcase,
    Target,
    ShieldCheck,
    TrendingUp,
    PieChart,
    CheckCircle2
} from 'lucide-react';
import GridBackground, { GlobeElement } from '../components/DecorativeElements';

const FinancialOperations = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const benefits = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Origination at Scale",
            desc: "For PE/VC: We engineer proprietary deal flow by identifying founders and owners showing intent to sell or raise capital-before they hire an investment bank."
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Reputation-Safe Outreach",
            desc: "Financial services is a small world. Our 'Burn-In' logic ensures we never damage your firm's brand with spammy or irrelevant outreach."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "LP & Investor Relations",
            desc: "For funds: We map and engage family offices and institutional allocators who match your investment thesis, creating a qualified pipeline for your next raise."
        },
        {
            icon: <PieChart className="w-6 h-6" />,
            title: "Market Coverage",
            desc: "Ensure you see every relevant deal in the market. Our systems scan for opportunities that fit your exact buy-box criteria."
        }
    ];

    const painPoints = [
        "You're seeing deals too late-after the auction process has already driven up the valuation.",
        "Your associates are burning out on manual cold outreach instead of analyzing deals.",
        "You rely too heavily on the same few intermediaries for deal flow.",
        "Your firm has dry powder but is struggling to deploy it effectively."
    ];

    const niches = [
        { icon: <Banknote className="w-8 h-8" />, title: "Private Equity & VC", desc: "Sourcing proprietary deal flow and add-on acquisitions for portfolio companies." },
        { icon: <Briefcase className="w-8 h-8" />, title: "Investment Banking", desc: "Identifying business owners ready for liquidity events or strategic M&A." },
        { icon: <Building className="w-8 h-8" />, title: "Commercial Real Estate", desc: "Off-market sourcing for acquisitions, debt placement, and net lease opportunities." },
        { icon: <BarChart4 className="w-8 h-8" />, title: "Wealth Management", desc: "Connecting with HNWIs and business owners undergoing liquidity events." }
    ];

    const process = [
        {
            step: "01",
            title: "Thesis Alignment",
            desc: "We decode your investment thesis or buy-box into data signals: EBITDA thresholds, geography, headcount growth, and ownership structure."
        },
        {
            step: "02",
            title: "Proprietary Data Sourcing",
            desc: "We don't just use LinkedIn. We aggregate data from multiple sources to find the contact info of owners who aren't listed on public databases."
        },
        {
            step: "03",
            title: "Executive Engagement",
            desc: "Our messaging isn't 'salesy.' It's peer-to-peer. We approach owners with credible, strategic rationale for a conversation."
        },
        {
            step: "04",
            title: "Deal Qualification",
            desc: "We screen for intent and fit. You only take meetings with owners or LPs who are serious and aligned with your firm's goals."
        }
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-emerald-500/30">

            {/* Hero Section */}
            <section className="relative pt-44 pb-24 px-6 overflow-hidden">
                <GridBackground />
                <GlobeElement />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl opacity-30 pointer-events-none"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-[10px] font-light uppercase tracking-[0.2em] mb-8">
                        <Banknote className="w-4 h-4" />
                        Financial Operations & Capital Markets
                    </div>
                    <h1 className="text-4xl md:text-7xl font-light tracking-tight mb-8 leading-[0.95]">
                        PROPRIETARY DEAL FLOW <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                            ON AUTOPILOT.
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                        Investment Banks, PE/VC Firms, and CRE Groups: <br />
                        <span className="text-zinc-200">Stop waiting for auctions. Start originating off-market opportunities.</span>
                    </p>

                    {/* Client Logos */}
                    <div className="mt-20 pt-10 border-t border-zinc-900/50">
                        <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] mb-10 font-light italic text-center">Trusted by premier financial institutions</p>
                        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-30 grayscale contrast-125">
                            <div className="text-lg font-light tracking-tighter italic">Venture Peak Capital</div>
                            <div className="text-lg font-light tracking-tighter italic">Meridian Partners</div>
                            <div className="text-lg font-light tracking-tighter italic">Summit Equity</div>
                            <div className="text-lg font-light tracking-tighter italic">Apex Investment Bank</div>
                            <div className="text-lg font-light tracking-tighter italic">Ironclad Real Estate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-20 px-6 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-light mb-12 text-center">
                        <span className="text-zinc-500">The sourcing dilemma:</span>
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
                            Don't compete in auctions. <span className="text-emerald-500">Create your own market.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Niches Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4">Capital Markets Scenarios</p>
                        <h2 className="text-3xl md:text-5xl font-light">WHO WE ACCELERATE</h2>
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
                        <p className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4">The Artificialyze Edge</p>
                        <h2 className="text-3xl md:text-5xl font-light">SOURCING AS A SCIENCE</h2>
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
                                "The proprietary deal flow generated by Artificialyze is unmatched. We identified three high-EBITDA acquisition targets in our target niche within the first 60 days-all off-market. It's the ultimate origination engine."
                            </blockquote>
                            <div className="border-t border-zinc-800 pt-6">
                                <p className="text-zinc-100 font-light uppercase tracking-widest text-sm">Marcus V. Sterling</p>
                                <p className="text-zinc-600 text-[10px] uppercase tracking-widest">Managing Partner, Venture Peak Capital</p>
                            </div>
                        </div>
                        <div className="p-10 border border-zinc-800 bg-zinc-900/40 rounded-sm relative">
                            <div className="text-emerald-500/20 text-6xl font-serif absolute top-4 left-4">“</div>
                            <blockquote className="text-lg text-zinc-300 font-light italic mb-8 relative z-10">
                                "Our associates were spending 30% of their time on manual sourcing. Now, they focus entirely on analysis and closing. Artificialyze's system handles the top-of-funnel engagement with peer-level credibility."
                            </blockquote>
                            <div className="border-t border-zinc-800 pt-6">
                                <p className="text-zinc-100 font-light uppercase tracking-widest text-sm">Elena S. Rodriguez</p>
                                <p className="text-zinc-600 text-[10px] uppercase tracking-widest">VP, Meridian Partners</p>
                            </div>
                        </div>
                        <div className="p-10 border border-zinc-800 bg-zinc-900/40 rounded-sm relative">
                            <div className="text-emerald-500/20 text-6xl font-serif absolute top-4 left-4">“</div>
                            <blockquote className="text-lg text-zinc-300 font-light italic mb-8 relative z-10">
                                "In commercial real estate, access is everything. Their outreach system secured us meetings with institutional owners who typically don't respond to cold calls. It's a game-changer for off-market acquisitions."
                            </blockquote>
                            <div className="border-t border-zinc-800 pt-6">
                                <p className="text-zinc-100 font-light uppercase tracking-widest text-sm">Harrison P. Finch</p>
                                <p className="text-zinc-600 text-[10px] uppercase tracking-widest">Director of Acquisitions, Ironclad Real Estate</p>
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
                        <h2 className="text-3xl md:text-5xl font-light">SYSTEMIZING ORIGINATION</h2>
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
                        ONE DEAL. <span className="text-emerald-500">GAME CHANGING ROI.</span>
                    </h2>
                    <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-sm mb-12">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <p className="text-4xl font-light text-emerald-500 mb-2">$5M+</p>
                                <p className="text-zinc-500 text-sm uppercase tracking-widest">Avg. Deal Size</p>
                            </div>
                            <div>
                                <p className="text-4xl font-light text-emerald-500 mb-2">5-10</p>
                                <p className="text-zinc-500 text-sm uppercase tracking-widest">Off-Market Opportunities / Month</p>
                            </div>
                            <div>
                                <p className="text-4xl font-light text-emerald-500 mb-2">100%</p>
                                <p className="text-zinc-500 text-sm uppercase tracking-widest">Proprietary Access</p>
                            </div>
                        </div>
                        <div className="mt-12 pt-8 border-t border-zinc-800">
                            <p className="text-zinc-400 font-light text-lg">
                                The fee you pay us is a rounding error on your next success fee or acquisition. <br />
                                <span className="text-emerald-500">Let's find your next deal.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 border-t border-zinc-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-tight">
                        THE BEST DEALS AREN'T LISTED. <br />THEY'RE ENGINEERED.
                    </h2>
                    <p className="text-zinc-500 mb-12 text-lg font-light">
                        While your competitors fight over auctions, we're building relationships with <br />
                        owners before they ever hit the market.
                    </p>
                    <Link to="/consultation" className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-6 rounded-sm font-light uppercase tracking-widest transition-all inline-flex items-center gap-3">
                        Schedule a Sourcing Strategy Call <ArrowRight className="w-5 h-5" />
                    </Link>
                    <p className="text-zinc-600 text-sm mt-6 font-light">
                        We cap our financial clients to prevent overlap in specific deal criteria.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default FinancialOperations;
