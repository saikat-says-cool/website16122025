import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Zap,
    ArrowRight,
    ShieldCheck,
    Building2,
    Users,
    Target,
    MessageSquare,
    Globe,
    Sparkles
} from 'lucide-react';
import GridBackground, { GlobeElement, SectionGrid, GridFloor } from '../components/DecorativeElements';

const Consultation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        website: '',
        role: '',
        dealSize: '',
        challenge: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('https://hook.eu1.make.com/57bjqyr3irpmygxkn9n51mc76eaqi6sh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    website: '',
                    role: '',
                    dealSize: '',
                    challenge: ''
                });
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert("There was an error submitting your request. Please try again or contact us at inquiries@artificialyze.com");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-emerald-500/30">

            {/* Hero Headings */}
            <section className="relative pt-44 pb-12 px-6 overflow-hidden">
                <GridBackground />
                <GlobeElement />
                <GridFloor />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl opacity-30 pointer-events-none"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-emerald-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-6">Securing Next Quarter's Pipeline</p>
                    <h1 className="text-4xl md:text-7xl font-light tracking-tight mb-8">EXECUTIVE <br /> BRIEFING REQUEST</h1>
                    <p className="text-zinc-500 font-light text-lg max-w-2xl mx-auto">
                        We are currently vetting partners for our next intake cycle. Please provide the necessary context so we can prepare a tailored strategy for our briefing.
                    </p>
                </div>
            </section>

            {/* Main Form Section */}
            <section className="pb-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-px bg-zinc-800 border border-zinc-800">

                    {/* Left Panel: Information */}
                    <div className="md:col-span-2 bg-zinc-950 p-10 md:p-12 space-y-12">
                        <div>
                            <h3 className="text-xs font-bold text-zinc-600 uppercase tracking-[0.3em] mb-6">Briefing Focus</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                                    <span className="text-sm font-light text-zinc-400 leading-relaxed">Infrastructure assessment and domain insulation strategies.</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <Target className="w-5 h-5 text-emerald-500 shrink-0" />
                                    <span className="text-sm font-light text-zinc-400 leading-relaxed">ICP selection and buying signal identification.</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <MessageSquare className="w-5 h-5 text-emerald-500 shrink-0" />
                                    <span className="text-sm font-light text-zinc-400 leading-relaxed">Personalization methodology and message engineering.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="pt-8 border-t border-zinc-900">
                            <h3 className="text-xs font-bold text-zinc-600 uppercase tracking-[0.3em] mb-4">Minimum Eligibility</h3>
                            <p className="text-xs text-zinc-500 font-light leading-relaxed italic">
                                - Average Contract Value {'>'} $20,000<br />
                                - B2B Enterprise Focus<br />
                                - Readiness for Outbound Scale
                            </p>
                        </div>

                        <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-sm">
                            <Sparkles className="text-emerald-500 w-5 h-5 mb-4" />
                            <p className="text-xs text-zinc-400 font-light leading-relaxed">
                                Once submitted, our lead strategist will review your application and provide a preliminary feasibility score before the call.
                            </p>
                        </div>
                    </div>

                    {/* Right Panel: The Form */}
                    <div className="md:col-span-3 bg-zinc-950 p-10 md:p-12">
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
                                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                                    <Sparkles className="text-emerald-500 w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-light tracking-tight">BRIEFING RECEIVED</h3>
                                <p className="text-zinc-500 font-light max-w-xs leading-relaxed">
                                    Our lead strategist is reviewing your application. You will receive a feasibility score and calendar link via email within 12 hours.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-emerald-500 text-[10px] uppercase tracking-widest hover:text-white transition-colors pt-8"
                                >
                                    Back to form
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-zinc-900 border border-zinc-800 rounded-sm p-4 text-sm font-light focus:border-emerald-500/50 focus:outline-none transition-all placeholder:text-zinc-700"
                                            placeholder="Marcus V. Sterling"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Work Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-zinc-900 border border-zinc-800 rounded-sm p-4 text-sm font-light focus:border-emerald-500/50 focus:outline-none transition-all placeholder:text-zinc-700"
                                            placeholder="marcus@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Company</label>
                                        <input
                                            type="text"
                                            name="company"
                                            required
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full bg-zinc-900 border border-zinc-800 rounded-sm p-4 text-sm font-light focus:border-emerald-500/50 focus:outline-none transition-all placeholder:text-zinc-700"
                                            placeholder="Vanguard Consulting"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Company Website</label>
                                        <input
                                            type="url"
                                            name="website"
                                            required
                                            value={formData.website}
                                            onChange={handleChange}
                                            className="w-full bg-zinc-900 border border-zinc-800 rounded-sm p-4 text-sm font-light focus:border-emerald-500/50 focus:outline-none transition-all placeholder:text-zinc-700"
                                            placeholder="https://vanguard.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 text-left">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Job Title</label>
                                    <input
                                        type="text"
                                        name="role"
                                        required
                                        value={formData.role}
                                        onChange={handleChange}
                                        className="w-full bg-zinc-900 border border-zinc-800 rounded-sm p-4 text-sm font-light focus:border-emerald-500/50 focus:outline-none transition-all placeholder:text-zinc-700"
                                        placeholder="Managing Partner"
                                    />
                                </div>

                                <div className="space-y-2 text-left">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Average Deal Value (USD)</label>
                                    <select
                                        name="dealSize"
                                        required
                                        value={formData.dealSize}
                                        onChange={handleChange}
                                        className="w-full bg-zinc-900 border border-zinc-800 rounded-sm p-4 text-sm font-light focus:border-emerald-500/50 focus:outline-none transition-all appearance-none text-zinc-400"
                                    >
                                        <option value="">Select range...</option>
                                        <option value="20-50k">$20k - $50k</option>
                                        <option value="50-100k">$50k - $100k</option>
                                        <option value="100-250k">$100k - $250k</option>
                                        <option value="250k+">$250k+</option>
                                    </select>
                                </div>

                                <div className="space-y-2 text-left">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Primary Growth Bottleneck</label>
                                    <textarea
                                        name="challenge"
                                        required
                                        value={formData.challenge}
                                        onChange={handleChange}
                                        className="w-full bg-zinc-900 border border-zinc-800 rounded-sm p-4 text-sm font-light focus:border-emerald-500/50 focus:outline-none transition-all h-32 placeholder:text-zinc-700 resize-none"
                                        placeholder="Tell us about your current acquisition challenges..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className={`w-full ${submitting ? 'bg-zinc-800 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-500'} text-white py-5 rounded-sm font-light uppercase tracking-widest transition-all flex items-center justify-center gap-3`}
                                >
                                    {submitting ? 'ENGINEERING BRIEFING...' : 'Submit Briefing Request'}
                                    {!submitting && <ArrowRight className="w-5 h-5" />}
                                </button>

                                <p className="text-[10px] text-zinc-600 font-light text-center uppercase tracking-widest">
                                    Confidentiality Guaranteed. No third-party data sharing.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Consultation;
