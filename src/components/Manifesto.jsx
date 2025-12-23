import { useNavigate } from 'react-router-dom';

const Manifesto = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-32 px-6 md:px-12 max-w-3xl mx-auto animate-fade-in flex flex-col justify-center pb-20">
            <h2 className="text-4xl md:text-5xl mb-8">The Anti-Agency Manifesto</h2>
            <div className="space-y-6 text-lg md:text-xl font-hand leading-relaxed text-gray-800">
                <p>
                    We believe that <strong>cybersecurity is sold on trust</strong>, not volume.
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
                    We are not here to spam the internet. We are here to build the <strong>revenue infrastructure</strong> that allows technical founders to sleep at night, knowing their pipeline is being engineered with the same precision as their code.
                </p>
            </div>
            <div className="mt-12 border-t border-black pt-8">
                <p className="font-tech text-sm text-gray-500 mb-4">Ready to build your infrastructure?</p>
                <div className="flex gap-4 items-center">
                    <button onClick={() => navigate('/booking')} className="btn-primary">
                        Initiate Discussion
                    </button>
                </div>

                <div className="mt-12 font-tech text-xs text-gray-400">
                    <p>General Inquiries: <a href="mailto:inquiries@artificialyze.com" className="underline hover:text-black">inquiries@artificialyze.com</a></p>
                    <p className="mt-2">Direct to Strategy: <a href="mailto:saikat@artificialyze.com" className="underline hover:text-black">saikat@artificialyze.com</a></p>
                </div>
            </div>
        </div>
    );
};

export default Manifesto;
