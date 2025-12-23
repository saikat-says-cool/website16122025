import { useNavigate } from 'react-router-dom';
import { CheckCircle } from '@phosphor-icons/react';

const Economics = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-32 px-6 md:px-12 max-w-6xl mx-auto animate-fade-in pb-20">
            <h2 className="text-4xl md:text-5xl mb-12">The Unit Economics</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* The Offer */}
                <div className="sketch-box bg-white p-8 md:p-12 h-fit">
                    <h3 className="text-2xl mb-6 border-b border-gray-200 pb-4">Deployment Costs</h3>

                    <div className="mb-8">
                        <div className="flex justify-between items-baseline mb-2">
                            <span className="font-hand text-xl font-bold">Setup & Infrastructure</span>
                            <span className="font-tech font-bold">$2,000</span>
                        </div>
                        <p className="font-tech text-xs text-gray-500">One-time fee. Covers domain purchase, DNS setup, warm-up, and strategy build. No expectation of results in this phase.</p>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between items-baseline mb-2">
                            <span className="font-hand text-xl font-bold">Managed Operations</span>
                            <span className="font-tech font-bold">$4,000 / mo</span>
                        </div>
                        <p className="font-tech text-xs text-gray-500">Ongoing execution. List building, copywriting, inbox management, optimization.</p>
                    </div>

                    <div className="bg-gray-100 p-4 border border-gray-300 font-tech text-xs mt-8">
                        <strong>Terms:</strong> 2-month minimum commitment to allow for technical warm-up and optimization. Cancel anytime after.
                    </div>

                    <button onClick={() => navigate('/booking')} className="btn-primary w-full mt-8 text-center">
                        Review Commercials
                    </button>
                </div>

                {/* The ROI Logic */}
                <div className="flex flex-col justify-center">
                    <h3 className="text-2xl mb-6">Why This Math Works</h3>
                    <p className="font-hand text-xl italic text-gray-600 mb-8">
                        "One closed deal pays for the service for years."
                    </p>

                    <div className="space-y-8 font-tech text-sm">
                        <div className="flex gap-4">
                            <CheckCircle size={24} className="text-[#2B4C7E] flex-shrink-0" weight="fill" />
                            <div>
                                <strong className="block text-base">Your LTV is High</strong>
                                <p className="text-gray-500 mt-1">An MSSP client is worth $36k–$200k/year. Lifetime value often exceeds $150k. You are selling high-trust, high-ticket services.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <CheckCircle size={24} className="text-[#2B4C7E] flex-shrink-0" weight="fill" />
                            <div>
                                <strong className="block text-base">Your Opportunity Cost is Massive</strong>
                                <p className="text-gray-500 mt-1">An internal SDR costs $6k/mo + tools + management ($8k+ burden). We cost less than half of that and we don't take sick days.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <CheckCircle size={24} className="text-[#2B4C7E] flex-shrink-0" weight="fill" />
                            <div>
                                <strong className="block text-base">The Break-Even Point</strong>
                                <p className="text-gray-500 mt-1">If we book 15 meetings in a quarter and you close just ONE, you are 3x ROI positive on the engagement.</p>
                            </div>
                        </div>

                        <div className="border border-gray-300 p-6 mt-8">
                            <h4 className="font-hand text-lg mb-4">Comparison: Internal vs. Artificialyze</h4>
                            <div className="grid grid-cols-2 gap-4 text-xs">
                                <div className="text-gray-500">INTERNAL SDR</div>
                                <div className="text-[#2B4C7E] font-bold">ARTIFICIALYZE</div>

                                <div>$6,000 - $8,000 / mo</div>
                                <div className="font-bold">$4,000 / mo</div>

                                <div>Requires Management</div>
                                <div className="font-bold">Fully Managed</div>

                                <div>Risk of Burnout</div>
                                <div className="font-bold">Consistent Machine</div>

                                <div>Tools Extra ($500+)</div>
                                <div className="font-bold">All Inclusive</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Economics;
