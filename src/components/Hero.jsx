import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center animate-fade-in">
            <div className="inline-block border border-black px-3 py-1 text-xs font-tech uppercase tracking-widest mb-6 w-max">
                Target: MSSPs • Pentesting • Compliance
            </div>

            <h1 className="text-5xl md:text-7xl leading-[1.1] mb-8 max-w-4xl">
                Predictable Revenue <span className="highlight-scribble text-[#2B4C7E]">Infrastructure</span> for Cybersecurity Firms.
            </h1>

            <p className="text-xl md:text-2xl font-hand italic text-gray-700 max-w-2xl mb-10 leading-relaxed">
                Stop relying on the "Referral Cliff". We engineer consistent introductory conversations with technical decision-makers (CISOs, CTOs) without damaging your reputation.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-20">
                <button onClick={() => navigate('/blueprint')} className="btn-primary">
                    See The Blueprint
                </button>
                <button onClick={() => navigate('/casestudy')} className="px-6 py-3 font-tech text-sm border-b border-black hover:bg-gray-200 transition-colors text-left">
                    Read Case Study: Project Texas Health &rarr;
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-300 pt-8">
                <div>
                    <h3 className="text-xl mb-2">The Problem</h3>
                    <p className="font-tech text-sm text-gray-600 leading-relaxed">
                        You are technical. You hate sales fluff. Your referrals are drying up, but you refuse to send spam that hurts your brand. You need a system, not a "growth hack."
                    </p>
                </div>
                <div>
                    <h3 className="text-xl mb-2">The Solution</h3>
                    <p className="font-tech text-sm text-gray-600 leading-relaxed">
                        Not a lead-gen agency. Not a tool. A managed outbound infrastructure that runs silently in the background, utilizing secondary domains to keep your reputation pristine.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl mb-2">The Outcome</h3>
                    <p className="font-tech text-sm text-gray-600 leading-relaxed">
                        2–6 qualified meetings/month with verified decision-makers. Brand safety guaranteed. You focus on delivery; we handle the pipeline engineering.
                    </p>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-dashed border-gray-400">
                <h3 className="text-2xl mb-4 font-hand">The Reality of the Market</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <p className="font-tech text-sm text-gray-600">
                        Most MSSPs and pentesting firms start with a founder's network. It works until you hit $2M-$5M ARR. Then, the network taps out. This is the "Referral Cliff."
                    </p>
                    <p className="font-tech text-sm text-gray-600">
                        At this stage, you have two choices: hire expensive internal SDRs (who often fail due to lack of management) or build an automated infrastructure. We build the infrastructure.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
