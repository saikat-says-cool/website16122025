import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Zap,
    ArrowRight,
    Shield,
    Cpu,
    Target,
    BarChart3,
    Layers,
    Mail,
    Globe,
    Search,
    Clock,
    CheckCircle2,
    Database,
    LineChart
} from 'lucide-react';
import GridBackground, { GlobeElement, SectionGrid, GridFloor } from '../components/DecorativeElements';

const Workflow = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const layer1Items = [
        "Independent Domain Architecture: We deploy a fleet of secondary domains, isolated from your primary workspace to ensure 100% reputation insulation.",
        "Precision Warm-up Protocol: 21 days of algorithmic ramp-up, engineered to mimic human behavior and maximize inbox placement scores.",
        "Technical Deliverability Audit: Real-time monitoring of DMARC, SPF, and DKIM records across all 48+ sending accounts.",
        "ICP Logic Mapping: Deep-dive identification of your Ideal Client Profile using over 50+ distinct categorization criteria."
    ];

    const layer2Items = [
        "Hybrid Waterfall Sourcing: We scrape gold-mines across the entire web, from niche directories to high-intent signals like podcasts and events.",
        "The 'Golden Lead' Filter: Our 60/40 elimination process ensures we only engage the top 40% of leads that meet our 'pre-intent' criteria.",
        "Hyper-Relevant Personalization: Moving beyond 'company name' tags to deep-context outreach built on actual prospect behavior and firmographics.",
        "Multi-Channel Orchestration: Seamless integration of LinkedIn Sales Navigator, Apollo, and proprietary signal databases."
    ];

    const layer3Items = [
        "Qualified Dialogue Initiation: Transitioning from engagement to high-probability sales conversations with zero manual effort from your team.",
        "Call-Ready Pipeline: Your only task is to show up. We deliver warmed, interested, and qualified decision-makers directly to your calendar.",
        "Performance Visibility: High-level reporting on open rates, response logic, and conversation quality scores.",
        "Executive Dashboards: Custom reporting suites available for leadership to monitor growth velocity in real-time."
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-emerald-500/30">

            {/* Hero Section */}
            <section className="relative pt-44 pb-24 px-6 overflow-hidden">
                <GridBackground />
                <GlobeElement />
                <GridFloor />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl opacity-30 pointer-events-none"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-[10px] font-light uppercase tracking-[0.2em] mb-8">
                        <Layers className="w-4 h-4" />
                        Operational Blueprint
                    </div>
                    <h1 className="text-4xl md:text-7xl font-light tracking-tight mb-8 leading-[0.95]">
                        THE ANATOMY OF <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                            A PERFECT PIPELINE.
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                        A completely hands-free acquisition infrastructure. <br />
                        <span className="text-zinc-200">We engineer the system. You reap the revenue.</span>
                    </p>
                </div>
            </section>

            {/* Core Infrastructure Highlight */}
            <section className="py-24 px-6 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-light mb-6 text-emerald-500 italic uppercase tracking-wider">The Engine Room</h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-8 font-light">
                            Our proprietary outreach infrastructure is built on 48+ independent email accounts, each meticulously warmed and monitored. We don't just send emails; we manage a ecosystem designed for one thing: 100% deliverability.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 border border-zinc-800 bg-zinc-900/30 rounded-sm">
                                <Mail className="text-emerald-500 w-6 h-6 mb-4" />
                                <h4 className="text-sm font-bold uppercase tracking-widest mb-2">48+ Accounts</h4>
                                <p className="text-xs text-zinc-500 font-light">Warmed and ramped for maximum reach.</p>
                            </div>
                            <div className="p-6 border border-zinc-800 bg-zinc-900/30 rounded-sm">
                                <Shield className="text-emerald-500 w-6 h-6 mb-4" />
                                <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Safety First</h4>
                                <p className="text-xs text-zinc-500 font-light">Zero risk to your main company domain.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-8 border border-zinc-800 bg-zinc-900/50 rounded-sm">
                        <div className="flex items-center gap-4 mb-8">
                            <Database className="text-emerald-500 w-6 h-6" />
                            <h3 className="text-xl font-light uppercase tracking-widest">Sourcing Intelligence</h3>
                        </div>
                        <ul className="space-y-4">
                            {["LinkedIn Sales Navigator", "Apollo.io Premium", "Government Rankings & Listings", "Niche Industry Signal Directories", "Podcasts & Event Databases"].map((tool, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-zinc-400 font-light">
                                    <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                                    {tool}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Deep Layer Breakdown */}
            <section className="py-32 px-6 relative overflow-hidden">
                <SectionGrid />
                <div className="max-w-7xl mx-auto space-y-32 relative z-10">

                    {/* Layer 1 */}
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="sticky top-32">
                            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">Phase 01 — Days 1-21</span>
                            <h2 className="text-4xl md:text-5xl font-light mb-8">FOUNDATIONAL <br />SYSTEM HEALTH</h2>
                            <p className="text-zinc-500 font-light text-lg italic">"Protecting the brand while building the ramp."</p>
                        </div>
                        <div className="space-y-6">
                            {layer1Items.map((item, i) => (
                                <div key={i} className="p-8 border border-zinc-900 bg-zinc-950/50 hover:border-emerald-500/30 transition-all rounded-sm group">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-6 h-6 bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-1 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/50 transition-all">
                                            <span className="text-[10px] text-zinc-500 group-hover:text-emerald-400">{i + 1}</span>
                                        </div>
                                        <p className="text-zinc-300 font-light leading-relaxed">{item}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Layer 2 */}
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="space-y-6 order-2 md:order-1">
                            {layer2Items.map((item, i) => (
                                <div key={i} className="p-8 border border-zinc-900 bg-zinc-950/50 hover:border-emerald-500/30 transition-all rounded-sm group">
                                    <div className="flex gap-4 items-start text-right justify-end">
                                        <p className="text-zinc-300 font-light leading-relaxed">{item}</p>
                                        <div className="w-6 h-6 bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-1 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/50 transition-all">
                                            <span className="text-[10px] text-zinc-500 group-hover:text-emerald-400">{i + 1}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="sticky top-32 order-1 md:order-2 md:text-right">
                            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">Phase 02 — Days 21-45</span>
                            <h2 className="text-4xl md:text-5xl font-light mb-8">THE SCIENCE OF <br />ENGAGEMENT</h2>
                            <p className="text-zinc-500 font-light text-lg italic">"Not just noise. Gold-filtered conversations."</p>
                        </div>
                    </div>

                    {/* Layer 3 */}
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="sticky top-32">
                            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">Phase 03 — Day 60+</span>
                            <h2 className="text-4xl md:text-5xl font-light mb-8">REVENUE CALIBRATION <br />& PIPELINE IMPACT</h2>
                            <p className="text-zinc-500 font-light text-lg italic">"Transitioning output to measurable ROI."</p>
                        </div>
                        <div className="space-y-6">
                            {layer3Items.map((item, i) => (
                                <div key={i} className="p-8 border border-zinc-900 bg-zinc-950/50 hover:border-emerald-500/30 transition-all rounded-sm group">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-6 h-6 bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-1 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/50 transition-all">
                                            <span className="text-[10px] text-zinc-500 group-hover:text-emerald-400">{i + 1}</span>
                                        </div>
                                        <p className="text-zinc-300 font-light leading-relaxed">{item}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* Final Outcome Section */}
            <section className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-light mb-8">
                        COMPLETELY <span className="text-emerald-500">HANDS-FREE</span>
                    </h2>
                    <p className="text-lg font-light text-zinc-400 mb-12">
                        We handle the sourcing, the filtering, the technical delivery, and the initial engagement.
                        Your team's involvement is zero until the moment a qualified prospect asks for a meeting.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="p-8 border border-zinc-800 bg-zinc-900/20 text-left">
                            <CheckCircle2 className="text-emerald-500 w-8 h-8 mb-4" />
                            <h4 className="text-lg font-light mb-2">Our Responsibility</h4>
                            <p className="text-sm text-zinc-500 font-light">Technical health, outbound strategy, lead filtration, and personalized outreach.</p>
                        </div>
                        <div className="p-8 border border-zinc-800 bg-zinc-900/20 text-left">
                            <Target className="text-emerald-500 w-8 h-8 mb-4" />
                            <h4 className="text-lg font-light mb-2">Your Responsibility</h4>
                            <p className="text-sm text-zinc-500 font-light">Show up to the meetings, carry the strategic conversation, and close the deal.</p>
                        </div>
                    </div>
                    <Link to="/consultation" className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-6 rounded-sm font-light uppercase tracking-widest transition-all inline-flex items-center gap-3">
                        Request Dashboard Access <ArrowRight className="w-5 h-5" />
                    </Link>
                    <p className="text-zinc-600 text-xs mt-6 font-light uppercase tracking-widest italic">
                        *Custom dashboards are available upon executive request
                    </p>
                </div>
            </section>

        </div>
    );
};

export default Workflow;
