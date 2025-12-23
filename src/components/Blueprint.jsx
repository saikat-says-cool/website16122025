import { useNavigate } from 'react-router-dom';

const Blueprint = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-32 px-6 md:px-12 max-w-5xl mx-auto animate-fade-in pb-20">
            <h2 className="text-4xl md:text-5xl mb-4">The Technical Specification</h2>
            <p className="font-tech text-gray-600 mb-16 max-w-2xl">
                We don't "do marketing". We install a sales engine. Here is the exact Standard Operating Procedure (SOP) we execute for your firm.
            </p>

            <div className="space-y-0 relative border-l border-black ml-4 md:ml-0">
                {[
                    { step: "01", title: "Target Alignment", desc: "We define your ICP (e.g., Hospital CISOs in Texas) and exclude everyone else. We align on the specific security services you sell (MSSP, Audits, Compliance) to ensure relevance." },
                    { step: "02", title: "Infrastructure Build", desc: "We provision secondary domains (e.g., 'get-yourfirm.com') and implement full DKIM, SPF, and DMARC authentication. This physically isolates your outreach from your corporate domain, ensuring zero risk to your primary email reputation." },
                    { step: "03", title: "Signal Detection", desc: "We don't just buy lists. We scrape for triggers: new Compliance Officer hires, recent funding, M&A news, or new tech stack installations (e.g., companies that just bought SentinelOne)." },
                    { step: "04", title: "Message Engineering", desc: "Peer-to-peer syntax. No marketing fluff. We ask intelligent technical questions that CISOs respect. We A/B test angles like 'Compliance Fear' vs 'Technical Efficiency'." },
                    { step: "05", title: "Controlled Launch", desc: "Low volume (30-50/day). High personalization. We monitor inbox placement like hawks. We use a 14-day warm-up protocol before full volume." },
                    { step: "06", title: "Reply Handling", desc: "We filter the noise. You only get calendar invites from qualified prospects who have a problem. We handle the tire-kickers." },
                    { step: "07", title: "Optimization", desc: "Continuous refinement of targeting and messaging based on positive reply rates, not just open rates." }
                ].map((item, idx) => (
                    <div key={idx} className="relative pl-8 md:pl-12 pb-12 group">
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-[#F5F4F0] border border-black group-last:bg-black"></div>
                        <span className="font-tech text-xs text-gray-500 mb-1 block">PHASE {item.step}</span>
                        <h3 className="text-2xl md:text-3xl mb-2 group-hover:text-[#2B4C7E] transition-colors">{item.title}</h3>
                        <p className="font-tech text-sm md:text-base text-gray-600 max-w-xl leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

            <div className="sketch-box bg-white p-8 mt-12">
                <h3 className="text-xl mb-4 text-red-800">Operational Boundaries: What We Do NOT Do</h3>
                <ul className="list-disc pl-5 font-tech text-sm space-y-2 text-gray-700">
                    <li>We do not send mass blasts (volume is controlled for safety).</li>
                    <li>We do not use generic "lead gen" lists; every prospect is verified.</li>
                    <li>We do not pitch different outcomes per sub-niche; we sell the conversation.</li>
                    <li>We do not lock you into 12-month contracts; our structure is flexible.</li>
                </ul>
            </div>

            <div className="mt-12 text-center">
                <button onClick={() => navigate('/booking')} className="btn-primary">
                    Discuss Implementation
                </button>
            </div>
        </div>
    );
};

export default Blueprint;
