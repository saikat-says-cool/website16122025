const Booking = () => {
    return (
        <div className="min-h-screen pt-32 px-6 md:px-12 max-w-5xl mx-auto animate-fade-in pb-20 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl mb-4 text-center">Infrastructure Consultation</h2>
            <p className="font-tech text-gray-600 mb-8 max-w-2xl text-center">
                Book a 15-minute diagnostic call. We will review your current pipeline, discuss your ICP, and determine if our infrastructure is a fit for your firm.
            </p>

            <div className="w-full h-[600px] sketch-box bg-white overflow-hidden relative">
                <iframe
                    src="https://cal.id/saikat/qualified-security-growth-conversation"
                    className="w-full h-full border-0"
                    title="Book a call with Saikat"
                ></iframe>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
                <div className="p-4 border border-gray-200">
                    <strong className="font-tech text-sm block mb-2">Direct Contact</strong>
                    <a href="mailto:saikat@artificialyze.com" className="text-lg font-hand hover:text-[#2B4C7E]">saikat@artificialyze.com</a>
                </div>
                <div className="p-4 border border-gray-200">
                    <strong className="font-tech text-sm block mb-2">General Inquiries</strong>
                    <a href="mailto:inquiries@artificialyze.com" className="text-lg font-hand hover:text-[#2B4C7E]">inquiries@artificialyze.com</a>
                </div>
            </div>
        </div>
    );
};

export default Booking;
