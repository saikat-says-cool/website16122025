import { useNavigate } from 'react-router-dom';

const CaseStudy = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-32 px-6 md:px-12 max-w-4xl mx-auto animate-fade-in pb-20">
            <div className="border-b border-black pb-4 mb-8 flex justify-between items-end">
                <h2 className="text-4xl md:text-5xl">Project: Texas Health</h2>
                <span className="font-tech text-xs bg-black text-white px-2 py-1">VERIFIED OUTCOME</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="sketch-box bg-white p-6">
                    <span className="block font-tech text-xs text-gray-500 mb-1">CLIENT PROFILE</span>
                    <strong className="text-lg">Mid-Market MSSP</strong>
                    <p className="text-sm mt-2 text-gray-600">Dallas, TX. 42 FTEs. $8M ARR.</p>
                </div>
                <div className="sketch-box bg-white p-6">
                    <span className="block font-tech text-xs text-gray-500 mb-1">THE PROBLEM</span>
                    <strong className="text-lg">Referral Cliff</strong>
                    <p className="text-sm mt-2 text-gray-600">Main channel partner acquired. Pipeline dropped to zero.</p>
                </div>
                <div className="sketch-box bg-white p-6 border-[#2B4C7E] bg-[#2B4C7E]/5">
                    <span className="block font-tech text-xs text-[#2B4C7E] mb-1">THE RESULT (60 DAYS)</span>
                    <strong className="text-lg text-[#2B4C7E]">18x ROI</strong>
                    <p className="text-sm mt-2 text-gray-600">7 Qualified CISO Meetings. 1 Closed Deal ($108k LTV).</p>
                </div>
            </div>

            <div className="prose prose-lg font-hand text-gray-800">
                <p className="mb-6">
                    <strong>The Situation:</strong> David (Founder/CEO) was an ex-CISO who hated sales. He hired two junior SDRs to blast generic emails. The result? 0.2% reply rate and his primary domain got blacklisted.
                </p>

                <div className="my-8">
                    <h4 className="font-hand text-xl mb-4">Metric Comparison</h4>
                    <div className="grid grid-cols-3 border-t border-b border-gray-300 py-4 font-tech text-sm">
                        <div className="text-gray-500">METRIC</div>
                        <div className="text-gray-500">INTERNAL TEAM</div>
                        <div className="text-[#2B4C7E] font-bold">ARTIFICIALYZE</div>

                        <div className="col-span-3 h-px bg-gray-100 my-2"></div>

                        <div>Open Rate</div>
                        <div>18%</div>
                        <div className="font-bold">64%</div>

                        <div className="col-span-3 h-px bg-gray-100 my-2"></div>

                        <div>Reply Rate</div>
                        <div>0.2%</div>
                        <div className="font-bold">7.4%</div>

                        <div className="col-span-3 h-px bg-gray-100 my-2"></div>

                        <div>Positive Sentiment</div>
                        <div>&lt; 10%</div>
                        <div className="font-bold">35%</div>
                    </div>
                </div>

                <p className="mb-4">
                    <strong>The Artificialyze Intervention:</strong>
                </p>
                <ul className="list-disc pl-5 font-tech text-sm text-gray-700 space-y-2 mb-6">
                    <li>We stopped the "spray and pray".</li>
                    <li>Built a target list of Healthcare providers in Texas with specific triggers (Audit deadlines, Compliance Officer hires).</li>
                    <li>Changed the hook from "We offer SOC services" to "How to pass your audit without hiring 3 engineers".</li>
                    <li>Implemented a 14-day warm-up protocol on secondary domains.</li>
                </ul>
                <p className="mb-6">
                    <strong>The "Founder-to-Founder" Shift:</strong> We used a peer-to-peer tone. We didn't sound like vendors; we sounded like consultants offering a sanity check. This is crucial for selling to CISOs who can smell a sales pitch from a mile away.
                </p>
                <blockquote className="border-l-4 border-[#2B4C7E] pl-4 italic my-8 text-xl text-gray-600">
                    "My biggest fear was burning our reputation. Artificialyze didn't just get us meetings; they protected our brand. The conversations we're having now are with serious buyers."
                    <footer className="text-sm font-tech not-italic mt-2 text-black">— David, CEO</footer>
                </blockquote>

                <div className="mt-8 text-center">
                    <button onClick={() => navigate('/booking')} className="btn-primary">
                        See If We Fit Your Firm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;
