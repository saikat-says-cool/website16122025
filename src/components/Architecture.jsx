import { useNavigate } from 'react-router-dom';
import {
    Eye,
    Brain,
    Cpu,
    PaperPlaneTilt,
    ChartLineUp,
    LinkedinLogo,
    Newspaper,
    Database,
    Shield,
    CheckCircle,
    ArrowRight,
    EnvelopeSimple,
    CalendarCheck,
    Repeat,
    Funnel,
    Lightning,
    Target,
    Sparkle
} from '@phosphor-icons/react';

const Architecture = () => {
    const navigate = useNavigate();

    const modules = [
        {
            id: 1,
            icon: Eye,
            name: "Signal Ingestion",
            subtitle: "The 'Eyes'",
            color: "#2B4C7E",
            description: "Most agencies buy static lists. We ingest live data streams to find 'Windows of Opportunity.'",
            inputs: [
                { icon: Database, label: "Technographics", detail: "Scans target domains for specific tech stacks (e.g., 'Company X just installed AWS')" },
                { icon: Target, label: "Hiring Signals", detail: "Monitors job boards for keywords ('Head of Compliance', 'SOC Analyst')" },
                { icon: Newspaper, label: "News & Funding", detail: "API connection to Crunchbase/Google News for funding rounds, mergers, leadership changes" },
                { icon: Shield, label: "Risk Triggers", detail: "Scans for public CVE mentions or industry-specific breach news" }
            ],
            output: "A dynamic 'Active Prospect' queue, not a static Excel sheet."
        },
        {
            id: 2,
            icon: Funnel,
            name: "Relevance Filter",
            subtitle: "The 'Brain' - Part 1",
            color: "#1A1A1A",
            description: "Before writing a single word, the system disqualifies 60% of leads to protect your domain reputation.",
            inputs: [
                { icon: Shield, label: "Anti-Spam Gatekeeper", detail: "If not a decision-maker (CEO, CISO, CTO, VP), they are discarded" },
                { icon: CheckCircle, label: "SMTP Verification", detail: "Real-time validation (ZeroBounce/NeverBounce) ensures <1% bounce rate" },
                { icon: LinkedinLogo, label: "Deep Research Agent", detail: "AI scrapes LinkedIn 'About' section and company blog posts" }
            ],
            output: "Prospect Profile Summary (e.g., 'John focuses on cloud migration; Company recently acquired a competitor')"
        },
        {
            id: 3,
            icon: Brain,
            name: "Generative Reasoning",
            subtitle: "The 'Brain' - Part 2",
            color: "#2B4C7E",
            description: "We do not use templates. We use Logic Chains.",
            inputs: [
                { icon: Lightning, label: "Step 1: The Hook", detail: "Selects the strongest 'Trigger' from Module 1 (e.g., 'Saw you're hiring a SOC Lead')" },
                { icon: ArrowRight, label: "Step 2: The Bridge", detail: "Connects the trigger to your Offer (e.g., 'Hiring is slow; a vCISO bridges the gap')" },
                { icon: CheckCircle, label: "Step 3: The Proof", detail: "Selects the most relevant case study from your database based on prospect's industry" },
                { icon: Target, label: "Step 4: The CTA", detail: "Applies a 'Low Friction' CTA (Interest-based, not Time-based)" }
            ],
            output: "Safety Layer: A secondary AI 'reads' the email. If too salesy or robotic, it forces a rewrite."
        },
        {
            id: 4,
            icon: PaperPlaneTilt,
            name: "Delivery Infrastructure",
            subtitle: "The 'Vehicle'",
            color: "#1A1A1A",
            description: "Cybersecurity clients understand network hygiene. We show them ours is impeccable.",
            inputs: [
                { icon: Repeat, label: "Smart Sender Rotation", detail: "Network of 10+ secondary domains; automated throttling (30-50 emails/inbox/day)" },
                { icon: ChartLineUp, label: "Inbox Warming", detail: "Continuous peer-to-peer engagement network maintains >98% deliverability" },
                { icon: CalendarCheck, label: "Spaced Repetition", detail: "Automated follow-up logic based on 'Silence' vs. 'Out of Office'" }
            ],
            output: "High sender scores. Zero risk to your primary domain."
        },
        {
            id: 5,
            icon: ChartLineUp,
            name: "Sentiment Loop",
            subtitle: "The 'Learning'",
            color: "#2B4C7E",
            description: "The system gets smarter with every reply.",
            inputs: [
                { icon: Sparkle, label: "Reply Classification", detail: "AI tags: Positive (Human), Objection (AI drafts counter), OOTO (Paused), Unsubscribe (Blocked)" },
                { icon: ChartLineUp, label: "A/B Testing Feedback", detail: "Tracks which Trigger caused the reply; auto-reallocates resources to winning signals" }
            ],
            output: "Continuous optimization. Every campaign learns from the last."
        }
    ];

    return (
        <div className="min-h-screen pt-32 px-6 md:px-12 max-w-7xl mx-auto animate-fade-in pb-20">
            {/* Header */}
            <div className="text-center mb-16">
                <div className="inline-block border border-[#2B4C7E] px-4 py-2 text-xs font-tech uppercase tracking-widest mb-6 text-[#2B4C7E]">
                    Proprietary Architecture
                </div>
                <h1 className="text-4xl sm:text-6xl font-hand mb-6">The Artificialyze Neuro-Stack</h1>
                <p className="font-tech text-xl text-gray-600 max-w-2xl mx-auto italic">
                    "We don't send emails. We engineer conversations based on data triggers."
                </p>
            </div>

            {/* Visual Flowchart */}
            <div className="mb-20">
                <div className="sketch-box bg-white p-8 md:p-12">
                    {/* Desktop Flow */}
                    <div className="hidden lg:grid lg:grid-cols-5 gap-4 items-center">
                        {/* Left: Data Sources */}
                        <div className="flex flex-col gap-4 items-center">
                            <div className="text-xs font-tech uppercase tracking-widest text-gray-400 mb-2">Data Sources</div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-2 p-3 border border-gray-200 bg-gray-50">
                                    <LinkedinLogo size={20} className="text-[#0077B5]" weight="fill" />
                                    <span className="font-tech text-xs">LinkedIn</span>
                                </div>
                                <div className="flex items-center gap-2 p-3 border border-gray-200 bg-gray-50">
                                    <Newspaper size={20} className="text-gray-600" weight="fill" />
                                    <span className="font-tech text-xs">News/Funding</span>
                                </div>
                                <div className="flex items-center gap-2 p-3 border border-gray-200 bg-gray-50">
                                    <Database size={20} className="text-[#2B4C7E]" weight="fill" />
                                    <span className="font-tech text-xs">Tech Stack</span>
                                </div>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center">
                            <ArrowRight size={32} className="text-gray-300" />
                        </div>

                        {/* Center: The Core */}
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#2B4C7E] to-[#1A1A1A] flex items-center justify-center shadow-lg">
                                    <Cpu size={48} className="text-white" weight="fill" />
                                </div>
                                <div className="absolute -inset-2 rounded-full border-2 border-[#2B4C7E]/30 animate-pulse"></div>
                            </div>
                            <div className="mt-4 text-center">
                                <div className="font-hand text-lg font-bold">Reasoning Engine</div>
                                <p className="font-tech text-[10px] text-gray-500 mt-1 max-w-[150px]">
                                    Analyzes context, writes copy, verifies validity
                                </p>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center">
                            <ArrowRight size={32} className="text-gray-300" />
                        </div>

                        {/* Right: Outputs */}
                        <div className="flex flex-col gap-4 items-center">
                            <div className="text-xs font-tech uppercase tracking-widest text-gray-400 mb-2">Outputs</div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-2 p-3 border border-[#2B4C7E] bg-[#2B4C7E]/5">
                                    <EnvelopeSimple size={20} className="text-[#2B4C7E]" weight="fill" />
                                    <span className="font-tech text-xs font-bold">In-Inbox Delivery</span>
                                </div>
                                <div className="flex items-center gap-2 p-3 border border-[#2B4C7E] bg-[#2B4C7E]/5">
                                    <Repeat size={20} className="text-[#2B4C7E]" weight="fill" />
                                    <span className="font-tech text-xs font-bold">Smart Follow-up</span>
                                </div>
                                <div className="flex items-center gap-2 p-3 border border-black bg-black/5">
                                    <CalendarCheck size={20} className="text-black" weight="fill" />
                                    <span className="font-tech text-xs font-bold">Meeting Booked</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Flow (Vertical) */}
                    <div className="lg:hidden flex flex-col items-center gap-6">
                        <div className="text-xs font-tech uppercase tracking-widest text-gray-400">Data Sources</div>
                        <div className="flex gap-4 flex-wrap justify-center">
                            <div className="flex items-center gap-2 p-3 border border-gray-200 bg-gray-50">
                                <LinkedinLogo size={20} className="text-[#0077B5]" weight="fill" />
                                <span className="font-tech text-xs">LinkedIn</span>
                            </div>
                            <div className="flex items-center gap-2 p-3 border border-gray-200 bg-gray-50">
                                <Newspaper size={20} className="text-gray-600" weight="fill" />
                                <span className="font-tech text-xs">News</span>
                            </div>
                            <div className="flex items-center gap-2 p-3 border border-gray-200 bg-gray-50">
                                <Database size={20} className="text-[#2B4C7E]" weight="fill" />
                                <span className="font-tech text-xs">Tech</span>
                            </div>
                        </div>

                        <ArrowRight size={24} className="text-gray-300 rotate-90" />

                        <div className="relative">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2B4C7E] to-[#1A1A1A] flex items-center justify-center shadow-lg">
                                <Cpu size={36} className="text-white" weight="fill" />
                            </div>
                        </div>
                        <div className="font-hand text-lg font-bold text-center">Reasoning Engine</div>

                        <ArrowRight size={24} className="text-gray-300 rotate-90" />

                        <div className="text-xs font-tech uppercase tracking-widest text-gray-400">Outputs</div>
                        <div className="flex gap-4 flex-wrap justify-center">
                            <div className="flex items-center gap-2 p-3 border border-[#2B4C7E] bg-[#2B4C7E]/5">
                                <EnvelopeSimple size={20} className="text-[#2B4C7E]" weight="fill" />
                                <span className="font-tech text-xs font-bold">Delivery</span>
                            </div>
                            <div className="flex items-center gap-2 p-3 border border-[#2B4C7E] bg-[#2B4C7E]/5">
                                <Repeat size={20} className="text-[#2B4C7E]" weight="fill" />
                                <span className="font-tech text-xs font-bold">Follow-up</span>
                            </div>
                            <div className="flex items-center gap-2 p-3 border border-black bg-black/5">
                                <CalendarCheck size={20} className="text-black" weight="fill" />
                                <span className="font-tech text-xs font-bold">Meeting</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Module Deep Dives */}
            <div className="mb-20">
                <h2 className="text-3xl sm:text-4xl font-hand mb-12 text-center">The Five Modules</h2>

                <div className="space-y-12">
                    {modules.map((module, idx) => (
                        <div key={module.id} className="sketch-box bg-white p-6 md:p-10">
                            {/* Module Header */}
                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                                <div
                                    className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: module.color }}
                                >
                                    <module.icon size={32} className="text-white" weight="fill" />
                                </div>
                                <div>
                                    <div className="font-tech text-xs uppercase tracking-widest text-gray-400 mb-1">
                                        Module {module.id} — {module.subtitle}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-hand">{module.name}</h3>
                                </div>
                            </div>

                            {/* Module Description */}
                            <p className="font-hand text-xl italic text-gray-700 mb-8 max-w-2xl">
                                "{module.description}"
                            </p>

                            {/* Inputs Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {module.inputs.map((input, iIdx) => (
                                    <div key={iIdx} className="flex gap-4 p-4 bg-gray-50 border border-gray-100">
                                        <input.icon size={24} className="text-[#2B4C7E] flex-shrink-0 mt-1" weight="fill" />
                                        <div>
                                            <div className="font-tech text-sm font-bold mb-1">{input.label}</div>
                                            <p className="font-tech text-xs text-gray-600 leading-relaxed">{input.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Output */}
                            <div className="flex items-start gap-4 p-4 bg-[#2B4C7E]/5 border-l-4 border-[#2B4C7E]">
                                <ArrowRight size={20} className="text-[#2B4C7E] flex-shrink-0 mt-0.5" weight="bold" />
                                <div>
                                    <div className="font-tech text-xs uppercase tracking-widest text-[#2B4C7E] mb-1">Output</div>
                                    <p className="font-tech text-sm text-gray-800">{module.output}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Killer Caption */}
            <div className="text-center py-16 border-t border-dashed border-gray-400">
                <blockquote className="font-hand text-2xl sm:text-3xl italic text-gray-800 max-w-4xl mx-auto leading-relaxed mb-8">
                    "Most agencies sell you manual labor. We build you an <span className="text-[#2B4C7E] font-bold">asset</span>. This is the proprietary architecture we install for every Artificialyze client to guarantee a predictable flow of qualified meetings."
                </blockquote>
                <button onClick={() => navigate('/booking')} className="btn-primary">
                    See It In Action
                </button>
            </div>
        </div>
    );
};

export default Architecture;
