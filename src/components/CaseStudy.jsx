import { useNavigate } from 'react-router-dom';

const CaseStudy = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-32 px-6 md:px-12 max-w-4xl mx-auto animate-fade-in pb-20">
            <div className="border-b border-black pb-4 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
                <h2 className="text-3xl sm:text-5xl">Project: Texas Health</h2>
                <span className="font-tech text-[10px] bg-black text-white px-2 py-1 tracking-widest uppercase">Verified Outcome</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
                <div className="sketch-box bg-white p-6">
                    <span className="block font-tech text-[10px] text-gray-400 mb-1 uppercase tracking-widest">Client Profile</span>
                    <strong className="text-lg font-hand">Mid-Market MSSP</strong>
                    <p className="text-xs mt-2 text-gray-600 font-tech">Dallas, TX. 42 FTEs. $8M ARR.</p>
                </div>
                <div className="sketch-box bg-white p-6">
                    <span className="block font-tech text-[10px] text-gray-400 mb-1 uppercase tracking-widest">The Problem</span>
                    <strong className="text-lg font-hand">Referral Cliff</strong>
                    <p className="text-xs mt-2 text-gray-600 font-tech">Main channel partner acquired. Pipeline dropped to zero.</p>
                </div>
                <div className="sketch-box bg-white p-6 border-[#2B4C7E] bg-[#2B4C7E]/5">
                    <span className="block font-tech text-[10px] text-[#2B4C7E] mb-1 uppercase tracking-widest">Result (60 Days)</span>
                    <strong className="text-lg text-[#2B4C7E] font-hand">18x ROI</strong>
                    <p className="text-xs mt-2 text-gray-600 font-tech">7 Qualified CISO Meetings. 1 Closed Deal ($108k LTV).</p>
                </div>
            </div>

            <div className="font-hand text-lg sm:text-xl text-gray-800 leading-relaxed">
                <p className="mb-6">
                    <strong>The Situation:</strong> David (Founder/CEO) was an ex-CISO who hated sales. He hired two junior SDRs to blast generic emails. The result? 0.2% reply rate and his primary domain got blacklisted.
                </p>

                <div className="my-12">
                    <h4 className="font-hand text-2xl mb-6">Metric Comparison</h4>
                    <div className="grid grid-cols-3 border-t border-b border-gray-300 py-6 font-tech text-[10px] sm:text-sm gap-y-4">
                        <div className="text-gray-400 uppercase tracking-widest">Metric</div>
                        <div className="text-gray-400 uppercase tracking-widest">Internal Team</div>
                        <div className="text-[#2B4C7E] font-bold uppercase tracking-widest">Artificialyze</div>

                        <div className="col-span-3 h-px bg-gray-100"></div>

                        <div className="font-medium">Open Rate</div>
                        <div>18%</div>
                        <div className="font-bold text-black border-l border-gray-100 pl-2">64%</div>

                        <div className="col-span-3 h-px bg-gray-100"></div>

                        <div className="font-medium">Reply Rate</div>
                        <div>0.2%</div>
                        <div className="font-bold text-black border-l border-gray-100 pl-2">7.4%</div>

                        <div className="col-span-3 h-px bg-gray-100"></div>

                        <div className="font-medium">Positive Sentiment</div>
                        <div>&lt; 10%</div>
                        <div className="font-bold text-black border-l border-gray-100 pl-2">35%</div>
                    </div>
                </div>

                <p className="mb-4">
                    <strong>The Artificialyze Intervention:</strong>
                </p>
                <ul className="list-disc pl-5 font-tech text-xs sm:text-sm text-gray-700 space-y-3 mb-8">
                    <li>We stopped the "spray and pray" methodology.</li>
                    <li>Built a target list of Healthcare providers in Texas with specific triggers (Audit deadlines, Compliance Officer hires).</li>
                    <li>Changed the hook from "We offer SOC services" to "How to pass your audit without hiring 3 engineers".</li>
                    <li>Implemented a 14-day warm-up protocol on secondary domains.</li>
                </ul>
                <p className="mb-6">
                    <strong>The "Founder-to-Founder" Shift:</strong> We used a peer-to-peer tone. We didn't sound like vendors; we sounded like consultants offering a sanity check. This is crucial for selling to CISOs who can smell a sales pitch from a mile away.
                </p>
                <blockquote className="border-l-4 border-[#2B4C7E] pl-6 italic my-12 text-xl sm:text-2xl text-gray-600 bg-gray-50/50 py-4">
                    "My biggest fear was burning our reputation. Artificialyze didn't just get us meetings; they protected our brand. The conversations we're having now are with serious buyers."
                    <footer className="text-xs sm:text-sm font-tech not-italic mt-4 text-black uppercase tracking-widest">— David, CEO</footer>
                </blockquote>

                <div className="mt-12 text-center">
                    <button onClick={() => navigate('/booking')} className="btn-primary w-full sm:w-auto">
                        See If We Fit Your Firm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;
