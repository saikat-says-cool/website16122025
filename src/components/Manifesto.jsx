import { useNavigate } from 'react-router-dom';

const Manifesto = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-32 px-6 md:px-12 max-w-3xl mx-auto animate-fade-in flex flex-col justify-center pb-20">
            <h2 className="text-3xl sm:text-5xl mb-10 font-hand tracking-tight">The Anti-Agency Manifesto</h2>

            <div className="space-y-8 text-lg sm:text-2xl font-hand leading-relaxed text-gray-800">
                <p>
                    We believe that <strong className="text-[#2B4C7E]">cybersecurity is sold on trust</strong>, not volume.
                </p>
                <p>
                    We know your daily life: Client escalations at 9 AM, hiring interviews at 11 AM, and the constant, nagging anxiety of an empty pipeline at 4 PM.
                </p>
                <p>
                    We believe that generic "lead generation" destroys more value than it creates for a technical firm. A bad email doesn't just fail to convert; it burns a bridge with a potential CISO buyer forever.
                </p>
                <p>
                    We believe that a founder's time is the most expensive resource in the company, and it should never be spent babysitting a CRM or managing junior SDRs.
                </p>
                <p>
                    We are not here to spam the internet. We are here to build the <strong className="text-black underline decoration-1 underline-offset-4">revenue infrastructure</strong> that allows technical founders to sleep at night, knowing their pipeline is being engineered with the same precision as their code.
                </p>
            </div>

            <div className="mt-16 border-t border-black pt-10">
                <p className="font-tech text-xs sm:text-sm text-gray-500 mb-6 uppercase tracking-widest">Ready to build your infrastructure?</p>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <button onClick={() => navigate('/booking')} className="btn-primary w-full sm:w-auto text-center">
                        Initiate Discussion
                    </button>
                </div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 font-tech text-[10px] sm:text-xs text-gray-400">
                    <div>
                        <span className="block mb-1 uppercase tracking-tighter">General Inquiries</span>
                        <a href="mailto:inquiries@artificialyze.com" className="underline hover:text-black transition-colors">inquiries@artificialyze.com</a>
                    </div>
                    <div>
                        <span className="block mb-1 uppercase tracking-tighter">Direct to Strategy</span>
                        <a href="mailto:saikat@artificialyze.com" className="underline hover:text-black transition-colors">saikat@artificialyze.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manifesto;
