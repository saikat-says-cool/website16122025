import { useNavigate } from 'react-router-dom';
import { CheckCircle } from '@phosphor-icons/react';

const Economics = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-32 px-6 md:px-12 max-w-6xl mx-auto animate-fade-in pb-20">
            <h2 className="text-3xl sm:text-5xl mb-12">The Unit Economics</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* The Offer */}
                <div className="sketch-box bg-white p-6 sm:p-12 h-fit order-2 lg:order-1">
                    <h3 className="text-2xl mb-6 border-b border-gray-200 pb-4 font-hand">Deployment Costs</h3>

                    <div className="mb-8">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-1">
                            <span className="font-hand text-xl font-bold">Setup & Infrastructure</span>
                            <span className="font-tech font-bold text-[#2B4C7E]">$2,000</span>
                        </div>
                        <p className="font-tech text-xs text-gray-500">One-time fee covers domain purchase, DNS setup, warm-up, and strategy build. No expectation of results in this phase.</p>
                    </div>

                    <div className="mb-8">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-1">
                            <span className="font-hand text-xl font-bold">Managed Operations</span>
                            <span className="font-tech font-bold text-[#2B4C7E]">$4,000 / mo</span>
                        </div>
                        <p className="font-tech text-xs text-gray-500">Ongoing execution. List building, copywriting, inbox management, optimization.</p>
                    </div>

                    <div className="bg-gray-100 p-4 border border-gray-300 font-tech text-[10px] sm:text-xs mt-8">
                        <strong>Terms:</strong> 2-month minimum commitment to allow for technical warm-up and optimization. Cancel anytime after.
                    </div>

                    <button onClick={() => navigate('/booking')} className="btn-primary w-full mt-8 text-center text-sm">
                        Review Commercials
                    </button>
                </div>

                {/* The ROI Logic */}
                <div className="flex flex-col justify-center order-1 lg:order-2">
                    <h3 className="text-2xl mb-6">Why This Math Works</h3>
                    <p className="font-hand text-xl italic text-gray-600 mb-8 max-w-lg">
                        "One closed deal pays for the service for years."
                    </p>

                    <div className="space-y-8 font-tech text-sm">
                        <div className="flex gap-4">
                            <CheckCircle size={28} className="text-[#2B4C7E] flex-shrink-0" weight="fill" />
                            <div>
                                <strong className="block text-base">Your LTV is High</strong>
                                <p className="text-gray-500 mt-1 leading-relaxed">An MSSP client is worth $36k–$200k/year. Lifetime value often exceeds $150k. You are selling high-trust, high-ticket services.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <CheckCircle size={28} className="text-[#2B4C7E] flex-shrink-0" weight="fill" />
                            <div>
                                <strong className="block text-base">Your Opportunity Cost is Massive</strong>
                                <p className="text-gray-500 mt-1 leading-relaxed">An internal SDR costs $6k/mo + tools + management ($8k+ burden). We cost less than half of that and we don't take sick days.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <CheckCircle size={28} className="text-[#2B4C7E] flex-shrink-0" weight="fill" />
                            <div>
                                <strong className="block text-base">The Break-Even Point</strong>
                                <p className="text-gray-500 mt-1 leading-relaxed">If we book 15 meetings in a quarter and you close just ONE, you are 3x ROI positive on the engagement.</p>
                            </div>
                        </div>

                        <div className="border border-gray-300 p-6 mt-8 bg-white/50">
                            <h4 className="font-hand text-lg mb-4">Comparison: Internal vs. Artificialyze</h4>
                            <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-[10px] sm:text-xs">
                                <div className="text-gray-400 font-tech uppercase tracking-widest">Internal SDR</div>
                                <div className="text-[#2B4C7E] font-bold font-tech uppercase tracking-widest">Artificialyze</div>

                                <div className="border-t border-gray-200 pt-2">$6,000 - $8,000 / mo</div>
                                <div className="font-bold border-t border-gray-200 pt-2 text-black">$4,000 / mo</div>

                                <div className="border-t border-gray-200 pt-2">Requires Management</div>
                                <div className="font-bold border-t border-gray-200 pt-2 text-black">Fully Managed</div>

                                <div className="border-t border-gray-200 pt-2">Risk of Burnout</div>
                                <div className="font-bold border-t border-gray-200 pt-2 text-black">Consistent Machine</div>

                                <div className="border-t border-gray-200 pt-2">Tools Extra ($500+)</div>
                                <div className="font-bold border-t border-gray-200 pt-2 text-black">All Inclusive</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Economics;
