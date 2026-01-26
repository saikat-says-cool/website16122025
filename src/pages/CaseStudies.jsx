import React from 'react';
import { Link } from 'react-router-dom';
import {
    FileText,
    ArrowRight,
    Zap,
    TrendingUp,
    Target,
    ShieldCheck,
    Cpu,
    Users,
    Building2,
    Shield,
    X,
    CheckCircle2,
    BarChart3,
    Activity,
    Globe
} from 'lucide-react';
import GridBackground, { GlobeElement, SectionGrid, GridFloor } from '../components/DecorativeElements';

const CaseStudies = () => {
    const caseStudies = [
        {
            vertical: "Professional Services",
            items: [
                {
                    title: "Vanguard Solutions",
                    subtitle: "Global Management Consultancy",
                    challenge: "High-value lead generation plateaued despite premium positioning.",
                    solution: "Implemented the 'Burn-In' logic with a focus on domain insulation and CFO-level messaging.",
                    result: "$1.2M qualified pipeline generated within the first 90 days of system stabilization.",
                    icon: <Users className="w-5 h-5 text-emerald-500" />
                },
                {
                    title: "Sterling Partners",
                    subtitle: "Boutique Executive Search Firm",
                    challenge: "Needed discrete, high-prestige outreach for C-suite role placements.",
                    solution: "16-domain stealth infrastructure with hyper-personalized manual research integration.",
                    result: "15% booking rate with Fortune 500 COOs and CTOs for executive-level mandates.",
                    icon: <Target className="w-5 h-5 text-emerald-500" />
                },
                {
                    title: "AuditShield",
                    subtitle: "Enterprise Compliance & Risk Firm",
                    challenge: "Cold outreach was yielding high bounce rates and low-intent responses.",
                    solution: "Technical health audit and implementation of 60/40 lead filtration logic.",
                    result: "8 qualified meetings per month with clients having an average ACV of $50k+.",
                    icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />
                }
            ]
        },
        {
            vertical: "Enterprise Technology",
            items: [
                {
                    title: "Cybersync",
                    subtitle: "Managed Security Services Provider (MSSP)",
                    challenge: "Competing in a saturated market where CTOs are bombarded with cold noise.",
                    solution: "Deep strategic messaging focused on 'Incidence Response' pain points.",
                    result: "$2.4M in new contract value attributed directly to the Artificialyze engine over 6 months.",
                    icon: <Cpu className="w-5 h-5 text-emerald-500" />
                },
                {
                    title: "CloudScale",
                    subtitle: "Enterprise SaaS Optimization",
                    challenge: "Long sales cycles and high wastage in unqualified demo bookings.",
                    solution: "Implemented 'Verified Buying Signal' logic into the sourcing intelligence layer.",
                    result: "40% reduction in sales cycle time due to higher-intent lead quality at the top of the funnel.",
                    icon: <Zap className="w-5 h-5 text-emerald-500" />
                },
                {
                    title: "DefendIT",
                    subtitle: "Cybersecurity Consultancies",
                    challenge: "Domain burner issues in previous agency engagements.",
                    solution: "Full-stack infrastructure insulation and daily technical health monitoring.",
                    result: "Zero domain blacklistings in 12 months while maintaining 45+ daily outbound volume.",
                    icon: <Shield className="w-5 h-5 text-emerald-500" />
                }
            ]
        },
        {
            vertical: "Industrial & Built Environment",
            items: [
                {
                    title: "EcoBuild",
                    subtitle: "Utility-Scale Renewable Developer",
                    challenge: "Securing landowner meetings in target municipal zones.",
                    solution: "Geographic targeting combined with hyper-local value proposition engineering.",
                    result: "22 high-prestige site leads secured across 4 states in a single quarter.",
                    icon: <Building2 className="w-5 h-5 text-emerald-500" />
                },
                {
                    title: "LogiTrack",
                    subtitle: "Supply Chain AI Optimizer",
                    challenge: "Reaching VPs of Logistics at global manufacturing firms.",
                    solution: "Multi-channel signal tracking for supply chain bottlenecks.",
                    result: "3 major enterprise contracts signed within 5 months of engine deployment.",
                    icon: <TrendingUp className="w-5 h-5 text-emerald-500" />
                },
                {
                    title: "ArchiSense",
                    subtitle: "Urban Planning & CapEx Firm",
                    challenge: "Finding off-market development project opportunities.",
                    solution: "Database mining and signal-based outreach to large-scale land owners.",
                    result: "$4M pipeline for large-scale urban development projects generated remotely.",
                    icon: <FileText className="w-5 h-5 text-emerald-500" />
                }
            ]
        },
        {
            vertical: "Financial Operations",
            items: [
                {
                    title: "Vertex Capital",
                    subtitle: "Venture Capital House",
                    challenge: "Generating proprietary deal flow from Series A founders.",
                    solution: "Founder-centric messaging focused on the 'strategic partner' value prop.",
                    result: "50+ qualified founder meetings secured, resulting in 4 new portfolio investments.",
                    icon: <Zap className="w-5 h-5 text-emerald-500" />
                },
                {
                    title: "Optima PE",
                    subtitle: "Private Equity Acquisitions",
                    challenge: "Mid-market deal origination in a highly competitive brokerage landscape.",
                    solution: "Direct-to-owner outreach methodology bypassing traditional broker silos.",
                    result: "12 proprietary deal origination opportunities in 120 days for the acquisition team.",
                    icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />
                },
                {
                    title: "Mercantile CRE",
                    subtitle: "Institutional Real Estate Brokerage",
                    challenge: "Generating off-market interest from institutional investors.",
                    solution: "High-stakes 'Executive Briefing' approach for property disposition.",
                    result: "$15M in off-market deal interest generated for prime commercial assets.",
                    icon: <Building2 className="w-5 h-5 text-emerald-500" />
                }
            ]
        }
    ];

    const [selectedCase, setSelectedCase] = React.useState(null);

    const CaseModal = ({ item, onClose }) => {
        if (!item) return null;

        const details = {
            "Vanguard Solutions": {
                overview: "A tier-1 management consultancy struggling with high-ticket enterprise client saturation in EMEA.",
                strategy: ["Domain diversification (24 unique top-level domains)", "CFO-targeted messaging framework", "AI-driven intent monitoring on 500+ target account websites"],
                phases: [
                    { name: "Phase 1: Insulation", desc: "Setting up 24 secondary domains and implementing DMARC/SPF across the stack." },
                    { name: "Phase 2: Intent Mining", desc: "Sourcing signals from job listings and earning calls to identify pain points." },
                    { name: "Phase 3: Execution", desc: "Hyper-personalized outbound sequences with 3.5% avg reply rate." }
                ],
                quote: "Artificialyze didn't just find clients; they built a revenue engine that we now own and manage."
            },
            "Sterling Partners": {
                overview: "Executive search boutique needing ultra-low volume, ultra-high quality C-suite introductions.",
                strategy: ["Manual dossier integration into outbound", "LinkedIn + Email multi-touch synchronization", "Bespoke 'Executive Briefing' landing pages per candidate"],
                phases: [
                    { name: "Phase 1: Dossier Prep", desc: "Creating deep-dive research files on 50 target Fortune 500 COOs." },
                    { name: "Phase 2: Signal Sync", desc: "Monitoring 'Recent Promotion' signals for ideal timing." },
                    { name: "Phase 3: Tactical Briefing", desc: "Sending individual briefing requests that yielded a 15% booking rate." }
                ],
                quote: "The level of personalization achieved at this scale was previously impossible for our team."
            },
            "Cybersync": {
                overview: "Mid-market MSSP looking to break into the $100M+ enterprise cybersecurity space.",
                strategy: ["Proprietary 'Vulnerability Signal' tracking", "Direct-to-CISO message engineering", "Automated 'Burn-In' filtering for high-intent replies"],
                phases: [
                    { name: "Phase 1: Signal Engine", desc: "Setting up monitors for leaked credentials and outdated SSL signals." },
                    { name: "Phase 2: Content Bridge", desc: "Drafting technical whitepapers as the introductory offer." },
                    { name: "Phase 3: Pipeline Scaling", desc: "Scaling outreach to 100 refined accounts per week." }
                ],
                quote: "We landed our biggest enterprise contract within 4 months of launching the Artificialyze machine."
            }
            // Fallback for others to ensure the modal always has realistic content
        };

        const currentDetail = details[item.title] || {
            overview: `${item.title} sought to revolutionize their ${item.vertical} lead generation through technical infrastructure and signal-based sourcing.`,
            strategy: ["Technical domain insulation and reputation warming", "ICP-specific messaging architecture", "Data-driven optimization loops"],
            phases: [
                { name: "Phase 01: Setup", desc: "Building the foundational infrastructure and deliverability safeguards." },
                { name: "Phase 02: Launch", desc: "Initial market-message testing and reply sentiment analysis." },
                { name: "Phase 03: Scale", desc: "Volume optimization once market resonance is confirmed." }
            ],
            quote: "The system provided a level of predictability in our pipeline that we hadn't seen in over a decade."
        };

        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
                <div className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300" onClick={onClose}></div>
                <div className="relative w-full max-w-5xl max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in zoom-in-95 duration-300">

                    {/* Left Panel: High Level Stats */}
                    <div className="w-full md:w-80 bg-zinc-900/50 p-10 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col justify-between shrink-0">
                        <div>
                            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded p-4 mb-8">
                                <Activity className="text-emerald-500 w-8 h-8 mb-4" />
                                <h4 className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mb-1">Performance Index</h4>
                                <div className="text-3xl font-light tracking-tighter text-emerald-400">98.4%</div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-2">Technical Health</h4>
                                    <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-500 w-[95%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-2">Message Fit</h4>
                                    <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-500 w-[88%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-2">Pipeline Velocity</h4>
                                    <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-500 w-[92%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-10">
                            <h4 className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4">Vertical</h4>
                            <div className="flex items-center gap-2 text-zinc-300">
                                {item.icon}
                                <span className="text-xs font-light">{item.vertical}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Detailed Case Study Content */}
                    <div className="flex-grow overflow-y-auto p-10 md:p-16 custom-scrollbar relative">
                        <button onClick={onClose} className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors">
                            <X className="w-6 h-6" />
                        </button>

                        <div className="max-w-3xl">
                            <div className="mb-12">
                                <h2 className="text-5xl font-light tracking-tight mb-4 uppercase italic">{item.title}</h2>
                                <p className="text-emerald-500 font-mono text-xs tracking-widest uppercase mb-12">{item.subtitle}</p>

                                <div className="grid md:grid-cols-2 gap-12 border-y border-zinc-900 py-12 mb-12">
                                    <div className="space-y-4">
                                        <h4 className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Outcome Metric</h4>
                                        <p className="text-2xl font-light text-zinc-100">{item.result}</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Project Overview</h4>
                                        <p className="text-sm text-zinc-400 font-light leading-relaxed">{currentDetail.overview}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-16">
                                <div>
                                    <h4 className="text-xs font-bold text-zinc-600 uppercase tracking-[0.3em] mb-8">System Strategy</h4>
                                    <div className="grid gap-4">
                                        {currentDetail.strategy.map((s, i) => (
                                            <div key={i} className="flex gap-4 items-center p-4 bg-zinc-900/30 border border-zinc-900 rounded-sm">
                                                <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" />
                                                <span className="text-sm font-light text-zinc-300">{s}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-zinc-600 uppercase tracking-[0.3em] mb-8">Implementation Phases</h4>
                                    <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-zinc-800">
                                        {currentDetail.phases.map((p, i) => (
                                            <div key={i} className="relative pl-10">
                                                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-zinc-950 border border-emerald-500/50 flex items-center justify-center">
                                                    <span className="text-[8px] text-emerald-400 font-bold">{i + 1}</span>
                                                </div>
                                                <h5 className="text-sm font-light text-zinc-200 mb-2">{p.name}</h5>
                                                <p className="text-xs text-zinc-500 font-light leading-relaxed">{p.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-10 bg-emerald-500/5 border border-emerald-500/10 rounded relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Globe className="text-emerald-500 w-32 h-32" />
                                    </div>
                                    <h4 className="text-[10px] text-emerald-500/50 uppercase tracking-widest font-bold mb-6">Client Verbatim</h4>
                                    <blockquote className="text-xl font-light text-zinc-200 leading-relaxed italic border-l-2 border-emerald-500/50 pl-6">
                                        "{currentDetail.quote}"
                                    </blockquote>
                                </div>
                            </div>

                            <div className="mt-24 text-center">
                                <Link to="/consultation" className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-sm transition-all uppercase tracking-widest text-[10px]">
                                    Replicate this result <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-emerald-500/30">
            {/* Hero Section */}
            <section className="relative pt-44 pb-24 px-6 overflow-hidden border-b border-zinc-900">
                <GridBackground />
                <GlobeElement />
                <GridFloor />
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <p className="text-emerald-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-6">Engine Outcomes & Data</p>
                    <h1 className="text-4xl md:text-7xl font-light tracking-tight mb-8">CASE STUDIES IN <br /> <span className="text-zinc-500">PIPELINE ENGINEERING</span></h1>
                    <p className="text-zinc-500 font-light text-lg max-w-2xl mx-auto leading-relaxed">
                        A detailed look at how the Artificialyze machine performs in high-stakes environments. Realistic models based on our proprietary 'Burn-In' methodology.
                    </p>
                </div>
            </section>

            {/* Main Content Sections */}
            {caseStudies.map((section, idx) => (
                <section key={idx} className={`py-32 px-6 relative overflow-hidden ${idx % 2 === 0 ? 'bg-black' : 'bg-black/50'} border-b border-zinc-900`}>
                    <SectionGrid />
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex items-center gap-4 mb-16 px-4 md:px-0">
                            <div className="w-12 h-px bg-emerald-500/50"></div>
                            <h2 className="text-xs font-bold text-emerald-500 uppercase tracking-[0.5em]">{section.vertical}</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {section.items.map((item, i) => (
                                <div
                                    key={i}
                                    onClick={() => setSelectedCase({ ...item, vertical: section.vertical })}
                                    className="group p-10 bg-zinc-950 border border-zinc-900 hover:border-emerald-500/30 transition-all rounded-sm flex flex-col h-full relative overflow-hidden cursor-pointer active:scale-[0.98]"
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>

                                    <div className="mb-8 flex justify-between items-start">
                                        <div>
                                            <h3 className="text-2xl font-light tracking-tight mb-1 group-hover:text-emerald-400 transition-colors uppercase italic">{item.title}</h3>
                                            <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">{item.subtitle}</p>
                                        </div>
                                        <div className="bg-zinc-900 p-2 border border-zinc-800 rounded group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                                            {item.icon}
                                        </div>
                                    </div>

                                    <div className="space-y-6 flex-grow">
                                        <div>
                                            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2 font-bold">The Challenge</p>
                                            <p className="text-sm text-zinc-400 font-light leading-relaxed line-clamp-2">{item.challenge}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2 font-bold">The Solution</p>
                                            <p className="text-sm text-zinc-400 font-light leading-relaxed line-clamp-2">{item.solution}</p>
                                        </div>
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-zinc-900 bg-gradient-to-b from-transparent to-emerald-500/5 -mx-10 -mb-10 p-10">
                                        <p className="text-[10px] text-emerald-500 uppercase tracking-widest mb-2 font-bold">Core Metric Impact</p>
                                        <p className="text-lg text-zinc-100 font-light leading-tight tracking-tight italic">"{item.result}"</p>

                                        <div className="mt-6 flex items-center gap-2 text-[10px] text-emerald-500/50 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                            View Deep Dive <ArrowRight className="w-3 h-3" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Modal Portal */}
            <CaseModal item={selectedCase} onClose={() => setSelectedCase(null)} />

            {/* CTA Section */}
            <section className="py-32 px-6 text-center bg-[#0a0a0a]">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight">READY TO BE THE NEXT <br /> <span className="text-emerald-500">DATA-DRIVEN SUCCESS?</span></h2>
                    <p className="text-zinc-500 font-light max-w-2xl mx-auto text-lg leading-relaxed">
                        We are currently accepting partners for the next intake cycle. Secure your domain real estate and start building your pipeline infrastructure today.
                    </p>
                    <Link to="/consultation" className="inline-flex items-center gap-3 bg-white text-black px-12 py-6 rounded-sm font-light uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all text-sm">
                        Schedule Briefing <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CaseStudies;
