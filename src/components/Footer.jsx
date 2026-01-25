import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="bg-black py-16 px-6 border-t border-zinc-900 text-center md:text-left">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 font-light uppercase tracking-[0.3em] gap-12">
                <div className="flex flex-col items-center md:items-start gap-3">
                    <div className="flex items-center gap-2 mb-2">
                        <Logo className="w-6 h-6" />
                        <div className="text-zinc-400 font-bold tracking-tighter text-lg">ARTIFICIALYZE</div>
                    </div>
                    <div>© {new Date().getFullYear()} ARTIFICIALYZE INC.</div>
                    <div className="tracking-[0.2em] normal-case text-zinc-500 italic">Global Presence | HQ: India</div>
                    <div className="tracking-[0.1em] lowercase text-emerald-500/80">inquiries@artificialyze.com</div>
                </div>
                <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 max-w-2xl">
                    <Link to="/" className="hover:text-emerald-500 transition-colors">Home</Link>
                    <Link to="/workflow" className="hover:text-emerald-500 transition-colors">Workflow</Link>
                    <Link to="/professional-services" className="hover:text-emerald-500 transition-colors">Professional Services</Link>
                    <Link to="/enterprise-technology" className="hover:text-emerald-500 transition-colors">Tech</Link>
                    <Link to="/industrial" className="hover:text-emerald-500 transition-colors">Industrial</Link>
                    <Link to="/financial-operations" className="hover:text-emerald-500 transition-colors">Financial</Link>
                    <Link to="/consultation" className="hover:text-emerald-500 transition-colors font-bold text-zinc-400">Consultation</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
